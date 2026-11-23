import { OpenAPIHono } from '@hono/zod-openapi'
import { postPositionEstimateRoute } from '../routes'

const app = new OpenAPIHono()

export const positionEstimateHandler = app.openapi(postPositionEstimateRoute, (c) => {
  throw new Error('Not implemented')
})
