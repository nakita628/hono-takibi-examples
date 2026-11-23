import { OpenAPIHono } from '@hono/zod-openapi'
import { postConvertTemperatureRoute } from '../routes'

const app = new OpenAPIHono()

export const convertTemperatureHandler = app.openapi(postConvertTemperatureRoute, (c) => {
  throw new Error('Not implemented')
})
