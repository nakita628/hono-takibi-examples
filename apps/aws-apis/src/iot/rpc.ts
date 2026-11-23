import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function patchAcceptCertificateTransferCertificateId(
  args: InferRequestType<
    (typeof client)['accept-certificate-transfer'][':certificateId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['accept-certificate-transfer'][':certificateId'].$patch(args, options),
  )
}

export async function putBillingGroupsAddThingToBillingGroup(
  args: InferRequestType<(typeof client)['billing-groups']['addThingToBillingGroup']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['billing-groups'].addThingToBillingGroup.$put(args, options))
}

export async function putThingGroupsAddThingToThingGroup(
  args: InferRequestType<(typeof client)['thing-groups']['addThingToThingGroup']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['thing-groups'].addThingToThingGroup.$put(args, options))
}

export async function postJobsJobIdTargets(
  args: InferRequestType<(typeof client.jobs)[':jobId']['targets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.jobs[':jobId'].targets.$post(args, options))
}

export async function putTargetPoliciesPolicyName(
  args: InferRequestType<(typeof client)['target-policies'][':policyName']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['target-policies'][':policyName'].$put(args, options))
}

export async function postTargetPoliciesPolicyName(
  args: InferRequestType<(typeof client)['target-policies'][':policyName']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['target-policies'][':policyName'].$post(args, options))
}

export async function putPrincipalPoliciesPolicyNameXAmznIotPrincipal(
  args: InferRequestType<
    (typeof client)['principal-policies'][':policyName#x-amzn-iot-principal']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['principal-policies'][':policyName#x-amzn-iot-principal'].$put(args, options),
  )
}

export async function deletePrincipalPoliciesPolicyNameXAmznIotPrincipal(
  args: InferRequestType<
    (typeof client)['principal-policies'][':policyName#x-amzn-iot-principal']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['principal-policies'][':policyName#x-amzn-iot-principal'].$delete(args, options),
  )
}

export async function putSecurityProfilesSecurityProfileNameTargetsSecurityProfileTargetArn(
  args: InferRequestType<
    (typeof client)['security-profiles'][':securityProfileName']['targets#securityProfileTargetArn']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['security-profiles'][':securityProfileName']['targets#securityProfileTargetArn'].$put(
      args,
      options,
    ),
  )
}

export async function deleteSecurityProfilesSecurityProfileNameTargetsSecurityProfileTargetArn(
  args: InferRequestType<
    (typeof client)['security-profiles'][':securityProfileName']['targets#securityProfileTargetArn']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['security-profiles'][':securityProfileName']['targets#securityProfileTargetArn'].$delete(
      args,
      options,
    ),
  )
}

export async function putThingsThingNamePrincipalsXAmznPrincipal(
  args: InferRequestType<
    (typeof client.things)[':thingName']['principals#x-amzn-principal']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.things[':thingName']['principals#x-amzn-principal'].$put(args, options),
  )
}

export async function deleteThingsThingNamePrincipalsXAmznPrincipal(
  args: InferRequestType<
    (typeof client.things)[':thingName']['principals#x-amzn-principal']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.things[':thingName']['principals#x-amzn-principal'].$delete(args, options),
  )
}

export async function putAuditMitigationactionsTasksTaskIdCancel(
  args: InferRequestType<
    (typeof client.audit.mitigationactions.tasks)[':taskId']['cancel']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.audit.mitigationactions.tasks[':taskId'].cancel.$put(args, options),
  )
}

export async function putAuditTasksTaskIdCancel(
  args: InferRequestType<(typeof client.audit.tasks)[':taskId']['cancel']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.audit.tasks[':taskId'].cancel.$put(args, options))
}

export async function patchCancelCertificateTransferCertificateId(
  args: InferRequestType<
    (typeof client)['cancel-certificate-transfer'][':certificateId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['cancel-certificate-transfer'][':certificateId'].$patch(args, options),
  )
}

export async function putDetectMitigationactionsTasksTaskIdCancel(
  args: InferRequestType<
    (typeof client.detect.mitigationactions.tasks)[':taskId']['cancel']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.detect.mitigationactions.tasks[':taskId'].cancel.$put(args, options),
  )
}

export async function putJobsJobIdCancel(
  args: InferRequestType<(typeof client.jobs)[':jobId']['cancel']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.jobs[':jobId'].cancel.$put(args, options))
}

export async function putThingsThingNameJobsJobIdCancel(
  args: InferRequestType<(typeof client.things)[':thingName']['jobs'][':jobId']['cancel']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.things[':thingName'].jobs[':jobId'].cancel.$put(args, options))
}

export async function getDefaultAuthorizer(
  args: InferRequestType<(typeof client)['default-authorizer']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['default-authorizer'].$get(args, options))
}

export async function postDefaultAuthorizer(
  args: InferRequestType<(typeof client)['default-authorizer']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['default-authorizer'].$post(args, options))
}

export async function deleteDefaultAuthorizer(
  args: InferRequestType<(typeof client)['default-authorizer']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['default-authorizer'].$delete(args, options))
}

export async function getConfirmdestinationConfirmationToken(
  args: InferRequestType<(typeof client.confirmdestination)[':confirmationToken']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.confirmdestination[':confirmationToken'].$get(args, options))
}

export async function postAuditSuppressionsCreate(
  args: InferRequestType<typeof client.audit.suppressions.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.audit.suppressions.create.$post(args, options))
}

