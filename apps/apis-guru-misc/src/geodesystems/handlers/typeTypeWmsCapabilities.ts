import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeTypeWmsCapabilitiesRoute } from '../routes'

const app = new OpenAPIHono()

export const typeTypeWmsCapabilitiesHandler = app.openapi(
  getRepositorySearchTypeTypeWmsCapabilitiesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
