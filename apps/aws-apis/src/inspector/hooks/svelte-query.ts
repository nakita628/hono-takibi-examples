import { createMutation, mutationOptions } from '@tanstack/svelte-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetInspectorServiceAddAttributesToFindingsKey() {
  return ['#X-Amz-Target=InspectorService.AddAttributesToFindings'] as const
}

export function getXAmzTargetInspectorServiceCreateAssessmentTargetKey() {
  return ['#X-Amz-Target=InspectorService.CreateAssessmentTarget'] as const
}

export function getXAmzTargetInspectorServiceCreateAssessmentTemplateKey() {
  return ['#X-Amz-Target=InspectorService.CreateAssessmentTemplate'] as const
}

export function getXAmzTargetInspectorServiceCreateExclusionsPreviewKey() {
  return ['#X-Amz-Target=InspectorService.CreateExclusionsPreview'] as const
}

export function getXAmzTargetInspectorServiceCreateResourceGroupKey() {
  return ['#X-Amz-Target=InspectorService.CreateResourceGroup'] as const
}

export function getXAmzTargetInspectorServiceDeleteAssessmentRunKey() {
  return ['#X-Amz-Target=InspectorService.DeleteAssessmentRun'] as const
}

export function getXAmzTargetInspectorServiceDeleteAssessmentTargetKey() {
  return ['#X-Amz-Target=InspectorService.DeleteAssessmentTarget'] as const
}

export function getXAmzTargetInspectorServiceDeleteAssessmentTemplateKey() {
  return ['#X-Amz-Target=InspectorService.DeleteAssessmentTemplate'] as const
}

export function getXAmzTargetInspectorServiceDescribeAssessmentRunsKey() {
  return ['#X-Amz-Target=InspectorService.DescribeAssessmentRuns'] as const
}

export function getXAmzTargetInspectorServiceDescribeAssessmentTargetsKey() {
  return ['#X-Amz-Target=InspectorService.DescribeAssessmentTargets'] as const
}

export function getXAmzTargetInspectorServiceDescribeAssessmentTemplatesKey() {
  return ['#X-Amz-Target=InspectorService.DescribeAssessmentTemplates'] as const
}

export function getXAmzTargetInspectorServiceDescribeCrossAccountAccessRoleKey() {
  return ['#X-Amz-Target=InspectorService.DescribeCrossAccountAccessRole'] as const
}

export function getXAmzTargetInspectorServiceDescribeExclusionsKey() {
  return ['#X-Amz-Target=InspectorService.DescribeExclusions'] as const
}

export function getXAmzTargetInspectorServiceDescribeFindingsKey() {
  return ['#X-Amz-Target=InspectorService.DescribeFindings'] as const
}

export function getXAmzTargetInspectorServiceDescribeResourceGroupsKey() {
  return ['#X-Amz-Target=InspectorService.DescribeResourceGroups'] as const
}

export function getXAmzTargetInspectorServiceDescribeRulesPackagesKey() {
  return ['#X-Amz-Target=InspectorService.DescribeRulesPackages'] as const
}

export function getXAmzTargetInspectorServiceGetAssessmentReportKey() {
  return ['#X-Amz-Target=InspectorService.GetAssessmentReport'] as const
}

export function getXAmzTargetInspectorServiceGetExclusionsPreviewKey() {
  return ['#X-Amz-Target=InspectorService.GetExclusionsPreview'] as const
}

export function getXAmzTargetInspectorServiceGetTelemetryMetadataKey() {
  return ['#X-Amz-Target=InspectorService.GetTelemetryMetadata'] as const
}

export function getXAmzTargetInspectorServiceListAssessmentRunAgentsKey() {
  return ['#X-Amz-Target=InspectorService.ListAssessmentRunAgents'] as const
}

export function getXAmzTargetInspectorServiceListAssessmentRunsKey() {
  return ['#X-Amz-Target=InspectorService.ListAssessmentRuns'] as const
}

export function getXAmzTargetInspectorServiceListAssessmentTargetsKey() {
  return ['#X-Amz-Target=InspectorService.ListAssessmentTargets'] as const
}

export function getXAmzTargetInspectorServiceListAssessmentTemplatesKey() {
  return ['#X-Amz-Target=InspectorService.ListAssessmentTemplates'] as const
}

export function getXAmzTargetInspectorServiceListEventSubscriptionsKey() {
  return ['#X-Amz-Target=InspectorService.ListEventSubscriptions'] as const
}

export function getXAmzTargetInspectorServiceListExclusionsKey() {
  return ['#X-Amz-Target=InspectorService.ListExclusions'] as const
}

export function getXAmzTargetInspectorServiceListFindingsKey() {
  return ['#X-Amz-Target=InspectorService.ListFindings'] as const
}

