import { OpenAPIHono } from '@hono/zod-openapi'
import { getAccountsAccountIdCloudforceOneEventsGraphRoute } from '../routes'

const app = new OpenAPIHono()

export const eventsHandler = app.openapi(getAccountsAccountIdCloudforceOneEventsGraphRoute, (c) => {
  throw new Error('Not implemented')
})
