import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminOrderEditsIdItemsActionIdRoute,
  deleteAdminOrderEditsIdRoute,
  deleteAdminOrderEditsIdShippingMethodActionIdRoute,
  postAdminOrderEditsIdConfirmRoute,
  postAdminOrderEditsIdItemsActionIdRoute,
  postAdminOrderEditsIdItemsItemItemIdRoute,
  postAdminOrderEditsIdItemsRoute,
  postAdminOrderEditsIdRequestRoute,
  postAdminOrderEditsIdShippingMethodActionIdRoute,
  postAdminOrderEditsIdShippingMethodRoute,
  postAdminOrderEditsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const orderEditsHandler = app
  .openapi(postAdminOrderEditsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminOrderEditsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminOrderEditsIdConfirmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminOrderEditsIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminOrderEditsIdItemsItemItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminOrderEditsIdItemsActionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminOrderEditsIdItemsActionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminOrderEditsIdRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminOrderEditsIdShippingMethodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminOrderEditsIdShippingMethodActionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminOrderEditsIdShippingMethodActionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
