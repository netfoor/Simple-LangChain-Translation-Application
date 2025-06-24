// Function to show toast messages
function showToast(message, isError = false) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');
    if (isError) toast.classList.add('error');
    
    setTimeout(() => {
        toast.classList.remove('show');
        if (isError) toast.classList.remove('error');
    }, 3000);
}

// Function to get API key from session storage
function getApiKey() {
    return sessionStorage.getItem('translatorApiKey');
}

// Function to validate API key format
function isValidApiKey(key) {
    // Basic validation for Google API key format
    return /^AIza[0-9A-Za-z-_]{35}$/.test(key);
}

// Function to save API key
function saveApiKey() {
    const apiKeyInput = document.getElementById('apiKey');
    const key = apiKeyInput.value.trim();
    
    if (!key) {
        showToast('Please enter a valid API key', true);
        return;
    }

    if (!isValidApiKey(key)) {
        showToast('Invalid API key format. Please check your key.', true);
        return;
    }
    
    try {
        // Save to session storage
        sessionStorage.setItem('translatorApiKey', key);
        
        // Clear the input for security
        apiKeyInput.value = '';
        showToast('API key saved successfully and will be cleared when you close your browser');
        
        // Update the UI to show the API key is active
        apiKeyInput.placeholder = 'API key saved for this session';
    } catch (error) {
        console.error('Error saving API key:', error);
        showToast('Error saving API key. Please try again.', true);
    }
}

// Function to translate text
async function translateText() {
    const apiKey = getApiKey();
    if (!apiKey) {
        showToast('Please save your API key first', true);
        return;
    }

    const inputText = document.getElementById('inputText').value.trim();
    const targetLanguage = document.getElementById('targetLanguage').value;
    const outputText = document.getElementById('outputText');

    if (!inputText) {
        showToast('Please enter text to translate', true);
        return;
    }

    try {
        // Show loading state
        outputText.value = 'Translating...';
        
        // Initialize the model with the API key
        const model = new GoogleGenerativeAI({
            apiKey: apiKey,
            modelName: "gemini-2.0-flash"
        });

        // Create the translation prompt
        const prompt = `Translate the following text from English to ${targetLanguage}: "${inputText}"`;
        
        // Get the translation
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const translation = response.text();

        // Update the output
        outputText.value = translation;
        showToast('Translation completed');

    } catch (error) {
        console.error('Translation error:', error);
        outputText.value = '';
        showToast('Error during translation. Please check your API key and try again.', true);
    }
}
