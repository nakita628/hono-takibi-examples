import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAcceptCertificateTransferKey() {
  return ['accept-certificate-transfer'] as const
}

export function getActiveViolationsKey() {
  return ['active-violations'] as const
}

export function getAttachedPoliciesKey() {
  return ['attached-policies'] as const
}

export function getAuditKey() {
  return ['audit'] as const
}

export function getAuthorizerKey() {
  return ['authorizer'] as const
}

export function getAuthorizersKey() {
  return ['authorizers'] as const
}

export function getBehaviorModelTrainingKey() {
  return ['behavior-model-training'] as const
}

export function getBillingGroupsKey() {
  return ['billing-groups'] as const
}

export function getCacertificateKey() {
  return ['cacertificate'] as const
}

export function getCacertificatesKey() {
  return ['cacertificates'] as const
}

export function getCancelCertificateTransferKey() {
  return ['cancel-certificate-transfer'] as const
}

export function getCertificateKey() {
  return ['certificate'] as const
}

export function getCertificatesKey() {
  return ['certificates'] as const
}

export function getCertificatesByCaKey() {
  return ['certificates-by-ca'] as const
}

export function getCertificatesOutGoingKey() {
  return ['certificates-out-going'] as const
}

export function getConfirmdestinationKey() {
  return ['confirmdestination'] as const
}

export function getCustomMetricKey() {
  return ['custom-metric'] as const
}

export function getCustomMetricsKey() {
  return ['custom-metrics'] as const
}

export function getDefaultAuthorizerKey() {
  return ['default-authorizer'] as const
}

export function getDestinationsKey() {
  return ['destinations'] as const
}

export function getDetectKey() {
  return ['detect'] as const
}

export function getDimensionsKey() {
  return ['dimensions'] as const
}

export function getDomainConfigurationsKey() {
  return ['domainConfigurations'] as const
}

export function getDynamicThingGroupsKey() {
  return ['dynamic-thing-groups'] as const
}

export function getEffectivePoliciesKey() {
  return ['effective-policies'] as const
}

export function getEndpointKey() {
  return ['endpoint'] as const
}

export function getEventConfigurationsKey() {
  return ['event-configurations'] as const
}

export function getFleetMetricKey() {
  return ['fleet-metric'] as const
}

export function getFleetMetricsKey() {
  return ['fleet-metrics'] as const
}

export function getIndexingKey() {
  return ['indexing'] as const
}

export function getIndicesKey() {
  return ['indices'] as const
}

export function getJobTemplatesKey() {
  return ['job-templates'] as const
}

export function getJobsKey() {
  return ['jobs'] as const
}

export function getKeysAndCertificateKey() {
  return ['keys-and-certificate'] as const
}

export function getLoggingOptionsKey() {
  return ['loggingOptions'] as const
}

export function getManagedJobTemplatesKey() {
  return ['managed-job-templates'] as const
}

export function getMetricValuesThingNameMetricNameStartTimeEndTimeKey() {
  return ['metric-values#thingName&metricName&startTime&endTime'] as const
}

export function getMitigationactionsKey() {
  return ['mitigationactions'] as const
}

export function getOtaUpdatesKey() {
  return ['otaUpdates'] as const
}

export function getPoliciesKey() {
  return ['policies'] as const
}

export function getPolicyPrincipalsXAmznIotPolicyKey() {
  return ['policy-principals#x-amzn-iot-policy'] as const
}

export function getPolicyTargetsKey() {
  return ['policy-targets'] as const
}

export function getPrincipalPoliciesKey() {
  return ['principal-policies'] as const
}

export function getPrincipalPoliciesXAmznIotPrincipalKey() {
  return ['principal-policies#x-amzn-iot-principal'] as const
}

export function getPrincipalsKey() {
  return ['principals'] as const
}

export function getProvisioningTemplatesKey() {
  return ['provisioning-templates'] as const
}

export function getRegistrationcodeKey() {
  return ['registrationcode'] as const
}

export function getRejectCertificateTransferKey() {
  return ['reject-certificate-transfer'] as const
}

export function getRoleAliasesKey() {
  return ['role-aliases'] as const
}

export function getRulesKey() {
  return ['rules'] as const
}

export function getSecurityProfileBehaviorsKey() {
  return ['security-profile-behaviors'] as const
}

export function getSecurityProfilesKey() {
  return ['security-profiles'] as const
}

export function getSecurityProfilesForTargetSecurityProfileTargetArnKey() {
  return ['security-profiles-for-target#securityProfileTargetArn'] as const
}

export function getStreamsKey() {
  return ['streams'] as const
}

export function getTagsKey() {
  return ['tags'] as const
}

export function getTagsResourceArnKey() {
  return ['tags#resourceArn'] as const
}

export function getTargetPoliciesKey() {
  return ['target-policies'] as const
}

export function getTestAuthorizationKey() {
  return ['test-authorization'] as const
}

export function getThingGroupsKey() {
  return ['thing-groups'] as const
}

export function getThingRegistrationTasksKey() {
  return ['thing-registration-tasks'] as const
}

export function getThingTypesKey() {
  return ['thing-types'] as const
}

export function getThingsKey() {
  return ['things'] as const
}

export function getTransferCertificateKey() {
  return ['transfer-certificate'] as const
}

export function getUntagKey() {
  return ['untag'] as const
}

export function getV2LoggingLevelKey() {
  return ['v2LoggingLevel'] as const
}

export function getV2LoggingLevelTargetTypeTargetNameKey() {
  return ['v2LoggingLevel#targetType&targetName'] as const
}

export function getV2LoggingOptionsKey() {
  return ['v2LoggingOptions'] as const
}

export function getViolationEventsStartTimeEndTimeKey() {
  return ['violation-events#startTime&endTime'] as const
}

export function getViolationsKey() {
  return ['violations'] as const
}

export function getPatchAcceptCertificateTransferCertificateIdKey() {
  return [
    'accept-certificate-transfer',
    '/accept-certificate-transfer/:certificateId',
    'PATCH',
  ] as const
}