export function getXAmzTargetInspectorServiceListRulesPackagesKey() {
  return ['#X-Amz-Target=InspectorService.ListRulesPackages'] as const
}

export function getXAmzTargetInspectorServiceListTagsForResourceKey() {
  return ['#X-Amz-Target=InspectorService.ListTagsForResource'] as const
}

export function getXAmzTargetInspectorServicePreviewAgentsKey() {
  return ['#X-Amz-Target=InspectorService.PreviewAgents'] as const
}

export function getXAmzTargetInspectorServiceRegisterCrossAccountAccessRoleKey() {
  return ['#X-Amz-Target=InspectorService.RegisterCrossAccountAccessRole'] as const
}

export function getXAmzTargetInspectorServiceRemoveAttributesFromFindingsKey() {
  return ['#X-Amz-Target=InspectorService.RemoveAttributesFromFindings'] as const
}

export function getXAmzTargetInspectorServiceSetTagsForResourceKey() {
  return ['#X-Amz-Target=InspectorService.SetTagsForResource'] as const
}

export function getXAmzTargetInspectorServiceStartAssessmentRunKey() {
  return ['#X-Amz-Target=InspectorService.StartAssessmentRun'] as const
}

export function getXAmzTargetInspectorServiceStopAssessmentRunKey() {
  return ['#X-Amz-Target=InspectorService.StopAssessmentRun'] as const
}

export function getXAmzTargetInspectorServiceSubscribeToEventKey() {
  return ['#X-Amz-Target=InspectorService.SubscribeToEvent'] as const
}

export function getXAmzTargetInspectorServiceUnsubscribeFromEventKey() {
  return ['#X-Amz-Target=InspectorService.UnsubscribeFromEvent'] as const
}

export function getXAmzTargetInspectorServiceUpdateAssessmentTargetKey() {
  return ['#X-Amz-Target=InspectorService.UpdateAssessmentTarget'] as const
}

export function getPostXAmzTargetInspectorServiceAddAttributesToFindingsMutationKey() {
  return [
    '#X-Amz-Target=InspectorService.AddAttributesToFindings',
    '/#X-Amz-Target=InspectorService.AddAttributesToFindings',
    'POST',
  ] as const
}

export function getPostXAmzTargetInspectorServiceAddAttributesToFindingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=InspectorService.AddAttributesToFindings']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=InspectorService.AddAttributesToFindings']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetInspectorServiceAddAttributesToFindingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=InspectorService.AddAttributesToFindings']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=InspectorService.AddAttributesToFindings'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetInspectorServiceAddAttributesToFindings<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=InspectorService.AddAttributesToFindings']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=InspectorService.AddAttributesToFindings']['$post']
        >,
        TOnMutateResult
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
      getPostXAmzTargetInspectorServiceAddAttributesToFindingsMutationOptions<
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

export function getPostXAmzTargetInspectorServiceCreateAssessmentTargetMutationKey() {
  return [
    '#X-Amz-Target=InspectorService.CreateAssessmentTarget',
    '/#X-Amz-Target=InspectorService.CreateAssessmentTarget',
    'POST',
  ] as const
}

export function getPostXAmzTargetInspectorServiceCreateAssessmentTargetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=InspectorService.CreateAssessmentTarget']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=InspectorService.CreateAssessmentTarget']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetInspectorServiceCreateAssessmentTargetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=InspectorService.CreateAssessmentTarget']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=InspectorService.CreateAssessmentTarget'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetInspectorServiceCreateAssessmentTarget<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=InspectorService.CreateAssessmentTarget']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=InspectorService.CreateAssessmentTarget']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetInspectorServiceCreateAssessmentTargetMutationOptions<
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

export function getPostXAmzTargetInspectorServiceCreateAssessmentTemplateMutationKey() {
  return [
    '#X-Amz-Target=InspectorService.CreateAssessmentTemplate',
    '/#X-Amz-Target=InspectorService.CreateAssessmentTemplate',
    'POST',
  ] as const
}

export function getPostXAmzTargetInspectorServiceCreateAssessmentTemplateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=InspectorService.CreateAssessmentTemplate']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=InspectorService.CreateAssessmentTemplate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetInspectorServiceCreateAssessmentTemplateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=InspectorService.CreateAssessmentTemplate']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=InspectorService.CreateAssessmentTemplate'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetInspectorServiceCreateAssessmentTemplate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=InspectorService.CreateAssessmentTemplate']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=InspectorService.CreateAssessmentTemplate']['$post']
        >,
        TOnMutateResult
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
      getPostXAmzTargetInspectorServiceCreateAssessmentTemplateMutationOptions<
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

