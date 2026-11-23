import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDeviceDeviceIdAttributesAttributeKeyRoute,
  deleteDeviceDeviceIdRoute,
  getDeviceDeviceIdAttributesRoute,
  getDeviceDeviceIdDeviceInvitesRoute,
  getDeviceDeviceIdRoute,
  getDeviceDeviceIdRoutesRoute,
  postDeviceDeviceIdAttributesAttributeKeyRoute,
  postDeviceDeviceIdAuthorizedRoute,
  postDeviceDeviceIdDeviceInvitesRoute,
  postDeviceDeviceIdExpireRoute,
  postDeviceDeviceIdIpRoute,
  postDeviceDeviceIdKeyRoute,
  postDeviceDeviceIdNameRoute,
  postDeviceDeviceIdRoutesRoute,
  postDeviceDeviceIdTagsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const deviceHandler = app
  .openapi(getDeviceDeviceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDeviceDeviceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceDeviceIdExpireRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceDeviceIdRoutesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceDeviceIdRoutesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceDeviceIdAuthorizedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceDeviceIdNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceDeviceIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceDeviceIdKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceDeviceIdIpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceDeviceIdAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceDeviceIdAttributesAttributeKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDeviceDeviceIdAttributesAttributeKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceDeviceIdDeviceInvitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceDeviceIdDeviceInvitesRoute, (c) => {
    throw new Error('Not implemented')
  })
