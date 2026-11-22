import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postRestApi3AgentsBulkInvokeBatchRoute,
  postRestApi3AgentsBulkInvokeUniformRoute,
} from '../routes'

const app = new OpenAPIHono()

export const agentsHandler = app
  .openapi(postRestApi3AgentsBulkInvokeBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3AgentsBulkInvokeUniformRoute, (c) => {
    throw new Error('Not implemented')
  })
