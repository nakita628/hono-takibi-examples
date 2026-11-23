import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getEcommerceCustomersIdRoute,
  getEcommerceCustomersRoute,
  getEcommerceOrdersIdRoute,
  getEcommerceOrdersRoute,
  getEcommerceProductsIdRoute,
  getEcommerceProductsRoute,
  getEcommerceStoreRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ecommerceHandler = app
  .openapi(getEcommerceCustomersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEcommerceCustomersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEcommerceOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEcommerceOrdersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEcommerceProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEcommerceProductsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEcommerceStoreRoute, (c) => {
    throw new Error('Not implemented')
  })
