import { OpenAPIHono } from '@hono/zod-openapi'
import { postTerminalsScheduleActionsRoute } from '../routes'

const app = new OpenAPIHono()

export const terminalActions__terminalLevelHandler = app.openapi(
  postTerminalsScheduleActionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
