import { useQuery, useMutation, mutationOptions } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
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

export function getPatchAcceptCertificateTransferCertificateIdMutationKey() {
  return [
    'accept-certificate-transfer',
    '/accept-certificate-transfer/:certificateId',
    'PATCH',
  ] as const
}

export function getPatchAcceptCertificateTransferCertificateIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['accept-certificate-transfer'][':certificateId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchAcceptCertificateTransferCertificateIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['accept-certificate-transfer'][':certificateId']['$patch']
      >,
    ) {
      return parseResponse(
        client['accept-certificate-transfer'][':certificateId'].$patch(args, options),
      )
    },
  })
}

export function usePatchAcceptCertificateTransferCertificateId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['accept-certificate-transfer'][':certificateId']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['accept-certificate-transfer'][':certificateId']['$patch']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchAcceptCertificateTransferCertificateIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutBillingGroupsAddThingToBillingGroupMutationKey() {
  return ['billing-groups', '/billing-groups/addThingToBillingGroup', 'PUT'] as const
}

export function getPutBillingGroupsAddThingToBillingGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['billing-groups']['addThingToBillingGroup']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['billing-groups']['addThingToBillingGroup']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBillingGroupsAddThingToBillingGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['billing-groups']['addThingToBillingGroup']['$put']>,
    ) {
      return parseResponse(client['billing-groups'].addThingToBillingGroup.$put(args, options))
    },
  })
}

export function usePutBillingGroupsAddThingToBillingGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['billing-groups']['addThingToBillingGroup']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['billing-groups']['addThingToBillingGroup']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutBillingGroupsAddThingToBillingGroupMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutThingGroupsAddThingToThingGroupMutationKey() {
  return ['thing-groups', '/thing-groups/addThingToThingGroup', 'PUT'] as const
}

export function getPutThingGroupsAddThingToThingGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['thing-groups']['addThingToThingGroup']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['thing-groups']['addThingToThingGroup']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutThingGroupsAddThingToThingGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['thing-groups']['addThingToThingGroup']['$put']>,
    ) {
      return parseResponse(client['thing-groups'].addThingToThingGroup.$put(args, options))
    },
  })
}

export function usePutThingGroupsAddThingToThingGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['thing-groups']['addThingToThingGroup']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['thing-groups']['addThingToThingGroup']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutThingGroupsAddThingToThingGroupMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostJobsJobIdTargetsMutationKey() {
  return ['jobs', '/jobs/:jobId/targets', 'POST'] as const
}

export function getPostJobsJobIdTargetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.jobs)[':jobId']['targets']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.jobs)[':jobId']['targets']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostJobsJobIdTargetsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.jobs)[':jobId']['targets']['$post']>) {
      return parseResponse(client.jobs[':jobId'].targets.$post(args, options))
    },
  })
}

export function usePostJobsJobIdTargets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.jobs)[':jobId']['targets']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.jobs)[':jobId']['targets']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostJobsJobIdTargetsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutTargetPoliciesPolicyNameMutationKey() {
  return ['target-policies', '/target-policies/:policyName', 'PUT'] as const
}

export function getPutTargetPoliciesPolicyNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['target-policies'][':policyName']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['target-policies'][':policyName']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutTargetPoliciesPolicyNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['target-policies'][':policyName']['$put']>,
    ) {
      return parseResponse(client['target-policies'][':policyName'].$put(args, options))
    },
  })
}

export function usePutTargetPoliciesPolicyName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['target-policies'][':policyName']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['target-policies'][':policyName']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutTargetPoliciesPolicyNameMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostTargetPoliciesPolicyNameMutationKey() {
  return ['target-policies', '/target-policies/:policyName', 'POST'] as const
}

export function getPostTargetPoliciesPolicyNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['target-policies'][':policyName']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['target-policies'][':policyName']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTargetPoliciesPolicyNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['target-policies'][':policyName']['$post']>,
    ) {
      return parseResponse(client['target-policies'][':policyName'].$post(args, options))
    },
  })
}

export function usePostTargetPoliciesPolicyName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['target-policies'][':policyName']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['target-policies'][':policyName']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTargetPoliciesPolicyNameMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutPrincipalPoliciesPolicyNameXAmznIotPrincipalMutationKey() {
  return [
    'principal-policies',
    '/principal-policies/:policyName#x-amzn-iot-principal',
    'PUT',
  ] as const
}

export function getPutPrincipalPoliciesPolicyNameXAmznIotPrincipalMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['principal-policies'][':policyName#x-amzn-iot-principal']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutPrincipalPoliciesPolicyNameXAmznIotPrincipalMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['principal-policies'][':policyName#x-amzn-iot-principal']['$put']
      >,
    ) {
      return parseResponse(
        client['principal-policies'][':policyName#x-amzn-iot-principal'].$put(args, options),
      )
    },
  })
}

export function usePutPrincipalPoliciesPolicyNameXAmznIotPrincipal<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['principal-policies'][':policyName#x-amzn-iot-principal']['$put']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutPrincipalPoliciesPolicyNameXAmznIotPrincipalMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeletePrincipalPoliciesPolicyNameXAmznIotPrincipalMutationKey() {
  return [
    'principal-policies',
    '/principal-policies/:policyName#x-amzn-iot-principal',
    'DELETE',
  ] as const
}

export function getDeletePrincipalPoliciesPolicyNameXAmznIotPrincipalMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['principal-policies'][':policyName#x-amzn-iot-principal']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeletePrincipalPoliciesPolicyNameXAmznIotPrincipalMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['principal-policies'][':policyName#x-amzn-iot-principal']['$delete']
      >,
    ) {
      return parseResponse(
        client['principal-policies'][':policyName#x-amzn-iot-principal'].$delete(args, options),
      )
    },
  })
}

export function useDeletePrincipalPoliciesPolicyNameXAmznIotPrincipal<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['principal-policies'][':policyName#x-amzn-iot-principal']['$delete']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeletePrincipalPoliciesPolicyNameXAmznIotPrincipalMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutSecurityProfilesSecurityProfileNameTargetsSecurityProfileTargetArnMutationKey() {
  return [
    'security-profiles',
    '/security-profiles/:securityProfileName/targets#securityProfileTargetArn',
    'PUT',
  ] as const
}

export function getPutSecurityProfilesSecurityProfileNameTargetsSecurityProfileTargetArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['security-profiles'][':securityProfileName']['targets#securityProfileTargetArn']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutSecurityProfilesSecurityProfileNameTargetsSecurityProfileTargetArnMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['security-profiles'][':securityProfileName']['targets#securityProfileTargetArn']['$put']
      >,
    ) {
      return parseResponse(
        client['security-profiles'][':securityProfileName'][
          'targets#securityProfileTargetArn'
        ].$put(args, options),
      )
    },
  })
}

export function usePutSecurityProfilesSecurityProfileNameTargetsSecurityProfileTargetArn<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['security-profiles'][':securityProfileName']['targets#securityProfileTargetArn']['$put']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPutSecurityProfilesSecurityProfileNameTargetsSecurityProfileTargetArnMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteSecurityProfilesSecurityProfileNameTargetsSecurityProfileTargetArnMutationKey() {
  return [
    'security-profiles',
    '/security-profiles/:securityProfileName/targets#securityProfileTargetArn',
    'DELETE',
  ] as const
}

export function getDeleteSecurityProfilesSecurityProfileNameTargetsSecurityProfileTargetArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['security-profiles'][':securityProfileName']['targets#securityProfileTargetArn']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteSecurityProfilesSecurityProfileNameTargetsSecurityProfileTargetArnMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['security-profiles'][':securityProfileName']['targets#securityProfileTargetArn']['$delete']
      >,
    ) {
      return parseResponse(
        client['security-profiles'][':securityProfileName'][
          'targets#securityProfileTargetArn'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteSecurityProfilesSecurityProfileNameTargetsSecurityProfileTargetArn<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['security-profiles'][':securityProfileName']['targets#securityProfileTargetArn']['$delete']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getDeleteSecurityProfilesSecurityProfileNameTargetsSecurityProfileTargetArnMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutThingsThingNamePrincipalsXAmznPrincipalMutationKey() {
  return ['things', '/things/:thingName/principals#x-amzn-principal', 'PUT'] as const
}

export function getPutThingsThingNamePrincipalsXAmznPrincipalMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.things)[':thingName']['principals#x-amzn-principal']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutThingsThingNamePrincipalsXAmznPrincipalMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.things)[':thingName']['principals#x-amzn-principal']['$put']
      >,
    ) {
      return parseResponse(
        client.things[':thingName']['principals#x-amzn-principal'].$put(args, options),
      )
    },
  })
}

export function usePutThingsThingNamePrincipalsXAmznPrincipal<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.things)[':thingName']['principals#x-amzn-principal']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.things)[':thingName']['principals#x-amzn-principal']['$put']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutThingsThingNamePrincipalsXAmznPrincipalMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteThingsThingNamePrincipalsXAmznPrincipalMutationKey() {
  return ['things', '/things/:thingName/principals#x-amzn-principal', 'DELETE'] as const
}

export function getDeleteThingsThingNamePrincipalsXAmznPrincipalMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.things)[':thingName']['principals#x-amzn-principal']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteThingsThingNamePrincipalsXAmznPrincipalMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.things)[':thingName']['principals#x-amzn-principal']['$delete']
      >,
    ) {
      return parseResponse(
        client.things[':thingName']['principals#x-amzn-principal'].$delete(args, options),
      )
    },
  })
}

export function useDeleteThingsThingNamePrincipalsXAmznPrincipal<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client.things)[':thingName']['principals#x-amzn-principal']['$delete']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteThingsThingNamePrincipalsXAmznPrincipalMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutAuditMitigationactionsTasksTaskIdCancelMutationKey() {
  return ['audit', '/audit/mitigationactions/tasks/:taskId/cancel', 'PUT'] as const
}

export function getPutAuditMitigationactionsTasksTaskIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.audit.mitigationactions.tasks)[':taskId']['cancel']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAuditMitigationactionsTasksTaskIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.audit.mitigationactions.tasks)[':taskId']['cancel']['$put']
      >,
    ) {
      return parseResponse(
        client.audit.mitigationactions.tasks[':taskId'].cancel.$put(args, options),
      )
    },
  })
}

export function usePutAuditMitigationactionsTasksTaskIdCancel<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.audit.mitigationactions.tasks)[':taskId']['cancel']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.audit.mitigationactions.tasks)[':taskId']['cancel']['$put']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutAuditMitigationactionsTasksTaskIdCancelMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutAuditTasksTaskIdCancelMutationKey() {
  return ['audit', '/audit/tasks/:taskId/cancel', 'PUT'] as const
}

export function getPutAuditTasksTaskIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.audit.tasks)[':taskId']['cancel']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.audit.tasks)[':taskId']['cancel']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAuditTasksTaskIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.audit.tasks)[':taskId']['cancel']['$put']>,
    ) {
      return parseResponse(client.audit.tasks[':taskId'].cancel.$put(args, options))
    },
  })
}

export function usePutAuditTasksTaskIdCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.audit.tasks)[':taskId']['cancel']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.audit.tasks)[':taskId']['cancel']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutAuditTasksTaskIdCancelMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchCancelCertificateTransferCertificateIdMutationKey() {
  return [
    'cancel-certificate-transfer',
    '/cancel-certificate-transfer/:certificateId',
    'PATCH',
  ] as const
}

export function getPatchCancelCertificateTransferCertificateIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['cancel-certificate-transfer'][':certificateId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchCancelCertificateTransferCertificateIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['cancel-certificate-transfer'][':certificateId']['$patch']
      >,
    ) {
      return parseResponse(
        client['cancel-certificate-transfer'][':certificateId'].$patch(args, options),
      )
    },
  })
}

export function usePatchCancelCertificateTransferCertificateId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['cancel-certificate-transfer'][':certificateId']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['cancel-certificate-transfer'][':certificateId']['$patch']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchCancelCertificateTransferCertificateIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutDetectMitigationactionsTasksTaskIdCancelMutationKey() {
  return ['detect', '/detect/mitigationactions/tasks/:taskId/cancel', 'PUT'] as const
}

export function getPutDetectMitigationactionsTasksTaskIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.detect.mitigationactions.tasks)[':taskId']['cancel']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDetectMitigationactionsTasksTaskIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.detect.mitigationactions.tasks)[':taskId']['cancel']['$put']
      >,
    ) {
      return parseResponse(
        client.detect.mitigationactions.tasks[':taskId'].cancel.$put(args, options),
      )
    },
  })
}

export function usePutDetectMitigationactionsTasksTaskIdCancel<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.detect.mitigationactions.tasks)[':taskId']['cancel']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.detect.mitigationactions.tasks)[':taskId']['cancel']['$put']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutDetectMitigationactionsTasksTaskIdCancelMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutJobsJobIdCancelMutationKey() {
  return ['jobs', '/jobs/:jobId/cancel', 'PUT'] as const
}

export function getPutJobsJobIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':jobId']['cancel']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.jobs)[':jobId']['cancel']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutJobsJobIdCancelMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.jobs)[':jobId']['cancel']['$put']>) {
      return parseResponse(client.jobs[':jobId'].cancel.$put(args, options))
    },
  })
}

export function usePutJobsJobIdCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.jobs)[':jobId']['cancel']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.jobs)[':jobId']['cancel']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutJobsJobIdCancelMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutThingsThingNameJobsJobIdCancelMutationKey() {
  return ['things', '/things/:thingName/jobs/:jobId/cancel', 'PUT'] as const
}

export function getPutThingsThingNameJobsJobIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.things)[':thingName']['jobs'][':jobId']['cancel']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutThingsThingNameJobsJobIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.things)[':thingName']['jobs'][':jobId']['cancel']['$put']
      >,
    ) {
      return parseResponse(client.things[':thingName'].jobs[':jobId'].cancel.$put(args, options))
    },
  })
}

export function usePutThingsThingNameJobsJobIdCancel<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.things)[':thingName']['jobs'][':jobId']['cancel']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.things)[':thingName']['jobs'][':jobId']['cancel']['$put']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutThingsThingNameJobsJobIdCancelMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDefaultAuthorizerQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['default-authorizer']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['default-authorizer', '/default-authorizer', keyArgs] as const
}

export function getDefaultAuthorizerQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['default-authorizer']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDefaultAuthorizerQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['default-authorizer'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDefaultAuthorizer<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['default-authorizer']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['default-authorizer']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['default-authorizer']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['default-authorizer']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDefaultAuthorizerQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['default-authorizer']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDefaultAuthorizerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDefaultAuthorizerQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['default-authorizer'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDefaultAuthorizerMutationKey() {
  return ['default-authorizer', '/default-authorizer', 'POST'] as const
}

export function getPostDefaultAuthorizerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['default-authorizer']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['default-authorizer']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDefaultAuthorizerMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['default-authorizer']['$post']>) {
      return parseResponse(client['default-authorizer'].$post(args, options))
    },
  })
}

export function usePostDefaultAuthorizer<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['default-authorizer']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['default-authorizer']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDefaultAuthorizerMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteDefaultAuthorizerMutationKey() {
  return ['default-authorizer', '/default-authorizer', 'DELETE'] as const
}

export function getDeleteDefaultAuthorizerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['default-authorizer']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['default-authorizer']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDefaultAuthorizerMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['default-authorizer']['$delete']>) {
      return parseResponse(client['default-authorizer'].$delete(args, options))
    },
  })
}

export function useDeleteDefaultAuthorizer<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['default-authorizer']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['default-authorizer']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteDefaultAuthorizerMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getConfirmdestinationConfirmationTokenQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.confirmdestination)[':confirmationToken']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['confirmdestination', '/confirmdestination/:confirmationToken', keyArgs] as const
}

export function getConfirmdestinationConfirmationTokenQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.confirmdestination)[':confirmationToken']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConfirmdestinationConfirmationTokenQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.confirmdestination[':confirmationToken'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConfirmdestinationConfirmationToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.confirmdestination)[':confirmationToken']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.confirmdestination)[':confirmationToken']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.confirmdestination)[':confirmationToken']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.confirmdestination)[':confirmationToken']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getConfirmdestinationConfirmationTokenQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.confirmdestination)[':confirmationToken']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConfirmdestinationConfirmationTokenQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConfirmdestinationConfirmationTokenQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.confirmdestination[':confirmationToken'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAuditSuppressionsCreateMutationKey() {
  return ['audit', '/audit/suppressions/create', 'POST'] as const
}

export function getPostAuditSuppressionsCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.audit.suppressions.create.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.audit.suppressions.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAuditSuppressionsCreateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.audit.suppressions.create.$post>) {
      return parseResponse(client.audit.suppressions.create.$post(args, options))
    },
  })
}

export function usePostAuditSuppressionsCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.audit.suppressions.create.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.audit.suppressions.create.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAuditSuppressionsCreateMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAuthorizerAuthorizerNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.authorizer)[':authorizerName']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['authorizer', '/authorizer/:authorizerName', keyArgs] as const
}

export function getAuthorizerAuthorizerNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.authorizer)[':authorizerName']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAuthorizerAuthorizerNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.authorizer[':authorizerName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAuthorizerAuthorizerName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.authorizer)[':authorizerName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.authorizer)[':authorizerName']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.authorizer)[':authorizerName']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.authorizer)[':authorizerName']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAuthorizerAuthorizerNameQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.authorizer)[':authorizerName']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAuthorizerAuthorizerNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAuthorizerAuthorizerNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.authorizer[':authorizerName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAuthorizerAuthorizerNameMutationKey() {
  return ['authorizer', '/authorizer/:authorizerName', 'PUT'] as const
}

export function getPutAuthorizerAuthorizerNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.authorizer)[':authorizerName']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.authorizer)[':authorizerName']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAuthorizerAuthorizerNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.authorizer)[':authorizerName']['$put']>,
    ) {
      return parseResponse(client.authorizer[':authorizerName'].$put(args, options))
    },
  })
}

export function usePutAuthorizerAuthorizerName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.authorizer)[':authorizerName']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.authorizer)[':authorizerName']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutAuthorizerAuthorizerNameMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAuthorizerAuthorizerNameMutationKey() {
  return ['authorizer', '/authorizer/:authorizerName', 'POST'] as const
}

export function getPostAuthorizerAuthorizerNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.authorizer)[':authorizerName']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.authorizer)[':authorizerName']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthorizerAuthorizerNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.authorizer)[':authorizerName']['$post']>,
    ) {
      return parseResponse(client.authorizer[':authorizerName'].$post(args, options))
    },
  })
}

