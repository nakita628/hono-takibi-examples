import { OpenAPIHono } from '@hono/zod-openapi'
import { postOrganizationsOrganizationUuidProductsOnlineSlugRoute } from '../routes'

const app = new OpenAPIHono()

export const productsOnlineHandler = app.openapi(
  postOrganizationsOrganizationUuidProductsOnlineSlugRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
