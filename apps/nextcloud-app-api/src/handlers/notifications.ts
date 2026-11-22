import { OpenAPIHono } from '@hono/zod-openapi'
import { postOcsV2PhpAppsAppApiApiV1NotificationRoute } from '../routes'

const app = new OpenAPIHono()

export const notificationsHandler = app.openapi(
  postOcsV2PhpAppsAppApiApiV1NotificationRoute,
  (c) => {},
)
