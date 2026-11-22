import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeTypeUsgsGaugeRoute } from '../routes'

const app = new OpenAPIHono()

export const typeTypeUsgsGaugeHandler = app.openapi(
  getRepositorySearchTypeTypeUsgsGaugeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
