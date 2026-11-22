import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1ProductsAttributeSetsGroupsRoute } from '../routes'

const app = new OpenAPIHono()

export const productsAttributeSetsGroupsHandler = app.openapi(
  postV1ProductsAttributeSetsGroupsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
