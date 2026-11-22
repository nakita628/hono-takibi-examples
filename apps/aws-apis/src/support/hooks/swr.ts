import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetAWSSupport_20130415AddAttachmentsToSetKey() {
  return ['#X-Amz-Target=AWSSupport_20130415.AddAttachmentsToSet'] as const
}

export function getXAmzTargetAWSSupport_20130415AddCommunicationToCaseKey() {
  return ['#X-Amz-Target=AWSSupport_20130415.AddCommunicationToCase'] as const
}

export function getXAmzTargetAWSSupport_20130415CreateCaseKey() {
  return ['#X-Amz-Target=AWSSupport_20130415.CreateCase'] as const
}

export function getXAmzTargetAWSSupport_20130415DescribeAttachmentKey() {
  return ['#X-Amz-Target=AWSSupport_20130415.DescribeAttachment'] as const
}

export function getXAmzTargetAWSSupport_20130415DescribeCasesKey() {
  return ['#X-Amz-Target=AWSSupport_20130415.DescribeCases'] as const
}

export function getXAmzTargetAWSSupport_20130415DescribeCommunicationsKey() {
  return ['#X-Amz-Target=AWSSupport_20130415.DescribeCommunications'] as const
}

export function getXAmzTargetAWSSupport_20130415DescribeServicesKey() {
  return ['#X-Amz-Target=AWSSupport_20130415.DescribeServices'] as const
}

export function getXAmzTargetAWSSupport_20130415DescribeSeverityLevelsKey() {
  return ['#X-Amz-Target=AWSSupport_20130415.DescribeSeverityLevels'] as const
}

export function getXAmzTargetAWSSupport_20130415DescribeTrustedAdvisorCheckRefreshStatusesKey() {
  return ['#X-Amz-Target=AWSSupport_20130415.DescribeTrustedAdvisorCheckRefreshStatuses'] as const
}

export function getXAmzTargetAWSSupport_20130415DescribeTrustedAdvisorCheckResultKey() {
  return ['#X-Amz-Target=AWSSupport_20130415.DescribeTrustedAdvisorCheckResult'] as const
}

export function getXAmzTargetAWSSupport_20130415DescribeTrustedAdvisorCheckSummariesKey() {
  return ['#X-Amz-Target=AWSSupport_20130415.DescribeTrustedAdvisorCheckSummaries'] as const
}

export function getXAmzTargetAWSSupport_20130415DescribeTrustedAdvisorChecksKey() {
  return ['#X-Amz-Target=AWSSupport_20130415.DescribeTrustedAdvisorChecks'] as const
}

export function getXAmzTargetAWSSupport_20130415RefreshTrustedAdvisorCheckKey() {
  return ['#X-Amz-Target=AWSSupport_20130415.RefreshTrustedAdvisorCheck'] as const
}

export function getXAmzTargetAWSSupport_20130415ResolveCaseKey() {
  return ['#X-Amz-Target=AWSSupport_20130415.ResolveCase'] as const
}

