import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetEC2WindowsBarleyServiceCreateApplicationKey() {
  return ['#X-Amz-Target=EC2WindowsBarleyService.CreateApplication'] as const
}

export function getXAmzTargetEC2WindowsBarleyServiceCreateComponentKey() {
  return ['#X-Amz-Target=EC2WindowsBarleyService.CreateComponent'] as const
}

export function getXAmzTargetEC2WindowsBarleyServiceCreateLogPatternKey() {
  return ['#X-Amz-Target=EC2WindowsBarleyService.CreateLogPattern'] as const
}

export function getXAmzTargetEC2WindowsBarleyServiceDeleteApplicationKey() {
  return ['#X-Amz-Target=EC2WindowsBarleyService.DeleteApplication'] as const
}

export function getXAmzTargetEC2WindowsBarleyServiceDeleteComponentKey() {
  return ['#X-Amz-Target=EC2WindowsBarleyService.DeleteComponent'] as const
}

export function getXAmzTargetEC2WindowsBarleyServiceDeleteLogPatternKey() {
  return ['#X-Amz-Target=EC2WindowsBarleyService.DeleteLogPattern'] as const
}

export function getXAmzTargetEC2WindowsBarleyServiceDescribeApplicationKey() {
  return ['#X-Amz-Target=EC2WindowsBarleyService.DescribeApplication'] as const
}

export function getXAmzTargetEC2WindowsBarleyServiceDescribeComponentKey() {
  return ['#X-Amz-Target=EC2WindowsBarleyService.DescribeComponent'] as const
}

export function getXAmzTargetEC2WindowsBarleyServiceDescribeComponentConfigurationKey() {
  return ['#X-Amz-Target=EC2WindowsBarleyService.DescribeComponentConfiguration'] as const
}

export function getXAmzTargetEC2WindowsBarleyServiceDescribeComponentConfigurationRecommendationKey() {
  return [
    '#X-Amz-Target=EC2WindowsBarleyService.DescribeComponentConfigurationRecommendation',
  ] as const
}

export function getXAmzTargetEC2WindowsBarleyServiceDescribeLogPatternKey() {
  return ['#X-Amz-Target=EC2WindowsBarleyService.DescribeLogPattern'] as const
}

export function getXAmzTargetEC2WindowsBarleyServiceDescribeObservationKey() {
  return ['#X-Amz-Target=EC2WindowsBarleyService.DescribeObservation'] as const
}

export function getXAmzTargetEC2WindowsBarleyServiceDescribeProblemKey() {
  return ['#X-Amz-Target=EC2WindowsBarleyService.DescribeProblem'] as const
}

export function getXAmzTargetEC2WindowsBarleyServiceDescribeProblemObservationsKey() {
  return ['#X-Amz-Target=EC2WindowsBarleyService.DescribeProblemObservations'] as const
}

export function getXAmzTargetEC2WindowsBarleyServiceListApplicationsKey() {
  return ['#X-Amz-Target=EC2WindowsBarleyService.ListApplications'] as const
}

export function getXAmzTargetEC2WindowsBarleyServiceListComponentsKey() {
  return ['#X-Amz-Target=EC2WindowsBarleyService.ListComponents'] as const
}

export function getXAmzTargetEC2WindowsBarleyServiceListConfigurationHistoryKey() {
  return ['#X-Amz-Target=EC2WindowsBarleyService.ListConfigurationHistory'] as const
}

export function getXAmzTargetEC2WindowsBarleyServiceListLogPatternSetsKey() {
  return ['#X-Amz-Target=EC2WindowsBarleyService.ListLogPatternSets'] as const
}

export function getXAmzTargetEC2WindowsBarleyServiceListLogPatternsKey() {
  return ['#X-Amz-Target=EC2WindowsBarleyService.ListLogPatterns'] as const
}

export function getXAmzTargetEC2WindowsBarleyServiceListProblemsKey() {
  return ['#X-Amz-Target=EC2WindowsBarleyService.ListProblems'] as const
}

export function getXAmzTargetEC2WindowsBarleyServiceListTagsForResourceKey() {
  return ['#X-Amz-Target=EC2WindowsBarleyService.ListTagsForResource'] as const
}

export function getXAmzTargetEC2WindowsBarleyServiceTagResourceKey() {
  return ['#X-Amz-Target=EC2WindowsBarleyService.TagResource'] as const
}

