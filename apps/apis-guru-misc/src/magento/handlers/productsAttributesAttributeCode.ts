import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ProductsAttributesAttributeCodeRoute,
  getV1ProductsAttributesAttributeCodeRoute,
  putV1ProductsAttributesAttributeCodeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const productsAttributesAttributeCodeHandler = app
  .openapi(deleteV1ProductsAttributesAttributeCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProductsAttributesAttributeCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ProductsAttributesAttributeCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
