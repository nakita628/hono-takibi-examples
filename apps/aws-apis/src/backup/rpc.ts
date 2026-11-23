import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function deleteLegalHoldsLegalHoldIdCancelDescription(
  args: InferRequestType<
    (typeof client)['legal-holds'][':legalHoldId#cancelDescription']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['legal-holds'][':legalHoldId#cancelDescription'].$delete(args, options),
  )
}

export async function getBackupPlansIndex(
  args: InferRequestType<typeof client.backup.plans.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.backup.plans.index.$get(args, options))
}

export async function putBackupPlansIndex(
  args: InferRequestType<typeof client.backup.plans.index.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.backup.plans.index.$put(args, options))
}

export async function getBackupPlansBackupPlanIdSelectionsIndex(
  args: InferRequestType<
    (typeof client.backup.plans)[':backupPlanId']['selections']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.backup.plans[':backupPlanId'].selections.index.$get(args, options),
  )
}

export async function putBackupPlansBackupPlanIdSelectionsIndex(
  args: InferRequestType<
    (typeof client.backup.plans)[':backupPlanId']['selections']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.backup.plans[':backupPlanId'].selections.index.$put(args, options),
  )
}

export async function getBackupVaultsBackupVaultName(
  args: InferRequestType<(typeof client)['backup-vaults'][':backupVaultName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['backup-vaults'][':backupVaultName'].$get(args, options))
}

export async function putBackupVaultsBackupVaultName(
  args: InferRequestType<(typeof client)['backup-vaults'][':backupVaultName']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['backup-vaults'][':backupVaultName'].$put(args, options))
}

export async function deleteBackupVaultsBackupVaultName(
  args: InferRequestType<(typeof client)['backup-vaults'][':backupVaultName']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['backup-vaults'][':backupVaultName'].$delete(args, options))
}

export async function getAuditFrameworks(
  args: InferRequestType<typeof client.audit.frameworks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.audit.frameworks.$get(args, options))
}

export async function postAuditFrameworks(
  args: InferRequestType<typeof client.audit.frameworks.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.audit.frameworks.$post(args, options))
}

export async function getLegalHoldsIndex(
  args: InferRequestType<(typeof client)['legal-holds']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['legal-holds'].index.$get(args, options))
}

export async function postLegalHoldsIndex(
  args: InferRequestType<(typeof client)['legal-holds']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['legal-holds'].index.$post(args, options))
}

export async function getAuditReportPlans(
  args: InferRequestType<(typeof client.audit)['report-plans']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.audit['report-plans'].$get(args, options))
}

export async function postAuditReportPlans(
  args: InferRequestType<(typeof client.audit)['report-plans']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.audit['report-plans'].$post(args, options))
}

export async function postBackupPlansBackupPlanId(
  args: InferRequestType<(typeof client.backup.plans)[':backupPlanId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.backup.plans[':backupPlanId'].$post(args, options))
}

export async function deleteBackupPlansBackupPlanId(
  args: InferRequestType<(typeof client.backup.plans)[':backupPlanId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.backup.plans[':backupPlanId'].$delete(args, options))
}

export async function getBackupPlansBackupPlanIdSelectionsSelectionId(
  args: InferRequestType<
    (typeof client.backup.plans)[':backupPlanId']['selections'][':selectionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.backup.plans[':backupPlanId'].selections[':selectionId'].$get(args, options),
  )
}

export async function deleteBackupPlansBackupPlanIdSelectionsSelectionId(
  args: InferRequestType<
    (typeof client.backup.plans)[':backupPlanId']['selections'][':selectionId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.backup.plans[':backupPlanId'].selections[':selectionId'].$delete(args, options),
  )
}

export async function getBackupVaultsBackupVaultNameAccessPolicy(
  args: InferRequestType<
    (typeof client)['backup-vaults'][':backupVaultName']['access-policy']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['backup-vaults'][':backupVaultName']['access-policy'].$get(args, options),
  )
}

export async function putBackupVaultsBackupVaultNameAccessPolicy(
  args: InferRequestType<
    (typeof client)['backup-vaults'][':backupVaultName']['access-policy']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['backup-vaults'][':backupVaultName']['access-policy'].$put(args, options),
  )
}

