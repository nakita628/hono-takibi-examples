import { OpenAPIHono } from '@hono/zod-openapi'
import { postIntlVerificationsRoute } from '../routes'

const app = new OpenAPIHono()

export const intlVerificationsHandler = app.openapi(postIntlVerificationsRoute, (c) => {
  throw new Error('Not implemented')
})
