import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetActionableNotificationsRoute } from '../routes'

const app = new OpenAPIHono()

export const getActionableNotificationsHandler = app.openapi(
  getGetActionableNotificationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
