import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMeManagerRefRoute,
  getMeCreatedObjectsDirectoryObjectIdRoute,
  getMeCreatedObjectsRoute,
  getMeDirectReportsDirectoryObjectIdRoute,
  getMeDirectReportsRoute,
  getMeManagerRefRoute,
  getMeManagerRoute,
  getMeMemberOfDirectoryObjectIdRoute,
  getMeMemberOfRoute,
  getMeOwnedDevicesDirectoryObjectIdRoute,
  getMeOwnedDevicesRoute,
  getMeOwnedObjectsDirectoryObjectIdRoute,
  getMeOwnedObjectsRoute,
  getMeRegisteredDevicesDirectoryObjectIdRoute,
  getMeRegisteredDevicesRoute,
  getMeTransitiveMemberOfDirectoryObjectIdRoute,
  getMeTransitiveMemberOfRoute,
  putMeManagerRefRoute,
} from '../routes'

const app = new OpenAPIHono()

export const meDirectoryObjectHandler = app
  .openapi(getMeCreatedObjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCreatedObjectsDirectoryObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeDirectReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeDirectReportsDirectoryObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeManagerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeManagerRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeManagerRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMeManagerRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeMemberOfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeMemberOfDirectoryObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOwnedDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOwnedDevicesDirectoryObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOwnedObjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOwnedObjectsDirectoryObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeRegisteredDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeRegisteredDevicesDirectoryObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeTransitiveMemberOfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeTransitiveMemberOfDirectoryObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