export function usePostAuthorizerAuthorizerName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.authorizer)[':authorizerName']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.authorizer)[':authorizerName']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAuthorizerAuthorizerNameMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteAuthorizerAuthorizerNameMutationKey() {
  return ['authorizer', '/authorizer/:authorizerName', 'DELETE'] as const
}

export function getDeleteAuthorizerAuthorizerNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.authorizer)[':authorizerName']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.authorizer)[':authorizerName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAuthorizerAuthorizerNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.authorizer)[':authorizerName']['$delete']>,
    ) {
      return parseResponse(client.authorizer[':authorizerName'].$delete(args, options))
    },
  })
}

export function useDeleteAuthorizerAuthorizerName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.authorizer)[':authorizerName']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.authorizer)[':authorizerName']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAuthorizerAuthorizerNameMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getBillingGroupsBillingGroupNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['billing-groups'][':billingGroupName']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['billing-groups', '/billing-groups/:billingGroupName', keyArgs] as const
}

export function getBillingGroupsBillingGroupNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['billing-groups'][':billingGroupName']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBillingGroupsBillingGroupNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['billing-groups'][':billingGroupName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBillingGroupsBillingGroupName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['billing-groups'][':billingGroupName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['billing-groups'][':billingGroupName']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['billing-groups'][':billingGroupName']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['billing-groups'][':billingGroupName']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBillingGroupsBillingGroupNameQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['billing-groups'][':billingGroupName']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBillingGroupsBillingGroupNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBillingGroupsBillingGroupNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['billing-groups'][':billingGroupName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostBillingGroupsBillingGroupNameMutationKey() {
  return ['billing-groups', '/billing-groups/:billingGroupName', 'POST'] as const
}

export function getPostBillingGroupsBillingGroupNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['billing-groups'][':billingGroupName']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['billing-groups'][':billingGroupName']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBillingGroupsBillingGroupNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['billing-groups'][':billingGroupName']['$post']>,
    ) {
      return parseResponse(client['billing-groups'][':billingGroupName'].$post(args, options))
    },
  })
}

export function usePostBillingGroupsBillingGroupName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['billing-groups'][':billingGroupName']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['billing-groups'][':billingGroupName']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBillingGroupsBillingGroupNameMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteBillingGroupsBillingGroupNameMutationKey() {
  return ['billing-groups', '/billing-groups/:billingGroupName', 'DELETE'] as const
}

export function getDeleteBillingGroupsBillingGroupNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['billing-groups'][':billingGroupName']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['billing-groups'][':billingGroupName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteBillingGroupsBillingGroupNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['billing-groups'][':billingGroupName']['$delete']>,
    ) {
      return parseResponse(client['billing-groups'][':billingGroupName'].$delete(args, options))
    },
  })
}

export function useDeleteBillingGroupsBillingGroupName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['billing-groups'][':billingGroupName']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['billing-groups'][':billingGroupName']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteBillingGroupsBillingGroupNameMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchBillingGroupsBillingGroupNameMutationKey() {
  return ['billing-groups', '/billing-groups/:billingGroupName', 'PATCH'] as const
}

export function getPatchBillingGroupsBillingGroupNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['billing-groups'][':billingGroupName']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['billing-groups'][':billingGroupName']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchBillingGroupsBillingGroupNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['billing-groups'][':billingGroupName']['$patch']>,
    ) {
      return parseResponse(client['billing-groups'][':billingGroupName'].$patch(args, options))
    },
  })
}

export function usePatchBillingGroupsBillingGroupName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['billing-groups'][':billingGroupName']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['billing-groups'][':billingGroupName']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchBillingGroupsBillingGroupNameMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCertificatesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.certificates.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['certificates', '/certificates', keyArgs] as const
}

export function getCertificatesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.certificates.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCertificatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.certificates.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCertificates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.certificates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.certificates.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.certificates.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.certificates.$get>>>>
          >,
          ReturnType<typeof getCertificatesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.certificates.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCertificatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCertificatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.certificates.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostCertificatesMutationKey() {
  return ['certificates', '/certificates', 'POST'] as const
}

export function getPostCertificatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.certificates.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.certificates.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCertificatesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.certificates.$post>) {
      return parseResponse(client.certificates.$post(args, options))
    },
  })
}

export function usePostCertificates<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.certificates.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.certificates.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCertificatesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCustomMetricMetricNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['custom-metric'][':metricName']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['custom-metric', '/custom-metric/:metricName', keyArgs] as const
}

export function getCustomMetricMetricNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['custom-metric'][':metricName']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCustomMetricMetricNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['custom-metric'][':metricName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCustomMetricMetricName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['custom-metric'][':metricName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['custom-metric'][':metricName']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['custom-metric'][':metricName']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['custom-metric'][':metricName']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCustomMetricMetricNameQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['custom-metric'][':metricName']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomMetricMetricNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCustomMetricMetricNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['custom-metric'][':metricName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostCustomMetricMetricNameMutationKey() {
  return ['custom-metric', '/custom-metric/:metricName', 'POST'] as const
}

export function getPostCustomMetricMetricNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['custom-metric'][':metricName']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['custom-metric'][':metricName']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCustomMetricMetricNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['custom-metric'][':metricName']['$post']>,
    ) {
      return parseResponse(client['custom-metric'][':metricName'].$post(args, options))
    },
  })
}

export function usePostCustomMetricMetricName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['custom-metric'][':metricName']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['custom-metric'][':metricName']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCustomMetricMetricNameMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteCustomMetricMetricNameMutationKey() {
  return ['custom-metric', '/custom-metric/:metricName', 'DELETE'] as const
}

export function getDeleteCustomMetricMetricNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['custom-metric'][':metricName']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['custom-metric'][':metricName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCustomMetricMetricNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['custom-metric'][':metricName']['$delete']>,
    ) {
      return parseResponse(client['custom-metric'][':metricName'].$delete(args, options))
    },
  })
}

export function useDeleteCustomMetricMetricName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['custom-metric'][':metricName']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['custom-metric'][':metricName']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteCustomMetricMetricNameMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchCustomMetricMetricNameMutationKey() {
  return ['custom-metric', '/custom-metric/:metricName', 'PATCH'] as const
}

export function getPatchCustomMetricMetricNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['custom-metric'][':metricName']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['custom-metric'][':metricName']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchCustomMetricMetricNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['custom-metric'][':metricName']['$patch']>,
    ) {
      return parseResponse(client['custom-metric'][':metricName'].$patch(args, options))
    },
  })
}

export function usePatchCustomMetricMetricName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['custom-metric'][':metricName']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['custom-metric'][':metricName']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchCustomMetricMetricNameMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDimensionsNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dimensions)[':name']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['dimensions', '/dimensions/:name', keyArgs] as const
}

export function getDimensionsNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dimensions)[':name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDimensionsNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dimensions[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDimensionsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.dimensions)[':name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dimensions)[':name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.dimensions)[':name']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.dimensions)[':name']['$get']>>>
            >
          >,
          ReturnType<typeof getDimensionsNameQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.dimensions)[':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDimensionsNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDimensionsNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dimensions[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDimensionsNameMutationKey() {
  return ['dimensions', '/dimensions/:name', 'POST'] as const
}

export function getPostDimensionsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.dimensions)[':name']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.dimensions)[':name']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDimensionsNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.dimensions)[':name']['$post']>) {
      return parseResponse(client.dimensions[':name'].$post(args, options))
    },
  })
}

export function usePostDimensionsName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dimensions)[':name']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.dimensions)[':name']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDimensionsNameMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteDimensionsNameMutationKey() {
  return ['dimensions', '/dimensions/:name', 'DELETE'] as const
}

export function getDeleteDimensionsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.dimensions)[':name']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.dimensions)[':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDimensionsNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.dimensions)[':name']['$delete']>) {
      return parseResponse(client.dimensions[':name'].$delete(args, options))
    },
  })
}

export function useDeleteDimensionsName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dimensions)[':name']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.dimensions)[':name']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteDimensionsNameMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchDimensionsNameMutationKey() {
  return ['dimensions', '/dimensions/:name', 'PATCH'] as const
}

export function getPatchDimensionsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.dimensions)[':name']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.dimensions)[':name']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchDimensionsNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.dimensions)[':name']['$patch']>) {
      return parseResponse(client.dimensions[':name'].$patch(args, options))
    },
  })
}

export function usePatchDimensionsName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dimensions)[':name']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.dimensions)[':name']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchDimensionsNameMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDomainConfigurationsDomainConfigurationNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.domainConfigurations)[':domainConfigurationName']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'domainConfigurations',
    '/domainConfigurations/:domainConfigurationName',
    keyArgs,
  ] as const
}

export function getDomainConfigurationsDomainConfigurationNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.domainConfigurations)[':domainConfigurationName']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDomainConfigurationsDomainConfigurationNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.domainConfigurations[':domainConfigurationName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDomainConfigurationsDomainConfigurationName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.domainConfigurations)[':domainConfigurationName']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.domainConfigurations)[':domainConfigurationName']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.domainConfigurations)[':domainConfigurationName']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.domainConfigurations)[':domainConfigurationName']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDomainConfigurationsDomainConfigurationNameQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.domainConfigurations)[':domainConfigurationName']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDomainConfigurationsDomainConfigurationNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDomainConfigurationsDomainConfigurationNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.domainConfigurations[':domainConfigurationName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutDomainConfigurationsDomainConfigurationNameMutationKey() {
  return ['domainConfigurations', '/domainConfigurations/:domainConfigurationName', 'PUT'] as const
}

export function getPutDomainConfigurationsDomainConfigurationNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.domainConfigurations)[':domainConfigurationName']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDomainConfigurationsDomainConfigurationNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.domainConfigurations)[':domainConfigurationName']['$put']
      >,
    ) {
      return parseResponse(
        client.domainConfigurations[':domainConfigurationName'].$put(args, options),
      )
    },
  })
}

export function usePutDomainConfigurationsDomainConfigurationName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.domainConfigurations)[':domainConfigurationName']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.domainConfigurations)[':domainConfigurationName']['$put']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutDomainConfigurationsDomainConfigurationNameMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostDomainConfigurationsDomainConfigurationNameMutationKey() {
  return ['domainConfigurations', '/domainConfigurations/:domainConfigurationName', 'POST'] as const
}

export function getPostDomainConfigurationsDomainConfigurationNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.domainConfigurations)[':domainConfigurationName']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDomainConfigurationsDomainConfigurationNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.domainConfigurations)[':domainConfigurationName']['$post']
      >,
    ) {
      return parseResponse(
        client.domainConfigurations[':domainConfigurationName'].$post(args, options),
      )
    },
  })
}

export function usePostDomainConfigurationsDomainConfigurationName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.domainConfigurations)[':domainConfigurationName']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.domainConfigurations)[':domainConfigurationName']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDomainConfigurationsDomainConfigurationNameMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteDomainConfigurationsDomainConfigurationNameMutationKey() {
  return [
    'domainConfigurations',
    '/domainConfigurations/:domainConfigurationName',
    'DELETE',
  ] as const
}

export function getDeleteDomainConfigurationsDomainConfigurationNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.domainConfigurations)[':domainConfigurationName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDomainConfigurationsDomainConfigurationNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.domainConfigurations)[':domainConfigurationName']['$delete']
      >,
    ) {
      return parseResponse(
        client.domainConfigurations[':domainConfigurationName'].$delete(args, options),
      )
    },
  })
}

export function useDeleteDomainConfigurationsDomainConfigurationName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.domainConfigurations)[':domainConfigurationName']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.domainConfigurations)[':domainConfigurationName']['$delete']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteDomainConfigurationsDomainConfigurationNameMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostDynamicThingGroupsThingGroupNameMutationKey() {
  return ['dynamic-thing-groups', '/dynamic-thing-groups/:thingGroupName', 'POST'] as const
}

export function getPostDynamicThingGroupsThingGroupNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['dynamic-thing-groups'][':thingGroupName']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['dynamic-thing-groups'][':thingGroupName']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDynamicThingGroupsThingGroupNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['dynamic-thing-groups'][':thingGroupName']['$post']>,
    ) {
      return parseResponse(client['dynamic-thing-groups'][':thingGroupName'].$post(args, options))
    },
  })
}

export function usePostDynamicThingGroupsThingGroupName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['dynamic-thing-groups'][':thingGroupName']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['dynamic-thing-groups'][':thingGroupName']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDynamicThingGroupsThingGroupNameMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteDynamicThingGroupsThingGroupNameMutationKey() {
  return ['dynamic-thing-groups', '/dynamic-thing-groups/:thingGroupName', 'DELETE'] as const
}

export function getDeleteDynamicThingGroupsThingGroupNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['dynamic-thing-groups'][':thingGroupName']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['dynamic-thing-groups'][':thingGroupName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDynamicThingGroupsThingGroupNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['dynamic-thing-groups'][':thingGroupName']['$delete']>,
    ) {
      return parseResponse(client['dynamic-thing-groups'][':thingGroupName'].$delete(args, options))
    },
  })
}

export function useDeleteDynamicThingGroupsThingGroupName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['dynamic-thing-groups'][':thingGroupName']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['dynamic-thing-groups'][':thingGroupName']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteDynamicThingGroupsThingGroupNameMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchDynamicThingGroupsThingGroupNameMutationKey() {
  return ['dynamic-thing-groups', '/dynamic-thing-groups/:thingGroupName', 'PATCH'] as const
}

export function getPatchDynamicThingGroupsThingGroupNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['dynamic-thing-groups'][':thingGroupName']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['dynamic-thing-groups'][':thingGroupName']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchDynamicThingGroupsThingGroupNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['dynamic-thing-groups'][':thingGroupName']['$patch']>,
    ) {
      return parseResponse(client['dynamic-thing-groups'][':thingGroupName'].$patch(args, options))
    },
  })
}

export function usePatchDynamicThingGroupsThingGroupName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['dynamic-thing-groups'][':thingGroupName']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['dynamic-thing-groups'][':thingGroupName']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchDynamicThingGroupsThingGroupNameMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getFleetMetricMetricNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['fleet-metric'][':metricName']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['fleet-metric', '/fleet-metric/:metricName', keyArgs] as const
}

export function getFleetMetricMetricNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['fleet-metric'][':metricName']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFleetMetricMetricNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['fleet-metric'][':metricName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFleetMetricMetricName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['fleet-metric'][':metricName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['fleet-metric'][':metricName']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['fleet-metric'][':metricName']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['fleet-metric'][':metricName']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFleetMetricMetricNameQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['fleet-metric'][':metricName']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFleetMetricMetricNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFleetMetricMetricNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['fleet-metric'][':metricName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutFleetMetricMetricNameMutationKey() {
  return ['fleet-metric', '/fleet-metric/:metricName', 'PUT'] as const
}

export function getPutFleetMetricMetricNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['fleet-metric'][':metricName']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['fleet-metric'][':metricName']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutFleetMetricMetricNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['fleet-metric'][':metricName']['$put']>,
    ) {
      return parseResponse(client['fleet-metric'][':metricName'].$put(args, options))
    },
  })
}

export function usePutFleetMetricMetricName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['fleet-metric'][':metricName']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['fleet-metric'][':metricName']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutFleetMetricMetricNameMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteFleetMetricMetricNameMutationKey() {
  return ['fleet-metric', '/fleet-metric/:metricName', 'DELETE'] as const
}

export function getDeleteFleetMetricMetricNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['fleet-metric'][':metricName']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['fleet-metric'][':metricName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteFleetMetricMetricNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['fleet-metric'][':metricName']['$delete']>,
    ) {
      return parseResponse(client['fleet-metric'][':metricName'].$delete(args, options))
    },
  })
}

export function useDeleteFleetMetricMetricName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['fleet-metric'][':metricName']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['fleet-metric'][':metricName']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteFleetMetricMetricNameMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchFleetMetricMetricNameMutationKey() {
  return ['fleet-metric', '/fleet-metric/:metricName', 'PATCH'] as const
}

export function getPatchFleetMetricMetricNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['fleet-metric'][':metricName']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['fleet-metric'][':metricName']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchFleetMetricMetricNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['fleet-metric'][':metricName']['$patch']>,
    ) {
      return parseResponse(client['fleet-metric'][':metricName'].$patch(args, options))
    },
  })
}

export function usePatchFleetMetricMetricName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['fleet-metric'][':metricName']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['fleet-metric'][':metricName']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchFleetMetricMetricNameMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getJobsJobIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.jobs)[':jobId']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['jobs', '/jobs/:jobId', keyArgs] as const
}

export function getJobsJobIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.jobs)[':jobId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getJobsJobIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.jobs[':jobId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useJobsJobId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':jobId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.jobs)[':jobId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':jobId']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':jobId']['$get']>>>
            >
          >,
          ReturnType<typeof getJobsJobIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':jobId']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getJobsJobIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getJobsJobIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.jobs[':jobId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutJobsJobIdMutationKey() {
  return ['jobs', '/jobs/:jobId', 'PUT'] as const
}

export function getPutJobsJobIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':jobId']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.jobs)[':jobId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutJobsJobIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.jobs)[':jobId']['$put']>) {
      return parseResponse(client.jobs[':jobId'].$put(args, options))
    },
  })
}

export function usePutJobsJobId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':jobId']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.jobs)[':jobId']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutJobsJobIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteJobsJobIdMutationKey() {
  return ['jobs', '/jobs/:jobId', 'DELETE'] as const
}

export function getDeleteJobsJobIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':jobId']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.jobs)[':jobId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteJobsJobIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.jobs)[':jobId']['$delete']>) {
      return parseResponse(client.jobs[':jobId'].$delete(args, options))
    },
  })
}

export function useDeleteJobsJobId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':jobId']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.jobs)[':jobId']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteJobsJobIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchJobsJobIdMutationKey() {
  return ['jobs', '/jobs/:jobId', 'PATCH'] as const
}

export function getPatchJobsJobIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':jobId']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.jobs)[':jobId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchJobsJobIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.jobs)[':jobId']['$patch']>) {
      return parseResponse(client.jobs[':jobId'].$patch(args, options))
    },
  })
}

export function usePatchJobsJobId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':jobId']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.jobs)[':jobId']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchJobsJobIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getJobTemplatesJobTemplateIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['job-templates'][':jobTemplateId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['job-templates', '/job-templates/:jobTemplateId', keyArgs] as const
}

export function getJobTemplatesJobTemplateIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['job-templates'][':jobTemplateId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getJobTemplatesJobTemplateIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['job-templates'][':jobTemplateId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useJobTemplatesJobTemplateId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['job-templates'][':jobTemplateId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['job-templates'][':jobTemplateId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['job-templates'][':jobTemplateId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['job-templates'][':jobTemplateId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getJobTemplatesJobTemplateIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['job-templates'][':jobTemplateId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getJobTemplatesJobTemplateIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getJobTemplatesJobTemplateIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['job-templates'][':jobTemplateId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutJobTemplatesJobTemplateIdMutationKey() {
  return ['job-templates', '/job-templates/:jobTemplateId', 'PUT'] as const
}

export function getPutJobTemplatesJobTemplateIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['job-templates'][':jobTemplateId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['job-templates'][':jobTemplateId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutJobTemplatesJobTemplateIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['job-templates'][':jobTemplateId']['$put']>,
    ) {
      return parseResponse(client['job-templates'][':jobTemplateId'].$put(args, options))
    },
  })
}

export function usePutJobTemplatesJobTemplateId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['job-templates'][':jobTemplateId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['job-templates'][':jobTemplateId']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutJobTemplatesJobTemplateIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteJobTemplatesJobTemplateIdMutationKey() {
  return ['job-templates', '/job-templates/:jobTemplateId', 'DELETE'] as const
}

export function getDeleteJobTemplatesJobTemplateIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['job-templates'][':jobTemplateId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['job-templates'][':jobTemplateId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteJobTemplatesJobTemplateIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['job-templates'][':jobTemplateId']['$delete']>,
    ) {
      return parseResponse(client['job-templates'][':jobTemplateId'].$delete(args, options))
    },
  })
}

export function useDeleteJobTemplatesJobTemplateId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['job-templates'][':jobTemplateId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['job-templates'][':jobTemplateId']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteJobTemplatesJobTemplateIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostKeysAndCertificateMutationKey() {
  return ['keys-and-certificate', '/keys-and-certificate', 'POST'] as const
}

export function getPostKeysAndCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['keys-and-certificate']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['keys-and-certificate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostKeysAndCertificateMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['keys-and-certificate']['$post']>) {
      return parseResponse(client['keys-and-certificate'].$post(args, options))
    },
  })
}

export function usePostKeysAndCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['keys-and-certificate']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['keys-and-certificate']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostKeysAndCertificateMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getMitigationactionsActionsActionNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mitigationactions.actions)[':actionName']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['mitigationactions', '/mitigationactions/actions/:actionName', keyArgs] as const
}

export function getMitigationactionsActionsActionNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mitigationactions.actions)[':actionName']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMitigationactionsActionsActionNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mitigationactions.actions[':actionName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMitigationactionsActionsActionName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mitigationactions.actions)[':actionName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mitigationactions.actions)[':actionName']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.mitigationactions.actions)[':actionName']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.mitigationactions.actions)[':actionName']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getMitigationactionsActionsActionNameQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mitigationactions.actions)[':actionName']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMitigationactionsActionsActionNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMitigationactionsActionsActionNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mitigationactions.actions[':actionName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostMitigationactionsActionsActionNameMutationKey() {
  return ['mitigationactions', '/mitigationactions/actions/:actionName', 'POST'] as const
}

export function getPostMitigationactionsActionsActionNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mitigationactions.actions)[':actionName']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.mitigationactions.actions)[':actionName']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMitigationactionsActionsActionNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.mitigationactions.actions)[':actionName']['$post']>,
    ) {
      return parseResponse(client.mitigationactions.actions[':actionName'].$post(args, options))
    },
  })
}

export function usePostMitigationactionsActionsActionName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.mitigationactions.actions)[':actionName']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.mitigationactions.actions)[':actionName']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMitigationactionsActionsActionNameMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteMitigationactionsActionsActionNameMutationKey() {
  return ['mitigationactions', '/mitigationactions/actions/:actionName', 'DELETE'] as const
}

export function getDeleteMitigationactionsActionsActionNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mitigationactions.actions)[':actionName']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.mitigationactions.actions)[':actionName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMitigationactionsActionsActionNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.mitigationactions.actions)[':actionName']['$delete']>,
    ) {
      return parseResponse(client.mitigationactions.actions[':actionName'].$delete(args, options))
    },
  })
}

export function useDeleteMitigationactionsActionsActionName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.mitigationactions.actions)[':actionName']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.mitigationactions.actions)[':actionName']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteMitigationactionsActionsActionNameMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchMitigationactionsActionsActionNameMutationKey() {
  return ['mitigationactions', '/mitigationactions/actions/:actionName', 'PATCH'] as const
}

export function getPatchMitigationactionsActionsActionNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mitigationactions.actions)[':actionName']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.mitigationactions.actions)[':actionName']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchMitigationactionsActionsActionNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.mitigationactions.actions)[':actionName']['$patch']>,
    ) {
      return parseResponse(client.mitigationactions.actions[':actionName'].$patch(args, options))
    },
  })
}

export function usePatchMitigationactionsActionsActionName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.mitigationactions.actions)[':actionName']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.mitigationactions.actions)[':actionName']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchMitigationactionsActionsActionNameMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getOtaUpdatesOtaUpdateIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.otaUpdates)[':otaUpdateId']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['otaUpdates', '/otaUpdates/:otaUpdateId', keyArgs] as const
}

export function getOtaUpdatesOtaUpdateIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.otaUpdates)[':otaUpdateId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOtaUpdatesOtaUpdateIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.otaUpdates[':otaUpdateId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOtaUpdatesOtaUpdateId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.otaUpdates)[':otaUpdateId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.otaUpdates)[':otaUpdateId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.otaUpdates)[':otaUpdateId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.otaUpdates)[':otaUpdateId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOtaUpdatesOtaUpdateIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.otaUpdates)[':otaUpdateId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOtaUpdatesOtaUpdateIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOtaUpdatesOtaUpdateIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.otaUpdates[':otaUpdateId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOtaUpdatesOtaUpdateIdMutationKey() {
  return ['otaUpdates', '/otaUpdates/:otaUpdateId', 'POST'] as const
}

export function getPostOtaUpdatesOtaUpdateIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.otaUpdates)[':otaUpdateId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.otaUpdates)[':otaUpdateId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOtaUpdatesOtaUpdateIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.otaUpdates)[':otaUpdateId']['$post']>) {
      return parseResponse(client.otaUpdates[':otaUpdateId'].$post(args, options))
    },
  })
}

export function usePostOtaUpdatesOtaUpdateId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.otaUpdates)[':otaUpdateId']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.otaUpdates)[':otaUpdateId']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOtaUpdatesOtaUpdateIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteOtaUpdatesOtaUpdateIdMutationKey() {
  return ['otaUpdates', '/otaUpdates/:otaUpdateId', 'DELETE'] as const
}

export function getDeleteOtaUpdatesOtaUpdateIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.otaUpdates)[':otaUpdateId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.otaUpdates)[':otaUpdateId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteOtaUpdatesOtaUpdateIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.otaUpdates)[':otaUpdateId']['$delete']>,
    ) {
      return parseResponse(client.otaUpdates[':otaUpdateId'].$delete(args, options))
    },
  })
}

export function useDeleteOtaUpdatesOtaUpdateId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.otaUpdates)[':otaUpdateId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.otaUpdates)[':otaUpdateId']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteOtaUpdatesOtaUpdateIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPoliciesPolicyNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.policies)[':policyName']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['policies', '/policies/:policyName', keyArgs] as const
}

export function getPoliciesPolicyNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.policies)[':policyName']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPoliciesPolicyNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.policies[':policyName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePoliciesPolicyName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.policies)[':policyName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.policies)[':policyName']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.policies)[':policyName']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.policies)[':policyName']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPoliciesPolicyNameQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.policies)[':policyName']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPoliciesPolicyNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPoliciesPolicyNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.policies[':policyName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostPoliciesPolicyNameMutationKey() {
  return ['policies', '/policies/:policyName', 'POST'] as const
}

export function getPostPoliciesPolicyNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.policies)[':policyName']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.policies)[':policyName']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPoliciesPolicyNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.policies)[':policyName']['$post']>) {
      return parseResponse(client.policies[':policyName'].$post(args, options))
    },
  })
}

export function usePostPoliciesPolicyName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.policies)[':policyName']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.policies)[':policyName']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPoliciesPolicyNameMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeletePoliciesPolicyNameMutationKey() {
  return ['policies', '/policies/:policyName', 'DELETE'] as const
}

export function getDeletePoliciesPolicyNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.policies)[':policyName']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.policies)[':policyName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePoliciesPolicyNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.policies)[':policyName']['$delete']>) {
      return parseResponse(client.policies[':policyName'].$delete(args, options))
    },
  })
}

export function useDeletePoliciesPolicyName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.policies)[':policyName']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.policies)[':policyName']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeletePoliciesPolicyNameMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPoliciesPolicyNameVersionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.policies)[':policyName']['version']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['policies', '/policies/:policyName/version', keyArgs] as const
}

export function getPoliciesPolicyNameVersionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.policies)[':policyName']['version']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPoliciesPolicyNameVersionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.policies[':policyName'].version.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePoliciesPolicyNameVersion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.policies)[':policyName']['version']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.policies)[':policyName']['version']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.policies)[':policyName']['version']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.policies)[':policyName']['version']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPoliciesPolicyNameVersionQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.policies)[':policyName']['version']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPoliciesPolicyNameVersionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPoliciesPolicyNameVersionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.policies[':policyName'].version.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostPoliciesPolicyNameVersionMutationKey() {
  return ['policies', '/policies/:policyName/version', 'POST'] as const
}

export function getPostPoliciesPolicyNameVersionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.policies)[':policyName']['version']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.policies)[':policyName']['version']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPoliciesPolicyNameVersionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.policies)[':policyName']['version']['$post']>,
    ) {
      return parseResponse(client.policies[':policyName'].version.$post(args, options))
    },
  })
}

export function usePostPoliciesPolicyNameVersion<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.policies)[':policyName']['version']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.policies)[':policyName']['version']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPoliciesPolicyNameVersionMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostProvisioningTemplatesTemplateNameProvisioningClaimMutationKey() {
  return [
    'provisioning-templates',
    '/provisioning-templates/:templateName/provisioning-claim',
    'POST',
  ] as const
}

export function getPostProvisioningTemplatesTemplateNameProvisioningClaimMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['provisioning-templates'][':templateName']['provisioning-claim']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostProvisioningTemplatesTemplateNameProvisioningClaimMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['provisioning-templates'][':templateName']['provisioning-claim']['$post']
      >,
    ) {
      return parseResponse(
        client['provisioning-templates'][':templateName']['provisioning-claim'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostProvisioningTemplatesTemplateNameProvisioningClaim<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['provisioning-templates'][':templateName']['provisioning-claim']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProvisioningTemplatesTemplateNameProvisioningClaimMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getProvisioningTemplatesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['provisioning-templates']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['provisioning-templates', '/provisioning-templates', keyArgs] as const
}

export function getProvisioningTemplatesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['provisioning-templates']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProvisioningTemplatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['provisioning-templates'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProvisioningTemplates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['provisioning-templates']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['provisioning-templates']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['provisioning-templates']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['provisioning-templates']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProvisioningTemplatesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['provisioning-templates']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProvisioningTemplatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProvisioningTemplatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['provisioning-templates'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostProvisioningTemplatesMutationKey() {
  return ['provisioning-templates', '/provisioning-templates', 'POST'] as const
}

export function getPostProvisioningTemplatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['provisioning-templates']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['provisioning-templates']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProvisioningTemplatesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['provisioning-templates']['$post']>) {
      return parseResponse(client['provisioning-templates'].$post(args, options))
    },
  })
}

export function usePostProvisioningTemplates<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['provisioning-templates']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['provisioning-templates']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProvisioningTemplatesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getProvisioningTemplatesTemplateNameVersionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['provisioning-templates'][':templateName']['versions']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'provisioning-templates',
    '/provisioning-templates/:templateName/versions',
    keyArgs,
  ] as const
}

export function getProvisioningTemplatesTemplateNameVersionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['provisioning-templates'][':templateName']['versions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProvisioningTemplatesTemplateNameVersionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['provisioning-templates'][':templateName'].versions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProvisioningTemplatesTemplateNameVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['provisioning-templates'][':templateName']['versions']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['provisioning-templates'][':templateName']['versions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          TError,
          TData,
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
          ReturnType<typeof getProvisioningTemplatesTemplateNameVersionsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
    TError,
    TData,
    ReturnType<typeof getProvisioningTemplatesTemplateNameVersionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProvisioningTemplatesTemplateNameVersionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['provisioning-templates'][':templateName'].versions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostProvisioningTemplatesTemplateNameVersionsMutationKey() {
  return [
    'provisioning-templates',
    '/provisioning-templates/:templateName/versions',
    'POST',
  ] as const
}

export function getPostProvisioningTemplatesTemplateNameVersionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['provisioning-templates'][':templateName']['versions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostProvisioningTemplatesTemplateNameVersionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['provisioning-templates'][':templateName']['versions']['$post']
      >,
    ) {
      return parseResponse(
        client['provisioning-templates'][':templateName'].versions.$post(args, options),
      )
    },
  })
}

export function usePostProvisioningTemplatesTemplateNameVersions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['provisioning-templates'][':templateName']['versions']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProvisioningTemplatesTemplateNameVersionsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getRoleAliasesRoleAliasQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['role-aliases'][':roleAlias']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['role-aliases', '/role-aliases/:roleAlias', keyArgs] as const
}

export function getRoleAliasesRoleAliasQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['role-aliases'][':roleAlias']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRoleAliasesRoleAliasQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['role-aliases'][':roleAlias'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRoleAliasesRoleAlias<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['role-aliases'][':roleAlias']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['role-aliases'][':roleAlias']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['role-aliases'][':roleAlias']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['role-aliases'][':roleAlias']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRoleAliasesRoleAliasQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['role-aliases'][':roleAlias']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRoleAliasesRoleAliasQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRoleAliasesRoleAliasQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['role-aliases'][':roleAlias'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutRoleAliasesRoleAliasMutationKey() {
  return ['role-aliases', '/role-aliases/:roleAlias', 'PUT'] as const
}

export function getPutRoleAliasesRoleAliasMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['role-aliases'][':roleAlias']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['role-aliases'][':roleAlias']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutRoleAliasesRoleAliasMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['role-aliases'][':roleAlias']['$put']>,
    ) {
      return parseResponse(client['role-aliases'][':roleAlias'].$put(args, options))
    },
  })
}

export function usePutRoleAliasesRoleAlias<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['role-aliases'][':roleAlias']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['role-aliases'][':roleAlias']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutRoleAliasesRoleAliasMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostRoleAliasesRoleAliasMutationKey() {
  return ['role-aliases', '/role-aliases/:roleAlias', 'POST'] as const
}

export function getPostRoleAliasesRoleAliasMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['role-aliases'][':roleAlias']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['role-aliases'][':roleAlias']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRoleAliasesRoleAliasMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['role-aliases'][':roleAlias']['$post']>,
    ) {
      return parseResponse(client['role-aliases'][':roleAlias'].$post(args, options))
    },
  })
}

export function usePostRoleAliasesRoleAlias<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['role-aliases'][':roleAlias']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['role-aliases'][':roleAlias']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRoleAliasesRoleAliasMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteRoleAliasesRoleAliasMutationKey() {
  return ['role-aliases', '/role-aliases/:roleAlias', 'DELETE'] as const
}

export function getDeleteRoleAliasesRoleAliasMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['role-aliases'][':roleAlias']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['role-aliases'][':roleAlias']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteRoleAliasesRoleAliasMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['role-aliases'][':roleAlias']['$delete']>,
    ) {
      return parseResponse(client['role-aliases'][':roleAlias'].$delete(args, options))
    },
  })
}

export function useDeleteRoleAliasesRoleAlias<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['role-aliases'][':roleAlias']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['role-aliases'][':roleAlias']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteRoleAliasesRoleAliasMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAuditScheduledauditsScheduledAuditNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.audit.scheduledaudits)[':scheduledAuditName']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['audit', '/audit/scheduledaudits/:scheduledAuditName', keyArgs] as const
}

export function getAuditScheduledauditsScheduledAuditNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.audit.scheduledaudits)[':scheduledAuditName']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAuditScheduledauditsScheduledAuditNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.audit.scheduledaudits[':scheduledAuditName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAuditScheduledauditsScheduledAuditName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.audit.scheduledaudits)[':scheduledAuditName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.audit.scheduledaudits)[':scheduledAuditName']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.audit.scheduledaudits)[':scheduledAuditName']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.audit.scheduledaudits)[':scheduledAuditName']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAuditScheduledauditsScheduledAuditNameQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.audit.scheduledaudits)[':scheduledAuditName']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAuditScheduledauditsScheduledAuditNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAuditScheduledauditsScheduledAuditNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.audit.scheduledaudits[':scheduledAuditName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAuditScheduledauditsScheduledAuditNameMutationKey() {
  return ['audit', '/audit/scheduledaudits/:scheduledAuditName', 'POST'] as const
}

export function getPostAuditScheduledauditsScheduledAuditNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.audit.scheduledaudits)[':scheduledAuditName']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.audit.scheduledaudits)[':scheduledAuditName']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAuditScheduledauditsScheduledAuditNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.audit.scheduledaudits)[':scheduledAuditName']['$post']>,
    ) {
      return parseResponse(client.audit.scheduledaudits[':scheduledAuditName'].$post(args, options))
    },
  })
}

export function usePostAuditScheduledauditsScheduledAuditName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.audit.scheduledaudits)[':scheduledAuditName']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.audit.scheduledaudits)[':scheduledAuditName']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAuditScheduledauditsScheduledAuditNameMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteAuditScheduledauditsScheduledAuditNameMutationKey() {
  return ['audit', '/audit/scheduledaudits/:scheduledAuditName', 'DELETE'] as const
}

export function getDeleteAuditScheduledauditsScheduledAuditNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.audit.scheduledaudits)[':scheduledAuditName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAuditScheduledauditsScheduledAuditNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.audit.scheduledaudits)[':scheduledAuditName']['$delete']
      >,
    ) {
      return parseResponse(
        client.audit.scheduledaudits[':scheduledAuditName'].$delete(args, options),
      )
    },
  })
}