export async function getAuthorizerAuthorizerName(
  args: InferRequestType<(typeof client.authorizer)[':authorizerName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authorizer[':authorizerName'].$get(args, options))
}

export async function putAuthorizerAuthorizerName(
  args: InferRequestType<(typeof client.authorizer)[':authorizerName']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authorizer[':authorizerName'].$put(args, options))
}

export async function postAuthorizerAuthorizerName(
  args: InferRequestType<(typeof client.authorizer)[':authorizerName']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authorizer[':authorizerName'].$post(args, options))
}

export async function deleteAuthorizerAuthorizerName(
  args: InferRequestType<(typeof client.authorizer)[':authorizerName']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authorizer[':authorizerName'].$delete(args, options))
}

export async function getBillingGroupsBillingGroupName(
  args: InferRequestType<(typeof client)['billing-groups'][':billingGroupName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['billing-groups'][':billingGroupName'].$get(args, options))
}

export async function postBillingGroupsBillingGroupName(
  args: InferRequestType<(typeof client)['billing-groups'][':billingGroupName']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['billing-groups'][':billingGroupName'].$post(args, options))
}

export async function deleteBillingGroupsBillingGroupName(
  args: InferRequestType<(typeof client)['billing-groups'][':billingGroupName']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['billing-groups'][':billingGroupName'].$delete(args, options))
}

export async function patchBillingGroupsBillingGroupName(
  args: InferRequestType<(typeof client)['billing-groups'][':billingGroupName']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['billing-groups'][':billingGroupName'].$patch(args, options))
}

export async function getCertificates(
  args: InferRequestType<typeof client.certificates.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.certificates.$get(args, options))
}

export async function postCertificates(
  args: InferRequestType<typeof client.certificates.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.certificates.$post(args, options))
}

export async function getCustomMetricMetricName(
  args: InferRequestType<(typeof client)['custom-metric'][':metricName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['custom-metric'][':metricName'].$get(args, options))
}

export async function postCustomMetricMetricName(
  args: InferRequestType<(typeof client)['custom-metric'][':metricName']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['custom-metric'][':metricName'].$post(args, options))
}

export async function deleteCustomMetricMetricName(
  args: InferRequestType<(typeof client)['custom-metric'][':metricName']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['custom-metric'][':metricName'].$delete(args, options))
}

export async function patchCustomMetricMetricName(
  args: InferRequestType<(typeof client)['custom-metric'][':metricName']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['custom-metric'][':metricName'].$patch(args, options))
}

export async function getDimensionsName(
  args: InferRequestType<(typeof client.dimensions)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dimensions[':name'].$get(args, options))
}

export async function postDimensionsName(
  args: InferRequestType<(typeof client.dimensions)[':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dimensions[':name'].$post(args, options))
}

export async function deleteDimensionsName(
  args: InferRequestType<(typeof client.dimensions)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dimensions[':name'].$delete(args, options))
}

export async function patchDimensionsName(
  args: InferRequestType<(typeof client.dimensions)[':name']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dimensions[':name'].$patch(args, options))
}

export async function getDomainConfigurationsDomainConfigurationName(
  args: InferRequestType<(typeof client.domainConfigurations)[':domainConfigurationName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.domainConfigurations[':domainConfigurationName'].$get(args, options),
  )
}

export async function putDomainConfigurationsDomainConfigurationName(
  args: InferRequestType<(typeof client.domainConfigurations)[':domainConfigurationName']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.domainConfigurations[':domainConfigurationName'].$put(args, options),
  )
}

export async function postDomainConfigurationsDomainConfigurationName(
  args: InferRequestType<(typeof client.domainConfigurations)[':domainConfigurationName']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.domainConfigurations[':domainConfigurationName'].$post(args, options),
  )
}

export async function deleteDomainConfigurationsDomainConfigurationName(
  args: InferRequestType<
    (typeof client.domainConfigurations)[':domainConfigurationName']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.domainConfigurations[':domainConfigurationName'].$delete(args, options),
  )
}

export async function postDynamicThingGroupsThingGroupName(
  args: InferRequestType<(typeof client)['dynamic-thing-groups'][':thingGroupName']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['dynamic-thing-groups'][':thingGroupName'].$post(args, options))
}

export async function deleteDynamicThingGroupsThingGroupName(
  args: InferRequestType<(typeof client)['dynamic-thing-groups'][':thingGroupName']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['dynamic-thing-groups'][':thingGroupName'].$delete(args, options),
  )
}

export async function patchDynamicThingGroupsThingGroupName(
  args: InferRequestType<(typeof client)['dynamic-thing-groups'][':thingGroupName']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['dynamic-thing-groups'][':thingGroupName'].$patch(args, options),
  )
}

export async function getFleetMetricMetricName(
  args: InferRequestType<(typeof client)['fleet-metric'][':metricName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['fleet-metric'][':metricName'].$get(args, options))
}

export async function putFleetMetricMetricName(
  args: InferRequestType<(typeof client)['fleet-metric'][':metricName']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['fleet-metric'][':metricName'].$put(args, options))
}

export async function deleteFleetMetricMetricName(
  args: InferRequestType<(typeof client)['fleet-metric'][':metricName']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['fleet-metric'][':metricName'].$delete(args, options))
}

export async function patchFleetMetricMetricName(
  args: InferRequestType<(typeof client)['fleet-metric'][':metricName']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['fleet-metric'][':metricName'].$patch(args, options))
}

