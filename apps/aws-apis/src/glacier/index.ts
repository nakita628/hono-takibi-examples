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
} from './routes'
import {
  deleteAccountIdVaultsVaultNameAccessPolicyRouteHandler,
  deleteAccountIdVaultsVaultNameArchivesArchiveIdRouteHandler,
  deleteAccountIdVaultsVaultNameLockPolicyRouteHandler,
  deleteAccountIdVaultsVaultNameMultipartUploadsUploadIdRouteHandler,
  deleteAccountIdVaultsVaultNameNotificationConfigurationRouteHandler,
  deleteAccountIdVaultsVaultNameRouteHandler,
  getAccountIdPoliciesDataRetrievalRouteHandler,
  getAccountIdProvisionedCapacityRouteHandler,
  getAccountIdVaultsRouteHandler,
  getAccountIdVaultsVaultNameAccessPolicyRouteHandler,
  getAccountIdVaultsVaultNameJobsJobIdOutputRouteHandler,
  getAccountIdVaultsVaultNameJobsJobIdRouteHandler,
  getAccountIdVaultsVaultNameJobsRouteHandler,
  getAccountIdVaultsVaultNameLockPolicyRouteHandler,
  getAccountIdVaultsVaultNameMultipartUploadsRouteHandler,
  getAccountIdVaultsVaultNameMultipartUploadsUploadIdRouteHandler,
  getAccountIdVaultsVaultNameNotificationConfigurationRouteHandler,
  getAccountIdVaultsVaultNameRouteHandler,
  getAccountIdVaultsVaultNameTagsRouteHandler,
  postAccountIdProvisionedCapacityRouteHandler,
  postAccountIdVaultsVaultNameArchivesRouteHandler,
  postAccountIdVaultsVaultNameJobsRouteHandler,
  postAccountIdVaultsVaultNameLockPolicyLockIdRouteHandler,
  postAccountIdVaultsVaultNameLockPolicyRouteHandler,
  postAccountIdVaultsVaultNameMultipartUploadsRouteHandler,
  postAccountIdVaultsVaultNameMultipartUploadsUploadIdRouteHandler,
  postAccountIdVaultsVaultNameTagsOperationAddRouteHandler,
  postAccountIdVaultsVaultNameTagsOperationRemoveRouteHandler,
  putAccountIdPoliciesDataRetrievalRouteHandler,
  putAccountIdVaultsVaultNameAccessPolicyRouteHandler,
  putAccountIdVaultsVaultNameMultipartUploadsUploadIdRouteHandler,
  putAccountIdVaultsVaultNameNotificationConfigurationRouteHandler,
  putAccountIdVaultsVaultNameRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    deleteAccountIdVaultsVaultNameMultipartUploadsUploadIdRoute,
    deleteAccountIdVaultsVaultNameMultipartUploadsUploadIdRouteHandler,
  )
  .openapi(
    postAccountIdVaultsVaultNameMultipartUploadsUploadIdRoute,
    postAccountIdVaultsVaultNameMultipartUploadsUploadIdRouteHandler,
  )
  .openapi(
    getAccountIdVaultsVaultNameMultipartUploadsUploadIdRoute,
    getAccountIdVaultsVaultNameMultipartUploadsUploadIdRouteHandler,
  )
  .openapi(
    putAccountIdVaultsVaultNameMultipartUploadsUploadIdRoute,
    putAccountIdVaultsVaultNameMultipartUploadsUploadIdRouteHandler,
  )
  .openapi(
    deleteAccountIdVaultsVaultNameLockPolicyRoute,
    deleteAccountIdVaultsVaultNameLockPolicyRouteHandler,
  )
  .openapi(
    getAccountIdVaultsVaultNameLockPolicyRoute,
    getAccountIdVaultsVaultNameLockPolicyRouteHandler,
  )
  .openapi(
    postAccountIdVaultsVaultNameLockPolicyRoute,
    postAccountIdVaultsVaultNameLockPolicyRouteHandler,
  )
  .openapi(
    postAccountIdVaultsVaultNameTagsOperationAddRoute,
    postAccountIdVaultsVaultNameTagsOperationAddRouteHandler,
  )
  .openapi(
    postAccountIdVaultsVaultNameLockPolicyLockIdRoute,
    postAccountIdVaultsVaultNameLockPolicyLockIdRouteHandler,
  )
  .openapi(putAccountIdVaultsVaultNameRoute, putAccountIdVaultsVaultNameRouteHandler)
  .openapi(deleteAccountIdVaultsVaultNameRoute, deleteAccountIdVaultsVaultNameRouteHandler)
  .openapi(getAccountIdVaultsVaultNameRoute, getAccountIdVaultsVaultNameRouteHandler)
  .openapi(
    deleteAccountIdVaultsVaultNameArchivesArchiveIdRoute,
    deleteAccountIdVaultsVaultNameArchivesArchiveIdRouteHandler,
  )
  .openapi(
    deleteAccountIdVaultsVaultNameAccessPolicyRoute,
    deleteAccountIdVaultsVaultNameAccessPolicyRouteHandler,
  )
  .openapi(
    getAccountIdVaultsVaultNameAccessPolicyRoute,
    getAccountIdVaultsVaultNameAccessPolicyRouteHandler,
  )
  .openapi(
    putAccountIdVaultsVaultNameAccessPolicyRoute,
    putAccountIdVaultsVaultNameAccessPolicyRouteHandler,
  )
  .openapi(
    deleteAccountIdVaultsVaultNameNotificationConfigurationRoute,
    deleteAccountIdVaultsVaultNameNotificationConfigurationRouteHandler,
  )
  .openapi(
    getAccountIdVaultsVaultNameNotificationConfigurationRoute,
    getAccountIdVaultsVaultNameNotificationConfigurationRouteHandler,
  )
  .openapi(
    putAccountIdVaultsVaultNameNotificationConfigurationRoute,
    putAccountIdVaultsVaultNameNotificationConfigurationRouteHandler,
  )
  .openapi(
    getAccountIdVaultsVaultNameJobsJobIdRoute,
    getAccountIdVaultsVaultNameJobsJobIdRouteHandler,
  )
  .openapi(getAccountIdPoliciesDataRetrievalRoute, getAccountIdPoliciesDataRetrievalRouteHandler)
  .openapi(putAccountIdPoliciesDataRetrievalRoute, putAccountIdPoliciesDataRetrievalRouteHandler)
  .openapi(
    getAccountIdVaultsVaultNameJobsJobIdOutputRoute,
    getAccountIdVaultsVaultNameJobsJobIdOutputRouteHandler,
  )
  .openapi(postAccountIdVaultsVaultNameJobsRoute, postAccountIdVaultsVaultNameJobsRouteHandler)
  .openapi(getAccountIdVaultsVaultNameJobsRoute, getAccountIdVaultsVaultNameJobsRouteHandler)
  .openapi(
    postAccountIdVaultsVaultNameMultipartUploadsRoute,
    postAccountIdVaultsVaultNameMultipartUploadsRouteHandler,
  )
  .openapi(
    getAccountIdVaultsVaultNameMultipartUploadsRoute,
    getAccountIdVaultsVaultNameMultipartUploadsRouteHandler,
  )
  .openapi(getAccountIdProvisionedCapacityRoute, getAccountIdProvisionedCapacityRouteHandler)
  .openapi(postAccountIdProvisionedCapacityRoute, postAccountIdProvisionedCapacityRouteHandler)
  .openapi(getAccountIdVaultsVaultNameTagsRoute, getAccountIdVaultsVaultNameTagsRouteHandler)
  .openapi(getAccountIdVaultsRoute, getAccountIdVaultsRouteHandler)
  .openapi(
    postAccountIdVaultsVaultNameTagsOperationRemoveRoute,
    postAccountIdVaultsVaultNameTagsOperationRemoveRouteHandler,
  )
  .openapi(
    postAccountIdVaultsVaultNameArchivesRoute,
    postAccountIdVaultsVaultNameArchivesRouteHandler,
  )

export default app
