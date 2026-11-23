import { OpenAPIHono } from '@hono/zod-openapi'
import { postSandboxTopupRoute, postSandboxTransactionsIdActionRoute } from '../routes'

const app = new OpenAPIHono()

export const sandboxHandler = app
  .openapi(postSandboxTransactionsIdActionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSandboxTopupRoute, (c) => {
    throw new Error('Not implemented')
  })
