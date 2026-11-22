import { OpenAPIHono } from '@hono/zod-openapi'
import { getOrganizationsOrganizationUuidImagesRoute } from '../routes'

const app = new OpenAPIHono()

export const imagesHandler = app.openapi(getOrganizationsOrganizationUuidImagesRoute, (c) => {
  throw new Error('Not implemented')
})
