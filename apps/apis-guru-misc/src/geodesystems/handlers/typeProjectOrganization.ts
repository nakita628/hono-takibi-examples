import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeProjectOrganizationRoute } from '../routes'

const app = new OpenAPIHono()

export const typeProjectOrganizationHandler = app.openapi(
  getRepositorySearchTypeProjectOrganizationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
