import { OpenAPIHono } from '@hono/zod-openapi'
import { getSarRoute } from '../routes'

const app = new OpenAPIHono()

export const sarHandler = app.openapi(getSarRoute, (c) => {
  throw new Error('Not implemented')
})