export async function getJobsJobId(
  args: InferRequestType<(typeof client.jobs)[':jobId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.jobs[':jobId'].$get(args, options))
}

export async function putJobsJobId(
  args: InferRequestType<(typeof client.jobs)[':jobId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.jobs[':jobId'].$put(args, options))
}

export async function deleteJobsJobId(
  args: InferRequestType<(typeof client.jobs)[':jobId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.jobs[':jobId'].$delete(args, options))
}

export async function patchJobsJobId(
  args: InferRequestType<(typeof client.jobs)[':jobId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.jobs[':jobId'].$patch(args, options))
}

export async function getJobTemplatesJobTemplateId(
  args: InferRequestType<(typeof client)['job-templates'][':jobTemplateId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['job-templates'][':jobTemplateId'].$get(args, options))
}

export async function putJobTemplatesJobTemplateId(
  args: InferRequestType<(typeof client)['job-templates'][':jobTemplateId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['job-templates'][':jobTemplateId'].$put(args, options))
}

export async function deleteJobTemplatesJobTemplateId(
  args: InferRequestType<(typeof client)['job-templates'][':jobTemplateId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['job-templates'][':jobTemplateId'].$delete(args, options))
}

export async function postKeysAndCertificate(
  args: InferRequestType<(typeof client)['keys-and-certificate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['keys-and-certificate'].$post(args, options))
}

export async function getMitigationactionsActionsActionName(
  args: InferRequestType<(typeof client.mitigationactions.actions)[':actionName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mitigationactions.actions[':actionName'].$get(args, options))
}

export async function postMitigationactionsActionsActionName(
  args: InferRequestType<(typeof client.mitigationactions.actions)[':actionName']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mitigationactions.actions[':actionName'].$post(args, options))
}

export async function deleteMitigationactionsActionsActionName(
  args: InferRequestType<(typeof client.mitigationactions.actions)[':actionName']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mitigationactions.actions[':actionName'].$delete(args, options))
}

export async function patchMitigationactionsActionsActionName(
  args: InferRequestType<(typeof client.mitigationactions.actions)[':actionName']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mitigationactions.actions[':actionName'].$patch(args, options))
}

export async function getOtaUpdatesOtaUpdateId(
  args: InferRequestType<(typeof client.otaUpdates)[':otaUpdateId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.otaUpdates[':otaUpdateId'].$get(args, options))
}

export async function postOtaUpdatesOtaUpdateId(
  args: InferRequestType<(typeof client.otaUpdates)[':otaUpdateId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.otaUpdates[':otaUpdateId'].$post(args, options))
}

export async function deleteOtaUpdatesOtaUpdateId(
  args: InferRequestType<(typeof client.otaUpdates)[':otaUpdateId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.otaUpdates[':otaUpdateId'].$delete(args, options))
}

export async function getPoliciesPolicyName(
  args: InferRequestType<(typeof client.policies)[':policyName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.policies[':policyName'].$get(args, options))
}

export async function postPoliciesPolicyName(
  args: InferRequestType<(typeof client.policies)[':policyName']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.policies[':policyName'].$post(args, options))
}

export async function deletePoliciesPolicyName(
  args: InferRequestType<(typeof client.policies)[':policyName']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.policies[':policyName'].$delete(args, options))
}

export async function getPoliciesPolicyNameVersion(
  args: InferRequestType<(typeof client.policies)[':policyName']['version']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.policies[':policyName'].version.$get(args, options))
}

export async function postPoliciesPolicyNameVersion(
  args: InferRequestType<(typeof client.policies)[':policyName']['version']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.policies[':policyName'].version.$post(args, options))
}

export async function postProvisioningTemplatesTemplateNameProvisioningClaim(
  args: InferRequestType<
    (typeof client)['provisioning-templates'][':templateName']['provisioning-claim']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['provisioning-templates'][':templateName']['provisioning-claim'].$post(args, options),
  )
}

export async function getProvisioningTemplates(
  args: InferRequestType<(typeof client)['provisioning-templates']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['provisioning-templates'].$get(args, options))
}

export async function postProvisioningTemplates(
  args: InferRequestType<(typeof client)['provisioning-templates']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['provisioning-templates'].$post(args, options))
}

export async function getProvisioningTemplatesTemplateNameVersions(
  args: InferRequestType<
    (typeof client)['provisioning-templates'][':templateName']['versions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['provisioning-templates'][':templateName'].versions.$get(args, options),
  )
}

export async function postProvisioningTemplatesTemplateNameVersions(
  args: InferRequestType<
    (typeof client)['provisioning-templates'][':templateName']['versions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['provisioning-templates'][':templateName'].versions.$post(args, options),
  )
}

export async function getRoleAliasesRoleAlias(
  args: InferRequestType<(typeof client)['role-aliases'][':roleAlias']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['role-aliases'][':roleAlias'].$get(args, options))
}

export async function putRoleAliasesRoleAlias(
  args: InferRequestType<(typeof client)['role-aliases'][':roleAlias']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['role-aliases'][':roleAlias'].$put(args, options))
}

export async function postRoleAliasesRoleAlias(
  args: InferRequestType<(typeof client)['role-aliases'][':roleAlias']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['role-aliases'][':roleAlias'].$post(args, options))
}

export async function deleteRoleAliasesRoleAlias(
  args: InferRequestType<(typeof client)['role-aliases'][':roleAlias']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['role-aliases'][':roleAlias'].$delete(args, options))
}

export async function getAuditScheduledauditsScheduledAuditName(
  args: InferRequestType<(typeof client.audit.scheduledaudits)[':scheduledAuditName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.audit.scheduledaudits[':scheduledAuditName'].$get(args, options),
  )
}

