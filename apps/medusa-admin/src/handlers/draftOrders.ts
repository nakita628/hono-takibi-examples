import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminDraftOrdersIdEditItemsActionIdRoute,
  deleteAdminDraftOrdersIdEditPromotionsRoute,
  deleteAdminDraftOrdersIdEditRoute,
  deleteAdminDraftOrdersIdEditShippingMethodsActionIdRoute,
  deleteAdminDraftOrdersIdEditShippingMethodsMethodMethodIdRoute,
  deleteAdminDraftOrdersIdRoute,
  getAdminDraftOrdersIdRoute,
  getAdminDraftOrdersRoute,
  postAdminDraftOrdersIdConvertToOrderRoute,
  postAdminDraftOrdersIdEditConfirmRoute,
  postAdminDraftOrdersIdEditItemsActionIdRoute,
  postAdminDraftOrdersIdEditItemsItemItemIdRoute,
  postAdminDraftOrdersIdEditItemsRoute,
  postAdminDraftOrdersIdEditPromotionsRoute,
  postAdminDraftOrdersIdEditRequestRoute,
  postAdminDraftOrdersIdEditRoute,
  postAdminDraftOrdersIdEditShippingMethodsActionIdRoute,
  postAdminDraftOrdersIdEditShippingMethodsMethodMethodIdRoute,
  postAdminDraftOrdersIdEditShippingMethodsRoute,
  postAdminDraftOrdersIdRoute,
  postAdminDraftOrdersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const draftOrdersHandler = app
  .openapi(getAdminDraftOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminDraftOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminDraftOrdersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminDraftOrdersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminDraftOrdersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminDraftOrdersIdConvertToOrderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminDraftOrdersIdEditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminDraftOrdersIdEditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminDraftOrdersIdEditConfirmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminDraftOrdersIdEditItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminDraftOrdersIdEditItemsItemItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminDraftOrdersIdEditItemsActionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminDraftOrdersIdEditItemsActionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminDraftOrdersIdEditPromotionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminDraftOrdersIdEditPromotionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminDraftOrdersIdEditRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminDraftOrdersIdEditShippingMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminDraftOrdersIdEditShippingMethodsMethodMethodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminDraftOrdersIdEditShippingMethodsMethodMethodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminDraftOrdersIdEditShippingMethodsActionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminDraftOrdersIdEditShippingMethodsActionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
