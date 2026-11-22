import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1ProductsAttributesAttributeCodeOptionsRoute,
  postV1ProductsAttributesAttributeCodeOptionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const productsAttributesAttributeCodeOptionsHandler = app
  .openapi(getV1ProductsAttributesAttributeCodeOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProductsAttributesAttributeCodeOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
