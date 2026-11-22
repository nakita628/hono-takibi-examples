import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountIdVaultsVaultNameAccessPolicyRoute,
  deleteAccountIdVaultsVaultNameArchivesArchiveIdRoute,
  deleteAccountIdVaultsVaultNameLockPolicyRoute,
  deleteAccountIdVaultsVaultNameMultipartUploadsUploadIdRoute,
  deleteAccountIdVaultsVaultNameNotificationConfigurationRoute,
  deleteAccountIdVaultsVaultNameRoute,
  getAccountIdPoliciesDataRetrievalRoute,
  getAccountIdProvisionedCapacityRoute,
  getAccountIdVaultsRoute,
  getAccountIdVaultsVaultNameAccessPolicyRoute,
  getAccountIdVaultsVaultNameJobsJobIdOutputRoute,
  getAccountIdVaultsVaultNameJobsJobIdRoute,
  getAccountIdVaultsVaultNameJobsRoute,
  getAccountIdVaultsVaultNameLockPolicyRoute,
  getAccountIdVaultsVaultNameMultipartUploadsRoute,
  getAccountIdVaultsVaultNameMultipartUploadsUploadIdRoute,
  getAccountIdVaultsVaultNameNotificationConfigurationRoute,
  getAccountIdVaultsVaultNameRoute,
  getAccountIdVaultsVaultNameTagsRoute,
  postAccountIdProvisionedCapacityRoute,
  postAccountIdVaultsVaultNameArchivesRoute,
  postAccountIdVaultsVaultNameJobsRoute,
  postAccountIdVaultsVaultNameLockPolicyLockIdRoute,
  postAccountIdVaultsVaultNameLockPolicyRoute,
  postAccountIdVaultsVaultNameMultipartUploadsRoute,
  postAccountIdVaultsVaultNameMultipartUploadsUploadIdRoute,
  postAccountIdVaultsVaultNameTagsOperationAddRoute,
  postAccountIdVaultsVaultNameTagsOperationRemoveRoute,
  putAccountIdPoliciesDataRetrievalRoute,
  putAccountIdVaultsVaultNameAccessPolicyRoute,
  putAccountIdVaultsVaultNameMultipartUploadsUploadIdRoute,
  putAccountIdVaultsVaultNameNotificationConfigurationRoute,
  putAccountIdVaultsVaultNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountIdHandler = app
  .openapi(deleteAccountIdVaultsVaultNameMultipartUploadsUploadIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountIdVaultsVaultNameMultipartUploadsUploadIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountIdVaultsVaultNameMultipartUploadsUploadIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountIdVaultsVaultNameMultipartUploadsUploadIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountIdVaultsVaultNameLockPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountIdVaultsVaultNameLockPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountIdVaultsVaultNameLockPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountIdVaultsVaultNameTagsOperationAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountIdVaultsVaultNameLockPolicyLockIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountIdVaultsVaultNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountIdVaultsVaultNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountIdVaultsVaultNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountIdVaultsVaultNameArchivesArchiveIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountIdVaultsVaultNameAccessPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountIdVaultsVaultNameAccessPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountIdVaultsVaultNameAccessPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountIdVaultsVaultNameNotificationConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountIdVaultsVaultNameNotificationConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountIdVaultsVaultNameNotificationConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountIdVaultsVaultNameJobsJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountIdPoliciesDataRetrievalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountIdPoliciesDataRetrievalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountIdVaultsVaultNameJobsJobIdOutputRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountIdVaultsVaultNameJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountIdVaultsVaultNameJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountIdVaultsVaultNameMultipartUploadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountIdVaultsVaultNameMultipartUploadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountIdProvisionedCapacityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountIdProvisionedCapacityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountIdVaultsVaultNameTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountIdVaultsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountIdVaultsVaultNameTagsOperationRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountIdVaultsVaultNameArchivesRoute, (c) => {
    throw new Error('Not implemented')
  })
