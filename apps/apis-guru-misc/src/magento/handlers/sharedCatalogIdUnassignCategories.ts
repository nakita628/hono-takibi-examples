import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1SharedCatalogIdUnassignCategoriesRoute } from '../routes'

const app = new OpenAPIHono()

export const sharedCatalogIdUnassignCategoriesHandler = app.openapi(
  postV1SharedCatalogIdUnassignCategoriesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
