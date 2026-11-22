import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteLinodeInstancesLinodeIdConfigsConfigIdRoute,
  deleteLinodeInstancesLinodeIdDisksDiskIdRoute,
  deleteLinodeInstancesLinodeIdIpsAddressRoute,
  deleteLinodeInstancesLinodeIdRoute,
  getLinodeInstancesLinodeIdBackupsBackupIdRoute,
  getLinodeInstancesLinodeIdBackupsRoute,
  getLinodeInstancesLinodeIdConfigsConfigIdRoute,
  getLinodeInstancesLinodeIdConfigsRoute,
  getLinodeInstancesLinodeIdDisksDiskIdRoute,
  getLinodeInstancesLinodeIdDisksRoute,
  getLinodeInstancesLinodeIdFirewallsRoute,
  getLinodeInstancesLinodeIdIpsAddressRoute,
  getLinodeInstancesLinodeIdIpsRoute,
  getLinodeInstancesLinodeIdNodebalancersRoute,
  getLinodeInstancesLinodeIdRoute,
  getLinodeInstancesLinodeIdStatsRoute,
  getLinodeInstancesLinodeIdStatsYearMonthRoute,
  getLinodeInstancesLinodeIdTransferRoute,
  getLinodeInstancesLinodeIdTransferYearMonthRoute,
  getLinodeInstancesLinodeIdVolumesRoute,
  getLinodeInstancesRoute,
  getLinodeKernelsKernelIdRoute,
  getLinodeKernelsRoute,
  postLinodeInstancesLinodeIdBackupsBackupIdRestoreRoute,
  postLinodeInstancesLinodeIdBackupsCancelRoute,
  postLinodeInstancesLinodeIdBackupsEnableRoute,
  postLinodeInstancesLinodeIdBackupsRoute,
  postLinodeInstancesLinodeIdBootRoute,
  postLinodeInstancesLinodeIdCloneRoute,
  postLinodeInstancesLinodeIdConfigsRoute,
  postLinodeInstancesLinodeIdDisksDiskIdCloneRoute,
  postLinodeInstancesLinodeIdDisksDiskIdPasswordRoute,
  postLinodeInstancesLinodeIdDisksDiskIdResizeRoute,
  postLinodeInstancesLinodeIdDisksRoute,
  postLinodeInstancesLinodeIdIpsRoute,
  postLinodeInstancesLinodeIdMigrateRoute,
  postLinodeInstancesLinodeIdMutateRoute,
  postLinodeInstancesLinodeIdPasswordRoute,
  postLinodeInstancesLinodeIdRebootRoute,
  postLinodeInstancesLinodeIdRebuildRoute,
  postLinodeInstancesLinodeIdRescueRoute,
  postLinodeInstancesLinodeIdResizeRoute,
  postLinodeInstancesLinodeIdShutdownRoute,
  postLinodeInstancesRoute,
  putLinodeInstancesLinodeIdConfigsConfigIdRoute,
  putLinodeInstancesLinodeIdDisksDiskIdRoute,
  putLinodeInstancesLinodeIdIpsAddressRoute,
  putLinodeInstancesLinodeIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const linodeInstancesHandler = app
  .openapi(getLinodeInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLinodeInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLinodeInstancesLinodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLinodeInstancesLinodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putLinodeInstancesLinodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLinodeInstancesLinodeIdBackupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLinodeInstancesLinodeIdBackupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLinodeInstancesLinodeIdBackupsCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLinodeInstancesLinodeIdBackupsEnableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLinodeInstancesLinodeIdBackupsBackupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLinodeInstancesLinodeIdBackupsBackupIdRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLinodeInstancesLinodeIdBootRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLinodeInstancesLinodeIdCloneRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLinodeInstancesLinodeIdConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLinodeInstancesLinodeIdConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLinodeInstancesLinodeIdConfigsConfigIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLinodeInstancesLinodeIdConfigsConfigIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putLinodeInstancesLinodeIdConfigsConfigIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLinodeInstancesLinodeIdDisksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLinodeInstancesLinodeIdDisksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLinodeInstancesLinodeIdDisksDiskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLinodeInstancesLinodeIdDisksDiskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putLinodeInstancesLinodeIdDisksDiskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLinodeInstancesLinodeIdDisksDiskIdCloneRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLinodeInstancesLinodeIdDisksDiskIdPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLinodeInstancesLinodeIdDisksDiskIdResizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLinodeInstancesLinodeIdFirewallsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLinodeInstancesLinodeIdIpsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLinodeInstancesLinodeIdIpsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLinodeInstancesLinodeIdIpsAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLinodeInstancesLinodeIdIpsAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putLinodeInstancesLinodeIdIpsAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLinodeInstancesLinodeIdMigrateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLinodeInstancesLinodeIdMutateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLinodeInstancesLinodeIdNodebalancersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLinodeInstancesLinodeIdPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLinodeInstancesLinodeIdRebootRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLinodeInstancesLinodeIdRebuildRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLinodeInstancesLinodeIdRescueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLinodeInstancesLinodeIdResizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLinodeInstancesLinodeIdShutdownRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLinodeInstancesLinodeIdStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLinodeInstancesLinodeIdStatsYearMonthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLinodeInstancesLinodeIdTransferRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLinodeInstancesLinodeIdTransferYearMonthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLinodeInstancesLinodeIdVolumesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLinodeKernelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLinodeKernelsKernelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
