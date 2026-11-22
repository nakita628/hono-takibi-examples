import { OpenAPIHono } from '@hono/zod-openapi'
import { postAdAccountsAdAccountIdEventsRoute } from '../routes'

const app = new OpenAPIHono()

export const conversionEventsHandler = app.openapi(postAdAccountsAdAccountIdEventsRoute, (c) => {
  throw new Error('Not implemented')
})
