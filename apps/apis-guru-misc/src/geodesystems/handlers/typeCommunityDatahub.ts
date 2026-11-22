import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeCommunityDatahubRoute } from '../routes'

const app = new OpenAPIHono()

export const typeCommunityDatahubHandler = app.openapi(
  getRepositorySearchTypeCommunityDatahubRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
