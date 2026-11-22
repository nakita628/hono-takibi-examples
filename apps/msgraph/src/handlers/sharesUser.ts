import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSharesSharedDriveItemIdCreatedByUserMailboxSettingsRoute,
  getSharesSharedDriveItemIdCreatedByUserRoute,
  getSharesSharedDriveItemIdCreatedByUserServiceProvisioningErrorsCountRoute,
  getSharesSharedDriveItemIdCreatedByUserServiceProvisioningErrorsRoute,
  getSharesSharedDriveItemIdLastModifiedByUserMailboxSettingsRoute,
  getSharesSharedDriveItemIdLastModifiedByUserRoute,
  getSharesSharedDriveItemIdLastModifiedByUserServiceProvisioningErrorsCountRoute,
  getSharesSharedDriveItemIdLastModifiedByUserServiceProvisioningErrorsRoute,
  patchSharesSharedDriveItemIdCreatedByUserMailboxSettingsRoute,
  patchSharesSharedDriveItemIdLastModifiedByUserMailboxSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sharesUserHandler = app
  .openapi(getSharesSharedDriveItemIdCreatedByUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSharesSharedDriveItemIdCreatedByUserMailboxSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSharesSharedDriveItemIdCreatedByUserMailboxSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSharesSharedDriveItemIdCreatedByUserServiceProvisioningErrorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSharesSharedDriveItemIdCreatedByUserServiceProvisioningErrorsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSharesSharedDriveItemIdLastModifiedByUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSharesSharedDriveItemIdLastModifiedByUserMailboxSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSharesSharedDriveItemIdLastModifiedByUserMailboxSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSharesSharedDriveItemIdLastModifiedByUserServiceProvisioningErrorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSharesSharedDriveItemIdLastModifiedByUserServiceProvisioningErrorsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
