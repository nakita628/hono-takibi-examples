import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteStorageSettingsQuotaRoute,
  deleteStorageSettingsQuotaServicesServiceStorageQuotaBreakdownIdRoute,
  deleteStorageSettingsRoute,
  getStorageSettingsQuotaRoute,
  getStorageSettingsQuotaServicesCountRoute,
  getStorageSettingsQuotaServicesRoute,
  getStorageSettingsQuotaServicesServiceStorageQuotaBreakdownIdRoute,
  getStorageSettingsRoute,
  patchStorageSettingsQuotaRoute,
  patchStorageSettingsQuotaServicesServiceStorageQuotaBreakdownIdRoute,
  patchStorageSettingsRoute,
  postStorageSettingsQuotaServicesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const storageStorageSettingsHandler = app
  .openapi(getStorageSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchStorageSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteStorageSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStorageSettingsQuotaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchStorageSettingsQuotaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteStorageSettingsQuotaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStorageSettingsQuotaServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStorageSettingsQuotaServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStorageSettingsQuotaServicesServiceStorageQuotaBreakdownIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchStorageSettingsQuotaServicesServiceStorageQuotaBreakdownIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteStorageSettingsQuotaServicesServiceStorageQuotaBreakdownIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStorageSettingsQuotaServicesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
