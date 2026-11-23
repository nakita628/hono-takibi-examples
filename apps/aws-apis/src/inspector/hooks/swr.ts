import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getPostXAmzTargetInspectorServiceAddAttributesToFindingsKey() {
  return [
    '#X-Amz-Target=InspectorService.AddAttributesToFindings',
    '/#X-Amz-Target=InspectorService.AddAttributesToFindings',
    'POST',
  ] as const
}

export function usePostXAmzTargetInspectorServiceAddAttributesToFindings<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=InspectorService.AddAttributesToFindings']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetInspectorServiceAddAttributesToFindingsKey()
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
            (typeof client)['#X-Amz-Target=InspectorService.AddAttributesToFindings']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=InspectorService.AddAttributesToFindings'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetInspectorServiceCreateAssessmentTargetKey() {
  return [
    '#X-Amz-Target=InspectorService.CreateAssessmentTarget',
    '/#X-Amz-Target=InspectorService.CreateAssessmentTarget',
    'POST',
  ] as const
}

export function usePostXAmzTargetInspectorServiceCreateAssessmentTarget<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=InspectorService.CreateAssessmentTarget']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetInspectorServiceCreateAssessmentTargetKey()
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
            (typeof client)['#X-Amz-Target=InspectorService.CreateAssessmentTarget']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=InspectorService.CreateAssessmentTarget'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetInspectorServiceCreateAssessmentTemplateKey() {
  return [
    '#X-Amz-Target=InspectorService.CreateAssessmentTemplate',
    '/#X-Amz-Target=InspectorService.CreateAssessmentTemplate',
    'POST',
  ] as const
}

export function usePostXAmzTargetInspectorServiceCreateAssessmentTemplate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=InspectorService.CreateAssessmentTemplate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetInspectorServiceCreateAssessmentTemplateKey()
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
            (typeof client)['#X-Amz-Target=InspectorService.CreateAssessmentTemplate']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=InspectorService.CreateAssessmentTemplate'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetInspectorServiceCreateExclusionsPreviewKey() {
  return [
    '#X-Amz-Target=InspectorService.CreateExclusionsPreview',
    '/#X-Amz-Target=InspectorService.CreateExclusionsPreview',
    'POST',
  ] as const
}

export function usePostXAmzTargetInspectorServiceCreateExclusionsPreview<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=InspectorService.CreateExclusionsPreview']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetInspectorServiceCreateExclusionsPreviewKey()
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
            (typeof client)['#X-Amz-Target=InspectorService.CreateExclusionsPreview']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=InspectorService.CreateExclusionsPreview'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetInspectorServiceCreateResourceGroupKey() {
  return [
    '#X-Amz-Target=InspectorService.CreateResourceGroup',
    '/#X-Amz-Target=InspectorService.CreateResourceGroup',
    'POST',
  ] as const
}

export function usePostXAmzTargetInspectorServiceCreateResourceGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=InspectorService.CreateResourceGroup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetInspectorServiceCreateResourceGroupKey()
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
            (typeof client)['#X-Amz-Target=InspectorService.CreateResourceGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=InspectorService.CreateResourceGroup'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetInspectorServiceDeleteAssessmentRunKey() {
  return [
    '#X-Amz-Target=InspectorService.DeleteAssessmentRun',
    '/#X-Amz-Target=InspectorService.DeleteAssessmentRun',
    'POST',
  ] as const
}

export function usePostXAmzTargetInspectorServiceDeleteAssessmentRun<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=InspectorService.DeleteAssessmentRun']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetInspectorServiceDeleteAssessmentRunKey()
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
            (typeof client)['#X-Amz-Target=InspectorService.DeleteAssessmentRun']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=InspectorService.DeleteAssessmentRun'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetInspectorServiceDeleteAssessmentTargetKey() {
  return [
    '#X-Amz-Target=InspectorService.DeleteAssessmentTarget',
    '/#X-Amz-Target=InspectorService.DeleteAssessmentTarget',
    'POST',
  ] as const
}

export function usePostXAmzTargetInspectorServiceDeleteAssessmentTarget<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=InspectorService.DeleteAssessmentTarget']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetInspectorServiceDeleteAssessmentTargetKey()
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
            (typeof client)['#X-Amz-Target=InspectorService.DeleteAssessmentTarget']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=InspectorService.DeleteAssessmentTarget'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetInspectorServiceDeleteAssessmentTemplateKey() {
  return [
    '#X-Amz-Target=InspectorService.DeleteAssessmentTemplate',
    '/#X-Amz-Target=InspectorService.DeleteAssessmentTemplate',
    'POST',
  ] as const
}