export async function postAuditScheduledauditsScheduledAuditName(
  args: InferRequestType<(typeof client.audit.scheduledaudits)[':scheduledAuditName']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.audit.scheduledaudits[':scheduledAuditName'].$post(args, options),
  )
}

export async function deleteAuditScheduledauditsScheduledAuditName(
  args: InferRequestType<(typeof client.audit.scheduledaudits)[':scheduledAuditName']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.audit.scheduledaudits[':scheduledAuditName'].$delete(args, options),
  )
}

export async function patchAuditScheduledauditsScheduledAuditName(
  args: InferRequestType<(typeof client.audit.scheduledaudits)[':scheduledAuditName']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.audit.scheduledaudits[':scheduledAuditName'].$patch(args, options),
  )
}

export async function getSecurityProfilesSecurityProfileName(
  args: InferRequestType<(typeof client)['security-profiles'][':securityProfileName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['security-profiles'][':securityProfileName'].$get(args, options),
  )
}

export async function postSecurityProfilesSecurityProfileName(
  args: InferRequestType<(typeof client)['security-profiles'][':securityProfileName']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['security-profiles'][':securityProfileName'].$post(args, options),
  )
}

export async function deleteSecurityProfilesSecurityProfileName(
  args: InferRequestType<(typeof client)['security-profiles'][':securityProfileName']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['security-profiles'][':securityProfileName'].$delete(args, options),
  )
}

export async function patchSecurityProfilesSecurityProfileName(
  args: InferRequestType<(typeof client)['security-profiles'][':securityProfileName']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['security-profiles'][':securityProfileName'].$patch(args, options),
  )
}

export async function getStreamsStreamId(
  args: InferRequestType<(typeof client.streams)[':streamId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.streams[':streamId'].$get(args, options))
}

export async function putStreamsStreamId(
  args: InferRequestType<(typeof client.streams)[':streamId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.streams[':streamId'].$put(args, options))
}

export async function postStreamsStreamId(
  args: InferRequestType<(typeof client.streams)[':streamId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.streams[':streamId'].$post(args, options))
}

export async function deleteStreamsStreamId(
  args: InferRequestType<(typeof client.streams)[':streamId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.streams[':streamId'].$delete(args, options))
}

export async function getThingsThingName(
  args: InferRequestType<(typeof client.things)[':thingName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.things[':thingName'].$get(args, options))
}

export async function postThingsThingName(
  args: InferRequestType<(typeof client.things)[':thingName']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.things[':thingName'].$post(args, options))
}

export async function deleteThingsThingName(
  args: InferRequestType<(typeof client.things)[':thingName']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.things[':thingName'].$delete(args, options))
}

export async function patchThingsThingName(
  args: InferRequestType<(typeof client.things)[':thingName']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.things[':thingName'].$patch(args, options))
}

export async function getThingGroupsThingGroupName(
  args: InferRequestType<(typeof client)['thing-groups'][':thingGroupName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['thing-groups'][':thingGroupName'].$get(args, options))
}

export async function postThingGroupsThingGroupName(
  args: InferRequestType<(typeof client)['thing-groups'][':thingGroupName']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['thing-groups'][':thingGroupName'].$post(args, options))
}

export async function deleteThingGroupsThingGroupName(
  args: InferRequestType<(typeof client)['thing-groups'][':thingGroupName']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['thing-groups'][':thingGroupName'].$delete(args, options))
}

export async function patchThingGroupsThingGroupName(
  args: InferRequestType<(typeof client)['thing-groups'][':thingGroupName']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['thing-groups'][':thingGroupName'].$patch(args, options))
}

export async function getThingTypesThingTypeName(
  args: InferRequestType<(typeof client)['thing-types'][':thingTypeName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['thing-types'][':thingTypeName'].$get(args, options))
}

export async function postThingTypesThingTypeName(
  args: InferRequestType<(typeof client)['thing-types'][':thingTypeName']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['thing-types'][':thingTypeName'].$post(args, options))
}

export async function deleteThingTypesThingTypeName(
  args: InferRequestType<(typeof client)['thing-types'][':thingTypeName']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['thing-types'][':thingTypeName'].$delete(args, options))
}

export async function getRulesRuleName(
  args: InferRequestType<(typeof client.rules)[':ruleName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rules[':ruleName'].$get(args, options))
}

export async function postRulesRuleName(
  args: InferRequestType<(typeof client.rules)[':ruleName']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rules[':ruleName'].$post(args, options))
}

export async function deleteRulesRuleName(
  args: InferRequestType<(typeof client.rules)[':ruleName']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rules[':ruleName'].$delete(args, options))
}

export async function patchRulesRuleName(
  args: InferRequestType<(typeof client.rules)[':ruleName']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rules[':ruleName'].$patch(args, options))
}

export async function getDestinations(
  args: InferRequestType<typeof client.destinations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.destinations.$get(args, options))
}

export async function postDestinations(
  args: InferRequestType<typeof client.destinations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.destinations.$post(args, options))
}

export async function patchDestinations(
  args: InferRequestType<typeof client.destinations.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.destinations.$patch(args, options))
}

export async function getAuditConfiguration(
  args: InferRequestType<typeof client.audit.configuration.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.audit.configuration.$get(args, options))
}

export async function deleteAuditConfiguration(
  args: InferRequestType<typeof client.audit.configuration.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.audit.configuration.$delete(args, options))
}

export async function patchAuditConfiguration(
  args: InferRequestType<typeof client.audit.configuration.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.audit.configuration.$patch(args, options))
}

