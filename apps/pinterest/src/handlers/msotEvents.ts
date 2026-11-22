import { OpenAPIHono } from '@hono/zod-openapi'
import { postAdAccountsAdAccountIdMsotEventsRoute } from '../routes'

const app = new OpenAPIHono()

export const msotEventsHandler = app.openapi(postAdAccountsAdAccountIdMsotEventsRoute, (c) => {
  throw new Error('Not implemented')
})