export async function deleteBackupVaultsBackupVaultNameAccessPolicy(
  args: InferRequestType<
    (typeof client)['backup-vaults'][':backupVaultName']['access-policy']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['backup-vaults'][':backupVaultName']['access-policy'].$delete(args, options),
  )
}

export async function putBackupVaultsBackupVaultNameVaultLock(
  args: InferRequestType<
    (typeof client)['backup-vaults'][':backupVaultName']['vault-lock']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['backup-vaults'][':backupVaultName']['vault-lock'].$put(args, options),
  )
}

export async function deleteBackupVaultsBackupVaultNameVaultLock(
  args: InferRequestType<
    (typeof client)['backup-vaults'][':backupVaultName']['vault-lock']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['backup-vaults'][':backupVaultName']['vault-lock'].$delete(args, options),
  )
}

export async function getBackupVaultsBackupVaultNameNotificationConfiguration(
  args: InferRequestType<
    (typeof client)['backup-vaults'][':backupVaultName']['notification-configuration']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['backup-vaults'][':backupVaultName']['notification-configuration'].$get(args, options),
  )
}

export async function putBackupVaultsBackupVaultNameNotificationConfiguration(
  args: InferRequestType<
    (typeof client)['backup-vaults'][':backupVaultName']['notification-configuration']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['backup-vaults'][':backupVaultName']['notification-configuration'].$put(args, options),
  )
}

export async function deleteBackupVaultsBackupVaultNameNotificationConfiguration(
  args: InferRequestType<
    (typeof client)['backup-vaults'][':backupVaultName']['notification-configuration']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['backup-vaults'][':backupVaultName']['notification-configuration'].$delete(
      args,
      options,
    ),
  )
}

export async function getAuditFrameworksFrameworkName(
  args: InferRequestType<(typeof client.audit.frameworks)[':frameworkName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.audit.frameworks[':frameworkName'].$get(args, options))
}

export async function putAuditFrameworksFrameworkName(
  args: InferRequestType<(typeof client.audit.frameworks)[':frameworkName']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.audit.frameworks[':frameworkName'].$put(args, options))
}

export async function deleteAuditFrameworksFrameworkName(
  args: InferRequestType<(typeof client.audit.frameworks)[':frameworkName']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.audit.frameworks[':frameworkName'].$delete(args, options))
}

export async function getBackupVaultsBackupVaultNameRecoveryPointsRecoveryPointArn(
  args: InferRequestType<
    (typeof client)['backup-vaults'][':backupVaultName']['recovery-points'][':recoveryPointArn']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['backup-vaults'][':backupVaultName']['recovery-points'][':recoveryPointArn'].$get(
      args,
      options,
    ),
  )
}

export async function postBackupVaultsBackupVaultNameRecoveryPointsRecoveryPointArn(
  args: InferRequestType<
    (typeof client)['backup-vaults'][':backupVaultName']['recovery-points'][':recoveryPointArn']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['backup-vaults'][':backupVaultName']['recovery-points'][':recoveryPointArn'].$post(
      args,
      options,
    ),
  )
}

export async function deleteBackupVaultsBackupVaultNameRecoveryPointsRecoveryPointArn(
  args: InferRequestType<
    (typeof client)['backup-vaults'][':backupVaultName']['recovery-points'][':recoveryPointArn']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['backup-vaults'][':backupVaultName']['recovery-points'][':recoveryPointArn'].$delete(
      args,
      options,
    ),
  )
}

