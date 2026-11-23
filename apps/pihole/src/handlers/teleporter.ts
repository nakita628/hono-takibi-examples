import { OpenAPIHono } from '@hono/zod-openapi'
import { getTeleporterRoute, postTeleporterRoute } from '../routes'

const app = new OpenAPIHono()

export const teleporterHandler = app
  .openapi(getTeleporterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeleporterRoute, (c) => {
    throw new Error('Not implemented')
  })
