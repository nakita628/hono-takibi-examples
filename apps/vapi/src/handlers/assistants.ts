import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAssistantIdRoute,
  getAssistantIdRoute,
  getAssistantRoute,
  patchAssistantIdRoute,
  postAssistantRoute,
} from '../routes'

const app = new OpenAPIHono()

export const assistantsHandler = app
  .openapi(postAssistantRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAssistantRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAssistantIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAssistantIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAssistantIdRoute, (c) => {
    throw new Error('Not implemented')
  })
