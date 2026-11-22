import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiStorageProfileSystemProfilesProfileIdRoute,
  getApiStorageProfileSystemProfilesProfileIdRoute,
  getApiStorageProfileSystemProfilesProfileIdUnmaskRoute,
  getApiStorageProfileSystemProfilesProfileIdVersionsProfileVersionIdRoute,
  getApiStorageProfileSystemProfilesProfileIdVersionsProfileVersionIdUnmaskRoute,
  patchApiStorageProfileSystemProfilesProfileIdRoute,
  postApiStorageProfileSystemProfilesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const profilesHandler = app
  .openapi(postApiStorageProfileSystemProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiStorageProfileSystemProfilesProfileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiStorageProfileSystemProfilesProfileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiStorageProfileSystemProfilesProfileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiStorageProfileSystemProfilesProfileIdUnmaskRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiStorageProfileSystemProfilesProfileIdVersionsProfileVersionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiStorageProfileSystemProfilesProfileIdVersionsProfileVersionIdUnmaskRoute, (c) => {
    throw new Error('Not implemented')
  })