export async function postAuditSuppressionsDelete(
  args: InferRequestType<typeof client.audit.suppressions.delete.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.audit.suppressions.delete.$post(args, options))
}

export async function getCacertificateCaCertificateId(
  args: InferRequestType<(typeof client.cacertificate)[':caCertificateId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cacertificate[':caCertificateId'].$get(args, options))
}

export async function putCacertificateCaCertificateId(
  args: InferRequestType<(typeof client.cacertificate)[':caCertificateId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cacertificate[':caCertificateId'].$put(args, options))
}

export async function deleteCacertificateCaCertificateId(
  args: InferRequestType<(typeof client.cacertificate)[':caCertificateId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cacertificate[':caCertificateId'].$delete(args, options))
}

export async function getCertificatesCertificateId(
  args: InferRequestType<(typeof client.certificates)[':certificateId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.certificates[':certificateId'].$get(args, options))
}

export async function deleteCertificatesCertificateId(
  args: InferRequestType<(typeof client.certificates)[':certificateId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.certificates[':certificateId'].$delete(args, options))
}

export async function deleteThingsThingNameJobsJobIdExecutionNumberExecutionNumber(
  args: InferRequestType<
    (typeof client.things)[':thingName']['jobs'][':jobId']['executionNumber'][':executionNumber']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.things[':thingName'].jobs[':jobId'].executionNumber[':executionNumber'].$delete(
      args,
      options,
    ),
  )
}

export async function getPoliciesPolicyNameVersionPolicyVersionId(
  args: InferRequestType<
    (typeof client.policies)[':policyName']['version'][':policyVersionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.policies[':policyName'].version[':policyVersionId'].$get(args, options),
  )
}

export async function deletePoliciesPolicyNameVersionPolicyVersionId(
  args: InferRequestType<
    (typeof client.policies)[':policyName']['version'][':policyVersionId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.policies[':policyName'].version[':policyVersionId'].$delete(args, options),
  )
}

export async function patchPoliciesPolicyNameVersionPolicyVersionId(
  args: InferRequestType<
    (typeof client.policies)[':policyName']['version'][':policyVersionId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.policies[':policyName'].version[':policyVersionId'].$patch(args, options),
  )
}

export async function getProvisioningTemplatesTemplateName(
  args: InferRequestType<(typeof client)['provisioning-templates'][':templateName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['provisioning-templates'][':templateName'].$get(args, options))
}

export async function deleteProvisioningTemplatesTemplateName(
  args: InferRequestType<(typeof client)['provisioning-templates'][':templateName']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['provisioning-templates'][':templateName'].$delete(args, options),
  )
}

export async function patchProvisioningTemplatesTemplateName(
  args: InferRequestType<(typeof client)['provisioning-templates'][':templateName']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['provisioning-templates'][':templateName'].$patch(args, options),
  )
}

export async function getProvisioningTemplatesTemplateNameVersionsVersionId(
  args: InferRequestType<
    (typeof client)['provisioning-templates'][':templateName']['versions'][':versionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['provisioning-templates'][':templateName'].versions[':versionId'].$get(args, options),
  )
}

export async function deleteProvisioningTemplatesTemplateNameVersionsVersionId(
  args: InferRequestType<
    (typeof client)['provisioning-templates'][':templateName']['versions'][':versionId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['provisioning-templates'][':templateName'].versions[':versionId'].$delete(args, options),
  )
}

export async function getRegistrationcode(
  args: InferRequestType<typeof client.registrationcode.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.registrationcode.$get(args, options))
}

export async function deleteRegistrationcode(
  args: InferRequestType<typeof client.registrationcode.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.registrationcode.$delete(args, options))
}

export async function getDestinationsArn(
  args: InferRequestType<(typeof client.destinations)[':arn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.destinations[':arn'].$get(args, options))
}

export async function deleteDestinationsArn(
  args: InferRequestType<(typeof client.destinations)[':arn']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.destinations[':arn'].$delete(args, options))
}

export async function deleteV2LoggingLevelTargetTypeTargetName(
  args: InferRequestType<(typeof client)['v2LoggingLevel#targetType&targetName']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['v2LoggingLevel#targetType&targetName'].$delete(args, options))
}

