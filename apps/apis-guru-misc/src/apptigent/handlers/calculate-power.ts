import { OpenAPIHono } from '@hono/zod-openapi'
import { postCalculatePowerRoute } from '../routes'

const app = new OpenAPIHono()

export const calculatePowerHandler = app.openapi(postCalculatePowerRoute, (c) => {
  throw new Error('Not implemented')
})
