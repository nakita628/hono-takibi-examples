import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetTimestream_20181101CancelQueryKey() {
  return ['#X-Amz-Target=Timestream_20181101.CancelQuery'] as const
}

export function getXAmzTargetTimestream_20181101CreateScheduledQueryKey() {
  return ['#X-Amz-Target=Timestream_20181101.CreateScheduledQuery'] as const
}

export function getXAmzTargetTimestream_20181101DeleteScheduledQueryKey() {
  return ['#X-Amz-Target=Timestream_20181101.DeleteScheduledQuery'] as const
}

export function getXAmzTargetTimestream_20181101DescribeEndpointsKey() {
  return ['#X-Amz-Target=Timestream_20181101.DescribeEndpoints'] as const
}

export function getXAmzTargetTimestream_20181101DescribeScheduledQueryKey() {
  return ['#X-Amz-Target=Timestream_20181101.DescribeScheduledQuery'] as const
}

export function getXAmzTargetTimestream_20181101ExecuteScheduledQueryKey() {
  return ['#X-Amz-Target=Timestream_20181101.ExecuteScheduledQuery'] as const
}

export function getXAmzTargetTimestream_20181101ListScheduledQueriesKey() {
  return ['#X-Amz-Target=Timestream_20181101.ListScheduledQueries'] as const
}

export function getXAmzTargetTimestream_20181101ListTagsForResourceKey() {
  return ['#X-Amz-Target=Timestream_20181101.ListTagsForResource'] as const
}

export function getXAmzTargetTimestream_20181101PrepareQueryKey() {
  return ['#X-Amz-Target=Timestream_20181101.PrepareQuery'] as const
}

export function getXAmzTargetTimestream_20181101QueryKey() {
  return ['#X-Amz-Target=Timestream_20181101.Query'] as const
}

export function getXAmzTargetTimestream_20181101TagResourceKey() {
  return ['#X-Amz-Target=Timestream_20181101.TagResource'] as const
}

export function getXAmzTargetTimestream_20181101UntagResourceKey() {
  return ['#X-Amz-Target=Timestream_20181101.UntagResource'] as const
}

export function getXAmzTargetTimestream_20181101UpdateScheduledQueryKey() {
  return ['#X-Amz-Target=Timestream_20181101.UpdateScheduledQuery'] as const
}

export function getPostXAmzTargetTimestream20181101CancelQueryKey() {
  return [
    '#X-Amz-Target=Timestream_20181101.CancelQuery',
    '/#X-Amz-Target=Timestream_20181101.CancelQuery',
    'POST',
  ] as const
}

export function usePostXAmzTargetTimestream20181101CancelQuery<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Timestream_20181101.CancelQuery']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Timestream_20181101.CancelQuery']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTimestream20181101CancelQueryKey()
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
            (typeof client)['#X-Amz-Target=Timestream_20181101.CancelQuery']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Timestream_20181101.CancelQuery'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTimestream20181101CreateScheduledQueryKey() {
  return [
    '#X-Amz-Target=Timestream_20181101.CreateScheduledQuery',
    '/#X-Amz-Target=Timestream_20181101.CreateScheduledQuery',
    'POST',
  ] as const
}

export function usePostXAmzTargetTimestream20181101CreateScheduledQuery<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Timestream_20181101.CreateScheduledQuery']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Timestream_20181101.CreateScheduledQuery']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTimestream20181101CreateScheduledQueryKey()
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
            (typeof client)['#X-Amz-Target=Timestream_20181101.CreateScheduledQuery']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Timestream_20181101.CreateScheduledQuery'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTimestream20181101DeleteScheduledQueryKey() {
  return [
    '#X-Amz-Target=Timestream_20181101.DeleteScheduledQuery',
    '/#X-Amz-Target=Timestream_20181101.DeleteScheduledQuery',
    'POST',
  ] as const
}

export function usePostXAmzTargetTimestream20181101DeleteScheduledQuery<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Timestream_20181101.DeleteScheduledQuery']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Timestream_20181101.DeleteScheduledQuery']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTimestream20181101DeleteScheduledQueryKey()
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
            (typeof client)['#X-Amz-Target=Timestream_20181101.DeleteScheduledQuery']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Timestream_20181101.DeleteScheduledQuery'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTimestream20181101DescribeEndpointsKey() {
  return [
    '#X-Amz-Target=Timestream_20181101.DescribeEndpoints',
    '/#X-Amz-Target=Timestream_20181101.DescribeEndpoints',
    'POST',
  ] as const
}

export function usePostXAmzTargetTimestream20181101DescribeEndpoints<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Timestream_20181101.DescribeEndpoints']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Timestream_20181101.DescribeEndpoints']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTimestream20181101DescribeEndpointsKey()
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
            (typeof client)['#X-Amz-Target=Timestream_20181101.DescribeEndpoints']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Timestream_20181101.DescribeEndpoints'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTimestream20181101DescribeScheduledQueryKey() {
  return [
    '#X-Amz-Target=Timestream_20181101.DescribeScheduledQuery',
    '/#X-Amz-Target=Timestream_20181101.DescribeScheduledQuery',
    'POST',
  ] as const
}

