import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeProjectDatasetRoute } from '../routes'

const app = new OpenAPIHono()

export const typeProjectDatasetHandler = app.openapi(
  getRepositorySearchTypeProjectDatasetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
