import { OpenAPIHono } from '@hono/zod-openapi'
import { getIsochroneRoute } from '../routes'

const app = new OpenAPIHono()

export const isochroneHandler = app.openapi(getIsochroneRoute, (c) => {
  throw new Error('Not implemented')
})