export function usePostXAmzTargetInspectorServiceDeleteAssessmentTemplate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=InspectorService.DeleteAssessmentTemplate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetInspectorServiceDeleteAssessmentTemplateKey()
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
            (typeof client)['#X-Amz-Target=InspectorService.DeleteAssessmentTemplate']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=InspectorService.DeleteAssessmentTemplate'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetInspectorServiceDescribeAssessmentRunsKey() {
  return [
    '#X-Amz-Target=InspectorService.DescribeAssessmentRuns',
    '/#X-Amz-Target=InspectorService.DescribeAssessmentRuns',
    'POST',
  ] as const
}

export function usePostXAmzTargetInspectorServiceDescribeAssessmentRuns<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=InspectorService.DescribeAssessmentRuns']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetInspectorServiceDescribeAssessmentRunsKey()
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
            (typeof client)['#X-Amz-Target=InspectorService.DescribeAssessmentRuns']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=InspectorService.DescribeAssessmentRuns'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetInspectorServiceDescribeAssessmentTargetsKey() {
  return [
    '#X-Amz-Target=InspectorService.DescribeAssessmentTargets',
    '/#X-Amz-Target=InspectorService.DescribeAssessmentTargets',
    'POST',
  ] as const
}

export function usePostXAmzTargetInspectorServiceDescribeAssessmentTargets<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=InspectorService.DescribeAssessmentTargets']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetInspectorServiceDescribeAssessmentTargetsKey()
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
            (typeof client)['#X-Amz-Target=InspectorService.DescribeAssessmentTargets']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=InspectorService.DescribeAssessmentTargets'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetInspectorServiceDescribeAssessmentTemplatesKey() {
  return [
    '#X-Amz-Target=InspectorService.DescribeAssessmentTemplates',
    '/#X-Amz-Target=InspectorService.DescribeAssessmentTemplates',
    'POST',
  ] as const
}

export function usePostXAmzTargetInspectorServiceDescribeAssessmentTemplates<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=InspectorService.DescribeAssessmentTemplates']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetInspectorServiceDescribeAssessmentTemplatesKey()
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
            (typeof client)['#X-Amz-Target=InspectorService.DescribeAssessmentTemplates']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=InspectorService.DescribeAssessmentTemplates'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetInspectorServiceDescribeCrossAccountAccessRoleKey() {
  return [
    '#X-Amz-Target=InspectorService.DescribeCrossAccountAccessRole',
    '/#X-Amz-Target=InspectorService.DescribeCrossAccountAccessRole',
    'POST',
  ] as const
}

export function usePostXAmzTargetInspectorServiceDescribeCrossAccountAccessRole<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=InspectorService.DescribeCrossAccountAccessRole']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetInspectorServiceDescribeCrossAccountAccessRoleKey()
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
            (typeof client)['#X-Amz-Target=InspectorService.DescribeCrossAccountAccessRole']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=InspectorService.DescribeCrossAccountAccessRole'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetInspectorServiceDescribeExclusionsKey() {
  return [
    '#X-Amz-Target=InspectorService.DescribeExclusions',
    '/#X-Amz-Target=InspectorService.DescribeExclusions',
    'POST',
  ] as const
}

export function usePostXAmzTargetInspectorServiceDescribeExclusions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=InspectorService.DescribeExclusions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetInspectorServiceDescribeExclusionsKey()
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
            (typeof client)['#X-Amz-Target=InspectorService.DescribeExclusions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=InspectorService.DescribeExclusions'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetInspectorServiceDescribeFindingsKey() {
  return [
    '#X-Amz-Target=InspectorService.DescribeFindings',
    '/#X-Amz-Target=InspectorService.DescribeFindings',
    'POST',
  ] as const
}

export function usePostXAmzTargetInspectorServiceDescribeFindings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=InspectorService.DescribeFindings']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetInspectorServiceDescribeFindingsKey()
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
            (typeof client)['#X-Amz-Target=InspectorService.DescribeFindings']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=InspectorService.DescribeFindings'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetInspectorServiceDescribeResourceGroupsKey() {
  return [
    '#X-Amz-Target=InspectorService.DescribeResourceGroups',
    '/#X-Amz-Target=InspectorService.DescribeResourceGroups',
    'POST',
  ] as const
}

