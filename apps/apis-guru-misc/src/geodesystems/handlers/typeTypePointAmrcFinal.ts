import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeTypePointAmrcFinalRoute } from '../routes'

const app = new OpenAPIHono()

export const typeTypePointAmrcFinalHandler = app.openapi(
  getRepositorySearchTypeTypePointAmrcFinalRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
