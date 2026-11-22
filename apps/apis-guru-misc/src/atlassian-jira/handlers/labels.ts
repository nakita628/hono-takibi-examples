import { OpenAPIHono } from '@hono/zod-openapi'
import { getRestApi3LabelRoute } from '../routes'

const app = new OpenAPIHono()

export const labelsHandler = app.openapi(getRestApi3LabelRoute, (c) => {
  throw new Error('Not implemented')
})