export function useDeleteAuditScheduledauditsScheduledAuditName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.audit.scheduledaudits)[':scheduledAuditName']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.audit.scheduledaudits)[':scheduledAuditName']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAuditScheduledauditsScheduledAuditNameMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchAuditScheduledauditsScheduledAuditNameMutationKey() {
  return ['audit', '/audit/scheduledaudits/:scheduledAuditName', 'PATCH'] as const
}

export function getPatchAuditScheduledauditsScheduledAuditNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.audit.scheduledaudits)[':scheduledAuditName']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchAuditScheduledauditsScheduledAuditNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.audit.scheduledaudits)[':scheduledAuditName']['$patch']
      >,
    ) {
      return parseResponse(
        client.audit.scheduledaudits[':scheduledAuditName'].$patch(args, options),
      )
    },
  })
}

export function usePatchAuditScheduledauditsScheduledAuditName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<(typeof client.audit.scheduledaudits)[':scheduledAuditName']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchAuditScheduledauditsScheduledAuditNameMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSecurityProfilesSecurityProfileNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['security-profiles'][':securityProfileName']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['security-profiles', '/security-profiles/:securityProfileName', keyArgs] as const
}

export function getSecurityProfilesSecurityProfileNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['security-profiles'][':securityProfileName']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSecurityProfilesSecurityProfileNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['security-profiles'][':securityProfileName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSecurityProfilesSecurityProfileName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['security-profiles'][':securityProfileName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['security-profiles'][':securityProfileName']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['security-profiles'][':securityProfileName']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['security-profiles'][':securityProfileName']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getSecurityProfilesSecurityProfileNameQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['security-profiles'][':securityProfileName']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSecurityProfilesSecurityProfileNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSecurityProfilesSecurityProfileNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['security-profiles'][':securityProfileName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSecurityProfilesSecurityProfileNameMutationKey() {
  return ['security-profiles', '/security-profiles/:securityProfileName', 'POST'] as const
}

export function getPostSecurityProfilesSecurityProfileNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['security-profiles'][':securityProfileName']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['security-profiles'][':securityProfileName']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSecurityProfilesSecurityProfileNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['security-profiles'][':securityProfileName']['$post']>,
    ) {
      return parseResponse(client['security-profiles'][':securityProfileName'].$post(args, options))
    },
  })
}

export function usePostSecurityProfilesSecurityProfileName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['security-profiles'][':securityProfileName']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['security-profiles'][':securityProfileName']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSecurityProfilesSecurityProfileNameMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteSecurityProfilesSecurityProfileNameMutationKey() {
  return ['security-profiles', '/security-profiles/:securityProfileName', 'DELETE'] as const
}

export function getDeleteSecurityProfilesSecurityProfileNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['security-profiles'][':securityProfileName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSecurityProfilesSecurityProfileNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['security-profiles'][':securityProfileName']['$delete']
      >,
    ) {
      return parseResponse(
        client['security-profiles'][':securityProfileName'].$delete(args, options),
      )
    },
  })
}

export function useDeleteSecurityProfilesSecurityProfileName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['security-profiles'][':securityProfileName']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['security-profiles'][':securityProfileName']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSecurityProfilesSecurityProfileNameMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchSecurityProfilesSecurityProfileNameMutationKey() {
  return ['security-profiles', '/security-profiles/:securityProfileName', 'PATCH'] as const
}

export function getPatchSecurityProfilesSecurityProfileNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['security-profiles'][':securityProfileName']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchSecurityProfilesSecurityProfileNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['security-profiles'][':securityProfileName']['$patch']
      >,
    ) {
      return parseResponse(
        client['security-profiles'][':securityProfileName'].$patch(args, options),
      )
    },
  })
}

export function usePatchSecurityProfilesSecurityProfileName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<(typeof client)['security-profiles'][':securityProfileName']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchSecurityProfilesSecurityProfileNameMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getStreamsStreamIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.streams)[':streamId']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['streams', '/streams/:streamId', keyArgs] as const
}

export function getStreamsStreamIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.streams)[':streamId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStreamsStreamIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.streams[':streamId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStreamsStreamId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.streams)[':streamId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.streams)[':streamId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.streams)[':streamId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.streams)[':streamId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getStreamsStreamIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.streams)[':streamId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStreamsStreamIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStreamsStreamIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.streams[':streamId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutStreamsStreamIdMutationKey() {
  return ['streams', '/streams/:streamId', 'PUT'] as const
}

export function getPutStreamsStreamIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.streams)[':streamId']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.streams)[':streamId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutStreamsStreamIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.streams)[':streamId']['$put']>) {
      return parseResponse(client.streams[':streamId'].$put(args, options))
    },
  })
}

export function usePutStreamsStreamId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.streams)[':streamId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.streams)[':streamId']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutStreamsStreamIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostStreamsStreamIdMutationKey() {
  return ['streams', '/streams/:streamId', 'POST'] as const
}

export function getPostStreamsStreamIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.streams)[':streamId']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.streams)[':streamId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostStreamsStreamIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.streams)[':streamId']['$post']>) {
      return parseResponse(client.streams[':streamId'].$post(args, options))
    },
  })
}

export function usePostStreamsStreamId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.streams)[':streamId']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.streams)[':streamId']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostStreamsStreamIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteStreamsStreamIdMutationKey() {
  return ['streams', '/streams/:streamId', 'DELETE'] as const
}

export function getDeleteStreamsStreamIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.streams)[':streamId']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.streams)[':streamId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteStreamsStreamIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.streams)[':streamId']['$delete']>) {
      return parseResponse(client.streams[':streamId'].$delete(args, options))
    },
  })
}

export function useDeleteStreamsStreamId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.streams)[':streamId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.streams)[':streamId']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteStreamsStreamIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getThingsThingNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.things)[':thingName']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['things', '/things/:thingName', keyArgs] as const
}

export function getThingsThingNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.things)[':thingName']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getThingsThingNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.things[':thingName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useThingsThingName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.things)[':thingName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.things)[':thingName']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.things)[':thingName']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.things)[':thingName']['$get']>>
              >
            >
          >,
          ReturnType<typeof getThingsThingNameQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.things)[':thingName']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getThingsThingNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getThingsThingNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.things[':thingName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostThingsThingNameMutationKey() {
  return ['things', '/things/:thingName', 'POST'] as const
}

export function getPostThingsThingNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.things)[':thingName']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.things)[':thingName']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostThingsThingNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.things)[':thingName']['$post']>) {
      return parseResponse(client.things[':thingName'].$post(args, options))
    },
  })
}

export function usePostThingsThingName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.things)[':thingName']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.things)[':thingName']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostThingsThingNameMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteThingsThingNameMutationKey() {
  return ['things', '/things/:thingName', 'DELETE'] as const
}

export function getDeleteThingsThingNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.things)[':thingName']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.things)[':thingName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteThingsThingNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.things)[':thingName']['$delete']>) {
      return parseResponse(client.things[':thingName'].$delete(args, options))
    },
  })
}

export function useDeleteThingsThingName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.things)[':thingName']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.things)[':thingName']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteThingsThingNameMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchThingsThingNameMutationKey() {
  return ['things', '/things/:thingName', 'PATCH'] as const
}

export function getPatchThingsThingNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.things)[':thingName']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.things)[':thingName']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchThingsThingNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.things)[':thingName']['$patch']>) {
      return parseResponse(client.things[':thingName'].$patch(args, options))
    },
  })
}

export function usePatchThingsThingName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.things)[':thingName']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.things)[':thingName']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchThingsThingNameMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getThingGroupsThingGroupNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['thing-groups'][':thingGroupName']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['thing-groups', '/thing-groups/:thingGroupName', keyArgs] as const
}

export function getThingGroupsThingGroupNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['thing-groups'][':thingGroupName']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getThingGroupsThingGroupNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['thing-groups'][':thingGroupName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useThingGroupsThingGroupName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['thing-groups'][':thingGroupName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['thing-groups'][':thingGroupName']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['thing-groups'][':thingGroupName']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['thing-groups'][':thingGroupName']['$get']>>
              >
            >
          >,
          ReturnType<typeof getThingGroupsThingGroupNameQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['thing-groups'][':thingGroupName']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getThingGroupsThingGroupNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getThingGroupsThingGroupNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['thing-groups'][':thingGroupName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostThingGroupsThingGroupNameMutationKey() {
  return ['thing-groups', '/thing-groups/:thingGroupName', 'POST'] as const
}

export function getPostThingGroupsThingGroupNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['thing-groups'][':thingGroupName']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['thing-groups'][':thingGroupName']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostThingGroupsThingGroupNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['thing-groups'][':thingGroupName']['$post']>,
    ) {
      return parseResponse(client['thing-groups'][':thingGroupName'].$post(args, options))
    },
  })
}

export function usePostThingGroupsThingGroupName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['thing-groups'][':thingGroupName']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['thing-groups'][':thingGroupName']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostThingGroupsThingGroupNameMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteThingGroupsThingGroupNameMutationKey() {
  return ['thing-groups', '/thing-groups/:thingGroupName', 'DELETE'] as const
}

export function getDeleteThingGroupsThingGroupNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['thing-groups'][':thingGroupName']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['thing-groups'][':thingGroupName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteThingGroupsThingGroupNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['thing-groups'][':thingGroupName']['$delete']>,
    ) {
      return parseResponse(client['thing-groups'][':thingGroupName'].$delete(args, options))
    },
  })
}

export function useDeleteThingGroupsThingGroupName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['thing-groups'][':thingGroupName']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['thing-groups'][':thingGroupName']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteThingGroupsThingGroupNameMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchThingGroupsThingGroupNameMutationKey() {
  return ['thing-groups', '/thing-groups/:thingGroupName', 'PATCH'] as const
}

export function getPatchThingGroupsThingGroupNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['thing-groups'][':thingGroupName']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['thing-groups'][':thingGroupName']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchThingGroupsThingGroupNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['thing-groups'][':thingGroupName']['$patch']>,
    ) {
      return parseResponse(client['thing-groups'][':thingGroupName'].$patch(args, options))
    },
  })
}

export function usePatchThingGroupsThingGroupName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['thing-groups'][':thingGroupName']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['thing-groups'][':thingGroupName']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchThingGroupsThingGroupNameMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getThingTypesThingTypeNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['thing-types'][':thingTypeName']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['thing-types', '/thing-types/:thingTypeName', keyArgs] as const
}

export function getThingTypesThingTypeNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['thing-types'][':thingTypeName']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getThingTypesThingTypeNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['thing-types'][':thingTypeName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useThingTypesThingTypeName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['thing-types'][':thingTypeName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['thing-types'][':thingTypeName']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['thing-types'][':thingTypeName']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['thing-types'][':thingTypeName']['$get']>>
              >
            >
          >,
          ReturnType<typeof getThingTypesThingTypeNameQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['thing-types'][':thingTypeName']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getThingTypesThingTypeNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getThingTypesThingTypeNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['thing-types'][':thingTypeName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostThingTypesThingTypeNameMutationKey() {
  return ['thing-types', '/thing-types/:thingTypeName', 'POST'] as const
}

export function getPostThingTypesThingTypeNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['thing-types'][':thingTypeName']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['thing-types'][':thingTypeName']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostThingTypesThingTypeNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['thing-types'][':thingTypeName']['$post']>,
    ) {
      return parseResponse(client['thing-types'][':thingTypeName'].$post(args, options))
    },
  })
}

export function usePostThingTypesThingTypeName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['thing-types'][':thingTypeName']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['thing-types'][':thingTypeName']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostThingTypesThingTypeNameMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteThingTypesThingTypeNameMutationKey() {
  return ['thing-types', '/thing-types/:thingTypeName', 'DELETE'] as const
}

export function getDeleteThingTypesThingTypeNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['thing-types'][':thingTypeName']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['thing-types'][':thingTypeName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteThingTypesThingTypeNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['thing-types'][':thingTypeName']['$delete']>,
    ) {
      return parseResponse(client['thing-types'][':thingTypeName'].$delete(args, options))
    },
  })
}

export function useDeleteThingTypesThingTypeName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['thing-types'][':thingTypeName']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['thing-types'][':thingTypeName']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteThingTypesThingTypeNameMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getRulesRuleNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.rules)[':ruleName']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['rules', '/rules/:ruleName', keyArgs] as const
}

export function getRulesRuleNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.rules)[':ruleName']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRulesRuleNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.rules[':ruleName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRulesRuleName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.rules)[':ruleName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.rules)[':ruleName']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.rules)[':ruleName']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.rules)[':ruleName']['$get']>>>
            >
          >,
          ReturnType<typeof getRulesRuleNameQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.rules)[':ruleName']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRulesRuleNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRulesRuleNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.rules[':ruleName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostRulesRuleNameMutationKey() {
  return ['rules', '/rules/:ruleName', 'POST'] as const
}

export function getPostRulesRuleNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.rules)[':ruleName']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.rules)[':ruleName']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRulesRuleNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.rules)[':ruleName']['$post']>) {
      return parseResponse(client.rules[':ruleName'].$post(args, options))
    },
  })
}

export function usePostRulesRuleName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.rules)[':ruleName']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.rules)[':ruleName']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRulesRuleNameMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteRulesRuleNameMutationKey() {
  return ['rules', '/rules/:ruleName', 'DELETE'] as const
}

export function getDeleteRulesRuleNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.rules)[':ruleName']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.rules)[':ruleName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteRulesRuleNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.rules)[':ruleName']['$delete']>) {
      return parseResponse(client.rules[':ruleName'].$delete(args, options))
    },
  })
}

export function useDeleteRulesRuleName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.rules)[':ruleName']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.rules)[':ruleName']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteRulesRuleNameMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchRulesRuleNameMutationKey() {
  return ['rules', '/rules/:ruleName', 'PATCH'] as const
}

export function getPatchRulesRuleNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.rules)[':ruleName']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.rules)[':ruleName']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchRulesRuleNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.rules)[':ruleName']['$patch']>) {
      return parseResponse(client.rules[':ruleName'].$patch(args, options))
    },
  })
}

export function usePatchRulesRuleName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.rules)[':ruleName']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.rules)[':ruleName']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchRulesRuleNameMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDestinationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.destinations.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['destinations', '/destinations', keyArgs] as const
}

export function getDestinationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.destinations.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDestinationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.destinations.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useDestinations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.destinations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.destinations.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.destinations.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.destinations.$get>>>>
          >,
          ReturnType<typeof getDestinationsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.destinations.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDestinationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDestinationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.destinations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDestinationsMutationKey() {
  return ['destinations', '/destinations', 'POST'] as const
}

export function getPostDestinationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.destinations.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.destinations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDestinationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.destinations.$post>) {
      return parseResponse(client.destinations.$post(args, options))
    },
  })
}

export function usePostDestinations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.destinations.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.destinations.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDestinationsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchDestinationsMutationKey() {
  return ['destinations', '/destinations', 'PATCH'] as const
}

export function getPatchDestinationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.destinations.$patch>>>>
    >,
    TError,
    InferRequestType<typeof client.destinations.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchDestinationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.destinations.$patch>) {
      return parseResponse(client.destinations.$patch(args, options))
    },
  })
}

export function usePatchDestinations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.destinations.$patch>>>>
          >,
          TError,
          InferRequestType<typeof client.destinations.$patch>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchDestinationsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAuditConfigurationQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.audit.configuration.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['audit', '/audit/configuration', keyArgs] as const
}

export function getAuditConfigurationQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.audit.configuration.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAuditConfigurationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.audit.configuration.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAuditConfiguration<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audit.configuration.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.audit.configuration.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.audit.configuration.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.audit.configuration.$get>>>
            >
          >,
          ReturnType<typeof getAuditConfigurationQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audit.configuration.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAuditConfigurationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAuditConfigurationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.audit.configuration.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteAuditConfigurationMutationKey() {
  return ['audit', '/audit/configuration', 'DELETE'] as const
}

export function getDeleteAuditConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.audit.configuration.$delete>>>
      >
    >,
    TError,
    InferRequestType<typeof client.audit.configuration.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAuditConfigurationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.audit.configuration.$delete>) {
      return parseResponse(client.audit.configuration.$delete(args, options))
    },
  })
}

export function useDeleteAuditConfiguration<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.audit.configuration.$delete>>>
            >
          >,
          TError,
          InferRequestType<typeof client.audit.configuration.$delete>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAuditConfigurationMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchAuditConfigurationMutationKey() {
  return ['audit', '/audit/configuration', 'PATCH'] as const
}

export function getPatchAuditConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.audit.configuration.$patch>>>
      >
    >,
    TError,
    InferRequestType<typeof client.audit.configuration.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchAuditConfigurationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.audit.configuration.$patch>) {
      return parseResponse(client.audit.configuration.$patch(args, options))
    },
  })
}

export function usePatchAuditConfiguration<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.audit.configuration.$patch>>>
            >
          >,
          TError,
          InferRequestType<typeof client.audit.configuration.$patch>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchAuditConfigurationMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAuditSuppressionsDeleteMutationKey() {
  return ['audit', '/audit/suppressions/delete', 'POST'] as const
}

export function getPostAuditSuppressionsDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.audit.suppressions.delete.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.audit.suppressions.delete.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAuditSuppressionsDeleteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.audit.suppressions.delete.$post>) {
      return parseResponse(client.audit.suppressions.delete.$post(args, options))
    },
  })
}

export function usePostAuditSuppressionsDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.audit.suppressions.delete.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.audit.suppressions.delete.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAuditSuppressionsDeleteMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCacertificateCaCertificateIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.cacertificate)[':caCertificateId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['cacertificate', '/cacertificate/:caCertificateId', keyArgs] as const
}

export function getCacertificateCaCertificateIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.cacertificate)[':caCertificateId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCacertificateCaCertificateIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cacertificate[':caCertificateId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCacertificateCaCertificateId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cacertificate)[':caCertificateId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.cacertificate)[':caCertificateId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cacertificate)[':caCertificateId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cacertificate)[':caCertificateId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCacertificateCaCertificateIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cacertificate)[':caCertificateId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCacertificateCaCertificateIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCacertificateCaCertificateIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.cacertificate[':caCertificateId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutCacertificateCaCertificateIdMutationKey() {
  return ['cacertificate', '/cacertificate/:caCertificateId', 'PUT'] as const
}

export function getPutCacertificateCaCertificateIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cacertificate)[':caCertificateId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.cacertificate)[':caCertificateId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutCacertificateCaCertificateIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.cacertificate)[':caCertificateId']['$put']>,
    ) {
      return parseResponse(client.cacertificate[':caCertificateId'].$put(args, options))
    },
  })
}

