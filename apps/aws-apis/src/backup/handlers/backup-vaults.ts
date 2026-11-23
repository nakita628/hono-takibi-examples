import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteBackupVaultsBackupVaultNameAccessPolicyRoute,
  deleteBackupVaultsBackupVaultNameNotificationConfigurationRoute,
  deleteBackupVaultsBackupVaultNameRecoveryPointsRecoveryPointArnParentAssociationRoute,
  deleteBackupVaultsBackupVaultNameRecoveryPointsRecoveryPointArnRoute,
  deleteBackupVaultsBackupVaultNameRoute,
  deleteBackupVaultsBackupVaultNameVaultLockRoute,
  getBackupVaultsBackupVaultNameAccessPolicyRoute,
  getBackupVaultsBackupVaultNameNotificationConfigurationRoute,
  getBackupVaultsBackupVaultNameRecoveryPointsIndexRoute,
  getBackupVaultsBackupVaultNameRecoveryPointsRecoveryPointArnRestoreMetadataRoute,
  getBackupVaultsBackupVaultNameRecoveryPointsRecoveryPointArnRoute,
  getBackupVaultsBackupVaultNameRoute,
  getBackupVaultsIndexRoute,
  postBackupVaultsBackupVaultNameRecoveryPointsRecoveryPointArnDisassociateRoute,
  postBackupVaultsBackupVaultNameRecoveryPointsRecoveryPointArnRoute,
  putBackupVaultsBackupVaultNameAccessPolicyRoute,
  putBackupVaultsBackupVaultNameNotificationConfigurationRoute,
  putBackupVaultsBackupVaultNameRoute,
  putBackupVaultsBackupVaultNameVaultLockRoute,
} from '../routes'

const app = new OpenAPIHono()

export const backupVaultsHandler = app
  .openapi(putBackupVaultsBackupVaultNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBackupVaultsBackupVaultNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBackupVaultsBackupVaultNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBackupVaultsBackupVaultNameAccessPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBackupVaultsBackupVaultNameAccessPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBackupVaultsBackupVaultNameAccessPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBackupVaultsBackupVaultNameVaultLockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBackupVaultsBackupVaultNameVaultLockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBackupVaultsBackupVaultNameNotificationConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBackupVaultsBackupVaultNameNotificationConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBackupVaultsBackupVaultNameNotificationConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBackupVaultsBackupVaultNameRecoveryPointsRecoveryPointArnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBackupVaultsBackupVaultNameRecoveryPointsRecoveryPointArnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBackupVaultsBackupVaultNameRecoveryPointsRecoveryPointArnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBackupVaultsBackupVaultNameRecoveryPointsRecoveryPointArnDisassociateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteBackupVaultsBackupVaultNameRecoveryPointsRecoveryPointArnParentAssociationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getBackupVaultsBackupVaultNameRecoveryPointsRecoveryPointArnRestoreMetadataRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getBackupVaultsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBackupVaultsBackupVaultNameRecoveryPointsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