export function getXAmzTargetEC2WindowsBarleyServiceUntagResourceKey() {
  return ['#X-Amz-Target=EC2WindowsBarleyService.UntagResource'] as const
}

export function getXAmzTargetEC2WindowsBarleyServiceUpdateApplicationKey() {
  return ['#X-Amz-Target=EC2WindowsBarleyService.UpdateApplication'] as const
}

export function getXAmzTargetEC2WindowsBarleyServiceUpdateComponentKey() {
  return ['#X-Amz-Target=EC2WindowsBarleyService.UpdateComponent'] as const
}

export function getXAmzTargetEC2WindowsBarleyServiceUpdateComponentConfigurationKey() {
  return ['#X-Amz-Target=EC2WindowsBarleyService.UpdateComponentConfiguration'] as const
}

export function getXAmzTargetEC2WindowsBarleyServiceUpdateLogPatternKey() {
  return ['#X-Amz-Target=EC2WindowsBarleyService.UpdateLogPattern'] as const
}

export function getPostXAmzTargetEC2WindowsBarleyServiceCreateApplicationKey() {
  return [
    '#X-Amz-Target=EC2WindowsBarleyService.CreateApplication',
    '/#X-Amz-Target=EC2WindowsBarleyService.CreateApplication',
    'POST',
  ] as const
}

