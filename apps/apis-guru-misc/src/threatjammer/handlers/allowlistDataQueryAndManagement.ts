import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1AllowlistPrivateAllowlistIdContentRoute,
  deleteV1AllowlistPrivateAllowlistIdRoute,
  deleteV1AllowlistPublicAllowlistIdRoute,
  getV1AllowlistPrivateAllowlistIdContentRoute,
  getV1AllowlistPrivateAllowlistIdRoute,
  getV1AllowlistPrivateAllResourceTypeRoute,
  getV1AllowlistPrivateAllRoute,
  getV1AllowlistPrivateIpAddressRoute,
  getV1AllowlistPublicAllowlistIdRoute,
  getV1AllowlistPublicAllResourceTypeRoute,
  getV1AllowlistPublicAllRoute,
  getV1AllowlistPublicIpAddressRoute,
  getV1AllowlistPublicOwnedResourceTypeRoute,
  getV1AllowlistPublicOwnedRoute,
  postV1AllowlistPrivateRoute,
  putV1AllowlistPrivateAllowlistIdContentRoute,
  putV1AllowlistPrivateAllowlistIdOriginRoute,
  putV1AllowlistPrivateAllowlistIdRoute,
  putV1AllowlistPublicAllowlistIdOriginRoute,
  putV1AllowlistPublicAllowlistIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const allowlistDataQueryAndManagementHandler = app
  .openapi(postV1AllowlistPrivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AllowlistPrivateAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AllowlistPrivateAllResourceTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AllowlistPrivateIpAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1AllowlistPrivateAllowlistIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AllowlistPrivateAllowlistIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1AllowlistPrivateAllowlistIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1AllowlistPrivateAllowlistIdContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AllowlistPrivateAllowlistIdContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1AllowlistPrivateAllowlistIdContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1AllowlistPrivateAllowlistIdOriginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AllowlistPublicAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AllowlistPublicAllResourceTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AllowlistPublicIpAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AllowlistPublicOwnedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AllowlistPublicOwnedResourceTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1AllowlistPublicAllowlistIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AllowlistPublicAllowlistIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1AllowlistPublicAllowlistIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1AllowlistPublicAllowlistIdOriginRoute, (c) => {
    throw new Error('Not implemented')
  })
