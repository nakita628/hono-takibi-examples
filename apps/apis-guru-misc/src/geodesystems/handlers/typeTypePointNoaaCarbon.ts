import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeTypePointNoaaCarbonRoute } from '../routes'

const app = new OpenAPIHono()

export const typeTypePointNoaaCarbonHandler = app.openapi(
  getRepositorySearchTypeTypePointNoaaCarbonRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
