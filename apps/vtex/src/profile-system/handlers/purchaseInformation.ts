import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiStorageProfileSystemProfilesProfileIdPurchaseInfoRoute,
  getApiStorageProfileSystemProfilesProfileIdPurchaseInfoRoute,
  getApiStorageProfileSystemProfilesProfileIdPurchaseInfoUnmaskRoute,
  patchApiStorageProfileSystemProfilesProfileIdPurchaseInfoRoute,
  postApiStorageProfileSystemProfilesProfileIdPurchaseInfoRoute,
} from '../routes'

const app = new OpenAPIHono()

export const purchaseInformationHandler = app
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
