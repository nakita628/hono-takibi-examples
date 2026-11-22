import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeCommunityResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const typeCommunityResourceHandler = app.openapi(
  getRepositorySearchTypeCommunityResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
