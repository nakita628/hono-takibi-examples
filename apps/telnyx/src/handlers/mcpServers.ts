import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAiMcpServersMcpServerIdRoute,
  getAiMcpServersMcpServerIdRoute,
  getAiMcpServersRoute,
  postAiMcpServersRoute,
  putAiMcpServersMcpServerIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const mcpServersHandler = app
  .openapi(getAiMcpServersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAiMcpServersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAiMcpServersMcpServerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAiMcpServersMcpServerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAiMcpServersMcpServerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
