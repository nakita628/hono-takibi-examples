import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2AgentsAgentIDRoute,
  getApiV2AgentsAgentIDActivityRunRoute,
  getApiV2AgentsAgentIDRoute,
  getApiV2AgentsCurrentActivityRunRoute,
  getApiV2AgentsCurrentRoute,
  getApiV2AgentsRoute,
  postApiV2AgentsRoute,
  putApiV2AgentsAgentIDActivityRunRoute,
  putApiV2AgentsAgentIDRoute,
  putApiV2AgentsAgentIDStatusRoute,
} from '../routes'

const app = new OpenAPIHono()

export const agentsHandler = app
  .openapi(getApiV2AgentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2AgentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AgentsCurrentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AgentsCurrentActivityRunRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2AgentsAgentIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AgentsAgentIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2AgentsAgentIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AgentsAgentIDActivityRunRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2AgentsAgentIDActivityRunRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2AgentsAgentIDStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
