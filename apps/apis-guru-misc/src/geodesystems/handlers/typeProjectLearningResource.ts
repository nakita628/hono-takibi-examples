import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeProjectLearningResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const typeProjectLearningResourceHandler = app.openapi(
  getRepositorySearchTypeProjectLearningResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
