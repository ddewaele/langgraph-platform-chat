# langgraph-platform-chat

The most simple LangGraphJS deployment you can do.
A simple OpenAI powered chatbot

You need to install the following packages:

```
npm install langchain langsmith @langchain/openai
```

And the following devDependency:

```
npm install --save-dev @langchain/langgraph-cli
```

You can then start the chatbot with:

```
npm run dev
```

It will pop the langsmith environment in your browser and link up with the langgraph server running on your local machine.

![img.png](docs/img.png)
