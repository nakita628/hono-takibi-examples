import { OpenAPIHono } from '@hono/zod-openapi'
import { getSqrtRoute } from '../routes'

const app = new OpenAPIHono()

export const sqrtHandler = app.openapi(getSqrtRoute, (c) => {
  throw new Error('Not implemented')
})
