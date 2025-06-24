// Initialize variables
let apiKey = '';

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

// Function to save API key
function saveApiKey() {
    const apiKeyInput = document.getElementById('apiKey');
    apiKey = apiKeyInput.value.trim();
    
    if (!apiKey) {
        showToast('Please enter a valid API key', true);
        return;
    }
    
    // Clear the input for security
    apiKeyInput.value = '';
    showToast('API key saved successfully');
}

// Function to translate text
async function translateText() {
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
            modelName: "gemini-pro"
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