export async function getAuditReportPlansReportPlanName(
  args: InferRequestType<(typeof client.audit)['report-plans'][':reportPlanName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.audit['report-plans'][':reportPlanName'].$get(args, options))
}

export async function putAuditReportPlansReportPlanName(
  args: InferRequestType<(typeof client.audit)['report-plans'][':reportPlanName']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.audit['report-plans'][':reportPlanName'].$put(args, options))
}

export async function deleteAuditReportPlansReportPlanName(
  args: InferRequestType<(typeof client.audit)['report-plans'][':reportPlanName']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.audit['report-plans'][':reportPlanName'].$delete(args, options))
}

export async function getBackupJobsBackupJobId(
  args: InferRequestType<(typeof client)['backup-jobs'][':backupJobId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['backup-jobs'][':backupJobId'].$get(args, options))
}

export async function postBackupJobsBackupJobId(
  args: InferRequestType<(typeof client)['backup-jobs'][':backupJobId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['backup-jobs'][':backupJobId'].$post(args, options))
}

export async function getCopyJobsCopyJobId(
  args: InferRequestType<(typeof client)['copy-jobs'][':copyJobId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['copy-jobs'][':copyJobId'].$get(args, options))
}

export async function getGlobalSettings(
  args: InferRequestType<(typeof client)['global-settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['global-settings'].$get(args, options))
}

export async function putGlobalSettings(
  args: InferRequestType<(typeof client)['global-settings']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['global-settings'].$put(args, options))
}

export async function getResourcesResourceArn(
  args: InferRequestType<(typeof client.resources)[':resourceArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.resources[':resourceArn'].$get(args, options))
}

export async function getAccountSettings(
  args: InferRequestType<(typeof client)['account-settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['account-settings'].$get(args, options))
}

export async function putAccountSettings(
  args: InferRequestType<(typeof client)['account-settings']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['account-settings'].$put(args, options))
}

export async function getAuditReportJobsReportJobId(
  args: InferRequestType<(typeof client.audit)['report-jobs'][':reportJobId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.audit['report-jobs'][':reportJobId'].$get(args, options))
}

export async function getRestoreJobsRestoreJobId(
  args: InferRequestType<(typeof client)['restore-jobs'][':restoreJobId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['restore-jobs'][':restoreJobId'].$get(args, options))
}

export async function postBackupVaultsBackupVaultNameRecoveryPointsRecoveryPointArnDisassociate(
  args: InferRequestType<
    (typeof client)['backup-vaults'][':backupVaultName']['recovery-points'][':recoveryPointArn']['disassociate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['backup-vaults'][':backupVaultName']['recovery-points'][
      ':recoveryPointArn'
    ].disassociate.$post(args, options),
  )
}

export async function deleteBackupVaultsBackupVaultNameRecoveryPointsRecoveryPointArnParentAssociation(
  args: InferRequestType<
    (typeof client)['backup-vaults'][':backupVaultName']['recovery-points'][':recoveryPointArn']['parentAssociation']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['backup-vaults'][':backupVaultName']['recovery-points'][
      ':recoveryPointArn'
    ].parentAssociation.$delete(args, options),
  )
}

export async function getBackupPlansBackupPlanIdToTemplateIndex(
  args: InferRequestType<
    (typeof client.backup.plans)[':backupPlanId']['toTemplate']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.backup.plans[':backupPlanId'].toTemplate.index.$get(args, options),
  )
}

export async function getBackupPlansBackupPlanIdIndex(
  args: InferRequestType<(typeof client.backup.plans)[':backupPlanId']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.backup.plans[':backupPlanId'].index.$get(args, options))
}

export async function postBackupTemplateJsonToPlan(
  args: InferRequestType<typeof client.backup.template.json.toPlan.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.backup.template.json.toPlan.$post(args, options))
}

export async function getBackupTemplatePlansTemplateIdToPlan(
  args: InferRequestType<(typeof client.backup.template.plans)[':templateId']['toPlan']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.backup.template.plans[':templateId'].toPlan.$get(args, options))
}