export function usePutCacertificateCaCertificateId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cacertificate)[':caCertificateId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.cacertificate)[':caCertificateId']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutCacertificateCaCertificateIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteCacertificateCaCertificateIdMutationKey() {
  return ['cacertificate', '/cacertificate/:caCertificateId', 'DELETE'] as const
}

export function getDeleteCacertificateCaCertificateIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cacertificate)[':caCertificateId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.cacertificate)[':caCertificateId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCacertificateCaCertificateIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.cacertificate)[':caCertificateId']['$delete']>,
    ) {
      return parseResponse(client.cacertificate[':caCertificateId'].$delete(args, options))
    },
  })
}

export function useDeleteCacertificateCaCertificateId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cacertificate)[':caCertificateId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.cacertificate)[':caCertificateId']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteCacertificateCaCertificateIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCertificatesCertificateIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.certificates)[':certificateId']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['certificates', '/certificates/:certificateId', keyArgs] as const
}

export function getCertificatesCertificateIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.certificates)[':certificateId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCertificatesCertificateIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.certificates[':certificateId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCertificatesCertificateId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.certificates)[':certificateId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.certificates)[':certificateId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.certificates)[':certificateId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.certificates)[':certificateId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCertificatesCertificateIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.certificates)[':certificateId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCertificatesCertificateIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCertificatesCertificateIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.certificates[':certificateId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteCertificatesCertificateIdMutationKey() {
  return ['certificates', '/certificates/:certificateId', 'DELETE'] as const
}

export function getDeleteCertificatesCertificateIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.certificates)[':certificateId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.certificates)[':certificateId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCertificatesCertificateIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.certificates)[':certificateId']['$delete']>,
    ) {
      return parseResponse(client.certificates[':certificateId'].$delete(args, options))
    },
  })
}

export function useDeleteCertificatesCertificateId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.certificates)[':certificateId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.certificates)[':certificateId']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteCertificatesCertificateIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteThingsThingNameJobsJobIdExecutionNumberExecutionNumberMutationKey() {
  return [
    'things',
    '/things/:thingName/jobs/:jobId/executionNumber/:executionNumber',
    'DELETE',
  ] as const
}

export function getDeleteThingsThingNameJobsJobIdExecutionNumberExecutionNumberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.things)[':thingName']['jobs'][':jobId']['executionNumber'][':executionNumber']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteThingsThingNameJobsJobIdExecutionNumberExecutionNumberMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.things)[':thingName']['jobs'][':jobId']['executionNumber'][':executionNumber']['$delete']
      >,
    ) {
      return parseResponse(
        client.things[':thingName'].jobs[':jobId'].executionNumber[':executionNumber'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteThingsThingNameJobsJobIdExecutionNumberExecutionNumber<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client.things)[':thingName']['jobs'][':jobId']['executionNumber'][':executionNumber']['$delete']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getDeleteThingsThingNameJobsJobIdExecutionNumberExecutionNumberMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPoliciesPolicyNameVersionPolicyVersionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.policies)[':policyName']['version'][':policyVersionId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['policies', '/policies/:policyName/version/:policyVersionId', keyArgs] as const
}

export function getPoliciesPolicyNameVersionPolicyVersionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.policies)[':policyName']['version'][':policyVersionId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPoliciesPolicyNameVersionPolicyVersionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.policies[':policyName'].version[':policyVersionId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePoliciesPolicyNameVersionPolicyVersionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.policies)[':policyName']['version'][':policyVersionId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.policies)[':policyName']['version'][':policyVersionId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          TError,
          TData,
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
          ReturnType<typeof getPoliciesPolicyNameVersionPolicyVersionIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
    TError,
    TData,
    ReturnType<typeof getPoliciesPolicyNameVersionPolicyVersionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPoliciesPolicyNameVersionPolicyVersionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.policies[':policyName'].version[':policyVersionId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeletePoliciesPolicyNameVersionPolicyVersionIdMutationKey() {
  return ['policies', '/policies/:policyName/version/:policyVersionId', 'DELETE'] as const
}

export function getDeletePoliciesPolicyNameVersionPolicyVersionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.policies)[':policyName']['version'][':policyVersionId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeletePoliciesPolicyNameVersionPolicyVersionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.policies)[':policyName']['version'][':policyVersionId']['$delete']
      >,
    ) {
      return parseResponse(
        client.policies[':policyName'].version[':policyVersionId'].$delete(args, options),
      )
    },
  })
}

export function useDeletePoliciesPolicyNameVersionPolicyVersionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client.policies)[':policyName']['version'][':policyVersionId']['$delete']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeletePoliciesPolicyNameVersionPolicyVersionIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchPoliciesPolicyNameVersionPolicyVersionIdMutationKey() {
  return ['policies', '/policies/:policyName/version/:policyVersionId', 'PATCH'] as const
}

export function getPatchPoliciesPolicyNameVersionPolicyVersionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.policies)[':policyName']['version'][':policyVersionId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchPoliciesPolicyNameVersionPolicyVersionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.policies)[':policyName']['version'][':policyVersionId']['$patch']
      >,
    ) {
      return parseResponse(
        client.policies[':policyName'].version[':policyVersionId'].$patch(args, options),
      )
    },
  })
}

export function usePatchPoliciesPolicyNameVersionPolicyVersionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client.policies)[':policyName']['version'][':policyVersionId']['$patch']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchPoliciesPolicyNameVersionPolicyVersionIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getProvisioningTemplatesTemplateNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['provisioning-templates'][':templateName']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['provisioning-templates', '/provisioning-templates/:templateName', keyArgs] as const
}

export function getProvisioningTemplatesTemplateNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['provisioning-templates'][':templateName']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProvisioningTemplatesTemplateNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['provisioning-templates'][':templateName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProvisioningTemplatesTemplateName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['provisioning-templates'][':templateName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['provisioning-templates'][':templateName']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['provisioning-templates'][':templateName']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['provisioning-templates'][':templateName']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getProvisioningTemplatesTemplateNameQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['provisioning-templates'][':templateName']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProvisioningTemplatesTemplateNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProvisioningTemplatesTemplateNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['provisioning-templates'][':templateName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteProvisioningTemplatesTemplateNameMutationKey() {
  return ['provisioning-templates', '/provisioning-templates/:templateName', 'DELETE'] as const
}

export function getDeleteProvisioningTemplatesTemplateNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['provisioning-templates'][':templateName']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['provisioning-templates'][':templateName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteProvisioningTemplatesTemplateNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['provisioning-templates'][':templateName']['$delete']>,
    ) {
      return parseResponse(client['provisioning-templates'][':templateName'].$delete(args, options))
    },
  })
}

export function useDeleteProvisioningTemplatesTemplateName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['provisioning-templates'][':templateName']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['provisioning-templates'][':templateName']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteProvisioningTemplatesTemplateNameMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchProvisioningTemplatesTemplateNameMutationKey() {
  return ['provisioning-templates', '/provisioning-templates/:templateName', 'PATCH'] as const
}

export function getPatchProvisioningTemplatesTemplateNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['provisioning-templates'][':templateName']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['provisioning-templates'][':templateName']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchProvisioningTemplatesTemplateNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['provisioning-templates'][':templateName']['$patch']>,
    ) {
      return parseResponse(client['provisioning-templates'][':templateName'].$patch(args, options))
    },
  })
}

export function usePatchProvisioningTemplatesTemplateName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['provisioning-templates'][':templateName']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['provisioning-templates'][':templateName']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchProvisioningTemplatesTemplateNameMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getProvisioningTemplatesTemplateNameVersionsVersionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['provisioning-templates'][':templateName']['versions'][':versionId']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'provisioning-templates',
    '/provisioning-templates/:templateName/versions/:versionId',
    keyArgs,
  ] as const
}

export function getProvisioningTemplatesTemplateNameVersionsVersionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['provisioning-templates'][':templateName']['versions'][':versionId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProvisioningTemplatesTemplateNameVersionsVersionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['provisioning-templates'][':templateName'].versions[':versionId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useProvisioningTemplatesTemplateNameVersionsVersionId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['provisioning-templates'][':templateName']['versions'][':versionId']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          TError,
          TData,
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
          ReturnType<typeof getProvisioningTemplatesTemplateNameVersionsVersionIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
    TError,
    TData,
    ReturnType<typeof getProvisioningTemplatesTemplateNameVersionsVersionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProvisioningTemplatesTemplateNameVersionsVersionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['provisioning-templates'][':templateName'].versions[':versionId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteProvisioningTemplatesTemplateNameVersionsVersionIdMutationKey() {
  return [
    'provisioning-templates',
    '/provisioning-templates/:templateName/versions/:versionId',
    'DELETE',
  ] as const
}

export function getDeleteProvisioningTemplatesTemplateNameVersionsVersionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['provisioning-templates'][':templateName']['versions'][':versionId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteProvisioningTemplatesTemplateNameVersionsVersionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['provisioning-templates'][':templateName']['versions'][':versionId']['$delete']
      >,
    ) {
      return parseResponse(
        client['provisioning-templates'][':templateName'].versions[':versionId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteProvisioningTemplatesTemplateNameVersionsVersionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['provisioning-templates'][':templateName']['versions'][':versionId']['$delete']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getDeleteProvisioningTemplatesTemplateNameVersionsVersionIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getRegistrationcodeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.registrationcode.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['registrationcode', '/registrationcode', keyArgs] as const
}

export function getRegistrationcodeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.registrationcode.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRegistrationcodeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.registrationcode.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRegistrationcode<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.registrationcode.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.registrationcode.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.registrationcode.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.registrationcode.$get>>>
            >
          >,
          ReturnType<typeof getRegistrationcodeQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.registrationcode.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRegistrationcodeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRegistrationcodeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.registrationcode.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteRegistrationcodeMutationKey() {
  return ['registrationcode', '/registrationcode', 'DELETE'] as const
}

export function getDeleteRegistrationcodeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.registrationcode.$delete>>>>
    >,
    TError,
    InferRequestType<typeof client.registrationcode.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteRegistrationcodeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.registrationcode.$delete>) {
      return parseResponse(client.registrationcode.$delete(args, options))
    },
  })
}

export function useDeleteRegistrationcode<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.registrationcode.$delete>>>
            >
          >,
          TError,
          InferRequestType<typeof client.registrationcode.$delete>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteRegistrationcodeMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDestinationsArnQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.destinations)[':arn']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['destinations', '/destinations/:arn', keyArgs] as const
}

export function getDestinationsArnQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.destinations)[':arn']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDestinationsArnQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.destinations[':arn'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDestinationsArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.destinations)[':arn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.destinations)[':arn']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.destinations)[':arn']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.destinations)[':arn']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDestinationsArnQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.destinations)[':arn']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDestinationsArnQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDestinationsArnQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.destinations[':arn'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteDestinationsArnMutationKey() {
  return ['destinations', '/destinations/:arn', 'DELETE'] as const
}

export function getDeleteDestinationsArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.destinations)[':arn']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.destinations)[':arn']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDestinationsArnMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.destinations)[':arn']['$delete']>) {
      return parseResponse(client.destinations[':arn'].$delete(args, options))
    },
  })
}

export function useDeleteDestinationsArn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.destinations)[':arn']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.destinations)[':arn']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteDestinationsArnMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteV2LoggingLevelTargetTypeTargetNameMutationKey() {
  return [
    'v2LoggingLevel#targetType&targetName',
    '/v2LoggingLevel#targetType&targetName',
    'DELETE',
  ] as const
}

export function getDeleteV2LoggingLevelTargetTypeTargetNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['v2LoggingLevel#targetType&targetName']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['v2LoggingLevel#targetType&targetName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2LoggingLevelTargetTypeTargetNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['v2LoggingLevel#targetType&targetName']['$delete']>,
    ) {
      return parseResponse(client['v2LoggingLevel#targetType&targetName'].$delete(args, options))
    },
  })
}

export function useDeleteV2LoggingLevelTargetTypeTargetName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['v2LoggingLevel#targetType&targetName']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['v2LoggingLevel#targetType&targetName']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV2LoggingLevelTargetTypeTargetNameMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostThingTypesThingTypeNameDeprecateMutationKey() {
  return ['thing-types', '/thing-types/:thingTypeName/deprecate', 'POST'] as const
}

export function getPostThingTypesThingTypeNameDeprecateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['thing-types'][':thingTypeName']['deprecate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostThingTypesThingTypeNameDeprecateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['thing-types'][':thingTypeName']['deprecate']['$post']
      >,
    ) {
      return parseResponse(client['thing-types'][':thingTypeName'].deprecate.$post(args, options))
    },
  })
}

export function usePostThingTypesThingTypeNameDeprecate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<(typeof client)['thing-types'][':thingTypeName']['deprecate']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostThingTypesThingTypeNameDeprecateMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAuditFindingsFindingIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.audit.findings)[':findingId']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['audit', '/audit/findings/:findingId', keyArgs] as const
}

export function getAuditFindingsFindingIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.audit.findings)[':findingId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAuditFindingsFindingIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.audit.findings[':findingId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAuditFindingsFindingId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.audit.findings)[':findingId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.audit.findings)[':findingId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.audit.findings)[':findingId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.audit.findings)[':findingId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAuditFindingsFindingIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.audit.findings)[':findingId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAuditFindingsFindingIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAuditFindingsFindingIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.audit.findings[':findingId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAuditMitigationactionsTasksTaskIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.audit.mitigationactions.tasks)[':taskId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['audit', '/audit/mitigationactions/tasks/:taskId', keyArgs] as const
}

export function getAuditMitigationactionsTasksTaskIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.audit.mitigationactions.tasks)[':taskId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAuditMitigationactionsTasksTaskIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.audit.mitigationactions.tasks[':taskId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAuditMitigationactionsTasksTaskId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.audit.mitigationactions.tasks)[':taskId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.audit.mitigationactions.tasks)[':taskId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.audit.mitigationactions.tasks)[':taskId']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.audit.mitigationactions.tasks)[':taskId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAuditMitigationactionsTasksTaskIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.audit.mitigationactions.tasks)[':taskId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAuditMitigationactionsTasksTaskIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAuditMitigationactionsTasksTaskIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.audit.mitigationactions.tasks[':taskId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAuditMitigationactionsTasksTaskIdMutationKey() {
  return ['audit', '/audit/mitigationactions/tasks/:taskId', 'POST'] as const
}

export function getPostAuditMitigationactionsTasksTaskIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.audit.mitigationactions.tasks)[':taskId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.audit.mitigationactions.tasks)[':taskId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAuditMitigationactionsTasksTaskIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.audit.mitigationactions.tasks)[':taskId']['$post']>,
    ) {
      return parseResponse(client.audit.mitigationactions.tasks[':taskId'].$post(args, options))
    },
  })
}

export function usePostAuditMitigationactionsTasksTaskId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.audit.mitigationactions.tasks)[':taskId']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.audit.mitigationactions.tasks)[':taskId']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAuditMitigationactionsTasksTaskIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAuditSuppressionsDescribeMutationKey() {
  return ['audit', '/audit/suppressions/describe', 'POST'] as const
}

export function getPostAuditSuppressionsDescribeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.audit.suppressions.describe.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.audit.suppressions.describe.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAuditSuppressionsDescribeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.audit.suppressions.describe.$post>) {
      return parseResponse(client.audit.suppressions.describe.$post(args, options))
    },
  })
}

export function usePostAuditSuppressionsDescribe<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.audit.suppressions.describe.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.audit.suppressions.describe.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAuditSuppressionsDescribeMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAuditTasksTaskIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.audit.tasks)[':taskId']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['audit', '/audit/tasks/:taskId', keyArgs] as const
}

export function getAuditTasksTaskIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.audit.tasks)[':taskId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAuditTasksTaskIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.audit.tasks[':taskId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAuditTasksTaskId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.audit.tasks)[':taskId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.audit.tasks)[':taskId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.audit.tasks)[':taskId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.audit.tasks)[':taskId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAuditTasksTaskIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.audit.tasks)[':taskId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAuditTasksTaskIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAuditTasksTaskIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.audit.tasks[':taskId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDetectMitigationactionsTasksTaskIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.detect.mitigationactions.tasks)[':taskId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['detect', '/detect/mitigationactions/tasks/:taskId', keyArgs] as const
}

export function getDetectMitigationactionsTasksTaskIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.detect.mitigationactions.tasks)[':taskId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDetectMitigationactionsTasksTaskIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.detect.mitigationactions.tasks[':taskId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDetectMitigationactionsTasksTaskId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.detect.mitigationactions.tasks)[':taskId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.detect.mitigationactions.tasks)[':taskId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.detect.mitigationactions.tasks)[':taskId']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.detect.mitigationactions.tasks)[':taskId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getDetectMitigationactionsTasksTaskIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.detect.mitigationactions.tasks)[':taskId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDetectMitigationactionsTasksTaskIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDetectMitigationactionsTasksTaskIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.detect.mitigationactions.tasks[':taskId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutDetectMitigationactionsTasksTaskIdMutationKey() {
  return ['detect', '/detect/mitigationactions/tasks/:taskId', 'PUT'] as const
}

export function getPutDetectMitigationactionsTasksTaskIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.detect.mitigationactions.tasks)[':taskId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.detect.mitigationactions.tasks)[':taskId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDetectMitigationactionsTasksTaskIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.detect.mitigationactions.tasks)[':taskId']['$put']>,
    ) {
      return parseResponse(client.detect.mitigationactions.tasks[':taskId'].$put(args, options))
    },
  })
}

export function usePutDetectMitigationactionsTasksTaskId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.detect.mitigationactions.tasks)[':taskId']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.detect.mitigationactions.tasks)[':taskId']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutDetectMitigationactionsTasksTaskIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getEndpointQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.endpoint.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['endpoint', '/endpoint', keyArgs] as const
}

export function getEndpointQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.endpoint.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEndpointQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.endpoint.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useEndpoint<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.endpoint.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.endpoint.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.endpoint.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.endpoint.$get>>>>
          >,
          ReturnType<typeof getEndpointQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.endpoint.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEndpointQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEndpointQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.endpoint.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEventConfigurationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['event-configurations']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['event-configurations', '/event-configurations', keyArgs] as const
}

