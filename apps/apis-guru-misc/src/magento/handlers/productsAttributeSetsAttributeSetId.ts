import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ProductsAttributeSetsAttributeSetIdRoute,
  getV1ProductsAttributeSetsAttributeSetIdRoute,
  putV1ProductsAttributeSetsAttributeSetIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const productsAttributeSetsAttributeSetIdHandler = app
  .openapi(deleteV1ProductsAttributeSetsAttributeSetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProductsAttributeSetsAttributeSetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ProductsAttributeSetsAttributeSetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
