import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAuditFrameworksFrameworkNameRoute,
  deleteAuditReportPlansReportPlanNameRoute,
  deleteBackupPlansBackupPlanIdRoute,
  deleteBackupPlansBackupPlanIdSelectionsSelectionIdRoute,
  deleteBackupVaultsBackupVaultNameAccessPolicyRoute,
  deleteBackupVaultsBackupVaultNameNotificationConfigurationRoute,
  deleteBackupVaultsBackupVaultNameRecoveryPointsRecoveryPointArnParentAssociationRoute,
  deleteBackupVaultsBackupVaultNameRecoveryPointsRecoveryPointArnRoute,
  deleteBackupVaultsBackupVaultNameRoute,
  deleteBackupVaultsBackupVaultNameVaultLockRoute,
  deleteLegalHoldsLegalHoldIdCancelDescriptionRoute,
  getAccountSettingsRoute,
  getAuditFrameworksFrameworkNameRoute,
  getAuditFrameworksRoute,
  getAuditReportJobsReportJobIdRoute,
  getAuditReportJobsRoute,
  getAuditReportPlansReportPlanNameRoute,
  getAuditReportPlansRoute,
  getBackupJobsBackupJobIdRoute,
  getBackupJobsIndexRoute,
  getBackupPlansBackupPlanIdIndexRoute,
  getBackupPlansBackupPlanIdSelectionsIndexRoute,
  getBackupPlansBackupPlanIdSelectionsSelectionIdRoute,
  getBackupPlansBackupPlanIdToTemplateIndexRoute,
  getBackupPlansBackupPlanIdVersionsIndexRoute,
  getBackupPlansIndexRoute,
  getBackupTemplatePlansRoute,
  getBackupTemplatePlansTemplateIdToPlanRoute,
  getBackupVaultsBackupVaultNameAccessPolicyRoute,
  getBackupVaultsBackupVaultNameNotificationConfigurationRoute,
  getBackupVaultsBackupVaultNameRecoveryPointsIndexRoute,
  getBackupVaultsBackupVaultNameRecoveryPointsRecoveryPointArnRestoreMetadataRoute,
  getBackupVaultsBackupVaultNameRecoveryPointsRecoveryPointArnRoute,
  getBackupVaultsBackupVaultNameRoute,
  getBackupVaultsIndexRoute,
  getCopyJobsCopyJobIdRoute,
  getCopyJobsIndexRoute,
  getGlobalSettingsRoute,
  getLegalHoldsIndexRoute,
  getLegalHoldsLegalHoldIdIndexRoute,
  getLegalHoldsLegalHoldIdRecoveryPointsRoute,
  getResourcesIndexRoute,
  getResourcesResourceArnRecoveryPointsIndexRoute,
  getResourcesResourceArnRoute,
  getRestoreJobsIndexRoute,
  getRestoreJobsRestoreJobIdRoute,
  getSupportedResourceTypesRoute,
  getTagsResourceArnIndexRoute,
  postAuditFrameworksRoute,
  postAuditReportJobsReportPlanNameRoute,
  postAuditReportPlansRoute,
  postBackupJobsBackupJobIdRoute,
  postBackupPlansBackupPlanIdRoute,
  postBackupTemplateJsonToPlanRoute,
  postBackupVaultsBackupVaultNameRecoveryPointsRecoveryPointArnDisassociateRoute,
  postBackupVaultsBackupVaultNameRecoveryPointsRecoveryPointArnRoute,
  postLegalHoldsIndexRoute,
  postTagsResourceArnRoute,
  postUntagResourceArnRoute,
  putAccountSettingsRoute,
  putAuditFrameworksFrameworkNameRoute,
  putAuditReportPlansReportPlanNameRoute,
  putBackupJobsRoute,
  putBackupPlansBackupPlanIdSelectionsIndexRoute,
  putBackupPlansIndexRoute,
  putBackupVaultsBackupVaultNameAccessPolicyRoute,
  putBackupVaultsBackupVaultNameNotificationConfigurationRoute,
  putBackupVaultsBackupVaultNameRoute,
  putBackupVaultsBackupVaultNameVaultLockRoute,
  putCopyJobsRoute,
  putGlobalSettingsRoute,
  putRestoreJobsRoute,
} from './routes'
import {
  deleteAuditFrameworksFrameworkNameRouteHandler,
  deleteAuditReportPlansReportPlanNameRouteHandler,
  deleteBackupPlansBackupPlanIdRouteHandler,
  deleteBackupPlansBackupPlanIdSelectionsSelectionIdRouteHandler,
  deleteBackupVaultsBackupVaultNameAccessPolicyRouteHandler,
  deleteBackupVaultsBackupVaultNameNotificationConfigurationRouteHandler,
  deleteBackupVaultsBackupVaultNameRecoveryPointsRecoveryPointArnParentAssociationRouteHandler,
  deleteBackupVaultsBackupVaultNameRecoveryPointsRecoveryPointArnRouteHandler,
  deleteBackupVaultsBackupVaultNameRouteHandler,
  deleteBackupVaultsBackupVaultNameVaultLockRouteHandler,
  deleteLegalHoldsLegalHoldIdCancelDescriptionRouteHandler,
  getAccountSettingsRouteHandler,
  getAuditFrameworksFrameworkNameRouteHandler,
  getAuditFrameworksRouteHandler,
  getAuditReportJobsReportJobIdRouteHandler,
  getAuditReportJobsRouteHandler,
  getAuditReportPlansReportPlanNameRouteHandler,
  getAuditReportPlansRouteHandler,
  getBackupJobsBackupJobIdRouteHandler,
  getBackupJobsIndexRouteHandler,
  getBackupPlansBackupPlanIdIndexRouteHandler,
  getBackupPlansBackupPlanIdSelectionsIndexRouteHandler,
  getBackupPlansBackupPlanIdSelectionsSelectionIdRouteHandler,
  getBackupPlansBackupPlanIdToTemplateIndexRouteHandler,
  getBackupPlansBackupPlanIdVersionsIndexRouteHandler,
  getBackupPlansIndexRouteHandler,
  getBackupTemplatePlansRouteHandler,
  getBackupTemplatePlansTemplateIdToPlanRouteHandler,
  getBackupVaultsBackupVaultNameAccessPolicyRouteHandler,
  getBackupVaultsBackupVaultNameNotificationConfigurationRouteHandler,
  getBackupVaultsBackupVaultNameRecoveryPointsIndexRouteHandler,
  getBackupVaultsBackupVaultNameRecoveryPointsRecoveryPointArnRestoreMetadataRouteHandler,
  getBackupVaultsBackupVaultNameRecoveryPointsRecoveryPointArnRouteHandler,
  getBackupVaultsBackupVaultNameRouteHandler,
  getBackupVaultsIndexRouteHandler,
  getCopyJobsCopyJobIdRouteHandler,
  getCopyJobsIndexRouteHandler,
  getGlobalSettingsRouteHandler,
  getLegalHoldsIndexRouteHandler,
  getLegalHoldsLegalHoldIdIndexRouteHandler,
  getLegalHoldsLegalHoldIdRecoveryPointsRouteHandler,
  getResourcesIndexRouteHandler,
  getResourcesResourceArnRecoveryPointsIndexRouteHandler,
  getResourcesResourceArnRouteHandler,
  getRestoreJobsIndexRouteHandler,
  getRestoreJobsRestoreJobIdRouteHandler,
  getSupportedResourceTypesRouteHandler,
  getTagsResourceArnIndexRouteHandler,
  postAuditFrameworksRouteHandler,
  postAuditReportJobsReportPlanNameRouteHandler,
  postAuditReportPlansRouteHandler,
  postBackupJobsBackupJobIdRouteHandler,
  postBackupPlansBackupPlanIdRouteHandler,
  postBackupTemplateJsonToPlanRouteHandler,
  postBackupVaultsBackupVaultNameRecoveryPointsRecoveryPointArnDisassociateRouteHandler,
  postBackupVaultsBackupVaultNameRecoveryPointsRecoveryPointArnRouteHandler,
  postLegalHoldsIndexRouteHandler,
  postTagsResourceArnRouteHandler,
  postUntagResourceArnRouteHandler,
  putAccountSettingsRouteHandler,
  putAuditFrameworksFrameworkNameRouteHandler,
  putAuditReportPlansReportPlanNameRouteHandler,
  putBackupJobsRouteHandler,
  putBackupPlansBackupPlanIdSelectionsIndexRouteHandler,
  putBackupPlansIndexRouteHandler,
  putBackupVaultsBackupVaultNameAccessPolicyRouteHandler,
  putBackupVaultsBackupVaultNameNotificationConfigurationRouteHandler,
  putBackupVaultsBackupVaultNameRouteHandler,
  putBackupVaultsBackupVaultNameVaultLockRouteHandler,
  putCopyJobsRouteHandler,
  putGlobalSettingsRouteHandler,
  putRestoreJobsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    deleteLegalHoldsLegalHoldIdCancelDescriptionRoute,
    deleteLegalHoldsLegalHoldIdCancelDescriptionRouteHandler,
  )
  .openapi(putBackupPlansIndexRoute, putBackupPlansIndexRouteHandler)
  .openapi(getBackupPlansIndexRoute, getBackupPlansIndexRouteHandler)
  .openapi(
    putBackupPlansBackupPlanIdSelectionsIndexRoute,
    putBackupPlansBackupPlanIdSelectionsIndexRouteHandler,
  )
  .openapi(
    getBackupPlansBackupPlanIdSelectionsIndexRoute,
    getBackupPlansBackupPlanIdSelectionsIndexRouteHandler,
  )
  .openapi(putBackupVaultsBackupVaultNameRoute, putBackupVaultsBackupVaultNameRouteHandler)
  .openapi(deleteBackupVaultsBackupVaultNameRoute, deleteBackupVaultsBackupVaultNameRouteHandler)
  .openapi(getBackupVaultsBackupVaultNameRoute, getBackupVaultsBackupVaultNameRouteHandler)
  .openapi(postAuditFrameworksRoute, postAuditFrameworksRouteHandler)
  .openapi(getAuditFrameworksRoute, getAuditFrameworksRouteHandler)
  .openapi(postLegalHoldsIndexRoute, postLegalHoldsIndexRouteHandler)
  .openapi(getLegalHoldsIndexRoute, getLegalHoldsIndexRouteHandler)
  .openapi(postAuditReportPlansRoute, postAuditReportPlansRouteHandler)
  .openapi(getAuditReportPlansRoute, getAuditReportPlansRouteHandler)
  .openapi(deleteBackupPlansBackupPlanIdRoute, deleteBackupPlansBackupPlanIdRouteHandler)
  .openapi(postBackupPlansBackupPlanIdRoute, postBackupPlansBackupPlanIdRouteHandler)
  .openapi(
    deleteBackupPlansBackupPlanIdSelectionsSelectionIdRoute,
    deleteBackupPlansBackupPlanIdSelectionsSelectionIdRouteHandler,
  )
  .openapi(
    getBackupPlansBackupPlanIdSelectionsSelectionIdRoute,
    getBackupPlansBackupPlanIdSelectionsSelectionIdRouteHandler,
  )
  .openapi(
    deleteBackupVaultsBackupVaultNameAccessPolicyRoute,
    deleteBackupVaultsBackupVaultNameAccessPolicyRouteHandler,
  )
  .openapi(
    getBackupVaultsBackupVaultNameAccessPolicyRoute,
    getBackupVaultsBackupVaultNameAccessPolicyRouteHandler,
  )
  .openapi(
    putBackupVaultsBackupVaultNameAccessPolicyRoute,
    putBackupVaultsBackupVaultNameAccessPolicyRouteHandler,
  )
  .openapi(
    deleteBackupVaultsBackupVaultNameVaultLockRoute,
    deleteBackupVaultsBackupVaultNameVaultLockRouteHandler,
  )
  .openapi(
    putBackupVaultsBackupVaultNameVaultLockRoute,
    putBackupVaultsBackupVaultNameVaultLockRouteHandler,
  )
  .openapi(
    deleteBackupVaultsBackupVaultNameNotificationConfigurationRoute,
    deleteBackupVaultsBackupVaultNameNotificationConfigurationRouteHandler,
  )
  .openapi(
    getBackupVaultsBackupVaultNameNotificationConfigurationRoute,
    getBackupVaultsBackupVaultNameNotificationConfigurationRouteHandler,
  )
  .openapi(
    putBackupVaultsBackupVaultNameNotificationConfigurationRoute,
    putBackupVaultsBackupVaultNameNotificationConfigurationRouteHandler,
  )
  .openapi(deleteAuditFrameworksFrameworkNameRoute, deleteAuditFrameworksFrameworkNameRouteHandler)
  .openapi(getAuditFrameworksFrameworkNameRoute, getAuditFrameworksFrameworkNameRouteHandler)
  .openapi(putAuditFrameworksFrameworkNameRoute, putAuditFrameworksFrameworkNameRouteHandler)
  .openapi(
    deleteBackupVaultsBackupVaultNameRecoveryPointsRecoveryPointArnRoute,
    deleteBackupVaultsBackupVaultNameRecoveryPointsRecoveryPointArnRouteHandler,
  )
  .openapi(
    getBackupVaultsBackupVaultNameRecoveryPointsRecoveryPointArnRoute,
    getBackupVaultsBackupVaultNameRecoveryPointsRecoveryPointArnRouteHandler,
  )
  .openapi(
    postBackupVaultsBackupVaultNameRecoveryPointsRecoveryPointArnRoute,
    postBackupVaultsBackupVaultNameRecoveryPointsRecoveryPointArnRouteHandler,
  )
  .openapi(
    deleteAuditReportPlansReportPlanNameRoute,
    deleteAuditReportPlansReportPlanNameRouteHandler,
  )
  .openapi(getAuditReportPlansReportPlanNameRoute, getAuditReportPlansReportPlanNameRouteHandler)
  .openapi(putAuditReportPlansReportPlanNameRoute, putAuditReportPlansReportPlanNameRouteHandler)
  .openapi(getBackupJobsBackupJobIdRoute, getBackupJobsBackupJobIdRouteHandler)
  .openapi(postBackupJobsBackupJobIdRoute, postBackupJobsBackupJobIdRouteHandler)
  .openapi(getCopyJobsCopyJobIdRoute, getCopyJobsCopyJobIdRouteHandler)
  .openapi(getGlobalSettingsRoute, getGlobalSettingsRouteHandler)
  .openapi(putGlobalSettingsRoute, putGlobalSettingsRouteHandler)
  .openapi(getResourcesResourceArnRoute, getResourcesResourceArnRouteHandler)
  .openapi(getAccountSettingsRoute, getAccountSettingsRouteHandler)
  .openapi(putAccountSettingsRoute, putAccountSettingsRouteHandler)
  .openapi(getAuditReportJobsReportJobIdRoute, getAuditReportJobsReportJobIdRouteHandler)
  .openapi(getRestoreJobsRestoreJobIdRoute, getRestoreJobsRestoreJobIdRouteHandler)
  .openapi(
    postBackupVaultsBackupVaultNameRecoveryPointsRecoveryPointArnDisassociateRoute,
    postBackupVaultsBackupVaultNameRecoveryPointsRecoveryPointArnDisassociateRouteHandler,
  )
  .openapi(
    deleteBackupVaultsBackupVaultNameRecoveryPointsRecoveryPointArnParentAssociationRoute,
    deleteBackupVaultsBackupVaultNameRecoveryPointsRecoveryPointArnParentAssociationRouteHandler,
  )
  .openapi(
    getBackupPlansBackupPlanIdToTemplateIndexRoute,
    getBackupPlansBackupPlanIdToTemplateIndexRouteHandler,
  )
  .openapi(getBackupPlansBackupPlanIdIndexRoute, getBackupPlansBackupPlanIdIndexRouteHandler)
  .openapi(postBackupTemplateJsonToPlanRoute, postBackupTemplateJsonToPlanRouteHandler)
  .openapi(
    getBackupTemplatePlansTemplateIdToPlanRoute,
    getBackupTemplatePlansTemplateIdToPlanRouteHandler,
  )
  .openapi(getLegalHoldsLegalHoldIdIndexRoute, getLegalHoldsLegalHoldIdIndexRouteHandler)
  .openapi(
    getBackupVaultsBackupVaultNameRecoveryPointsRecoveryPointArnRestoreMetadataRoute,
    getBackupVaultsBackupVaultNameRecoveryPointsRecoveryPointArnRestoreMetadataRouteHandler,
  )
  .openapi(getSupportedResourceTypesRoute, getSupportedResourceTypesRouteHandler)
  .openapi(getBackupJobsIndexRoute, getBackupJobsIndexRouteHandler)
  .openapi(getBackupTemplatePlansRoute, getBackupTemplatePlansRouteHandler)
  .openapi(
    getBackupPlansBackupPlanIdVersionsIndexRoute,
    getBackupPlansBackupPlanIdVersionsIndexRouteHandler,
  )
  .openapi(getBackupVaultsIndexRoute, getBackupVaultsIndexRouteHandler)
  .openapi(getCopyJobsIndexRoute, getCopyJobsIndexRouteHandler)
  .openapi(getResourcesIndexRoute, getResourcesIndexRouteHandler)
  .openapi(
    getBackupVaultsBackupVaultNameRecoveryPointsIndexRoute,
    getBackupVaultsBackupVaultNameRecoveryPointsIndexRouteHandler,
  )
  .openapi(
    getLegalHoldsLegalHoldIdRecoveryPointsRoute,
    getLegalHoldsLegalHoldIdRecoveryPointsRouteHandler,
  )
  .openapi(
    getResourcesResourceArnRecoveryPointsIndexRoute,
    getResourcesResourceArnRecoveryPointsIndexRouteHandler,
  )
  .openapi(getAuditReportJobsRoute, getAuditReportJobsRouteHandler)
  .openapi(getRestoreJobsIndexRoute, getRestoreJobsIndexRouteHandler)
  .openapi(getTagsResourceArnIndexRoute, getTagsResourceArnIndexRouteHandler)
  .openapi(putBackupJobsRoute, putBackupJobsRouteHandler)
  .openapi(putCopyJobsRoute, putCopyJobsRouteHandler)
  .openapi(postAuditReportJobsReportPlanNameRoute, postAuditReportJobsReportPlanNameRouteHandler)
  .openapi(putRestoreJobsRoute, putRestoreJobsRouteHandler)
  .openapi(postTagsResourceArnRoute, postTagsResourceArnRouteHandler)
  .openapi(postUntagResourceArnRoute, postUntagResourceArnRouteHandler)

export default app
