import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeTypePointIcebridgeMccordsIrmcr3Route } from '../routes'

const app = new OpenAPIHono()

export const typeTypePointIcebridgeMccordsIrmcr3Handler = app.openapi(
  getRepositorySearchTypeTypePointIcebridgeMccordsIrmcr3Route,
  (c) => {
    throw new Error('Not implemented')
  },
)
