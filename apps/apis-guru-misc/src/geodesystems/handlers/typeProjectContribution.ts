import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeProjectContributionRoute } from '../routes'

const app = new OpenAPIHono()

export const typeProjectContributionHandler = app.openapi(
  getRepositorySearchTypeProjectContributionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