export function usePostXAmzTargetInspectorServiceDescribeResourceGroups<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=InspectorService.DescribeResourceGroups']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetInspectorServiceDescribeResourceGroupsKey()
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
            (typeof client)['#X-Amz-Target=InspectorService.DescribeResourceGroups']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=InspectorService.DescribeResourceGroups'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetInspectorServiceDescribeRulesPackagesKey() {
  return [
    '#X-Amz-Target=InspectorService.DescribeRulesPackages',
    '/#X-Amz-Target=InspectorService.DescribeRulesPackages',
    'POST',
  ] as const
}

export function usePostXAmzTargetInspectorServiceDescribeRulesPackages<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=InspectorService.DescribeRulesPackages']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetInspectorServiceDescribeRulesPackagesKey()
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
            (typeof client)['#X-Amz-Target=InspectorService.DescribeRulesPackages']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=InspectorService.DescribeRulesPackages'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetInspectorServiceGetAssessmentReportKey() {
  return [
    '#X-Amz-Target=InspectorService.GetAssessmentReport',
    '/#X-Amz-Target=InspectorService.GetAssessmentReport',
    'POST',
  ] as const
}

export function usePostXAmzTargetInspectorServiceGetAssessmentReport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=InspectorService.GetAssessmentReport']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetInspectorServiceGetAssessmentReportKey()
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
            (typeof client)['#X-Amz-Target=InspectorService.GetAssessmentReport']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=InspectorService.GetAssessmentReport'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetInspectorServiceGetExclusionsPreviewKey() {
  return [
    '#X-Amz-Target=InspectorService.GetExclusionsPreview',
    '/#X-Amz-Target=InspectorService.GetExclusionsPreview',
    'POST',
  ] as const
}

export function usePostXAmzTargetInspectorServiceGetExclusionsPreview<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=InspectorService.GetExclusionsPreview']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetInspectorServiceGetExclusionsPreviewKey()
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
            (typeof client)['#X-Amz-Target=InspectorService.GetExclusionsPreview']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=InspectorService.GetExclusionsPreview'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetInspectorServiceGetTelemetryMetadataKey() {
  return [
    '#X-Amz-Target=InspectorService.GetTelemetryMetadata',
    '/#X-Amz-Target=InspectorService.GetTelemetryMetadata',
    'POST',
  ] as const
}

export function usePostXAmzTargetInspectorServiceGetTelemetryMetadata<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=InspectorService.GetTelemetryMetadata']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetInspectorServiceGetTelemetryMetadataKey()
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
            (typeof client)['#X-Amz-Target=InspectorService.GetTelemetryMetadata']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=InspectorService.GetTelemetryMetadata'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetInspectorServiceListAssessmentRunAgentsKey() {
  return [
    '#X-Amz-Target=InspectorService.ListAssessmentRunAgents',
    '/#X-Amz-Target=InspectorService.ListAssessmentRunAgents',
    'POST',
  ] as const
}

export function usePostXAmzTargetInspectorServiceListAssessmentRunAgents<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=InspectorService.ListAssessmentRunAgents']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetInspectorServiceListAssessmentRunAgentsKey()
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
            (typeof client)['#X-Amz-Target=InspectorService.ListAssessmentRunAgents']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=InspectorService.ListAssessmentRunAgents'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetInspectorServiceListAssessmentRunsKey() {
  return [
    '#X-Amz-Target=InspectorService.ListAssessmentRuns',
    '/#X-Amz-Target=InspectorService.ListAssessmentRuns',
    'POST',
  ] as const
}

export function usePostXAmzTargetInspectorServiceListAssessmentRuns<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=InspectorService.ListAssessmentRuns']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetInspectorServiceListAssessmentRunsKey()
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
            (typeof client)['#X-Amz-Target=InspectorService.ListAssessmentRuns']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=InspectorService.ListAssessmentRuns'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetInspectorServiceListAssessmentTargetsKey() {
  return [
    '#X-Amz-Target=InspectorService.ListAssessmentTargets',
    '/#X-Amz-Target=InspectorService.ListAssessmentTargets',
    'POST',
  ] as const
}

