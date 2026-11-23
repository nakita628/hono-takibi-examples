import { OpenAPIHono } from '@hono/zod-openapi'
import { getMagneticFieldRoute } from '../routes'

const app = new OpenAPIHono()

export const magneticFieldHandler = app.openapi(getMagneticFieldRoute, (c) => {
  throw new Error('Not implemented')
})
