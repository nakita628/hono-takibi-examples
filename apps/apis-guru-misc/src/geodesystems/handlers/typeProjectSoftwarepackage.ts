import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeProjectSoftwarepackageRoute } from '../routes'

const app = new OpenAPIHono()

export const typeProjectSoftwarepackageHandler = app.openapi(
  getRepositorySearchTypeProjectSoftwarepackageRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
