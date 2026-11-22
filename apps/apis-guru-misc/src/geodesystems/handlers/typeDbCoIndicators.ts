import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeDbCoIndicatorsRoute } from '../routes'

const app = new OpenAPIHono()

export const typeDbCoIndicatorsHandler = app.openapi(
  getRepositorySearchTypeDbCoIndicatorsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
