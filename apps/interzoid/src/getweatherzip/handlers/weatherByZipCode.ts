import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetweatherzipcodeRoute } from '../routes'

const app = new OpenAPIHono()

export const weatherByZipCodeHandler = app.openapi(getGetweatherzipcodeRoute, (c) => {
  throw new Error('Not implemented')
})
