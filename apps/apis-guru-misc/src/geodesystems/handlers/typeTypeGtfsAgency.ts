import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeTypeGtfsAgencyRoute } from '../routes'

const app = new OpenAPIHono()

export const typeTypeGtfsAgencyHandler = app.openapi(
  getRepositorySearchTypeTypeGtfsAgencyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
