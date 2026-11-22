import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1ReturnsIdLabelsRoute } from '../routes'

const app = new OpenAPIHono()

export const returnsIdLabelsHandler = app.openapi(getV1ReturnsIdLabelsRoute, (c) => {
  throw new Error('Not implemented')
})
