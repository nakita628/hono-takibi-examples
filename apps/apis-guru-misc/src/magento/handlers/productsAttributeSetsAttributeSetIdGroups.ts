import { OpenAPIHono } from '@hono/zod-openapi'
import { putV1ProductsAttributeSetsAttributeSetIdGroupsRoute } from '../routes'

const app = new OpenAPIHono()

export const productsAttributeSetsAttributeSetIdGroupsHandler = app.openapi(
  putV1ProductsAttributeSetsAttributeSetIdGroupsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
