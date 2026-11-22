import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminReturnsIdDismissItemsActionIdRoute,
  deleteAdminReturnsIdReceiveItemsActionIdRoute,
  deleteAdminReturnsIdReceiveRoute,
  deleteAdminReturnsIdRequestItemsActionIdRoute,
  deleteAdminReturnsIdRequestRoute,
  deleteAdminReturnsIdShippingMethodActionIdRoute,
  getAdminReturnsIdRoute,
  getAdminReturnsRoute,
  postAdminReturnsIdCancelRoute,
  postAdminReturnsIdDismissItemsActionIdRoute,
  postAdminReturnsIdDismissItemsRoute,
  postAdminReturnsIdReceiveConfirmRoute,
  postAdminReturnsIdReceiveItemsActionIdRoute,
  postAdminReturnsIdReceiveItemsRoute,
  postAdminReturnsIdReceiveRoute,
  postAdminReturnsIdRequestItemsActionIdRoute,
  postAdminReturnsIdRequestItemsRoute,
  postAdminReturnsIdRequestRoute,
  postAdminReturnsIdRoute,
  postAdminReturnsIdShippingMethodActionIdRoute,
  postAdminReturnsIdShippingMethodRoute,
  postAdminReturnsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const returnsHandler = app
  .openapi(getAdminReturnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminReturnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminReturnsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminReturnsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminReturnsIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminReturnsIdDismissItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminReturnsIdDismissItemsActionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminReturnsIdDismissItemsActionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminReturnsIdReceiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminReturnsIdReceiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminReturnsIdReceiveItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminReturnsIdReceiveItemsActionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminReturnsIdReceiveItemsActionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminReturnsIdReceiveConfirmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminReturnsIdRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminReturnsIdRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminReturnsIdRequestItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminReturnsIdRequestItemsActionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminReturnsIdRequestItemsActionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminReturnsIdShippingMethodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminReturnsIdShippingMethodActionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminReturnsIdShippingMethodActionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
