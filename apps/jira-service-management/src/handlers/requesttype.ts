import { OpenAPIHono } from '@hono/zod-openapi'
import { getRestServicedeskapiRequesttypeRoute } from '../routes'

const app = new OpenAPIHono()

export const requesttypeHandler = app.openapi(getRestServicedeskapiRequesttypeRoute, (c) => {
  throw new Error('Not implemented')
})
