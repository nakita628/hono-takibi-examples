import { OpenAPIHono } from '@hono/zod-openapi'
import { getActuatorInfoRoute } from '../routes'

const app = new OpenAPIHono()

export const actuatorHandler = app.openapi(getActuatorInfoRoute, (c) => {
  throw new Error('Not implemented')
})
