import { OpenAPIHono } from '@hono/zod-openapi'
import { getRequirementsIdRoute, getRequirementsRoute } from '../routes'

const app = new OpenAPIHono()

export const requirementsHandler = app
  .openapi(getRequirementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRequirementsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
