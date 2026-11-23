import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/solid-query'
import type {
  UndefinedInitialDataOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/solid-query'
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

export function createPatchAcceptCertificateTransferCertificateId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchAcceptCertificateTransferCertificateIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutBillingGroupsAddThingToBillingGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutBillingGroupsAddThingToBillingGroupMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutThingGroupsAddThingToThingGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutThingGroupsAddThingToThingGroupMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostJobsJobIdTargets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostJobsJobIdTargetsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutTargetPoliciesPolicyName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutTargetPoliciesPolicyNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostTargetPoliciesPolicyName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTargetPoliciesPolicyNameMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutPrincipalPoliciesPolicyNameXAmznIotPrincipal<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutPrincipalPoliciesPolicyNameXAmznIotPrincipalMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeletePrincipalPoliciesPolicyNameXAmznIotPrincipal<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeletePrincipalPoliciesPolicyNameXAmznIotPrincipalMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutSecurityProfilesSecurityProfileNameTargetsSecurityProfileTargetArn<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutSecurityProfilesSecurityProfileNameTargetsSecurityProfileTargetArnMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteSecurityProfilesSecurityProfileNameTargetsSecurityProfileTargetArn<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteSecurityProfilesSecurityProfileNameTargetsSecurityProfileTargetArnMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutThingsThingNamePrincipalsXAmznPrincipal<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutThingsThingNamePrincipalsXAmznPrincipalMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteThingsThingNamePrincipalsXAmznPrincipal<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteThingsThingNamePrincipalsXAmznPrincipalMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutAuditMitigationactionsTasksTaskIdCancel<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAuditMitigationactionsTasksTaskIdCancelMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutAuditTasksTaskIdCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAuditTasksTaskIdCancelMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchCancelCertificateTransferCertificateId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchCancelCertificateTransferCertificateIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutDetectMitigationactionsTasksTaskIdCancel<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutDetectMitigationactionsTasksTaskIdCancelMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutJobsJobIdCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutJobsJobIdCancelMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutThingsThingNameJobsJobIdCancel<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutThingsThingNameJobsJobIdCancelMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDefaultAuthorizerQueryKey(
  args: InferRequestType<(typeof client)['default-authorizer']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['default-authorizer', '/default-authorizer', keyArgs] as const
}

export function getDefaultAuthorizerQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['default-authorizer']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['default-authorizer']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['default-authorizer']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDefaultAuthorizerQueryKey>
  >({
    queryKey: getDefaultAuthorizerQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['default-authorizer'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createDefaultAuthorizer<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['default-authorizer']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['default-authorizer']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['default-authorizer']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getDefaultAuthorizerQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDefaultAuthorizerQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostDefaultAuthorizer<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDefaultAuthorizerMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteDefaultAuthorizer<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteDefaultAuthorizerMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getConfirmdestinationConfirmationTokenQueryKey(
  args: InferRequestType<(typeof client.confirmdestination)[':confirmationToken']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['confirmdestination', '/confirmdestination/:confirmationToken', keyArgs] as const
}

export function getConfirmdestinationConfirmationTokenQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.confirmdestination)[':confirmationToken']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.confirmdestination)[':confirmationToken']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getConfirmdestinationConfirmationTokenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.confirmdestination[':confirmationToken'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createConfirmdestinationConfirmationToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.confirmdestination)[':confirmationToken']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.confirmdestination)[':confirmationToken']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getConfirmdestinationConfirmationTokenQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getConfirmdestinationConfirmationTokenQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostAuditSuppressionsCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAuditSuppressionsCreateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAuthorizerAuthorizerNameQueryKey(
  args: InferRequestType<(typeof client.authorizer)[':authorizerName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['authorizer', '/authorizer/:authorizerName', keyArgs] as const
}

export function getAuthorizerAuthorizerNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.authorizer)[':authorizerName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.authorizer)[':authorizerName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAuthorizerAuthorizerNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.authorizer[':authorizerName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAuthorizerAuthorizerName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.authorizer)[':authorizerName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.authorizer)[':authorizerName']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAuthorizerAuthorizerNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutAuthorizerAuthorizerName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAuthorizerAuthorizerNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostAuthorizerAuthorizerName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAuthorizerAuthorizerNameMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteAuthorizerAuthorizerName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAuthorizerAuthorizerNameMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getBillingGroupsBillingGroupNameQueryKey(
  args: InferRequestType<(typeof client)['billing-groups'][':billingGroupName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['billing-groups', '/billing-groups/:billingGroupName', keyArgs] as const
}

export function getBillingGroupsBillingGroupNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['billing-groups'][':billingGroupName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['billing-groups'][':billingGroupName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBillingGroupsBillingGroupNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['billing-groups'][':billingGroupName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createBillingGroupsBillingGroupName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['billing-groups'][':billingGroupName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['billing-groups'][':billingGroupName']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBillingGroupsBillingGroupNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostBillingGroupsBillingGroupName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBillingGroupsBillingGroupNameMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteBillingGroupsBillingGroupName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteBillingGroupsBillingGroupNameMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchBillingGroupsBillingGroupName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchBillingGroupsBillingGroupNameMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getCertificatesQueryKey(args: InferRequestType<typeof client.certificates.$get>) {
  const { header: _, ...keyArgs } = args
  return ['certificates', '/certificates', keyArgs] as const
}

export function getCertificatesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.certificates.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.certificates.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.certificates.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCertificatesQueryKey>
  >({
    queryKey: getCertificatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.certificates.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCertificates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.certificates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.certificates.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.certificates.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getCertificatesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCertificatesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostCertificates<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.certificates.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.certificates.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCertificatesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getCustomMetricMetricNameQueryKey(
  args: InferRequestType<(typeof client)['custom-metric'][':metricName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['custom-metric', '/custom-metric/:metricName', keyArgs] as const
}

export function getCustomMetricMetricNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['custom-metric'][':metricName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['custom-metric'][':metricName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCustomMetricMetricNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['custom-metric'][':metricName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCustomMetricMetricName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['custom-metric'][':metricName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['custom-metric'][':metricName']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCustomMetricMetricNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostCustomMetricMetricName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCustomMetricMetricNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteCustomMetricMetricName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteCustomMetricMetricNameMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchCustomMetricMetricName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchCustomMetricMetricNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDimensionsNameQueryKey(
  args: InferRequestType<(typeof client.dimensions)[':name']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['dimensions', '/dimensions/:name', keyArgs] as const
}

export function getDimensionsNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.dimensions)[':name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dimensions)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.dimensions)[':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDimensionsNameQueryKey>
  >({
    queryKey: getDimensionsNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dimensions[':name'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createDimensionsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.dimensions)[':name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.dimensions)[':name']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.dimensions)[':name']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getDimensionsNameQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDimensionsNameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostDimensionsName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDimensionsNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteDimensionsName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteDimensionsNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchDimensionsName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchDimensionsNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDomainConfigurationsDomainConfigurationNameQueryKey(
  args: InferRequestType<(typeof client.domainConfigurations)[':domainConfigurationName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    'domainConfigurations',
    '/domainConfigurations/:domainConfigurationName',
    keyArgs,
  ] as const
}

export function getDomainConfigurationsDomainConfigurationNameQueryOptions<
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
  args: InferRequestType<(typeof client.domainConfigurations)[':domainConfigurationName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDomainConfigurationsDomainConfigurationNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.domainConfigurations[':domainConfigurationName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDomainConfigurationsDomainConfigurationName<
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
  args: () => InferRequestType<
    (typeof client.domainConfigurations)[':domainConfigurationName']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getDomainConfigurationsDomainConfigurationNameQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDomainConfigurationsDomainConfigurationNameQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutDomainConfigurationsDomainConfigurationName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutDomainConfigurationsDomainConfigurationNameMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostDomainConfigurationsDomainConfigurationName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDomainConfigurationsDomainConfigurationNameMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteDomainConfigurationsDomainConfigurationName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteDomainConfigurationsDomainConfigurationNameMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostDynamicThingGroupsThingGroupName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDynamicThingGroupsThingGroupNameMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteDynamicThingGroupsThingGroupName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteDynamicThingGroupsThingGroupNameMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchDynamicThingGroupsThingGroupName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchDynamicThingGroupsThingGroupNameMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getFleetMetricMetricNameQueryKey(
  args: InferRequestType<(typeof client)['fleet-metric'][':metricName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['fleet-metric', '/fleet-metric/:metricName', keyArgs] as const
}

export function getFleetMetricMetricNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['fleet-metric'][':metricName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['fleet-metric'][':metricName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getFleetMetricMetricNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['fleet-metric'][':metricName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFleetMetricMetricName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['fleet-metric'][':metricName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['fleet-metric'][':metricName']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getFleetMetricMetricNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutFleetMetricMetricName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutFleetMetricMetricNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteFleetMetricMetricName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteFleetMetricMetricNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchFleetMetricMetricName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchFleetMetricMetricNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getJobsJobIdQueryKey(
  args: InferRequestType<(typeof client.jobs)[':jobId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['jobs', '/jobs/:jobId', keyArgs] as const
}

export function getJobsJobIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':jobId']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.jobs)[':jobId']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':jobId']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getJobsJobIdQueryKey>
  >({
    queryKey: getJobsJobIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.jobs[':jobId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createJobsJobId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':jobId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.jobs)[':jobId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':jobId']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getJobsJobIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getJobsJobIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutJobsJobId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':jobId']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.jobs)[':jobId']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutJobsJobIdMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteJobsJobId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':jobId']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.jobs)[':jobId']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteJobsJobIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchJobsJobId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':jobId']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.jobs)[':jobId']['$patch']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchJobsJobIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getJobTemplatesJobTemplateIdQueryKey(
  args: InferRequestType<(typeof client)['job-templates'][':jobTemplateId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['job-templates', '/job-templates/:jobTemplateId', keyArgs] as const
}

export function getJobTemplatesJobTemplateIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['job-templates'][':jobTemplateId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['job-templates'][':jobTemplateId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getJobTemplatesJobTemplateIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['job-templates'][':jobTemplateId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createJobTemplatesJobTemplateId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['job-templates'][':jobTemplateId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['job-templates'][':jobTemplateId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getJobTemplatesJobTemplateIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutJobTemplatesJobTemplateId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutJobTemplatesJobTemplateIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteJobTemplatesJobTemplateId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteJobTemplatesJobTemplateIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostKeysAndCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostKeysAndCertificateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getMitigationactionsActionsActionNameQueryKey(
  args: InferRequestType<(typeof client.mitigationactions.actions)[':actionName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['mitigationactions', '/mitigationactions/actions/:actionName', keyArgs] as const
}

export function getMitigationactionsActionsActionNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mitigationactions.actions)[':actionName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.mitigationactions.actions)[':actionName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMitigationactionsActionsActionNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mitigationactions.actions[':actionName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMitigationactionsActionsActionName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mitigationactions.actions)[':actionName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.mitigationactions.actions)[':actionName']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getMitigationactionsActionsActionNameQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getMitigationactionsActionsActionNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostMitigationactionsActionsActionName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMitigationactionsActionsActionNameMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteMitigationactionsActionsActionName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteMitigationactionsActionsActionNameMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchMitigationactionsActionsActionName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchMitigationactionsActionsActionNameMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getOtaUpdatesOtaUpdateIdQueryKey(
  args: InferRequestType<(typeof client.otaUpdates)[':otaUpdateId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['otaUpdates', '/otaUpdates/:otaUpdateId', keyArgs] as const
}

export function getOtaUpdatesOtaUpdateIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.otaUpdates)[':otaUpdateId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.otaUpdates)[':otaUpdateId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOtaUpdatesOtaUpdateIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.otaUpdates[':otaUpdateId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOtaUpdatesOtaUpdateId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.otaUpdates)[':otaUpdateId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.otaUpdates)[':otaUpdateId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOtaUpdatesOtaUpdateIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostOtaUpdatesOtaUpdateId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOtaUpdatesOtaUpdateIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteOtaUpdatesOtaUpdateId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteOtaUpdatesOtaUpdateIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPoliciesPolicyNameQueryKey(
  args: InferRequestType<(typeof client.policies)[':policyName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['policies', '/policies/:policyName', keyArgs] as const
}

export function getPoliciesPolicyNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.policies)[':policyName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.policies)[':policyName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.policies)[':policyName']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPoliciesPolicyNameQueryKey>
  >({
    queryKey: getPoliciesPolicyNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.policies[':policyName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPoliciesPolicyName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.policies)[':policyName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.policies)[':policyName']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.policies)[':policyName']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPoliciesPolicyNameQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPoliciesPolicyNameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostPoliciesPolicyName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPoliciesPolicyNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeletePoliciesPolicyName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeletePoliciesPolicyNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPoliciesPolicyNameVersionQueryKey(
  args: InferRequestType<(typeof client.policies)[':policyName']['version']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['policies', '/policies/:policyName/version', keyArgs] as const
}

export function getPoliciesPolicyNameVersionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.policies)[':policyName']['version']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.policies)[':policyName']['version']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getPoliciesPolicyNameVersionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.policies[':policyName'].version.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPoliciesPolicyNameVersion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.policies)[':policyName']['version']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.policies)[':policyName']['version']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getPoliciesPolicyNameVersionQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostPoliciesPolicyNameVersion<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPoliciesPolicyNameVersionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostProvisioningTemplatesTemplateNameProvisioningClaim<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostProvisioningTemplatesTemplateNameProvisioningClaimMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getProvisioningTemplatesQueryKey(
  args: InferRequestType<(typeof client)['provisioning-templates']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['provisioning-templates', '/provisioning-templates', keyArgs] as const
}

export function getProvisioningTemplatesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['provisioning-templates']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['provisioning-templates']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['provisioning-templates']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProvisioningTemplatesQueryKey>
  >({
    queryKey: getProvisioningTemplatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['provisioning-templates'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProvisioningTemplates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['provisioning-templates']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['provisioning-templates']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['provisioning-templates']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getProvisioningTemplatesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getProvisioningTemplatesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostProvisioningTemplates<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostProvisioningTemplatesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getProvisioningTemplatesTemplateNameVersionsQueryKey(
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

export function getProvisioningTemplatesTemplateNameVersionsQueryOptions<
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
  args: InferRequestType<
    (typeof client)['provisioning-templates'][':templateName']['versions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getProvisioningTemplatesTemplateNameVersionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['provisioning-templates'][':templateName'].versions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProvisioningTemplatesTemplateNameVersions<
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
  args: () => InferRequestType<
    (typeof client)['provisioning-templates'][':templateName']['versions']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getProvisioningTemplatesTemplateNameVersionsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostProvisioningTemplatesTemplateNameVersions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostProvisioningTemplatesTemplateNameVersionsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getRoleAliasesRoleAliasQueryKey(
  args: InferRequestType<(typeof client)['role-aliases'][':roleAlias']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['role-aliases', '/role-aliases/:roleAlias', keyArgs] as const
}

export function getRoleAliasesRoleAliasQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['role-aliases'][':roleAlias']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['role-aliases'][':roleAlias']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRoleAliasesRoleAliasQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['role-aliases'][':roleAlias'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRoleAliasesRoleAlias<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['role-aliases'][':roleAlias']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['role-aliases'][':roleAlias']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getRoleAliasesRoleAliasQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutRoleAliasesRoleAlias<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutRoleAliasesRoleAliasMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostRoleAliasesRoleAlias<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRoleAliasesRoleAliasMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteRoleAliasesRoleAlias<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteRoleAliasesRoleAliasMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAuditScheduledauditsScheduledAuditNameQueryKey(
  args: InferRequestType<(typeof client.audit.scheduledaudits)[':scheduledAuditName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['audit', '/audit/scheduledaudits/:scheduledAuditName', keyArgs] as const
}

export function getAuditScheduledauditsScheduledAuditNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.audit.scheduledaudits)[':scheduledAuditName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.audit.scheduledaudits)[':scheduledAuditName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAuditScheduledauditsScheduledAuditNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.audit.scheduledaudits[':scheduledAuditName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAuditScheduledauditsScheduledAuditName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.audit.scheduledaudits)[':scheduledAuditName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.audit.scheduledaudits)[':scheduledAuditName']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getAuditScheduledauditsScheduledAuditNameQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAuditScheduledauditsScheduledAuditNameQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostAuditScheduledauditsScheduledAuditName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAuditScheduledauditsScheduledAuditNameMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteAuditScheduledauditsScheduledAuditName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAuditScheduledauditsScheduledAuditNameMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchAuditScheduledauditsScheduledAuditName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchAuditScheduledauditsScheduledAuditNameMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSecurityProfilesSecurityProfileNameQueryKey(
  args: InferRequestType<(typeof client)['security-profiles'][':securityProfileName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['security-profiles', '/security-profiles/:securityProfileName', keyArgs] as const
}

export function getSecurityProfilesSecurityProfileNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['security-profiles'][':securityProfileName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['security-profiles'][':securityProfileName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSecurityProfilesSecurityProfileNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['security-profiles'][':securityProfileName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSecurityProfilesSecurityProfileName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['security-profiles'][':securityProfileName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['security-profiles'][':securityProfileName']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getSecurityProfilesSecurityProfileNameQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSecurityProfilesSecurityProfileNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostSecurityProfilesSecurityProfileName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSecurityProfilesSecurityProfileNameMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteSecurityProfilesSecurityProfileName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteSecurityProfilesSecurityProfileNameMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchSecurityProfilesSecurityProfileName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchSecurityProfilesSecurityProfileNameMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getStreamsStreamIdQueryKey(
  args: InferRequestType<(typeof client.streams)[':streamId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['streams', '/streams/:streamId', keyArgs] as const
}

export function getStreamsStreamIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.streams)[':streamId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.streams)[':streamId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.streams)[':streamId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStreamsStreamIdQueryKey>
  >({
    queryKey: getStreamsStreamIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.streams[':streamId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStreamsStreamId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.streams)[':streamId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.streams)[':streamId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.streams)[':streamId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStreamsStreamIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getStreamsStreamIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutStreamsStreamId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutStreamsStreamIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostStreamsStreamId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostStreamsStreamIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteStreamsStreamId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteStreamsStreamIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getThingsThingNameQueryKey(
  args: InferRequestType<(typeof client.things)[':thingName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['things', '/things/:thingName', keyArgs] as const
}

export function getThingsThingNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.things)[':thingName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.things)[':thingName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.things)[':thingName']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getThingsThingNameQueryKey>
  >({
    queryKey: getThingsThingNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.things[':thingName'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createThingsThingName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.things)[':thingName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.things)[':thingName']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.things)[':thingName']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getThingsThingNameQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getThingsThingNameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostThingsThingName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostThingsThingNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteThingsThingName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteThingsThingNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchThingsThingName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchThingsThingNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getThingGroupsThingGroupNameQueryKey(
  args: InferRequestType<(typeof client)['thing-groups'][':thingGroupName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['thing-groups', '/thing-groups/:thingGroupName', keyArgs] as const
}

export function getThingGroupsThingGroupNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['thing-groups'][':thingGroupName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['thing-groups'][':thingGroupName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getThingGroupsThingGroupNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['thing-groups'][':thingGroupName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createThingGroupsThingGroupName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['thing-groups'][':thingGroupName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['thing-groups'][':thingGroupName']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getThingGroupsThingGroupNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostThingGroupsThingGroupName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostThingGroupsThingGroupNameMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteThingGroupsThingGroupName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteThingGroupsThingGroupNameMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchThingGroupsThingGroupName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchThingGroupsThingGroupNameMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getThingTypesThingTypeNameQueryKey(
  args: InferRequestType<(typeof client)['thing-types'][':thingTypeName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['thing-types', '/thing-types/:thingTypeName', keyArgs] as const
}

export function getThingTypesThingTypeNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['thing-types'][':thingTypeName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['thing-types'][':thingTypeName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getThingTypesThingTypeNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['thing-types'][':thingTypeName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createThingTypesThingTypeName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['thing-types'][':thingTypeName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['thing-types'][':thingTypeName']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getThingTypesThingTypeNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostThingTypesThingTypeName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostThingTypesThingTypeNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteThingTypesThingTypeName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteThingTypesThingTypeNameMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getRulesRuleNameQueryKey(
  args: InferRequestType<(typeof client.rules)[':ruleName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['rules', '/rules/:ruleName', keyArgs] as const
}

export function getRulesRuleNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.rules)[':ruleName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.rules)[':ruleName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.rules)[':ruleName']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRulesRuleNameQueryKey>
  >({
    queryKey: getRulesRuleNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.rules[':ruleName'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createRulesRuleName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.rules)[':ruleName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.rules)[':ruleName']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.rules)[':ruleName']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRulesRuleNameQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRulesRuleNameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostRulesRuleName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.rules)[':ruleName']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.rules)[':ruleName']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRulesRuleNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteRulesRuleName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteRulesRuleNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchRulesRuleName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchRulesRuleNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDestinationsQueryKey(args: InferRequestType<typeof client.destinations.$get>) {
  const { header: _, ...keyArgs } = args
  return ['destinations', '/destinations', keyArgs] as const
}

export function getDestinationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.destinations.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.destinations.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.destinations.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDestinationsQueryKey>
  >({
    queryKey: getDestinationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.destinations.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createDestinations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.destinations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.destinations.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.destinations.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getDestinationsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDestinationsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostDestinations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.destinations.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.destinations.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDestinationsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchDestinations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.destinations.$patch>>>>
          >,
          TError,
          InferRequestType<typeof client.destinations.$patch>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchDestinationsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAuditConfigurationQueryKey(
  args: InferRequestType<typeof client.audit.configuration.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['audit', '/audit/configuration', keyArgs] as const
}

export function getAuditConfigurationQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audit.configuration.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.audit.configuration.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audit.configuration.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAuditConfigurationQueryKey>
  >({
    queryKey: getAuditConfigurationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.audit.configuration.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAuditConfiguration<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audit.configuration.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.audit.configuration.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.audit.configuration.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAuditConfigurationQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAuditConfigurationQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createDeleteAuditConfiguration<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.audit.configuration.$delete>>>
            >
          >,
          TError,
          InferRequestType<typeof client.audit.configuration.$delete>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAuditConfigurationMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchAuditConfiguration<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.audit.configuration.$patch>>>
            >
          >,
          TError,
          InferRequestType<typeof client.audit.configuration.$patch>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchAuditConfigurationMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostAuditSuppressionsDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAuditSuppressionsDeleteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getCacertificateCaCertificateIdQueryKey(
  args: InferRequestType<(typeof client.cacertificate)[':caCertificateId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['cacertificate', '/cacertificate/:caCertificateId', keyArgs] as const
}

export function getCacertificateCaCertificateIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cacertificate)[':caCertificateId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cacertificate)[':caCertificateId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCacertificateCaCertificateIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.cacertificate[':caCertificateId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCacertificateCaCertificateId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cacertificate)[':caCertificateId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.cacertificate)[':caCertificateId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCacertificateCaCertificateIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutCacertificateCaCertificateId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutCacertificateCaCertificateIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteCacertificateCaCertificateId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteCacertificateCaCertificateIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getCertificatesCertificateIdQueryKey(
  args: InferRequestType<(typeof client.certificates)[':certificateId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['certificates', '/certificates/:certificateId', keyArgs] as const
}

export function getCertificatesCertificateIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.certificates)[':certificateId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.certificates)[':certificateId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCertificatesCertificateIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.certificates[':certificateId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCertificatesCertificateId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.certificates)[':certificateId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.certificates)[':certificateId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCertificatesCertificateIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDeleteCertificatesCertificateId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteCertificatesCertificateIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteThingsThingNameJobsJobIdExecutionNumberExecutionNumber<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteThingsThingNameJobsJobIdExecutionNumberExecutionNumberMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPoliciesPolicyNameVersionPolicyVersionIdQueryKey(
  args: InferRequestType<
    (typeof client.policies)[':policyName']['version'][':policyVersionId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['policies', '/policies/:policyName/version/:policyVersionId', keyArgs] as const
}

export function getPoliciesPolicyNameVersionPolicyVersionIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.policies)[':policyName']['version'][':policyVersionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getPoliciesPolicyNameVersionPolicyVersionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.policies[':policyName'].version[':policyVersionId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPoliciesPolicyNameVersionPolicyVersionId<
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
  args: () => InferRequestType<
    (typeof client.policies)[':policyName']['version'][':policyVersionId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getPoliciesPolicyNameVersionPolicyVersionIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createDeletePoliciesPolicyNameVersionPolicyVersionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeletePoliciesPolicyNameVersionPolicyVersionIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchPoliciesPolicyNameVersionPolicyVersionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchPoliciesPolicyNameVersionPolicyVersionIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getProvisioningTemplatesTemplateNameQueryKey(
  args: InferRequestType<(typeof client)['provisioning-templates'][':templateName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['provisioning-templates', '/provisioning-templates/:templateName', keyArgs] as const
}

export function getProvisioningTemplatesTemplateNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['provisioning-templates'][':templateName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['provisioning-templates'][':templateName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getProvisioningTemplatesTemplateNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['provisioning-templates'][':templateName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProvisioningTemplatesTemplateName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['provisioning-templates'][':templateName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['provisioning-templates'][':templateName']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getProvisioningTemplatesTemplateNameQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getProvisioningTemplatesTemplateNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDeleteProvisioningTemplatesTemplateName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteProvisioningTemplatesTemplateNameMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchProvisioningTemplatesTemplateName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchProvisioningTemplatesTemplateNameMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getProvisioningTemplatesTemplateNameVersionsVersionIdQueryKey(
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

export function getProvisioningTemplatesTemplateNameVersionsVersionIdQueryOptions<
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
  args: InferRequestType<
    (typeof client)['provisioning-templates'][':templateName']['versions'][':versionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getProvisioningTemplatesTemplateNameVersionsVersionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['provisioning-templates'][':templateName'].versions[':versionId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProvisioningTemplatesTemplateNameVersionsVersionId<
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
  args: () => InferRequestType<
    (typeof client)['provisioning-templates'][':templateName']['versions'][':versionId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getProvisioningTemplatesTemplateNameVersionsVersionIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createDeleteProvisioningTemplatesTemplateNameVersionsVersionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteProvisioningTemplatesTemplateNameVersionsVersionIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getRegistrationcodeQueryKey(
  args: InferRequestType<typeof client.registrationcode.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['registrationcode', '/registrationcode', keyArgs] as const
}

export function getRegistrationcodeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.registrationcode.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.registrationcode.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.registrationcode.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRegistrationcodeQueryKey>
  >({
    queryKey: getRegistrationcodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.registrationcode.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createRegistrationcode<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.registrationcode.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.registrationcode.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.registrationcode.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRegistrationcodeQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRegistrationcodeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createDeleteRegistrationcode<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.registrationcode.$delete>>>
            >
          >,
          TError,
          InferRequestType<typeof client.registrationcode.$delete>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteRegistrationcodeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDestinationsArnQueryKey(
  args: InferRequestType<(typeof client.destinations)[':arn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['destinations', '/destinations/:arn', keyArgs] as const
}

export function getDestinationsArnQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.destinations)[':arn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.destinations)[':arn']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.destinations)[':arn']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDestinationsArnQueryKey>
  >({
    queryKey: getDestinationsArnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.destinations[':arn'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createDestinationsArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.destinations)[':arn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.destinations)[':arn']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.destinations)[':arn']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getDestinationsArnQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDestinationsArnQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createDeleteDestinationsArn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteDestinationsArnMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteV2LoggingLevelTargetTypeTargetName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV2LoggingLevelTargetTypeTargetNameMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostThingTypesThingTypeNameDeprecate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostThingTypesThingTypeNameDeprecateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAuditFindingsFindingIdQueryKey(
  args: InferRequestType<(typeof client.audit.findings)[':findingId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['audit', '/audit/findings/:findingId', keyArgs] as const
}

export function getAuditFindingsFindingIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.audit.findings)[':findingId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.audit.findings)[':findingId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAuditFindingsFindingIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.audit.findings[':findingId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAuditFindingsFindingId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.audit.findings)[':findingId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.audit.findings)[':findingId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAuditFindingsFindingIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAuditMitigationactionsTasksTaskIdQueryKey(
  args: InferRequestType<(typeof client.audit.mitigationactions.tasks)[':taskId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['audit', '/audit/mitigationactions/tasks/:taskId', keyArgs] as const
}

export function getAuditMitigationactionsTasksTaskIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.audit.mitigationactions.tasks)[':taskId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.audit.mitigationactions.tasks)[':taskId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAuditMitigationactionsTasksTaskIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.audit.mitigationactions.tasks[':taskId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAuditMitigationactionsTasksTaskId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.audit.mitigationactions.tasks)[':taskId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.audit.mitigationactions.tasks)[':taskId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getAuditMitigationactionsTasksTaskIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAuditMitigationactionsTasksTaskIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostAuditMitigationactionsTasksTaskId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAuditMitigationactionsTasksTaskIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostAuditSuppressionsDescribe<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAuditSuppressionsDescribeMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAuditTasksTaskIdQueryKey(
  args: InferRequestType<(typeof client.audit.tasks)[':taskId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['audit', '/audit/tasks/:taskId', keyArgs] as const
}

export function getAuditTasksTaskIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.audit.tasks)[':taskId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.audit.tasks)[':taskId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.audit.tasks)[':taskId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAuditTasksTaskIdQueryKey>
  >({
    queryKey: getAuditTasksTaskIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.audit.tasks[':taskId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAuditTasksTaskId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.audit.tasks)[':taskId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.audit.tasks)[':taskId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.audit.tasks)[':taskId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAuditTasksTaskIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAuditTasksTaskIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDetectMitigationactionsTasksTaskIdQueryKey(
  args: InferRequestType<(typeof client.detect.mitigationactions.tasks)[':taskId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['detect', '/detect/mitigationactions/tasks/:taskId', keyArgs] as const
}

export function getDetectMitigationactionsTasksTaskIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.detect.mitigationactions.tasks)[':taskId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.detect.mitigationactions.tasks)[':taskId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDetectMitigationactionsTasksTaskIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.detect.mitigationactions.tasks[':taskId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDetectMitigationactionsTasksTaskId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.detect.mitigationactions.tasks)[':taskId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.detect.mitigationactions.tasks)[':taskId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getDetectMitigationactionsTasksTaskIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDetectMitigationactionsTasksTaskIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutDetectMitigationactionsTasksTaskId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutDetectMitigationactionsTasksTaskIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getEndpointQueryKey(args: InferRequestType<typeof client.endpoint.$get>) {
  const { header: _, ...keyArgs } = args
  return ['endpoint', '/endpoint', keyArgs] as const
}

export function getEndpointQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.endpoint.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.endpoint.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.endpoint.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEndpointQueryKey>
  >({
    queryKey: getEndpointQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.endpoint.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createEndpoint<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.endpoint.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.endpoint.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.endpoint.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getEndpointQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEndpointQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getEventConfigurationsQueryKey(
  args: InferRequestType<(typeof client)['event-configurations']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['event-configurations', '/event-configurations', keyArgs] as const
}

export function getEventConfigurationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['event-configurations']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['event-configurations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['event-configurations']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEventConfigurationsQueryKey>
  >({
    queryKey: getEventConfigurationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['event-configurations'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEventConfigurations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['event-configurations']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['event-configurations']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['event-configurations']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getEventConfigurationsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEventConfigurationsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPatchEventConfigurations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchEventConfigurationsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getIndicesIndexNameQueryKey(
  args: InferRequestType<(typeof client.indices)[':indexName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['indices', '/indices/:indexName', keyArgs] as const
}

export function getIndicesIndexNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.indices)[':indexName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.indices)[':indexName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.indices)[':indexName']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndicesIndexNameQueryKey>
  >({
    queryKey: getIndicesIndexNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.indices[':indexName'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createIndicesIndexName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.indices)[':indexName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.indices)[':indexName']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.indices)[':indexName']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getIndicesIndexNameQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getIndicesIndexNameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getThingsThingNameJobsJobIdQueryKey(
  args: InferRequestType<(typeof client.things)[':thingName']['jobs'][':jobId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['things', '/things/:thingName/jobs/:jobId', keyArgs] as const
}

export function getThingsThingNameJobsJobIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.things)[':thingName']['jobs'][':jobId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.things)[':thingName']['jobs'][':jobId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getThingsThingNameJobsJobIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.things[':thingName'].jobs[':jobId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createThingsThingNameJobsJobId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.things)[':thingName']['jobs'][':jobId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.things)[':thingName']['jobs'][':jobId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getThingsThingNameJobsJobIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getManagedJobTemplatesTemplateNameQueryKey(
  args: InferRequestType<(typeof client)['managed-job-templates'][':templateName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['managed-job-templates', '/managed-job-templates/:templateName', keyArgs] as const
}

export function getManagedJobTemplatesTemplateNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['managed-job-templates'][':templateName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['managed-job-templates'][':templateName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getManagedJobTemplatesTemplateNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['managed-job-templates'][':templateName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createManagedJobTemplatesTemplateName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['managed-job-templates'][':templateName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['managed-job-templates'][':templateName']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getManagedJobTemplatesTemplateNameQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getManagedJobTemplatesTemplateNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getThingRegistrationTasksTaskIdQueryKey(
  args: InferRequestType<(typeof client)['thing-registration-tasks'][':taskId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['thing-registration-tasks', '/thing-registration-tasks/:taskId', keyArgs] as const
}

export function getThingRegistrationTasksTaskIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['thing-registration-tasks'][':taskId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['thing-registration-tasks'][':taskId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getThingRegistrationTasksTaskIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['thing-registration-tasks'][':taskId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createThingRegistrationTasksTaskId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['thing-registration-tasks'][':taskId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['thing-registration-tasks'][':taskId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getThingRegistrationTasksTaskIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostRulesRuleNameDisable<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRulesRuleNameDisableMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostRulesRuleNameEnable<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRulesRuleNameEnableMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getBehaviorModelTrainingSummariesQueryKey(
  args: InferRequestType<(typeof client)['behavior-model-training']['summaries']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['behavior-model-training', '/behavior-model-training/summaries', keyArgs] as const
}

export function getBehaviorModelTrainingSummariesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['behavior-model-training']['summaries']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['behavior-model-training']['summaries']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBehaviorModelTrainingSummariesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['behavior-model-training'].summaries.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createBehaviorModelTrainingSummaries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['behavior-model-training']['summaries']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['behavior-model-training']['summaries']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBehaviorModelTrainingSummariesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostIndicesBuckets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.indices.buckets.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.indices.buckets.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostIndicesBucketsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostIndicesCardinality<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.indices.cardinality.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.indices.cardinality.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostIndicesCardinalityMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostEffectivePolicies<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostEffectivePoliciesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getIndexingConfigQueryKey(
  args: InferRequestType<typeof client.indexing.config.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['indexing', '/indexing/config', keyArgs] as const
}

export function getIndexingConfigQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.indexing.config.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.indexing.config.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.indexing.config.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getIndexingConfigQueryKey>
  >({
    queryKey: getIndexingConfigQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.indexing.config.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createIndexingConfig<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.indexing.config.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.indexing.config.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.indexing.config.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getIndexingConfigQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getIndexingConfigQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostIndexingConfig<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.indexing.config.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.indexing.config.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostIndexingConfigMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getJobsJobIdJobDocumentQueryKey(
  args: InferRequestType<(typeof client.jobs)[':jobId']['job-document']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['jobs', '/jobs/:jobId/job-document', keyArgs] as const
}

export function getJobsJobIdJobDocumentQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.jobs)[':jobId']['job-document']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.jobs)[':jobId']['job-document']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getJobsJobIdJobDocumentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.jobs[':jobId']['job-document'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createJobsJobIdJobDocument<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.jobs)[':jobId']['job-document']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.jobs)[':jobId']['job-document']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getJobsJobIdJobDocumentQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getLoggingOptionsQueryKey(
  args: InferRequestType<typeof client.loggingOptions.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['loggingOptions', '/loggingOptions', keyArgs] as const
}

export function getLoggingOptionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.loggingOptions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.loggingOptions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.loggingOptions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLoggingOptionsQueryKey>
  >({
    queryKey: getLoggingOptionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.loggingOptions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createLoggingOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.loggingOptions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.loggingOptions.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.loggingOptions.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getLoggingOptionsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLoggingOptionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostLoggingOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.loggingOptions.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.loggingOptions.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostLoggingOptionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostIndicesPercentiles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.indices.percentiles.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.indices.percentiles.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostIndicesPercentilesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostIndicesStatistics<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.indices.statistics.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.indices.statistics.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostIndicesStatisticsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV2LoggingOptionsQueryKey(
  args: InferRequestType<typeof client.v2LoggingOptions.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2LoggingOptions', '/v2LoggingOptions', keyArgs] as const
}

export function getV2LoggingOptionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2LoggingOptions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2LoggingOptions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2LoggingOptions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2LoggingOptionsQueryKey>
  >({
    queryKey: getV2LoggingOptionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2LoggingOptions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV2LoggingOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2LoggingOptions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2LoggingOptions.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2LoggingOptions.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV2LoggingOptionsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2LoggingOptionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostV2LoggingOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2LoggingOptions.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v2LoggingOptions.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2LoggingOptionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getActiveViolationsQueryKey(
  args: InferRequestType<(typeof client)['active-violations']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['active-violations', '/active-violations', keyArgs] as const
}

export function getActiveViolationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['active-violations']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['active-violations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['active-violations']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActiveViolationsQueryKey>
  >({
    queryKey: getActiveViolationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['active-violations'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createActiveViolations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['active-violations']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['active-violations']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['active-violations']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getActiveViolationsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getActiveViolationsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostAttachedPoliciesTarget<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAttachedPoliciesTargetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostAuditFindings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.audit.findings.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.audit.findings.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAuditFindingsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAuditMitigationactionsExecutionsTaskIdFindingIdQueryKey(
  args: InferRequestType<
    (typeof client.audit.mitigationactions)['executions#taskId&findingId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['audit', '/audit/mitigationactions/executions#taskId&findingId', keyArgs] as const
}

export function getAuditMitigationactionsExecutionsTaskIdFindingIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.audit.mitigationactions)['executions#taskId&findingId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAuditMitigationactionsExecutionsTaskIdFindingIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.audit.mitigationactions['executions#taskId&findingId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAuditMitigationactionsExecutionsTaskIdFindingId<
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
  args: () => InferRequestType<
    (typeof client.audit.mitigationactions)['executions#taskId&findingId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAuditMitigationactionsExecutionsTaskIdFindingIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getAuditMitigationactionsTasksStartTimeEndTimeQueryKey(
  args: InferRequestType<
    (typeof client.audit.mitigationactions)['tasks#startTime&endTime']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['audit', '/audit/mitigationactions/tasks#startTime&endTime', keyArgs] as const
}

export function getAuditMitigationactionsTasksStartTimeEndTimeQueryOptions<
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
  args: InferRequestType<
    (typeof client.audit.mitigationactions)['tasks#startTime&endTime']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAuditMitigationactionsTasksStartTimeEndTimeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.audit.mitigationactions['tasks#startTime&endTime'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAuditMitigationactionsTasksStartTimeEndTime<
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
  args: () => InferRequestType<
    (typeof client.audit.mitigationactions)['tasks#startTime&endTime']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getAuditMitigationactionsTasksStartTimeEndTimeQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAuditMitigationactionsTasksStartTimeEndTimeQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostAuditSuppressionsList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.audit.suppressions.list.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.audit.suppressions.list.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAuditSuppressionsListMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAuditTasksStartTimeEndTimeQueryKey(
  args: InferRequestType<(typeof client.audit)['tasks#startTime&endTime']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['audit', '/audit/tasks#startTime&endTime', keyArgs] as const
}

export function getAuditTasksStartTimeEndTimeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.audit)['tasks#startTime&endTime']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.audit)['tasks#startTime&endTime']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAuditTasksStartTimeEndTimeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.audit['tasks#startTime&endTime'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAuditTasksStartTimeEndTime<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.audit)['tasks#startTime&endTime']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.audit)['tasks#startTime&endTime']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAuditTasksStartTimeEndTimeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAuthorizersIndexQueryKey(
  args: InferRequestType<typeof client.authorizers.index.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['authorizers', '/authorizers/', keyArgs] as const
}

export function getAuthorizersIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authorizers.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.authorizers.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authorizers.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAuthorizersIndexQueryKey>
  >({
    queryKey: getAuthorizersIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.authorizers.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAuthorizersIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authorizers.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.authorizers.index.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.authorizers.index.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAuthorizersIndexQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAuthorizersIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getBillingGroupsQueryKey(
  args: InferRequestType<(typeof client)['billing-groups']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['billing-groups', '/billing-groups', keyArgs] as const
}

export function getBillingGroupsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['billing-groups']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['billing-groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['billing-groups']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBillingGroupsQueryKey>
  >({
    queryKey: getBillingGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['billing-groups'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createBillingGroups<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['billing-groups']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['billing-groups']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['billing-groups']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getBillingGroupsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBillingGroupsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getCacertificatesQueryKey(
  args: InferRequestType<typeof client.cacertificates.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['cacertificates', '/cacertificates', keyArgs] as const
}

export function getCacertificatesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cacertificates.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.cacertificates.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cacertificates.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCacertificatesQueryKey>
  >({
    queryKey: getCacertificatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.cacertificates.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCacertificates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cacertificates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.cacertificates.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cacertificates.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getCacertificatesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCacertificatesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getCertificatesByCaCaCertificateIdQueryKey(
  args: InferRequestType<(typeof client)['certificates-by-ca'][':caCertificateId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['certificates-by-ca', '/certificates-by-ca/:caCertificateId', keyArgs] as const
}

export function getCertificatesByCaCaCertificateIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['certificates-by-ca'][':caCertificateId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['certificates-by-ca'][':caCertificateId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCertificatesByCaCaCertificateIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['certificates-by-ca'][':caCertificateId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCertificatesByCaCaCertificateId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['certificates-by-ca'][':caCertificateId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['certificates-by-ca'][':caCertificateId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getCertificatesByCaCaCertificateIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCertificatesByCaCaCertificateIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCustomMetricsQueryKey(
  args: InferRequestType<(typeof client)['custom-metrics']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['custom-metrics', '/custom-metrics', keyArgs] as const
}

export function getCustomMetricsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['custom-metrics']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['custom-metrics']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['custom-metrics']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomMetricsQueryKey>
  >({
    queryKey: getCustomMetricsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['custom-metrics'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCustomMetrics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['custom-metrics']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['custom-metrics']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['custom-metrics']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCustomMetricsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCustomMetricsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDetectMitigationactionsExecutionsQueryKey(
  args: InferRequestType<typeof client.detect.mitigationactions.executions.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['detect', '/detect/mitigationactions/executions', keyArgs] as const
}

export function getDetectMitigationactionsExecutionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.detect.mitigationactions.executions.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.detect.mitigationactions.executions.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDetectMitigationactionsExecutionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.detect.mitigationactions.executions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDetectMitigationactionsExecutions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.detect.mitigationactions.executions.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.detect.mitigationactions.executions.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDetectMitigationactionsExecutionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDetectMitigationactionsTasksStartTimeEndTimeQueryKey(
  args: InferRequestType<
    (typeof client.detect.mitigationactions)['tasks#startTime&endTime']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['detect', '/detect/mitigationactions/tasks#startTime&endTime', keyArgs] as const
}

export function getDetectMitigationactionsTasksStartTimeEndTimeQueryOptions<
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
  args: InferRequestType<
    (typeof client.detect.mitigationactions)['tasks#startTime&endTime']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDetectMitigationactionsTasksStartTimeEndTimeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.detect.mitigationactions['tasks#startTime&endTime'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDetectMitigationactionsTasksStartTimeEndTime<
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
  args: () => InferRequestType<
    (typeof client.detect.mitigationactions)['tasks#startTime&endTime']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getDetectMitigationactionsTasksStartTimeEndTimeQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDetectMitigationactionsTasksStartTimeEndTimeQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getDimensionsQueryKey(args: InferRequestType<typeof client.dimensions.$get>) {
  const { header: _, ...keyArgs } = args
  return ['dimensions', '/dimensions', keyArgs] as const
}

export function getDimensionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dimensions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.dimensions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dimensions.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDimensionsQueryKey>
  >({
    queryKey: getDimensionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dimensions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createDimensions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dimensions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.dimensions.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dimensions.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getDimensionsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDimensionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDomainConfigurationsQueryKey(
  args: InferRequestType<typeof client.domainConfigurations.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['domainConfigurations', '/domainConfigurations', keyArgs] as const
}

export function getDomainConfigurationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domainConfigurations.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.domainConfigurations.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domainConfigurations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDomainConfigurationsQueryKey>
  >({
    queryKey: getDomainConfigurationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.domainConfigurations.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createDomainConfigurations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domainConfigurations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.domainConfigurations.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.domainConfigurations.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getDomainConfigurationsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDomainConfigurationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getFleetMetricsQueryKey(
  args: InferRequestType<(typeof client)['fleet-metrics']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['fleet-metrics', '/fleet-metrics', keyArgs] as const
}

export function getFleetMetricsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['fleet-metrics']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['fleet-metrics']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['fleet-metrics']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFleetMetricsQueryKey>
  >({
    queryKey: getFleetMetricsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['fleet-metrics'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createFleetMetrics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['fleet-metrics']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['fleet-metrics']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['fleet-metrics']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getFleetMetricsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFleetMetricsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getIndicesQueryKey(args: InferRequestType<typeof client.indices.$get>) {
  const { header: _, ...keyArgs } = args
  return ['indices', '/indices', keyArgs] as const
}

export function getIndicesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.indices.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.indices.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.indices.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getIndicesQueryKey>
  >({
    queryKey: getIndicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.indices.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createIndices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.indices.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.indices.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.indices.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getIndicesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getIndicesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getJobsJobIdThingsQueryKey(
  args: InferRequestType<(typeof client.jobs)[':jobId']['things']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['jobs', '/jobs/:jobId/things', keyArgs] as const
}

export function getJobsJobIdThingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':jobId']['things']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.jobs)[':jobId']['things']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':jobId']['things']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getJobsJobIdThingsQueryKey>
  >({
    queryKey: getJobsJobIdThingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.jobs[':jobId'].things.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createJobsJobIdThings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':jobId']['things']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.jobs)[':jobId']['things']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.jobs)[':jobId']['things']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getJobsJobIdThingsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getJobsJobIdThingsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getThingsThingNameJobsQueryKey(
  args: InferRequestType<(typeof client.things)[':thingName']['jobs']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['things', '/things/:thingName/jobs', keyArgs] as const
}

export function getThingsThingNameJobsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.things)[':thingName']['jobs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.things)[':thingName']['jobs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getThingsThingNameJobsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.things[':thingName'].jobs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createThingsThingNameJobs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.things)[':thingName']['jobs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.things)[':thingName']['jobs']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getThingsThingNameJobsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getJobTemplatesQueryKey(
  args: InferRequestType<(typeof client)['job-templates']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['job-templates', '/job-templates', keyArgs] as const
}

export function getJobTemplatesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['job-templates']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['job-templates']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['job-templates']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getJobTemplatesQueryKey>
  >({
    queryKey: getJobTemplatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['job-templates'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createJobTemplates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['job-templates']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['job-templates']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['job-templates']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getJobTemplatesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getJobTemplatesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getJobsQueryKey(args: InferRequestType<typeof client.jobs.$get>) {
  const { header: _, ...keyArgs } = args
  return ['jobs', '/jobs', keyArgs] as const
}

export function getJobsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.jobs.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getJobsQueryKey>
  >({
    queryKey: getJobsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.jobs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createJobs<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.jobs.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getJobsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getJobsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getManagedJobTemplatesQueryKey(
  args: InferRequestType<(typeof client)['managed-job-templates']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['managed-job-templates', '/managed-job-templates', keyArgs] as const
}

export function getManagedJobTemplatesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['managed-job-templates']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['managed-job-templates']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['managed-job-templates']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getManagedJobTemplatesQueryKey>
  >({
    queryKey: getManagedJobTemplatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['managed-job-templates'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createManagedJobTemplates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['managed-job-templates']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['managed-job-templates']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['managed-job-templates']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getManagedJobTemplatesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getManagedJobTemplatesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getMetricValuesThingNameMetricNameStartTimeEndTimeQueryKey(
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

export function getMetricValuesThingNameMetricNameStartTimeEndTimeQueryOptions<
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
  args: InferRequestType<
    (typeof client)['metric-values#thingName&metricName&startTime&endTime']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMetricValuesThingNameMetricNameStartTimeEndTimeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['metric-values#thingName&metricName&startTime&endTime'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMetricValuesThingNameMetricNameStartTimeEndTime<
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
  args: () => InferRequestType<
    (typeof client)['metric-values#thingName&metricName&startTime&endTime']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getMetricValuesThingNameMetricNameStartTimeEndTimeQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getMitigationactionsActionsQueryKey(
  args: InferRequestType<typeof client.mitigationactions.actions.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['mitigationactions', '/mitigationactions/actions', keyArgs] as const
}

export function getMitigationactionsActionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.mitigationactions.actions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.mitigationactions.actions.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.mitigationactions.actions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMitigationactionsActionsQueryKey>
  >({
    queryKey: getMitigationactionsActionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mitigationactions.actions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMitigationactionsActions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.mitigationactions.actions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.mitigationactions.actions.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.mitigationactions.actions.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMitigationactionsActionsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getMitigationactionsActionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getOtaUpdatesQueryKey(args: InferRequestType<typeof client.otaUpdates.$get>) {
  const { header: _, ...keyArgs } = args
  return ['otaUpdates', '/otaUpdates', keyArgs] as const
}

export function getOtaUpdatesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.otaUpdates.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.otaUpdates.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.otaUpdates.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getOtaUpdatesQueryKey>
  >({
    queryKey: getOtaUpdatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.otaUpdates.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createOtaUpdates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.otaUpdates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.otaUpdates.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.otaUpdates.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getOtaUpdatesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getOtaUpdatesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getCertificatesOutGoingQueryKey(
  args: InferRequestType<(typeof client)['certificates-out-going']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['certificates-out-going', '/certificates-out-going', keyArgs] as const
}

export function getCertificatesOutGoingQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['certificates-out-going']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['certificates-out-going']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['certificates-out-going']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCertificatesOutGoingQueryKey>
  >({
    queryKey: getCertificatesOutGoingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['certificates-out-going'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCertificatesOutGoing<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['certificates-out-going']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['certificates-out-going']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['certificates-out-going']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCertificatesOutGoingQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCertificatesOutGoingQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPoliciesQueryKey(args: InferRequestType<typeof client.policies.$get>) {
  const { header: _, ...keyArgs } = args
  return ['policies', '/policies', keyArgs] as const
}

export function getPoliciesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.policies.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.policies.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.policies.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPoliciesQueryKey>
  >({
    queryKey: getPoliciesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.policies.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPolicies<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.policies.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.policies.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.policies.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getPoliciesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPoliciesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPolicyPrincipalsXAmznIotPolicyQueryKey(
  args: InferRequestType<(typeof client)['policy-principals#x-amzn-iot-policy']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    'policy-principals#x-amzn-iot-policy',
    '/policy-principals#x-amzn-iot-policy',
    keyArgs,
  ] as const
}

export function getPolicyPrincipalsXAmznIotPolicyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['policy-principals#x-amzn-iot-policy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['policy-principals#x-amzn-iot-policy']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getPolicyPrincipalsXAmznIotPolicyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['policy-principals#x-amzn-iot-policy'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPolicyPrincipalsXAmznIotPolicy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['policy-principals#x-amzn-iot-policy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['policy-principals#x-amzn-iot-policy']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getPolicyPrincipalsXAmznIotPolicyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPrincipalPoliciesXAmznIotPrincipalQueryKey(
  args: InferRequestType<(typeof client)['principal-policies#x-amzn-iot-principal']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    'principal-policies#x-amzn-iot-principal',
    '/principal-policies#x-amzn-iot-principal',
    keyArgs,
  ] as const
}

export function getPrincipalPoliciesXAmznIotPrincipalQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['principal-policies#x-amzn-iot-principal']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['principal-policies#x-amzn-iot-principal']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getPrincipalPoliciesXAmznIotPrincipalQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['principal-policies#x-amzn-iot-principal'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPrincipalPoliciesXAmznIotPrincipal<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['principal-policies#x-amzn-iot-principal']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['principal-policies#x-amzn-iot-principal']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getPrincipalPoliciesXAmznIotPrincipalQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getPrincipalPoliciesXAmznIotPrincipalQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPrincipalsThingsXAmznPrincipalQueryKey(
  args: InferRequestType<(typeof client.principals)['things#x-amzn-principal']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['principals', '/principals/things#x-amzn-principal', keyArgs] as const
}

export function getPrincipalsThingsXAmznPrincipalQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.principals)['things#x-amzn-principal']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.principals)['things#x-amzn-principal']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getPrincipalsThingsXAmznPrincipalQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.principals['things#x-amzn-principal'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPrincipalsThingsXAmznPrincipal<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.principals)['things#x-amzn-principal']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.principals)['things#x-amzn-principal']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getPrincipalsThingsXAmznPrincipalQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAuditRelatedResourcesFindingIdQueryKey(
  args: InferRequestType<(typeof client.audit)['relatedResources#findingId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['audit', '/audit/relatedResources#findingId', keyArgs] as const
}

export function getAuditRelatedResourcesFindingIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.audit)['relatedResources#findingId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.audit)['relatedResources#findingId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAuditRelatedResourcesFindingIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.audit['relatedResources#findingId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAuditRelatedResourcesFindingId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.audit)['relatedResources#findingId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.audit)['relatedResources#findingId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAuditRelatedResourcesFindingIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRoleAliasesQueryKey(
  args: InferRequestType<(typeof client)['role-aliases']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['role-aliases', '/role-aliases', keyArgs] as const
}

export function getRoleAliasesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['role-aliases']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client)['role-aliases']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['role-aliases']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRoleAliasesQueryKey>
  >({
    queryKey: getRoleAliasesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['role-aliases'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createRoleAliases<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['role-aliases']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['role-aliases']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['role-aliases']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRoleAliasesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRoleAliasesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getAuditScheduledauditsQueryKey(
  args: InferRequestType<typeof client.audit.scheduledaudits.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['audit', '/audit/scheduledaudits', keyArgs] as const
}

export function getAuditScheduledauditsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audit.scheduledaudits.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.audit.scheduledaudits.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.audit.scheduledaudits.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAuditScheduledauditsQueryKey>
  >({
    queryKey: getAuditScheduledauditsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.audit.scheduledaudits.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAuditScheduledaudits<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audit.scheduledaudits.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.audit.scheduledaudits.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.audit.scheduledaudits.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAuditScheduledauditsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAuditScheduledauditsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getSecurityProfilesQueryKey(
  args: InferRequestType<(typeof client)['security-profiles']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['security-profiles', '/security-profiles', keyArgs] as const
}

export function getSecurityProfilesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['security-profiles']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['security-profiles']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['security-profiles']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSecurityProfilesQueryKey>
  >({
    queryKey: getSecurityProfilesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['security-profiles'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSecurityProfiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['security-profiles']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['security-profiles']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['security-profiles']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSecurityProfilesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSecurityProfilesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getSecurityProfilesForTargetSecurityProfileTargetArnQueryKey(
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

export function getSecurityProfilesForTargetSecurityProfileTargetArnQueryOptions<
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
  args: InferRequestType<
    (typeof client)['security-profiles-for-target#securityProfileTargetArn']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSecurityProfilesForTargetSecurityProfileTargetArnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['security-profiles-for-target#securityProfileTargetArn'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSecurityProfilesForTargetSecurityProfileTargetArn<
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
  args: () => InferRequestType<
    (typeof client)['security-profiles-for-target#securityProfileTargetArn']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSecurityProfilesForTargetSecurityProfileTargetArnQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getStreamsQueryKey(args: InferRequestType<typeof client.streams.$get>) {
  const { header: _, ...keyArgs } = args
  return ['streams', '/streams', keyArgs] as const
}

export function getStreamsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.streams.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.streams.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.streams.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStreamsQueryKey>
  >({
    queryKey: getStreamsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.streams.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStreams<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.streams.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.streams.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.streams.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getStreamsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getStreamsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getTagsResourceArnQueryKey(
  args: InferRequestType<(typeof client)['tags#resourceArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tags#resourceArn', '/tags#resourceArn', keyArgs] as const
}

export function getTagsResourceArnQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['tags#resourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['tags#resourceArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['tags#resourceArn']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagsResourceArnQueryKey>
  >({
    queryKey: getTagsResourceArnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['tags#resourceArn'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createTagsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['tags#resourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['tags#resourceArn']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['tags#resourceArn']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getTagsResourceArnQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTagsResourceArnQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostPolicyTargetsPolicyName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPolicyTargetsPolicyNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSecurityProfilesSecurityProfileNameTargetsQueryKey(
  args: InferRequestType<
    (typeof client)['security-profiles'][':securityProfileName']['targets']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['security-profiles', '/security-profiles/:securityProfileName/targets', keyArgs] as const
}

export function getSecurityProfilesSecurityProfileNameTargetsQueryOptions<
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
  args: InferRequestType<
    (typeof client)['security-profiles'][':securityProfileName']['targets']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSecurityProfilesSecurityProfileNameTargetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['security-profiles'][':securityProfileName'].targets.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSecurityProfilesSecurityProfileNameTargets<
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
  args: () => InferRequestType<
    (typeof client)['security-profiles'][':securityProfileName']['targets']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSecurityProfilesSecurityProfileNameTargetsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getThingGroupsQueryKey(
  args: InferRequestType<(typeof client)['thing-groups']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['thing-groups', '/thing-groups', keyArgs] as const
}

export function getThingGroupsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['thing-groups']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client)['thing-groups']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['thing-groups']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getThingGroupsQueryKey>
  >({
    queryKey: getThingGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['thing-groups'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createThingGroups<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['thing-groups']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['thing-groups']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['thing-groups']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getThingGroupsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getThingGroupsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getThingsThingNameThingGroupsQueryKey(
  args: InferRequestType<(typeof client.things)[':thingName']['thing-groups']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['things', '/things/:thingName/thing-groups', keyArgs] as const
}

export function getThingsThingNameThingGroupsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.things)[':thingName']['thing-groups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.things)[':thingName']['thing-groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getThingsThingNameThingGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.things[':thingName']['thing-groups'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createThingsThingNameThingGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.things)[':thingName']['thing-groups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.things)[':thingName']['thing-groups']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getThingsThingNameThingGroupsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getThingsThingNamePrincipalsQueryKey(
  args: InferRequestType<(typeof client.things)[':thingName']['principals']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['things', '/things/:thingName/principals', keyArgs] as const
}

export function getThingsThingNamePrincipalsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.things)[':thingName']['principals']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.things)[':thingName']['principals']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getThingsThingNamePrincipalsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.things[':thingName'].principals.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createThingsThingNamePrincipals<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.things)[':thingName']['principals']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.things)[':thingName']['principals']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getThingsThingNamePrincipalsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getThingRegistrationTasksTaskIdReportsReportTypeQueryKey(
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

export function getThingRegistrationTasksTaskIdReportsReportTypeQueryOptions<
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
  args: InferRequestType<
    (typeof client)['thing-registration-tasks'][':taskId']['reports#reportType']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getThingRegistrationTasksTaskIdReportsReportTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['thing-registration-tasks'][':taskId']['reports#reportType'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createThingRegistrationTasksTaskIdReportsReportType<
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
  args: () => InferRequestType<
    (typeof client)['thing-registration-tasks'][':taskId']['reports#reportType']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getThingRegistrationTasksTaskIdReportsReportTypeQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getThingRegistrationTasksQueryKey(
  args: InferRequestType<(typeof client)['thing-registration-tasks']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['thing-registration-tasks', '/thing-registration-tasks', keyArgs] as const
}

export function getThingRegistrationTasksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['thing-registration-tasks']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['thing-registration-tasks']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getThingRegistrationTasksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['thing-registration-tasks'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createThingRegistrationTasks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['thing-registration-tasks']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['thing-registration-tasks']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getThingRegistrationTasksQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostThingRegistrationTasks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostThingRegistrationTasksMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getThingTypesQueryKey(
  args: InferRequestType<(typeof client)['thing-types']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['thing-types', '/thing-types', keyArgs] as const
}

export function getThingTypesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['thing-types']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client)['thing-types']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['thing-types']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getThingTypesQueryKey>
  >({
    queryKey: getThingTypesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['thing-types'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createThingTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['thing-types']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['thing-types']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['thing-types']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getThingTypesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getThingTypesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getThingsQueryKey(args: InferRequestType<typeof client.things.$get>) {
  const { header: _, ...keyArgs } = args
  return ['things', '/things', keyArgs] as const
}

export function getThingsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.things.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.things.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.things.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getThingsQueryKey>
  >({
    queryKey: getThingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.things.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createThings<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.things.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.things.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.things.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getThingsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getThingsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostThings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.things.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.things.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostThingsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getBillingGroupsBillingGroupNameThingsQueryKey(
  args: InferRequestType<(typeof client)['billing-groups'][':billingGroupName']['things']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['billing-groups', '/billing-groups/:billingGroupName/things', keyArgs] as const
}

export function getBillingGroupsBillingGroupNameThingsQueryOptions<
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
  args: InferRequestType<(typeof client)['billing-groups'][':billingGroupName']['things']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBillingGroupsBillingGroupNameThingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['billing-groups'][':billingGroupName'].things.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createBillingGroupsBillingGroupNameThings<
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
  args: () => InferRequestType<
    (typeof client)['billing-groups'][':billingGroupName']['things']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getBillingGroupsBillingGroupNameThingsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBillingGroupsBillingGroupNameThingsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getThingGroupsThingGroupNameThingsQueryKey(
  args: InferRequestType<(typeof client)['thing-groups'][':thingGroupName']['things']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['thing-groups', '/thing-groups/:thingGroupName/things', keyArgs] as const
}

export function getThingGroupsThingGroupNameThingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['thing-groups'][':thingGroupName']['things']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['thing-groups'][':thingGroupName']['things']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getThingGroupsThingGroupNameThingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['thing-groups'][':thingGroupName'].things.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createThingGroupsThingGroupNameThings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['thing-groups'][':thingGroupName']['things']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['thing-groups'][':thingGroupName']['things']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getThingGroupsThingGroupNameThingsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getThingGroupsThingGroupNameThingsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRulesQueryKey(args: InferRequestType<typeof client.rules.$get>) {
  const { header: _, ...keyArgs } = args
  return ['rules', '/rules', keyArgs] as const
}

export function getRulesQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rules.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.rules.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rules.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRulesQueryKey>
  >({
    queryKey: getRulesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.rules.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createRules<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rules.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.rules.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rules.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getRulesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRulesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV2LoggingLevelQueryKey(
  args: InferRequestType<typeof client.v2LoggingLevel.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2LoggingLevel', '/v2LoggingLevel', keyArgs] as const
}

export function getV2LoggingLevelQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2LoggingLevel.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2LoggingLevel.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2LoggingLevel.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2LoggingLevelQueryKey>
  >({
    queryKey: getV2LoggingLevelQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2LoggingLevel.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV2LoggingLevel<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2LoggingLevel.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2LoggingLevel.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2LoggingLevel.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getV2LoggingLevelQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2LoggingLevelQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostV2LoggingLevel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2LoggingLevel.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v2LoggingLevel.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2LoggingLevelMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getViolationEventsStartTimeEndTimeQueryKey(
  args: InferRequestType<(typeof client)['violation-events#startTime&endTime']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    'violation-events#startTime&endTime',
    '/violation-events#startTime&endTime',
    keyArgs,
  ] as const
}

export function getViolationEventsStartTimeEndTimeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['violation-events#startTime&endTime']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['violation-events#startTime&endTime']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getViolationEventsStartTimeEndTimeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['violation-events#startTime&endTime'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createViolationEventsStartTimeEndTime<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['violation-events#startTime&endTime']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['violation-events#startTime&endTime']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getViolationEventsStartTimeEndTimeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostViolationsVerificationStateViolationId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostViolationsVerificationStateViolationIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostCacertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cacertificate.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.cacertificate.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCacertificateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostCertificateRegister<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.certificate.register.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.certificate.register.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCertificateRegisterMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostCertificateRegisterNoCa<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCertificateRegisterNoCaMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchRejectCertificateTransferCertificateId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchRejectCertificateTransferCertificateIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutBillingGroupsRemoveThingFromBillingGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutBillingGroupsRemoveThingFromBillingGroupMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutThingGroupsRemoveThingFromThingGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutThingGroupsRemoveThingFromThingGroupMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostIndicesSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.indices.search.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.indices.search.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostIndicesSearchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostAuditTasks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audit.tasks.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.audit.tasks.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAuditTasksMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutThingRegistrationTasksTaskIdCancel<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutThingRegistrationTasksTaskIdCancelMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostTags<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$post>>>>>,
          TError,
          InferRequestType<typeof client.tags.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTagsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostTestAuthorization<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTestAuthorizationMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostAuthorizerAuthorizerNameTest<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAuthorizerAuthorizerNameTestMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchTransferCertificateCertificateIdTargetAwsAccount<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPatchTransferCertificateCertificateIdTargetAwsAccountMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostUntag<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.untag.$post>>>>>,
          TError,
          InferRequestType<typeof client.untag.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUntagMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchAuditSuppressionsUpdate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchAuditSuppressionsUpdateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutCertificatesCertificateIdNewStatus<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutCertificatesCertificateIdNewStatusMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutThingGroupsUpdateThingGroupsForThing<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutThingGroupsUpdateThingGroupsForThingMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostSecurityProfileBehaviorsValidate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSecurityProfileBehaviorsValidateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