export function usePostXAmzTargetTimestream20181101DescribeScheduledQuery<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Timestream_20181101.DescribeScheduledQuery']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Timestream_20181101.DescribeScheduledQuery']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTimestream20181101DescribeScheduledQueryKey()
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
            (typeof client)['#X-Amz-Target=Timestream_20181101.DescribeScheduledQuery']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Timestream_20181101.DescribeScheduledQuery'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTimestream20181101ExecuteScheduledQueryKey() {
  return [
    '#X-Amz-Target=Timestream_20181101.ExecuteScheduledQuery',
    '/#X-Amz-Target=Timestream_20181101.ExecuteScheduledQuery',
    'POST',
  ] as const
}

export function usePostXAmzTargetTimestream20181101ExecuteScheduledQuery<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Timestream_20181101.ExecuteScheduledQuery']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Timestream_20181101.ExecuteScheduledQuery']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTimestream20181101ExecuteScheduledQueryKey()
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
            (typeof client)['#X-Amz-Target=Timestream_20181101.ExecuteScheduledQuery']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Timestream_20181101.ExecuteScheduledQuery'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTimestream20181101ListScheduledQueriesKey() {
  return [
    '#X-Amz-Target=Timestream_20181101.ListScheduledQueries',
    '/#X-Amz-Target=Timestream_20181101.ListScheduledQueries',
    'POST',
  ] as const
}

export function usePostXAmzTargetTimestream20181101ListScheduledQueries<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Timestream_20181101.ListScheduledQueries']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Timestream_20181101.ListScheduledQueries']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTimestream20181101ListScheduledQueriesKey()
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
            (typeof client)['#X-Amz-Target=Timestream_20181101.ListScheduledQueries']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Timestream_20181101.ListScheduledQueries'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTimestream20181101ListTagsForResourceKey() {
  return [
    '#X-Amz-Target=Timestream_20181101.ListTagsForResource',
    '/#X-Amz-Target=Timestream_20181101.ListTagsForResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetTimestream20181101ListTagsForResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Timestream_20181101.ListTagsForResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Timestream_20181101.ListTagsForResource']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTimestream20181101ListTagsForResourceKey()
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
            (typeof client)['#X-Amz-Target=Timestream_20181101.ListTagsForResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Timestream_20181101.ListTagsForResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTimestream20181101PrepareQueryKey() {
  return [
    '#X-Amz-Target=Timestream_20181101.PrepareQuery',
    '/#X-Amz-Target=Timestream_20181101.PrepareQuery',
    'POST',
  ] as const
}

export function usePostXAmzTargetTimestream20181101PrepareQuery<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Timestream_20181101.PrepareQuery']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Timestream_20181101.PrepareQuery']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTimestream20181101PrepareQueryKey()
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
            (typeof client)['#X-Amz-Target=Timestream_20181101.PrepareQuery']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Timestream_20181101.PrepareQuery'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTimestream20181101QueryKey() {
  return [
    '#X-Amz-Target=Timestream_20181101.Query',
    '/#X-Amz-Target=Timestream_20181101.Query',
    'POST',
  ] as const
}

export function usePostXAmzTargetTimestream20181101Query<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=Timestream_20181101.Query']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Timestream_20181101.Query']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTimestream20181101QueryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=Timestream_20181101.Query']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=Timestream_20181101.Query'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTimestream20181101TagResourceKey() {
  return [
    '#X-Amz-Target=Timestream_20181101.TagResource',
    '/#X-Amz-Target=Timestream_20181101.TagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetTimestream20181101TagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Timestream_20181101.TagResource']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Timestream_20181101.TagResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTimestream20181101TagResourceKey()
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
            (typeof client)['#X-Amz-Target=Timestream_20181101.TagResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Timestream_20181101.TagResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTimestream20181101UntagResourceKey() {
  return [
    '#X-Amz-Target=Timestream_20181101.UntagResource',
    '/#X-Amz-Target=Timestream_20181101.UntagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetTimestream20181101UntagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Timestream_20181101.UntagResource']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Timestream_20181101.UntagResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTimestream20181101UntagResourceKey()
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
            (typeof client)['#X-Amz-Target=Timestream_20181101.UntagResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Timestream_20181101.UntagResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTimestream20181101UpdateScheduledQueryKey() {
  return [
    '#X-Amz-Target=Timestream_20181101.UpdateScheduledQuery',
    '/#X-Amz-Target=Timestream_20181101.UpdateScheduledQuery',
    'POST',
  ] as const
}

export function usePostXAmzTargetTimestream20181101UpdateScheduledQuery<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Timestream_20181101.UpdateScheduledQuery']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Timestream_20181101.UpdateScheduledQuery']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTimestream20181101UpdateScheduledQueryKey()
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
            (typeof client)['#X-Amz-Target=Timestream_20181101.UpdateScheduledQuery']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Timestream_20181101.UpdateScheduledQuery'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}
