import { OpenAPIHono } from '@hono/zod-openapi'
import { getRecipientsRoute } from '../routes'

const app = new OpenAPIHono()

export const recipientsHandler = app.openapi(getRecipientsRoute, (c) => {
  throw new Error('Not implemented')
})
