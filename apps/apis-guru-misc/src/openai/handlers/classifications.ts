import { OpenAPIHono } from '@hono/zod-openapi'
import { postClassificationsRoute } from '../routes'

const app = new OpenAPIHono()

export const classificationsHandler = app.openapi(postClassificationsRoute, (c) => {
  throw new Error('Not implemented')
})