export function getPostXAmzTargetInspectorServiceCreateExclusionsPreviewMutationKey() {
  return [
    '#X-Amz-Target=InspectorService.CreateExclusionsPreview',
    '/#X-Amz-Target=InspectorService.CreateExclusionsPreview',
    'POST',
  ] as const
}

export function getPostXAmzTargetInspectorServiceCreateExclusionsPreviewMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=InspectorService.CreateExclusionsPreview']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=InspectorService.CreateExclusionsPreview']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetInspectorServiceCreateExclusionsPreviewMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=InspectorService.CreateExclusionsPreview']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=InspectorService.CreateExclusionsPreview'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetInspectorServiceCreateExclusionsPreview<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=InspectorService.CreateExclusionsPreview']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=InspectorService.CreateExclusionsPreview']['$post']
        >,
        TOnMutateResult
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
      getPostXAmzTargetInspectorServiceCreateExclusionsPreviewMutationOptions<
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

export function getPostXAmzTargetInspectorServiceCreateResourceGroupMutationKey() {
  return [
    '#X-Amz-Target=InspectorService.CreateResourceGroup',
    '/#X-Amz-Target=InspectorService.CreateResourceGroup',
    'POST',
  ] as const
}

export function getPostXAmzTargetInspectorServiceCreateResourceGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=InspectorService.CreateResourceGroup']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=InspectorService.CreateResourceGroup']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetInspectorServiceCreateResourceGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=InspectorService.CreateResourceGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=InspectorService.CreateResourceGroup'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetInspectorServiceCreateResourceGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=InspectorService.CreateResourceGroup']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=InspectorService.CreateResourceGroup']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetInspectorServiceCreateResourceGroupMutationOptions<
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

export function getPostXAmzTargetInspectorServiceDeleteAssessmentRunMutationKey() {
  return [
    '#X-Amz-Target=InspectorService.DeleteAssessmentRun',
    '/#X-Amz-Target=InspectorService.DeleteAssessmentRun',
    'POST',
  ] as const
}

export function getPostXAmzTargetInspectorServiceDeleteAssessmentRunMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=InspectorService.DeleteAssessmentRun']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=InspectorService.DeleteAssessmentRun']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetInspectorServiceDeleteAssessmentRunMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=InspectorService.DeleteAssessmentRun']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=InspectorService.DeleteAssessmentRun'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetInspectorServiceDeleteAssessmentRun<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=InspectorService.DeleteAssessmentRun']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=InspectorService.DeleteAssessmentRun']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetInspectorServiceDeleteAssessmentRunMutationOptions<
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

export function getPostXAmzTargetInspectorServiceDeleteAssessmentTargetMutationKey() {
  return [
    '#X-Amz-Target=InspectorService.DeleteAssessmentTarget',
    '/#X-Amz-Target=InspectorService.DeleteAssessmentTarget',
    'POST',
  ] as const
}

export function getPostXAmzTargetInspectorServiceDeleteAssessmentTargetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=InspectorService.DeleteAssessmentTarget']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=InspectorService.DeleteAssessmentTarget']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetInspectorServiceDeleteAssessmentTargetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=InspectorService.DeleteAssessmentTarget']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=InspectorService.DeleteAssessmentTarget'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetInspectorServiceDeleteAssessmentTarget<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=InspectorService.DeleteAssessmentTarget']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=InspectorService.DeleteAssessmentTarget']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetInspectorServiceDeleteAssessmentTargetMutationOptions<
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

export function getPostXAmzTargetInspectorServiceDeleteAssessmentTemplateMutationKey() {
  return [
    '#X-Amz-Target=InspectorService.DeleteAssessmentTemplate',
    '/#X-Amz-Target=InspectorService.DeleteAssessmentTemplate',
    'POST',
  ] as const
}

export function getPostXAmzTargetInspectorServiceDeleteAssessmentTemplateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=InspectorService.DeleteAssessmentTemplate']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=InspectorService.DeleteAssessmentTemplate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetInspectorServiceDeleteAssessmentTemplateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=InspectorService.DeleteAssessmentTemplate']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=InspectorService.DeleteAssessmentTemplate'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetInspectorServiceDeleteAssessmentTemplate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=InspectorService.DeleteAssessmentTemplate']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=InspectorService.DeleteAssessmentTemplate']['$post']
        >,
        TOnMutateResult
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
      getPostXAmzTargetInspectorServiceDeleteAssessmentTemplateMutationOptions<
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

export function getPostXAmzTargetInspectorServiceDescribeAssessmentRunsMutationKey() {
  return [
    '#X-Amz-Target=InspectorService.DescribeAssessmentRuns',
    '/#X-Amz-Target=InspectorService.DescribeAssessmentRuns',
    'POST',
  ] as const
}