export function getEventConfigurationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['event-configurations']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEventConfigurationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['event-configurations'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEventConfigurations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['event-configurations']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['event-configurations']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['event-configurations']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['event-configurations']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEventConfigurationsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['event-configurations']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEventConfigurationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEventConfigurationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['event-configurations'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchEventConfigurationsMutationKey() {
  return ['event-configurations', '/event-configurations', 'PATCH'] as const
}

export function getPatchEventConfigurationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['event-configurations']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['event-configurations']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchEventConfigurationsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['event-configurations']['$patch']>) {
      return parseResponse(client['event-configurations'].$patch(args, options))
    },
  })
}

export function usePatchEventConfigurations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['event-configurations']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['event-configurations']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchEventConfigurationsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getIndicesIndexNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.indices)[':indexName']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['indices', '/indices/:indexName', keyArgs] as const
}

export function getIndicesIndexNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.indices)[':indexName']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIndicesIndexNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.indices[':indexName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIndicesIndexName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.indices)[':indexName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.indices)[':indexName']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.indices)[':indexName']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.indices)[':indexName']['$get']>>
              >
            >
          >,
          ReturnType<typeof getIndicesIndexNameQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.indices)[':indexName']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndicesIndexNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIndicesIndexNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.indices[':indexName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getThingsThingNameJobsJobIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.things)[':thingName']['jobs'][':jobId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['things', '/things/:thingName/jobs/:jobId', keyArgs] as const
}

export function getThingsThingNameJobsJobIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.things)[':thingName']['jobs'][':jobId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getThingsThingNameJobsJobIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.things[':thingName'].jobs[':jobId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useThingsThingNameJobsJobId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.things)[':thingName']['jobs'][':jobId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.things)[':thingName']['jobs'][':jobId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.things)[':thingName']['jobs'][':jobId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.things)[':thingName']['jobs'][':jobId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getThingsThingNameJobsJobIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.things)[':thingName']['jobs'][':jobId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getThingsThingNameJobsJobIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getThingsThingNameJobsJobIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.things[':thingName'].jobs[':jobId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getManagedJobTemplatesTemplateNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['managed-job-templates'][':templateName']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['managed-job-templates', '/managed-job-templates/:templateName', keyArgs] as const
}

export function getManagedJobTemplatesTemplateNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['managed-job-templates'][':templateName']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getManagedJobTemplatesTemplateNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['managed-job-templates'][':templateName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useManagedJobTemplatesTemplateName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['managed-job-templates'][':templateName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['managed-job-templates'][':templateName']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['managed-job-templates'][':templateName']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['managed-job-templates'][':templateName']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getManagedJobTemplatesTemplateNameQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['managed-job-templates'][':templateName']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getManagedJobTemplatesTemplateNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getManagedJobTemplatesTemplateNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['managed-job-templates'][':templateName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getThingRegistrationTasksTaskIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['thing-registration-tasks'][':taskId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['thing-registration-tasks', '/thing-registration-tasks/:taskId', keyArgs] as const
}

export function getThingRegistrationTasksTaskIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['thing-registration-tasks'][':taskId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getThingRegistrationTasksTaskIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['thing-registration-tasks'][':taskId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useThingRegistrationTasksTaskId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['thing-registration-tasks'][':taskId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['thing-registration-tasks'][':taskId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['thing-registration-tasks'][':taskId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['thing-registration-tasks'][':taskId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getThingRegistrationTasksTaskIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['thing-registration-tasks'][':taskId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getThingRegistrationTasksTaskIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getThingRegistrationTasksTaskIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['thing-registration-tasks'][':taskId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostRulesRuleNameDisableMutationKey() {
  return ['rules', '/rules/:ruleName/disable', 'POST'] as const
}

export function getPostRulesRuleNameDisableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rules)[':ruleName']['disable']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.rules)[':ruleName']['disable']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRulesRuleNameDisableMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.rules)[':ruleName']['disable']['$post']>,
    ) {
      return parseResponse(client.rules[':ruleName'].disable.$post(args, options))
    },
  })
}

export function usePostRulesRuleNameDisable<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.rules)[':ruleName']['disable']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.rules)[':ruleName']['disable']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRulesRuleNameDisableMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostRulesRuleNameEnableMutationKey() {
  return ['rules', '/rules/:ruleName/enable', 'POST'] as const
}

export function getPostRulesRuleNameEnableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rules)[':ruleName']['enable']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.rules)[':ruleName']['enable']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRulesRuleNameEnableMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.rules)[':ruleName']['enable']['$post']>,
    ) {
      return parseResponse(client.rules[':ruleName'].enable.$post(args, options))
    },
  })
}

export function usePostRulesRuleNameEnable<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.rules)[':ruleName']['enable']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.rules)[':ruleName']['enable']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRulesRuleNameEnableMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getBehaviorModelTrainingSummariesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['behavior-model-training']['summaries']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['behavior-model-training', '/behavior-model-training/summaries', keyArgs] as const
}

export function getBehaviorModelTrainingSummariesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['behavior-model-training']['summaries']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBehaviorModelTrainingSummariesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['behavior-model-training'].summaries.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBehaviorModelTrainingSummaries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['behavior-model-training']['summaries']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['behavior-model-training']['summaries']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['behavior-model-training']['summaries']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['behavior-model-training']['summaries']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBehaviorModelTrainingSummariesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['behavior-model-training']['summaries']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBehaviorModelTrainingSummariesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBehaviorModelTrainingSummariesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['behavior-model-training'].summaries.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostIndicesBucketsMutationKey() {
  return ['indices', '/indices/buckets', 'POST'] as const
}

export function getPostIndicesBucketsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.indices.buckets.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.indices.buckets.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostIndicesBucketsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.indices.buckets.$post>) {
      return parseResponse(client.indices.buckets.$post(args, options))
    },
  })
}

export function usePostIndicesBuckets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.indices.buckets.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.indices.buckets.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostIndicesBucketsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostIndicesCardinalityMutationKey() {
  return ['indices', '/indices/cardinality', 'POST'] as const
}

export function getPostIndicesCardinalityMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.indices.cardinality.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.indices.cardinality.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostIndicesCardinalityMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.indices.cardinality.$post>) {
      return parseResponse(client.indices.cardinality.$post(args, options))
    },
  })
}

export function usePostIndicesCardinality<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.indices.cardinality.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.indices.cardinality.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostIndicesCardinalityMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostEffectivePoliciesMutationKey() {
  return ['effective-policies', '/effective-policies', 'POST'] as const
}

export function getPostEffectivePoliciesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['effective-policies']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['effective-policies']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostEffectivePoliciesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['effective-policies']['$post']>) {
      return parseResponse(client['effective-policies'].$post(args, options))
    },
  })
}

export function usePostEffectivePolicies<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['effective-policies']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['effective-policies']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostEffectivePoliciesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getIndexingConfigQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.indexing.config.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['indexing', '/indexing/config', keyArgs] as const
}

export function getIndexingConfigQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.indexing.config.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIndexingConfigQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.indexing.config.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIndexingConfig<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.indexing.config.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.indexing.config.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.indexing.config.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.indexing.config.$get>>>
            >
          >,
          ReturnType<typeof getIndexingConfigQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.indexing.config.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getIndexingConfigQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIndexingConfigQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.indexing.config.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostIndexingConfigMutationKey() {
  return ['indexing', '/indexing/config', 'POST'] as const
}

export function getPostIndexingConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.indexing.config.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.indexing.config.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostIndexingConfigMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.indexing.config.$post>) {
      return parseResponse(client.indexing.config.$post(args, options))
    },
  })
}

export function usePostIndexingConfig<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.indexing.config.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.indexing.config.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostIndexingConfigMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getJobsJobIdJobDocumentQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.jobs)[':jobId']['job-document']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['jobs', '/jobs/:jobId/job-document', keyArgs] as const
}

export function getJobsJobIdJobDocumentQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.jobs)[':jobId']['job-document']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getJobsJobIdJobDocumentQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.jobs[':jobId']['job-document'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useJobsJobIdJobDocument<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.jobs)[':jobId']['job-document']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.jobs)[':jobId']['job-document']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.jobs)[':jobId']['job-document']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.jobs)[':jobId']['job-document']['$get']>>
              >
            >
          >,
          ReturnType<typeof getJobsJobIdJobDocumentQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.jobs)[':jobId']['job-document']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getJobsJobIdJobDocumentQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getJobsJobIdJobDocumentQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.jobs[':jobId']['job-document'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLoggingOptionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.loggingOptions.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['loggingOptions', '/loggingOptions', keyArgs] as const
}

export function getLoggingOptionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.loggingOptions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLoggingOptionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.loggingOptions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLoggingOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.loggingOptions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.loggingOptions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.loggingOptions.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.loggingOptions.$get>>>>
          >,
          ReturnType<typeof getLoggingOptionsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.loggingOptions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLoggingOptionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLoggingOptionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.loggingOptions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostLoggingOptionsMutationKey() {
  return ['loggingOptions', '/loggingOptions', 'POST'] as const
}

export function getPostLoggingOptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.loggingOptions.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.loggingOptions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLoggingOptionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.loggingOptions.$post>) {
      return parseResponse(client.loggingOptions.$post(args, options))
    },
  })
}

export function usePostLoggingOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.loggingOptions.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.loggingOptions.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLoggingOptionsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostIndicesPercentilesMutationKey() {
  return ['indices', '/indices/percentiles', 'POST'] as const
}

export function getPostIndicesPercentilesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.indices.percentiles.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.indices.percentiles.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostIndicesPercentilesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.indices.percentiles.$post>) {
      return parseResponse(client.indices.percentiles.$post(args, options))
    },
  })
}

export function usePostIndicesPercentiles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.indices.percentiles.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.indices.percentiles.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostIndicesPercentilesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostIndicesStatisticsMutationKey() {
  return ['indices', '/indices/statistics', 'POST'] as const
}

export function getPostIndicesStatisticsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.indices.statistics.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.indices.statistics.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostIndicesStatisticsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.indices.statistics.$post>) {
      return parseResponse(client.indices.statistics.$post(args, options))
    },
  })
}

export function usePostIndicesStatistics<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.indices.statistics.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.indices.statistics.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostIndicesStatisticsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV2LoggingOptionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2LoggingOptions.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v2LoggingOptions', '/v2LoggingOptions', keyArgs] as const
}

export function getV2LoggingOptionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2LoggingOptions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2LoggingOptionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2LoggingOptions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2LoggingOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2LoggingOptions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2LoggingOptions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2LoggingOptions.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2LoggingOptions.$get>>>
            >
          >,
          ReturnType<typeof getV2LoggingOptionsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2LoggingOptions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2LoggingOptionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2LoggingOptionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2LoggingOptions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2LoggingOptionsMutationKey() {
  return ['v2LoggingOptions', '/v2LoggingOptions', 'POST'] as const
}

export function getPostV2LoggingOptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2LoggingOptions.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v2LoggingOptions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2LoggingOptionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2LoggingOptions.$post>) {
      return parseResponse(client.v2LoggingOptions.$post(args, options))
    },
  })
}

export function usePostV2LoggingOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2LoggingOptions.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v2LoggingOptions.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2LoggingOptionsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActiveViolationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['active-violations']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['active-violations', '/active-violations', keyArgs] as const
}

export function getActiveViolationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['active-violations']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActiveViolationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['active-violations'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActiveViolations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['active-violations']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['active-violations']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['active-violations']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['active-violations']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActiveViolationsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['active-violations']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActiveViolationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActiveViolationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['active-violations'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAttachedPoliciesTargetMutationKey() {
  return ['attached-policies', '/attached-policies/:target', 'POST'] as const
}

export function getPostAttachedPoliciesTargetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['attached-policies'][':target']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['attached-policies'][':target']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAttachedPoliciesTargetMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['attached-policies'][':target']['$post']>,
    ) {
      return parseResponse(client['attached-policies'][':target'].$post(args, options))
    },
  })
}

export function usePostAttachedPoliciesTarget<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['attached-policies'][':target']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['attached-policies'][':target']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAttachedPoliciesTargetMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAuditFindingsMutationKey() {
  return ['audit', '/audit/findings', 'POST'] as const
}

export function getPostAuditFindingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audit.findings.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.audit.findings.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAuditFindingsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.audit.findings.$post>) {
      return parseResponse(client.audit.findings.$post(args, options))
    },
  })
}

export function usePostAuditFindings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.audit.findings.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.audit.findings.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAuditFindingsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAuditMitigationactionsExecutionsTaskIdFindingIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.audit.mitigationactions)['executions#taskId&findingId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['audit', '/audit/mitigationactions/executions#taskId&findingId', keyArgs] as const
}

export function getAuditMitigationactionsExecutionsTaskIdFindingIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.audit.mitigationactions)['executions#taskId&findingId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAuditMitigationactionsExecutionsTaskIdFindingIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.audit.mitigationactions['executions#taskId&findingId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAuditMitigationactionsExecutionsTaskIdFindingId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.audit.mitigationactions)['executions#taskId&findingId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.audit.mitigationactions)['executions#taskId&findingId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          TError,
          TData,
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
          ReturnType<typeof getAuditMitigationactionsExecutionsTaskIdFindingIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
    TError,
    TData,
    ReturnType<typeof getAuditMitigationactionsExecutionsTaskIdFindingIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAuditMitigationactionsExecutionsTaskIdFindingIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.audit.mitigationactions['executions#taskId&findingId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAuditMitigationactionsTasksStartTimeEndTimeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.audit.mitigationactions)['tasks#startTime&endTime']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['audit', '/audit/mitigationactions/tasks#startTime&endTime', keyArgs] as const
}

export function getAuditMitigationactionsTasksStartTimeEndTimeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.audit.mitigationactions)['tasks#startTime&endTime']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAuditMitigationactionsTasksStartTimeEndTimeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.audit.mitigationactions['tasks#startTime&endTime'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAuditMitigationactionsTasksStartTimeEndTime<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.audit.mitigationactions)['tasks#startTime&endTime']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.audit.mitigationactions)['tasks#startTime&endTime']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.audit.mitigationactions)['tasks#startTime&endTime']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.audit.mitigationactions)['tasks#startTime&endTime']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAuditMitigationactionsTasksStartTimeEndTimeQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.audit.mitigationactions)['tasks#startTime&endTime']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAuditMitigationactionsTasksStartTimeEndTimeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAuditMitigationactionsTasksStartTimeEndTimeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.audit.mitigationactions['tasks#startTime&endTime'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAuditSuppressionsListMutationKey() {
  return ['audit', '/audit/suppressions/list', 'POST'] as const
}

export function getPostAuditSuppressionsListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.audit.suppressions.list.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.audit.suppressions.list.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAuditSuppressionsListMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.audit.suppressions.list.$post>) {
      return parseResponse(client.audit.suppressions.list.$post(args, options))
    },
  })
}

export function usePostAuditSuppressionsList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.audit.suppressions.list.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.audit.suppressions.list.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAuditSuppressionsListMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAuditTasksStartTimeEndTimeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.audit)['tasks#startTime&endTime']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['audit', '/audit/tasks#startTime&endTime', keyArgs] as const
}

export function getAuditTasksStartTimeEndTimeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.audit)['tasks#startTime&endTime']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAuditTasksStartTimeEndTimeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.audit['tasks#startTime&endTime'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAuditTasksStartTimeEndTime<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.audit)['tasks#startTime&endTime']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.audit)['tasks#startTime&endTime']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.audit)['tasks#startTime&endTime']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.audit)['tasks#startTime&endTime']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAuditTasksStartTimeEndTimeQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.audit)['tasks#startTime&endTime']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAuditTasksStartTimeEndTimeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAuditTasksStartTimeEndTimeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.audit['tasks#startTime&endTime'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAuthorizersIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.authorizers.index.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['authorizers', '/authorizers/', keyArgs] as const
}

export function getAuthorizersIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.authorizers.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAuthorizersIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.authorizers.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAuthorizersIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authorizers.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.authorizers.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.authorizers.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.authorizers.index.$get>>>
            >
          >,
          ReturnType<typeof getAuthorizersIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authorizers.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAuthorizersIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAuthorizersIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.authorizers.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBillingGroupsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['billing-groups']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['billing-groups', '/billing-groups', keyArgs] as const
}

export function getBillingGroupsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['billing-groups']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBillingGroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['billing-groups'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBillingGroups<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['billing-groups']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['billing-groups']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['billing-groups']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['billing-groups']['$get']>>>
            >
          >,
          ReturnType<typeof getBillingGroupsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['billing-groups']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBillingGroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBillingGroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['billing-groups'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCacertificatesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.cacertificates.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['cacertificates', '/cacertificates', keyArgs] as const
}

export function getCacertificatesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.cacertificates.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCacertificatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cacertificates.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCacertificates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cacertificates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.cacertificates.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cacertificates.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cacertificates.$get>>>>
          >,
          ReturnType<typeof getCacertificatesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cacertificates.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCacertificatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCacertificatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.cacertificates.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCertificatesByCaCaCertificateIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['certificates-by-ca'][':caCertificateId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['certificates-by-ca', '/certificates-by-ca/:caCertificateId', keyArgs] as const
}

export function getCertificatesByCaCaCertificateIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['certificates-by-ca'][':caCertificateId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCertificatesByCaCaCertificateIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['certificates-by-ca'][':caCertificateId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCertificatesByCaCaCertificateId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['certificates-by-ca'][':caCertificateId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['certificates-by-ca'][':caCertificateId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['certificates-by-ca'][':caCertificateId']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['certificates-by-ca'][':caCertificateId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getCertificatesByCaCaCertificateIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['certificates-by-ca'][':caCertificateId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCertificatesByCaCaCertificateIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCertificatesByCaCaCertificateIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['certificates-by-ca'][':caCertificateId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCustomMetricsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['custom-metrics']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['custom-metrics', '/custom-metrics', keyArgs] as const
}

export function getCustomMetricsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['custom-metrics']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCustomMetricsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['custom-metrics'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCustomMetrics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['custom-metrics']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['custom-metrics']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['custom-metrics']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['custom-metrics']['$get']>>>
            >
          >,
          ReturnType<typeof getCustomMetricsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['custom-metrics']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomMetricsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCustomMetricsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['custom-metrics'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDetectMitigationactionsExecutionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.detect.mitigationactions.executions.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['detect', '/detect/mitigationactions/executions', keyArgs] as const
}

export function getDetectMitigationactionsExecutionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.detect.mitigationactions.executions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDetectMitigationactionsExecutionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.detect.mitigationactions.executions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDetectMitigationactionsExecutions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.detect.mitigationactions.executions.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.detect.mitigationactions.executions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.detect.mitigationactions.executions.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.detect.mitigationactions.executions.$get>>
              >
            >
          >,
          ReturnType<typeof getDetectMitigationactionsExecutionsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.detect.mitigationactions.executions.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDetectMitigationactionsExecutionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDetectMitigationactionsExecutionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.detect.mitigationactions.executions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDetectMitigationactionsTasksStartTimeEndTimeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.detect.mitigationactions)['tasks#startTime&endTime']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['detect', '/detect/mitigationactions/tasks#startTime&endTime', keyArgs] as const
}

export function getDetectMitigationactionsTasksStartTimeEndTimeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.detect.mitigationactions)['tasks#startTime&endTime']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDetectMitigationactionsTasksStartTimeEndTimeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.detect.mitigationactions['tasks#startTime&endTime'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDetectMitigationactionsTasksStartTimeEndTime<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.detect.mitigationactions)['tasks#startTime&endTime']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.detect.mitigationactions)['tasks#startTime&endTime']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          TError,
          TData,
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
          ReturnType<typeof getDetectMitigationactionsTasksStartTimeEndTimeQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.detect.mitigationactions)['tasks#startTime&endTime']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDetectMitigationactionsTasksStartTimeEndTimeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDetectMitigationactionsTasksStartTimeEndTimeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.detect.mitigationactions['tasks#startTime&endTime'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDimensionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.dimensions.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['dimensions', '/dimensions', keyArgs] as const
}

