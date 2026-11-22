import { OpenAPIHono } from '@hono/zod-openapi'
import { getActuatorInfoRoute } from '../routes'

const app = new OpenAPIHono()

export const managementHandler = app.openapi(getActuatorInfoRoute, (c) => {
  throw new Error('Not implemented')
})
