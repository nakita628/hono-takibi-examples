import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1ObjectRatePlanIdRoute } from '../routes'

const app = new OpenAPIHono()

export const ratePlansHandler = app.openapi(getV1ObjectRatePlanIdRoute, (c) => {
  throw new Error('Not implemented')
})
