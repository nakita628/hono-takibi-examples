import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeMediaVideoChannelRoute } from '../routes'

const app = new OpenAPIHono()

export const typeMediaVideoChannelHandler = app.openapi(
  getRepositorySearchTypeMediaVideoChannelRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
