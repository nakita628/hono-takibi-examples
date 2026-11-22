import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiStorageProfileSystemProfilesProfileIdAddressesAddressIdRoute,
  getApiStorageProfileSystemProfilesProfileIdAddressesAddressIdRoute,
  getApiStorageProfileSystemProfilesProfileIdAddressesAddressIdUnmaskRoute,
  getApiStorageProfileSystemProfilesProfileIdAddressesAddressIdVersionsAddressVersionIdRoute,
  getApiStorageProfileSystemProfilesProfileIdAddressesAddressIdVersionsAddressVersionIdUnmaskRoute,
  getApiStorageProfileSystemProfilesProfileIdAddressesRoute,
  getApiStorageProfileSystemProfilesProfileIdAddressesUnmaskRoute,
  patchApiStorageProfileSystemProfilesProfileIdAddressesAddressIdRoute,
  postApiStorageProfileSystemProfilesProfileIdAddressesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const addressesHandler = app
  .openapi(getApiStorageProfileSystemProfilesProfileIdAddressesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiStorageProfileSystemProfilesProfileIdAddressesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiStorageProfileSystemProfilesProfileIdAddressesUnmaskRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiStorageProfileSystemProfilesProfileIdAddressesAddressIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiStorageProfileSystemProfilesProfileIdAddressesAddressIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiStorageProfileSystemProfilesProfileIdAddressesAddressIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiStorageProfileSystemProfilesProfileIdAddressesAddressIdUnmaskRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getApiStorageProfileSystemProfilesProfileIdAddressesAddressIdVersionsAddressVersionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getApiStorageProfileSystemProfilesProfileIdAddressesAddressIdVersionsAddressVersionIdUnmaskRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
