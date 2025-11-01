import { Client, WorkflowClient } from "@upstash/workflow"
import {
    QSTASH_URL, QSTASH_TOKEN,
} from "../env.js"
import { token } from "morgan"

export const workflowClient = new WorkflowClient({
    baseUrl: QSTASH_URL,
    token: QSTASH_TOKEN,
})