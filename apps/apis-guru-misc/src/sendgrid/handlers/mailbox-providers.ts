import { OpenAPIHono } from '@hono/zod-openapi'
import { getMailboxProvidersStatsRoute } from '../routes'

const app = new OpenAPIHono()

export const mailboxProvidersHandler = app.openapi(getMailboxProvidersStatsRoute, (c) => {
  throw new Error('Not implemented')
})
