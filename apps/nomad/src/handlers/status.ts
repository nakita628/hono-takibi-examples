import { OpenAPIHono } from '@hono/zod-openapi'
import { getStatusLeaderRoute, getStatusPeersRoute } from '../routes'

const app = new OpenAPIHono()

export const statusHandler = app
  .openapi(getStatusLeaderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatusPeersRoute, (c) => {
    throw new Error('Not implemented')
  })
