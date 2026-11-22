import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminExchangesIdInboundItemsActionIdRoute,
  deleteAdminExchangesIdInboundShippingMethodActionIdRoute,
  deleteAdminExchangesIdOutboundItemsActionIdRoute,
  deleteAdminExchangesIdOutboundShippingMethodActionIdRoute,
  deleteAdminExchangesIdRequestRoute,
  getAdminExchangesIdRoute,
  getAdminExchangesRoute,
  postAdminExchangesIdCancelRoute,
  postAdminExchangesIdInboundItemsActionIdRoute,
  postAdminExchangesIdInboundItemsRoute,
  postAdminExchangesIdInboundShippingMethodActionIdRoute,
  postAdminExchangesIdInboundShippingMethodRoute,
  postAdminExchangesIdOutboundItemsActionIdRoute,
  postAdminExchangesIdOutboundItemsRoute,
  postAdminExchangesIdOutboundShippingMethodActionIdRoute,
  postAdminExchangesIdOutboundShippingMethodRoute,
  postAdminExchangesIdRequestRoute,
  postAdminExchangesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const exchangesHandler = app
  .openapi(getAdminExchangesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminExchangesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminExchangesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminExchangesIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminExchangesIdInboundItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminExchangesIdInboundItemsActionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminExchangesIdInboundItemsActionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminExchangesIdInboundShippingMethodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminExchangesIdInboundShippingMethodActionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminExchangesIdInboundShippingMethodActionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminExchangesIdOutboundItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminExchangesIdOutboundItemsActionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminExchangesIdOutboundItemsActionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminExchangesIdOutboundShippingMethodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminExchangesIdOutboundShippingMethodActionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminExchangesIdOutboundShippingMethodActionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminExchangesIdRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminExchangesIdRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
