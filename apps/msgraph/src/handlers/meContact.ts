import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMeContactsContactIdExtensionsExtensionIdRoute,
  deleteMeContactsContactIdPhotoValueRoute,
  deleteMeContactsContactIdRoute,
  getMeContactsContactIdExtensionsCountRoute,
  getMeContactsContactIdExtensionsExtensionIdRoute,
  getMeContactsContactIdExtensionsRoute,
  getMeContactsContactIdPhotoRoute,
  getMeContactsContactIdPhotoValueRoute,
  getMeContactsContactIdRoute,
  getMeContactsCountRoute,
  getMeContactsDeltaRoute,
  getMeContactsRoute,
  patchMeContactsContactIdExtensionsExtensionIdRoute,
  patchMeContactsContactIdPhotoRoute,
  patchMeContactsContactIdRoute,
  postMeContactsContactIdExtensionsRoute,
  postMeContactsContactIdPermanentDeleteRoute,
  postMeContactsRoute,
  putMeContactsContactIdPhotoValueRoute,
} from '../routes'

const app = new OpenAPIHono()

export const meContactHandler = app
  .openapi(getMeContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeContactsContactIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeContactsContactIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeContactsContactIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeContactsContactIdExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeContactsContactIdExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeContactsContactIdExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeContactsContactIdExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeContactsContactIdExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeContactsContactIdExtensionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeContactsContactIdPermanentDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeContactsContactIdPhotoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeContactsContactIdPhotoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeContactsContactIdPhotoValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMeContactsContactIdPhotoValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeContactsContactIdPhotoValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeContactsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeContactsDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