export async function postThingTypesThingTypeNameDeprecate(
  args: InferRequestType<(typeof client)['thing-types'][':thingTypeName']['deprecate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['thing-types'][':thingTypeName'].deprecate.$post(args, options))
}

export async function getAuditFindingsFindingId(
  args: InferRequestType<(typeof client.audit.findings)[':findingId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.audit.findings[':findingId'].$get(args, options))
}

export async function getAuditMitigationactionsTasksTaskId(
  args: InferRequestType<(typeof client.audit.mitigationactions.tasks)[':taskId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.audit.mitigationactions.tasks[':taskId'].$get(args, options))
}

export async function postAuditMitigationactionsTasksTaskId(
  args: InferRequestType<(typeof client.audit.mitigationactions.tasks)[':taskId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.audit.mitigationactions.tasks[':taskId'].$post(args, options))
}

export async function postAuditSuppressionsDescribe(
  args: InferRequestType<typeof client.audit.suppressions.describe.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.audit.suppressions.describe.$post(args, options))
}

export async function getAuditTasksTaskId(
  args: InferRequestType<(typeof client.audit.tasks)[':taskId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.audit.tasks[':taskId'].$get(args, options))
}

export async function getDetectMitigationactionsTasksTaskId(
  args: InferRequestType<(typeof client.detect.mitigationactions.tasks)[':taskId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.detect.mitigationactions.tasks[':taskId'].$get(args, options))
}

export async function putDetectMitigationactionsTasksTaskId(
  args: InferRequestType<(typeof client.detect.mitigationactions.tasks)[':taskId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.detect.mitigationactions.tasks[':taskId'].$put(args, options))
}

export async function getEndpoint(
  args: InferRequestType<typeof client.endpoint.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.endpoint.$get(args, options))
}

export async function getEventConfigurations(
  args: InferRequestType<(typeof client)['event-configurations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['event-configurations'].$get(args, options))
}

export async function patchEventConfigurations(
  args: InferRequestType<(typeof client)['event-configurations']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['event-configurations'].$patch(args, options))
}

export async function getIndicesIndexName(
  args: InferRequestType<(typeof client.indices)[':indexName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.indices[':indexName'].$get(args, options))
}

export async function getThingsThingNameJobsJobId(
  args: InferRequestType<(typeof client.things)[':thingName']['jobs'][':jobId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.things[':thingName'].jobs[':jobId'].$get(args, options))
}

export async function getManagedJobTemplatesTemplateName(
  args: InferRequestType<(typeof client)['managed-job-templates'][':templateName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['managed-job-templates'][':templateName'].$get(args, options))
}

export async function getThingRegistrationTasksTaskId(
  args: InferRequestType<(typeof client)['thing-registration-tasks'][':taskId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['thing-registration-tasks'][':taskId'].$get(args, options))
}

export async function postRulesRuleNameDisable(
  args: InferRequestType<(typeof client.rules)[':ruleName']['disable']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rules[':ruleName'].disable.$post(args, options))
}

export async function postRulesRuleNameEnable(
  args: InferRequestType<(typeof client.rules)[':ruleName']['enable']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rules[':ruleName'].enable.$post(args, options))
}

export async function getBehaviorModelTrainingSummaries(
  args: InferRequestType<(typeof client)['behavior-model-training']['summaries']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['behavior-model-training'].summaries.$get(args, options))
}

export async function postIndicesBuckets(
  args: InferRequestType<typeof client.indices.buckets.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.indices.buckets.$post(args, options))
}

export async function postIndicesCardinality(
  args: InferRequestType<typeof client.indices.cardinality.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.indices.cardinality.$post(args, options))
}

export async function postEffectivePolicies(
  args: InferRequestType<(typeof client)['effective-policies']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['effective-policies'].$post(args, options))
}

export async function getIndexingConfig(
  args: InferRequestType<typeof client.indexing.config.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.indexing.config.$get(args, options))
}

export async function postIndexingConfig(
  args: InferRequestType<typeof client.indexing.config.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.indexing.config.$post(args, options))
}

export async function getJobsJobIdJobDocument(
  args: InferRequestType<(typeof client.jobs)[':jobId']['job-document']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.jobs[':jobId']['job-document'].$get(args, options))
}

export async function getLoggingOptions(
  args: InferRequestType<typeof client.loggingOptions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.loggingOptions.$get(args, options))
}

export async function postLoggingOptions(
  args: InferRequestType<typeof client.loggingOptions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.loggingOptions.$post(args, options))
}

export async function postIndicesPercentiles(
  args: InferRequestType<typeof client.indices.percentiles.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.indices.percentiles.$post(args, options))
}

export async function postIndicesStatistics(
  args: InferRequestType<typeof client.indices.statistics.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.indices.statistics.$post(args, options))
}

export async function getV2LoggingOptions(
  args: InferRequestType<typeof client.v2LoggingOptions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2LoggingOptions.$get(args, options))
}

export async function postV2LoggingOptions(
  args: InferRequestType<typeof client.v2LoggingOptions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2LoggingOptions.$post(args, options))
}

export async function getActiveViolations(
  args: InferRequestType<(typeof client)['active-violations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['active-violations'].$get(args, options))
}

export async function postAttachedPoliciesTarget(
  args: InferRequestType<(typeof client)['attached-policies'][':target']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['attached-policies'][':target'].$post(args, options))
}

export async function postAuditFindings(
  args: InferRequestType<typeof client.audit.findings.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.audit.findings.$post(args, options))
}

export async function getAuditMitigationactionsExecutionsTaskIdFindingId(
  args: InferRequestType<
    (typeof client.audit.mitigationactions)['executions#taskId&findingId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.audit.mitigationactions['executions#taskId&findingId'].$get(args, options),
  )
}

export async function getAuditMitigationactionsTasksStartTimeEndTime(
  args: InferRequestType<
    (typeof client.audit.mitigationactions)['tasks#startTime&endTime']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.audit.mitigationactions['tasks#startTime&endTime'].$get(args, options),
  )
}

export async function postAuditSuppressionsList(
  args: InferRequestType<typeof client.audit.suppressions.list.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.audit.suppressions.list.$post(args, options))
}

export async function getAuditTasksStartTimeEndTime(
  args: InferRequestType<(typeof client.audit)['tasks#startTime&endTime']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.audit['tasks#startTime&endTime'].$get(args, options))
}

export async function getAuthorizersIndex(
  args: InferRequestType<typeof client.authorizers.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authorizers.index.$get(args, options))
}

export async function getBillingGroups(
  args: InferRequestType<(typeof client)['billing-groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['billing-groups'].$get(args, options))
}

export async function getCacertificates(
  args: InferRequestType<typeof client.cacertificates.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cacertificates.$get(args, options))
}

