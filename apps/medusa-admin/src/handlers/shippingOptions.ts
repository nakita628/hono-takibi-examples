import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminShippingOptionsIdRoute,
  getAdminShippingOptionsIdRoute,
  getAdminShippingOptionsRoute,
  postAdminShippingOptionsIdRoute,
  postAdminShippingOptionsIdRulesBatchRoute,
  postAdminShippingOptionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const shippingOptionsHandler = app
  .openapi(getAdminShippingOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminShippingOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminShippingOptionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminShippingOptionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminShippingOptionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminShippingOptionsIdRulesBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
