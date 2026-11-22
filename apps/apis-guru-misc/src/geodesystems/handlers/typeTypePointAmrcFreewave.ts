import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeTypePointAmrcFreewaveRoute } from '../routes'

const app = new OpenAPIHono()

export const typeTypePointAmrcFreewaveHandler = app.openapi(
  getRepositorySearchTypeTypePointAmrcFreewaveRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