export function getPostXAmzTargetInspectorServiceDescribeAssessmentRunsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=InspectorService.DescribeAssessmentRuns']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=InspectorService.DescribeAssessmentRuns']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetInspectorServiceDescribeAssessmentRunsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=InspectorService.DescribeAssessmentRuns']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=InspectorService.DescribeAssessmentRuns'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetInspectorServiceDescribeAssessmentRuns<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=InspectorService.DescribeAssessmentRuns']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=InspectorService.DescribeAssessmentRuns']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetInspectorServiceDescribeAssessmentRunsMutationOptions<
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

export function getPostXAmzTargetInspectorServiceDescribeAssessmentTargetsMutationKey() {
  return [
    '#X-Amz-Target=InspectorService.DescribeAssessmentTargets',
    '/#X-Amz-Target=InspectorService.DescribeAssessmentTargets',
    'POST',
  ] as const
}

export function getPostXAmzTargetInspectorServiceDescribeAssessmentTargetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=InspectorService.DescribeAssessmentTargets']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=InspectorService.DescribeAssessmentTargets']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetInspectorServiceDescribeAssessmentTargetsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=InspectorService.DescribeAssessmentTargets']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=InspectorService.DescribeAssessmentTargets'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetInspectorServiceDescribeAssessmentTargets<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=InspectorService.DescribeAssessmentTargets']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=InspectorService.DescribeAssessmentTargets']['$post']
        >,
        TOnMutateResult
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
      getPostXAmzTargetInspectorServiceDescribeAssessmentTargetsMutationOptions<
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

export function getPostXAmzTargetInspectorServiceDescribeAssessmentTemplatesMutationKey() {
  return [
    '#X-Amz-Target=InspectorService.DescribeAssessmentTemplates',
    '/#X-Amz-Target=InspectorService.DescribeAssessmentTemplates',
    'POST',
  ] as const
}

export function getPostXAmzTargetInspectorServiceDescribeAssessmentTemplatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=InspectorService.DescribeAssessmentTemplates']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=InspectorService.DescribeAssessmentTemplates']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetInspectorServiceDescribeAssessmentTemplatesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=InspectorService.DescribeAssessmentTemplates']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=InspectorService.DescribeAssessmentTemplates'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetInspectorServiceDescribeAssessmentTemplates<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=InspectorService.DescribeAssessmentTemplates']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=InspectorService.DescribeAssessmentTemplates']['$post']
        >,
        TOnMutateResult
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
      getPostXAmzTargetInspectorServiceDescribeAssessmentTemplatesMutationOptions<
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

export function getPostXAmzTargetInspectorServiceDescribeCrossAccountAccessRoleMutationKey() {
  return [
    '#X-Amz-Target=InspectorService.DescribeCrossAccountAccessRole',
    '/#X-Amz-Target=InspectorService.DescribeCrossAccountAccessRole',
    'POST',
  ] as const
}

export function getPostXAmzTargetInspectorServiceDescribeCrossAccountAccessRoleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=InspectorService.DescribeCrossAccountAccessRole']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=InspectorService.DescribeCrossAccountAccessRole']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetInspectorServiceDescribeCrossAccountAccessRoleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=InspectorService.DescribeCrossAccountAccessRole']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=InspectorService.DescribeCrossAccountAccessRole'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetInspectorServiceDescribeCrossAccountAccessRole<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=InspectorService.DescribeCrossAccountAccessRole']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=InspectorService.DescribeCrossAccountAccessRole']['$post']
        >,
        TOnMutateResult
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
      getPostXAmzTargetInspectorServiceDescribeCrossAccountAccessRoleMutationOptions<
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

export function getPostXAmzTargetInspectorServiceDescribeExclusionsMutationKey() {
  return [
    '#X-Amz-Target=InspectorService.DescribeExclusions',
    '/#X-Amz-Target=InspectorService.DescribeExclusions',
    'POST',
  ] as const
}

export function getPostXAmzTargetInspectorServiceDescribeExclusionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=InspectorService.DescribeExclusions']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=InspectorService.DescribeExclusions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetInspectorServiceDescribeExclusionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=InspectorService.DescribeExclusions']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=InspectorService.DescribeExclusions'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetInspectorServiceDescribeExclusions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=InspectorService.DescribeExclusions']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=InspectorService.DescribeExclusions']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetInspectorServiceDescribeExclusionsMutationOptions<
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

export function getPostXAmzTargetInspectorServiceDescribeFindingsMutationKey() {
  return [
    '#X-Amz-Target=InspectorService.DescribeFindings',
    '/#X-Amz-Target=InspectorService.DescribeFindings',
    'POST',
  ] as const
}

export function getPostXAmzTargetInspectorServiceDescribeFindingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=InspectorService.DescribeFindings']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=InspectorService.DescribeFindings']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetInspectorServiceDescribeFindingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=InspectorService.DescribeFindings']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=InspectorService.DescribeFindings'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetInspectorServiceDescribeFindings<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=InspectorService.DescribeFindings']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=InspectorService.DescribeFindings']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetInspectorServiceDescribeFindingsMutationOptions<
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

