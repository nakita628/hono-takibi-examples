import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1SharedCatalogIdAssignCategoriesRoute } from '../routes'

const app = new OpenAPIHono()

export const sharedCatalogIdAssignCategoriesHandler = app.openapi(
  postV1SharedCatalogIdAssignCategoriesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