export function getDimensionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.dimensions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDimensionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dimensions.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useDimensions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dimensions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.dimensions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dimensions.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dimensions.$get>>>>
          >,
          ReturnType<typeof getDimensionsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dimensions.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDimensionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDimensionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dimensions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDomainConfigurationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.domainConfigurations.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['domainConfigurations', '/domainConfigurations', keyArgs] as const
}

export function getDomainConfigurationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.domainConfigurations.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDomainConfigurationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.domainConfigurations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDomainConfigurations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domainConfigurations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.domainConfigurations.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.domainConfigurations.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.domainConfigurations.$get>>>
            >
          >,
          ReturnType<typeof getDomainConfigurationsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domainConfigurations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDomainConfigurationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDomainConfigurationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.domainConfigurations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFleetMetricsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['fleet-metrics']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['fleet-metrics', '/fleet-metrics', keyArgs] as const
}

export function getFleetMetricsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['fleet-metrics']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFleetMetricsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['fleet-metrics'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFleetMetrics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['fleet-metrics']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['fleet-metrics']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['fleet-metrics']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['fleet-metrics']['$get']>>>
            >
          >,
          ReturnType<typeof getFleetMetricsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['fleet-metrics']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFleetMetricsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFleetMetricsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['fleet-metrics'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getIndicesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.indices.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['indices', '/indices', keyArgs] as const
}

export function getIndicesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.indices.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIndicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.indices.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useIndices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.indices.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.indices.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.indices.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.indices.$get>>>>
          >,
          ReturnType<typeof getIndicesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.indices.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getIndicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIndicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.indices.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getJobsJobIdThingsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.jobs)[':jobId']['things']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['jobs', '/jobs/:jobId/things', keyArgs] as const
}

export function getJobsJobIdThingsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.jobs)[':jobId']['things']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getJobsJobIdThingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.jobs[':jobId'].things.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useJobsJobIdThings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':jobId']['things']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.jobs)[':jobId']['things']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.jobs)[':jobId']['things']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.jobs)[':jobId']['things']['$get']>>
              >
            >
          >,
          ReturnType<typeof getJobsJobIdThingsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':jobId']['things']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getJobsJobIdThingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getJobsJobIdThingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.jobs[':jobId'].things.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getThingsThingNameJobsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.things)[':thingName']['jobs']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['things', '/things/:thingName/jobs', keyArgs] as const
}

export function getThingsThingNameJobsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.things)[':thingName']['jobs']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getThingsThingNameJobsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.things[':thingName'].jobs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useThingsThingNameJobs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.things)[':thingName']['jobs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.things)[':thingName']['jobs']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.things)[':thingName']['jobs']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.things)[':thingName']['jobs']['$get']>>
              >
            >
          >,
          ReturnType<typeof getThingsThingNameJobsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.things)[':thingName']['jobs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getThingsThingNameJobsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getThingsThingNameJobsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.things[':thingName'].jobs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getJobTemplatesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['job-templates']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['job-templates', '/job-templates', keyArgs] as const
}

export function getJobTemplatesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['job-templates']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getJobTemplatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['job-templates'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useJobTemplates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['job-templates']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['job-templates']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['job-templates']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['job-templates']['$get']>>>
            >
          >,
          ReturnType<typeof getJobTemplatesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['job-templates']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getJobTemplatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getJobTemplatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['job-templates'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getJobsQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.jobs.$get>>) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['jobs', '/jobs', keyArgs] as const
}

export function getJobsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.jobs.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getJobsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.jobs.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useJobs<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.jobs.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.$get>>>>>,
          ReturnType<typeof getJobsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getJobsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getJobsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.jobs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getManagedJobTemplatesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['managed-job-templates']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['managed-job-templates', '/managed-job-templates', keyArgs] as const
}

export function getManagedJobTemplatesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['managed-job-templates']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getManagedJobTemplatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['managed-job-templates'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useManagedJobTemplates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['managed-job-templates']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['managed-job-templates']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['managed-job-templates']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['managed-job-templates']['$get']>>
              >
            >
          >,
          ReturnType<typeof getManagedJobTemplatesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['managed-job-templates']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getManagedJobTemplatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getManagedJobTemplatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['managed-job-templates'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMetricValuesThingNameMetricNameStartTimeEndTimeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['metric-values#thingName&metricName&startTime&endTime']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'metric-values#thingName&metricName&startTime&endTime',
    '/metric-values#thingName&metricName&startTime&endTime',
    keyArgs,
  ] as const
}

export function getMetricValuesThingNameMetricNameStartTimeEndTimeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['metric-values#thingName&metricName&startTime&endTime']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMetricValuesThingNameMetricNameStartTimeEndTimeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['metric-values#thingName&metricName&startTime&endTime'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMetricValuesThingNameMetricNameStartTimeEndTime<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['metric-values#thingName&metricName&startTime&endTime']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          TError,
          TData,
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
          ReturnType<typeof getMetricValuesThingNameMetricNameStartTimeEndTimeQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
    TError,
    TData,
    ReturnType<typeof getMetricValuesThingNameMetricNameStartTimeEndTimeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMetricValuesThingNameMetricNameStartTimeEndTimeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['metric-values#thingName&metricName&startTime&endTime'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMitigationactionsActionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.mitigationactions.actions.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['mitigationactions', '/mitigationactions/actions', keyArgs] as const
}

export function getMitigationactionsActionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.mitigationactions.actions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMitigationactionsActionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mitigationactions.actions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMitigationactionsActions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.mitigationactions.actions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.mitigationactions.actions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.mitigationactions.actions.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.mitigationactions.actions.$get>>
              >
            >
          >,
          ReturnType<typeof getMitigationactionsActionsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.mitigationactions.actions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMitigationactionsActionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMitigationactionsActionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mitigationactions.actions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOtaUpdatesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.otaUpdates.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['otaUpdates', '/otaUpdates', keyArgs] as const
}

export function getOtaUpdatesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.otaUpdates.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOtaUpdatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.otaUpdates.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useOtaUpdates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.otaUpdates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.otaUpdates.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.otaUpdates.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.otaUpdates.$get>>>>
          >,
          ReturnType<typeof getOtaUpdatesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.otaUpdates.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getOtaUpdatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOtaUpdatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.otaUpdates.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCertificatesOutGoingQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['certificates-out-going']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['certificates-out-going', '/certificates-out-going', keyArgs] as const
}

export function getCertificatesOutGoingQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['certificates-out-going']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCertificatesOutGoingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['certificates-out-going'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCertificatesOutGoing<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['certificates-out-going']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['certificates-out-going']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['certificates-out-going']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['certificates-out-going']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCertificatesOutGoingQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['certificates-out-going']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCertificatesOutGoingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCertificatesOutGoingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['certificates-out-going'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPoliciesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.policies.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['policies', '/policies', keyArgs] as const
}

export function getPoliciesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.policies.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPoliciesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.policies.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePolicies<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.policies.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.policies.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.policies.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.policies.$get>>>>
          >,
          ReturnType<typeof getPoliciesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.policies.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPoliciesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPoliciesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.policies.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPolicyPrincipalsXAmznIotPolicyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['policy-principals#x-amzn-iot-policy']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'policy-principals#x-amzn-iot-policy',
    '/policy-principals#x-amzn-iot-policy',
    keyArgs,
  ] as const
}

export function getPolicyPrincipalsXAmznIotPolicyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['policy-principals#x-amzn-iot-policy']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPolicyPrincipalsXAmznIotPolicyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['policy-principals#x-amzn-iot-policy'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePolicyPrincipalsXAmznIotPolicy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['policy-principals#x-amzn-iot-policy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['policy-principals#x-amzn-iot-policy']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['policy-principals#x-amzn-iot-policy']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['policy-principals#x-amzn-iot-policy']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPolicyPrincipalsXAmznIotPolicyQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['policy-principals#x-amzn-iot-policy']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPolicyPrincipalsXAmznIotPolicyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPolicyPrincipalsXAmznIotPolicyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['policy-principals#x-amzn-iot-policy'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPrincipalPoliciesXAmznIotPrincipalQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['principal-policies#x-amzn-iot-principal']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'principal-policies#x-amzn-iot-principal',
    '/principal-policies#x-amzn-iot-principal',
    keyArgs,
  ] as const
}

export function getPrincipalPoliciesXAmznIotPrincipalQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['principal-policies#x-amzn-iot-principal']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPrincipalPoliciesXAmznIotPrincipalQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['principal-policies#x-amzn-iot-principal'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePrincipalPoliciesXAmznIotPrincipal<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['principal-policies#x-amzn-iot-principal']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['principal-policies#x-amzn-iot-principal']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['principal-policies#x-amzn-iot-principal']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['principal-policies#x-amzn-iot-principal']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getPrincipalPoliciesXAmznIotPrincipalQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['principal-policies#x-amzn-iot-principal']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPrincipalPoliciesXAmznIotPrincipalQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPrincipalPoliciesXAmznIotPrincipalQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['principal-policies#x-amzn-iot-principal'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPrincipalsThingsXAmznPrincipalQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.principals)['things#x-amzn-principal']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['principals', '/principals/things#x-amzn-principal', keyArgs] as const
}

export function getPrincipalsThingsXAmznPrincipalQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.principals)['things#x-amzn-principal']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPrincipalsThingsXAmznPrincipalQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.principals['things#x-amzn-principal'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePrincipalsThingsXAmznPrincipal<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.principals)['things#x-amzn-principal']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.principals)['things#x-amzn-principal']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.principals)['things#x-amzn-principal']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.principals)['things#x-amzn-principal']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPrincipalsThingsXAmznPrincipalQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.principals)['things#x-amzn-principal']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPrincipalsThingsXAmznPrincipalQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPrincipalsThingsXAmznPrincipalQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.principals['things#x-amzn-principal'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAuditRelatedResourcesFindingIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.audit)['relatedResources#findingId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['audit', '/audit/relatedResources#findingId', keyArgs] as const
}

export function getAuditRelatedResourcesFindingIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.audit)['relatedResources#findingId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAuditRelatedResourcesFindingIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.audit['relatedResources#findingId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAuditRelatedResourcesFindingId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.audit)['relatedResources#findingId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.audit)['relatedResources#findingId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.audit)['relatedResources#findingId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.audit)['relatedResources#findingId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAuditRelatedResourcesFindingIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.audit)['relatedResources#findingId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAuditRelatedResourcesFindingIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAuditRelatedResourcesFindingIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.audit['relatedResources#findingId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRoleAliasesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['role-aliases']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['role-aliases', '/role-aliases', keyArgs] as const
}

export function getRoleAliasesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['role-aliases']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRoleAliasesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['role-aliases'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRoleAliases<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['role-aliases']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['role-aliases']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['role-aliases']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['role-aliases']['$get']>>>
            >
          >,
          ReturnType<typeof getRoleAliasesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['role-aliases']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRoleAliasesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRoleAliasesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['role-aliases'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAuditScheduledauditsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.audit.scheduledaudits.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['audit', '/audit/scheduledaudits', keyArgs] as const
}

export function getAuditScheduledauditsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.audit.scheduledaudits.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAuditScheduledauditsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.audit.scheduledaudits.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAuditScheduledaudits<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audit.scheduledaudits.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.audit.scheduledaudits.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.audit.scheduledaudits.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.audit.scheduledaudits.$get>>>
            >
          >,
          ReturnType<typeof getAuditScheduledauditsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.audit.scheduledaudits.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAuditScheduledauditsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAuditScheduledauditsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.audit.scheduledaudits.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSecurityProfilesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['security-profiles']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['security-profiles', '/security-profiles', keyArgs] as const
}

export function getSecurityProfilesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['security-profiles']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSecurityProfilesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['security-profiles'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSecurityProfiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['security-profiles']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['security-profiles']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['security-profiles']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['security-profiles']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSecurityProfilesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['security-profiles']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSecurityProfilesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSecurityProfilesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['security-profiles'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSecurityProfilesForTargetSecurityProfileTargetArnQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['security-profiles-for-target#securityProfileTargetArn']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'security-profiles-for-target#securityProfileTargetArn',
    '/security-profiles-for-target#securityProfileTargetArn',
    keyArgs,
  ] as const
}

export function getSecurityProfilesForTargetSecurityProfileTargetArnQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['security-profiles-for-target#securityProfileTargetArn']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSecurityProfilesForTargetSecurityProfileTargetArnQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['security-profiles-for-target#securityProfileTargetArn'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSecurityProfilesForTargetSecurityProfileTargetArn<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['security-profiles-for-target#securityProfileTargetArn']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          TError,
          TData,
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
          ReturnType<typeof getSecurityProfilesForTargetSecurityProfileTargetArnQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
    TError,
    TData,
    ReturnType<typeof getSecurityProfilesForTargetSecurityProfileTargetArnQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSecurityProfilesForTargetSecurityProfileTargetArnQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['security-profiles-for-target#securityProfileTargetArn'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStreamsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.streams.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['streams', '/streams', keyArgs] as const
}

export function getStreamsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.streams.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStreamsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.streams.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStreams<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.streams.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.streams.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.streams.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.streams.$get>>>>
          >,
          ReturnType<typeof getStreamsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.streams.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStreamsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStreamsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.streams.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTagsResourceArnQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['tags#resourceArn']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['tags#resourceArn', '/tags#resourceArn', keyArgs] as const
}

export function getTagsResourceArnQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['tags#resourceArn']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTagsResourceArnQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['tags#resourceArn'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTagsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['tags#resourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['tags#resourceArn']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['tags#resourceArn']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['tags#resourceArn']['$get']>>>
            >
          >,
          ReturnType<typeof getTagsResourceArnQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['tags#resourceArn']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagsResourceArnQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTagsResourceArnQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['tags#resourceArn'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostPolicyTargetsPolicyNameMutationKey() {
  return ['policy-targets', '/policy-targets/:policyName', 'POST'] as const
}

export function getPostPolicyTargetsPolicyNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['policy-targets'][':policyName']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['policy-targets'][':policyName']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPolicyTargetsPolicyNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['policy-targets'][':policyName']['$post']>,
    ) {
      return parseResponse(client['policy-targets'][':policyName'].$post(args, options))
    },
  })
}

export function usePostPolicyTargetsPolicyName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['policy-targets'][':policyName']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['policy-targets'][':policyName']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPolicyTargetsPolicyNameMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSecurityProfilesSecurityProfileNameTargetsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['security-profiles'][':securityProfileName']['targets']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['security-profiles', '/security-profiles/:securityProfileName/targets', keyArgs] as const
}

export function getSecurityProfilesSecurityProfileNameTargetsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['security-profiles'][':securityProfileName']['targets']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSecurityProfilesSecurityProfileNameTargetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['security-profiles'][':securityProfileName'].targets.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSecurityProfilesSecurityProfileNameTargets<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['security-profiles'][':securityProfileName']['targets']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          TError,
          TData,
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
          ReturnType<typeof getSecurityProfilesSecurityProfileNameTargetsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
    TError,
    TData,
    ReturnType<typeof getSecurityProfilesSecurityProfileNameTargetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSecurityProfilesSecurityProfileNameTargetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['security-profiles'][':securityProfileName'].targets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getThingGroupsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['thing-groups']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['thing-groups', '/thing-groups', keyArgs] as const
}

export function getThingGroupsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['thing-groups']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getThingGroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['thing-groups'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useThingGroups<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['thing-groups']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['thing-groups']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['thing-groups']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['thing-groups']['$get']>>>
            >
          >,
          ReturnType<typeof getThingGroupsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['thing-groups']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getThingGroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getThingGroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['thing-groups'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getThingsThingNameThingGroupsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.things)[':thingName']['thing-groups']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['things', '/things/:thingName/thing-groups', keyArgs] as const
}

export function getThingsThingNameThingGroupsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.things)[':thingName']['thing-groups']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getThingsThingNameThingGroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.things[':thingName']['thing-groups'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useThingsThingNameThingGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.things)[':thingName']['thing-groups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.things)[':thingName']['thing-groups']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.things)[':thingName']['thing-groups']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.things)[':thingName']['thing-groups']['$get']>>
              >
            >
          >,
          ReturnType<typeof getThingsThingNameThingGroupsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.things)[':thingName']['thing-groups']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getThingsThingNameThingGroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getThingsThingNameThingGroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.things[':thingName']['thing-groups'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getThingsThingNamePrincipalsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.things)[':thingName']['principals']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['things', '/things/:thingName/principals', keyArgs] as const
}

export function getThingsThingNamePrincipalsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.things)[':thingName']['principals']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getThingsThingNamePrincipalsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.things[':thingName'].principals.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useThingsThingNamePrincipals<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.things)[':thingName']['principals']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.things)[':thingName']['principals']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.things)[':thingName']['principals']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.things)[':thingName']['principals']['$get']>>
              >
            >
          >,
          ReturnType<typeof getThingsThingNamePrincipalsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.things)[':thingName']['principals']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getThingsThingNamePrincipalsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getThingsThingNamePrincipalsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.things[':thingName'].principals.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getThingRegistrationTasksTaskIdReportsReportTypeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['thing-registration-tasks'][':taskId']['reports#reportType']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'thing-registration-tasks',
    '/thing-registration-tasks/:taskId/reports#reportType',
    keyArgs,
  ] as const
}

