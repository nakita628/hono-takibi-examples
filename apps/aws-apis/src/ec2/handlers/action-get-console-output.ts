import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionGetConsoleOutputRoute, postActionGetConsoleOutputRoute } from '../routes'

const app = new OpenAPIHono()

export const actionGetConsoleOutputHandler = app
  .openapi(getActionGetConsoleOutputRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionGetConsoleOutputRoute, (c) => {
    throw new Error('Not implemented')
  })
