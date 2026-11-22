import { OpenAPIHono } from '@hono/zod-openapi'
import { getServicepacksRoute } from '../routes'

const app = new OpenAPIHono()

export const servicepacksHandler = app.openapi(getServicepacksRoute, (c) => {
  throw new Error('Not implemented')
})
