import { OpenAPIHono } from '@hono/zod-openapi'
import { getClassificationsNameDirectionsRoute } from '../routes'

const app = new OpenAPIHono()

export const nameDirectionsHandler = app.openapi(getClassificationsNameDirectionsRoute, (c) => {
  throw new Error('Not implemented')
})
