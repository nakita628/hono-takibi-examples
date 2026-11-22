import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeTypePointIcebridgeAtmIcessnRoute } from '../routes'

const app = new OpenAPIHono()

export const typeTypePointIcebridgeAtmIcessnHandler = app.openapi(
  getRepositorySearchTypeTypePointIcebridgeAtmIcessnRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
