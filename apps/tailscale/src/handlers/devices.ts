import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDeviceDeviceIdAttributesAttributeKeyRoute,
  deleteDeviceDeviceIdRoute,
  getDeviceDeviceIdAttributesRoute,
  getDeviceDeviceIdRoute,
  getDeviceDeviceIdRoutesRoute,
  getTailnetTailnetDevicesRoute,
  patchTailnetTailnetDeviceAttributesRoute,
  postDeviceDeviceIdAttributesAttributeKeyRoute,
  postDeviceDeviceIdAuthorizedRoute,
  postDeviceDeviceIdExpireRoute,
  postDeviceDeviceIdIpRoute,
  postDeviceDeviceIdKeyRoute,
  postDeviceDeviceIdNameRoute,
  postDeviceDeviceIdRoutesRoute,
  postDeviceDeviceIdTagsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const devicesHandler = app
  .openapi(getTailnetTailnetDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTailnetTailnetDeviceAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
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
