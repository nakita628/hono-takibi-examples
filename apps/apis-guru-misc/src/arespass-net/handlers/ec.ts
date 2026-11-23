import { OpenAPIHono } from '@hono/zod-openapi'
import { getEcRoute } from '../routes'

const app = new OpenAPIHono()

export const ecHandler = app.openapi(getEcRoute, (c) => {
  throw new Error('Not implemented')
})