export async function getLegalHoldsLegalHoldIdIndex(
  args: InferRequestType<(typeof client)['legal-holds'][':legalHoldId']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['legal-holds'][':legalHoldId'].index.$get(args, options))
}

export async function getBackupVaultsBackupVaultNameRecoveryPointsRecoveryPointArnRestoreMetadata(
  args: InferRequestType<
    (typeof client)['backup-vaults'][':backupVaultName']['recovery-points'][':recoveryPointArn']['restore-metadata']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['backup-vaults'][':backupVaultName']['recovery-points'][':recoveryPointArn'][
      'restore-metadata'
    ].$get(args, options),
  )
}

export async function getSupportedResourceTypes(
  args: InferRequestType<(typeof client)['supported-resource-types']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['supported-resource-types'].$get(args, options))
}

export async function getBackupJobsIndex(
  args: InferRequestType<(typeof client)['backup-jobs']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['backup-jobs'].index.$get(args, options))
}

export async function getBackupTemplatePlans(
  args: InferRequestType<typeof client.backup.template.plans.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.backup.template.plans.$get(args, options))
}

export async function getBackupPlansBackupPlanIdVersionsIndex(
  args: InferRequestType<
    (typeof client.backup.plans)[':backupPlanId']['versions']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.backup.plans[':backupPlanId'].versions.index.$get(args, options),
  )
}

export async function getBackupVaultsIndex(
  args: InferRequestType<(typeof client)['backup-vaults']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['backup-vaults'].index.$get(args, options))
}

export async function getCopyJobsIndex(
  args: InferRequestType<(typeof client)['copy-jobs']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['copy-jobs'].index.$get(args, options))
}

export async function getResourcesIndex(
  args: InferRequestType<typeof client.resources.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.resources.index.$get(args, options))
}

export async function getBackupVaultsBackupVaultNameRecoveryPointsIndex(
  args: InferRequestType<
    (typeof client)['backup-vaults'][':backupVaultName']['recovery-points']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['backup-vaults'][':backupVaultName']['recovery-points'].index.$get(args, options),
  )
}

export async function getLegalHoldsLegalHoldIdRecoveryPoints(
  args: InferRequestType<(typeof client)['legal-holds'][':legalHoldId']['recovery-points']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['legal-holds'][':legalHoldId']['recovery-points'].$get(args, options),
  )
}

export async function getResourcesResourceArnRecoveryPointsIndex(
  args: InferRequestType<
    (typeof client.resources)[':resourceArn']['recovery-points']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.resources[':resourceArn']['recovery-points'].index.$get(args, options),
  )
}

export async function getAuditReportJobs(
  args: InferRequestType<(typeof client.audit)['report-jobs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.audit['report-jobs'].$get(args, options))
}

export async function getRestoreJobsIndex(
  args: InferRequestType<(typeof client)['restore-jobs']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['restore-jobs'].index.$get(args, options))
}

export async function getTagsResourceArnIndex(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':resourceArn'].index.$get(args, options))
}

export async function putBackupJobs(
  args: InferRequestType<(typeof client)['backup-jobs']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['backup-jobs'].$put(args, options))
}

export async function putCopyJobs(
  args: InferRequestType<(typeof client)['copy-jobs']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['copy-jobs'].$put(args, options))
}

export async function postAuditReportJobsReportPlanName(
  args: InferRequestType<(typeof client.audit)['report-jobs'][':reportPlanName']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.audit['report-jobs'][':reportPlanName'].$post(args, options))
}

export async function putRestoreJobs(
  args: InferRequestType<(typeof client)['restore-jobs']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['restore-jobs'].$put(args, options))
}

export async function postTagsResourceArn(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':resourceArn'].$post(args, options))
}

export async function postUntagResourceArn(
  args: InferRequestType<(typeof client.untag)[':resourceArn']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.untag[':resourceArn'].$post(args, options))
}