export function getPostXAmzTargetInspectorServiceDescribeResourceGroupsMutationKey() {
  return [
    '#X-Amz-Target=InspectorService.DescribeResourceGroups',
    '/#X-Amz-Target=InspectorService.DescribeResourceGroups',
    'POST',
  ] as const
}

export function getPostXAmzTargetInspectorServiceDescribeResourceGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=InspectorService.DescribeResourceGroups']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=InspectorService.DescribeResourceGroups']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetInspectorServiceDescribeResourceGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=InspectorService.DescribeResourceGroups']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=InspectorService.DescribeResourceGroups'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetInspectorServiceDescribeResourceGroups<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=InspectorService.DescribeResourceGroups']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=InspectorService.DescribeResourceGroups']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetInspectorServiceDescribeResourceGroupsMutationOptions<
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

export function getPostXAmzTargetInspectorServiceDescribeRulesPackagesMutationKey() {
  return [
    '#X-Amz-Target=InspectorService.DescribeRulesPackages',
    '/#X-Amz-Target=InspectorService.DescribeRulesPackages',
    'POST',
  ] as const
}

export function getPostXAmzTargetInspectorServiceDescribeRulesPackagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=InspectorService.DescribeRulesPackages']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=InspectorService.DescribeRulesPackages']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetInspectorServiceDescribeRulesPackagesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=InspectorService.DescribeRulesPackages']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=InspectorService.DescribeRulesPackages'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetInspectorServiceDescribeRulesPackages<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=InspectorService.DescribeRulesPackages']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=InspectorService.DescribeRulesPackages']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetInspectorServiceDescribeRulesPackagesMutationOptions<
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

export function getPostXAmzTargetInspectorServiceGetAssessmentReportMutationKey() {
  return [
    '#X-Amz-Target=InspectorService.GetAssessmentReport',
    '/#X-Amz-Target=InspectorService.GetAssessmentReport',
    'POST',
  ] as const
}

export function getPostXAmzTargetInspectorServiceGetAssessmentReportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=InspectorService.GetAssessmentReport']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=InspectorService.GetAssessmentReport']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetInspectorServiceGetAssessmentReportMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=InspectorService.GetAssessmentReport']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=InspectorService.GetAssessmentReport'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetInspectorServiceGetAssessmentReport<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=InspectorService.GetAssessmentReport']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=InspectorService.GetAssessmentReport']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetInspectorServiceGetAssessmentReportMutationOptions<
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

export function getPostXAmzTargetInspectorServiceGetExclusionsPreviewMutationKey() {
  return [
    '#X-Amz-Target=InspectorService.GetExclusionsPreview',
    '/#X-Amz-Target=InspectorService.GetExclusionsPreview',
    'POST',
  ] as const
}

export function getPostXAmzTargetInspectorServiceGetExclusionsPreviewMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=InspectorService.GetExclusionsPreview']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=InspectorService.GetExclusionsPreview']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetInspectorServiceGetExclusionsPreviewMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=InspectorService.GetExclusionsPreview']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=InspectorService.GetExclusionsPreview'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetInspectorServiceGetExclusionsPreview<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=InspectorService.GetExclusionsPreview']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=InspectorService.GetExclusionsPreview']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetInspectorServiceGetExclusionsPreviewMutationOptions<
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

export function getPostXAmzTargetInspectorServiceGetTelemetryMetadataMutationKey() {
  return [
    '#X-Amz-Target=InspectorService.GetTelemetryMetadata',
    '/#X-Amz-Target=InspectorService.GetTelemetryMetadata',
    'POST',
  ] as const
}

export function getPostXAmzTargetInspectorServiceGetTelemetryMetadataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=InspectorService.GetTelemetryMetadata']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=InspectorService.GetTelemetryMetadata']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetInspectorServiceGetTelemetryMetadataMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=InspectorService.GetTelemetryMetadata']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=InspectorService.GetTelemetryMetadata'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetInspectorServiceGetTelemetryMetadata<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=InspectorService.GetTelemetryMetadata']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=InspectorService.GetTelemetryMetadata']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetInspectorServiceGetTelemetryMetadataMutationOptions<
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

export function getPostXAmzTargetInspectorServiceListAssessmentRunAgentsMutationKey() {
  return [
    '#X-Amz-Target=InspectorService.ListAssessmentRunAgents',
    '/#X-Amz-Target=InspectorService.ListAssessmentRunAgents',
    'POST',
  ] as const
}

