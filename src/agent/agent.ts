import {createAgent} from "langchain";
import {ChatOpenAI} from "@langchain/openai";
import { z } from 'zod';

const model = new ChatOpenAI();

const contextSchema = z.object({
    systemPromptRef: z.string().optional(),
});

const simpleAgent = createAgent({
        model,
    contextSchema
    }
);

export const chatAgent = simpleAgent.graph;
