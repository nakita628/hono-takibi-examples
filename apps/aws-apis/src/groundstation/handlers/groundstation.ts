import { OpenAPIHono } from '@hono/zod-openapi'
import { getGroundstationRoute } from '../routes'

const app = new OpenAPIHono()

export const groundstationHandler = app.openapi(getGroundstationRoute, (c) => {
  throw new Error('Not implemented')
})