export function getPostXAmzTargetInspectorServiceListAssessmentRunAgentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=InspectorService.ListAssessmentRunAgents']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=InspectorService.ListAssessmentRunAgents']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetInspectorServiceListAssessmentRunAgentsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=InspectorService.ListAssessmentRunAgents']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=InspectorService.ListAssessmentRunAgents'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetInspectorServiceListAssessmentRunAgents<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=InspectorService.ListAssessmentRunAgents']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=InspectorService.ListAssessmentRunAgents']['$post']
        >,
        TOnMutateResult
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
      getPostXAmzTargetInspectorServiceListAssessmentRunAgentsMutationOptions<
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

export function getPostXAmzTargetInspectorServiceListAssessmentRunsMutationKey() {
  return [
    '#X-Amz-Target=InspectorService.ListAssessmentRuns',
    '/#X-Amz-Target=InspectorService.ListAssessmentRuns',
    'POST',
  ] as const
}

export function getPostXAmzTargetInspectorServiceListAssessmentRunsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=InspectorService.ListAssessmentRuns']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=InspectorService.ListAssessmentRuns']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetInspectorServiceListAssessmentRunsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=InspectorService.ListAssessmentRuns']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=InspectorService.ListAssessmentRuns'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetInspectorServiceListAssessmentRuns<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=InspectorService.ListAssessmentRuns']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=InspectorService.ListAssessmentRuns']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetInspectorServiceListAssessmentRunsMutationOptions<
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

export function getPostXAmzTargetInspectorServiceListAssessmentTargetsMutationKey() {
  return [
    '#X-Amz-Target=InspectorService.ListAssessmentTargets',
    '/#X-Amz-Target=InspectorService.ListAssessmentTargets',
    'POST',
  ] as const
}

export function getPostXAmzTargetInspectorServiceListAssessmentTargetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=InspectorService.ListAssessmentTargets']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=InspectorService.ListAssessmentTargets']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetInspectorServiceListAssessmentTargetsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=InspectorService.ListAssessmentTargets']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=InspectorService.ListAssessmentTargets'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetInspectorServiceListAssessmentTargets<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=InspectorService.ListAssessmentTargets']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=InspectorService.ListAssessmentTargets']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetInspectorServiceListAssessmentTargetsMutationOptions<
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

export function getPostXAmzTargetInspectorServiceListAssessmentTemplatesMutationKey() {
  return [
    '#X-Amz-Target=InspectorService.ListAssessmentTemplates',
    '/#X-Amz-Target=InspectorService.ListAssessmentTemplates',
    'POST',
  ] as const
}

export function getPostXAmzTargetInspectorServiceListAssessmentTemplatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=InspectorService.ListAssessmentTemplates']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=InspectorService.ListAssessmentTemplates']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetInspectorServiceListAssessmentTemplatesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=InspectorService.ListAssessmentTemplates']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=InspectorService.ListAssessmentTemplates'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetInspectorServiceListAssessmentTemplates<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=InspectorService.ListAssessmentTemplates']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=InspectorService.ListAssessmentTemplates']['$post']
        >,
        TOnMutateResult
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
      getPostXAmzTargetInspectorServiceListAssessmentTemplatesMutationOptions<
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

export function getPostXAmzTargetInspectorServiceListEventSubscriptionsMutationKey() {
  return [
    '#X-Amz-Target=InspectorService.ListEventSubscriptions',
    '/#X-Amz-Target=InspectorService.ListEventSubscriptions',
    'POST',
  ] as const
}

export function getPostXAmzTargetInspectorServiceListEventSubscriptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=InspectorService.ListEventSubscriptions']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=InspectorService.ListEventSubscriptions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetInspectorServiceListEventSubscriptionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=InspectorService.ListEventSubscriptions']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=InspectorService.ListEventSubscriptions'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetInspectorServiceListEventSubscriptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=InspectorService.ListEventSubscriptions']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=InspectorService.ListEventSubscriptions']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetInspectorServiceListEventSubscriptionsMutationOptions<
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

export function getPostXAmzTargetInspectorServiceListExclusionsMutationKey() {
  return [
    '#X-Amz-Target=InspectorService.ListExclusions',
    '/#X-Amz-Target=InspectorService.ListExclusions',
    'POST',
  ] as const
}

export function getPostXAmzTargetInspectorServiceListExclusionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=InspectorService.ListExclusions']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=InspectorService.ListExclusions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetInspectorServiceListExclusionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=InspectorService.ListExclusions']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=InspectorService.ListExclusions'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetInspectorServiceListExclusions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=InspectorService.ListExclusions']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=InspectorService.ListExclusions']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetInspectorServiceListExclusionsMutationOptions<
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

export function getPostXAmzTargetInspectorServiceListFindingsMutationKey() {
  return [
    '#X-Amz-Target=InspectorService.ListFindings',
    '/#X-Amz-Target=InspectorService.ListFindings',
    'POST',
  ] as const
}

