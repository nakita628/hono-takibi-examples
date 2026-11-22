import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1DenylistPrivateDenylistIdContentRoute,
  deleteV1DenylistPrivateDenylistIdRoute,
  deleteV1DenylistPublicDenylistIdRoute,
  deleteV1DenylistReportedIpAllRoute,
  deleteV1DenylistReportedIpIpAddressRoute,
  getV1DenylistPrivateAllResourceTypeRoute,
  getV1DenylistPrivateAllRoute,
  getV1DenylistPrivateDenylistIdContentRoute,
  getV1DenylistPrivateDenylistIdRoute,
  getV1DenylistPrivateIpAddressRoute,
  getV1DenylistPublicAllResourceTypeRoute,
  getV1DenylistPublicAllRoute,
  getV1DenylistPublicDenylistIdRoute,
  getV1DenylistPublicIpAddressRoute,
  getV1DenylistPublicOwnedResourceTypeRoute,
  getV1DenylistPublicOwnedRoute,
  getV1DenylistReportedIpIpAddressRoute,
  getV1DenylistReportedIpRoute,
  postV1DenylistPrivateRoute,
  putV1DenylistPrivateDenylistIdContentRoute,
  putV1DenylistPrivateDenylistIdOriginRoute,
  putV1DenylistPrivateDenylistIdRoute,
  putV1DenylistPublicDenylistIdOriginRoute,
  putV1DenylistPublicDenylistIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const denylistDataQueryAndManagementHandler = app
  .openapi(postV1DenylistPrivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DenylistPrivateAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DenylistPrivateAllResourceTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DenylistPrivateIpAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1DenylistPrivateDenylistIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DenylistPrivateDenylistIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1DenylistPrivateDenylistIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1DenylistPrivateDenylistIdContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DenylistPrivateDenylistIdContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1DenylistPrivateDenylistIdContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1DenylistPrivateDenylistIdOriginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DenylistPublicAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DenylistPublicAllResourceTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DenylistPublicIpAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DenylistPublicOwnedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DenylistPublicOwnedResourceTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1DenylistPublicDenylistIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DenylistPublicDenylistIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1DenylistPublicDenylistIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1DenylistPublicDenylistIdOriginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DenylistReportedIpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1DenylistReportedIpAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1DenylistReportedIpIpAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DenylistReportedIpIpAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
