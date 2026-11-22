import { OpenAPIHono } from '@hono/zod-openapi'
import { getOrganizationsOrganizationIdOpenapiSpecRoute } from '../routes'

const app = new OpenAPIHono()

export const openAPISpecHandler = app.openapi(
  getOrganizationsOrganizationIdOpenapiSpecRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