export function getPostXAmzTargetInspectorServiceListFindingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=InspectorService.ListFindings']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=InspectorService.ListFindings']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetInspectorServiceListFindingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=InspectorService.ListFindings']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=InspectorService.ListFindings'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetInspectorServiceListFindings<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=InspectorService.ListFindings']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=InspectorService.ListFindings']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetInspectorServiceListFindingsMutationOptions<
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

export function getPostXAmzTargetInspectorServiceListRulesPackagesMutationKey() {
  return [
    '#X-Amz-Target=InspectorService.ListRulesPackages',
    '/#X-Amz-Target=InspectorService.ListRulesPackages',
    'POST',
  ] as const
}

export function getPostXAmzTargetInspectorServiceListRulesPackagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=InspectorService.ListRulesPackages']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=InspectorService.ListRulesPackages']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetInspectorServiceListRulesPackagesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=InspectorService.ListRulesPackages']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=InspectorService.ListRulesPackages'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetInspectorServiceListRulesPackages<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=InspectorService.ListRulesPackages']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=InspectorService.ListRulesPackages']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetInspectorServiceListRulesPackagesMutationOptions<
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

export function getPostXAmzTargetInspectorServiceListTagsForResourceMutationKey() {
  return [
    '#X-Amz-Target=InspectorService.ListTagsForResource',
    '/#X-Amz-Target=InspectorService.ListTagsForResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetInspectorServiceListTagsForResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=InspectorService.ListTagsForResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=InspectorService.ListTagsForResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetInspectorServiceListTagsForResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=InspectorService.ListTagsForResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=InspectorService.ListTagsForResource'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetInspectorServiceListTagsForResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=InspectorService.ListTagsForResource']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=InspectorService.ListTagsForResource']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetInspectorServiceListTagsForResourceMutationOptions<
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

export function getPostXAmzTargetInspectorServicePreviewAgentsMutationKey() {
  return [
    '#X-Amz-Target=InspectorService.PreviewAgents',
    '/#X-Amz-Target=InspectorService.PreviewAgents',
    'POST',
  ] as const
}

export function getPostXAmzTargetInspectorServicePreviewAgentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=InspectorService.PreviewAgents']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=InspectorService.PreviewAgents']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetInspectorServicePreviewAgentsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=InspectorService.PreviewAgents']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=InspectorService.PreviewAgents'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetInspectorServicePreviewAgents<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=InspectorService.PreviewAgents']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=InspectorService.PreviewAgents']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetInspectorServicePreviewAgentsMutationOptions<
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

export function getPostXAmzTargetInspectorServiceRegisterCrossAccountAccessRoleMutationKey() {
  return [
    '#X-Amz-Target=InspectorService.RegisterCrossAccountAccessRole',
    '/#X-Amz-Target=InspectorService.RegisterCrossAccountAccessRole',
    'POST',
  ] as const
}

export function getPostXAmzTargetInspectorServiceRegisterCrossAccountAccessRoleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=InspectorService.RegisterCrossAccountAccessRole']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=InspectorService.RegisterCrossAccountAccessRole']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetInspectorServiceRegisterCrossAccountAccessRoleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=InspectorService.RegisterCrossAccountAccessRole']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=InspectorService.RegisterCrossAccountAccessRole'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetInspectorServiceRegisterCrossAccountAccessRole<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=InspectorService.RegisterCrossAccountAccessRole']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=InspectorService.RegisterCrossAccountAccessRole']['$post']
        >,
        TOnMutateResult
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
      getPostXAmzTargetInspectorServiceRegisterCrossAccountAccessRoleMutationOptions<
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

export function getPostXAmzTargetInspectorServiceRemoveAttributesFromFindingsMutationKey() {
  return [
    '#X-Amz-Target=InspectorService.RemoveAttributesFromFindings',
    '/#X-Amz-Target=InspectorService.RemoveAttributesFromFindings',
    'POST',
  ] as const
}

export function getPostXAmzTargetInspectorServiceRemoveAttributesFromFindingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=InspectorService.RemoveAttributesFromFindings']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=InspectorService.RemoveAttributesFromFindings']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetInspectorServiceRemoveAttributesFromFindingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=InspectorService.RemoveAttributesFromFindings']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=InspectorService.RemoveAttributesFromFindings'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetInspectorServiceRemoveAttributesFromFindings<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=InspectorService.RemoveAttributesFromFindings']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=InspectorService.RemoveAttributesFromFindings']['$post']
        >,
        TOnMutateResult
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
      getPostXAmzTargetInspectorServiceRemoveAttributesFromFindingsMutationOptions<
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

