import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAssistantsAssistantIdRoute,
  getAssistantsAssistantIdRoute,
  getAssistantsRoute,
  postAssistantsAssistantIdRoute,
  postAssistantsRoute,
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
