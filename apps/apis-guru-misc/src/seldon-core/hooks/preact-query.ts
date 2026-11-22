import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/preact-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/preact-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAggregateKey() {
  return ['aggregate'] as const
}

export function getPredictKey() {
  return ['predict'] as const
}

export function getRouteKey() {
  return ['route'] as const
}

export function getSendFeedbackKey() {
  return ['send-feedback'] as const
}

export function getTransformInputKey() {
  return ['transform-input'] as const
}

export function getTransformOutputKey() {
  return ['transform-output'] as const
}

export function getAggregateQueryKey(args: InferRequestType<typeof client.aggregate.$get>) {
  return ['aggregate', '/aggregate', args] as const
}

export function getAggregateQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aggregate.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.aggregate.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aggregate.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAggregateQueryKey>
  >({
    queryKey: getAggregateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.aggregate.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAggregate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aggregate.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.aggregate.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aggregate.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAggregateQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAggregateQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAggregate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aggregate.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.aggregate.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aggregate.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAggregateQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAggregateQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostAggregateMutationKey() {
  return ['aggregate', '/aggregate', 'POST'] as const
}

export function getPostAggregateMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aggregate.$post>>>>>,
    TError,
    InferRequestType<typeof client.aggregate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAggregateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.aggregate.$post>) {
      return parseResponse(client.aggregate.$post(args, options))
    },
  })
}

export function usePostAggregate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aggregate.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.aggregate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAggregateMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPredictQueryKey(args: InferRequestType<typeof client.predict.$get>) {
  return ['predict', '/predict', args] as const
}

export function getPredictQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.predict.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.predict.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.predict.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPredictQueryKey>
  >({
    queryKey: getPredictQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.predict.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function usePredict<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.predict.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.predict.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.predict.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getPredictQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPredictQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePredict<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.predict.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.predict.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.predict.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getPredictQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPredictQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostPredictMutationKey() {
  return ['predict', '/predict', 'POST'] as const
}

export function getPostPredictMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.predict.$post>>>>>,
    TError,
    InferRequestType<typeof client.predict.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPredictMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.predict.$post>) {
      return parseResponse(client.predict.$post(args, options))
    },
  })
}

export function usePostPredict<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.predict.$post>>>>>,
        TError,
        InferRequestType<typeof client.predict.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPredictMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getRouteQueryKey(args: InferRequestType<typeof client.route.$get>) {
  return ['route', '/route', args] as const
}

export function getRouteQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.route.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.route.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.route.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRouteQueryKey>
  >({
    queryKey: getRouteQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.route.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useRoute<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.route.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.route.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.route.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getRouteQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getRouteQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseRoute<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.route.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.route.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.route.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getRouteQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getRouteQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostRouteMutationKey() {
  return ['route', '/route', 'POST'] as const
}

export function getPostRouteMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.route.$post>>>>>,
    TError,
    InferRequestType<typeof client.route.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRouteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.route.$post>) {
      return parseResponse(client.route.$post(args, options))
    },
  })
}

export function usePostRoute<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.route.$post>>>>>,
        TError,
        InferRequestType<typeof client.route.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRouteMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSendFeedbackQueryKey(
  args: InferRequestType<(typeof client)['send-feedback']['$get']>,
) {
  return ['send-feedback', '/send-feedback', args] as const
}

export function getSendFeedbackQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['send-feedback']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['send-feedback']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['send-feedback']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSendFeedbackQueryKey>
  >({
    queryKey: getSendFeedbackQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['send-feedback'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSendFeedback<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['send-feedback']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['send-feedback']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['send-feedback']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSendFeedbackQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSendFeedbackQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSendFeedback<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['send-feedback']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['send-feedback']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['send-feedback']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSendFeedbackQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSendFeedbackQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostSendFeedbackMutationKey() {
  return ['send-feedback', '/send-feedback', 'POST'] as const
}

export function getPostSendFeedbackMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['send-feedback']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['send-feedback']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSendFeedbackMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['send-feedback']['$post']>) {
      return parseResponse(client['send-feedback'].$post(args, options))
    },
  })
}

export function usePostSendFeedback<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['send-feedback']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['send-feedback']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSendFeedbackMutationOptions<TError, TOnMutateResult>(
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

export function getTransformInputQueryKey(
  args: InferRequestType<(typeof client)['transform-input']['$get']>,
) {
  return ['transform-input', '/transform-input', args] as const
}

export function getTransformInputQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['transform-input']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['transform-input']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['transform-input']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTransformInputQueryKey>
  >({
    queryKey: getTransformInputQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['transform-input'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTransformInput<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['transform-input']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['transform-input']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['transform-input']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTransformInputQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTransformInputQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTransformInput<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['transform-input']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['transform-input']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['transform-input']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTransformInputQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTransformInputQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostTransformInputMutationKey() {
  return ['transform-input', '/transform-input', 'POST'] as const
}

export function getPostTransformInputMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['transform-input']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['transform-input']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTransformInputMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['transform-input']['$post']>) {
      return parseResponse(client['transform-input'].$post(args, options))
    },
  })
}

export function usePostTransformInput<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['transform-input']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['transform-input']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTransformInputMutationOptions<TError, TOnMutateResult>(
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

export function getTransformOutputQueryKey(
  args: InferRequestType<(typeof client)['transform-output']['$get']>,
) {
  return ['transform-output', '/transform-output', args] as const
}

export function getTransformOutputQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['transform-output']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['transform-output']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['transform-output']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTransformOutputQueryKey>
  >({
    queryKey: getTransformOutputQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['transform-output'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTransformOutput<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['transform-output']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['transform-output']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['transform-output']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTransformOutputQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTransformOutputQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTransformOutput<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['transform-output']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['transform-output']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['transform-output']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTransformOutputQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTransformOutputQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostTransformOutputMutationKey() {
  return ['transform-output', '/transform-output', 'POST'] as const
}

export function getPostTransformOutputMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['transform-output']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['transform-output']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTransformOutputMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['transform-output']['$post']>) {
      return parseResponse(client['transform-output'].$post(args, options))
    },
  })
}

export function usePostTransformOutput<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['transform-output']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['transform-output']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTransformOutputMutationOptions<TError, TOnMutateResult>(
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
