"""
Simple LangChain Translation Application

This script demonstrates a basic implementation of a translation service using
LangChain and Google's Gemini model. It prompts the user for input and uses
the model to process the text.

Required Environment Variables:
    GOOGLE_API_KEY: API key for Google's Gemini model

Usage:
    python main.py
"""

import getpass
import os

def setup_environment():
    """Set up the environment variables needed for the application."""
    if not os.environ.get("GOOGLE_API_KEY"):
        os.environ["GOOGLE_API_KEY"] = getpass.getpass("Enter API key for Google Gemini: ")

def main():
    """Main function to run the translation application."""
    # Initialize environment
    setup_environment()

    # Import and initialize the model
    from langchain.chat_models import init_chat_model
    model = init_chat_model("gemini-2.0-flash", model_provider="google_genai")

    # Get user input and process it
    user_input = input("Enter your prompt: ")
    response = model.invoke(user_input)
    print(response.content)

if __name__ == "__main__":
    main()