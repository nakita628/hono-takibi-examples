import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeTypePointGcnetRoute } from '../routes'

const app = new OpenAPIHono()

export const typeTypePointGcnetHandler = app.openapi(
  getRepositorySearchTypeTypePointGcnetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
