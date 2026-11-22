import { OpenAPIHono } from '@hono/zod-openapi'
import { getOrganizationsOrganizationUuidLibraryRoute } from '../routes'

const app = new OpenAPIHono()

export const libraryHandler = app.openapi(getOrganizationsOrganizationUuidLibraryRoute, (c) => {
  throw new Error('Not implemented')
})
