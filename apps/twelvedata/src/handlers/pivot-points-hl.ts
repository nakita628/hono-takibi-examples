import { OpenAPIHono } from '@hono/zod-openapi'
import { getPivotPointsHlRoute } from '../routes'

const app = new OpenAPIHono()

export const pivotPointsHlHandler = app.openapi(getPivotPointsHlRoute, (c) => {
  throw new Error('Not implemented')
})