export function getThingRegistrationTasksTaskIdReportsReportTypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['thing-registration-tasks'][':taskId']['reports#reportType']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getThingRegistrationTasksTaskIdReportsReportTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['thing-registration-tasks'][':taskId']['reports#reportType'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useThingRegistrationTasksTaskIdReportsReportType<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['thing-registration-tasks'][':taskId']['reports#reportType']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          TError,
          TData,
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
          ReturnType<typeof getThingRegistrationTasksTaskIdReportsReportTypeQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
    TError,
    TData,
    ReturnType<typeof getThingRegistrationTasksTaskIdReportsReportTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getThingRegistrationTasksTaskIdReportsReportTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['thing-registration-tasks'][':taskId']['reports#reportType'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getThingRegistrationTasksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['thing-registration-tasks']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['thing-registration-tasks', '/thing-registration-tasks', keyArgs] as const
}

export function getThingRegistrationTasksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['thing-registration-tasks']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getThingRegistrationTasksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['thing-registration-tasks'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useThingRegistrationTasks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['thing-registration-tasks']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['thing-registration-tasks']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['thing-registration-tasks']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['thing-registration-tasks']['$get']>>
              >
            >
          >,
          ReturnType<typeof getThingRegistrationTasksQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['thing-registration-tasks']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getThingRegistrationTasksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getThingRegistrationTasksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['thing-registration-tasks'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostThingRegistrationTasksMutationKey() {
  return ['thing-registration-tasks', '/thing-registration-tasks', 'POST'] as const
}

export function getPostThingRegistrationTasksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['thing-registration-tasks']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['thing-registration-tasks']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostThingRegistrationTasksMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['thing-registration-tasks']['$post']>) {
      return parseResponse(client['thing-registration-tasks'].$post(args, options))
    },
  })
}

export function usePostThingRegistrationTasks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['thing-registration-tasks']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['thing-registration-tasks']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostThingRegistrationTasksMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getThingTypesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['thing-types']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['thing-types', '/thing-types', keyArgs] as const
}

export function getThingTypesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['thing-types']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getThingTypesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['thing-types'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useThingTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['thing-types']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['thing-types']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['thing-types']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['thing-types']['$get']>>>
            >
          >,
          ReturnType<typeof getThingTypesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['thing-types']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getThingTypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getThingTypesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['thing-types'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getThingsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.things.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['things', '/things', keyArgs] as const
}

export function getThingsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.things.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getThingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.things.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useThings<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.things.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.things.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.things.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.things.$get>>>>>,
          ReturnType<typeof getThingsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.things.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getThingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getThingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.things.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostThingsMutationKey() {
  return ['things', '/things', 'POST'] as const
}

export function getPostThingsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.things.$post>>>>>,
    TError,
    InferRequestType<typeof client.things.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostThingsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.things.$post>) {
      return parseResponse(client.things.$post(args, options))
    },
  })
}

export function usePostThings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.things.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.things.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostThingsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getBillingGroupsBillingGroupNameThingsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['billing-groups'][':billingGroupName']['things']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['billing-groups', '/billing-groups/:billingGroupName/things', keyArgs] as const
}

export function getBillingGroupsBillingGroupNameThingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['billing-groups'][':billingGroupName']['things']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBillingGroupsBillingGroupNameThingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['billing-groups'][':billingGroupName'].things.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBillingGroupsBillingGroupNameThings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['billing-groups'][':billingGroupName']['things']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['billing-groups'][':billingGroupName']['things']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['billing-groups'][':billingGroupName']['things']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['billing-groups'][':billingGroupName']['things']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getBillingGroupsBillingGroupNameThingsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['billing-groups'][':billingGroupName']['things']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBillingGroupsBillingGroupNameThingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBillingGroupsBillingGroupNameThingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['billing-groups'][':billingGroupName'].things.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getThingGroupsThingGroupNameThingsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['thing-groups'][':thingGroupName']['things']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['thing-groups', '/thing-groups/:thingGroupName/things', keyArgs] as const
}

export function getThingGroupsThingGroupNameThingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['thing-groups'][':thingGroupName']['things']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getThingGroupsThingGroupNameThingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['thing-groups'][':thingGroupName'].things.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useThingGroupsThingGroupNameThings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['thing-groups'][':thingGroupName']['things']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['thing-groups'][':thingGroupName']['things']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['thing-groups'][':thingGroupName']['things']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['thing-groups'][':thingGroupName']['things']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getThingGroupsThingGroupNameThingsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['thing-groups'][':thingGroupName']['things']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getThingGroupsThingGroupNameThingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getThingGroupsThingGroupNameThingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['thing-groups'][':thingGroupName'].things.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRulesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.rules.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['rules', '/rules', keyArgs] as const
}

export function getRulesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.rules.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRulesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.rules.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRules<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rules.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.rules.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rules.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rules.$get>>>>>,
          ReturnType<typeof getRulesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rules.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRulesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRulesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.rules.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2LoggingLevelQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2LoggingLevel.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v2LoggingLevel', '/v2LoggingLevel', keyArgs] as const
}

export function getV2LoggingLevelQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2LoggingLevel.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2LoggingLevelQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2LoggingLevel.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2LoggingLevel<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2LoggingLevel.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2LoggingLevel.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2LoggingLevel.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2LoggingLevel.$get>>>>
          >,
          ReturnType<typeof getV2LoggingLevelQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2LoggingLevel.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2LoggingLevelQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2LoggingLevelQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2LoggingLevel.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2LoggingLevelMutationKey() {
  return ['v2LoggingLevel', '/v2LoggingLevel', 'POST'] as const
}

export function getPostV2LoggingLevelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2LoggingLevel.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v2LoggingLevel.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2LoggingLevelMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2LoggingLevel.$post>) {
      return parseResponse(client.v2LoggingLevel.$post(args, options))
    },
  })
}

export function usePostV2LoggingLevel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2LoggingLevel.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v2LoggingLevel.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2LoggingLevelMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getViolationEventsStartTimeEndTimeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['violation-events#startTime&endTime']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'violation-events#startTime&endTime',
    '/violation-events#startTime&endTime',
    keyArgs,
  ] as const
}

export function getViolationEventsStartTimeEndTimeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['violation-events#startTime&endTime']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getViolationEventsStartTimeEndTimeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['violation-events#startTime&endTime'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useViolationEventsStartTimeEndTime<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['violation-events#startTime&endTime']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['violation-events#startTime&endTime']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['violation-events#startTime&endTime']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['violation-events#startTime&endTime']['$get']>>
              >
            >
          >,
          ReturnType<typeof getViolationEventsStartTimeEndTimeQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['violation-events#startTime&endTime']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getViolationEventsStartTimeEndTimeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getViolationEventsStartTimeEndTimeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['violation-events#startTime&endTime'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostViolationsVerificationStateViolationIdMutationKey() {
  return ['violations', '/violations/verification-state/:violationId', 'POST'] as const
}

export function getPostViolationsVerificationStateViolationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.violations)['verification-state'][':violationId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostViolationsVerificationStateViolationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.violations)['verification-state'][':violationId']['$post']
      >,
    ) {
      return parseResponse(
        client.violations['verification-state'][':violationId'].$post(args, options),
      )
    },
  })
}

export function usePostViolationsVerificationStateViolationId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.violations)['verification-state'][':violationId']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.violations)['verification-state'][':violationId']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostViolationsVerificationStateViolationIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostCacertificateMutationKey() {
  return ['cacertificate', '/cacertificate', 'POST'] as const
}

export function getPostCacertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cacertificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.cacertificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCacertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.cacertificate.$post>) {
      return parseResponse(client.cacertificate.$post(args, options))
    },
  })
}

export function usePostCacertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cacertificate.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.cacertificate.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCacertificateMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostCertificateRegisterMutationKey() {
  return ['certificate', '/certificate/register', 'POST'] as const
}

export function getPostCertificateRegisterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.certificate.register.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.certificate.register.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCertificateRegisterMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.certificate.register.$post>) {
      return parseResponse(client.certificate.register.$post(args, options))
    },
  })
}

export function usePostCertificateRegister<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.certificate.register.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.certificate.register.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCertificateRegisterMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostCertificateRegisterNoCaMutationKey() {
  return ['certificate', '/certificate/register-no-ca', 'POST'] as const
}

export function getPostCertificateRegisterNoCaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.certificate)['register-no-ca']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.certificate)['register-no-ca']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCertificateRegisterNoCaMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.certificate)['register-no-ca']['$post']>,
    ) {
      return parseResponse(client.certificate['register-no-ca'].$post(args, options))
    },
  })
}

export function usePostCertificateRegisterNoCa<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.certificate)['register-no-ca']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.certificate)['register-no-ca']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCertificateRegisterNoCaMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchRejectCertificateTransferCertificateIdMutationKey() {
  return [
    'reject-certificate-transfer',
    '/reject-certificate-transfer/:certificateId',
    'PATCH',
  ] as const
}

export function getPatchRejectCertificateTransferCertificateIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['reject-certificate-transfer'][':certificateId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchRejectCertificateTransferCertificateIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['reject-certificate-transfer'][':certificateId']['$patch']
      >,
    ) {
      return parseResponse(
        client['reject-certificate-transfer'][':certificateId'].$patch(args, options),
      )
    },
  })
}

export function usePatchRejectCertificateTransferCertificateId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['reject-certificate-transfer'][':certificateId']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['reject-certificate-transfer'][':certificateId']['$patch']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchRejectCertificateTransferCertificateIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutBillingGroupsRemoveThingFromBillingGroupMutationKey() {
  return ['billing-groups', '/billing-groups/removeThingFromBillingGroup', 'PUT'] as const
}

export function getPutBillingGroupsRemoveThingFromBillingGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['billing-groups']['removeThingFromBillingGroup']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBillingGroupsRemoveThingFromBillingGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['billing-groups']['removeThingFromBillingGroup']['$put']
      >,
    ) {
      return parseResponse(client['billing-groups'].removeThingFromBillingGroup.$put(args, options))
    },
  })
}

export function usePutBillingGroupsRemoveThingFromBillingGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['billing-groups']['removeThingFromBillingGroup']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['billing-groups']['removeThingFromBillingGroup']['$put']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutBillingGroupsRemoveThingFromBillingGroupMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutThingGroupsRemoveThingFromThingGroupMutationKey() {
  return ['thing-groups', '/thing-groups/removeThingFromThingGroup', 'PUT'] as const
}

export function getPutThingGroupsRemoveThingFromThingGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['thing-groups']['removeThingFromThingGroup']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['thing-groups']['removeThingFromThingGroup']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutThingGroupsRemoveThingFromThingGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['thing-groups']['removeThingFromThingGroup']['$put']>,
    ) {
      return parseResponse(client['thing-groups'].removeThingFromThingGroup.$put(args, options))
    },
  })
}

export function usePutThingGroupsRemoveThingFromThingGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['thing-groups']['removeThingFromThingGroup']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['thing-groups']['removeThingFromThingGroup']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutThingGroupsRemoveThingFromThingGroupMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostIndicesSearchMutationKey() {
  return ['indices', '/indices/search', 'POST'] as const
}

export function getPostIndicesSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.indices.search.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.indices.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostIndicesSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.indices.search.$post>) {
      return parseResponse(client.indices.search.$post(args, options))
    },
  })
}

export function usePostIndicesSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.indices.search.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.indices.search.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostIndicesSearchMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAuditTasksMutationKey() {
  return ['audit', '/audit/tasks', 'POST'] as const
}

export function getPostAuditTasksMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audit.tasks.$post>>>>>,
    TError,
    InferRequestType<typeof client.audit.tasks.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAuditTasksMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.audit.tasks.$post>) {
      return parseResponse(client.audit.tasks.$post(args, options))
    },
  })
}

export function usePostAuditTasks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audit.tasks.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.audit.tasks.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAuditTasksMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutThingRegistrationTasksTaskIdCancelMutationKey() {
  return ['thing-registration-tasks', '/thing-registration-tasks/:taskId/cancel', 'PUT'] as const
}

export function getPutThingRegistrationTasksTaskIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['thing-registration-tasks'][':taskId']['cancel']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutThingRegistrationTasksTaskIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['thing-registration-tasks'][':taskId']['cancel']['$put']
      >,
    ) {
      return parseResponse(client['thing-registration-tasks'][':taskId'].cancel.$put(args, options))
    },
  })
}

export function usePutThingRegistrationTasksTaskIdCancel<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['thing-registration-tasks'][':taskId']['cancel']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['thing-registration-tasks'][':taskId']['cancel']['$put']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutThingRegistrationTasksTaskIdCancelMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostTagsMutationKey() {
  return ['tags', '/tags', 'POST'] as const
}

export function getPostTagsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$post>>>>>,
    TError,
    InferRequestType<typeof client.tags.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTagsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.tags.$post>) {
      return parseResponse(client.tags.$post(args, options))
    },
  })
}

export function usePostTags<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$post>>>>>,
          TError,
          InferRequestType<typeof client.tags.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTagsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostTestAuthorizationMutationKey() {
  return ['test-authorization', '/test-authorization', 'POST'] as const
}

export function getPostTestAuthorizationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['test-authorization']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['test-authorization']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTestAuthorizationMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['test-authorization']['$post']>) {
      return parseResponse(client['test-authorization'].$post(args, options))
    },
  })
}

export function usePostTestAuthorization<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['test-authorization']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['test-authorization']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTestAuthorizationMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAuthorizerAuthorizerNameTestMutationKey() {
  return ['authorizer', '/authorizer/:authorizerName/test', 'POST'] as const
}

export function getPostAuthorizerAuthorizerNameTestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.authorizer)[':authorizerName']['test']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.authorizer)[':authorizerName']['test']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthorizerAuthorizerNameTestMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.authorizer)[':authorizerName']['test']['$post']>,
    ) {
      return parseResponse(client.authorizer[':authorizerName'].test.$post(args, options))
    },
  })
}

export function usePostAuthorizerAuthorizerNameTest<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.authorizer)[':authorizerName']['test']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.authorizer)[':authorizerName']['test']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAuthorizerAuthorizerNameTestMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchTransferCertificateCertificateIdTargetAwsAccountMutationKey() {
  return [
    'transfer-certificate',
    '/transfer-certificate/:certificateId#targetAwsAccount',
    'PATCH',
  ] as const
}

export function getPatchTransferCertificateCertificateIdTargetAwsAccountMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['transfer-certificate'][':certificateId#targetAwsAccount']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchTransferCertificateCertificateIdTargetAwsAccountMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['transfer-certificate'][':certificateId#targetAwsAccount']['$patch']
      >,
    ) {
      return parseResponse(
        client['transfer-certificate'][':certificateId#targetAwsAccount'].$patch(args, options),
      )
    },
  })
}

export function usePatchTransferCertificateCertificateIdTargetAwsAccount<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['transfer-certificate'][':certificateId#targetAwsAccount']['$patch']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchTransferCertificateCertificateIdTargetAwsAccountMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostUntagMutationKey() {
  return ['untag', '/untag', 'POST'] as const
}

export function getPostUntagMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.untag.$post>>>>>,
    TError,
    InferRequestType<typeof client.untag.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUntagMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.untag.$post>) {
      return parseResponse(client.untag.$post(args, options))
    },
  })
}

export function usePostUntag<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.untag.$post>>>>>,
          TError,
          InferRequestType<typeof client.untag.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUntagMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchAuditSuppressionsUpdateMutationKey() {
  return ['audit', '/audit/suppressions/update', 'PATCH'] as const
}

export function getPatchAuditSuppressionsUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.audit.suppressions.update.$patch>>>
      >
    >,
    TError,
    InferRequestType<typeof client.audit.suppressions.update.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchAuditSuppressionsUpdateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.audit.suppressions.update.$patch>) {
      return parseResponse(client.audit.suppressions.update.$patch(args, options))
    },
  })
}

export function usePatchAuditSuppressionsUpdate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.audit.suppressions.update.$patch>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.audit.suppressions.update.$patch>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchAuditSuppressionsUpdateMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutCertificatesCertificateIdNewStatusMutationKey() {
  return ['certificates', '/certificates/:certificateId#newStatus', 'PUT'] as const
}

export function getPutCertificatesCertificateIdNewStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.certificates)[':certificateId#newStatus']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.certificates)[':certificateId#newStatus']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutCertificatesCertificateIdNewStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.certificates)[':certificateId#newStatus']['$put']>,
    ) {
      return parseResponse(client.certificates[':certificateId#newStatus'].$put(args, options))
    },
  })
}

export function usePutCertificatesCertificateIdNewStatus<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.certificates)[':certificateId#newStatus']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.certificates)[':certificateId#newStatus']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutCertificatesCertificateIdNewStatusMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutThingGroupsUpdateThingGroupsForThingMutationKey() {
  return ['thing-groups', '/thing-groups/updateThingGroupsForThing', 'PUT'] as const
}

export function getPutThingGroupsUpdateThingGroupsForThingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['thing-groups']['updateThingGroupsForThing']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['thing-groups']['updateThingGroupsForThing']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutThingGroupsUpdateThingGroupsForThingMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['thing-groups']['updateThingGroupsForThing']['$put']>,
    ) {
      return parseResponse(client['thing-groups'].updateThingGroupsForThing.$put(args, options))
    },
  })
}

export function usePutThingGroupsUpdateThingGroupsForThing<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['thing-groups']['updateThingGroupsForThing']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['thing-groups']['updateThingGroupsForThing']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutThingGroupsUpdateThingGroupsForThingMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostSecurityProfileBehaviorsValidateMutationKey() {
  return ['security-profile-behaviors', '/security-profile-behaviors/validate', 'POST'] as const
}

export function getPostSecurityProfileBehaviorsValidateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['security-profile-behaviors']['validate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['security-profile-behaviors']['validate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSecurityProfileBehaviorsValidateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['security-profile-behaviors']['validate']['$post']>,
    ) {
      return parseResponse(client['security-profile-behaviors'].validate.$post(args, options))
    },
  })
}

export function usePostSecurityProfileBehaviorsValidate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['security-profile-behaviors']['validate']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['security-profile-behaviors']['validate']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSecurityProfileBehaviorsValidateMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
