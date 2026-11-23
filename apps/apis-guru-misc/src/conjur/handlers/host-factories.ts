import { OpenAPIHono } from '@hono/zod-openapi'
import { postHostFactoriesHostsRoute } from '../routes'

const app = new OpenAPIHono()

export const hostFactoriesHandler = app.openapi(postHostFactoriesHostsRoute, (c) => {
  throw new Error('Not implemented')
})
