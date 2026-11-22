import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getRestApi3WorkflowRuleConfigRoute,
  putRestApi3WorkflowRuleConfigDeleteRoute,
  putRestApi3WorkflowRuleConfigRoute,
} from '../routes'

const app = new OpenAPIHono()

export const workflowTransitionRulesHandler = app
  .openapi(getRestApi3WorkflowRuleConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3WorkflowRuleConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3WorkflowRuleConfigDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
