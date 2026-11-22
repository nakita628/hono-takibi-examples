import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeTypeAwcMetarRoute } from '../routes'

const app = new OpenAPIHono()

export const typeTypeAwcMetarHandler = app.openapi(
  getRepositorySearchTypeTypeAwcMetarRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