export function getPostXAmzTargetAWSSupport20130415AddAttachmentsToSetKey() {
  return [
    '#X-Amz-Target=AWSSupport_20130415.AddAttachmentsToSet',
    '/#X-Amz-Target=AWSSupport_20130415.AddAttachmentsToSet',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSSupport20130415AddAttachmentsToSet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSSupport_20130415.AddAttachmentsToSet']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSSupport_20130415.AddAttachmentsToSet']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSSupport20130415AddAttachmentsToSetKey()
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
            (typeof client)['#X-Amz-Target=AWSSupport_20130415.AddAttachmentsToSet']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSSupport_20130415.AddAttachmentsToSet'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSSupport20130415AddCommunicationToCaseKey() {
  return [
    '#X-Amz-Target=AWSSupport_20130415.AddCommunicationToCase',
    '/#X-Amz-Target=AWSSupport_20130415.AddCommunicationToCase',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSSupport20130415AddCommunicationToCase<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSSupport_20130415.AddCommunicationToCase']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSSupport_20130415.AddCommunicationToCase']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSSupport20130415AddCommunicationToCaseKey()
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
            (typeof client)['#X-Amz-Target=AWSSupport_20130415.AddCommunicationToCase']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSSupport_20130415.AddCommunicationToCase'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSSupport20130415CreateCaseKey() {
  return [
    '#X-Amz-Target=AWSSupport_20130415.CreateCase',
    '/#X-Amz-Target=AWSSupport_20130415.CreateCase',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSSupport20130415CreateCase<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSSupport_20130415.CreateCase']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSSupport_20130415.CreateCase']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSSupport20130415CreateCaseKey()
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
            (typeof client)['#X-Amz-Target=AWSSupport_20130415.CreateCase']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSSupport_20130415.CreateCase'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSSupport20130415DescribeAttachmentKey() {
  return [
    '#X-Amz-Target=AWSSupport_20130415.DescribeAttachment',
    '/#X-Amz-Target=AWSSupport_20130415.DescribeAttachment',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSSupport20130415DescribeAttachment<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSSupport_20130415.DescribeAttachment']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSSupport_20130415.DescribeAttachment']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSSupport20130415DescribeAttachmentKey()
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
            (typeof client)['#X-Amz-Target=AWSSupport_20130415.DescribeAttachment']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSSupport_20130415.DescribeAttachment'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSSupport20130415DescribeCasesKey() {
  return [
    '#X-Amz-Target=AWSSupport_20130415.DescribeCases',
    '/#X-Amz-Target=AWSSupport_20130415.DescribeCases',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSSupport20130415DescribeCases<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSSupport_20130415.DescribeCases']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSSupport_20130415.DescribeCases']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSSupport20130415DescribeCasesKey()
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
            (typeof client)['#X-Amz-Target=AWSSupport_20130415.DescribeCases']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSSupport_20130415.DescribeCases'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSSupport20130415DescribeCommunicationsKey() {
  return [
    '#X-Amz-Target=AWSSupport_20130415.DescribeCommunications',
    '/#X-Amz-Target=AWSSupport_20130415.DescribeCommunications',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSSupport20130415DescribeCommunications<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSSupport_20130415.DescribeCommunications']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSSupport_20130415.DescribeCommunications']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSSupport20130415DescribeCommunicationsKey()
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
            (typeof client)['#X-Amz-Target=AWSSupport_20130415.DescribeCommunications']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSSupport_20130415.DescribeCommunications'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSSupport20130415DescribeServicesKey() {
  return [
    '#X-Amz-Target=AWSSupport_20130415.DescribeServices',
    '/#X-Amz-Target=AWSSupport_20130415.DescribeServices',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSSupport20130415DescribeServices<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSSupport_20130415.DescribeServices']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSSupport_20130415.DescribeServices']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSSupport20130415DescribeServicesKey()
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
            (typeof client)['#X-Amz-Target=AWSSupport_20130415.DescribeServices']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSSupport_20130415.DescribeServices'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSSupport20130415DescribeSeverityLevelsKey() {
  return [
    '#X-Amz-Target=AWSSupport_20130415.DescribeSeverityLevels',
    '/#X-Amz-Target=AWSSupport_20130415.DescribeSeverityLevels',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSSupport20130415DescribeSeverityLevels<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSSupport_20130415.DescribeSeverityLevels']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSSupport_20130415.DescribeSeverityLevels']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSSupport20130415DescribeSeverityLevelsKey()
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
            (typeof client)['#X-Amz-Target=AWSSupport_20130415.DescribeSeverityLevels']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSSupport_20130415.DescribeSeverityLevels'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSSupport20130415DescribeTrustedAdvisorCheckRefreshStatusesKey() {
  return [
    '#X-Amz-Target=AWSSupport_20130415.DescribeTrustedAdvisorCheckRefreshStatuses',
    '/#X-Amz-Target=AWSSupport_20130415.DescribeTrustedAdvisorCheckRefreshStatuses',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSSupport20130415DescribeTrustedAdvisorCheckRefreshStatuses<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSSupport_20130415.DescribeTrustedAdvisorCheckRefreshStatuses']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSSupport_20130415.DescribeTrustedAdvisorCheckRefreshStatuses']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSSupport20130415DescribeTrustedAdvisorCheckRefreshStatusesKey()
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
            (typeof client)['#X-Amz-Target=AWSSupport_20130415.DescribeTrustedAdvisorCheckRefreshStatuses']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=AWSSupport_20130415.DescribeTrustedAdvisorCheckRefreshStatuses'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSSupport20130415DescribeTrustedAdvisorCheckResultKey() {
  return [
    '#X-Amz-Target=AWSSupport_20130415.DescribeTrustedAdvisorCheckResult',
    '/#X-Amz-Target=AWSSupport_20130415.DescribeTrustedAdvisorCheckResult',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSSupport20130415DescribeTrustedAdvisorCheckResult<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSSupport_20130415.DescribeTrustedAdvisorCheckResult']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSSupport_20130415.DescribeTrustedAdvisorCheckResult']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSSupport20130415DescribeTrustedAdvisorCheckResultKey()
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
            (typeof client)['#X-Amz-Target=AWSSupport_20130415.DescribeTrustedAdvisorCheckResult']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSSupport_20130415.DescribeTrustedAdvisorCheckResult'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSSupport20130415DescribeTrustedAdvisorCheckSummariesKey() {
  return [
    '#X-Amz-Target=AWSSupport_20130415.DescribeTrustedAdvisorCheckSummaries',
    '/#X-Amz-Target=AWSSupport_20130415.DescribeTrustedAdvisorCheckSummaries',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSSupport20130415DescribeTrustedAdvisorCheckSummaries<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSSupport_20130415.DescribeTrustedAdvisorCheckSummaries']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSSupport_20130415.DescribeTrustedAdvisorCheckSummaries']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSSupport20130415DescribeTrustedAdvisorCheckSummariesKey()
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
            (typeof client)['#X-Amz-Target=AWSSupport_20130415.DescribeTrustedAdvisorCheckSummaries']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSSupport_20130415.DescribeTrustedAdvisorCheckSummaries'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSSupport20130415DescribeTrustedAdvisorChecksKey() {
  return [
    '#X-Amz-Target=AWSSupport_20130415.DescribeTrustedAdvisorChecks',
    '/#X-Amz-Target=AWSSupport_20130415.DescribeTrustedAdvisorChecks',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSSupport20130415DescribeTrustedAdvisorChecks<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSSupport_20130415.DescribeTrustedAdvisorChecks']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSSupport_20130415.DescribeTrustedAdvisorChecks']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSSupport20130415DescribeTrustedAdvisorChecksKey()
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
            (typeof client)['#X-Amz-Target=AWSSupport_20130415.DescribeTrustedAdvisorChecks']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSSupport_20130415.DescribeTrustedAdvisorChecks'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSSupport20130415RefreshTrustedAdvisorCheckKey() {
  return [
    '#X-Amz-Target=AWSSupport_20130415.RefreshTrustedAdvisorCheck',
    '/#X-Amz-Target=AWSSupport_20130415.RefreshTrustedAdvisorCheck',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSSupport20130415RefreshTrustedAdvisorCheck<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSSupport_20130415.RefreshTrustedAdvisorCheck']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSSupport_20130415.RefreshTrustedAdvisorCheck']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSSupport20130415RefreshTrustedAdvisorCheckKey()
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
            (typeof client)['#X-Amz-Target=AWSSupport_20130415.RefreshTrustedAdvisorCheck']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSSupport_20130415.RefreshTrustedAdvisorCheck'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSSupport20130415ResolveCaseKey() {
  return [
    '#X-Amz-Target=AWSSupport_20130415.ResolveCase',
    '/#X-Amz-Target=AWSSupport_20130415.ResolveCase',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSSupport20130415ResolveCase<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSSupport_20130415.ResolveCase']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSSupport_20130415.ResolveCase']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSSupport20130415ResolveCaseKey()
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
            (typeof client)['#X-Amz-Target=AWSSupport_20130415.ResolveCase']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSSupport_20130415.ResolveCase'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
