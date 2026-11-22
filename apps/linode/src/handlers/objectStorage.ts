import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiVersionObjectStorageQuotasObjQuotaIdRoute,
  getApiVersionObjectStorageQuotasObjQuotaIdUsageRoute,
  getApiVersionObjectStorageQuotasRoute,
  getApiVersionObjectStorageTransferRoute,
  getApiVersionObjectStorageTypesRoute,
  postApiVersionObjectStorageCancelRoute,
} from '../routes'

const app = new OpenAPIHono()

export const objectStorageHandler = app
  .openapi(postApiVersionObjectStorageCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionObjectStorageQuotasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionObjectStorageQuotasObjQuotaIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionObjectStorageQuotasObjQuotaIdUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionObjectStorageTransferRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionObjectStorageTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