export function usePostXAmzTargetInspectorServiceListAssessmentTargets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=InspectorService.ListAssessmentTargets']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetInspectorServiceListAssessmentTargetsKey()
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
            (typeof client)['#X-Amz-Target=InspectorService.ListAssessmentTargets']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=InspectorService.ListAssessmentTargets'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetInspectorServiceListAssessmentTemplatesKey() {
  return [
    '#X-Amz-Target=InspectorService.ListAssessmentTemplates',
    '/#X-Amz-Target=InspectorService.ListAssessmentTemplates',
    'POST',
  ] as const
}

export function usePostXAmzTargetInspectorServiceListAssessmentTemplates<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=InspectorService.ListAssessmentTemplates']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetInspectorServiceListAssessmentTemplatesKey()
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
            (typeof client)['#X-Amz-Target=InspectorService.ListAssessmentTemplates']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=InspectorService.ListAssessmentTemplates'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetInspectorServiceListEventSubscriptionsKey() {
  return [
    '#X-Amz-Target=InspectorService.ListEventSubscriptions',
    '/#X-Amz-Target=InspectorService.ListEventSubscriptions',
    'POST',
  ] as const
}

export function usePostXAmzTargetInspectorServiceListEventSubscriptions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=InspectorService.ListEventSubscriptions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetInspectorServiceListEventSubscriptionsKey()
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
            (typeof client)['#X-Amz-Target=InspectorService.ListEventSubscriptions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=InspectorService.ListEventSubscriptions'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetInspectorServiceListExclusionsKey() {
  return [
    '#X-Amz-Target=InspectorService.ListExclusions',
    '/#X-Amz-Target=InspectorService.ListExclusions',
    'POST',
  ] as const
}

export function usePostXAmzTargetInspectorServiceListExclusions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=InspectorService.ListExclusions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetInspectorServiceListExclusionsKey()
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
            (typeof client)['#X-Amz-Target=InspectorService.ListExclusions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=InspectorService.ListExclusions'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetInspectorServiceListFindingsKey() {
  return [
    '#X-Amz-Target=InspectorService.ListFindings',
    '/#X-Amz-Target=InspectorService.ListFindings',
    'POST',
  ] as const
}

export function usePostXAmzTargetInspectorServiceListFindings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=InspectorService.ListFindings']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetInspectorServiceListFindingsKey()
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
            (typeof client)['#X-Amz-Target=InspectorService.ListFindings']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=InspectorService.ListFindings'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetInspectorServiceListRulesPackagesKey() {
  return [
    '#X-Amz-Target=InspectorService.ListRulesPackages',
    '/#X-Amz-Target=InspectorService.ListRulesPackages',
    'POST',
  ] as const
}

export function usePostXAmzTargetInspectorServiceListRulesPackages<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=InspectorService.ListRulesPackages']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetInspectorServiceListRulesPackagesKey()
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
            (typeof client)['#X-Amz-Target=InspectorService.ListRulesPackages']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=InspectorService.ListRulesPackages'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetInspectorServiceListTagsForResourceKey() {
  return [
    '#X-Amz-Target=InspectorService.ListTagsForResource',
    '/#X-Amz-Target=InspectorService.ListTagsForResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetInspectorServiceListTagsForResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=InspectorService.ListTagsForResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetInspectorServiceListTagsForResourceKey()
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
            (typeof client)['#X-Amz-Target=InspectorService.ListTagsForResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=InspectorService.ListTagsForResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetInspectorServicePreviewAgentsKey() {
  return [
    '#X-Amz-Target=InspectorService.PreviewAgents',
    '/#X-Amz-Target=InspectorService.PreviewAgents',
    'POST',
  ] as const
}

export function usePostXAmzTargetInspectorServicePreviewAgents<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=InspectorService.PreviewAgents']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetInspectorServicePreviewAgentsKey()
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
            (typeof client)['#X-Amz-Target=InspectorService.PreviewAgents']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=InspectorService.PreviewAgents'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetInspectorServiceRegisterCrossAccountAccessRoleKey() {
  return [
    '#X-Amz-Target=InspectorService.RegisterCrossAccountAccessRole',
    '/#X-Amz-Target=InspectorService.RegisterCrossAccountAccessRole',
    'POST',
  ] as const
}

export function usePostXAmzTargetInspectorServiceRegisterCrossAccountAccessRole<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=InspectorService.RegisterCrossAccountAccessRole']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetInspectorServiceRegisterCrossAccountAccessRoleKey()
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
            (typeof client)['#X-Amz-Target=InspectorService.RegisterCrossAccountAccessRole']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=InspectorService.RegisterCrossAccountAccessRole'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetInspectorServiceRemoveAttributesFromFindingsKey() {
  return [
    '#X-Amz-Target=InspectorService.RemoveAttributesFromFindings',
    '/#X-Amz-Target=InspectorService.RemoveAttributesFromFindings',
    'POST',
  ] as const
}

