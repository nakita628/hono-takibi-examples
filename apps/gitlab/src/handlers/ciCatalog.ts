import { OpenAPIHono } from '@hono/zod-openapi'
import { postApiV4ProjectsIdCatalogPublishRoute } from '../routes'

const app = new OpenAPIHono()

export const ciCatalogHandler = app.openapi(postApiV4ProjectsIdCatalogPublishRoute, (c) => {
  throw new Error('Not implemented')
})
