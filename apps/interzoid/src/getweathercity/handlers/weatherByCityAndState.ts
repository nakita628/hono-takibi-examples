import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetweatherRoute } from '../routes'

const app = new OpenAPIHono()

export const weatherByCityAndStateHandler = app.openapi(getGetweatherRoute, (c) => {
  throw new Error('Not implemented')
})
