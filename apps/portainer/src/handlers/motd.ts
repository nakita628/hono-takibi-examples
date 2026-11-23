import { OpenAPIHono } from '@hono/zod-openapi'
import { getMotdRoute } from '../routes'

const app = new OpenAPIHono()

export const motdHandler = app.openapi(getMotdRoute, (c) => {
  throw new Error('Not implemented')
})
