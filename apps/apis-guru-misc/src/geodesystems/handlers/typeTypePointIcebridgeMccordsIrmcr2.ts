import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeTypePointIcebridgeMccordsIrmcr2Route } from '../routes'

const app = new OpenAPIHono()

export const typeTypePointIcebridgeMccordsIrmcr2Handler = app.openapi(
  getRepositorySearchTypeTypePointIcebridgeMccordsIrmcr2Route,
  (c) => {
    throw new Error('Not implemented')
  },
)
