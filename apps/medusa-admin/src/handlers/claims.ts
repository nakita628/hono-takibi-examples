import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminClaimsIdClaimItemsActionIdRoute,
  deleteAdminClaimsIdInboundItemsActionIdRoute,
  deleteAdminClaimsIdInboundShippingMethodActionIdRoute,
  deleteAdminClaimsIdOutboundItemsActionIdRoute,
  deleteAdminClaimsIdOutboundShippingMethodActionIdRoute,
  deleteAdminClaimsIdRequestRoute,
  getAdminClaimsIdRoute,
  getAdminClaimsRoute,
  postAdminClaimsIdCancelRoute,
  postAdminClaimsIdClaimItemsActionIdRoute,
  postAdminClaimsIdClaimItemsRoute,
  postAdminClaimsIdInboundItemsActionIdRoute,
  postAdminClaimsIdInboundItemsRoute,
  postAdminClaimsIdInboundShippingMethodActionIdRoute,
  postAdminClaimsIdInboundShippingMethodRoute,
  postAdminClaimsIdOutboundItemsActionIdRoute,
  postAdminClaimsIdOutboundItemsRoute,
  postAdminClaimsIdOutboundShippingMethodActionIdRoute,
  postAdminClaimsIdOutboundShippingMethodRoute,
  postAdminClaimsIdRequestRoute,
  postAdminClaimsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const claimsHandler = app
  .openapi(getAdminClaimsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminClaimsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminClaimsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminClaimsIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminClaimsIdClaimItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminClaimsIdClaimItemsActionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminClaimsIdClaimItemsActionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminClaimsIdInboundItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminClaimsIdInboundItemsActionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminClaimsIdInboundItemsActionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminClaimsIdInboundShippingMethodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminClaimsIdInboundShippingMethodActionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminClaimsIdInboundShippingMethodActionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminClaimsIdOutboundItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminClaimsIdOutboundItemsActionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminClaimsIdOutboundItemsActionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminClaimsIdOutboundShippingMethodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminClaimsIdOutboundShippingMethodActionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminClaimsIdOutboundShippingMethodActionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminClaimsIdRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminClaimsIdRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
