import { OpenAPIHono } from '@hono/zod-openapi'
import { getTerminalsRoute, postTerminalsTerminalIdReassignRoute } from '../routes'

const app = new OpenAPIHono()

export const terminals__terminalLevelHandler = app
  .openapi(getTerminalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTerminalsTerminalIdReassignRoute, (c) => {
    throw new Error('Not implemented')
  })
