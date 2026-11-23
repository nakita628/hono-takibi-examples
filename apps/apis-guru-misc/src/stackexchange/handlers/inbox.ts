import { OpenAPIHono } from '@hono/zod-openapi'
import { getInboxRoute, getInboxUnreadRoute } from '../routes'

const app = new OpenAPIHono()

export const inboxHandler = app
  .openapi(getInboxRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInboxUnreadRoute, (c) => {
    throw new Error('Not implemented')
  })
