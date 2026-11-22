import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeTypePointIcebridgeParisRoute } from '../routes'

const app = new OpenAPIHono()

export const typeTypePointIcebridgeParisHandler = app.openapi(
  getRepositorySearchTypeTypePointIcebridgeParisRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
