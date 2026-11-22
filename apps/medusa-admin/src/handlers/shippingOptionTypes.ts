import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminShippingOptionTypesIdRoute,
  getAdminShippingOptionTypesIdRoute,
  getAdminShippingOptionTypesRoute,
  postAdminShippingOptionTypesIdRoute,
  postAdminShippingOptionTypesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const shippingOptionTypesHandler = app
  .openapi(getAdminShippingOptionTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminShippingOptionTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminShippingOptionTypesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminShippingOptionTypesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminShippingOptionTypesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
