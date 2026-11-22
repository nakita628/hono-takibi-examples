import { OpenAPIHono } from '@hono/zod-openapi'
import { appPkgmHandler, appPkgmNotificationsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', appPkgmHandler).route('/', appPkgmNotificationsHandler)

export default app
