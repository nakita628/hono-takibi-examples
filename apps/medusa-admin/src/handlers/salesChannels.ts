import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminSalesChannelsIdRoute,
  getAdminSalesChannelsIdRoute,
  getAdminSalesChannelsRoute,
  postAdminSalesChannelsIdProductsRoute,
  postAdminSalesChannelsIdRoute,
  postAdminSalesChannelsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const salesChannelsHandler = app
  .openapi(getAdminSalesChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminSalesChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminSalesChannelsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminSalesChannelsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminSalesChannelsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminSalesChannelsIdProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
