import { OpenAPIHono } from '@hono/zod-openapi'
import { getRestServicedeskapiInfoRoute } from '../routes'

const app = new OpenAPIHono()

export const infoHandler = app.openapi(getRestServicedeskapiInfoRoute, (c) => {
  throw new Error('Not implemented')
})
