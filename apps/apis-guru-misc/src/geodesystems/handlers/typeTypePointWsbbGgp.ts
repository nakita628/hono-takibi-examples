import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeTypePointWsbbGgpRoute } from '../routes'

const app = new OpenAPIHono()

export const typeTypePointWsbbGgpHandler = app.openapi(
  getRepositorySearchTypeTypePointWsbbGgpRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