export function usePostXAmzTargetInspectorServiceRemoveAttributesFromFindings<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=InspectorService.RemoveAttributesFromFindings']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetInspectorServiceRemoveAttributesFromFindingsKey()
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
            (typeof client)['#X-Amz-Target=InspectorService.RemoveAttributesFromFindings']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=InspectorService.RemoveAttributesFromFindings'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetInspectorServiceSetTagsForResourceKey() {
  return [
    '#X-Amz-Target=InspectorService.SetTagsForResource',
    '/#X-Amz-Target=InspectorService.SetTagsForResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetInspectorServiceSetTagsForResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=InspectorService.SetTagsForResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetInspectorServiceSetTagsForResourceKey()
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
            (typeof client)['#X-Amz-Target=InspectorService.SetTagsForResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=InspectorService.SetTagsForResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetInspectorServiceStartAssessmentRunKey() {
  return [
    '#X-Amz-Target=InspectorService.StartAssessmentRun',
    '/#X-Amz-Target=InspectorService.StartAssessmentRun',
    'POST',
  ] as const
}

export function usePostXAmzTargetInspectorServiceStartAssessmentRun<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=InspectorService.StartAssessmentRun']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetInspectorServiceStartAssessmentRunKey()
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
            (typeof client)['#X-Amz-Target=InspectorService.StartAssessmentRun']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=InspectorService.StartAssessmentRun'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetInspectorServiceStopAssessmentRunKey() {
  return [
    '#X-Amz-Target=InspectorService.StopAssessmentRun',
    '/#X-Amz-Target=InspectorService.StopAssessmentRun',
    'POST',
  ] as const
}

export function usePostXAmzTargetInspectorServiceStopAssessmentRun<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=InspectorService.StopAssessmentRun']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetInspectorServiceStopAssessmentRunKey()
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
            (typeof client)['#X-Amz-Target=InspectorService.StopAssessmentRun']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=InspectorService.StopAssessmentRun'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetInspectorServiceSubscribeToEventKey() {
  return [
    '#X-Amz-Target=InspectorService.SubscribeToEvent',
    '/#X-Amz-Target=InspectorService.SubscribeToEvent',
    'POST',
  ] as const
}

export function usePostXAmzTargetInspectorServiceSubscribeToEvent<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=InspectorService.SubscribeToEvent']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetInspectorServiceSubscribeToEventKey()
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
            (typeof client)['#X-Amz-Target=InspectorService.SubscribeToEvent']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=InspectorService.SubscribeToEvent'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetInspectorServiceUnsubscribeFromEventKey() {
  return [
    '#X-Amz-Target=InspectorService.UnsubscribeFromEvent',
    '/#X-Amz-Target=InspectorService.UnsubscribeFromEvent',
    'POST',
  ] as const
}

export function usePostXAmzTargetInspectorServiceUnsubscribeFromEvent<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=InspectorService.UnsubscribeFromEvent']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetInspectorServiceUnsubscribeFromEventKey()
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
            (typeof client)['#X-Amz-Target=InspectorService.UnsubscribeFromEvent']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=InspectorService.UnsubscribeFromEvent'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetInspectorServiceUpdateAssessmentTargetKey() {
  return [
    '#X-Amz-Target=InspectorService.UpdateAssessmentTarget',
    '/#X-Amz-Target=InspectorService.UpdateAssessmentTarget',
    'POST',
  ] as const
}

export function usePostXAmzTargetInspectorServiceUpdateAssessmentTarget<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=InspectorService.UpdateAssessmentTarget']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetInspectorServiceUpdateAssessmentTargetKey()
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
            (typeof client)['#X-Amz-Target=InspectorService.UpdateAssessmentTarget']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=InspectorService.UpdateAssessmentTarget'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
