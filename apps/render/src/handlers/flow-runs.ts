import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteFlowRunsFlowRunIdRoute,
  getFlowRunsFlowRunIdRoute,
  getFlowRunsFlowRunIdStepsRoute,
  getFlowRunsFlowRunIdStepsStepSeqAttemptsAttemptRoute,
  getFlowRunsFlowRunIdStepsStepSeqRoute,
  getFlowRunsRoute,
  postFlowRunsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const flowRunsHandler = app
  .openapi(getFlowRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFlowRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFlowRunsFlowRunIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteFlowRunsFlowRunIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFlowRunsFlowRunIdStepsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFlowRunsFlowRunIdStepsStepSeqRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFlowRunsFlowRunIdStepsStepSeqAttemptsAttemptRoute, (c) => {
    throw new Error('Not implemented')
  })
