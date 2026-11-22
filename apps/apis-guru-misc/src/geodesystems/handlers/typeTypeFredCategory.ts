import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeTypeFredCategoryRoute } from '../routes'

const app = new OpenAPIHono()

export const typeTypeFredCategoryHandler = app.openapi(
  getRepositorySearchTypeTypeFredCategoryRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
