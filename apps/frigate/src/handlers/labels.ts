import { OpenAPIHono } from '@hono/zod-openapi'
import { getLabelsRoute } from '../routes'

const app = new OpenAPIHono()

export const labelsHandler = app.openapi(getLabelsRoute, (c) => {
  throw new Error('Not implemented')
})
