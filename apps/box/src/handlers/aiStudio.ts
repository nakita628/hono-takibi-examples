import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAiAgentsAgentIdRoute,
  getAiAgentsAgentIdRoute,
  getAiAgentsRoute,
  postAiAgentsRoute,
  putAiAgentsAgentIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const aiStudioHandler = app
  .openapi(getAiAgentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAiAgentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAiAgentsAgentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAiAgentsAgentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAiAgentsAgentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
