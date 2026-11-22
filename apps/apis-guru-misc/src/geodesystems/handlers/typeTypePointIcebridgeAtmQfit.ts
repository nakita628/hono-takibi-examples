import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeTypePointIcebridgeAtmQfitRoute } from '../routes'

const app = new OpenAPIHono()

export const typeTypePointIcebridgeAtmQfitHandler = app.openapi(
  getRepositorySearchTypeTypePointIcebridgeAtmQfitRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
