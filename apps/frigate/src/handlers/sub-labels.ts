import { OpenAPIHono } from '@hono/zod-openapi'
import { getSubLabelsRoute } from '../routes'

const app = new OpenAPIHono()

export const subLabelsHandler = app.openapi(getSubLabelsRoute, (c) => {
  throw new Error('Not implemented')
})
