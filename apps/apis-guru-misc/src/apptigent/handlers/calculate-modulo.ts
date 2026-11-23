import { OpenAPIHono } from '@hono/zod-openapi'
import { postCalculateModuloRoute } from '../routes'

const app = new OpenAPIHono()

export const calculateModuloHandler = app.openapi(postCalculateModuloRoute, (c) => {
  throw new Error('Not implemented')
})
