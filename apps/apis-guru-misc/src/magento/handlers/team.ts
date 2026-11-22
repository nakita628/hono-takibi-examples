import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1TeamIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const teamHandler = app.openapi(getV1TeamIndexRoute, (c) => {
  throw new Error('Not implemented')
})
