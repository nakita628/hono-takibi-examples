import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteV1ProductsAttributeSetsGroupsGroupIdRoute } from '../routes'

const app = new OpenAPIHono()

export const productsAttributeSetsGroupsGroupIdHandler = app.openapi(
  deleteV1ProductsAttributeSetsGroupsGroupIdRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
