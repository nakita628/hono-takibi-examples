import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeProjectExperimentRoute } from '../routes'

const app = new OpenAPIHono()

export const typeProjectExperimentHandler = app.openapi(
  getRepositorySearchTypeProjectExperimentRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
