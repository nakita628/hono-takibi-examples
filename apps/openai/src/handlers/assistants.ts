import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAssistantsAssistantIdRoute,
  deleteThreadsThreadIdMessagesMessageIdRoute,
  deleteThreadsThreadIdRoute,
  getAssistantsAssistantIdRoute,
  getAssistantsRoute,
  getThreadsThreadIdMessagesMessageIdRoute,
  getThreadsThreadIdMessagesRoute,
  getThreadsThreadIdRoute,
  getThreadsThreadIdRunsRoute,
  getThreadsThreadIdRunsRunIdRoute,
  getThreadsThreadIdRunsRunIdStepsRoute,
  getThreadsThreadIdRunsRunIdStepsStepIdRoute,
  postAssistantsAssistantIdRoute,
  postAssistantsRoute,
  postThreadsRoute,
  postThreadsRunsRoute,
  postThreadsThreadIdMessagesMessageIdRoute,
  postThreadsThreadIdMessagesRoute,
  postThreadsThreadIdRoute,
  postThreadsThreadIdRunsRoute,
  postThreadsThreadIdRunsRunIdCancelRoute,
  postThreadsThreadIdRunsRunIdRoute,
  postThreadsThreadIdRunsRunIdSubmitToolOutputsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const assistantsHandler = app
  .openapi(getAssistantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAssistantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAssistantsAssistantIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAssistantsAssistantIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAssistantsAssistantIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postThreadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postThreadsRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getThreadsThreadIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postThreadsThreadIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteThreadsThreadIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getThreadsThreadIdMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postThreadsThreadIdMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getThreadsThreadIdMessagesMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postThreadsThreadIdMessagesMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteThreadsThreadIdMessagesMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getThreadsThreadIdRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postThreadsThreadIdRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getThreadsThreadIdRunsRunIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postThreadsThreadIdRunsRunIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postThreadsThreadIdRunsRunIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getThreadsThreadIdRunsRunIdStepsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getThreadsThreadIdRunsRunIdStepsStepIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postThreadsThreadIdRunsRunIdSubmitToolOutputsRoute, (c) => {
    throw new Error('Not implemented')
  })