export function usePatchAcceptCertificateTransferCertificateId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['accept-certificate-transfer'][':certificateId']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['accept-certificate-transfer'][':certificateId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAcceptCertificateTransferCertificateIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['accept-certificate-transfer'][':certificateId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client['accept-certificate-transfer'][':certificateId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutBillingGroupsAddThingToBillingGroupKey() {
  return ['billing-groups', '/billing-groups/addThingToBillingGroup', 'PUT'] as const
}

export function usePutBillingGroupsAddThingToBillingGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['billing-groups']['addThingToBillingGroup']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['billing-groups']['addThingToBillingGroup']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBillingGroupsAddThingToBillingGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['billing-groups']['addThingToBillingGroup']['$put']>
        },
      ) => parseResponse(client['billing-groups'].addThingToBillingGroup.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutThingGroupsAddThingToThingGroupKey() {
  return ['thing-groups', '/thing-groups/addThingToThingGroup', 'PUT'] as const
}

export function usePutThingGroupsAddThingToThingGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['thing-groups']['addThingToThingGroup']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['thing-groups']['addThingToThingGroup']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutThingGroupsAddThingToThingGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['thing-groups']['addThingToThingGroup']['$put']>
        },
      ) => parseResponse(client['thing-groups'].addThingToThingGroup.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostJobsJobIdTargetsKey() {
  return ['jobs', '/jobs/:jobId/targets', 'POST'] as const
}

export function usePostJobsJobIdTargets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.jobs)[':jobId']['targets']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.jobs)[':jobId']['targets']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostJobsJobIdTargetsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.jobs)[':jobId']['targets']['$post']> },
      ) => parseResponse(client.jobs[':jobId'].targets.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutTargetPoliciesPolicyNameKey() {
  return ['target-policies', '/target-policies/:policyName', 'PUT'] as const
}

export function usePutTargetPoliciesPolicyName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['target-policies'][':policyName']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['target-policies'][':policyName']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutTargetPoliciesPolicyNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['target-policies'][':policyName']['$put']> },
      ) => parseResponse(client['target-policies'][':policyName'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTargetPoliciesPolicyNameKey() {
  return ['target-policies', '/target-policies/:policyName', 'POST'] as const
}

export function usePostTargetPoliciesPolicyName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['target-policies'][':policyName']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['target-policies'][':policyName']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTargetPoliciesPolicyNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['target-policies'][':policyName']['$post']> },
      ) => parseResponse(client['target-policies'][':policyName'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutPrincipalPoliciesPolicyNameXAmznIotPrincipalKey() {
  return [
    'principal-policies',
    '/principal-policies/:policyName#x-amzn-iot-principal',
    'PUT',
  ] as const
}

export function usePutPrincipalPoliciesPolicyNameXAmznIotPrincipal<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['principal-policies'][':policyName#x-amzn-iot-principal']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['principal-policies'][':policyName#x-amzn-iot-principal']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutPrincipalPoliciesPolicyNameXAmznIotPrincipalKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['principal-policies'][':policyName#x-amzn-iot-principal']['$put']
          >
        },
      ) =>
        parseResponse(
          client['principal-policies'][':policyName#x-amzn-iot-principal'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeletePrincipalPoliciesPolicyNameXAmznIotPrincipalKey() {
  return [
    'principal-policies',
    '/principal-policies/:policyName#x-amzn-iot-principal',
    'DELETE',
  ] as const
}

export function useDeletePrincipalPoliciesPolicyNameXAmznIotPrincipal<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['principal-policies'][':policyName#x-amzn-iot-principal']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['principal-policies'][':policyName#x-amzn-iot-principal']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePrincipalPoliciesPolicyNameXAmznIotPrincipalKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['principal-policies'][':policyName#x-amzn-iot-principal']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['principal-policies'][':policyName#x-amzn-iot-principal'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutSecurityProfilesSecurityProfileNameTargetsSecurityProfileTargetArnKey() {
  return [
    'security-profiles',
    '/security-profiles/:securityProfileName/targets#securityProfileTargetArn',
    'PUT',
  ] as const
}

export function usePutSecurityProfilesSecurityProfileNameTargetsSecurityProfileTargetArn<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['security-profiles'][':securityProfileName']['targets#securityProfileTargetArn']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['security-profiles'][':securityProfileName']['targets#securityProfileTargetArn']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutSecurityProfilesSecurityProfileNameTargetsSecurityProfileTargetArnKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['security-profiles'][':securityProfileName']['targets#securityProfileTargetArn']['$put']
          >
        },
      ) =>
        parseResponse(
          client['security-profiles'][':securityProfileName'][
            'targets#securityProfileTargetArn'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteSecurityProfilesSecurityProfileNameTargetsSecurityProfileTargetArnKey() {
  return [
    'security-profiles',
    '/security-profiles/:securityProfileName/targets#securityProfileTargetArn',
    'DELETE',
  ] as const
}

export function useDeleteSecurityProfilesSecurityProfileNameTargetsSecurityProfileTargetArn<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['security-profiles'][':securityProfileName']['targets#securityProfileTargetArn']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['security-profiles'][':securityProfileName']['targets#securityProfileTargetArn']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteSecurityProfilesSecurityProfileNameTargetsSecurityProfileTargetArnKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['security-profiles'][':securityProfileName']['targets#securityProfileTargetArn']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['security-profiles'][':securityProfileName'][
            'targets#securityProfileTargetArn'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutThingsThingNamePrincipalsXAmznPrincipalKey() {
  return ['things', '/things/:thingName/principals#x-amzn-principal', 'PUT'] as const
}

export function usePutThingsThingNamePrincipalsXAmznPrincipal<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.things)[':thingName']['principals#x-amzn-principal']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.things)[':thingName']['principals#x-amzn-principal']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutThingsThingNamePrincipalsXAmznPrincipalKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.things)[':thingName']['principals#x-amzn-principal']['$put']
          >
        },
      ) =>
        parseResponse(
          client.things[':thingName']['principals#x-amzn-principal'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteThingsThingNamePrincipalsXAmznPrincipalKey() {
  return ['things', '/things/:thingName/principals#x-amzn-principal', 'DELETE'] as const
}

export function useDeleteThingsThingNamePrincipalsXAmznPrincipal<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.things)[':thingName']['principals#x-amzn-principal']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.things)[':thingName']['principals#x-amzn-principal']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteThingsThingNamePrincipalsXAmznPrincipalKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.things)[':thingName']['principals#x-amzn-principal']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.things[':thingName']['principals#x-amzn-principal'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutAuditMitigationactionsTasksTaskIdCancelKey() {
  return ['audit', '/audit/mitigationactions/tasks/:taskId/cancel', 'PUT'] as const
}

export function usePutAuditMitigationactionsTasksTaskIdCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.audit.mitigationactions.tasks)[':taskId']['cancel']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.audit.mitigationactions.tasks)[':taskId']['cancel']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAuditMitigationactionsTasksTaskIdCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.audit.mitigationactions.tasks)[':taskId']['cancel']['$put']
          >
        },
      ) =>
        parseResponse(
          client.audit.mitigationactions.tasks[':taskId'].cancel.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutAuditTasksTaskIdCancelKey() {
  return ['audit', '/audit/tasks/:taskId/cancel', 'PUT'] as const
}

export function usePutAuditTasksTaskIdCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.audit.tasks)[':taskId']['cancel']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.audit.tasks)[':taskId']['cancel']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAuditTasksTaskIdCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.audit.tasks)[':taskId']['cancel']['$put']> },
      ) => parseResponse(client.audit.tasks[':taskId'].cancel.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchCancelCertificateTransferCertificateIdKey() {
  return [
    'cancel-certificate-transfer',
    '/cancel-certificate-transfer/:certificateId',
    'PATCH',
  ] as const
}

export function usePatchCancelCertificateTransferCertificateId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['cancel-certificate-transfer'][':certificateId']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['cancel-certificate-transfer'][':certificateId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchCancelCertificateTransferCertificateIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['cancel-certificate-transfer'][':certificateId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client['cancel-certificate-transfer'][':certificateId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutDetectMitigationactionsTasksTaskIdCancelKey() {
  return ['detect', '/detect/mitigationactions/tasks/:taskId/cancel', 'PUT'] as const
}

export function usePutDetectMitigationactionsTasksTaskIdCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.detect.mitigationactions.tasks)[':taskId']['cancel']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.detect.mitigationactions.tasks)[':taskId']['cancel']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDetectMitigationactionsTasksTaskIdCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.detect.mitigationactions.tasks)[':taskId']['cancel']['$put']
          >
        },
      ) =>
        parseResponse(
          client.detect.mitigationactions.tasks[':taskId'].cancel.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutJobsJobIdCancelKey() {
  return ['jobs', '/jobs/:jobId/cancel', 'PUT'] as const
}

export function usePutJobsJobIdCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':jobId']['cancel']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.jobs)[':jobId']['cancel']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutJobsJobIdCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.jobs)[':jobId']['cancel']['$put']> },
      ) => parseResponse(client.jobs[':jobId'].cancel.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutThingsThingNameJobsJobIdCancelKey() {
  return ['things', '/things/:thingName/jobs/:jobId/cancel', 'PUT'] as const
}

export function usePutThingsThingNameJobsJobIdCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.things)[':thingName']['jobs'][':jobId']['cancel']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.things)[':thingName']['jobs'][':jobId']['cancel']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutThingsThingNameJobsJobIdCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.things)[':thingName']['jobs'][':jobId']['cancel']['$put']
          >
        },
      ) =>
        parseResponse(client.things[':thingName'].jobs[':jobId'].cancel.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDefaultAuthorizerKey(
  args: InferRequestType<(typeof client)['default-authorizer']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['default-authorizer', '/default-authorizer', keyArgs] as const
}

export function useGetDefaultAuthorizer<TError = unknown>(
  args: InferRequestType<(typeof client)['default-authorizer']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['default-authorizer']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDefaultAuthorizerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['default-authorizer']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['default-authorizer'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDefaultAuthorizer<TError = unknown>(
  args: InferRequestType<(typeof client)['default-authorizer']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['default-authorizer']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDefaultAuthorizerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['default-authorizer']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['default-authorizer'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDefaultAuthorizerKey() {
  return ['default-authorizer', '/default-authorizer', 'POST'] as const
}

export function usePostDefaultAuthorizer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['default-authorizer']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['default-authorizer']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDefaultAuthorizerKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['default-authorizer']['$post']> },
      ) => parseResponse(client['default-authorizer'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDefaultAuthorizerKey() {
  return ['default-authorizer', '/default-authorizer', 'DELETE'] as const
}

export function useDeleteDefaultAuthorizer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['default-authorizer']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['default-authorizer']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDefaultAuthorizerKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['default-authorizer']['$delete']> },
      ) => parseResponse(client['default-authorizer'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetConfirmdestinationConfirmationTokenKey(
  args: InferRequestType<(typeof client.confirmdestination)[':confirmationToken']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['confirmdestination', '/confirmdestination/:confirmationToken', keyArgs] as const
}

export function useGetConfirmdestinationConfirmationToken<TError = unknown>(
  args: InferRequestType<(typeof client.confirmdestination)[':confirmationToken']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.confirmdestination)[':confirmationToken']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetConfirmdestinationConfirmationTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.confirmdestination)[':confirmationToken']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.confirmdestination[':confirmationToken'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConfirmdestinationConfirmationToken<TError = unknown>(
  args: InferRequestType<(typeof client.confirmdestination)[':confirmationToken']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.confirmdestination)[':confirmationToken']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetConfirmdestinationConfirmationTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.confirmdestination)[':confirmationToken']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.confirmdestination[':confirmationToken'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAuditSuppressionsCreateKey() {
  return ['audit', '/audit/suppressions/create', 'POST'] as const
}

export function usePostAuditSuppressionsCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.audit.suppressions.create.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.audit.suppressions.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuditSuppressionsCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.audit.suppressions.create.$post> },
      ) => parseResponse(client.audit.suppressions.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAuthorizerAuthorizerNameKey(
  args: InferRequestType<(typeof client.authorizer)[':authorizerName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['authorizer', '/authorizer/:authorizerName', keyArgs] as const
}

export function useGetAuthorizerAuthorizerName<TError = unknown>(
  args: InferRequestType<(typeof client.authorizer)[':authorizerName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.authorizer)[':authorizerName']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAuthorizerAuthorizerNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.authorizer)[':authorizerName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.authorizer[':authorizerName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAuthorizerAuthorizerName<TError = unknown>(
  args: InferRequestType<(typeof client.authorizer)[':authorizerName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.authorizer)[':authorizerName']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAuthorizerAuthorizerNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.authorizer)[':authorizerName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.authorizer[':authorizerName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutAuthorizerAuthorizerNameKey() {
  return ['authorizer', '/authorizer/:authorizerName', 'PUT'] as const
}

export function usePutAuthorizerAuthorizerName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.authorizer)[':authorizerName']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.authorizer)[':authorizerName']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAuthorizerAuthorizerNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.authorizer)[':authorizerName']['$put']> },
      ) => parseResponse(client.authorizer[':authorizerName'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAuthorizerAuthorizerNameKey() {
  return ['authorizer', '/authorizer/:authorizerName', 'POST'] as const
}

export function usePostAuthorizerAuthorizerName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.authorizer)[':authorizerName']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.authorizer)[':authorizerName']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthorizerAuthorizerNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.authorizer)[':authorizerName']['$post']> },
      ) => parseResponse(client.authorizer[':authorizerName'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAuthorizerAuthorizerNameKey() {
  return ['authorizer', '/authorizer/:authorizerName', 'DELETE'] as const
}

export function useDeleteAuthorizerAuthorizerName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.authorizer)[':authorizerName']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.authorizer)[':authorizerName']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAuthorizerAuthorizerNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.authorizer)[':authorizerName']['$delete']> },
      ) => parseResponse(client.authorizer[':authorizerName'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBillingGroupsBillingGroupNameKey(
  args: InferRequestType<(typeof client)['billing-groups'][':billingGroupName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['billing-groups', '/billing-groups/:billingGroupName', keyArgs] as const
}

export function useGetBillingGroupsBillingGroupName<TError = unknown>(
  args: InferRequestType<(typeof client)['billing-groups'][':billingGroupName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['billing-groups'][':billingGroupName']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBillingGroupsBillingGroupNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['billing-groups'][':billingGroupName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['billing-groups'][':billingGroupName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBillingGroupsBillingGroupName<TError = unknown>(
  args: InferRequestType<(typeof client)['billing-groups'][':billingGroupName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['billing-groups'][':billingGroupName']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBillingGroupsBillingGroupNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['billing-groups'][':billingGroupName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['billing-groups'][':billingGroupName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostBillingGroupsBillingGroupNameKey() {
  return ['billing-groups', '/billing-groups/:billingGroupName', 'POST'] as const
}

export function usePostBillingGroupsBillingGroupName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['billing-groups'][':billingGroupName']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['billing-groups'][':billingGroupName']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBillingGroupsBillingGroupNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['billing-groups'][':billingGroupName']['$post']>
        },
      ) => parseResponse(client['billing-groups'][':billingGroupName'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteBillingGroupsBillingGroupNameKey() {
  return ['billing-groups', '/billing-groups/:billingGroupName', 'DELETE'] as const
}

export function useDeleteBillingGroupsBillingGroupName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['billing-groups'][':billingGroupName']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['billing-groups'][':billingGroupName']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteBillingGroupsBillingGroupNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['billing-groups'][':billingGroupName']['$delete']>
        },
      ) => parseResponse(client['billing-groups'][':billingGroupName'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchBillingGroupsBillingGroupNameKey() {
  return ['billing-groups', '/billing-groups/:billingGroupName', 'PATCH'] as const
}

export function usePatchBillingGroupsBillingGroupName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['billing-groups'][':billingGroupName']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['billing-groups'][':billingGroupName']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchBillingGroupsBillingGroupNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['billing-groups'][':billingGroupName']['$patch']>
        },
      ) => parseResponse(client['billing-groups'][':billingGroupName'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCertificatesKey(args: InferRequestType<typeof client.certificates.$get>) {
  const { header: _, ...keyArgs } = args
  return ['certificates', '/certificates', keyArgs] as const
}

export function useGetCertificates<TError = unknown>(
  args: InferRequestType<typeof client.certificates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.certificates.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCertificatesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.certificates.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.certificates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCertificates<TError = unknown>(
  args: InferRequestType<typeof client.certificates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.certificates.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCertificatesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.certificates.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.certificates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCertificatesKey() {
  return ['certificates', '/certificates', 'POST'] as const
}

export function usePostCertificates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.certificates.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.certificates.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCertificatesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.certificates.$post> }) =>
        parseResponse(client.certificates.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCustomMetricMetricNameKey(
  args: InferRequestType<(typeof client)['custom-metric'][':metricName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['custom-metric', '/custom-metric/:metricName', keyArgs] as const
}

export function useGetCustomMetricMetricName<TError = unknown>(
  args: InferRequestType<(typeof client)['custom-metric'][':metricName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['custom-metric'][':metricName']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCustomMetricMetricNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['custom-metric'][':metricName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['custom-metric'][':metricName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCustomMetricMetricName<TError = unknown>(
  args: InferRequestType<(typeof client)['custom-metric'][':metricName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['custom-metric'][':metricName']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCustomMetricMetricNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['custom-metric'][':metricName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['custom-metric'][':metricName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCustomMetricMetricNameKey() {
  return ['custom-metric', '/custom-metric/:metricName', 'POST'] as const
}

export function usePostCustomMetricMetricName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['custom-metric'][':metricName']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['custom-metric'][':metricName']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCustomMetricMetricNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['custom-metric'][':metricName']['$post']> },
      ) => parseResponse(client['custom-metric'][':metricName'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteCustomMetricMetricNameKey() {
  return ['custom-metric', '/custom-metric/:metricName', 'DELETE'] as const
}

export function useDeleteCustomMetricMetricName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['custom-metric'][':metricName']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['custom-metric'][':metricName']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCustomMetricMetricNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['custom-metric'][':metricName']['$delete']> },
      ) => parseResponse(client['custom-metric'][':metricName'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchCustomMetricMetricNameKey() {
  return ['custom-metric', '/custom-metric/:metricName', 'PATCH'] as const
}

export function usePatchCustomMetricMetricName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['custom-metric'][':metricName']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['custom-metric'][':metricName']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchCustomMetricMetricNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['custom-metric'][':metricName']['$patch']> },
      ) => parseResponse(client['custom-metric'][':metricName'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDimensionsNameKey(
  args: InferRequestType<(typeof client.dimensions)[':name']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['dimensions', '/dimensions/:name', keyArgs] as const
}

export function useGetDimensionsName<TError = unknown>(
  args: InferRequestType<(typeof client.dimensions)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.dimensions)[':name']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDimensionsNameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.dimensions)[':name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dimensions[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDimensionsName<TError = unknown>(
  args: InferRequestType<(typeof client.dimensions)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.dimensions)[':name']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDimensionsNameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.dimensions)[':name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dimensions[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDimensionsNameKey() {
  return ['dimensions', '/dimensions/:name', 'POST'] as const
}

export function usePostDimensionsName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.dimensions)[':name']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.dimensions)[':name']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDimensionsNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.dimensions)[':name']['$post']> },
      ) => parseResponse(client.dimensions[':name'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDimensionsNameKey() {
  return ['dimensions', '/dimensions/:name', 'DELETE'] as const
}

export function useDeleteDimensionsName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.dimensions)[':name']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.dimensions)[':name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDimensionsNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.dimensions)[':name']['$delete']> },
      ) => parseResponse(client.dimensions[':name'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchDimensionsNameKey() {
  return ['dimensions', '/dimensions/:name', 'PATCH'] as const
}

export function usePatchDimensionsName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.dimensions)[':name']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.dimensions)[':name']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchDimensionsNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.dimensions)[':name']['$patch']> },
      ) => parseResponse(client.dimensions[':name'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDomainConfigurationsDomainConfigurationNameKey(
  args: InferRequestType<(typeof client.domainConfigurations)[':domainConfigurationName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    'domainConfigurations',
    '/domainConfigurations/:domainConfigurationName',
    keyArgs,
  ] as const
}

export function useGetDomainConfigurationsDomainConfigurationName<TError = unknown>(
  args: InferRequestType<(typeof client.domainConfigurations)[':domainConfigurationName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.domainConfigurations)[':domainConfigurationName']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDomainConfigurationsDomainConfigurationNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.domainConfigurations)[':domainConfigurationName']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.domainConfigurations[':domainConfigurationName'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDomainConfigurationsDomainConfigurationName<TError = unknown>(
  args: InferRequestType<(typeof client.domainConfigurations)[':domainConfigurationName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.domainConfigurations)[':domainConfigurationName']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDomainConfigurationsDomainConfigurationNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.domainConfigurations)[':domainConfigurationName']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.domainConfigurations[':domainConfigurationName'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutDomainConfigurationsDomainConfigurationNameKey() {
  return ['domainConfigurations', '/domainConfigurations/:domainConfigurationName', 'PUT'] as const
}

export function usePutDomainConfigurationsDomainConfigurationName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.domainConfigurations)[':domainConfigurationName']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.domainConfigurations)[':domainConfigurationName']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDomainConfigurationsDomainConfigurationNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.domainConfigurations)[':domainConfigurationName']['$put']
          >
        },
      ) =>
        parseResponse(
          client.domainConfigurations[':domainConfigurationName'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostDomainConfigurationsDomainConfigurationNameKey() {
  return ['domainConfigurations', '/domainConfigurations/:domainConfigurationName', 'POST'] as const
}

export function usePostDomainConfigurationsDomainConfigurationName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.domainConfigurations)[':domainConfigurationName']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.domainConfigurations)[':domainConfigurationName']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDomainConfigurationsDomainConfigurationNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.domainConfigurations)[':domainConfigurationName']['$post']
          >
        },
      ) =>
        parseResponse(
          client.domainConfigurations[':domainConfigurationName'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteDomainConfigurationsDomainConfigurationNameKey() {
  return [
    'domainConfigurations',
    '/domainConfigurations/:domainConfigurationName',
    'DELETE',
  ] as const
}

export function useDeleteDomainConfigurationsDomainConfigurationName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.domainConfigurations)[':domainConfigurationName']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.domainConfigurations)[':domainConfigurationName']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDomainConfigurationsDomainConfigurationNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.domainConfigurations)[':domainConfigurationName']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.domainConfigurations[':domainConfigurationName'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostDynamicThingGroupsThingGroupNameKey() {
  return ['dynamic-thing-groups', '/dynamic-thing-groups/:thingGroupName', 'POST'] as const
}

export function usePostDynamicThingGroupsThingGroupName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['dynamic-thing-groups'][':thingGroupName']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['dynamic-thing-groups'][':thingGroupName']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDynamicThingGroupsThingGroupNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['dynamic-thing-groups'][':thingGroupName']['$post']>
        },
      ) =>
        parseResponse(client['dynamic-thing-groups'][':thingGroupName'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDynamicThingGroupsThingGroupNameKey() {
  return ['dynamic-thing-groups', '/dynamic-thing-groups/:thingGroupName', 'DELETE'] as const
}

export function useDeleteDynamicThingGroupsThingGroupName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['dynamic-thing-groups'][':thingGroupName']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['dynamic-thing-groups'][':thingGroupName']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDynamicThingGroupsThingGroupNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['dynamic-thing-groups'][':thingGroupName']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['dynamic-thing-groups'][':thingGroupName'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchDynamicThingGroupsThingGroupNameKey() {
  return ['dynamic-thing-groups', '/dynamic-thing-groups/:thingGroupName', 'PATCH'] as const
}

export function usePatchDynamicThingGroupsThingGroupName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['dynamic-thing-groups'][':thingGroupName']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['dynamic-thing-groups'][':thingGroupName']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchDynamicThingGroupsThingGroupNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['dynamic-thing-groups'][':thingGroupName']['$patch']
          >
        },
      ) =>
        parseResponse(client['dynamic-thing-groups'][':thingGroupName'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFleetMetricMetricNameKey(
  args: InferRequestType<(typeof client)['fleet-metric'][':metricName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['fleet-metric', '/fleet-metric/:metricName', keyArgs] as const
}

export function useGetFleetMetricMetricName<TError = unknown>(
  args: InferRequestType<(typeof client)['fleet-metric'][':metricName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['fleet-metric'][':metricName']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFleetMetricMetricNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['fleet-metric'][':metricName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['fleet-metric'][':metricName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFleetMetricMetricName<TError = unknown>(
  args: InferRequestType<(typeof client)['fleet-metric'][':metricName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['fleet-metric'][':metricName']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFleetMetricMetricNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['fleet-metric'][':metricName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['fleet-metric'][':metricName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutFleetMetricMetricNameKey() {
  return ['fleet-metric', '/fleet-metric/:metricName', 'PUT'] as const
}

export function usePutFleetMetricMetricName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['fleet-metric'][':metricName']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['fleet-metric'][':metricName']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutFleetMetricMetricNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['fleet-metric'][':metricName']['$put']> },
      ) => parseResponse(client['fleet-metric'][':metricName'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteFleetMetricMetricNameKey() {
  return ['fleet-metric', '/fleet-metric/:metricName', 'DELETE'] as const
}

export function useDeleteFleetMetricMetricName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['fleet-metric'][':metricName']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['fleet-metric'][':metricName']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteFleetMetricMetricNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['fleet-metric'][':metricName']['$delete']> },
      ) => parseResponse(client['fleet-metric'][':metricName'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchFleetMetricMetricNameKey() {
  return ['fleet-metric', '/fleet-metric/:metricName', 'PATCH'] as const
}

export function usePatchFleetMetricMetricName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['fleet-metric'][':metricName']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['fleet-metric'][':metricName']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchFleetMetricMetricNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['fleet-metric'][':metricName']['$patch']> },
      ) => parseResponse(client['fleet-metric'][':metricName'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetJobsJobIdKey(args: InferRequestType<(typeof client.jobs)[':jobId']['$get']>) {
  const { header: _, ...keyArgs } = args
  return ['jobs', '/jobs/:jobId', keyArgs] as const
}

export function useGetJobsJobId<TError = unknown>(
  args: InferRequestType<(typeof client.jobs)[':jobId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':jobId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetJobsJobIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':jobId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.jobs[':jobId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetJobsJobId<TError = unknown>(
  args: InferRequestType<(typeof client.jobs)[':jobId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':jobId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetJobsJobIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':jobId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.jobs[':jobId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutJobsJobIdKey() {
  return ['jobs', '/jobs/:jobId', 'PUT'] as const
}

export function usePutJobsJobId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':jobId']['$put']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.jobs)[':jobId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutJobsJobIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.jobs)[':jobId']['$put']> }) =>
        parseResponse(client.jobs[':jobId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteJobsJobIdKey() {
  return ['jobs', '/jobs/:jobId', 'DELETE'] as const
}

export function useDeleteJobsJobId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':jobId']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.jobs)[':jobId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteJobsJobIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.jobs)[':jobId']['$delete']> },
      ) => parseResponse(client.jobs[':jobId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchJobsJobIdKey() {
  return ['jobs', '/jobs/:jobId', 'PATCH'] as const
}

export function usePatchJobsJobId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':jobId']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.jobs)[':jobId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchJobsJobIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.jobs)[':jobId']['$patch']> },
      ) => parseResponse(client.jobs[':jobId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetJobTemplatesJobTemplateIdKey(
  args: InferRequestType<(typeof client)['job-templates'][':jobTemplateId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['job-templates', '/job-templates/:jobTemplateId', keyArgs] as const
}

export function useGetJobTemplatesJobTemplateId<TError = unknown>(
  args: InferRequestType<(typeof client)['job-templates'][':jobTemplateId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['job-templates'][':jobTemplateId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetJobTemplatesJobTemplateIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['job-templates'][':jobTemplateId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['job-templates'][':jobTemplateId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetJobTemplatesJobTemplateId<TError = unknown>(
  args: InferRequestType<(typeof client)['job-templates'][':jobTemplateId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['job-templates'][':jobTemplateId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetJobTemplatesJobTemplateIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['job-templates'][':jobTemplateId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['job-templates'][':jobTemplateId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutJobTemplatesJobTemplateIdKey() {
  return ['job-templates', '/job-templates/:jobTemplateId', 'PUT'] as const
}

export function usePutJobTemplatesJobTemplateId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['job-templates'][':jobTemplateId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['job-templates'][':jobTemplateId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutJobTemplatesJobTemplateIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['job-templates'][':jobTemplateId']['$put']> },
      ) => parseResponse(client['job-templates'][':jobTemplateId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteJobTemplatesJobTemplateIdKey() {
  return ['job-templates', '/job-templates/:jobTemplateId', 'DELETE'] as const
}

export function useDeleteJobTemplatesJobTemplateId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['job-templates'][':jobTemplateId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['job-templates'][':jobTemplateId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteJobTemplatesJobTemplateIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['job-templates'][':jobTemplateId']['$delete']> },
      ) => parseResponse(client['job-templates'][':jobTemplateId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostKeysAndCertificateKey() {
  return ['keys-and-certificate', '/keys-and-certificate', 'POST'] as const
}

export function usePostKeysAndCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['keys-and-certificate']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['keys-and-certificate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostKeysAndCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['keys-and-certificate']['$post']> },
      ) => parseResponse(client['keys-and-certificate'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMitigationactionsActionsActionNameKey(
  args: InferRequestType<(typeof client.mitigationactions.actions)[':actionName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['mitigationactions', '/mitigationactions/actions/:actionName', keyArgs] as const
}

export function useGetMitigationactionsActionsActionName<TError = unknown>(
  args: InferRequestType<(typeof client.mitigationactions.actions)[':actionName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mitigationactions.actions)[':actionName']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMitigationactionsActionsActionNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mitigationactions.actions)[':actionName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.mitigationactions.actions[':actionName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMitigationactionsActionsActionName<TError = unknown>(
  args: InferRequestType<(typeof client.mitigationactions.actions)[':actionName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mitigationactions.actions)[':actionName']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMitigationactionsActionsActionNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mitigationactions.actions)[':actionName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.mitigationactions.actions[':actionName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMitigationactionsActionsActionNameKey() {
  return ['mitigationactions', '/mitigationactions/actions/:actionName', 'POST'] as const
}

export function usePostMitigationactionsActionsActionName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mitigationactions.actions)[':actionName']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.mitigationactions.actions)[':actionName']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMitigationactionsActionsActionNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.mitigationactions.actions)[':actionName']['$post']>
        },
      ) => parseResponse(client.mitigationactions.actions[':actionName'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteMitigationactionsActionsActionNameKey() {
  return ['mitigationactions', '/mitigationactions/actions/:actionName', 'DELETE'] as const
}

export function useDeleteMitigationactionsActionsActionName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mitigationactions.actions)[':actionName']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.mitigationactions.actions)[':actionName']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMitigationactionsActionsActionNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.mitigationactions.actions)[':actionName']['$delete']>
        },
      ) =>
        parseResponse(client.mitigationactions.actions[':actionName'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchMitigationactionsActionsActionNameKey() {
  return ['mitigationactions', '/mitigationactions/actions/:actionName', 'PATCH'] as const
}

export function usePatchMitigationactionsActionsActionName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mitigationactions.actions)[':actionName']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.mitigationactions.actions)[':actionName']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchMitigationactionsActionsActionNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.mitigationactions.actions)[':actionName']['$patch']>
        },
      ) =>
        parseResponse(client.mitigationactions.actions[':actionName'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOtaUpdatesOtaUpdateIdKey(
  args: InferRequestType<(typeof client.otaUpdates)[':otaUpdateId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['otaUpdates', '/otaUpdates/:otaUpdateId', keyArgs] as const
}

export function useGetOtaUpdatesOtaUpdateId<TError = unknown>(
  args: InferRequestType<(typeof client.otaUpdates)[':otaUpdateId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.otaUpdates)[':otaUpdateId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOtaUpdatesOtaUpdateIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.otaUpdates)[':otaUpdateId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.otaUpdates[':otaUpdateId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOtaUpdatesOtaUpdateId<TError = unknown>(
  args: InferRequestType<(typeof client.otaUpdates)[':otaUpdateId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.otaUpdates)[':otaUpdateId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOtaUpdatesOtaUpdateIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.otaUpdates)[':otaUpdateId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.otaUpdates[':otaUpdateId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOtaUpdatesOtaUpdateIdKey() {
  return ['otaUpdates', '/otaUpdates/:otaUpdateId', 'POST'] as const
}

export function usePostOtaUpdatesOtaUpdateId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.otaUpdates)[':otaUpdateId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.otaUpdates)[':otaUpdateId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOtaUpdatesOtaUpdateIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.otaUpdates)[':otaUpdateId']['$post']> },
      ) => parseResponse(client.otaUpdates[':otaUpdateId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteOtaUpdatesOtaUpdateIdKey() {
  return ['otaUpdates', '/otaUpdates/:otaUpdateId', 'DELETE'] as const
}

export function useDeleteOtaUpdatesOtaUpdateId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.otaUpdates)[':otaUpdateId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.otaUpdates)[':otaUpdateId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOtaUpdatesOtaUpdateIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.otaUpdates)[':otaUpdateId']['$delete']> },
      ) => parseResponse(client.otaUpdates[':otaUpdateId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPoliciesPolicyNameKey(
  args: InferRequestType<(typeof client.policies)[':policyName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['policies', '/policies/:policyName', keyArgs] as const
}

export function useGetPoliciesPolicyName<TError = unknown>(
  args: InferRequestType<(typeof client.policies)[':policyName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.policies)[':policyName']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPoliciesPolicyNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.policies)[':policyName']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.policies[':policyName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPoliciesPolicyName<TError = unknown>(
  args: InferRequestType<(typeof client.policies)[':policyName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.policies)[':policyName']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPoliciesPolicyNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.policies)[':policyName']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.policies[':policyName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPoliciesPolicyNameKey() {
  return ['policies', '/policies/:policyName', 'POST'] as const
}

export function usePostPoliciesPolicyName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.policies)[':policyName']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.policies)[':policyName']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPoliciesPolicyNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.policies)[':policyName']['$post']> },
      ) => parseResponse(client.policies[':policyName'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeletePoliciesPolicyNameKey() {
  return ['policies', '/policies/:policyName', 'DELETE'] as const
}

export function useDeletePoliciesPolicyName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.policies)[':policyName']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.policies)[':policyName']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePoliciesPolicyNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.policies)[':policyName']['$delete']> },
      ) => parseResponse(client.policies[':policyName'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPoliciesPolicyNameVersionKey(
  args: InferRequestType<(typeof client.policies)[':policyName']['version']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['policies', '/policies/:policyName/version', keyArgs] as const
}

export function useGetPoliciesPolicyNameVersion<TError = unknown>(
  args: InferRequestType<(typeof client.policies)[':policyName']['version']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.policies)[':policyName']['version']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPoliciesPolicyNameVersionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.policies)[':policyName']['version']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.policies[':policyName'].version.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPoliciesPolicyNameVersion<TError = unknown>(
  args: InferRequestType<(typeof client.policies)[':policyName']['version']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.policies)[':policyName']['version']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPoliciesPolicyNameVersionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.policies)[':policyName']['version']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.policies[':policyName'].version.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPoliciesPolicyNameVersionKey() {
  return ['policies', '/policies/:policyName/version', 'POST'] as const
}

export function usePostPoliciesPolicyNameVersion<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.policies)[':policyName']['version']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.policies)[':policyName']['version']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPoliciesPolicyNameVersionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.policies)[':policyName']['version']['$post']> },
      ) => parseResponse(client.policies[':policyName'].version.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostProvisioningTemplatesTemplateNameProvisioningClaimKey() {
  return [
    'provisioning-templates',
    '/provisioning-templates/:templateName/provisioning-claim',
    'POST',
  ] as const
}

export function usePostProvisioningTemplatesTemplateNameProvisioningClaim<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['provisioning-templates'][':templateName']['provisioning-claim']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['provisioning-templates'][':templateName']['provisioning-claim']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProvisioningTemplatesTemplateNameProvisioningClaimKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['provisioning-templates'][':templateName']['provisioning-claim']['$post']
          >
        },
      ) =>
        parseResponse(
          client['provisioning-templates'][':templateName']['provisioning-claim'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetProvisioningTemplatesKey(
  args: InferRequestType<(typeof client)['provisioning-templates']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['provisioning-templates', '/provisioning-templates', keyArgs] as const
}

export function useGetProvisioningTemplates<TError = unknown>(
  args: InferRequestType<(typeof client)['provisioning-templates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['provisioning-templates']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProvisioningTemplatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['provisioning-templates']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['provisioning-templates'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProvisioningTemplates<TError = unknown>(
  args: InferRequestType<(typeof client)['provisioning-templates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['provisioning-templates']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProvisioningTemplatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['provisioning-templates']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['provisioning-templates'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostProvisioningTemplatesKey() {
  return ['provisioning-templates', '/provisioning-templates', 'POST'] as const
}

export function usePostProvisioningTemplates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['provisioning-templates']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['provisioning-templates']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProvisioningTemplatesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['provisioning-templates']['$post']> },
      ) => parseResponse(client['provisioning-templates'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetProvisioningTemplatesTemplateNameVersionsKey(
  args: InferRequestType<
    (typeof client)['provisioning-templates'][':templateName']['versions']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'provisioning-templates',
    '/provisioning-templates/:templateName/versions',
    keyArgs,
  ] as const
}

export function useGetProvisioningTemplatesTemplateNameVersions<TError = unknown>(
  args: InferRequestType<
    (typeof client)['provisioning-templates'][':templateName']['versions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['provisioning-templates'][':templateName']['versions']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProvisioningTemplatesTemplateNameVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['provisioning-templates'][':templateName']['versions']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['provisioning-templates'][':templateName'].versions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProvisioningTemplatesTemplateNameVersions<TError = unknown>(
  args: InferRequestType<
    (typeof client)['provisioning-templates'][':templateName']['versions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['provisioning-templates'][':templateName']['versions']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProvisioningTemplatesTemplateNameVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['provisioning-templates'][':templateName']['versions']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['provisioning-templates'][':templateName'].versions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostProvisioningTemplatesTemplateNameVersionsKey() {
  return [
    'provisioning-templates',
    '/provisioning-templates/:templateName/versions',
    'POST',
  ] as const
}

export function usePostProvisioningTemplatesTemplateNameVersions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['provisioning-templates'][':templateName']['versions']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['provisioning-templates'][':templateName']['versions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProvisioningTemplatesTemplateNameVersionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['provisioning-templates'][':templateName']['versions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['provisioning-templates'][':templateName'].versions.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRoleAliasesRoleAliasKey(
  args: InferRequestType<(typeof client)['role-aliases'][':roleAlias']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['role-aliases', '/role-aliases/:roleAlias', keyArgs] as const
}

export function useGetRoleAliasesRoleAlias<TError = unknown>(
  args: InferRequestType<(typeof client)['role-aliases'][':roleAlias']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['role-aliases'][':roleAlias']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRoleAliasesRoleAliasKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['role-aliases'][':roleAlias']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['role-aliases'][':roleAlias'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRoleAliasesRoleAlias<TError = unknown>(
  args: InferRequestType<(typeof client)['role-aliases'][':roleAlias']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['role-aliases'][':roleAlias']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRoleAliasesRoleAliasKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['role-aliases'][':roleAlias']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['role-aliases'][':roleAlias'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutRoleAliasesRoleAliasKey() {
  return ['role-aliases', '/role-aliases/:roleAlias', 'PUT'] as const
}

export function usePutRoleAliasesRoleAlias<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['role-aliases'][':roleAlias']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['role-aliases'][':roleAlias']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRoleAliasesRoleAliasKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['role-aliases'][':roleAlias']['$put']> },
      ) => parseResponse(client['role-aliases'][':roleAlias'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRoleAliasesRoleAliasKey() {
  return ['role-aliases', '/role-aliases/:roleAlias', 'POST'] as const
}

export function usePostRoleAliasesRoleAlias<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['role-aliases'][':roleAlias']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['role-aliases'][':roleAlias']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRoleAliasesRoleAliasKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['role-aliases'][':roleAlias']['$post']> },
      ) => parseResponse(client['role-aliases'][':roleAlias'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteRoleAliasesRoleAliasKey() {
  return ['role-aliases', '/role-aliases/:roleAlias', 'DELETE'] as const
}

export function useDeleteRoleAliasesRoleAlias<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['role-aliases'][':roleAlias']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['role-aliases'][':roleAlias']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRoleAliasesRoleAliasKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['role-aliases'][':roleAlias']['$delete']> },
      ) => parseResponse(client['role-aliases'][':roleAlias'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAuditScheduledauditsScheduledAuditNameKey(
  args: InferRequestType<(typeof client.audit.scheduledaudits)[':scheduledAuditName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['audit', '/audit/scheduledaudits/:scheduledAuditName', keyArgs] as const
}

export function useGetAuditScheduledauditsScheduledAuditName<TError = unknown>(
  args: InferRequestType<(typeof client.audit.scheduledaudits)[':scheduledAuditName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.audit.scheduledaudits)[':scheduledAuditName']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAuditScheduledauditsScheduledAuditNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.audit.scheduledaudits)[':scheduledAuditName']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.audit.scheduledaudits[':scheduledAuditName'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAuditScheduledauditsScheduledAuditName<TError = unknown>(
  args: InferRequestType<(typeof client.audit.scheduledaudits)[':scheduledAuditName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.audit.scheduledaudits)[':scheduledAuditName']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAuditScheduledauditsScheduledAuditNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.audit.scheduledaudits)[':scheduledAuditName']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.audit.scheduledaudits[':scheduledAuditName'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAuditScheduledauditsScheduledAuditNameKey() {
  return ['audit', '/audit/scheduledaudits/:scheduledAuditName', 'POST'] as const
}

export function usePostAuditScheduledauditsScheduledAuditName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.audit.scheduledaudits)[':scheduledAuditName']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.audit.scheduledaudits)[':scheduledAuditName']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuditScheduledauditsScheduledAuditNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.audit.scheduledaudits)[':scheduledAuditName']['$post']
          >
        },
      ) =>
        parseResponse(
          client.audit.scheduledaudits[':scheduledAuditName'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteAuditScheduledauditsScheduledAuditNameKey() {
  return ['audit', '/audit/scheduledaudits/:scheduledAuditName', 'DELETE'] as const
}

export function useDeleteAuditScheduledauditsScheduledAuditName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.audit.scheduledaudits)[':scheduledAuditName']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.audit.scheduledaudits)[':scheduledAuditName']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAuditScheduledauditsScheduledAuditNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.audit.scheduledaudits)[':scheduledAuditName']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.audit.scheduledaudits[':scheduledAuditName'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchAuditScheduledauditsScheduledAuditNameKey() {
  return ['audit', '/audit/scheduledaudits/:scheduledAuditName', 'PATCH'] as const
}

export function usePatchAuditScheduledauditsScheduledAuditName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.audit.scheduledaudits)[':scheduledAuditName']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.audit.scheduledaudits)[':scheduledAuditName']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAuditScheduledauditsScheduledAuditNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.audit.scheduledaudits)[':scheduledAuditName']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.audit.scheduledaudits[':scheduledAuditName'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSecurityProfilesSecurityProfileNameKey(
  args: InferRequestType<(typeof client)['security-profiles'][':securityProfileName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['security-profiles', '/security-profiles/:securityProfileName', keyArgs] as const
}

export function useGetSecurityProfilesSecurityProfileName<TError = unknown>(
  args: InferRequestType<(typeof client)['security-profiles'][':securityProfileName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['security-profiles'][':securityProfileName']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSecurityProfilesSecurityProfileNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['security-profiles'][':securityProfileName']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['security-profiles'][':securityProfileName'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSecurityProfilesSecurityProfileName<TError = unknown>(
  args: InferRequestType<(typeof client)['security-profiles'][':securityProfileName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['security-profiles'][':securityProfileName']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSecurityProfilesSecurityProfileNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['security-profiles'][':securityProfileName']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['security-profiles'][':securityProfileName'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostSecurityProfilesSecurityProfileNameKey() {
  return ['security-profiles', '/security-profiles/:securityProfileName', 'POST'] as const
}

export function usePostSecurityProfilesSecurityProfileName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['security-profiles'][':securityProfileName']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['security-profiles'][':securityProfileName']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSecurityProfilesSecurityProfileNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['security-profiles'][':securityProfileName']['$post']
          >
        },
      ) =>
        parseResponse(
          client['security-profiles'][':securityProfileName'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteSecurityProfilesSecurityProfileNameKey() {
  return ['security-profiles', '/security-profiles/:securityProfileName', 'DELETE'] as const
}

export function useDeleteSecurityProfilesSecurityProfileName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['security-profiles'][':securityProfileName']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['security-profiles'][':securityProfileName']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSecurityProfilesSecurityProfileNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['security-profiles'][':securityProfileName']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['security-profiles'][':securityProfileName'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchSecurityProfilesSecurityProfileNameKey() {
  return ['security-profiles', '/security-profiles/:securityProfileName', 'PATCH'] as const
}

export function usePatchSecurityProfilesSecurityProfileName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['security-profiles'][':securityProfileName']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['security-profiles'][':securityProfileName']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchSecurityProfilesSecurityProfileNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['security-profiles'][':securityProfileName']['$patch']
          >
        },
      ) =>
        parseResponse(
          client['security-profiles'][':securityProfileName'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetStreamsStreamIdKey(
  args: InferRequestType<(typeof client.streams)[':streamId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['streams', '/streams/:streamId', keyArgs] as const
}

export function useGetStreamsStreamId<TError = unknown>(
  args: InferRequestType<(typeof client.streams)[':streamId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.streams)[':streamId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStreamsStreamIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.streams)[':streamId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.streams[':streamId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStreamsStreamId<TError = unknown>(
  args: InferRequestType<(typeof client.streams)[':streamId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.streams)[':streamId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStreamsStreamIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.streams)[':streamId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.streams[':streamId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutStreamsStreamIdKey() {
  return ['streams', '/streams/:streamId', 'PUT'] as const
}

export function usePutStreamsStreamId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.streams)[':streamId']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.streams)[':streamId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutStreamsStreamIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.streams)[':streamId']['$put']> },
      ) => parseResponse(client.streams[':streamId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostStreamsStreamIdKey() {
  return ['streams', '/streams/:streamId', 'POST'] as const
}

export function usePostStreamsStreamId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.streams)[':streamId']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.streams)[':streamId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStreamsStreamIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.streams)[':streamId']['$post']> },
      ) => parseResponse(client.streams[':streamId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteStreamsStreamIdKey() {
  return ['streams', '/streams/:streamId', 'DELETE'] as const
}

export function useDeleteStreamsStreamId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.streams)[':streamId']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.streams)[':streamId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteStreamsStreamIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.streams)[':streamId']['$delete']> },
      ) => parseResponse(client.streams[':streamId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetThingsThingNameKey(
  args: InferRequestType<(typeof client.things)[':thingName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['things', '/things/:thingName', keyArgs] as const
}

export function useGetThingsThingName<TError = unknown>(
  args: InferRequestType<(typeof client.things)[':thingName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.things)[':thingName']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetThingsThingNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.things)[':thingName']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.things[':thingName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetThingsThingName<TError = unknown>(
  args: InferRequestType<(typeof client.things)[':thingName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.things)[':thingName']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetThingsThingNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.things)[':thingName']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.things[':thingName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostThingsThingNameKey() {
  return ['things', '/things/:thingName', 'POST'] as const
}

export function usePostThingsThingName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.things)[':thingName']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.things)[':thingName']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostThingsThingNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.things)[':thingName']['$post']> },
      ) => parseResponse(client.things[':thingName'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteThingsThingNameKey() {
  return ['things', '/things/:thingName', 'DELETE'] as const
}

export function useDeleteThingsThingName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.things)[':thingName']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.things)[':thingName']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteThingsThingNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.things)[':thingName']['$delete']> },
      ) => parseResponse(client.things[':thingName'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchThingsThingNameKey() {
  return ['things', '/things/:thingName', 'PATCH'] as const
}

export function usePatchThingsThingName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.things)[':thingName']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.things)[':thingName']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchThingsThingNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.things)[':thingName']['$patch']> },
      ) => parseResponse(client.things[':thingName'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetThingGroupsThingGroupNameKey(
  args: InferRequestType<(typeof client)['thing-groups'][':thingGroupName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['thing-groups', '/thing-groups/:thingGroupName', keyArgs] as const
}

export function useGetThingGroupsThingGroupName<TError = unknown>(
  args: InferRequestType<(typeof client)['thing-groups'][':thingGroupName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['thing-groups'][':thingGroupName']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetThingGroupsThingGroupNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['thing-groups'][':thingGroupName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['thing-groups'][':thingGroupName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetThingGroupsThingGroupName<TError = unknown>(
  args: InferRequestType<(typeof client)['thing-groups'][':thingGroupName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['thing-groups'][':thingGroupName']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetThingGroupsThingGroupNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['thing-groups'][':thingGroupName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['thing-groups'][':thingGroupName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostThingGroupsThingGroupNameKey() {
  return ['thing-groups', '/thing-groups/:thingGroupName', 'POST'] as const
}

export function usePostThingGroupsThingGroupName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['thing-groups'][':thingGroupName']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['thing-groups'][':thingGroupName']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostThingGroupsThingGroupNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['thing-groups'][':thingGroupName']['$post']> },
      ) => parseResponse(client['thing-groups'][':thingGroupName'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteThingGroupsThingGroupNameKey() {
  return ['thing-groups', '/thing-groups/:thingGroupName', 'DELETE'] as const
}

export function useDeleteThingGroupsThingGroupName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['thing-groups'][':thingGroupName']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['thing-groups'][':thingGroupName']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteThingGroupsThingGroupNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['thing-groups'][':thingGroupName']['$delete']> },
      ) => parseResponse(client['thing-groups'][':thingGroupName'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchThingGroupsThingGroupNameKey() {
  return ['thing-groups', '/thing-groups/:thingGroupName', 'PATCH'] as const
}

export function usePatchThingGroupsThingGroupName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['thing-groups'][':thingGroupName']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['thing-groups'][':thingGroupName']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchThingGroupsThingGroupNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['thing-groups'][':thingGroupName']['$patch']> },
      ) => parseResponse(client['thing-groups'][':thingGroupName'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetThingTypesThingTypeNameKey(
  args: InferRequestType<(typeof client)['thing-types'][':thingTypeName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['thing-types', '/thing-types/:thingTypeName', keyArgs] as const
}

export function useGetThingTypesThingTypeName<TError = unknown>(
  args: InferRequestType<(typeof client)['thing-types'][':thingTypeName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['thing-types'][':thingTypeName']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetThingTypesThingTypeNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['thing-types'][':thingTypeName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['thing-types'][':thingTypeName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetThingTypesThingTypeName<TError = unknown>(
  args: InferRequestType<(typeof client)['thing-types'][':thingTypeName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['thing-types'][':thingTypeName']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetThingTypesThingTypeNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['thing-types'][':thingTypeName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['thing-types'][':thingTypeName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostThingTypesThingTypeNameKey() {
  return ['thing-types', '/thing-types/:thingTypeName', 'POST'] as const
}

export function usePostThingTypesThingTypeName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['thing-types'][':thingTypeName']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['thing-types'][':thingTypeName']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostThingTypesThingTypeNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['thing-types'][':thingTypeName']['$post']> },
      ) => parseResponse(client['thing-types'][':thingTypeName'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteThingTypesThingTypeNameKey() {
  return ['thing-types', '/thing-types/:thingTypeName', 'DELETE'] as const
}

export function useDeleteThingTypesThingTypeName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['thing-types'][':thingTypeName']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['thing-types'][':thingTypeName']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteThingTypesThingTypeNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['thing-types'][':thingTypeName']['$delete']> },
      ) => parseResponse(client['thing-types'][':thingTypeName'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRulesRuleNameKey(
  args: InferRequestType<(typeof client.rules)[':ruleName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['rules', '/rules/:ruleName', keyArgs] as const
}

export function useGetRulesRuleName<TError = unknown>(
  args: InferRequestType<(typeof client.rules)[':ruleName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.rules)[':ruleName']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRulesRuleNameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.rules)[':ruleName']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rules[':ruleName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRulesRuleName<TError = unknown>(
  args: InferRequestType<(typeof client.rules)[':ruleName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.rules)[':ruleName']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRulesRuleNameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.rules)[':ruleName']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rules[':ruleName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRulesRuleNameKey() {
  return ['rules', '/rules/:ruleName', 'POST'] as const
}

export function usePostRulesRuleName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.rules)[':ruleName']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rules)[':ruleName']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRulesRuleNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.rules)[':ruleName']['$post']> },
      ) => parseResponse(client.rules[':ruleName'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteRulesRuleNameKey() {
  return ['rules', '/rules/:ruleName', 'DELETE'] as const
}

export function useDeleteRulesRuleName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.rules)[':ruleName']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rules)[':ruleName']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRulesRuleNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.rules)[':ruleName']['$delete']> },
      ) => parseResponse(client.rules[':ruleName'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchRulesRuleNameKey() {
  return ['rules', '/rules/:ruleName', 'PATCH'] as const
}

export function usePatchRulesRuleName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.rules)[':ruleName']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rules)[':ruleName']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchRulesRuleNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.rules)[':ruleName']['$patch']> },
      ) => parseResponse(client.rules[':ruleName'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDestinationsKey(args: InferRequestType<typeof client.destinations.$get>) {
  const { header: _, ...keyArgs } = args
  return ['destinations', '/destinations', keyArgs] as const
}

export function useGetDestinations<TError = unknown>(
  args: InferRequestType<typeof client.destinations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.destinations.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDestinationsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.destinations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.destinations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDestinations<TError = unknown>(
  args: InferRequestType<typeof client.destinations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.destinations.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDestinationsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.destinations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.destinations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDestinationsKey() {
  return ['destinations', '/destinations', 'POST'] as const
}

export function usePostDestinations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.destinations.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.destinations.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDestinationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.destinations.$post> }) =>
        parseResponse(client.destinations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchDestinationsKey() {
  return ['destinations', '/destinations', 'PATCH'] as const
}

export function usePatchDestinations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.destinations.$patch>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.destinations.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchDestinationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.destinations.$patch> }) =>
        parseResponse(client.destinations.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAuditConfigurationKey(
  args: InferRequestType<typeof client.audit.configuration.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['audit', '/audit/configuration', keyArgs] as const
}

export function useGetAuditConfiguration<TError = unknown>(
  args: InferRequestType<typeof client.audit.configuration.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.audit.configuration.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAuditConfigurationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.audit.configuration.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.audit.configuration.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAuditConfiguration<TError = unknown>(
  args: InferRequestType<typeof client.audit.configuration.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.audit.configuration.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAuditConfigurationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.audit.configuration.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.audit.configuration.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteAuditConfigurationKey() {
  return ['audit', '/audit/configuration', 'DELETE'] as const
}

export function useDeleteAuditConfiguration<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.audit.configuration.$delete>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.audit.configuration.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAuditConfigurationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.audit.configuration.$delete> },
      ) => parseResponse(client.audit.configuration.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchAuditConfigurationKey() {
  return ['audit', '/audit/configuration', 'PATCH'] as const
}

export function usePatchAuditConfiguration<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.audit.configuration.$patch>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.audit.configuration.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAuditConfigurationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.audit.configuration.$patch> },
      ) => parseResponse(client.audit.configuration.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAuditSuppressionsDeleteKey() {
  return ['audit', '/audit/suppressions/delete', 'POST'] as const
}

export function usePostAuditSuppressionsDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.audit.suppressions.delete.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.audit.suppressions.delete.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuditSuppressionsDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.audit.suppressions.delete.$post> },
      ) => parseResponse(client.audit.suppressions.delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCacertificateCaCertificateIdKey(
  args: InferRequestType<(typeof client.cacertificate)[':caCertificateId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['cacertificate', '/cacertificate/:caCertificateId', keyArgs] as const
}

export function useGetCacertificateCaCertificateId<TError = unknown>(
  args: InferRequestType<(typeof client.cacertificate)[':caCertificateId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cacertificate)[':caCertificateId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCacertificateCaCertificateIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cacertificate)[':caCertificateId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cacertificate[':caCertificateId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCacertificateCaCertificateId<TError = unknown>(
  args: InferRequestType<(typeof client.cacertificate)[':caCertificateId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cacertificate)[':caCertificateId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCacertificateCaCertificateIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cacertificate)[':caCertificateId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cacertificate[':caCertificateId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutCacertificateCaCertificateIdKey() {
  return ['cacertificate', '/cacertificate/:caCertificateId', 'PUT'] as const
}

export function usePutCacertificateCaCertificateId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cacertificate)[':caCertificateId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.cacertificate)[':caCertificateId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCacertificateCaCertificateIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.cacertificate)[':caCertificateId']['$put']> },
      ) => parseResponse(client.cacertificate[':caCertificateId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteCacertificateCaCertificateIdKey() {
  return ['cacertificate', '/cacertificate/:caCertificateId', 'DELETE'] as const
}

export function useDeleteCacertificateCaCertificateId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cacertificate)[':caCertificateId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.cacertificate)[':caCertificateId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCacertificateCaCertificateIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.cacertificate)[':caCertificateId']['$delete']> },
      ) => parseResponse(client.cacertificate[':caCertificateId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCertificatesCertificateIdKey(
  args: InferRequestType<(typeof client.certificates)[':certificateId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['certificates', '/certificates/:certificateId', keyArgs] as const
}

export function useGetCertificatesCertificateId<TError = unknown>(
  args: InferRequestType<(typeof client.certificates)[':certificateId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.certificates)[':certificateId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCertificatesCertificateIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.certificates)[':certificateId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.certificates[':certificateId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCertificatesCertificateId<TError = unknown>(
  args: InferRequestType<(typeof client.certificates)[':certificateId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.certificates)[':certificateId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCertificatesCertificateIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.certificates)[':certificateId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.certificates[':certificateId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteCertificatesCertificateIdKey() {
  return ['certificates', '/certificates/:certificateId', 'DELETE'] as const
}

export function useDeleteCertificatesCertificateId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.certificates)[':certificateId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.certificates)[':certificateId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCertificatesCertificateIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.certificates)[':certificateId']['$delete']> },
      ) => parseResponse(client.certificates[':certificateId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteThingsThingNameJobsJobIdExecutionNumberExecutionNumberKey() {
  return [
    'things',
    '/things/:thingName/jobs/:jobId/executionNumber/:executionNumber',
    'DELETE',
  ] as const
}

export function useDeleteThingsThingNameJobsJobIdExecutionNumberExecutionNumber<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.things)[':thingName']['jobs'][':jobId']['executionNumber'][':executionNumber']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.things)[':thingName']['jobs'][':jobId']['executionNumber'][':executionNumber']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteThingsThingNameJobsJobIdExecutionNumberExecutionNumberKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.things)[':thingName']['jobs'][':jobId']['executionNumber'][':executionNumber']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.things[':thingName'].jobs[':jobId'].executionNumber[':executionNumber'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetPoliciesPolicyNameVersionPolicyVersionIdKey(
  args: InferRequestType<
    (typeof client.policies)[':policyName']['version'][':policyVersionId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['policies', '/policies/:policyName/version/:policyVersionId', keyArgs] as const
}

export function useGetPoliciesPolicyNameVersionPolicyVersionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.policies)[':policyName']['version'][':policyVersionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.policies)[':policyName']['version'][':policyVersionId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPoliciesPolicyNameVersionPolicyVersionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.policies)[':policyName']['version'][':policyVersionId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.policies[':policyName'].version[':policyVersionId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPoliciesPolicyNameVersionPolicyVersionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.policies)[':policyName']['version'][':policyVersionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.policies)[':policyName']['version'][':policyVersionId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPoliciesPolicyNameVersionPolicyVersionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.policies)[':policyName']['version'][':policyVersionId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.policies[':policyName'].version[':policyVersionId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeletePoliciesPolicyNameVersionPolicyVersionIdKey() {
  return ['policies', '/policies/:policyName/version/:policyVersionId', 'DELETE'] as const
}

export function useDeletePoliciesPolicyNameVersionPolicyVersionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.policies)[':policyName']['version'][':policyVersionId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.policies)[':policyName']['version'][':policyVersionId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePoliciesPolicyNameVersionPolicyVersionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.policies)[':policyName']['version'][':policyVersionId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.policies[':policyName'].version[':policyVersionId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchPoliciesPolicyNameVersionPolicyVersionIdKey() {
  return ['policies', '/policies/:policyName/version/:policyVersionId', 'PATCH'] as const
}

export function usePatchPoliciesPolicyNameVersionPolicyVersionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.policies)[':policyName']['version'][':policyVersionId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.policies)[':policyName']['version'][':policyVersionId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchPoliciesPolicyNameVersionPolicyVersionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.policies)[':policyName']['version'][':policyVersionId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.policies[':policyName'].version[':policyVersionId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetProvisioningTemplatesTemplateNameKey(
  args: InferRequestType<(typeof client)['provisioning-templates'][':templateName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['provisioning-templates', '/provisioning-templates/:templateName', keyArgs] as const
}

export function useGetProvisioningTemplatesTemplateName<TError = unknown>(
  args: InferRequestType<(typeof client)['provisioning-templates'][':templateName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['provisioning-templates'][':templateName']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProvisioningTemplatesTemplateNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['provisioning-templates'][':templateName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['provisioning-templates'][':templateName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProvisioningTemplatesTemplateName<TError = unknown>(
  args: InferRequestType<(typeof client)['provisioning-templates'][':templateName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['provisioning-templates'][':templateName']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProvisioningTemplatesTemplateNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['provisioning-templates'][':templateName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['provisioning-templates'][':templateName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteProvisioningTemplatesTemplateNameKey() {
  return ['provisioning-templates', '/provisioning-templates/:templateName', 'DELETE'] as const
}

export function useDeleteProvisioningTemplatesTemplateName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['provisioning-templates'][':templateName']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['provisioning-templates'][':templateName']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteProvisioningTemplatesTemplateNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['provisioning-templates'][':templateName']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['provisioning-templates'][':templateName'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchProvisioningTemplatesTemplateNameKey() {
  return ['provisioning-templates', '/provisioning-templates/:templateName', 'PATCH'] as const
}

export function usePatchProvisioningTemplatesTemplateName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['provisioning-templates'][':templateName']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['provisioning-templates'][':templateName']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchProvisioningTemplatesTemplateNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['provisioning-templates'][':templateName']['$patch']
          >
        },
      ) =>
        parseResponse(client['provisioning-templates'][':templateName'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetProvisioningTemplatesTemplateNameVersionsVersionIdKey(
  args: InferRequestType<
    (typeof client)['provisioning-templates'][':templateName']['versions'][':versionId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'provisioning-templates',
    '/provisioning-templates/:templateName/versions/:versionId',
    keyArgs,
  ] as const
}

export function useGetProvisioningTemplatesTemplateNameVersionsVersionId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['provisioning-templates'][':templateName']['versions'][':versionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['provisioning-templates'][':templateName']['versions'][':versionId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProvisioningTemplatesTemplateNameVersionsVersionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['provisioning-templates'][':templateName']['versions'][':versionId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['provisioning-templates'][':templateName'].versions[':versionId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProvisioningTemplatesTemplateNameVersionsVersionId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['provisioning-templates'][':templateName']['versions'][':versionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['provisioning-templates'][':templateName']['versions'][':versionId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProvisioningTemplatesTemplateNameVersionsVersionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['provisioning-templates'][':templateName']['versions'][':versionId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['provisioning-templates'][':templateName'].versions[':versionId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteProvisioningTemplatesTemplateNameVersionsVersionIdKey() {
  return [
    'provisioning-templates',
    '/provisioning-templates/:templateName/versions/:versionId',
    'DELETE',
  ] as const
}

export function useDeleteProvisioningTemplatesTemplateNameVersionsVersionId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['provisioning-templates'][':templateName']['versions'][':versionId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['provisioning-templates'][':templateName']['versions'][':versionId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteProvisioningTemplatesTemplateNameVersionsVersionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['provisioning-templates'][':templateName']['versions'][':versionId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['provisioning-templates'][':templateName'].versions[':versionId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRegistrationcodeKey(
  args: InferRequestType<typeof client.registrationcode.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['registrationcode', '/registrationcode', keyArgs] as const
}

export function useGetRegistrationcode<TError = unknown>(
  args: InferRequestType<typeof client.registrationcode.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.registrationcode.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRegistrationcodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.registrationcode.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.registrationcode.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRegistrationcode<TError = unknown>(
  args: InferRequestType<typeof client.registrationcode.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.registrationcode.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRegistrationcodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.registrationcode.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.registrationcode.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteRegistrationcodeKey() {
  return ['registrationcode', '/registrationcode', 'DELETE'] as const
}

export function useDeleteRegistrationcode<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.registrationcode.$delete>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.registrationcode.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRegistrationcodeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.registrationcode.$delete> }) =>
        parseResponse(client.registrationcode.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDestinationsArnKey(
  args: InferRequestType<(typeof client.destinations)[':arn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['destinations', '/destinations/:arn', keyArgs] as const
}

export function useGetDestinationsArn<TError = unknown>(
  args: InferRequestType<(typeof client.destinations)[':arn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.destinations)[':arn']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDestinationsArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.destinations)[':arn']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.destinations[':arn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDestinationsArn<TError = unknown>(
  args: InferRequestType<(typeof client.destinations)[':arn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.destinations)[':arn']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDestinationsArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.destinations)[':arn']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.destinations[':arn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteDestinationsArnKey() {
  return ['destinations', '/destinations/:arn', 'DELETE'] as const
}

export function useDeleteDestinationsArn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.destinations)[':arn']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.destinations)[':arn']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDestinationsArnKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.destinations)[':arn']['$delete']> },
      ) => parseResponse(client.destinations[':arn'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2LoggingLevelTargetTypeTargetNameKey() {
  return [
    'v2LoggingLevel#targetType&targetName',
    '/v2LoggingLevel#targetType&targetName',
    'DELETE',
  ] as const
}

export function useDeleteV2LoggingLevelTargetTypeTargetName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['v2LoggingLevel#targetType&targetName']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['v2LoggingLevel#targetType&targetName']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2LoggingLevelTargetTypeTargetNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['v2LoggingLevel#targetType&targetName']['$delete']>
        },
      ) =>
        parseResponse(client['v2LoggingLevel#targetType&targetName'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostThingTypesThingTypeNameDeprecateKey() {
  return ['thing-types', '/thing-types/:thingTypeName/deprecate', 'POST'] as const
}

export function usePostThingTypesThingTypeNameDeprecate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['thing-types'][':thingTypeName']['deprecate']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['thing-types'][':thingTypeName']['deprecate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostThingTypesThingTypeNameDeprecateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['thing-types'][':thingTypeName']['deprecate']['$post']
          >
        },
      ) =>
        parseResponse(client['thing-types'][':thingTypeName'].deprecate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAuditFindingsFindingIdKey(
  args: InferRequestType<(typeof client.audit.findings)[':findingId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['audit', '/audit/findings/:findingId', keyArgs] as const
}

export function useGetAuditFindingsFindingId<TError = unknown>(
  args: InferRequestType<(typeof client.audit.findings)[':findingId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.audit.findings)[':findingId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAuditFindingsFindingIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.audit.findings)[':findingId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.audit.findings[':findingId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAuditFindingsFindingId<TError = unknown>(
  args: InferRequestType<(typeof client.audit.findings)[':findingId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.audit.findings)[':findingId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAuditFindingsFindingIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.audit.findings)[':findingId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.audit.findings[':findingId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAuditMitigationactionsTasksTaskIdKey(
  args: InferRequestType<(typeof client.audit.mitigationactions.tasks)[':taskId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['audit', '/audit/mitigationactions/tasks/:taskId', keyArgs] as const
}

export function useGetAuditMitigationactionsTasksTaskId<TError = unknown>(
  args: InferRequestType<(typeof client.audit.mitigationactions.tasks)[':taskId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.audit.mitigationactions.tasks)[':taskId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAuditMitigationactionsTasksTaskIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.audit.mitigationactions.tasks)[':taskId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.audit.mitigationactions.tasks[':taskId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAuditMitigationactionsTasksTaskId<TError = unknown>(
  args: InferRequestType<(typeof client.audit.mitigationactions.tasks)[':taskId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.audit.mitigationactions.tasks)[':taskId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAuditMitigationactionsTasksTaskIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.audit.mitigationactions.tasks)[':taskId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.audit.mitigationactions.tasks[':taskId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAuditMitigationactionsTasksTaskIdKey() {
  return ['audit', '/audit/mitigationactions/tasks/:taskId', 'POST'] as const
}

export function usePostAuditMitigationactionsTasksTaskId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.audit.mitigationactions.tasks)[':taskId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.audit.mitigationactions.tasks)[':taskId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuditMitigationactionsTasksTaskIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.audit.mitigationactions.tasks)[':taskId']['$post']>
        },
      ) => parseResponse(client.audit.mitigationactions.tasks[':taskId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAuditSuppressionsDescribeKey() {
  return ['audit', '/audit/suppressions/describe', 'POST'] as const
}

export function usePostAuditSuppressionsDescribe<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.audit.suppressions.describe.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.audit.suppressions.describe.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuditSuppressionsDescribeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.audit.suppressions.describe.$post> },
      ) => parseResponse(client.audit.suppressions.describe.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAuditTasksTaskIdKey(
  args: InferRequestType<(typeof client.audit.tasks)[':taskId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['audit', '/audit/tasks/:taskId', keyArgs] as const
}

export function useGetAuditTasksTaskId<TError = unknown>(
  args: InferRequestType<(typeof client.audit.tasks)[':taskId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.audit.tasks)[':taskId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAuditTasksTaskIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.audit.tasks)[':taskId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.audit.tasks[':taskId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAuditTasksTaskId<TError = unknown>(
  args: InferRequestType<(typeof client.audit.tasks)[':taskId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.audit.tasks)[':taskId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAuditTasksTaskIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.audit.tasks)[':taskId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.audit.tasks[':taskId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDetectMitigationactionsTasksTaskIdKey(
  args: InferRequestType<(typeof client.detect.mitigationactions.tasks)[':taskId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['detect', '/detect/mitigationactions/tasks/:taskId', keyArgs] as const
}

export function useGetDetectMitigationactionsTasksTaskId<TError = unknown>(
  args: InferRequestType<(typeof client.detect.mitigationactions.tasks)[':taskId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.detect.mitigationactions.tasks)[':taskId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDetectMitigationactionsTasksTaskIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.detect.mitigationactions.tasks)[':taskId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.detect.mitigationactions.tasks[':taskId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDetectMitigationactionsTasksTaskId<TError = unknown>(
  args: InferRequestType<(typeof client.detect.mitigationactions.tasks)[':taskId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.detect.mitigationactions.tasks)[':taskId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDetectMitigationactionsTasksTaskIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.detect.mitigationactions.tasks)[':taskId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.detect.mitigationactions.tasks[':taskId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutDetectMitigationactionsTasksTaskIdKey() {
  return ['detect', '/detect/mitigationactions/tasks/:taskId', 'PUT'] as const
}

export function usePutDetectMitigationactionsTasksTaskId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.detect.mitigationactions.tasks)[':taskId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.detect.mitigationactions.tasks)[':taskId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDetectMitigationactionsTasksTaskIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.detect.mitigationactions.tasks)[':taskId']['$put']>
        },
      ) => parseResponse(client.detect.mitigationactions.tasks[':taskId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEndpointKey(args: InferRequestType<typeof client.endpoint.$get>) {
  const { header: _, ...keyArgs } = args
  return ['endpoint', '/endpoint', keyArgs] as const
}

export function useGetEndpoint<TError = unknown>(
  args: InferRequestType<typeof client.endpoint.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.endpoint.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEndpointKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.endpoint.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.endpoint.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetEndpoint<TError = unknown>(
  args: InferRequestType<typeof client.endpoint.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.endpoint.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEndpointKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.endpoint.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.endpoint.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetEventConfigurationsKey(
  args: InferRequestType<(typeof client)['event-configurations']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['event-configurations', '/event-configurations', keyArgs] as const
}

export function useGetEventConfigurations<TError = unknown>(
  args: InferRequestType<(typeof client)['event-configurations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['event-configurations']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEventConfigurationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['event-configurations']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['event-configurations'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEventConfigurations<TError = unknown>(
  args: InferRequestType<(typeof client)['event-configurations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['event-configurations']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEventConfigurationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['event-configurations']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['event-configurations'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchEventConfigurationsKey() {
  return ['event-configurations', '/event-configurations', 'PATCH'] as const
}

export function usePatchEventConfigurations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['event-configurations']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['event-configurations']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchEventConfigurationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['event-configurations']['$patch']> },
      ) => parseResponse(client['event-configurations'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIndicesIndexNameKey(
  args: InferRequestType<(typeof client.indices)[':indexName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['indices', '/indices/:indexName', keyArgs] as const
}

export function useGetIndicesIndexName<TError = unknown>(
  args: InferRequestType<(typeof client.indices)[':indexName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.indices)[':indexName']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIndicesIndexNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.indices)[':indexName']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.indices[':indexName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIndicesIndexName<TError = unknown>(
  args: InferRequestType<(typeof client.indices)[':indexName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.indices)[':indexName']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIndicesIndexNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.indices)[':indexName']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.indices[':indexName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetThingsThingNameJobsJobIdKey(
  args: InferRequestType<(typeof client.things)[':thingName']['jobs'][':jobId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['things', '/things/:thingName/jobs/:jobId', keyArgs] as const
}

export function useGetThingsThingNameJobsJobId<TError = unknown>(
  args: InferRequestType<(typeof client.things)[':thingName']['jobs'][':jobId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.things)[':thingName']['jobs'][':jobId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetThingsThingNameJobsJobIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.things)[':thingName']['jobs'][':jobId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.things[':thingName'].jobs[':jobId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetThingsThingNameJobsJobId<TError = unknown>(
  args: InferRequestType<(typeof client.things)[':thingName']['jobs'][':jobId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.things)[':thingName']['jobs'][':jobId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetThingsThingNameJobsJobIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.things)[':thingName']['jobs'][':jobId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.things[':thingName'].jobs[':jobId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetManagedJobTemplatesTemplateNameKey(
  args: InferRequestType<(typeof client)['managed-job-templates'][':templateName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['managed-job-templates', '/managed-job-templates/:templateName', keyArgs] as const
}

export function useGetManagedJobTemplatesTemplateName<TError = unknown>(
  args: InferRequestType<(typeof client)['managed-job-templates'][':templateName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['managed-job-templates'][':templateName']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetManagedJobTemplatesTemplateNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['managed-job-templates'][':templateName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['managed-job-templates'][':templateName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetManagedJobTemplatesTemplateName<TError = unknown>(
  args: InferRequestType<(typeof client)['managed-job-templates'][':templateName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['managed-job-templates'][':templateName']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetManagedJobTemplatesTemplateNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['managed-job-templates'][':templateName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['managed-job-templates'][':templateName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetThingRegistrationTasksTaskIdKey(
  args: InferRequestType<(typeof client)['thing-registration-tasks'][':taskId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['thing-registration-tasks', '/thing-registration-tasks/:taskId', keyArgs] as const
}

export function useGetThingRegistrationTasksTaskId<TError = unknown>(
  args: InferRequestType<(typeof client)['thing-registration-tasks'][':taskId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['thing-registration-tasks'][':taskId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetThingRegistrationTasksTaskIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['thing-registration-tasks'][':taskId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['thing-registration-tasks'][':taskId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetThingRegistrationTasksTaskId<TError = unknown>(
  args: InferRequestType<(typeof client)['thing-registration-tasks'][':taskId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['thing-registration-tasks'][':taskId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetThingRegistrationTasksTaskIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['thing-registration-tasks'][':taskId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['thing-registration-tasks'][':taskId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRulesRuleNameDisableKey() {
  return ['rules', '/rules/:ruleName/disable', 'POST'] as const
}

export function usePostRulesRuleNameDisable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rules)[':ruleName']['disable']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rules)[':ruleName']['disable']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRulesRuleNameDisableKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.rules)[':ruleName']['disable']['$post']> },
      ) => parseResponse(client.rules[':ruleName'].disable.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRulesRuleNameEnableKey() {
  return ['rules', '/rules/:ruleName/enable', 'POST'] as const
}

export function usePostRulesRuleNameEnable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rules)[':ruleName']['enable']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rules)[':ruleName']['enable']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRulesRuleNameEnableKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.rules)[':ruleName']['enable']['$post']> },
      ) => parseResponse(client.rules[':ruleName'].enable.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBehaviorModelTrainingSummariesKey(
  args: InferRequestType<(typeof client)['behavior-model-training']['summaries']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['behavior-model-training', '/behavior-model-training/summaries', keyArgs] as const
}

export function useGetBehaviorModelTrainingSummaries<TError = unknown>(
  args: InferRequestType<(typeof client)['behavior-model-training']['summaries']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['behavior-model-training']['summaries']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBehaviorModelTrainingSummariesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['behavior-model-training']['summaries']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['behavior-model-training'].summaries.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBehaviorModelTrainingSummaries<TError = unknown>(
  args: InferRequestType<(typeof client)['behavior-model-training']['summaries']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['behavior-model-training']['summaries']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBehaviorModelTrainingSummariesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['behavior-model-training']['summaries']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['behavior-model-training'].summaries.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostIndicesBucketsKey() {
  return ['indices', '/indices/buckets', 'POST'] as const
}

export function usePostIndicesBuckets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.indices.buckets.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.indices.buckets.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIndicesBucketsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.indices.buckets.$post> }) =>
        parseResponse(client.indices.buckets.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostIndicesCardinalityKey() {
  return ['indices', '/indices/cardinality', 'POST'] as const
}

export function usePostIndicesCardinality<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.indices.cardinality.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.indices.cardinality.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIndicesCardinalityKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.indices.cardinality.$post> }) =>
        parseResponse(client.indices.cardinality.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostEffectivePoliciesKey() {
  return ['effective-policies', '/effective-policies', 'POST'] as const
}

export function usePostEffectivePolicies<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['effective-policies']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['effective-policies']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEffectivePoliciesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['effective-policies']['$post']> },
      ) => parseResponse(client['effective-policies'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIndexingConfigKey(
  args: InferRequestType<typeof client.indexing.config.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['indexing', '/indexing/config', keyArgs] as const
}

export function useGetIndexingConfig<TError = unknown>(
  args: InferRequestType<typeof client.indexing.config.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.indexing.config.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIndexingConfigKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.indexing.config.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.indexing.config.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIndexingConfig<TError = unknown>(
  args: InferRequestType<typeof client.indexing.config.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.indexing.config.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIndexingConfigKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.indexing.config.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.indexing.config.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostIndexingConfigKey() {
  return ['indexing', '/indexing/config', 'POST'] as const
}

export function usePostIndexingConfig<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.indexing.config.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.indexing.config.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIndexingConfigKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.indexing.config.$post> }) =>
        parseResponse(client.indexing.config.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetJobsJobIdJobDocumentKey(
  args: InferRequestType<(typeof client.jobs)[':jobId']['job-document']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['jobs', '/jobs/:jobId/job-document', keyArgs] as const
}

export function useGetJobsJobIdJobDocument<TError = unknown>(
  args: InferRequestType<(typeof client.jobs)[':jobId']['job-document']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.jobs)[':jobId']['job-document']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetJobsJobIdJobDocumentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.jobs)[':jobId']['job-document']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.jobs[':jobId']['job-document'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetJobsJobIdJobDocument<TError = unknown>(
  args: InferRequestType<(typeof client.jobs)[':jobId']['job-document']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.jobs)[':jobId']['job-document']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetJobsJobIdJobDocumentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.jobs)[':jobId']['job-document']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.jobs[':jobId']['job-document'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLoggingOptionsKey(args: InferRequestType<typeof client.loggingOptions.$get>) {
  const { header: _, ...keyArgs } = args
  return ['loggingOptions', '/loggingOptions', keyArgs] as const
}

export function useGetLoggingOptions<TError = unknown>(
  args: InferRequestType<typeof client.loggingOptions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.loggingOptions.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLoggingOptionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.loggingOptions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.loggingOptions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLoggingOptions<TError = unknown>(
  args: InferRequestType<typeof client.loggingOptions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.loggingOptions.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLoggingOptionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.loggingOptions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.loggingOptions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostLoggingOptionsKey() {
  return ['loggingOptions', '/loggingOptions', 'POST'] as const
}

export function usePostLoggingOptions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.loggingOptions.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.loggingOptions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLoggingOptionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.loggingOptions.$post> }) =>
        parseResponse(client.loggingOptions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostIndicesPercentilesKey() {
  return ['indices', '/indices/percentiles', 'POST'] as const
}

export function usePostIndicesPercentiles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.indices.percentiles.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.indices.percentiles.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIndicesPercentilesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.indices.percentiles.$post> }) =>
        parseResponse(client.indices.percentiles.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostIndicesStatisticsKey() {
  return ['indices', '/indices/statistics', 'POST'] as const
}

export function usePostIndicesStatistics<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.indices.statistics.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.indices.statistics.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIndicesStatisticsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.indices.statistics.$post> }) =>
        parseResponse(client.indices.statistics.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2LoggingOptionsKey(
  args: InferRequestType<typeof client.v2LoggingOptions.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2LoggingOptions', '/v2LoggingOptions', keyArgs] as const
}

export function useGetV2LoggingOptions<TError = unknown>(
  args: InferRequestType<typeof client.v2LoggingOptions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2LoggingOptions.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2LoggingOptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2LoggingOptions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2LoggingOptions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2LoggingOptions<TError = unknown>(
  args: InferRequestType<typeof client.v2LoggingOptions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2LoggingOptions.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2LoggingOptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2LoggingOptions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2LoggingOptions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2LoggingOptionsKey() {
  return ['v2LoggingOptions', '/v2LoggingOptions', 'POST'] as const
}

export function usePostV2LoggingOptions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2LoggingOptions.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2LoggingOptions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2LoggingOptionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2LoggingOptions.$post> }) =>
        parseResponse(client.v2LoggingOptions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActiveViolationsKey(
  args: InferRequestType<(typeof client)['active-violations']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['active-violations', '/active-violations', keyArgs] as const
}

export function useGetActiveViolations<TError = unknown>(
  args: InferRequestType<(typeof client)['active-violations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['active-violations']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActiveViolationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['active-violations']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['active-violations'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActiveViolations<TError = unknown>(
  args: InferRequestType<(typeof client)['active-violations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['active-violations']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActiveViolationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['active-violations']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['active-violations'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAttachedPoliciesTargetKey() {
  return ['attached-policies', '/attached-policies/:target', 'POST'] as const
}

export function usePostAttachedPoliciesTarget<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['attached-policies'][':target']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['attached-policies'][':target']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAttachedPoliciesTargetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['attached-policies'][':target']['$post']> },
      ) => parseResponse(client['attached-policies'][':target'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAuditFindingsKey() {
  return ['audit', '/audit/findings', 'POST'] as const
}

export function usePostAuditFindings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audit.findings.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.audit.findings.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuditFindingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.audit.findings.$post> }) =>
        parseResponse(client.audit.findings.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAuditMitigationactionsExecutionsTaskIdFindingIdKey(
  args: InferRequestType<
    (typeof client.audit.mitigationactions)['executions#taskId&findingId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['audit', '/audit/mitigationactions/executions#taskId&findingId', keyArgs] as const
}

export function useGetAuditMitigationactionsExecutionsTaskIdFindingId<TError = unknown>(
  args: InferRequestType<
    (typeof client.audit.mitigationactions)['executions#taskId&findingId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.audit.mitigationactions)['executions#taskId&findingId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAuditMitigationactionsExecutionsTaskIdFindingIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.audit.mitigationactions)['executions#taskId&findingId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.audit.mitigationactions['executions#taskId&findingId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAuditMitigationactionsExecutionsTaskIdFindingId<TError = unknown>(
  args: InferRequestType<
    (typeof client.audit.mitigationactions)['executions#taskId&findingId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.audit.mitigationactions)['executions#taskId&findingId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAuditMitigationactionsExecutionsTaskIdFindingIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.audit.mitigationactions)['executions#taskId&findingId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.audit.mitigationactions['executions#taskId&findingId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAuditMitigationactionsTasksStartTimeEndTimeKey(
  args: InferRequestType<
    (typeof client.audit.mitigationactions)['tasks#startTime&endTime']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['audit', '/audit/mitigationactions/tasks#startTime&endTime', keyArgs] as const
}

export function useGetAuditMitigationactionsTasksStartTimeEndTime<TError = unknown>(
  args: InferRequestType<
    (typeof client.audit.mitigationactions)['tasks#startTime&endTime']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.audit.mitigationactions)['tasks#startTime&endTime']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAuditMitigationactionsTasksStartTimeEndTimeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.audit.mitigationactions)['tasks#startTime&endTime']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.audit.mitigationactions['tasks#startTime&endTime'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAuditMitigationactionsTasksStartTimeEndTime<TError = unknown>(
  args: InferRequestType<
    (typeof client.audit.mitigationactions)['tasks#startTime&endTime']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.audit.mitigationactions)['tasks#startTime&endTime']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAuditMitigationactionsTasksStartTimeEndTimeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.audit.mitigationactions)['tasks#startTime&endTime']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.audit.mitigationactions['tasks#startTime&endTime'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAuditSuppressionsListKey() {
  return ['audit', '/audit/suppressions/list', 'POST'] as const
}

export function usePostAuditSuppressionsList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.audit.suppressions.list.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.audit.suppressions.list.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuditSuppressionsListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.audit.suppressions.list.$post> },
      ) => parseResponse(client.audit.suppressions.list.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAuditTasksStartTimeEndTimeKey(
  args: InferRequestType<(typeof client.audit)['tasks#startTime&endTime']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['audit', '/audit/tasks#startTime&endTime', keyArgs] as const
}

export function useGetAuditTasksStartTimeEndTime<TError = unknown>(
  args: InferRequestType<(typeof client.audit)['tasks#startTime&endTime']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.audit)['tasks#startTime&endTime']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAuditTasksStartTimeEndTimeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.audit)['tasks#startTime&endTime']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.audit['tasks#startTime&endTime'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAuditTasksStartTimeEndTime<TError = unknown>(
  args: InferRequestType<(typeof client.audit)['tasks#startTime&endTime']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.audit)['tasks#startTime&endTime']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAuditTasksStartTimeEndTimeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.audit)['tasks#startTime&endTime']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.audit['tasks#startTime&endTime'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAuthorizersIndexKey(
  args: InferRequestType<typeof client.authorizers.index.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['authorizers', '/authorizers/', keyArgs] as const
}

export function useGetAuthorizersIndex<TError = unknown>(
  args: InferRequestType<typeof client.authorizers.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authorizers.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAuthorizersIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authorizers.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.authorizers.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAuthorizersIndex<TError = unknown>(
  args: InferRequestType<typeof client.authorizers.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authorizers.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAuthorizersIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authorizers.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.authorizers.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBillingGroupsKey(
  args: InferRequestType<(typeof client)['billing-groups']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['billing-groups', '/billing-groups', keyArgs] as const
}

export function useGetBillingGroups<TError = unknown>(
  args: InferRequestType<(typeof client)['billing-groups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['billing-groups']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBillingGroupsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['billing-groups']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['billing-groups'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBillingGroups<TError = unknown>(
  args: InferRequestType<(typeof client)['billing-groups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['billing-groups']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBillingGroupsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['billing-groups']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['billing-groups'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCacertificatesKey(args: InferRequestType<typeof client.cacertificates.$get>) {
  const { header: _, ...keyArgs } = args
  return ['cacertificates', '/cacertificates', keyArgs] as const
}

export function useGetCacertificates<TError = unknown>(
  args: InferRequestType<typeof client.cacertificates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cacertificates.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCacertificatesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cacertificates.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cacertificates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCacertificates<TError = unknown>(
  args: InferRequestType<typeof client.cacertificates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cacertificates.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCacertificatesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cacertificates.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cacertificates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCertificatesByCaCaCertificateIdKey(
  args: InferRequestType<(typeof client)['certificates-by-ca'][':caCertificateId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['certificates-by-ca', '/certificates-by-ca/:caCertificateId', keyArgs] as const
}

export function useGetCertificatesByCaCaCertificateId<TError = unknown>(
  args: InferRequestType<(typeof client)['certificates-by-ca'][':caCertificateId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['certificates-by-ca'][':caCertificateId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCertificatesByCaCaCertificateIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['certificates-by-ca'][':caCertificateId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['certificates-by-ca'][':caCertificateId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCertificatesByCaCaCertificateId<TError = unknown>(
  args: InferRequestType<(typeof client)['certificates-by-ca'][':caCertificateId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['certificates-by-ca'][':caCertificateId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCertificatesByCaCaCertificateIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['certificates-by-ca'][':caCertificateId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['certificates-by-ca'][':caCertificateId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCustomMetricsKey(
  args: InferRequestType<(typeof client)['custom-metrics']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['custom-metrics', '/custom-metrics', keyArgs] as const
}

export function useGetCustomMetrics<TError = unknown>(
  args: InferRequestType<(typeof client)['custom-metrics']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['custom-metrics']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCustomMetricsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['custom-metrics']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['custom-metrics'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCustomMetrics<TError = unknown>(
  args: InferRequestType<(typeof client)['custom-metrics']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['custom-metrics']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCustomMetricsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['custom-metrics']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['custom-metrics'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDetectMitigationactionsExecutionsKey(
  args: InferRequestType<typeof client.detect.mitigationactions.executions.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['detect', '/detect/mitigationactions/executions', keyArgs] as const
}

export function useGetDetectMitigationactionsExecutions<TError = unknown>(
  args: InferRequestType<typeof client.detect.mitigationactions.executions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.detect.mitigationactions.executions.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDetectMitigationactionsExecutionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.detect.mitigationactions.executions.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.detect.mitigationactions.executions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDetectMitigationactionsExecutions<TError = unknown>(
  args: InferRequestType<typeof client.detect.mitigationactions.executions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.detect.mitigationactions.executions.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDetectMitigationactionsExecutionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.detect.mitigationactions.executions.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.detect.mitigationactions.executions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDetectMitigationactionsTasksStartTimeEndTimeKey(
  args: InferRequestType<
    (typeof client.detect.mitigationactions)['tasks#startTime&endTime']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['detect', '/detect/mitigationactions/tasks#startTime&endTime', keyArgs] as const
}

export function useGetDetectMitigationactionsTasksStartTimeEndTime<TError = unknown>(
  args: InferRequestType<
    (typeof client.detect.mitigationactions)['tasks#startTime&endTime']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.detect.mitigationactions)['tasks#startTime&endTime']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDetectMitigationactionsTasksStartTimeEndTimeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.detect.mitigationactions)['tasks#startTime&endTime']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.detect.mitigationactions['tasks#startTime&endTime'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDetectMitigationactionsTasksStartTimeEndTime<TError = unknown>(
  args: InferRequestType<
    (typeof client.detect.mitigationactions)['tasks#startTime&endTime']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.detect.mitigationactions)['tasks#startTime&endTime']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDetectMitigationactionsTasksStartTimeEndTimeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.detect.mitigationactions)['tasks#startTime&endTime']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.detect.mitigationactions['tasks#startTime&endTime'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetDimensionsKey(args: InferRequestType<typeof client.dimensions.$get>) {
  const { header: _, ...keyArgs } = args
  return ['dimensions', '/dimensions', keyArgs] as const
}

export function useGetDimensions<TError = unknown>(
  args: InferRequestType<typeof client.dimensions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dimensions.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDimensionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dimensions.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dimensions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDimensions<TError = unknown>(
  args: InferRequestType<typeof client.dimensions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dimensions.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDimensionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dimensions.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dimensions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDomainConfigurationsKey(
  args: InferRequestType<typeof client.domainConfigurations.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['domainConfigurations', '/domainConfigurations', keyArgs] as const
}

export function useGetDomainConfigurations<TError = unknown>(
  args: InferRequestType<typeof client.domainConfigurations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.domainConfigurations.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDomainConfigurationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.domainConfigurations.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.domainConfigurations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDomainConfigurations<TError = unknown>(
  args: InferRequestType<typeof client.domainConfigurations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.domainConfigurations.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDomainConfigurationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.domainConfigurations.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.domainConfigurations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFleetMetricsKey(
  args: InferRequestType<(typeof client)['fleet-metrics']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['fleet-metrics', '/fleet-metrics', keyArgs] as const
}

export function useGetFleetMetrics<TError = unknown>(
  args: InferRequestType<(typeof client)['fleet-metrics']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['fleet-metrics']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFleetMetricsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['fleet-metrics']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['fleet-metrics'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFleetMetrics<TError = unknown>(
  args: InferRequestType<(typeof client)['fleet-metrics']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['fleet-metrics']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFleetMetricsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['fleet-metrics']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['fleet-metrics'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetIndicesKey(args: InferRequestType<typeof client.indices.$get>) {
  const { header: _, ...keyArgs } = args
  return ['indices', '/indices', keyArgs] as const
}

export function useGetIndices<TError = unknown>(
  args: InferRequestType<typeof client.indices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.indices.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIndicesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.indices.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.indices.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetIndices<TError = unknown>(
  args: InferRequestType<typeof client.indices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.indices.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIndicesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.indices.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.indices.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetJobsJobIdThingsKey(
  args: InferRequestType<(typeof client.jobs)[':jobId']['things']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['jobs', '/jobs/:jobId/things', keyArgs] as const
}

export function useGetJobsJobIdThings<TError = unknown>(
  args: InferRequestType<(typeof client.jobs)[':jobId']['things']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.jobs)[':jobId']['things']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetJobsJobIdThingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.jobs)[':jobId']['things']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.jobs[':jobId'].things.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetJobsJobIdThings<TError = unknown>(
  args: InferRequestType<(typeof client.jobs)[':jobId']['things']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.jobs)[':jobId']['things']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetJobsJobIdThingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.jobs)[':jobId']['things']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.jobs[':jobId'].things.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetThingsThingNameJobsKey(
  args: InferRequestType<(typeof client.things)[':thingName']['jobs']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['things', '/things/:thingName/jobs', keyArgs] as const
}

export function useGetThingsThingNameJobs<TError = unknown>(
  args: InferRequestType<(typeof client.things)[':thingName']['jobs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.things)[':thingName']['jobs']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetThingsThingNameJobsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.things)[':thingName']['jobs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.things[':thingName'].jobs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetThingsThingNameJobs<TError = unknown>(
  args: InferRequestType<(typeof client.things)[':thingName']['jobs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.things)[':thingName']['jobs']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetThingsThingNameJobsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.things)[':thingName']['jobs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.things[':thingName'].jobs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetJobTemplatesKey(
  args: InferRequestType<(typeof client)['job-templates']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['job-templates', '/job-templates', keyArgs] as const
}

export function useGetJobTemplates<TError = unknown>(
  args: InferRequestType<(typeof client)['job-templates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['job-templates']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetJobTemplatesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['job-templates']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['job-templates'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetJobTemplates<TError = unknown>(
  args: InferRequestType<(typeof client)['job-templates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['job-templates']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetJobTemplatesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['job-templates']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['job-templates'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetJobsKey(args: InferRequestType<typeof client.jobs.$get>) {
  const { header: _, ...keyArgs } = args
  return ['jobs', '/jobs', keyArgs] as const
}

export function useGetJobs<TError = unknown>(
  args: InferRequestType<typeof client.jobs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetJobsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.jobs.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetJobs<TError = unknown>(
  args: InferRequestType<typeof client.jobs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetJobsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.jobs.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetManagedJobTemplatesKey(
  args: InferRequestType<(typeof client)['managed-job-templates']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['managed-job-templates', '/managed-job-templates', keyArgs] as const
}

export function useGetManagedJobTemplates<TError = unknown>(
  args: InferRequestType<(typeof client)['managed-job-templates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['managed-job-templates']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetManagedJobTemplatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['managed-job-templates']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['managed-job-templates'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetManagedJobTemplates<TError = unknown>(
  args: InferRequestType<(typeof client)['managed-job-templates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['managed-job-templates']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetManagedJobTemplatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['managed-job-templates']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['managed-job-templates'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMetricValuesThingNameMetricNameStartTimeEndTimeKey(
  args: InferRequestType<
    (typeof client)['metric-values#thingName&metricName&startTime&endTime']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'metric-values#thingName&metricName&startTime&endTime',
    '/metric-values#thingName&metricName&startTime&endTime',
    keyArgs,
  ] as const
}

export function useGetMetricValuesThingNameMetricNameStartTimeEndTime<TError = unknown>(
  args: InferRequestType<
    (typeof client)['metric-values#thingName&metricName&startTime&endTime']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['metric-values#thingName&metricName&startTime&endTime']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMetricValuesThingNameMetricNameStartTimeEndTimeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['metric-values#thingName&metricName&startTime&endTime']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['metric-values#thingName&metricName&startTime&endTime'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMetricValuesThingNameMetricNameStartTimeEndTime<TError = unknown>(
  args: InferRequestType<
    (typeof client)['metric-values#thingName&metricName&startTime&endTime']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['metric-values#thingName&metricName&startTime&endTime']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMetricValuesThingNameMetricNameStartTimeEndTimeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['metric-values#thingName&metricName&startTime&endTime']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['metric-values#thingName&metricName&startTime&endTime'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMitigationactionsActionsKey(
  args: InferRequestType<typeof client.mitigationactions.actions.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['mitigationactions', '/mitigationactions/actions', keyArgs] as const
}

export function useGetMitigationactionsActions<TError = unknown>(
  args: InferRequestType<typeof client.mitigationactions.actions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.mitigationactions.actions.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMitigationactionsActionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.mitigationactions.actions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mitigationactions.actions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMitigationactionsActions<TError = unknown>(
  args: InferRequestType<typeof client.mitigationactions.actions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.mitigationactions.actions.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMitigationactionsActionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.mitigationactions.actions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mitigationactions.actions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOtaUpdatesKey(args: InferRequestType<typeof client.otaUpdates.$get>) {
  const { header: _, ...keyArgs } = args
  return ['otaUpdates', '/otaUpdates', keyArgs] as const
}

export function useGetOtaUpdates<TError = unknown>(
  args: InferRequestType<typeof client.otaUpdates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.otaUpdates.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOtaUpdatesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.otaUpdates.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.otaUpdates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOtaUpdates<TError = unknown>(
  args: InferRequestType<typeof client.otaUpdates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.otaUpdates.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOtaUpdatesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.otaUpdates.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.otaUpdates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCertificatesOutGoingKey(
  args: InferRequestType<(typeof client)['certificates-out-going']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['certificates-out-going', '/certificates-out-going', keyArgs] as const
}

export function useGetCertificatesOutGoing<TError = unknown>(
  args: InferRequestType<(typeof client)['certificates-out-going']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['certificates-out-going']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCertificatesOutGoingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['certificates-out-going']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['certificates-out-going'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCertificatesOutGoing<TError = unknown>(
  args: InferRequestType<(typeof client)['certificates-out-going']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['certificates-out-going']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCertificatesOutGoingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['certificates-out-going']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['certificates-out-going'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPoliciesKey(args: InferRequestType<typeof client.policies.$get>) {
  const { header: _, ...keyArgs } = args
  return ['policies', '/policies', keyArgs] as const
}

export function useGetPolicies<TError = unknown>(
  args: InferRequestType<typeof client.policies.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.policies.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPoliciesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.policies.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.policies.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetPolicies<TError = unknown>(
  args: InferRequestType<typeof client.policies.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.policies.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPoliciesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.policies.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.policies.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetPolicyPrincipalsXAmznIotPolicyKey(
  args: InferRequestType<(typeof client)['policy-principals#x-amzn-iot-policy']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    'policy-principals#x-amzn-iot-policy',
    '/policy-principals#x-amzn-iot-policy',
    keyArgs,
  ] as const
}

export function useGetPolicyPrincipalsXAmznIotPolicy<TError = unknown>(
  args: InferRequestType<(typeof client)['policy-principals#x-amzn-iot-policy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['policy-principals#x-amzn-iot-policy']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPolicyPrincipalsXAmznIotPolicyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['policy-principals#x-amzn-iot-policy']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['policy-principals#x-amzn-iot-policy'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPolicyPrincipalsXAmznIotPolicy<TError = unknown>(
  args: InferRequestType<(typeof client)['policy-principals#x-amzn-iot-policy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['policy-principals#x-amzn-iot-policy']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPolicyPrincipalsXAmznIotPolicyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['policy-principals#x-amzn-iot-policy']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['policy-principals#x-amzn-iot-policy'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPrincipalPoliciesXAmznIotPrincipalKey(
  args: InferRequestType<(typeof client)['principal-policies#x-amzn-iot-principal']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    'principal-policies#x-amzn-iot-principal',
    '/principal-policies#x-amzn-iot-principal',
    keyArgs,
  ] as const
}

export function useGetPrincipalPoliciesXAmznIotPrincipal<TError = unknown>(
  args: InferRequestType<(typeof client)['principal-policies#x-amzn-iot-principal']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['principal-policies#x-amzn-iot-principal']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPrincipalPoliciesXAmznIotPrincipalKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['principal-policies#x-amzn-iot-principal']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['principal-policies#x-amzn-iot-principal'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPrincipalPoliciesXAmznIotPrincipal<TError = unknown>(
  args: InferRequestType<(typeof client)['principal-policies#x-amzn-iot-principal']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['principal-policies#x-amzn-iot-principal']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPrincipalPoliciesXAmznIotPrincipalKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['principal-policies#x-amzn-iot-principal']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['principal-policies#x-amzn-iot-principal'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPrincipalsThingsXAmznPrincipalKey(
  args: InferRequestType<(typeof client.principals)['things#x-amzn-principal']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['principals', '/principals/things#x-amzn-principal', keyArgs] as const
}

export function useGetPrincipalsThingsXAmznPrincipal<TError = unknown>(
  args: InferRequestType<(typeof client.principals)['things#x-amzn-principal']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.principals)['things#x-amzn-principal']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPrincipalsThingsXAmznPrincipalKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.principals)['things#x-amzn-principal']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.principals['things#x-amzn-principal'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPrincipalsThingsXAmznPrincipal<TError = unknown>(
  args: InferRequestType<(typeof client.principals)['things#x-amzn-principal']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.principals)['things#x-amzn-principal']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPrincipalsThingsXAmznPrincipalKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.principals)['things#x-amzn-principal']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.principals['things#x-amzn-principal'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAuditRelatedResourcesFindingIdKey(
  args: InferRequestType<(typeof client.audit)['relatedResources#findingId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['audit', '/audit/relatedResources#findingId', keyArgs] as const
}

export function useGetAuditRelatedResourcesFindingId<TError = unknown>(
  args: InferRequestType<(typeof client.audit)['relatedResources#findingId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.audit)['relatedResources#findingId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAuditRelatedResourcesFindingIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.audit)['relatedResources#findingId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.audit['relatedResources#findingId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAuditRelatedResourcesFindingId<TError = unknown>(
  args: InferRequestType<(typeof client.audit)['relatedResources#findingId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.audit)['relatedResources#findingId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAuditRelatedResourcesFindingIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.audit)['relatedResources#findingId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.audit['relatedResources#findingId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRoleAliasesKey(
  args: InferRequestType<(typeof client)['role-aliases']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['role-aliases', '/role-aliases', keyArgs] as const
}

export function useGetRoleAliases<TError = unknown>(
  args: InferRequestType<(typeof client)['role-aliases']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['role-aliases']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRoleAliasesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['role-aliases']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['role-aliases'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRoleAliases<TError = unknown>(
  args: InferRequestType<(typeof client)['role-aliases']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['role-aliases']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRoleAliasesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['role-aliases']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['role-aliases'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAuditScheduledauditsKey(
  args: InferRequestType<typeof client.audit.scheduledaudits.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['audit', '/audit/scheduledaudits', keyArgs] as const
}

export function useGetAuditScheduledaudits<TError = unknown>(
  args: InferRequestType<typeof client.audit.scheduledaudits.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.audit.scheduledaudits.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAuditScheduledauditsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.audit.scheduledaudits.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.audit.scheduledaudits.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAuditScheduledaudits<TError = unknown>(
  args: InferRequestType<typeof client.audit.scheduledaudits.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.audit.scheduledaudits.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAuditScheduledauditsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.audit.scheduledaudits.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.audit.scheduledaudits.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSecurityProfilesKey(
  args: InferRequestType<(typeof client)['security-profiles']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['security-profiles', '/security-profiles', keyArgs] as const
}

export function useGetSecurityProfiles<TError = unknown>(
  args: InferRequestType<(typeof client)['security-profiles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['security-profiles']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSecurityProfilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['security-profiles']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['security-profiles'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSecurityProfiles<TError = unknown>(
  args: InferRequestType<(typeof client)['security-profiles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['security-profiles']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSecurityProfilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['security-profiles']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['security-profiles'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSecurityProfilesForTargetSecurityProfileTargetArnKey(
  args: InferRequestType<
    (typeof client)['security-profiles-for-target#securityProfileTargetArn']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'security-profiles-for-target#securityProfileTargetArn',
    '/security-profiles-for-target#securityProfileTargetArn',
    keyArgs,
  ] as const
}

export function useGetSecurityProfilesForTargetSecurityProfileTargetArn<TError = unknown>(
  args: InferRequestType<
    (typeof client)['security-profiles-for-target#securityProfileTargetArn']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['security-profiles-for-target#securityProfileTargetArn']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSecurityProfilesForTargetSecurityProfileTargetArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['security-profiles-for-target#securityProfileTargetArn']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['security-profiles-for-target#securityProfileTargetArn'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSecurityProfilesForTargetSecurityProfileTargetArn<TError = unknown>(
  args: InferRequestType<
    (typeof client)['security-profiles-for-target#securityProfileTargetArn']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['security-profiles-for-target#securityProfileTargetArn']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSecurityProfilesForTargetSecurityProfileTargetArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['security-profiles-for-target#securityProfileTargetArn']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['security-profiles-for-target#securityProfileTargetArn'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetStreamsKey(args: InferRequestType<typeof client.streams.$get>) {
  const { header: _, ...keyArgs } = args
  return ['streams', '/streams', keyArgs] as const
}

export function useGetStreams<TError = unknown>(
  args: InferRequestType<typeof client.streams.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.streams.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStreamsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.streams.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.streams.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetStreams<TError = unknown>(
  args: InferRequestType<typeof client.streams.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.streams.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStreamsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.streams.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.streams.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetTagsResourceArnKey(
  args: InferRequestType<(typeof client)['tags#resourceArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tags#resourceArn', '/tags#resourceArn', keyArgs] as const
}

export function useGetTagsResourceArn<TError = unknown>(
  args: InferRequestType<(typeof client)['tags#resourceArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['tags#resourceArn']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTagsResourceArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['tags#resourceArn']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['tags#resourceArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTagsResourceArn<TError = unknown>(
  args: InferRequestType<(typeof client)['tags#resourceArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['tags#resourceArn']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTagsResourceArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['tags#resourceArn']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['tags#resourceArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPolicyTargetsPolicyNameKey() {
  return ['policy-targets', '/policy-targets/:policyName', 'POST'] as const
}

export function usePostPolicyTargetsPolicyName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['policy-targets'][':policyName']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['policy-targets'][':policyName']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPolicyTargetsPolicyNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['policy-targets'][':policyName']['$post']> },
      ) => parseResponse(client['policy-targets'][':policyName'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSecurityProfilesSecurityProfileNameTargetsKey(
  args: InferRequestType<
    (typeof client)['security-profiles'][':securityProfileName']['targets']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['security-profiles', '/security-profiles/:securityProfileName/targets', keyArgs] as const
}

export function useGetSecurityProfilesSecurityProfileNameTargets<TError = unknown>(
  args: InferRequestType<
    (typeof client)['security-profiles'][':securityProfileName']['targets']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['security-profiles'][':securityProfileName']['targets']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSecurityProfilesSecurityProfileNameTargetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['security-profiles'][':securityProfileName']['targets']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['security-profiles'][':securityProfileName'].targets.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSecurityProfilesSecurityProfileNameTargets<TError = unknown>(
  args: InferRequestType<
    (typeof client)['security-profiles'][':securityProfileName']['targets']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['security-profiles'][':securityProfileName']['targets']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSecurityProfilesSecurityProfileNameTargetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['security-profiles'][':securityProfileName']['targets']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['security-profiles'][':securityProfileName'].targets.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetThingGroupsKey(
  args: InferRequestType<(typeof client)['thing-groups']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['thing-groups', '/thing-groups', keyArgs] as const
}

export function useGetThingGroups<TError = unknown>(
  args: InferRequestType<(typeof client)['thing-groups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['thing-groups']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetThingGroupsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['thing-groups']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['thing-groups'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetThingGroups<TError = unknown>(
  args: InferRequestType<(typeof client)['thing-groups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['thing-groups']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetThingGroupsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['thing-groups']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['thing-groups'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetThingsThingNameThingGroupsKey(
  args: InferRequestType<(typeof client.things)[':thingName']['thing-groups']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['things', '/things/:thingName/thing-groups', keyArgs] as const
}

export function useGetThingsThingNameThingGroups<TError = unknown>(
  args: InferRequestType<(typeof client.things)[':thingName']['thing-groups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.things)[':thingName']['thing-groups']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetThingsThingNameThingGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.things)[':thingName']['thing-groups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.things[':thingName']['thing-groups'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetThingsThingNameThingGroups<TError = unknown>(
  args: InferRequestType<(typeof client.things)[':thingName']['thing-groups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.things)[':thingName']['thing-groups']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetThingsThingNameThingGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.things)[':thingName']['thing-groups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.things[':thingName']['thing-groups'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetThingsThingNamePrincipalsKey(
  args: InferRequestType<(typeof client.things)[':thingName']['principals']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['things', '/things/:thingName/principals', keyArgs] as const
}

export function useGetThingsThingNamePrincipals<TError = unknown>(
  args: InferRequestType<(typeof client.things)[':thingName']['principals']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.things)[':thingName']['principals']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetThingsThingNamePrincipalsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.things)[':thingName']['principals']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.things[':thingName'].principals.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetThingsThingNamePrincipals<TError = unknown>(
  args: InferRequestType<(typeof client.things)[':thingName']['principals']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.things)[':thingName']['principals']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetThingsThingNamePrincipalsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.things)[':thingName']['principals']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.things[':thingName'].principals.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetThingRegistrationTasksTaskIdReportsReportTypeKey(
  args: InferRequestType<
    (typeof client)['thing-registration-tasks'][':taskId']['reports#reportType']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'thing-registration-tasks',
    '/thing-registration-tasks/:taskId/reports#reportType',
    keyArgs,
  ] as const
}

export function useGetThingRegistrationTasksTaskIdReportsReportType<TError = unknown>(
  args: InferRequestType<
    (typeof client)['thing-registration-tasks'][':taskId']['reports#reportType']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['thing-registration-tasks'][':taskId']['reports#reportType']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetThingRegistrationTasksTaskIdReportsReportTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['thing-registration-tasks'][':taskId']['reports#reportType']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['thing-registration-tasks'][':taskId']['reports#reportType'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetThingRegistrationTasksTaskIdReportsReportType<TError = unknown>(
  args: InferRequestType<
    (typeof client)['thing-registration-tasks'][':taskId']['reports#reportType']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['thing-registration-tasks'][':taskId']['reports#reportType']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetThingRegistrationTasksTaskIdReportsReportTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['thing-registration-tasks'][':taskId']['reports#reportType']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['thing-registration-tasks'][':taskId']['reports#reportType'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetThingRegistrationTasksKey(
  args: InferRequestType<(typeof client)['thing-registration-tasks']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['thing-registration-tasks', '/thing-registration-tasks', keyArgs] as const
}

export function useGetThingRegistrationTasks<TError = unknown>(
  args: InferRequestType<(typeof client)['thing-registration-tasks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['thing-registration-tasks']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetThingRegistrationTasksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['thing-registration-tasks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['thing-registration-tasks'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetThingRegistrationTasks<TError = unknown>(
  args: InferRequestType<(typeof client)['thing-registration-tasks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['thing-registration-tasks']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetThingRegistrationTasksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['thing-registration-tasks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['thing-registration-tasks'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostThingRegistrationTasksKey() {
  return ['thing-registration-tasks', '/thing-registration-tasks', 'POST'] as const
}

export function usePostThingRegistrationTasks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['thing-registration-tasks']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['thing-registration-tasks']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostThingRegistrationTasksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['thing-registration-tasks']['$post']> },
      ) => parseResponse(client['thing-registration-tasks'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetThingTypesKey(
  args: InferRequestType<(typeof client)['thing-types']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['thing-types', '/thing-types', keyArgs] as const
}

export function useGetThingTypes<TError = unknown>(
  args: InferRequestType<(typeof client)['thing-types']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['thing-types']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetThingTypesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['thing-types']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['thing-types'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetThingTypes<TError = unknown>(
  args: InferRequestType<(typeof client)['thing-types']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['thing-types']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetThingTypesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['thing-types']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['thing-types'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetThingsKey(args: InferRequestType<typeof client.things.$get>) {
  const { header: _, ...keyArgs } = args
  return ['things', '/things', keyArgs] as const
}

export function useGetThings<TError = unknown>(
  args: InferRequestType<typeof client.things.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.things.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetThingsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.things.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.things.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetThings<TError = unknown>(
  args: InferRequestType<typeof client.things.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.things.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetThingsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.things.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.things.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostThingsKey() {
  return ['things', '/things', 'POST'] as const
}

export function usePostThings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.things.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.things.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostThingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.things.$post> }) =>
        parseResponse(client.things.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBillingGroupsBillingGroupNameThingsKey(
  args: InferRequestType<(typeof client)['billing-groups'][':billingGroupName']['things']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['billing-groups', '/billing-groups/:billingGroupName/things', keyArgs] as const
}

export function useGetBillingGroupsBillingGroupNameThings<TError = unknown>(
  args: InferRequestType<(typeof client)['billing-groups'][':billingGroupName']['things']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['billing-groups'][':billingGroupName']['things']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBillingGroupsBillingGroupNameThingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['billing-groups'][':billingGroupName']['things']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['billing-groups'][':billingGroupName'].things.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBillingGroupsBillingGroupNameThings<TError = unknown>(
  args: InferRequestType<(typeof client)['billing-groups'][':billingGroupName']['things']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['billing-groups'][':billingGroupName']['things']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBillingGroupsBillingGroupNameThingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['billing-groups'][':billingGroupName']['things']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['billing-groups'][':billingGroupName'].things.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetThingGroupsThingGroupNameThingsKey(
  args: InferRequestType<(typeof client)['thing-groups'][':thingGroupName']['things']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['thing-groups', '/thing-groups/:thingGroupName/things', keyArgs] as const
}

export function useGetThingGroupsThingGroupNameThings<TError = unknown>(
  args: InferRequestType<(typeof client)['thing-groups'][':thingGroupName']['things']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['thing-groups'][':thingGroupName']['things']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetThingGroupsThingGroupNameThingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['thing-groups'][':thingGroupName']['things']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['thing-groups'][':thingGroupName'].things.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetThingGroupsThingGroupNameThings<TError = unknown>(
  args: InferRequestType<(typeof client)['thing-groups'][':thingGroupName']['things']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['thing-groups'][':thingGroupName']['things']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetThingGroupsThingGroupNameThingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['thing-groups'][':thingGroupName']['things']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['thing-groups'][':thingGroupName'].things.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRulesKey(args: InferRequestType<typeof client.rules.$get>) {
  const { header: _, ...keyArgs } = args
  return ['rules', '/rules', keyArgs] as const
}

export function useGetRules<TError = unknown>(
  args: InferRequestType<typeof client.rules.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rules.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRulesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rules.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.rules.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetRules<TError = unknown>(
  args: InferRequestType<typeof client.rules.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rules.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRulesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rules.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.rules.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetV2LoggingLevelKey(args: InferRequestType<typeof client.v2LoggingLevel.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v2LoggingLevel', '/v2LoggingLevel', keyArgs] as const
}

export function useGetV2LoggingLevel<TError = unknown>(
  args: InferRequestType<typeof client.v2LoggingLevel.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2LoggingLevel.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2LoggingLevelKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2LoggingLevel.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2LoggingLevel.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2LoggingLevel<TError = unknown>(
  args: InferRequestType<typeof client.v2LoggingLevel.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2LoggingLevel.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2LoggingLevelKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2LoggingLevel.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2LoggingLevel.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2LoggingLevelKey() {
  return ['v2LoggingLevel', '/v2LoggingLevel', 'POST'] as const
}

export function usePostV2LoggingLevel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2LoggingLevel.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2LoggingLevel.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2LoggingLevelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2LoggingLevel.$post> }) =>
        parseResponse(client.v2LoggingLevel.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetViolationEventsStartTimeEndTimeKey(
  args: InferRequestType<(typeof client)['violation-events#startTime&endTime']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    'violation-events#startTime&endTime',
    '/violation-events#startTime&endTime',
    keyArgs,
  ] as const
}

export function useGetViolationEventsStartTimeEndTime<TError = unknown>(
  args: InferRequestType<(typeof client)['violation-events#startTime&endTime']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['violation-events#startTime&endTime']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetViolationEventsStartTimeEndTimeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['violation-events#startTime&endTime']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['violation-events#startTime&endTime'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetViolationEventsStartTimeEndTime<TError = unknown>(
  args: InferRequestType<(typeof client)['violation-events#startTime&endTime']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['violation-events#startTime&endTime']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetViolationEventsStartTimeEndTimeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['violation-events#startTime&endTime']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['violation-events#startTime&endTime'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostViolationsVerificationStateViolationIdKey() {
  return ['violations', '/violations/verification-state/:violationId', 'POST'] as const
}

export function usePostViolationsVerificationStateViolationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.violations)['verification-state'][':violationId']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.violations)['verification-state'][':violationId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostViolationsVerificationStateViolationIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.violations)['verification-state'][':violationId']['$post']
          >
        },
      ) =>
        parseResponse(
          client.violations['verification-state'][':violationId'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCacertificateKey() {
  return ['cacertificate', '/cacertificate', 'POST'] as const
}

export function usePostCacertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cacertificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.cacertificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCacertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.cacertificate.$post> }) =>
        parseResponse(client.cacertificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCertificateRegisterKey() {
  return ['certificate', '/certificate/register', 'POST'] as const
}

export function usePostCertificateRegister<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.certificate.register.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.certificate.register.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCertificateRegisterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.certificate.register.$post> },
      ) => parseResponse(client.certificate.register.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCertificateRegisterNoCaKey() {
  return ['certificate', '/certificate/register-no-ca', 'POST'] as const
}

export function usePostCertificateRegisterNoCa<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.certificate)['register-no-ca']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.certificate)['register-no-ca']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCertificateRegisterNoCaKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.certificate)['register-no-ca']['$post']> },
      ) => parseResponse(client.certificate['register-no-ca'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchRejectCertificateTransferCertificateIdKey() {
  return [
    'reject-certificate-transfer',
    '/reject-certificate-transfer/:certificateId',
    'PATCH',
  ] as const
}

export function usePatchRejectCertificateTransferCertificateId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['reject-certificate-transfer'][':certificateId']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['reject-certificate-transfer'][':certificateId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchRejectCertificateTransferCertificateIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['reject-certificate-transfer'][':certificateId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client['reject-certificate-transfer'][':certificateId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutBillingGroupsRemoveThingFromBillingGroupKey() {
  return ['billing-groups', '/billing-groups/removeThingFromBillingGroup', 'PUT'] as const
}

export function usePutBillingGroupsRemoveThingFromBillingGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['billing-groups']['removeThingFromBillingGroup']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['billing-groups']['removeThingFromBillingGroup']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBillingGroupsRemoveThingFromBillingGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['billing-groups']['removeThingFromBillingGroup']['$put']
          >
        },
      ) =>
        parseResponse(
          client['billing-groups'].removeThingFromBillingGroup.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutThingGroupsRemoveThingFromThingGroupKey() {
  return ['thing-groups', '/thing-groups/removeThingFromThingGroup', 'PUT'] as const
}

export function usePutThingGroupsRemoveThingFromThingGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['thing-groups']['removeThingFromThingGroup']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['thing-groups']['removeThingFromThingGroup']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutThingGroupsRemoveThingFromThingGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['thing-groups']['removeThingFromThingGroup']['$put']
          >
        },
      ) => parseResponse(client['thing-groups'].removeThingFromThingGroup.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostIndicesSearchKey() {
  return ['indices', '/indices/search', 'POST'] as const
}

export function usePostIndicesSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.indices.search.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.indices.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIndicesSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.indices.search.$post> }) =>
        parseResponse(client.indices.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAuditTasksKey() {
  return ['audit', '/audit/tasks', 'POST'] as const
}

export function usePostAuditTasks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audit.tasks.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.audit.tasks.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuditTasksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.audit.tasks.$post> }) =>
        parseResponse(client.audit.tasks.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutThingRegistrationTasksTaskIdCancelKey() {
  return ['thing-registration-tasks', '/thing-registration-tasks/:taskId/cancel', 'PUT'] as const
}

export function usePutThingRegistrationTasksTaskIdCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['thing-registration-tasks'][':taskId']['cancel']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['thing-registration-tasks'][':taskId']['cancel']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutThingRegistrationTasksTaskIdCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['thing-registration-tasks'][':taskId']['cancel']['$put']
          >
        },
      ) =>
        parseResponse(
          client['thing-registration-tasks'][':taskId'].cancel.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostTagsKey() {
  return ['tags', '/tags', 'POST'] as const
}

export function usePostTags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.tags.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTagsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.tags.$post> }) =>
        parseResponse(client.tags.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTestAuthorizationKey() {
  return ['test-authorization', '/test-authorization', 'POST'] as const
}

export function usePostTestAuthorization<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['test-authorization']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['test-authorization']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTestAuthorizationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['test-authorization']['$post']> },
      ) => parseResponse(client['test-authorization'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAuthorizerAuthorizerNameTestKey() {
  return ['authorizer', '/authorizer/:authorizerName/test', 'POST'] as const
}

export function usePostAuthorizerAuthorizerNameTest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.authorizer)[':authorizerName']['test']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.authorizer)[':authorizerName']['test']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthorizerAuthorizerNameTestKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.authorizer)[':authorizerName']['test']['$post']>
        },
      ) => parseResponse(client.authorizer[':authorizerName'].test.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchTransferCertificateCertificateIdTargetAwsAccountKey() {
  return [
    'transfer-certificate',
    '/transfer-certificate/:certificateId#targetAwsAccount',
    'PATCH',
  ] as const
}

export function usePatchTransferCertificateCertificateIdTargetAwsAccount<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['transfer-certificate'][':certificateId#targetAwsAccount']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['transfer-certificate'][':certificateId#targetAwsAccount']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchTransferCertificateCertificateIdTargetAwsAccountKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['transfer-certificate'][':certificateId#targetAwsAccount']['$patch']
          >
        },
      ) =>
        parseResponse(
          client['transfer-certificate'][':certificateId#targetAwsAccount'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostUntagKey() {
  return ['untag', '/untag', 'POST'] as const
}

export function usePostUntag<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.untag.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.untag.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUntagKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.untag.$post> }) =>
        parseResponse(client.untag.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchAuditSuppressionsUpdateKey() {
  return ['audit', '/audit/suppressions/update', 'PATCH'] as const
}

export function usePatchAuditSuppressionsUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.audit.suppressions.update.$patch>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.audit.suppressions.update.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAuditSuppressionsUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.audit.suppressions.update.$patch> },
      ) => parseResponse(client.audit.suppressions.update.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutCertificatesCertificateIdNewStatusKey() {
  return ['certificates', '/certificates/:certificateId#newStatus', 'PUT'] as const
}

export function usePutCertificatesCertificateIdNewStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.certificates)[':certificateId#newStatus']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.certificates)[':certificateId#newStatus']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCertificatesCertificateIdNewStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.certificates)[':certificateId#newStatus']['$put']>
        },
      ) => parseResponse(client.certificates[':certificateId#newStatus'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutThingGroupsUpdateThingGroupsForThingKey() {
  return ['thing-groups', '/thing-groups/updateThingGroupsForThing', 'PUT'] as const
}

export function usePutThingGroupsUpdateThingGroupsForThing<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['thing-groups']['updateThingGroupsForThing']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['thing-groups']['updateThingGroupsForThing']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutThingGroupsUpdateThingGroupsForThingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['thing-groups']['updateThingGroupsForThing']['$put']
          >
        },
      ) => parseResponse(client['thing-groups'].updateThingGroupsForThing.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSecurityProfileBehaviorsValidateKey() {
  return ['security-profile-behaviors', '/security-profile-behaviors/validate', 'POST'] as const
}

export function usePostSecurityProfileBehaviorsValidate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['security-profile-behaviors']['validate']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['security-profile-behaviors']['validate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSecurityProfileBehaviorsValidateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['security-profile-behaviors']['validate']['$post']>
        },
      ) => parseResponse(client['security-profile-behaviors'].validate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
