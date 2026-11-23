import { OpenAPIHono } from '@hono/zod-openapi'
import { getArchitecturesArchitectureNameRoute, getArchitecturesRoute } from '../routes'

const app = new OpenAPIHono()

export const architecturesHandler = app
  .openapi(getArchitecturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getArchitecturesArchitectureNameRoute, (c) => {
    throw new Error('Not implemented')
  })