export async function getCertificatesByCaCaCertificateId(
  args: InferRequestType<(typeof client)['certificates-by-ca'][':caCertificateId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['certificates-by-ca'][':caCertificateId'].$get(args, options))
}

export async function getCustomMetrics(
  args: InferRequestType<(typeof client)['custom-metrics']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['custom-metrics'].$get(args, options))
}

export async function getDetectMitigationactionsExecutions(
  args: InferRequestType<typeof client.detect.mitigationactions.executions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.detect.mitigationactions.executions.$get(args, options))
}

export async function getDetectMitigationactionsTasksStartTimeEndTime(
  args: InferRequestType<
    (typeof client.detect.mitigationactions)['tasks#startTime&endTime']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.detect.mitigationactions['tasks#startTime&endTime'].$get(args, options),
  )
}

export async function getDimensions(
  args: InferRequestType<typeof client.dimensions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dimensions.$get(args, options))
}

export async function getDomainConfigurations(
  args: InferRequestType<typeof client.domainConfigurations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.domainConfigurations.$get(args, options))
}

export async function getFleetMetrics(
  args: InferRequestType<(typeof client)['fleet-metrics']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['fleet-metrics'].$get(args, options))
}

export async function getIndices(
  args: InferRequestType<typeof client.indices.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.indices.$get(args, options))
}

export async function getJobsJobIdThings(
  args: InferRequestType<(typeof client.jobs)[':jobId']['things']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.jobs[':jobId'].things.$get(args, options))
}

export async function getThingsThingNameJobs(
  args: InferRequestType<(typeof client.things)[':thingName']['jobs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.things[':thingName'].jobs.$get(args, options))
}

export async function getJobTemplates(
  args: InferRequestType<(typeof client)['job-templates']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['job-templates'].$get(args, options))
}

export async function getJobs(
  args: InferRequestType<typeof client.jobs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.jobs.$get(args, options))
}

export async function getManagedJobTemplates(
  args: InferRequestType<(typeof client)['managed-job-templates']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['managed-job-templates'].$get(args, options))
}

export async function getMetricValuesThingNameMetricNameStartTimeEndTime(
  args: InferRequestType<
    (typeof client)['metric-values#thingName&metricName&startTime&endTime']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['metric-values#thingName&metricName&startTime&endTime'].$get(args, options),
  )
}

export async function getMitigationactionsActions(
  args: InferRequestType<typeof client.mitigationactions.actions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mitigationactions.actions.$get(args, options))
}

export async function getOtaUpdates(
  args: InferRequestType<typeof client.otaUpdates.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.otaUpdates.$get(args, options))
}

export async function getCertificatesOutGoing(
  args: InferRequestType<(typeof client)['certificates-out-going']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['certificates-out-going'].$get(args, options))
}

export async function getPolicies(
  args: InferRequestType<typeof client.policies.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.policies.$get(args, options))
}

export async function getPolicyPrincipalsXAmznIotPolicy(
  args: InferRequestType<(typeof client)['policy-principals#x-amzn-iot-policy']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['policy-principals#x-amzn-iot-policy'].$get(args, options))
}

export async function getPrincipalPoliciesXAmznIotPrincipal(
  args: InferRequestType<(typeof client)['principal-policies#x-amzn-iot-principal']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['principal-policies#x-amzn-iot-principal'].$get(args, options))
}

export async function getPrincipalsThingsXAmznPrincipal(
  args: InferRequestType<(typeof client.principals)['things#x-amzn-principal']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.principals['things#x-amzn-principal'].$get(args, options))
}

export async function getAuditRelatedResourcesFindingId(
  args: InferRequestType<(typeof client.audit)['relatedResources#findingId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.audit['relatedResources#findingId'].$get(args, options))
}

export async function getRoleAliases(
  args: InferRequestType<(typeof client)['role-aliases']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['role-aliases'].$get(args, options))
}

export async function getAuditScheduledaudits(
  args: InferRequestType<typeof client.audit.scheduledaudits.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.audit.scheduledaudits.$get(args, options))
}

export async function getSecurityProfiles(
  args: InferRequestType<(typeof client)['security-profiles']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['security-profiles'].$get(args, options))
}

export async function getSecurityProfilesForTargetSecurityProfileTargetArn(
  args: InferRequestType<
    (typeof client)['security-profiles-for-target#securityProfileTargetArn']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['security-profiles-for-target#securityProfileTargetArn'].$get(args, options),
  )
}

export async function getStreams(
  args: InferRequestType<typeof client.streams.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.streams.$get(args, options))
}

export async function getTagsResourceArn(
  args: InferRequestType<(typeof client)['tags#resourceArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['tags#resourceArn'].$get(args, options))
}

export async function postPolicyTargetsPolicyName(
  args: InferRequestType<(typeof client)['policy-targets'][':policyName']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['policy-targets'][':policyName'].$post(args, options))
}

export async function getSecurityProfilesSecurityProfileNameTargets(
  args: InferRequestType<
    (typeof client)['security-profiles'][':securityProfileName']['targets']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['security-profiles'][':securityProfileName'].targets.$get(args, options),
  )
}

export async function getThingGroups(
  args: InferRequestType<(typeof client)['thing-groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['thing-groups'].$get(args, options))
}

export async function getThingsThingNameThingGroups(
  args: InferRequestType<(typeof client.things)[':thingName']['thing-groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.things[':thingName']['thing-groups'].$get(args, options))
}

export async function getThingsThingNamePrincipals(
  args: InferRequestType<(typeof client.things)[':thingName']['principals']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.things[':thingName'].principals.$get(args, options))
}

export async function getThingRegistrationTasksTaskIdReportsReportType(
  args: InferRequestType<
    (typeof client)['thing-registration-tasks'][':taskId']['reports#reportType']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['thing-registration-tasks'][':taskId']['reports#reportType'].$get(args, options),
  )
}

