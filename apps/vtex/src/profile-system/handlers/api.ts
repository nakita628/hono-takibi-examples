import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiStorageProfileSystemProfilesProfileIdAddressesAddressIdRoute,
  deleteApiStorageProfileSystemProfilesProfileIdPurchaseInfoRoute,
  deleteApiStorageProfileSystemProfilesProfileIdRoute,
  deleteApiStorageProfileSystemProspectsProspectIdRoute,
  getApiStorageProfileSystemProfilesProfileIdAddressesAddressIdRoute,
  getApiStorageProfileSystemProfilesProfileIdAddressesAddressIdUnmaskRoute,
  getApiStorageProfileSystemProfilesProfileIdAddressesAddressIdVersionsAddressVersionIdRoute,
  getApiStorageProfileSystemProfilesProfileIdAddressesAddressIdVersionsAddressVersionIdUnmaskRoute,
  getApiStorageProfileSystemProfilesProfileIdAddressesRoute,
  getApiStorageProfileSystemProfilesProfileIdAddressesUnmaskRoute,
  getApiStorageProfileSystemProfilesProfileIdPurchaseInfoRoute,
  getApiStorageProfileSystemProfilesProfileIdPurchaseInfoUnmaskRoute,
  getApiStorageProfileSystemProfilesProfileIdRoute,
  getApiStorageProfileSystemProfilesProfileIdUnmaskRoute,
  getApiStorageProfileSystemProfilesProfileIdVersionsProfileVersionIdRoute,
  getApiStorageProfileSystemProfilesProfileIdVersionsProfileVersionIdUnmaskRoute,
  getApiStorageProfileSystemProspectsProspectIdRoute,
  getApiStorageProfileSystemProspectsProspectIdUnmaskRoute,
  patchApiStorageProfileSystemProfilesProfileIdAddressesAddressIdRoute,
  patchApiStorageProfileSystemProfilesProfileIdPurchaseInfoRoute,
  patchApiStorageProfileSystemProfilesProfileIdRoute,
  patchApiStorageProfileSystemProspectsProspectIdRoute,
  postApiStorageProfileSystemProfilesProfileIdAddressesRoute,
  postApiStorageProfileSystemProfilesProfileIdPurchaseInfoRoute,
  postApiStorageProfileSystemProfilesRoute,
  postApiStorageProfileSystemProspectsRoute,
  putApiStorageProfileSystemProfilesSchemaRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(postApiStorageProfileSystemProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiStorageProfileSystemProfilesSchemaRoute, (c) => {
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
  .openapi(deleteApiStorageProfileSystemProfilesProfileIdPurchaseInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiStorageProfileSystemProfilesProfileIdPurchaseInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiStorageProfileSystemProfilesProfileIdPurchaseInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiStorageProfileSystemProfilesProfileIdPurchaseInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiStorageProfileSystemProfilesProfileIdPurchaseInfoUnmaskRoute, (c) => {
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
  .openapi(postApiStorageProfileSystemProspectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiStorageProfileSystemProspectsProspectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiStorageProfileSystemProspectsProspectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiStorageProfileSystemProspectsProspectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiStorageProfileSystemProspectsProspectIdUnmaskRoute, (c) => {
    throw new Error('Not implemented')
  })