export function getPostXAmzTargetInspectorServiceSetTagsForResourceMutationKey() {
  return [
    '#X-Amz-Target=InspectorService.SetTagsForResource',
    '/#X-Amz-Target=InspectorService.SetTagsForResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetInspectorServiceSetTagsForResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=InspectorService.SetTagsForResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=InspectorService.SetTagsForResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetInspectorServiceSetTagsForResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=InspectorService.SetTagsForResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=InspectorService.SetTagsForResource'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetInspectorServiceSetTagsForResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=InspectorService.SetTagsForResource']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=InspectorService.SetTagsForResource']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetInspectorServiceSetTagsForResourceMutationOptions<
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

export function getPostXAmzTargetInspectorServiceStartAssessmentRunMutationKey() {
  return [
    '#X-Amz-Target=InspectorService.StartAssessmentRun',
    '/#X-Amz-Target=InspectorService.StartAssessmentRun',
    'POST',
  ] as const
}

export function getPostXAmzTargetInspectorServiceStartAssessmentRunMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=InspectorService.StartAssessmentRun']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=InspectorService.StartAssessmentRun']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetInspectorServiceStartAssessmentRunMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=InspectorService.StartAssessmentRun']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=InspectorService.StartAssessmentRun'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetInspectorServiceStartAssessmentRun<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=InspectorService.StartAssessmentRun']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=InspectorService.StartAssessmentRun']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetInspectorServiceStartAssessmentRunMutationOptions<
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

export function getPostXAmzTargetInspectorServiceStopAssessmentRunMutationKey() {
  return [
    '#X-Amz-Target=InspectorService.StopAssessmentRun',
    '/#X-Amz-Target=InspectorService.StopAssessmentRun',
    'POST',
  ] as const
}

export function getPostXAmzTargetInspectorServiceStopAssessmentRunMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=InspectorService.StopAssessmentRun']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=InspectorService.StopAssessmentRun']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetInspectorServiceStopAssessmentRunMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=InspectorService.StopAssessmentRun']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=InspectorService.StopAssessmentRun'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetInspectorServiceStopAssessmentRun<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=InspectorService.StopAssessmentRun']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=InspectorService.StopAssessmentRun']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetInspectorServiceStopAssessmentRunMutationOptions<
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

export function getPostXAmzTargetInspectorServiceSubscribeToEventMutationKey() {
  return [
    '#X-Amz-Target=InspectorService.SubscribeToEvent',
    '/#X-Amz-Target=InspectorService.SubscribeToEvent',
    'POST',
  ] as const
}

export function getPostXAmzTargetInspectorServiceSubscribeToEventMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=InspectorService.SubscribeToEvent']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=InspectorService.SubscribeToEvent']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetInspectorServiceSubscribeToEventMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=InspectorService.SubscribeToEvent']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=InspectorService.SubscribeToEvent'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetInspectorServiceSubscribeToEvent<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=InspectorService.SubscribeToEvent']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=InspectorService.SubscribeToEvent']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetInspectorServiceSubscribeToEventMutationOptions<
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

export function getPostXAmzTargetInspectorServiceUnsubscribeFromEventMutationKey() {
  return [
    '#X-Amz-Target=InspectorService.UnsubscribeFromEvent',
    '/#X-Amz-Target=InspectorService.UnsubscribeFromEvent',
    'POST',
  ] as const
}

export function getPostXAmzTargetInspectorServiceUnsubscribeFromEventMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=InspectorService.UnsubscribeFromEvent']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=InspectorService.UnsubscribeFromEvent']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetInspectorServiceUnsubscribeFromEventMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=InspectorService.UnsubscribeFromEvent']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=InspectorService.UnsubscribeFromEvent'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetInspectorServiceUnsubscribeFromEvent<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=InspectorService.UnsubscribeFromEvent']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=InspectorService.UnsubscribeFromEvent']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetInspectorServiceUnsubscribeFromEventMutationOptions<
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

export function getPostXAmzTargetInspectorServiceUpdateAssessmentTargetMutationKey() {
  return [
    '#X-Amz-Target=InspectorService.UpdateAssessmentTarget',
    '/#X-Amz-Target=InspectorService.UpdateAssessmentTarget',
    'POST',
  ] as const
}

export function getPostXAmzTargetInspectorServiceUpdateAssessmentTargetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=InspectorService.UpdateAssessmentTarget']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=InspectorService.UpdateAssessmentTarget']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetInspectorServiceUpdateAssessmentTargetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=InspectorService.UpdateAssessmentTarget']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=InspectorService.UpdateAssessmentTarget'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetInspectorServiceUpdateAssessmentTarget<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=InspectorService.UpdateAssessmentTarget']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=InspectorService.UpdateAssessmentTarget']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetInspectorServiceUpdateAssessmentTargetMutationOptions<
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
