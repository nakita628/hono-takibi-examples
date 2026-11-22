import { OpenAPIHono } from '@hono/zod-openapi'
import { getPublicApiV1InboxesInboxIdentifierRoute } from '../routes'

const app = new OpenAPIHono()

export const inboxAPIHandler = app.openapi(getPublicApiV1InboxesInboxIdentifierRoute, (c) => {
  throw new Error('Not implemented')
})
