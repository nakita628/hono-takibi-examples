import { OpenAPIHono } from '@hono/zod-openapi'
import { getPeersListRoute } from '../routes'

const app = new OpenAPIHono()

export const peersHandler = app.openapi(getPeersListRoute, (c) => {
  throw new Error('Not implemented')
})
