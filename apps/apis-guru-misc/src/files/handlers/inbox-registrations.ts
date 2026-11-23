import { OpenAPIHono } from '@hono/zod-openapi'
import { getInboxRegistrationsRoute } from '../routes'

const app = new OpenAPIHono()

export const inboxRegistrationsHandler = app.openapi(getInboxRegistrationsRoute, (c) => {
  throw new Error('Not implemented')
})