export async function getThingRegistrationTasks(
  args: InferRequestType<(typeof client)['thing-registration-tasks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['thing-registration-tasks'].$get(args, options))
}

export async function postThingRegistrationTasks(
  args: InferRequestType<(typeof client)['thing-registration-tasks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['thing-registration-tasks'].$post(args, options))
}

export async function getThingTypes(
  args: InferRequestType<(typeof client)['thing-types']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['thing-types'].$get(args, options))
}

export async function getThings(
  args: InferRequestType<typeof client.things.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.things.$get(args, options))
}

export async function postThings(
  args: InferRequestType<typeof client.things.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.things.$post(args, options))
}

export async function getBillingGroupsBillingGroupNameThings(
  args: InferRequestType<(typeof client)['billing-groups'][':billingGroupName']['things']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['billing-groups'][':billingGroupName'].things.$get(args, options),
  )
}

export async function getThingGroupsThingGroupNameThings(
  args: InferRequestType<(typeof client)['thing-groups'][':thingGroupName']['things']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['thing-groups'][':thingGroupName'].things.$get(args, options))
}

export async function getRules(
  args: InferRequestType<typeof client.rules.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rules.$get(args, options))
}

export async function getV2LoggingLevel(
  args: InferRequestType<typeof client.v2LoggingLevel.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2LoggingLevel.$get(args, options))
}

export async function postV2LoggingLevel(
  args: InferRequestType<typeof client.v2LoggingLevel.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2LoggingLevel.$post(args, options))
}

export async function getViolationEventsStartTimeEndTime(
  args: InferRequestType<(typeof client)['violation-events#startTime&endTime']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['violation-events#startTime&endTime'].$get(args, options))
}

export async function postViolationsVerificationStateViolationId(
  args: InferRequestType<(typeof client.violations)['verification-state'][':violationId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.violations['verification-state'][':violationId'].$post(args, options),
  )
}

export async function postCacertificate(
  args: InferRequestType<typeof client.cacertificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cacertificate.$post(args, options))
}

export async function postCertificateRegister(
  args: InferRequestType<typeof client.certificate.register.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.certificate.register.$post(args, options))
}

export async function postCertificateRegisterNoCa(
  args: InferRequestType<(typeof client.certificate)['register-no-ca']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.certificate['register-no-ca'].$post(args, options))
}

export async function patchRejectCertificateTransferCertificateId(
  args: InferRequestType<
    (typeof client)['reject-certificate-transfer'][':certificateId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['reject-certificate-transfer'][':certificateId'].$patch(args, options),
  )
}

export async function putBillingGroupsRemoveThingFromBillingGroup(
  args: InferRequestType<(typeof client)['billing-groups']['removeThingFromBillingGroup']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['billing-groups'].removeThingFromBillingGroup.$put(args, options),
  )
}

export async function putThingGroupsRemoveThingFromThingGroup(
  args: InferRequestType<(typeof client)['thing-groups']['removeThingFromThingGroup']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['thing-groups'].removeThingFromThingGroup.$put(args, options))
}

export async function postIndicesSearch(
  args: InferRequestType<typeof client.indices.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.indices.search.$post(args, options))
}

export async function postAuditTasks(
  args: InferRequestType<typeof client.audit.tasks.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.audit.tasks.$post(args, options))
}

export async function putThingRegistrationTasksTaskIdCancel(
  args: InferRequestType<(typeof client)['thing-registration-tasks'][':taskId']['cancel']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['thing-registration-tasks'][':taskId'].cancel.$put(args, options),
  )
}

export async function postTags(
  args: InferRequestType<typeof client.tags.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags.$post(args, options))
}

export async function postTestAuthorization(
  args: InferRequestType<(typeof client)['test-authorization']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['test-authorization'].$post(args, options))
}

export async function postAuthorizerAuthorizerNameTest(
  args: InferRequestType<(typeof client.authorizer)[':authorizerName']['test']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authorizer[':authorizerName'].test.$post(args, options))
}

export async function patchTransferCertificateCertificateIdTargetAwsAccount(
  args: InferRequestType<
    (typeof client)['transfer-certificate'][':certificateId#targetAwsAccount']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['transfer-certificate'][':certificateId#targetAwsAccount'].$patch(args, options),
  )
}

export async function postUntag(
  args: InferRequestType<typeof client.untag.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.untag.$post(args, options))
}

export async function patchAuditSuppressionsUpdate(
  args: InferRequestType<typeof client.audit.suppressions.update.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.audit.suppressions.update.$patch(args, options))
}

export async function putCertificatesCertificateIdNewStatus(
  args: InferRequestType<(typeof client.certificates)[':certificateId#newStatus']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.certificates[':certificateId#newStatus'].$put(args, options))
}

export async function putThingGroupsUpdateThingGroupsForThing(
  args: InferRequestType<(typeof client)['thing-groups']['updateThingGroupsForThing']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['thing-groups'].updateThingGroupsForThing.$put(args, options))
}

export async function postSecurityProfileBehaviorsValidate(
  args: InferRequestType<(typeof client)['security-profile-behaviors']['validate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['security-profile-behaviors'].validate.$post(args, options))
}
