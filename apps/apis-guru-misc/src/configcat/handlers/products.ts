import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ProductsProductIdRoute,
  getV1ProductsProductIdRoute,
  getV1ProductsRoute,
  postV1OrganizationsOrganizationIdProductsRoute,
  putV1ProductsProductIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const productsHandler = app
  .openapi(postV1OrganizationsOrganizationIdProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ProductsProductIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProductsProductIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ProductsProductIdRoute, (c) => {
    throw new Error('Not implemented')
  })
