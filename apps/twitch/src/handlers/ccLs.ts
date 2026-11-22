import { OpenAPIHono } from '@hono/zod-openapi'
import { getContentClassificationLabelsRoute } from '../routes'

const app = new OpenAPIHono()

export const ccLsHandler = app.openapi(getContentClassificationLabelsRoute, (c) => {
  throw new Error('Not implemented')
})
