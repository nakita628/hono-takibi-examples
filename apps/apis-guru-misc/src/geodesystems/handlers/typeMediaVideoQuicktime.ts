import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeMediaVideoQuicktimeRoute } from '../routes'

const app = new OpenAPIHono()

export const typeMediaVideoQuicktimeHandler = app.openapi(
  getRepositorySearchTypeMediaVideoQuicktimeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
