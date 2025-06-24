# LangChain Translation Applications

This repository contains two basic LangChain applications that demonstrate text translation capabilities using Google's Gemini model:

1. A simple command-line application (`main.py`)
2. An interactive Jupyter notebook (`LLM_application.ipynb`)

Both applications showcase different approaches to implementing translation services using LangChain and Google's Gemini model.

## Prerequisites

- Python 3.8 or higher
- Google API Key for Gemini
- LangSmith API Key (for the Jupyter notebook version)

## Installation

1. Clone this repository:
```bash
git clone [your-repo-url]
cd llm-nullsafe
```

2. Install the required dependencies:
```bash
pip install -r requirements.txt
```

3. For Jupyter Notebook:
```bash
jupyter notebook
```

## Project Structure

- `main.py`: Simple command-line translation application
- `LLM_application.ipynb`: Interactive Jupyter notebook with more advanced features
- `requirements.txt`: Project dependencies
- `.gitignore`: Git ignore file

## Applications Description

### Command-line Application (main.py)
A simple application that:
- Prompts for Google API key if not set in environment
- Initializes the Gemini model
- Accepts user input and returns the model's response

### Jupyter Notebook Application (LLM_application.ipynb)
A more comprehensive application that demonstrates:
- Environment setup and API key configuration
- LangSmith integration for monitoring
- Basic translation with system messages
- Streaming responses
- Using chat templates for dynamic language selection

## Usage

### Command-line Application
```bash
python main.py
```

### Jupyter Notebook
1. Start Jupyter:
```bash
jupyter notebook
```
2. Open `LLM_application.ipynb`
3. Run the cells in sequence

## Environment Variables
Both applications use environment variables for API keys:
- `GOOGLE_API_KEY`: Required for both applications
- `LANGSMITH_API_KEY`: Required for the Jupyter notebook version
- `LANGSMITH_PROJECT`: Used in the Jupyter notebook for LangSmith integration

## Note
Make sure to never commit your API keys. They should be entered when prompted or set as environment variables.
