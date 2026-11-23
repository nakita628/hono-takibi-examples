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

export function getAggregateQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.aggregate.$get>>,
) {
  return ['aggregate', '/aggregate', toValue(args)] as const
}

export function getAggregateQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.aggregate.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAggregateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.aggregate.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAggregate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aggregate.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.aggregate.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aggregate.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aggregate.$get>>>>
          >,
          ReturnType<typeof getAggregateQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aggregate.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAggregateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAggregateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.aggregate.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aggregate.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.aggregate.$post>,
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

export function getPredictQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.predict.$get>>,
) {
  return ['predict', '/predict', toValue(args)] as const
}

export function getPredictQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.predict.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPredictQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.predict.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePredict<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.predict.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.predict.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.predict.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.predict.$get>>>>
          >,
          ReturnType<typeof getPredictQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.predict.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPredictQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPredictQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.predict.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.predict.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.predict.$post>,
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

export function getRouteQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.route.$get>>,
) {
  return ['route', '/route', toValue(args)] as const
}

export function getRouteQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.route.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRouteQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.route.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRoute<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.route.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.route.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.route.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.route.$get>>>>>,
          ReturnType<typeof getRouteQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.route.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRouteQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRouteQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.route.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.route.$post>>>>>,
          TError,
          InferRequestType<typeof client.route.$post>,
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['send-feedback']['$get']>>,
) {
  return ['send-feedback', '/send-feedback', toValue(args)] as const
}

export function getSendFeedbackQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['send-feedback']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSendFeedbackQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['send-feedback'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSendFeedback<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['send-feedback']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['send-feedback']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['send-feedback']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['send-feedback']['$get']>>>
            >
          >,
          ReturnType<typeof getSendFeedbackQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['send-feedback']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSendFeedbackQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSendFeedbackQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['send-feedback'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['transform-input']['$get']>>,
) {
  return ['transform-input', '/transform-input', toValue(args)] as const
}

export function getTransformInputQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['transform-input']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTransformInputQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['transform-input'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTransformInput<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['transform-input']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['transform-input']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['transform-input']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['transform-input']['$get']>>>
            >
          >,
          ReturnType<typeof getTransformInputQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['transform-input']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTransformInputQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTransformInputQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['transform-input'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['transform-output']['$get']>>,
) {
  return ['transform-output', '/transform-output', toValue(args)] as const
}

export function getTransformOutputQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['transform-output']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTransformOutputQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['transform-output'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTransformOutput<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['transform-output']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['transform-output']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['transform-output']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['transform-output']['$get']>>>
            >
          >,
          ReturnType<typeof getTransformOutputQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['transform-output']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTransformOutputQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTransformOutputQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['transform-output'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['transform-output']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['transform-output']['$post']>,
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
