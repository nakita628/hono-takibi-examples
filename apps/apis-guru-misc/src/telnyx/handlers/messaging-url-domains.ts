import { OpenAPIHono } from '@hono/zod-openapi'
import { getMessagingUrlDomainsRoute } from '../routes'

const app = new OpenAPIHono()

export const messagingUrlDomainsHandler = app.openapi(getMessagingUrlDomainsRoute, (c) => {
  throw new Error('Not implemented')
})
