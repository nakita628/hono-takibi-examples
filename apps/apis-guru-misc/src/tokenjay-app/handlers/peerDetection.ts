import { OpenAPIHono } from '@hono/zod-openapi'
import { getPeersListRoute } from '../routes'

const app = new OpenAPIHono()

export const peerDetectionHandler = app.openapi(getPeersListRoute, (c) => {
  throw new Error('Not implemented')
})
