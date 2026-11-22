import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1ProductsAttributeSetsGroupsListRoute } from '../routes'

const app = new OpenAPIHono()

export const productsAttributeSetsGroupsListHandler = app.openapi(
  getV1ProductsAttributeSetsGroupsListRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
