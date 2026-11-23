import { OpenAPIHono } from '@hono/zod-openapi'
import { getInboxRecipientsRoute, postInboxRecipientsRoute } from '../routes'

const app = new OpenAPIHono()

export const inboxRecipientsHandler = app
  .openapi(getInboxRecipientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInboxRecipientsRoute, (c) => {
    throw new Error('Not implemented')
  })
