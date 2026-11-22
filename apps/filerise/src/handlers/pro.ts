import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiProAuditExportCsvPhpRoute,
  getApiProAuditListPhpRoute,
  getApiProDiskUsageChildrenPhpRoute,
  getApiProDiskUsageTopFilesPhpRoute,
  getApiProGroupsListPhpRoute,
  getApiProPortalsGetPhpRoute,
  getApiProPortalsListPhpRoute,
  getApiProPortalsPublicMetaPhpRoute,
  getApiProPortalsSubmissionsPhpRoute,
  getApiProSearchQueryPhpRoute,
  postApiProDiskUsageDeleteFilePermanentPhpRoute,
  postApiProDiskUsageDeleteFolderRecursivePhpRoute,
  postApiProGroupsSavePhpRoute,
  postApiProPortalsSavePhpRoute,
  postApiProPortalsSubmitFormPhpRoute,
  postApiProPortalsUploadLogoPhpRoute,
  postApiProUploadBrandLogoPhpRoute,
} from '../routes'

const app = new OpenAPIHono()

export const proHandler = app
  .openapi(getApiProAuditExportCsvPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiProAuditListPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiProDiskUsageChildrenPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiProDiskUsageDeleteFilePermanentPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiProDiskUsageDeleteFolderRecursivePhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiProDiskUsageTopFilesPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiProGroupsListPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiProGroupsSavePhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiProPortalsGetPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiProPortalsListPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiProPortalsPublicMetaPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiProPortalsSavePhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiProPortalsSubmissionsPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiProPortalsSubmitFormPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiProPortalsUploadLogoPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiProSearchQueryPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiProUploadBrandLogoPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