export function usePostXAmzTargetEC2WindowsBarleyServiceCreateApplication<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.CreateApplication']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.CreateApplication']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetEC2WindowsBarleyServiceCreateApplicationKey()
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
            (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.CreateApplication']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=EC2WindowsBarleyService.CreateApplication'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetEC2WindowsBarleyServiceCreateComponentKey() {
  return [
    '#X-Amz-Target=EC2WindowsBarleyService.CreateComponent',
    '/#X-Amz-Target=EC2WindowsBarleyService.CreateComponent',
    'POST',
  ] as const
}

export function usePostXAmzTargetEC2WindowsBarleyServiceCreateComponent<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.CreateComponent']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.CreateComponent']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetEC2WindowsBarleyServiceCreateComponentKey()
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
            (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.CreateComponent']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=EC2WindowsBarleyService.CreateComponent'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetEC2WindowsBarleyServiceCreateLogPatternKey() {
  return [
    '#X-Amz-Target=EC2WindowsBarleyService.CreateLogPattern',
    '/#X-Amz-Target=EC2WindowsBarleyService.CreateLogPattern',
    'POST',
  ] as const
}

export function usePostXAmzTargetEC2WindowsBarleyServiceCreateLogPattern<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.CreateLogPattern']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.CreateLogPattern']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetEC2WindowsBarleyServiceCreateLogPatternKey()
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
            (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.CreateLogPattern']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=EC2WindowsBarleyService.CreateLogPattern'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetEC2WindowsBarleyServiceDeleteApplicationKey() {
  return [
    '#X-Amz-Target=EC2WindowsBarleyService.DeleteApplication',
    '/#X-Amz-Target=EC2WindowsBarleyService.DeleteApplication',
    'POST',
  ] as const
}

export function usePostXAmzTargetEC2WindowsBarleyServiceDeleteApplication<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.DeleteApplication']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.DeleteApplication']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetEC2WindowsBarleyServiceDeleteApplicationKey()
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
            (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.DeleteApplication']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=EC2WindowsBarleyService.DeleteApplication'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetEC2WindowsBarleyServiceDeleteComponentKey() {
  return [
    '#X-Amz-Target=EC2WindowsBarleyService.DeleteComponent',
    '/#X-Amz-Target=EC2WindowsBarleyService.DeleteComponent',
    'POST',
  ] as const
}

export function usePostXAmzTargetEC2WindowsBarleyServiceDeleteComponent<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.DeleteComponent']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.DeleteComponent']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetEC2WindowsBarleyServiceDeleteComponentKey()
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
            (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.DeleteComponent']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=EC2WindowsBarleyService.DeleteComponent'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetEC2WindowsBarleyServiceDeleteLogPatternKey() {
  return [
    '#X-Amz-Target=EC2WindowsBarleyService.DeleteLogPattern',
    '/#X-Amz-Target=EC2WindowsBarleyService.DeleteLogPattern',
    'POST',
  ] as const
}

export function usePostXAmzTargetEC2WindowsBarleyServiceDeleteLogPattern<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.DeleteLogPattern']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.DeleteLogPattern']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetEC2WindowsBarleyServiceDeleteLogPatternKey()
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
            (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.DeleteLogPattern']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=EC2WindowsBarleyService.DeleteLogPattern'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetEC2WindowsBarleyServiceDescribeApplicationKey() {
  return [
    '#X-Amz-Target=EC2WindowsBarleyService.DescribeApplication',
    '/#X-Amz-Target=EC2WindowsBarleyService.DescribeApplication',
    'POST',
  ] as const
}

export function usePostXAmzTargetEC2WindowsBarleyServiceDescribeApplication<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.DescribeApplication']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.DescribeApplication']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetEC2WindowsBarleyServiceDescribeApplicationKey()
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
            (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.DescribeApplication']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=EC2WindowsBarleyService.DescribeApplication'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetEC2WindowsBarleyServiceDescribeComponentKey() {
  return [
    '#X-Amz-Target=EC2WindowsBarleyService.DescribeComponent',
    '/#X-Amz-Target=EC2WindowsBarleyService.DescribeComponent',
    'POST',
  ] as const
}

export function usePostXAmzTargetEC2WindowsBarleyServiceDescribeComponent<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.DescribeComponent']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.DescribeComponent']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetEC2WindowsBarleyServiceDescribeComponentKey()
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
            (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.DescribeComponent']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=EC2WindowsBarleyService.DescribeComponent'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetEC2WindowsBarleyServiceDescribeComponentConfigurationKey() {
  return [
    '#X-Amz-Target=EC2WindowsBarleyService.DescribeComponentConfiguration',
    '/#X-Amz-Target=EC2WindowsBarleyService.DescribeComponentConfiguration',
    'POST',
  ] as const
}

export function usePostXAmzTargetEC2WindowsBarleyServiceDescribeComponentConfiguration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.DescribeComponentConfiguration']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.DescribeComponentConfiguration']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetEC2WindowsBarleyServiceDescribeComponentConfigurationKey()
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
            (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.DescribeComponentConfiguration']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=EC2WindowsBarleyService.DescribeComponentConfiguration'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetEC2WindowsBarleyServiceDescribeComponentConfigurationRecommendationKey() {
  return [
    '#X-Amz-Target=EC2WindowsBarleyService.DescribeComponentConfigurationRecommendation',
    '/#X-Amz-Target=EC2WindowsBarleyService.DescribeComponentConfigurationRecommendation',
    'POST',
  ] as const
}

export function usePostXAmzTargetEC2WindowsBarleyServiceDescribeComponentConfigurationRecommendation<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.DescribeComponentConfigurationRecommendation']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.DescribeComponentConfigurationRecommendation']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostXAmzTargetEC2WindowsBarleyServiceDescribeComponentConfigurationRecommendationKey()
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
            (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.DescribeComponentConfigurationRecommendation']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=EC2WindowsBarleyService.DescribeComponentConfigurationRecommendation'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetEC2WindowsBarleyServiceDescribeLogPatternKey() {
  return [
    '#X-Amz-Target=EC2WindowsBarleyService.DescribeLogPattern',
    '/#X-Amz-Target=EC2WindowsBarleyService.DescribeLogPattern',
    'POST',
  ] as const
}

export function usePostXAmzTargetEC2WindowsBarleyServiceDescribeLogPattern<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.DescribeLogPattern']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.DescribeLogPattern']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetEC2WindowsBarleyServiceDescribeLogPatternKey()
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
            (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.DescribeLogPattern']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=EC2WindowsBarleyService.DescribeLogPattern'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetEC2WindowsBarleyServiceDescribeObservationKey() {
  return [
    '#X-Amz-Target=EC2WindowsBarleyService.DescribeObservation',
    '/#X-Amz-Target=EC2WindowsBarleyService.DescribeObservation',
    'POST',
  ] as const
}

export function usePostXAmzTargetEC2WindowsBarleyServiceDescribeObservation<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.DescribeObservation']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.DescribeObservation']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetEC2WindowsBarleyServiceDescribeObservationKey()
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
            (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.DescribeObservation']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=EC2WindowsBarleyService.DescribeObservation'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetEC2WindowsBarleyServiceDescribeProblemKey() {
  return [
    '#X-Amz-Target=EC2WindowsBarleyService.DescribeProblem',
    '/#X-Amz-Target=EC2WindowsBarleyService.DescribeProblem',
    'POST',
  ] as const
}

export function usePostXAmzTargetEC2WindowsBarleyServiceDescribeProblem<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.DescribeProblem']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.DescribeProblem']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetEC2WindowsBarleyServiceDescribeProblemKey()
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
            (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.DescribeProblem']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=EC2WindowsBarleyService.DescribeProblem'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetEC2WindowsBarleyServiceDescribeProblemObservationsKey() {
  return [
    '#X-Amz-Target=EC2WindowsBarleyService.DescribeProblemObservations',
    '/#X-Amz-Target=EC2WindowsBarleyService.DescribeProblemObservations',
    'POST',
  ] as const
}

export function usePostXAmzTargetEC2WindowsBarleyServiceDescribeProblemObservations<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.DescribeProblemObservations']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.DescribeProblemObservations']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetEC2WindowsBarleyServiceDescribeProblemObservationsKey()
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
            (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.DescribeProblemObservations']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=EC2WindowsBarleyService.DescribeProblemObservations'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetEC2WindowsBarleyServiceListApplicationsKey() {
  return [
    '#X-Amz-Target=EC2WindowsBarleyService.ListApplications',
    '/#X-Amz-Target=EC2WindowsBarleyService.ListApplications',
    'POST',
  ] as const
}

export function usePostXAmzTargetEC2WindowsBarleyServiceListApplications<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.ListApplications']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.ListApplications']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetEC2WindowsBarleyServiceListApplicationsKey()
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
            (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.ListApplications']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=EC2WindowsBarleyService.ListApplications'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetEC2WindowsBarleyServiceListComponentsKey() {
  return [
    '#X-Amz-Target=EC2WindowsBarleyService.ListComponents',
    '/#X-Amz-Target=EC2WindowsBarleyService.ListComponents',
    'POST',
  ] as const
}

export function usePostXAmzTargetEC2WindowsBarleyServiceListComponents<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.ListComponents']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.ListComponents']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetEC2WindowsBarleyServiceListComponentsKey()
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
            (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.ListComponents']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=EC2WindowsBarleyService.ListComponents'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetEC2WindowsBarleyServiceListConfigurationHistoryKey() {
  return [
    '#X-Amz-Target=EC2WindowsBarleyService.ListConfigurationHistory',
    '/#X-Amz-Target=EC2WindowsBarleyService.ListConfigurationHistory',
    'POST',
  ] as const
}

export function usePostXAmzTargetEC2WindowsBarleyServiceListConfigurationHistory<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.ListConfigurationHistory']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.ListConfigurationHistory']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetEC2WindowsBarleyServiceListConfigurationHistoryKey()
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
            (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.ListConfigurationHistory']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=EC2WindowsBarleyService.ListConfigurationHistory'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetEC2WindowsBarleyServiceListLogPatternSetsKey() {
  return [
    '#X-Amz-Target=EC2WindowsBarleyService.ListLogPatternSets',
    '/#X-Amz-Target=EC2WindowsBarleyService.ListLogPatternSets',
    'POST',
  ] as const
}

export function usePostXAmzTargetEC2WindowsBarleyServiceListLogPatternSets<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.ListLogPatternSets']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.ListLogPatternSets']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetEC2WindowsBarleyServiceListLogPatternSetsKey()
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
            (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.ListLogPatternSets']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=EC2WindowsBarleyService.ListLogPatternSets'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetEC2WindowsBarleyServiceListLogPatternsKey() {
  return [
    '#X-Amz-Target=EC2WindowsBarleyService.ListLogPatterns',
    '/#X-Amz-Target=EC2WindowsBarleyService.ListLogPatterns',
    'POST',
  ] as const
}

export function usePostXAmzTargetEC2WindowsBarleyServiceListLogPatterns<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.ListLogPatterns']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.ListLogPatterns']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetEC2WindowsBarleyServiceListLogPatternsKey()
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
            (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.ListLogPatterns']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=EC2WindowsBarleyService.ListLogPatterns'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetEC2WindowsBarleyServiceListProblemsKey() {
  return [
    '#X-Amz-Target=EC2WindowsBarleyService.ListProblems',
    '/#X-Amz-Target=EC2WindowsBarleyService.ListProblems',
    'POST',
  ] as const
}

export function usePostXAmzTargetEC2WindowsBarleyServiceListProblems<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.ListProblems']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=EC2WindowsBarleyService.ListProblems']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetEC2WindowsBarleyServiceListProblemsKey()
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
            (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.ListProblems']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=EC2WindowsBarleyService.ListProblems'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetEC2WindowsBarleyServiceListTagsForResourceKey() {
  return [
    '#X-Amz-Target=EC2WindowsBarleyService.ListTagsForResource',
    '/#X-Amz-Target=EC2WindowsBarleyService.ListTagsForResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetEC2WindowsBarleyServiceListTagsForResource<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.ListTagsForResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.ListTagsForResource']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetEC2WindowsBarleyServiceListTagsForResourceKey()
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
            (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.ListTagsForResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=EC2WindowsBarleyService.ListTagsForResource'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetEC2WindowsBarleyServiceTagResourceKey() {
  return [
    '#X-Amz-Target=EC2WindowsBarleyService.TagResource',
    '/#X-Amz-Target=EC2WindowsBarleyService.TagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetEC2WindowsBarleyServiceTagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.TagResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=EC2WindowsBarleyService.TagResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetEC2WindowsBarleyServiceTagResourceKey()
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
            (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.TagResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=EC2WindowsBarleyService.TagResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetEC2WindowsBarleyServiceUntagResourceKey() {
  return [
    '#X-Amz-Target=EC2WindowsBarleyService.UntagResource',
    '/#X-Amz-Target=EC2WindowsBarleyService.UntagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetEC2WindowsBarleyServiceUntagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.UntagResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.UntagResource']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetEC2WindowsBarleyServiceUntagResourceKey()
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
            (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.UntagResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=EC2WindowsBarleyService.UntagResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetEC2WindowsBarleyServiceUpdateApplicationKey() {
  return [
    '#X-Amz-Target=EC2WindowsBarleyService.UpdateApplication',
    '/#X-Amz-Target=EC2WindowsBarleyService.UpdateApplication',
    'POST',
  ] as const
}

export function usePostXAmzTargetEC2WindowsBarleyServiceUpdateApplication<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.UpdateApplication']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.UpdateApplication']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetEC2WindowsBarleyServiceUpdateApplicationKey()
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
            (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.UpdateApplication']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=EC2WindowsBarleyService.UpdateApplication'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetEC2WindowsBarleyServiceUpdateComponentKey() {
  return [
    '#X-Amz-Target=EC2WindowsBarleyService.UpdateComponent',
    '/#X-Amz-Target=EC2WindowsBarleyService.UpdateComponent',
    'POST',
  ] as const
}

export function usePostXAmzTargetEC2WindowsBarleyServiceUpdateComponent<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.UpdateComponent']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.UpdateComponent']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetEC2WindowsBarleyServiceUpdateComponentKey()
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
            (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.UpdateComponent']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=EC2WindowsBarleyService.UpdateComponent'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetEC2WindowsBarleyServiceUpdateComponentConfigurationKey() {
  return [
    '#X-Amz-Target=EC2WindowsBarleyService.UpdateComponentConfiguration',
    '/#X-Amz-Target=EC2WindowsBarleyService.UpdateComponentConfiguration',
    'POST',
  ] as const
}

export function usePostXAmzTargetEC2WindowsBarleyServiceUpdateComponentConfiguration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.UpdateComponentConfiguration']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.UpdateComponentConfiguration']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetEC2WindowsBarleyServiceUpdateComponentConfigurationKey()
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
            (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.UpdateComponentConfiguration']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=EC2WindowsBarleyService.UpdateComponentConfiguration'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetEC2WindowsBarleyServiceUpdateLogPatternKey() {
  return [
    '#X-Amz-Target=EC2WindowsBarleyService.UpdateLogPattern',
    '/#X-Amz-Target=EC2WindowsBarleyService.UpdateLogPattern',
    'POST',
  ] as const
}

export function usePostXAmzTargetEC2WindowsBarleyServiceUpdateLogPattern<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.UpdateLogPattern']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.UpdateLogPattern']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetEC2WindowsBarleyServiceUpdateLogPatternKey()
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
            (typeof client)['#X-Amz-Target=EC2WindowsBarleyService.UpdateLogPattern']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=EC2WindowsBarleyService.UpdateLogPattern'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}
