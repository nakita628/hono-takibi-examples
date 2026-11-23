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

export function getConfigurationKey() {
  return ['configuration'] as const
}

export function getIntentKey() {
  return ['intent'] as const
}

export function getQueuesKey() {
  return ['queues'] as const
}

export function getConfigurationQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.configuration.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['configuration', '/configuration', keyArgs] as const
}

export function getConfigurationQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.configuration.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConfigurationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.configuration.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConfiguration<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.configuration.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.configuration.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.configuration.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.configuration.$get>>>>
          >,
          ReturnType<typeof getConfigurationQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.configuration.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getConfigurationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConfigurationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.configuration.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostIntentAddMediaMutationKey() {
  return ['intent', '/intent/addMedia', 'POST'] as const
}

export function getPostIntentAddMediaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.intent.addMedia.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.intent.addMedia.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostIntentAddMediaMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.intent.addMedia.$post>) {
      return parseResponse(client.intent.addMedia.$post(args, options))
    },
  })
}

export function usePostIntentAddMedia<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.intent.addMedia.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.intent.addMedia.$post>,
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
  const mutationDefaults = getPostIntentAddMediaMutationOptions<TError, TOnMutateResult>(
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

export function getPostIntentPlayMediaMutationKey() {
  return ['intent', '/intent/playMedia', 'POST'] as const
}

export function getPostIntentPlayMediaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.intent.playMedia.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.intent.playMedia.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostIntentPlayMediaMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.intent.playMedia.$post>) {
      return parseResponse(client.intent.playMedia.$post(args, options))
    },
  })
}

export function usePostIntentPlayMedia<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.intent.playMedia.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.intent.playMedia.$post>,
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
  const mutationDefaults = getPostIntentPlayMediaMutationOptions<TError, TOnMutateResult>(
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

export function getPostIntentUpdateMediaAffinityMutationKey() {
  return ['intent', '/intent/updateMediaAffinity', 'POST'] as const
}

export function getPostIntentUpdateMediaAffinityMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.intent.updateMediaAffinity.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.intent.updateMediaAffinity.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostIntentUpdateMediaAffinityMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.intent.updateMediaAffinity.$post>) {
      return parseResponse(client.intent.updateMediaAffinity.$post(args, options))
    },
  })
}

export function usePostIntentUpdateMediaAffinity<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.intent.updateMediaAffinity.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.intent.updateMediaAffinity.$post>,
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
  const mutationDefaults = getPostIntentUpdateMediaAffinityMutationOptions<TError, TOnMutateResult>(
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

export function getPostQueuesPlayMediaMutationKey() {
  return ['queues', '/queues/playMedia', 'POST'] as const
}

export function getPostQueuesPlayMediaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.queues.playMedia.$post>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.queues.playMedia.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostQueuesPlayMediaMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.queues.playMedia.$post>) {
      return parseResponse(client.queues.playMedia.$post(args, options))
    },
  })
}

export function usePostQueuesPlayMedia<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.queues.playMedia.$post>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.queues.playMedia.$post>,
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
  const mutationDefaults = getPostQueuesPlayMediaMutationOptions<TError, TOnMutateResult>(
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

export function getPostQueuesUpdateActivityMutationKey() {
  return ['queues', '/queues/updateActivity', 'POST'] as const
}

export function getPostQueuesUpdateActivityMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.queues.updateActivity.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.queues.updateActivity.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostQueuesUpdateActivityMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.queues.updateActivity.$post>) {
      return parseResponse(client.queues.updateActivity.$post(args, options))
    },
  })
}

export function usePostQueuesUpdateActivity<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.queues.updateActivity.$post>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.queues.updateActivity.$post>,
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
  const mutationDefaults = getPostQueuesUpdateActivityMutationOptions<TError, TOnMutateResult>(
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
