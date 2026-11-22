import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeTypePointNetcdfRoute } from '../routes'

const app = new OpenAPIHono()

export const typeTypePointNetcdfHandler = app.openapi(
  getRepositorySearchTypeTypePointNetcdfRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
