import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDrivesDriveIdCreatedByUserMailboxSettingsRoute,
  getDrivesDriveIdCreatedByUserRoute,
  getDrivesDriveIdCreatedByUserServiceProvisioningErrorsCountRoute,
  getDrivesDriveIdCreatedByUserServiceProvisioningErrorsRoute,
  getDrivesDriveIdLastModifiedByUserMailboxSettingsRoute,
  getDrivesDriveIdLastModifiedByUserRoute,
  getDrivesDriveIdLastModifiedByUserServiceProvisioningErrorsCountRoute,
  getDrivesDriveIdLastModifiedByUserServiceProvisioningErrorsRoute,
  patchDrivesDriveIdCreatedByUserMailboxSettingsRoute,
  patchDrivesDriveIdLastModifiedByUserMailboxSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const drivesUserHandler = app
  .openapi(getDrivesDriveIdCreatedByUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDrivesDriveIdCreatedByUserMailboxSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDrivesDriveIdCreatedByUserMailboxSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDrivesDriveIdCreatedByUserServiceProvisioningErrorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDrivesDriveIdCreatedByUserServiceProvisioningErrorsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDrivesDriveIdLastModifiedByUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDrivesDriveIdLastModifiedByUserMailboxSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDrivesDriveIdLastModifiedByUserMailboxSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDrivesDriveIdLastModifiedByUserServiceProvisioningErrorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDrivesDriveIdLastModifiedByUserServiceProvisioningErrorsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
