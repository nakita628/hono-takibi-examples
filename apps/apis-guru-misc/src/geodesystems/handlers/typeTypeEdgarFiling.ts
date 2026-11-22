import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeTypeEdgarFilingRoute } from '../routes'

const app = new OpenAPIHono()

export const typeTypeEdgarFilingHandler = app.openapi(
  getRepositorySearchTypeTypeEdgarFilingRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
