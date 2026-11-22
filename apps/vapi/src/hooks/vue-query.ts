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

export function getAnalyticsKey() {
  return ['analytics'] as const
}

export function getAssistantKey() {
  return ['assistant'] as const
}

export function getCallKey() {
  return ['call'] as const
}

export function getCampaignKey() {
  return ['campaign'] as const
}

export function getChatKey() {
  return ['chat'] as const
}

export function getEvalKey() {
  return ['eval'] as const
}

export function getFileKey() {
  return ['file'] as const
}

export function getObservabilityKey() {
  return ['observability'] as const
}

export function getPhoneNumberKey() {
  return ['phone-number'] as const
}

export function getProviderKey() {
  return ['provider'] as const
}

export function getReportingKey() {
  return ['reporting'] as const
}

export function getSessionKey() {
  return ['session'] as const
}

export function getSquadKey() {
  return ['squad'] as const
}

export function getStructuredOutputKey() {
  return ['structured-output'] as const
}

export function getToolKey() {
  return ['tool'] as const
}

export function getTrafficAllocationsKey() {
  return ['traffic-allocations'] as const
}

export function getV2Key() {
  return ['v2'] as const
}

export function getAssistantQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.assistant.$get>>,
) {
  return ['assistant', '/assistant', toValue(args)] as const
}

export function getAssistantQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.assistant.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAssistantQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.assistant.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAssistant<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assistant.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.assistant.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assistant.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assistant.$get>>>>
          >,
          ReturnType<typeof getAssistantQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assistant.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAssistantQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAssistantQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.assistant.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAssistantMutationKey() {
  return ['assistant', '/assistant', 'POST'] as const
}

export function getPostAssistantMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assistant.$post>>>>>,
    TError,
    InferRequestType<typeof client.assistant.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAssistantMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.assistant.$post>) {
      return parseResponse(client.assistant.$post(args, options))
    },
  })
}

export function usePostAssistant<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assistant.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.assistant.$post>,
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
  const mutationDefaults = getPostAssistantMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAssistantIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.assistant)[':id']['$get']>>,
) {
  return ['assistant', '/assistant/:id', toValue(args)] as const
}

export function getAssistantIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.assistant)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAssistantIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.assistant[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAssistantId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.assistant)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.assistant)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.assistant)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.assistant)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getAssistantIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.assistant)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAssistantIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAssistantIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.assistant[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteAssistantIdMutationKey() {
  return ['assistant', '/assistant/:id', 'DELETE'] as const
}

export function getDeleteAssistantIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.assistant)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.assistant)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAssistantIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.assistant)[':id']['$delete']>) {
      return parseResponse(client.assistant[':id'].$delete(args, options))
    },
  })
}

export function useDeleteAssistantId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.assistant)[':id']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.assistant)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteAssistantIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchAssistantIdMutationKey() {
  return ['assistant', '/assistant/:id', 'PATCH'] as const
}

export function getPatchAssistantIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.assistant)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.assistant)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchAssistantIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.assistant)[':id']['$patch']>) {
      return parseResponse(client.assistant[':id'].$patch(args, options))
    },
  })
}

export function usePatchAssistantId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.assistant)[':id']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.assistant)[':id']['$patch']>,
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
  const mutationDefaults = getPatchAssistantIdMutationOptions<TError, TOnMutateResult>(
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

export function getSquadQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.squad.$get>>,
) {
  return ['squad', '/squad', toValue(args)] as const
}

export function getSquadQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.squad.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSquadQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.squad.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSquad<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.squad.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.squad.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.squad.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.squad.$get>>>>>,
          ReturnType<typeof getSquadQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.squad.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSquadQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSquadQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.squad.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSquadMutationKey() {
  return ['squad', '/squad', 'POST'] as const
}

export function getPostSquadMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.squad.$post>>>>>,
    TError,
    InferRequestType<typeof client.squad.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSquadMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.squad.$post>) {
      return parseResponse(client.squad.$post(args, options))
    },
  })
}

export function usePostSquad<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.squad.$post>>>>>,
          TError,
          InferRequestType<typeof client.squad.$post>,
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
  const mutationDefaults = getPostSquadMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSquadIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.squad)[':id']['$get']>>,
) {
  return ['squad', '/squad/:id', toValue(args)] as const
}

export function getSquadIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.squad)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSquadIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.squad[':id'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSquadId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.squad)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.squad)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.squad)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.squad)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getSquadIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.squad)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSquadIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSquadIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.squad[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteSquadIdMutationKey() {
  return ['squad', '/squad/:id', 'DELETE'] as const
}

export function getDeleteSquadIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.squad)[':id']['$delete']>>>>
    >,
    TError,
    InferRequestType<(typeof client.squad)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSquadIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.squad)[':id']['$delete']>) {
      return parseResponse(client.squad[':id'].$delete(args, options))
    },
  })
}

export function useDeleteSquadId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.squad)[':id']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.squad)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteSquadIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchSquadIdMutationKey() {
  return ['squad', '/squad/:id', 'PATCH'] as const
}

export function getPatchSquadIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.squad)[':id']['$patch']>>>>
    >,
    TError,
    InferRequestType<(typeof client.squad)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchSquadIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.squad)[':id']['$patch']>) {
      return parseResponse(client.squad[':id'].$patch(args, options))
    },
  })
}

export function usePatchSquadId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.squad)[':id']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.squad)[':id']['$patch']>,
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
  const mutationDefaults = getPatchSquadIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCallQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.call.$get>>) {
  return ['call', '/call', toValue(args)] as const
}

export function getCallQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.call.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCallQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.call.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCall<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.call.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.call.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.call.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.call.$get>>>>>,
          ReturnType<typeof getCallQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.call.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCallQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCallQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.call.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostCallMutationKey() {
  return ['call', '/call', 'POST'] as const
}

export function getPostCallMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.call.$post>>>>>,
    TError,
    InferRequestType<typeof client.call.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCallMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.call.$post>) {
      return parseResponse(client.call.$post(args, options))
    },
  })
}

export function usePostCall<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.call.$post>>>>>,
          TError,
          InferRequestType<typeof client.call.$post>,
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
  const mutationDefaults = getPostCallMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCallIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.call)[':id']['$get']>>,
) {
  return ['call', '/call/:id', toValue(args)] as const
}

export function getCallIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.call)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCallIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.call[':id'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCallId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.call)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.call)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.call)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.call)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getCallIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.call)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCallIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCallIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.call[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteCallIdMutationKey() {
  return ['call', '/call/:id', 'DELETE'] as const
}

export function getDeleteCallIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.call)[':id']['$delete']>>>>
    >,
    TError,
    InferRequestType<(typeof client.call)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCallIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.call)[':id']['$delete']>) {
      return parseResponse(client.call[':id'].$delete(args, options))
    },
  })
}

export function useDeleteCallId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.call)[':id']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.call)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteCallIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchCallIdMutationKey() {
  return ['call', '/call/:id', 'PATCH'] as const
}

export function getPatchCallIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.call)[':id']['$patch']>>>>
    >,
    TError,
    InferRequestType<(typeof client.call)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchCallIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.call)[':id']['$patch']>) {
      return parseResponse(client.call[':id'].$patch(args, options))
    },
  })
}

export function usePatchCallId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.call)[':id']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.call)[':id']['$patch']>,
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
  const mutationDefaults = getPatchCallIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCallIdMonoRecordingQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.call)[':id']['mono-recording']['$get']>>,
) {
  return ['call', '/call/:id/mono-recording', toValue(args)] as const
}

export function getCallIdMonoRecordingQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.call)[':id']['mono-recording']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCallIdMonoRecordingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.call[':id']['mono-recording'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCallIdMonoRecording<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.call)[':id']['mono-recording']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.call)[':id']['mono-recording']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.call)[':id']['mono-recording']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.call)[':id']['mono-recording']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCallIdMonoRecordingQueryKey>
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
          Awaited<ReturnType<(typeof client.call)[':id']['mono-recording']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCallIdMonoRecordingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCallIdMonoRecordingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.call[':id']['mono-recording'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCallIdStereoRecordingQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.call)[':id']['stereo-recording']['$get']>>,
) {
  return ['call', '/call/:id/stereo-recording', toValue(args)] as const
}

export function getCallIdStereoRecordingQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.call)[':id']['stereo-recording']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCallIdStereoRecordingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.call[':id']['stereo-recording'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCallIdStereoRecording<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.call)[':id']['stereo-recording']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.call)[':id']['stereo-recording']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.call)[':id']['stereo-recording']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.call)[':id']['stereo-recording']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCallIdStereoRecordingQueryKey>
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
          Awaited<ReturnType<(typeof client.call)[':id']['stereo-recording']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCallIdStereoRecordingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCallIdStereoRecordingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.call[':id']['stereo-recording'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCallIdVideoRecordingQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.call)[':id']['video-recording']['$get']>>,
) {
  return ['call', '/call/:id/video-recording', toValue(args)] as const
}

export function getCallIdVideoRecordingQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.call)[':id']['video-recording']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCallIdVideoRecordingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.call[':id']['video-recording'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCallIdVideoRecording<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.call)[':id']['video-recording']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.call)[':id']['video-recording']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.call)[':id']['video-recording']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.call)[':id']['video-recording']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCallIdVideoRecordingQueryKey>
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
          Awaited<ReturnType<(typeof client.call)[':id']['video-recording']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCallIdVideoRecordingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCallIdVideoRecordingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.call[':id']['video-recording'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCallIdCustomerRecordingQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.call)[':id']['customer-recording']['$get']>
  >,
) {
  return ['call', '/call/:id/customer-recording', toValue(args)] as const
}

export function getCallIdCustomerRecordingQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.call)[':id']['customer-recording']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCallIdCustomerRecordingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.call[':id']['customer-recording'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCallIdCustomerRecording<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.call)[':id']['customer-recording']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.call)[':id']['customer-recording']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.call)[':id']['customer-recording']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.call)[':id']['customer-recording']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCallIdCustomerRecordingQueryKey>
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
          Awaited<ReturnType<(typeof client.call)[':id']['customer-recording']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCallIdCustomerRecordingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCallIdCustomerRecordingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.call[':id']['customer-recording'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCallIdAssistantRecordingQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.call)[':id']['assistant-recording']['$get']>
  >,
) {
  return ['call', '/call/:id/assistant-recording', toValue(args)] as const
}

export function getCallIdAssistantRecordingQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.call)[':id']['assistant-recording']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCallIdAssistantRecordingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.call[':id']['assistant-recording'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCallIdAssistantRecording<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.call)[':id']['assistant-recording']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.call)[':id']['assistant-recording']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.call)[':id']['assistant-recording']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.call)[':id']['assistant-recording']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCallIdAssistantRecordingQueryKey>
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
          Awaited<ReturnType<(typeof client.call)[':id']['assistant-recording']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCallIdAssistantRecordingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCallIdAssistantRecordingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.call[':id']['assistant-recording'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCallIdPcapQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.call)[':id']['pcap']['$get']>>,
) {
  return ['call', '/call/:id/pcap', toValue(args)] as const
}

export function getCallIdPcapQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.call)[':id']['pcap']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCallIdPcapQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.call[':id'].pcap.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCallIdPcap<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.call)[':id']['pcap']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.call)[':id']['pcap']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.call)[':id']['pcap']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.call)[':id']['pcap']['$get']>>>
            >
          >,
          ReturnType<typeof getCallIdPcapQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.call)[':id']['pcap']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCallIdPcapQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCallIdPcapQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.call[':id'].pcap.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCallIdCallLogsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.call)[':id']['call-logs']['$get']>>,
) {
  return ['call', '/call/:id/call-logs', toValue(args)] as const
}

export function getCallIdCallLogsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.call)[':id']['call-logs']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCallIdCallLogsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.call[':id']['call-logs'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCallIdCallLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.call)[':id']['call-logs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.call)[':id']['call-logs']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.call)[':id']['call-logs']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.call)[':id']['call-logs']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCallIdCallLogsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.call)[':id']['call-logs']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCallIdCallLogsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCallIdCallLogsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.call[':id']['call-logs'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getChatQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.chat.$get>>) {
  return ['chat', '/chat', toValue(args)] as const
}

export function getChatQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.chat.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChatQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.chat.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useChat<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.chat.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.$get>>>>>,
          ReturnType<typeof getChatQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getChatQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChatQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.chat.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostChatMutationKey() {
  return ['chat', '/chat', 'POST'] as const
}

export function getPostChatMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.$post>>>>>,
    TError,
    InferRequestType<typeof client.chat.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostChatMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.chat.$post>) {
      return parseResponse(client.chat.$post(args, options))
    },
  })
}

export function usePostChat<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.$post>>>>>,
          TError,
          InferRequestType<typeof client.chat.$post>,
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
  const mutationDefaults = getPostChatMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getChatIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.chat)[':id']['$get']>>,
) {
  return ['chat', '/chat/:id', toValue(args)] as const
}

export function getChatIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.chat)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChatIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.chat[':id'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useChatId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.chat)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.chat)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.chat)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.chat)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getChatIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.chat)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getChatIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChatIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.chat[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteChatIdMutationKey() {
  return ['chat', '/chat/:id', 'DELETE'] as const
}

export function getDeleteChatIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.chat)[':id']['$delete']>>>>
    >,
    TError,
    InferRequestType<(typeof client.chat)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteChatIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.chat)[':id']['$delete']>) {
      return parseResponse(client.chat[':id'].$delete(args, options))
    },
  })
}

export function useDeleteChatId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.chat)[':id']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.chat)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteChatIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostChatResponsesMutationKey() {
  return ['chat', '/chat/responses', 'POST'] as const
}

export function getPostChatResponsesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.responses.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.chat.responses.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostChatResponsesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.chat.responses.$post>) {
      return parseResponse(client.chat.responses.$post(args, options))
    },
  })
}

export function usePostChatResponses<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.chat.responses.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.chat.responses.$post>,
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
  const mutationDefaults = getPostChatResponsesMutationOptions<TError, TOnMutateResult>(
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

export function getCampaignQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.campaign.$get>>,
) {
  return ['campaign', '/campaign', toValue(args)] as const
}

export function getCampaignQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.campaign.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCampaignQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.campaign.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCampaign<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.campaign.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.campaign.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.campaign.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.campaign.$get>>>>
          >,
          ReturnType<typeof getCampaignQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.campaign.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCampaignQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCampaignQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.campaign.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostCampaignMutationKey() {
  return ['campaign', '/campaign', 'POST'] as const
}

export function getPostCampaignMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.campaign.$post>>>>>,
    TError,
    InferRequestType<typeof client.campaign.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCampaignMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.campaign.$post>) {
      return parseResponse(client.campaign.$post(args, options))
    },
  })
}

export function usePostCampaign<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.campaign.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.campaign.$post>,
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
  const mutationDefaults = getPostCampaignMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV2CampaignQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.campaign.$get>>,
) {
  return ['v2', '/v2/campaign', toValue(args)] as const
}

export function getV2CampaignQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.campaign.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2CampaignQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.campaign.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV2Campaign<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.campaign.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.campaign.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.campaign.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.campaign.$get>>>>
          >,
          ReturnType<typeof getV2CampaignQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.campaign.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2CampaignQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2CampaignQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.campaign.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2CampaignMutationKey() {
  return ['v2', '/v2/campaign', 'POST'] as const
}

export function getPostV2CampaignMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.campaign.$post>>>>>,
    TError,
    InferRequestType<typeof client.v2.campaign.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2CampaignMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.campaign.$post>) {
      return parseResponse(client.v2.campaign.$post(args, options))
    },
  })
}

export function usePostV2Campaign<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.campaign.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v2.campaign.$post>,
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
  const mutationDefaults = getPostV2CampaignMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV2CampaignIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.campaign)[':id']['$get']>>,
) {
  return ['v2', '/v2/campaign/:id', toValue(args)] as const
}

export function getV2CampaignIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.campaign)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2CampaignIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.campaign[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2CampaignId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.campaign)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.campaign)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v2.campaign)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v2.campaign)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getV2CampaignIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.campaign)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2CampaignIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2CampaignIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.campaign[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV2CampaignIdMutationKey() {
  return ['v2', '/v2/campaign/:id', 'DELETE'] as const
}

export function getDeleteV2CampaignIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.campaign)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.campaign)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2CampaignIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2.campaign)[':id']['$delete']>) {
      return parseResponse(client.v2.campaign[':id'].$delete(args, options))
    },
  })
}

export function useDeleteV2CampaignId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.campaign)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.campaign)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteV2CampaignIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchV2CampaignIdMutationKey() {
  return ['v2', '/v2/campaign/:id', 'PATCH'] as const
}

export function getPatchV2CampaignIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.campaign)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.campaign)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV2CampaignIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2.campaign)[':id']['$patch']>) {
      return parseResponse(client.v2.campaign[':id'].$patch(args, options))
    },
  })
}

export function usePatchV2CampaignId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.campaign)[':id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.campaign)[':id']['$patch']>,
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
  const mutationDefaults = getPatchV2CampaignIdMutationOptions<TError, TOnMutateResult>(
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

export function getCampaignIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.campaign)[':id']['$get']>>,
) {
  return ['campaign', '/campaign/:id', toValue(args)] as const
}

export function getCampaignIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.campaign)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCampaignIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.campaign[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCampaignId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.campaign)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.campaign)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.campaign)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.campaign)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getCampaignIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.campaign)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCampaignIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCampaignIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.campaign[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteCampaignIdMutationKey() {
  return ['campaign', '/campaign/:id', 'DELETE'] as const
}

export function getDeleteCampaignIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.campaign)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.campaign)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCampaignIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.campaign)[':id']['$delete']>) {
      return parseResponse(client.campaign[':id'].$delete(args, options))
    },
  })
}

export function useDeleteCampaignId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.campaign)[':id']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.campaign)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteCampaignIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchCampaignIdMutationKey() {
  return ['campaign', '/campaign/:id', 'PATCH'] as const
}

export function getPatchCampaignIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.campaign)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.campaign)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchCampaignIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.campaign)[':id']['$patch']>) {
      return parseResponse(client.campaign[':id'].$patch(args, options))
    },
  })
}

export function usePatchCampaignId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.campaign)[':id']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.campaign)[':id']['$patch']>,
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
  const mutationDefaults = getPatchCampaignIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV2CampaignIdContactsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.campaign)[':id']['contacts']['$get']>>,
) {
  return ['v2', '/v2/campaign/:id/contacts', toValue(args)] as const
}

export function getV2CampaignIdContactsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.campaign)[':id']['contacts']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2CampaignIdContactsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.campaign[':id'].contacts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2CampaignIdContacts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.campaign)[':id']['contacts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.campaign)[':id']['contacts']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.campaign)[':id']['contacts']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.campaign)[':id']['contacts']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2CampaignIdContactsQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.campaign)[':id']['contacts']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2CampaignIdContactsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2CampaignIdContactsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.campaign[':id'].contacts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSessionQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.session.$get>>,
) {
  return ['session', '/session', toValue(args)] as const
}

export function getSessionQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.session.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSessionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.session.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSession<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.session.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.session.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.session.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.session.$get>>>>
          >,
          ReturnType<typeof getSessionQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.session.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSessionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSessionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.session.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSessionMutationKey() {
  return ['session', '/session', 'POST'] as const
}

export function getPostSessionMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.session.$post>>>>>,
    TError,
    InferRequestType<typeof client.session.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSessionMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.session.$post>) {
      return parseResponse(client.session.$post(args, options))
    },
  })
}

export function usePostSession<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.session.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.session.$post>,
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
  const mutationDefaults = getPostSessionMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSessionIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.session)[':id']['$get']>>,
) {
  return ['session', '/session/:id', toValue(args)] as const
}

export function getSessionIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.session)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSessionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.session[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSessionId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.session)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.session)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.session)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.session)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getSessionIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.session)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSessionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSessionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.session[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteSessionIdMutationKey() {
  return ['session', '/session/:id', 'DELETE'] as const
}

export function getDeleteSessionIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.session)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.session)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSessionIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.session)[':id']['$delete']>) {
      return parseResponse(client.session[':id'].$delete(args, options))
    },
  })
}

export function useDeleteSessionId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.session)[':id']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.session)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteSessionIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchSessionIdMutationKey() {
  return ['session', '/session/:id', 'PATCH'] as const
}

export function getPatchSessionIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.session)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.session)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchSessionIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.session)[':id']['$patch']>) {
      return parseResponse(client.session[':id'].$patch(args, options))
    },
  })
}

export function usePatchSessionId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.session)[':id']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.session)[':id']['$patch']>,
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
  const mutationDefaults = getPatchSessionIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTrafficAllocationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['traffic-allocations']['$get']>>,
) {
  return ['traffic-allocations', '/traffic-allocations', toValue(args)] as const
}

export function getTrafficAllocationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['traffic-allocations']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTrafficAllocationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['traffic-allocations'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTrafficAllocations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['traffic-allocations']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['traffic-allocations']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['traffic-allocations']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['traffic-allocations']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTrafficAllocationsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['traffic-allocations']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTrafficAllocationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTrafficAllocationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['traffic-allocations'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostTrafficAllocationsMutationKey() {
  return ['traffic-allocations', '/traffic-allocations', 'POST'] as const
}

export function getPostTrafficAllocationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['traffic-allocations']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['traffic-allocations']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTrafficAllocationsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['traffic-allocations']['$post']>) {
      return parseResponse(client['traffic-allocations'].$post(args, options))
    },
  })
}

export function usePostTrafficAllocations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['traffic-allocations']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['traffic-allocations']['$post']>,
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
  const mutationDefaults = getPostTrafficAllocationsMutationOptions<TError, TOnMutateResult>(
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

export function getTrafficAllocationsLatestQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['traffic-allocations']['latest']['$get']>
  >,
) {
  return ['traffic-allocations', '/traffic-allocations/latest', toValue(args)] as const
}

export function getTrafficAllocationsLatestQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['traffic-allocations']['latest']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTrafficAllocationsLatestQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['traffic-allocations'].latest.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTrafficAllocationsLatest<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['traffic-allocations']['latest']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['traffic-allocations']['latest']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['traffic-allocations']['latest']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['traffic-allocations']['latest']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTrafficAllocationsLatestQueryKey>
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
          Awaited<ReturnType<(typeof client)['traffic-allocations']['latest']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTrafficAllocationsLatestQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTrafficAllocationsLatestQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['traffic-allocations'].latest.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTrafficAllocationsMetricsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['traffic-allocations']['metrics']['$get']>
  >,
) {
  return ['traffic-allocations', '/traffic-allocations/metrics', toValue(args)] as const
}

export function getTrafficAllocationsMetricsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['traffic-allocations']['metrics']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTrafficAllocationsMetricsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['traffic-allocations'].metrics.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTrafficAllocationsMetrics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['traffic-allocations']['metrics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['traffic-allocations']['metrics']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['traffic-allocations']['metrics']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['traffic-allocations']['metrics']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTrafficAllocationsMetricsQueryKey>
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
          Awaited<ReturnType<(typeof client)['traffic-allocations']['metrics']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTrafficAllocationsMetricsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTrafficAllocationsMetricsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['traffic-allocations'].metrics.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTrafficAllocationsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['traffic-allocations'][':id']['$get']>>,
) {
  return ['traffic-allocations', '/traffic-allocations/:id', toValue(args)] as const
}

export function getTrafficAllocationsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['traffic-allocations'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTrafficAllocationsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['traffic-allocations'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTrafficAllocationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['traffic-allocations'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['traffic-allocations'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['traffic-allocations'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['traffic-allocations'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTrafficAllocationsIdQueryKey>
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
          Awaited<ReturnType<(typeof client)['traffic-allocations'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTrafficAllocationsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTrafficAllocationsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['traffic-allocations'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPhoneNumberQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['phone-number']['$get']>>,
) {
  return ['phone-number', '/phone-number', toValue(args)] as const
}

export function getPhoneNumberQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['phone-number']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPhoneNumberQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['phone-number'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePhoneNumber<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['phone-number']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['phone-number']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['phone-number']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['phone-number']['$get']>>>
            >
          >,
          ReturnType<typeof getPhoneNumberQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['phone-number']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPhoneNumberQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPhoneNumberQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['phone-number'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostPhoneNumberMutationKey() {
  return ['phone-number', '/phone-number', 'POST'] as const
}

export function getPostPhoneNumberMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['phone-number']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['phone-number']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPhoneNumberMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['phone-number']['$post']>) {
      return parseResponse(client['phone-number'].$post(args, options))
    },
  })
}

export function usePostPhoneNumber<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['phone-number']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['phone-number']['$post']>,
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
  const mutationDefaults = getPostPhoneNumberMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV2PhoneNumberQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)['phone-number']['$get']>>,
) {
  return ['v2', '/v2/phone-number', toValue(args)] as const
}

export function getV2PhoneNumberQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)['phone-number']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2PhoneNumberQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2['phone-number'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2PhoneNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['phone-number']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)['phone-number']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['phone-number']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['phone-number']['$get']>>>
            >
          >,
          ReturnType<typeof getV2PhoneNumberQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['phone-number']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2PhoneNumberQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2PhoneNumberQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2['phone-number'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPhoneNumberIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['phone-number'][':id']['$get']>>,
) {
  return ['phone-number', '/phone-number/:id', toValue(args)] as const
}

export function getPhoneNumberIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['phone-number'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPhoneNumberIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['phone-number'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePhoneNumberId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['phone-number'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['phone-number'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['phone-number'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['phone-number'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPhoneNumberIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['phone-number'][':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPhoneNumberIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPhoneNumberIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['phone-number'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeletePhoneNumberIdMutationKey() {
  return ['phone-number', '/phone-number/:id', 'DELETE'] as const
}

export function getDeletePhoneNumberIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['phone-number'][':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['phone-number'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePhoneNumberIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['phone-number'][':id']['$delete']>) {
      return parseResponse(client['phone-number'][':id'].$delete(args, options))
    },
  })
}

export function useDeletePhoneNumberId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['phone-number'][':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['phone-number'][':id']['$delete']>,
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
  const mutationDefaults = getDeletePhoneNumberIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchPhoneNumberIdMutationKey() {
  return ['phone-number', '/phone-number/:id', 'PATCH'] as const
}

export function getPatchPhoneNumberIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['phone-number'][':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['phone-number'][':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchPhoneNumberIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['phone-number'][':id']['$patch']>) {
      return parseResponse(client['phone-number'][':id'].$patch(args, options))
    },
  })
}

export function usePatchPhoneNumberId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['phone-number'][':id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['phone-number'][':id']['$patch']>,
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
  const mutationDefaults = getPatchPhoneNumberIdMutationOptions<TError, TOnMutateResult>(
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

export function getToolQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.tool.$get>>) {
  return ['tool', '/tool', toValue(args)] as const
}

export function getToolQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tool.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getToolQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tool.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTool<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tool.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tool.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tool.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tool.$get>>>>>,
          ReturnType<typeof getToolQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tool.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getToolQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getToolQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tool.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostToolMutationKey() {
  return ['tool', '/tool', 'POST'] as const
}

export function getPostToolMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tool.$post>>>>>,
    TError,
    InferRequestType<typeof client.tool.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostToolMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.tool.$post>) {
      return parseResponse(client.tool.$post(args, options))
    },
  })
}

export function usePostTool<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tool.$post>>>>>,
          TError,
          InferRequestType<typeof client.tool.$post>,
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
  const mutationDefaults = getPostToolMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getToolIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tool)[':id']['$get']>>,
) {
  return ['tool', '/tool/:id', toValue(args)] as const
}

export function getToolIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tool)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getToolIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tool[':id'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useToolId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tool)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tool)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.tool)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.tool)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getToolIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tool)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getToolIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getToolIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tool[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteToolIdMutationKey() {
  return ['tool', '/tool/:id', 'DELETE'] as const
}

export function getDeleteToolIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tool)[':id']['$delete']>>>>
    >,
    TError,
    InferRequestType<(typeof client.tool)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteToolIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tool)[':id']['$delete']>) {
      return parseResponse(client.tool[':id'].$delete(args, options))
    },
  })
}

export function useDeleteToolId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.tool)[':id']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.tool)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteToolIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchToolIdMutationKey() {
  return ['tool', '/tool/:id', 'PATCH'] as const
}

export function getPatchToolIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tool)[':id']['$patch']>>>>
    >,
    TError,
    InferRequestType<(typeof client.tool)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchToolIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tool)[':id']['$patch']>) {
      return parseResponse(client.tool[':id'].$patch(args, options))
    },
  })
}

export function usePatchToolId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.tool)[':id']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.tool)[':id']['$patch']>,
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
  const mutationDefaults = getPatchToolIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getFileQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.file.$get>>) {
  return ['file', '/file', toValue(args)] as const
}

export function getFileQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.file.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFileQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.file.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useFile<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.file.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.file.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.file.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.file.$get>>>>>,
          ReturnType<typeof getFileQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.file.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFileQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFileQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.file.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostFileMutationKey() {
  return ['file', '/file', 'POST'] as const
}

export function getPostFileMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.file.$post>>>>>,
    TError,
    InferRequestType<typeof client.file.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostFileMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.file.$post>) {
      return parseResponse(client.file.$post(args, options))
    },
  })
}

export function usePostFile<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.file.$post>>>>>,
          TError,
          InferRequestType<typeof client.file.$post>,
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
  const mutationDefaults = getPostFileMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getFileIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.file)[':id']['$get']>>,
) {
  return ['file', '/file/:id', toValue(args)] as const
}

export function getFileIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.file)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFileIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.file[':id'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useFileId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.file)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.file)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.file)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.file)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getFileIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.file)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFileIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFileIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.file[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteFileIdMutationKey() {
  return ['file', '/file/:id', 'DELETE'] as const
}

export function getDeleteFileIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.file)[':id']['$delete']>>>>
    >,
    TError,
    InferRequestType<(typeof client.file)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteFileIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.file)[':id']['$delete']>) {
      return parseResponse(client.file[':id'].$delete(args, options))
    },
  })
}

export function useDeleteFileId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.file)[':id']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.file)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteFileIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchFileIdMutationKey() {
  return ['file', '/file/:id', 'PATCH'] as const
}

export function getPatchFileIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.file)[':id']['$patch']>>>>
    >,
    TError,
    InferRequestType<(typeof client.file)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchFileIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.file)[':id']['$patch']>) {
      return parseResponse(client.file[':id'].$patch(args, options))
    },
  })
}

export function usePatchFileId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.file)[':id']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.file)[':id']['$patch']>,
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
  const mutationDefaults = getPatchFileIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV2KnowledgeBaseQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)['knowledge-base']['$get']>>,
) {
  return ['v2', '/v2/knowledge-base', toValue(args)] as const
}

export function getV2KnowledgeBaseQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)['knowledge-base']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2KnowledgeBaseQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2['knowledge-base'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2KnowledgeBase<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['knowledge-base']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)['knowledge-base']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)['knowledge-base']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)['knowledge-base']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2KnowledgeBaseQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['knowledge-base']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2KnowledgeBaseQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2KnowledgeBaseQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2['knowledge-base'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2KnowledgeBaseMutationKey() {
  return ['v2', '/v2/knowledge-base', 'POST'] as const
}

export function getPostV2KnowledgeBaseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['knowledge-base']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)['knowledge-base']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2KnowledgeBaseMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2)['knowledge-base']['$post']>) {
      return parseResponse(client.v2['knowledge-base'].$post(args, options))
    },
  })
}

export function usePostV2KnowledgeBase<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)['knowledge-base']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2)['knowledge-base']['$post']>,
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
  const mutationDefaults = getPostV2KnowledgeBaseMutationOptions<TError, TOnMutateResult>(
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

export function getV2KnowledgeBaseIdFileQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2)['knowledge-base'][':id']['file']['$get']>
  >,
) {
  return ['v2', '/v2/knowledge-base/:id/file', toValue(args)] as const
}

export function getV2KnowledgeBaseIdFileQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2)['knowledge-base'][':id']['file']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2KnowledgeBaseIdFileQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2['knowledge-base'][':id'].file.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2KnowledgeBaseIdFile<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2)['knowledge-base'][':id']['file']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2)['knowledge-base'][':id']['file']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)['knowledge-base'][':id']['file']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)['knowledge-base'][':id']['file']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2KnowledgeBaseIdFileQueryKey>
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
          Awaited<ReturnType<(typeof client.v2)['knowledge-base'][':id']['file']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2KnowledgeBaseIdFileQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2KnowledgeBaseIdFileQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2['knowledge-base'][':id'].file.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2KnowledgeBaseIdFileMutationKey() {
  return ['v2', '/v2/knowledge-base/:id/file', 'POST'] as const
}

export function getPostV2KnowledgeBaseIdFileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)['knowledge-base'][':id']['file']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)['knowledge-base'][':id']['file']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2KnowledgeBaseIdFileMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2)['knowledge-base'][':id']['file']['$post']>,
    ) {
      return parseResponse(client.v2['knowledge-base'][':id'].file.$post(args, options))
    },
  })
}

export function usePostV2KnowledgeBaseIdFile<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)['knowledge-base'][':id']['file']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2)['knowledge-base'][':id']['file']['$post']>,
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
  const mutationDefaults = getPostV2KnowledgeBaseIdFileMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV2KnowledgeBaseIdFileFileIdMutationKey() {
  return ['v2', '/v2/knowledge-base/:id/file/:fileId', 'DELETE'] as const
}

export function getDeleteV2KnowledgeBaseIdFileFileIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2)['knowledge-base'][':id']['file'][':fileId']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)['knowledge-base'][':id']['file'][':fileId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2KnowledgeBaseIdFileFileIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2)['knowledge-base'][':id']['file'][':fileId']['$delete']
      >,
    ) {
      return parseResponse(
        client.v2['knowledge-base'][':id'].file[':fileId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV2KnowledgeBaseIdFileFileId<
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
                    (typeof client.v2)['knowledge-base'][':id']['file'][':fileId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2)['knowledge-base'][':id']['file'][':fileId']['$delete']
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
  const mutationDefaults = getDeleteV2KnowledgeBaseIdFileFileIdMutationOptions<
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

export function getPostV2KnowledgeBaseIdFileFileIdRetryMutationKey() {
  return ['v2', '/v2/knowledge-base/:id/file/:fileId/retry', 'POST'] as const
}

export function getPostV2KnowledgeBaseIdFileFileIdRetryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2)['knowledge-base'][':id']['file'][':fileId']['retry']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2)['knowledge-base'][':id']['file'][':fileId']['retry']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2KnowledgeBaseIdFileFileIdRetryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2)['knowledge-base'][':id']['file'][':fileId']['retry']['$post']
      >,
    ) {
      return parseResponse(
        client.v2['knowledge-base'][':id'].file[':fileId'].retry.$post(args, options),
      )
    },
  })
}

export function usePostV2KnowledgeBaseIdFileFileIdRetry<
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
                    (typeof client.v2)['knowledge-base'][':id']['file'][':fileId']['retry']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2)['knowledge-base'][':id']['file'][':fileId']['retry']['$post']
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
  const mutationDefaults = getPostV2KnowledgeBaseIdFileFileIdRetryMutationOptions<
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

export function getV2KnowledgeBaseIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)['knowledge-base'][':id']['$get']>>,
) {
  return ['v2', '/v2/knowledge-base/:id', toValue(args)] as const
}

export function getV2KnowledgeBaseIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)['knowledge-base'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2KnowledgeBaseIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2['knowledge-base'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2KnowledgeBaseId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['knowledge-base'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)['knowledge-base'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)['knowledge-base'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)['knowledge-base'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2KnowledgeBaseIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v2)['knowledge-base'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2KnowledgeBaseIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2KnowledgeBaseIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2['knowledge-base'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV2KnowledgeBaseIdMutationKey() {
  return ['v2', '/v2/knowledge-base/:id', 'DELETE'] as const
}

export function getDeleteV2KnowledgeBaseIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)['knowledge-base'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)['knowledge-base'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2KnowledgeBaseIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2)['knowledge-base'][':id']['$delete']>,
    ) {
      return parseResponse(client.v2['knowledge-base'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteV2KnowledgeBaseId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)['knowledge-base'][':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2)['knowledge-base'][':id']['$delete']>,
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
  const mutationDefaults = getDeleteV2KnowledgeBaseIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchV2KnowledgeBaseIdMutationKey() {
  return ['v2', '/v2/knowledge-base/:id', 'PATCH'] as const
}

export function getPatchV2KnowledgeBaseIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)['knowledge-base'][':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)['knowledge-base'][':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV2KnowledgeBaseIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2)['knowledge-base'][':id']['$patch']>,
    ) {
      return parseResponse(client.v2['knowledge-base'][':id'].$patch(args, options))
    },
  })
}

export function usePatchV2KnowledgeBaseId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)['knowledge-base'][':id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2)['knowledge-base'][':id']['$patch']>,
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
  const mutationDefaults = getPatchV2KnowledgeBaseIdMutationOptions<TError, TOnMutateResult>(
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

export function getStructuredOutputQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['structured-output']['$get']>>,
) {
  return ['structured-output', '/structured-output', toValue(args)] as const
}

export function getStructuredOutputQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['structured-output']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStructuredOutputQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['structured-output'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStructuredOutput<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['structured-output']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['structured-output']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['structured-output']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['structured-output']['$get']>>
              >
            >
          >,
          ReturnType<typeof getStructuredOutputQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['structured-output']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStructuredOutputQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStructuredOutputQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['structured-output'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostStructuredOutputMutationKey() {
  return ['structured-output', '/structured-output', 'POST'] as const
}

export function getPostStructuredOutputMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['structured-output']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['structured-output']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostStructuredOutputMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['structured-output']['$post']>) {
      return parseResponse(client['structured-output'].$post(args, options))
    },
  })
}

export function usePostStructuredOutput<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['structured-output']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['structured-output']['$post']>,
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
  const mutationDefaults = getPostStructuredOutputMutationOptions<TError, TOnMutateResult>(
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

export function getStructuredOutputIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['structured-output'][':id']['$get']>>,
) {
  return ['structured-output', '/structured-output/:id', toValue(args)] as const
}

export function getStructuredOutputIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['structured-output'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStructuredOutputIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['structured-output'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStructuredOutputId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['structured-output'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['structured-output'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['structured-output'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['structured-output'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getStructuredOutputIdQueryKey>
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
          Awaited<ReturnType<(typeof client)['structured-output'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStructuredOutputIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStructuredOutputIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['structured-output'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteStructuredOutputIdMutationKey() {
  return ['structured-output', '/structured-output/:id', 'DELETE'] as const
}

export function getDeleteStructuredOutputIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['structured-output'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['structured-output'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteStructuredOutputIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['structured-output'][':id']['$delete']>,
    ) {
      return parseResponse(client['structured-output'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteStructuredOutputId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['structured-output'][':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['structured-output'][':id']['$delete']>,
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
  const mutationDefaults = getDeleteStructuredOutputIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchStructuredOutputIdMutationKey() {
  return ['structured-output', '/structured-output/:id', 'PATCH'] as const
}

export function getPatchStructuredOutputIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['structured-output'][':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['structured-output'][':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchStructuredOutputIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['structured-output'][':id']['$patch']>,
    ) {
      return parseResponse(client['structured-output'][':id'].$patch(args, options))
    },
  })
}

export function usePatchStructuredOutputId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['structured-output'][':id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['structured-output'][':id']['$patch']>,
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
  const mutationDefaults = getPatchStructuredOutputIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostStructuredOutputRunMutationKey() {
  return ['structured-output', '/structured-output/run', 'POST'] as const
}

export function getPostStructuredOutputRunMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['structured-output']['run']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['structured-output']['run']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostStructuredOutputRunMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['structured-output']['run']['$post']>) {
      return parseResponse(client['structured-output'].run.$post(args, options))
    },
  })
}

export function usePostStructuredOutputRun<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['structured-output']['run']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['structured-output']['run']['$post']>,
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
  const mutationDefaults = getPostStructuredOutputRunMutationOptions<TError, TOnMutateResult>(
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

export function getEvalSimulationPersonalityQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.eval.simulation.personality.$get>>,
) {
  return ['eval', '/eval/simulation/personality', toValue(args)] as const
}

export function getEvalSimulationPersonalityQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.eval.simulation.personality.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEvalSimulationPersonalityQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.eval.simulation.personality.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEvalSimulationPersonality<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.eval.simulation.personality.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.eval.simulation.personality.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.eval.simulation.personality.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.eval.simulation.personality.$get>>
              >
            >
          >,
          ReturnType<typeof getEvalSimulationPersonalityQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.eval.simulation.personality.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEvalSimulationPersonalityQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEvalSimulationPersonalityQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.eval.simulation.personality.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostEvalSimulationPersonalityMutationKey() {
  return ['eval', '/eval/simulation/personality', 'POST'] as const
}

export function getPostEvalSimulationPersonalityMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.eval.simulation.personality.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.eval.simulation.personality.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEvalSimulationPersonalityMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.eval.simulation.personality.$post>) {
      return parseResponse(client.eval.simulation.personality.$post(args, options))
    },
  })
}

export function usePostEvalSimulationPersonality<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.eval.simulation.personality.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.eval.simulation.personality.$post>,
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
  const mutationDefaults = getPostEvalSimulationPersonalityMutationOptions<TError, TOnMutateResult>(
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

export function getEvalSimulationPersonalityIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.eval.simulation.personality)[':id']['$get']>
  >,
) {
  return ['eval', '/eval/simulation/personality/:id', toValue(args)] as const
}

export function getEvalSimulationPersonalityIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.eval.simulation.personality)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEvalSimulationPersonalityIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.eval.simulation.personality[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEvalSimulationPersonalityId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.eval.simulation.personality)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.eval.simulation.personality)[':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.eval.simulation.personality)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.eval.simulation.personality)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEvalSimulationPersonalityIdQueryKey>
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
          Awaited<ReturnType<(typeof client.eval.simulation.personality)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEvalSimulationPersonalityIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEvalSimulationPersonalityIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.eval.simulation.personality[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteEvalSimulationPersonalityIdMutationKey() {
  return ['eval', '/eval/simulation/personality/:id', 'DELETE'] as const
}

export function getDeleteEvalSimulationPersonalityIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.eval.simulation.personality)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.eval.simulation.personality)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteEvalSimulationPersonalityIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.eval.simulation.personality)[':id']['$delete']>,
    ) {
      return parseResponse(client.eval.simulation.personality[':id'].$delete(args, options))
    },
  })
}

export function useDeleteEvalSimulationPersonalityId<
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
                Awaited<ReturnType<(typeof client.eval.simulation.personality)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.eval.simulation.personality)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteEvalSimulationPersonalityIdMutationOptions<
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

export function getPatchEvalSimulationPersonalityIdMutationKey() {
  return ['eval', '/eval/simulation/personality/:id', 'PATCH'] as const
}

export function getPatchEvalSimulationPersonalityIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.eval.simulation.personality)[':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.eval.simulation.personality)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchEvalSimulationPersonalityIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.eval.simulation.personality)[':id']['$patch']>,
    ) {
      return parseResponse(client.eval.simulation.personality[':id'].$patch(args, options))
    },
  })
}

export function usePatchEvalSimulationPersonalityId<
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
                Awaited<ReturnType<(typeof client.eval.simulation.personality)[':id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.eval.simulation.personality)[':id']['$patch']>,
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
  const mutationDefaults = getPatchEvalSimulationPersonalityIdMutationOptions<
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

export function getEvalSimulationScenarioQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.eval.simulation.scenario.$get>>,
) {
  return ['eval', '/eval/simulation/scenario', toValue(args)] as const
}

export function getEvalSimulationScenarioQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.eval.simulation.scenario.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEvalSimulationScenarioQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.eval.simulation.scenario.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEvalSimulationScenario<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.eval.simulation.scenario.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.eval.simulation.scenario.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.eval.simulation.scenario.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.eval.simulation.scenario.$get>>>
            >
          >,
          ReturnType<typeof getEvalSimulationScenarioQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.eval.simulation.scenario.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEvalSimulationScenarioQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEvalSimulationScenarioQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.eval.simulation.scenario.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostEvalSimulationScenarioMutationKey() {
  return ['eval', '/eval/simulation/scenario', 'POST'] as const
}

export function getPostEvalSimulationScenarioMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.eval.simulation.scenario.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.eval.simulation.scenario.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEvalSimulationScenarioMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.eval.simulation.scenario.$post>) {
      return parseResponse(client.eval.simulation.scenario.$post(args, options))
    },
  })
}

export function usePostEvalSimulationScenario<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.eval.simulation.scenario.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.eval.simulation.scenario.$post>,
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
  const mutationDefaults = getPostEvalSimulationScenarioMutationOptions<TError, TOnMutateResult>(
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

export function getEvalSimulationScenarioIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.eval.simulation.scenario)[':id']['$get']>>,
) {
  return ['eval', '/eval/simulation/scenario/:id', toValue(args)] as const
}

export function getEvalSimulationScenarioIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.eval.simulation.scenario)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEvalSimulationScenarioIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.eval.simulation.scenario[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEvalSimulationScenarioId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.eval.simulation.scenario)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.eval.simulation.scenario)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.eval.simulation.scenario)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.eval.simulation.scenario)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEvalSimulationScenarioIdQueryKey>
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
          Awaited<ReturnType<(typeof client.eval.simulation.scenario)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEvalSimulationScenarioIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEvalSimulationScenarioIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.eval.simulation.scenario[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteEvalSimulationScenarioIdMutationKey() {
  return ['eval', '/eval/simulation/scenario/:id', 'DELETE'] as const
}

export function getDeleteEvalSimulationScenarioIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.eval.simulation.scenario)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.eval.simulation.scenario)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteEvalSimulationScenarioIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.eval.simulation.scenario)[':id']['$delete']>,
    ) {
      return parseResponse(client.eval.simulation.scenario[':id'].$delete(args, options))
    },
  })
}

export function useDeleteEvalSimulationScenarioId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.eval.simulation.scenario)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.eval.simulation.scenario)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteEvalSimulationScenarioIdMutationOptions<
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

export function getPatchEvalSimulationScenarioIdMutationKey() {
  return ['eval', '/eval/simulation/scenario/:id', 'PATCH'] as const
}

export function getPatchEvalSimulationScenarioIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.eval.simulation.scenario)[':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.eval.simulation.scenario)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchEvalSimulationScenarioIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.eval.simulation.scenario)[':id']['$patch']>,
    ) {
      return parseResponse(client.eval.simulation.scenario[':id'].$patch(args, options))
    },
  })
}

export function usePatchEvalSimulationScenarioId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.eval.simulation.scenario)[':id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.eval.simulation.scenario)[':id']['$patch']>,
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
  const mutationDefaults = getPatchEvalSimulationScenarioIdMutationOptions<TError, TOnMutateResult>(
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

export function getEvalSimulationRunQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.eval.simulation.run.$get>>,
) {
  return ['eval', '/eval/simulation/run', toValue(args)] as const
}

export function getEvalSimulationRunQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.eval.simulation.run.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEvalSimulationRunQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.eval.simulation.run.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEvalSimulationRun<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eval.simulation.run.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.eval.simulation.run.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.eval.simulation.run.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.eval.simulation.run.$get>>>
            >
          >,
          ReturnType<typeof getEvalSimulationRunQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eval.simulation.run.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEvalSimulationRunQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEvalSimulationRunQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.eval.simulation.run.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostEvalSimulationRunMutationKey() {
  return ['eval', '/eval/simulation/run', 'POST'] as const
}

export function getPostEvalSimulationRunMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eval.simulation.run.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.eval.simulation.run.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEvalSimulationRunMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.eval.simulation.run.$post>) {
      return parseResponse(client.eval.simulation.run.$post(args, options))
    },
  })
}

export function usePostEvalSimulationRun<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.eval.simulation.run.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.eval.simulation.run.$post>,
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
  const mutationDefaults = getPostEvalSimulationRunMutationOptions<TError, TOnMutateResult>(
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

export function getEvalSimulationRunIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.eval.simulation.run)[':id']['$get']>>,
) {
  return ['eval', '/eval/simulation/run/:id', toValue(args)] as const
}

export function getEvalSimulationRunIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.eval.simulation.run)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEvalSimulationRunIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.eval.simulation.run[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEvalSimulationRunId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.eval.simulation.run)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.eval.simulation.run)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.eval.simulation.run)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.eval.simulation.run)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEvalSimulationRunIdQueryKey>
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
          Awaited<ReturnType<(typeof client.eval.simulation.run)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEvalSimulationRunIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEvalSimulationRunIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.eval.simulation.run[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchEvalSimulationRunIdMutationKey() {
  return ['eval', '/eval/simulation/run/:id', 'PATCH'] as const
}

export function getPatchEvalSimulationRunIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.eval.simulation.run)[':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.eval.simulation.run)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchEvalSimulationRunIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.eval.simulation.run)[':id']['$patch']>) {
      return parseResponse(client.eval.simulation.run[':id'].$patch(args, options))
    },
  })
}

export function usePatchEvalSimulationRunId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.eval.simulation.run)[':id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.eval.simulation.run)[':id']['$patch']>,
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
  const mutationDefaults = getPatchEvalSimulationRunIdMutationOptions<TError, TOnMutateResult>(
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

export function getEvalSimulationRunIdItemQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.eval.simulation.run)[':id']['item']['$get']>
  >,
) {
  return ['eval', '/eval/simulation/run/:id/item', toValue(args)] as const
}

export function getEvalSimulationRunIdItemQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.eval.simulation.run)[':id']['item']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEvalSimulationRunIdItemQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.eval.simulation.run[':id'].item.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEvalSimulationRunIdItem<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.eval.simulation.run)[':id']['item']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.eval.simulation.run)[':id']['item']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.eval.simulation.run)[':id']['item']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.eval.simulation.run)[':id']['item']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEvalSimulationRunIdItemQueryKey>
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
          Awaited<ReturnType<(typeof client.eval.simulation.run)[':id']['item']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEvalSimulationRunIdItemQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEvalSimulationRunIdItemQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.eval.simulation.run[':id'].item.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEvalSimulationRunIdItemItemIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.eval.simulation.run)[':id']['item'][':itemId']['$get']>
  >,
) {
  return ['eval', '/eval/simulation/run/:id/item/:itemId', toValue(args)] as const
}

export function getEvalSimulationRunIdItemItemIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.eval.simulation.run)[':id']['item'][':itemId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEvalSimulationRunIdItemItemIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.eval.simulation.run[':id'].item[':itemId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEvalSimulationRunIdItemItemId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.eval.simulation.run)[':id']['item'][':itemId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.eval.simulation.run)[':id']['item'][':itemId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.eval.simulation.run)[':id']['item'][':itemId']['$get']>
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
                  ReturnType<(typeof client.eval.simulation.run)[':id']['item'][':itemId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getEvalSimulationRunIdItemItemIdQueryKey>
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
          Awaited<ReturnType<(typeof client.eval.simulation.run)[':id']['item'][':itemId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEvalSimulationRunIdItemItemIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEvalSimulationRunIdItemItemIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.eval.simulation.run[':id'].item[':itemId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchEvalSimulationRunIdItemItemIdMutationKey() {
  return ['eval', '/eval/simulation/run/:id/item/:itemId', 'PATCH'] as const
}

export function getPatchEvalSimulationRunIdItemItemIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.eval.simulation.run)[':id']['item'][':itemId']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.eval.simulation.run)[':id']['item'][':itemId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchEvalSimulationRunIdItemItemIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.eval.simulation.run)[':id']['item'][':itemId']['$patch']
      >,
    ) {
      return parseResponse(client.eval.simulation.run[':id'].item[':itemId'].$patch(args, options))
    },
  })
}

export function usePatchEvalSimulationRunIdItemItemId<
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
                    (typeof client.eval.simulation.run)[':id']['item'][':itemId']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.eval.simulation.run)[':id']['item'][':itemId']['$patch']>,
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
  const mutationDefaults = getPatchEvalSimulationRunIdItemItemIdMutationOptions<
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

export function getPostEvalSimulationRunIdItemItemIdGenerateMutationKey() {
  return ['eval', '/eval/simulation/run/:id/item/:itemId/generate', 'POST'] as const
}

export function getPostEvalSimulationRunIdItemItemIdGenerateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.eval.simulation.run)[':id']['item'][':itemId']['generate']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.eval.simulation.run)[':id']['item'][':itemId']['generate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostEvalSimulationRunIdItemItemIdGenerateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.eval.simulation.run)[':id']['item'][':itemId']['generate']['$post']
      >,
    ) {
      return parseResponse(
        client.eval.simulation.run[':id'].item[':itemId'].generate.$post(args, options),
      )
    },
  })
}

export function usePostEvalSimulationRunIdItemItemIdGenerate<
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
                    (typeof client.eval.simulation.run)[':id']['item'][':itemId']['generate']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.eval.simulation.run)[':id']['item'][':itemId']['generate']['$post']
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
  const mutationDefaults = getPostEvalSimulationRunIdItemItemIdGenerateMutationOptions<
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

export function getEvalSimulationSuiteQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.eval.simulation.suite.$get>>,
) {
  return ['eval', '/eval/simulation/suite', toValue(args)] as const
}

export function getEvalSimulationSuiteQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.eval.simulation.suite.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEvalSimulationSuiteQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.eval.simulation.suite.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEvalSimulationSuite<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eval.simulation.suite.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.eval.simulation.suite.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.eval.simulation.suite.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.eval.simulation.suite.$get>>>
            >
          >,
          ReturnType<typeof getEvalSimulationSuiteQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.eval.simulation.suite.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEvalSimulationSuiteQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEvalSimulationSuiteQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.eval.simulation.suite.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostEvalSimulationSuiteMutationKey() {
  return ['eval', '/eval/simulation/suite', 'POST'] as const
}

export function getPostEvalSimulationSuiteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.eval.simulation.suite.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.eval.simulation.suite.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEvalSimulationSuiteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.eval.simulation.suite.$post>) {
      return parseResponse(client.eval.simulation.suite.$post(args, options))
    },
  })
}

export function usePostEvalSimulationSuite<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.eval.simulation.suite.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.eval.simulation.suite.$post>,
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
  const mutationDefaults = getPostEvalSimulationSuiteMutationOptions<TError, TOnMutateResult>(
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

export function getPostEvalSimulationSuiteIdDuplicateMutationKey() {
  return ['eval', '/eval/simulation/suite/:id/duplicate', 'POST'] as const
}

export function getPostEvalSimulationSuiteIdDuplicateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.eval.simulation.suite)[':id']['duplicate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.eval.simulation.suite)[':id']['duplicate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostEvalSimulationSuiteIdDuplicateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.eval.simulation.suite)[':id']['duplicate']['$post']>,
    ) {
      return parseResponse(client.eval.simulation.suite[':id'].duplicate.$post(args, options))
    },
  })
}

export function usePostEvalSimulationSuiteIdDuplicate<
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
                  ReturnType<(typeof client.eval.simulation.suite)[':id']['duplicate']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.eval.simulation.suite)[':id']['duplicate']['$post']>,
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
  const mutationDefaults = getPostEvalSimulationSuiteIdDuplicateMutationOptions<
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

export function getEvalSimulationSuiteIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.eval.simulation.suite)[':id']['$get']>>,
) {
  return ['eval', '/eval/simulation/suite/:id', toValue(args)] as const
}

export function getEvalSimulationSuiteIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.eval.simulation.suite)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEvalSimulationSuiteIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.eval.simulation.suite[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEvalSimulationSuiteId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.eval.simulation.suite)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.eval.simulation.suite)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.eval.simulation.suite)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.eval.simulation.suite)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEvalSimulationSuiteIdQueryKey>
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
          Awaited<ReturnType<(typeof client.eval.simulation.suite)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEvalSimulationSuiteIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEvalSimulationSuiteIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.eval.simulation.suite[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteEvalSimulationSuiteIdMutationKey() {
  return ['eval', '/eval/simulation/suite/:id', 'DELETE'] as const
}

export function getDeleteEvalSimulationSuiteIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.eval.simulation.suite)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.eval.simulation.suite)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteEvalSimulationSuiteIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.eval.simulation.suite)[':id']['$delete']>,
    ) {
      return parseResponse(client.eval.simulation.suite[':id'].$delete(args, options))
    },
  })
}

export function useDeleteEvalSimulationSuiteId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.eval.simulation.suite)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.eval.simulation.suite)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteEvalSimulationSuiteIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchEvalSimulationSuiteIdMutationKey() {
  return ['eval', '/eval/simulation/suite/:id', 'PATCH'] as const
}

export function getPatchEvalSimulationSuiteIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.eval.simulation.suite)[':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.eval.simulation.suite)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchEvalSimulationSuiteIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.eval.simulation.suite)[':id']['$patch']>,
    ) {
      return parseResponse(client.eval.simulation.suite[':id'].$patch(args, options))
    },
  })
}

export function usePatchEvalSimulationSuiteId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.eval.simulation.suite)[':id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.eval.simulation.suite)[':id']['$patch']>,
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
  const mutationDefaults = getPatchEvalSimulationSuiteIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostEvalSimulationOnboardingRequirementsMutationKey() {
  return ['eval', '/eval/simulation/onboarding/requirements', 'POST'] as const
}

export function getPostEvalSimulationOnboardingRequirementsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.eval.simulation.onboarding.requirements.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.eval.simulation.onboarding.requirements.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEvalSimulationOnboardingRequirementsMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.eval.simulation.onboarding.requirements.$post>,
    ) {
      return parseResponse(client.eval.simulation.onboarding.requirements.$post(args, options))
    },
  })
}

export function usePostEvalSimulationOnboardingRequirements<
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
                Awaited<ReturnType<typeof client.eval.simulation.onboarding.requirements.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.eval.simulation.onboarding.requirements.$post>,
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
  const mutationDefaults = getPostEvalSimulationOnboardingRequirementsMutationOptions<
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

export function getPostEvalSimulationOnboardingSuiteMutationKey() {
  return ['eval', '/eval/simulation/onboarding/suite', 'POST'] as const
}

export function getPostEvalSimulationOnboardingSuiteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.eval.simulation.onboarding.suite.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.eval.simulation.onboarding.suite.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEvalSimulationOnboardingSuiteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.eval.simulation.onboarding.suite.$post>) {
      return parseResponse(client.eval.simulation.onboarding.suite.$post(args, options))
    },
  })
}

export function usePostEvalSimulationOnboardingSuite<
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
                Awaited<ReturnType<typeof client.eval.simulation.onboarding.suite.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.eval.simulation.onboarding.suite.$post>,
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
  const mutationDefaults = getPostEvalSimulationOnboardingSuiteMutationOptions<
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

export function getPatchEvalSimulationOnboardingSuiteSuiteIdMutationKey() {
  return ['eval', '/eval/simulation/onboarding/suite/:suiteId', 'PATCH'] as const
}

export function getPatchEvalSimulationOnboardingSuiteSuiteIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.eval.simulation.onboarding.suite)[':suiteId']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.eval.simulation.onboarding.suite)[':suiteId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchEvalSimulationOnboardingSuiteSuiteIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.eval.simulation.onboarding.suite)[':suiteId']['$patch']
      >,
    ) {
      return parseResponse(
        client.eval.simulation.onboarding.suite[':suiteId'].$patch(args, options),
      )
    },
  })
}

export function usePatchEvalSimulationOnboardingSuiteSuiteId<
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
                  ReturnType<(typeof client.eval.simulation.onboarding.suite)[':suiteId']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.eval.simulation.onboarding.suite)[':suiteId']['$patch']>,
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
  const mutationDefaults = getPatchEvalSimulationOnboardingSuiteSuiteIdMutationOptions<
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

export function getEvalSimulationQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.eval.simulation.$get>>,
) {
  return ['eval', '/eval/simulation', toValue(args)] as const
}

export function getEvalSimulationQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.eval.simulation.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEvalSimulationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.eval.simulation.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEvalSimulation<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eval.simulation.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.eval.simulation.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.eval.simulation.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.eval.simulation.$get>>>
            >
          >,
          ReturnType<typeof getEvalSimulationQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eval.simulation.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEvalSimulationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEvalSimulationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.eval.simulation.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostEvalSimulationMutationKey() {
  return ['eval', '/eval/simulation', 'POST'] as const
}

export function getPostEvalSimulationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eval.simulation.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.eval.simulation.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEvalSimulationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.eval.simulation.$post>) {
      return parseResponse(client.eval.simulation.$post(args, options))
    },
  })
}

export function usePostEvalSimulation<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.eval.simulation.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.eval.simulation.$post>,
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
  const mutationDefaults = getPostEvalSimulationMutationOptions<TError, TOnMutateResult>(
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

export function getEvalSimulationConcurrencyQueryKey() {
  return ['eval', '/eval/simulation/concurrency'] as const
}

export function getEvalSimulationConcurrencyQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getEvalSimulationConcurrencyQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.eval.simulation.concurrency.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEvalSimulationConcurrency<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.eval.simulation.concurrency.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.eval.simulation.concurrency.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.eval.simulation.concurrency.$get>>
              >
            >
          >,
          ReturnType<typeof getEvalSimulationConcurrencyQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.eval.simulation.concurrency.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEvalSimulationConcurrencyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getEvalSimulationConcurrencyQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.eval.simulation.concurrency.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEvalSimulationIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.eval.simulation)[':id']['$get']>>,
) {
  return ['eval', '/eval/simulation/:id', toValue(args)] as const
}

export function getEvalSimulationIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.eval.simulation)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEvalSimulationIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.eval.simulation[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEvalSimulationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.eval.simulation)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.eval.simulation)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.eval.simulation)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.eval.simulation)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEvalSimulationIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.eval.simulation)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEvalSimulationIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEvalSimulationIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.eval.simulation[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteEvalSimulationIdMutationKey() {
  return ['eval', '/eval/simulation/:id', 'DELETE'] as const
}

export function getDeleteEvalSimulationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.eval.simulation)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.eval.simulation)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteEvalSimulationIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.eval.simulation)[':id']['$delete']>) {
      return parseResponse(client.eval.simulation[':id'].$delete(args, options))
    },
  })
}

export function useDeleteEvalSimulationId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.eval.simulation)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.eval.simulation)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteEvalSimulationIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchEvalSimulationIdMutationKey() {
  return ['eval', '/eval/simulation/:id', 'PATCH'] as const
}

export function getPatchEvalSimulationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.eval.simulation)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.eval.simulation)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchEvalSimulationIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.eval.simulation)[':id']['$patch']>) {
      return parseResponse(client.eval.simulation[':id'].$patch(args, options))
    },
  })
}

export function usePatchEvalSimulationId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.eval.simulation)[':id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.eval.simulation)[':id']['$patch']>,
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
  const mutationDefaults = getPatchEvalSimulationIdMutationOptions<TError, TOnMutateResult>(
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

export function getReportingInsightQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.reporting.insight.$get>>,
) {
  return ['reporting', '/reporting/insight', toValue(args)] as const
}

export function getReportingInsightQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.reporting.insight.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReportingInsightQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.reporting.insight.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useReportingInsight<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reporting.insight.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.reporting.insight.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.reporting.insight.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.reporting.insight.$get>>>
            >
          >,
          ReturnType<typeof getReportingInsightQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reporting.insight.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getReportingInsightQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReportingInsightQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.reporting.insight.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostReportingInsightMutationKey() {
  return ['reporting', '/reporting/insight', 'POST'] as const
}

export function getPostReportingInsightMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reporting.insight.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.reporting.insight.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostReportingInsightMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.reporting.insight.$post>) {
      return parseResponse(client.reporting.insight.$post(args, options))
    },
  })
}

export function usePostReportingInsight<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.reporting.insight.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.reporting.insight.$post>,
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
  const mutationDefaults = getPostReportingInsightMutationOptions<TError, TOnMutateResult>(
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

export function getReportingInsightIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.reporting.insight)[':id']['$get']>>,
) {
  return ['reporting', '/reporting/insight/:id', toValue(args)] as const
}

export function getReportingInsightIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.reporting.insight)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReportingInsightIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.reporting.insight[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useReportingInsightId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.reporting.insight)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.reporting.insight)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.reporting.insight)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.reporting.insight)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getReportingInsightIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.reporting.insight)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReportingInsightIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReportingInsightIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.reporting.insight[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteReportingInsightIdMutationKey() {
  return ['reporting', '/reporting/insight/:id', 'DELETE'] as const
}

export function getDeleteReportingInsightIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.reporting.insight)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.reporting.insight)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteReportingInsightIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.reporting.insight)[':id']['$delete']>) {
      return parseResponse(client.reporting.insight[':id'].$delete(args, options))
    },
  })
}

export function useDeleteReportingInsightId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.reporting.insight)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.reporting.insight)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteReportingInsightIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchReportingInsightIdMutationKey() {
  return ['reporting', '/reporting/insight/:id', 'PATCH'] as const
}

export function getPatchReportingInsightIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.reporting.insight)[':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.reporting.insight)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchReportingInsightIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.reporting.insight)[':id']['$patch']>) {
      return parseResponse(client.reporting.insight[':id'].$patch(args, options))
    },
  })
}

export function usePatchReportingInsightId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.reporting.insight)[':id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.reporting.insight)[':id']['$patch']>,
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
  const mutationDefaults = getPatchReportingInsightIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostReportingInsightIdRunMutationKey() {
  return ['reporting', '/reporting/insight/:id/run', 'POST'] as const
}

export function getPostReportingInsightIdRunMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.reporting.insight)[':id']['run']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.reporting.insight)[':id']['run']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostReportingInsightIdRunMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.reporting.insight)[':id']['run']['$post']>,
    ) {
      return parseResponse(client.reporting.insight[':id'].run.$post(args, options))
    },
  })
}

export function usePostReportingInsightIdRun<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.reporting.insight)[':id']['run']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.reporting.insight)[':id']['run']['$post']>,
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
  const mutationDefaults = getPostReportingInsightIdRunMutationOptions<TError, TOnMutateResult>(
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

export function getPostReportingInsightPreviewMutationKey() {
  return ['reporting', '/reporting/insight/preview', 'POST'] as const
}

export function getPostReportingInsightPreviewMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.reporting.insight.preview.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.reporting.insight.preview.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostReportingInsightPreviewMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.reporting.insight.preview.$post>) {
      return parseResponse(client.reporting.insight.preview.$post(args, options))
    },
  })
}

export function usePostReportingInsightPreview<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.reporting.insight.preview.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.reporting.insight.preview.$post>,
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
  const mutationDefaults = getPostReportingInsightPreviewMutationOptions<TError, TOnMutateResult>(
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

export function getReportingBoardQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.reporting.board.$get>>,
) {
  return ['reporting', '/reporting/board', toValue(args)] as const
}

export function getReportingBoardQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.reporting.board.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReportingBoardQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.reporting.board.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useReportingBoard<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reporting.board.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.reporting.board.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.reporting.board.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.reporting.board.$get>>>
            >
          >,
          ReturnType<typeof getReportingBoardQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reporting.board.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getReportingBoardQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReportingBoardQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.reporting.board.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostReportingBoardMutationKey() {
  return ['reporting', '/reporting/board', 'POST'] as const
}

export function getPostReportingBoardMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reporting.board.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.reporting.board.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostReportingBoardMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.reporting.board.$post>) {
      return parseResponse(client.reporting.board.$post(args, options))
    },
  })
}

export function usePostReportingBoard<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.reporting.board.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.reporting.board.$post>,
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
  const mutationDefaults = getPostReportingBoardMutationOptions<TError, TOnMutateResult>(
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

export function getReportingBoardDefaultMetricsOverviewQueryKey() {
  return ['reporting', '/reporting/board/default/metrics-overview'] as const
}

export function getReportingBoardDefaultMetricsOverviewQueryOptions(
  options?: ClientRequestOptions,
) {
  return {
    queryKey: getReportingBoardDefaultMetricsOverviewQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.reporting.board.default['metrics-overview'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useReportingBoardDefaultMetricsOverview<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.reporting.board.default)['metrics-overview']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.reporting.board.default)['metrics-overview']['$get']>
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
                  ReturnType<(typeof client.reporting.board.default)['metrics-overview']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getReportingBoardDefaultMetricsOverviewQueryKey>
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
          Awaited<ReturnType<(typeof client.reporting.board.default)['metrics-overview']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReportingBoardDefaultMetricsOverviewQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getReportingBoardDefaultMetricsOverviewQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.reporting.board.default['metrics-overview'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getReportingBoardIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.reporting.board)[':id']['$get']>>,
) {
  return ['reporting', '/reporting/board/:id', toValue(args)] as const
}

export function getReportingBoardIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.reporting.board)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReportingBoardIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.reporting.board[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useReportingBoardId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.reporting.board)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.reporting.board)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.reporting.board)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.reporting.board)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getReportingBoardIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.reporting.board)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReportingBoardIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReportingBoardIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.reporting.board[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteReportingBoardIdMutationKey() {
  return ['reporting', '/reporting/board/:id', 'DELETE'] as const
}

export function getDeleteReportingBoardIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.reporting.board)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.reporting.board)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteReportingBoardIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.reporting.board)[':id']['$delete']>) {
      return parseResponse(client.reporting.board[':id'].$delete(args, options))
    },
  })
}

export function useDeleteReportingBoardId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.reporting.board)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.reporting.board)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteReportingBoardIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchReportingBoardIdMutationKey() {
  return ['reporting', '/reporting/board/:id', 'PATCH'] as const
}

export function getPatchReportingBoardIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.reporting.board)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.reporting.board)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchReportingBoardIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.reporting.board)[':id']['$patch']>) {
      return parseResponse(client.reporting.board[':id'].$patch(args, options))
    },
  })
}

export function usePatchReportingBoardId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.reporting.board)[':id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.reporting.board)[':id']['$patch']>,
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
  const mutationDefaults = getPatchReportingBoardIdMutationOptions<TError, TOnMutateResult>(
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

export function getEvalQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.eval.$get>>) {
  return ['eval', '/eval', toValue(args)] as const
}

export function getEvalQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.eval.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEvalQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.eval.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useEval<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eval.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.eval.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eval.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eval.$get>>>>>,
          ReturnType<typeof getEvalQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eval.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEvalQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEvalQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.eval.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostEvalMutationKey() {
  return ['eval', '/eval', 'POST'] as const
}

export function getPostEvalMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eval.$post>>>>>,
    TError,
    InferRequestType<typeof client.eval.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEvalMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.eval.$post>) {
      return parseResponse(client.eval.$post(args, options))
    },
  })
}

export function usePostEval<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eval.$post>>>>>,
          TError,
          InferRequestType<typeof client.eval.$post>,
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
  const mutationDefaults = getPostEvalMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getEvalIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.eval)[':id']['$get']>>,
) {
  return ['eval', '/eval/:id', toValue(args)] as const
}

export function getEvalIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.eval)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEvalIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.eval[':id'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useEvalId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.eval)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.eval)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.eval)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.eval)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getEvalIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.eval)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEvalIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEvalIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.eval[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteEvalIdMutationKey() {
  return ['eval', '/eval/:id', 'DELETE'] as const
}

export function getDeleteEvalIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.eval)[':id']['$delete']>>>>
    >,
    TError,
    InferRequestType<(typeof client.eval)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteEvalIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.eval)[':id']['$delete']>) {
      return parseResponse(client.eval[':id'].$delete(args, options))
    },
  })
}

export function useDeleteEvalId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.eval)[':id']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.eval)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteEvalIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchEvalIdMutationKey() {
  return ['eval', '/eval/:id', 'PATCH'] as const
}

export function getPatchEvalIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.eval)[':id']['$patch']>>>>
    >,
    TError,
    InferRequestType<(typeof client.eval)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchEvalIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.eval)[':id']['$patch']>) {
      return parseResponse(client.eval[':id'].$patch(args, options))
    },
  })
}

export function usePatchEvalId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.eval)[':id']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.eval)[':id']['$patch']>,
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
  const mutationDefaults = getPatchEvalIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getEvalRunIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.eval.run)[':id']['$get']>>,
) {
  return ['eval', '/eval/run/:id', toValue(args)] as const
}

export function getEvalRunIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.eval.run)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEvalRunIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.eval.run[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEvalRunId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.eval.run)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.eval.run)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.eval.run)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.eval.run)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getEvalRunIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.eval.run)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEvalRunIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEvalRunIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.eval.run[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteEvalRunIdMutationKey() {
  return ['eval', '/eval/run/:id', 'DELETE'] as const
}

export function getDeleteEvalRunIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.eval.run)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.eval.run)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteEvalRunIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.eval.run)[':id']['$delete']>) {
      return parseResponse(client.eval.run[':id'].$delete(args, options))
    },
  })
}

export function useDeleteEvalRunId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.eval.run)[':id']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.eval.run)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteEvalRunIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getEvalRunQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.eval.run.$get>>,
) {
  return ['eval', '/eval/run', toValue(args)] as const
}

export function getEvalRunQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.eval.run.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEvalRunQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.eval.run.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useEvalRun<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eval.run.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.eval.run.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eval.run.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eval.run.$get>>>>
          >,
          ReturnType<typeof getEvalRunQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eval.run.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEvalRunQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEvalRunQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.eval.run.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostEvalRunMutationKey() {
  return ['eval', '/eval/run', 'POST'] as const
}

export function getPostEvalRunMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eval.run.$post>>>>>,
    TError,
    InferRequestType<typeof client.eval.run.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEvalRunMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.eval.run.$post>) {
      return parseResponse(client.eval.run.$post(args, options))
    },
  })
}

export function usePostEvalRun<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eval.run.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.eval.run.$post>,
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
  const mutationDefaults = getPostEvalRunMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getObservabilityScorecardIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.observability.scorecard)[':id']['$get']>>,
) {
  return ['observability', '/observability/scorecard/:id', toValue(args)] as const
}

export function getObservabilityScorecardIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.observability.scorecard)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getObservabilityScorecardIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.observability.scorecard[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useObservabilityScorecardId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.observability.scorecard)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.observability.scorecard)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.observability.scorecard)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.observability.scorecard)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getObservabilityScorecardIdQueryKey>
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
          Awaited<ReturnType<(typeof client.observability.scorecard)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getObservabilityScorecardIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getObservabilityScorecardIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.observability.scorecard[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteObservabilityScorecardIdMutationKey() {
  return ['observability', '/observability/scorecard/:id', 'DELETE'] as const
}

export function getDeleteObservabilityScorecardIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.observability.scorecard)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.observability.scorecard)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteObservabilityScorecardIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.observability.scorecard)[':id']['$delete']>,
    ) {
      return parseResponse(client.observability.scorecard[':id'].$delete(args, options))
    },
  })
}

export function useDeleteObservabilityScorecardId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.observability.scorecard)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.observability.scorecard)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteObservabilityScorecardIdMutationOptions<
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

export function getPatchObservabilityScorecardIdMutationKey() {
  return ['observability', '/observability/scorecard/:id', 'PATCH'] as const
}

export function getPatchObservabilityScorecardIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.observability.scorecard)[':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.observability.scorecard)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchObservabilityScorecardIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.observability.scorecard)[':id']['$patch']>,
    ) {
      return parseResponse(client.observability.scorecard[':id'].$patch(args, options))
    },
  })
}

export function usePatchObservabilityScorecardId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.observability.scorecard)[':id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.observability.scorecard)[':id']['$patch']>,
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
  const mutationDefaults = getPatchObservabilityScorecardIdMutationOptions<TError, TOnMutateResult>(
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

export function getObservabilityScorecardQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.observability.scorecard.$get>>,
) {
  return ['observability', '/observability/scorecard', toValue(args)] as const
}

export function getObservabilityScorecardQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.observability.scorecard.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getObservabilityScorecardQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.observability.scorecard.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useObservabilityScorecard<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.observability.scorecard.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.observability.scorecard.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.observability.scorecard.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.observability.scorecard.$get>>>
            >
          >,
          ReturnType<typeof getObservabilityScorecardQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.observability.scorecard.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getObservabilityScorecardQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getObservabilityScorecardQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.observability.scorecard.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostObservabilityScorecardMutationKey() {
  return ['observability', '/observability/scorecard', 'POST'] as const
}

export function getPostObservabilityScorecardMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.observability.scorecard.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.observability.scorecard.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostObservabilityScorecardMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.observability.scorecard.$post>) {
      return parseResponse(client.observability.scorecard.$post(args, options))
    },
  })
}

export function usePostObservabilityScorecard<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.observability.scorecard.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.observability.scorecard.$post>,
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
  const mutationDefaults = getPostObservabilityScorecardMutationOptions<TError, TOnMutateResult>(
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

export function getProviderProviderResourceNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.provider)[':provider'][':resourceName']['$get']>
  >,
) {
  return ['provider', '/provider/:provider/:resourceName', toValue(args)] as const
}

export function getProviderProviderResourceNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.provider)[':provider'][':resourceName']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProviderProviderResourceNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.provider[':provider'][':resourceName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProviderProviderResourceName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.provider)[':provider'][':resourceName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.provider)[':provider'][':resourceName']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.provider)[':provider'][':resourceName']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.provider)[':provider'][':resourceName']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProviderProviderResourceNameQueryKey>
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
          Awaited<ReturnType<(typeof client.provider)[':provider'][':resourceName']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProviderProviderResourceNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProviderProviderResourceNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.provider[':provider'][':resourceName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostProviderProviderResourceNameMutationKey() {
  return ['provider', '/provider/:provider/:resourceName', 'POST'] as const
}

export function getPostProviderProviderResourceNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.provider)[':provider'][':resourceName']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.provider)[':provider'][':resourceName']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProviderProviderResourceNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.provider)[':provider'][':resourceName']['$post']>,
    ) {
      return parseResponse(client.provider[':provider'][':resourceName'].$post(args, options))
    },
  })
}

export function usePostProviderProviderResourceName<
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
                Awaited<ReturnType<(typeof client.provider)[':provider'][':resourceName']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.provider)[':provider'][':resourceName']['$post']>,
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
  const mutationDefaults = getPostProviderProviderResourceNameMutationOptions<
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

export function getProviderProviderResourceNameIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.provider)[':provider'][':resourceName'][':id']['$get']>
  >,
) {
  return ['provider', '/provider/:provider/:resourceName/:id', toValue(args)] as const
}

export function getProviderProviderResourceNameIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.provider)[':provider'][':resourceName'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProviderProviderResourceNameIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.provider[':provider'][':resourceName'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProviderProviderResourceNameId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.provider)[':provider'][':resourceName'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.provider)[':provider'][':resourceName'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.provider)[':provider'][':resourceName'][':id']['$get']>
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
                  ReturnType<(typeof client.provider)[':provider'][':resourceName'][':id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getProviderProviderResourceNameIdQueryKey>
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
          Awaited<ReturnType<(typeof client.provider)[':provider'][':resourceName'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProviderProviderResourceNameIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProviderProviderResourceNameIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.provider[':provider'][':resourceName'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteProviderProviderResourceNameIdMutationKey() {
  return ['provider', '/provider/:provider/:resourceName/:id', 'DELETE'] as const
}

export function getDeleteProviderProviderResourceNameIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.provider)[':provider'][':resourceName'][':id']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.provider)[':provider'][':resourceName'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteProviderProviderResourceNameIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.provider)[':provider'][':resourceName'][':id']['$delete']
      >,
    ) {
      return parseResponse(
        client.provider[':provider'][':resourceName'][':id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteProviderProviderResourceNameId<
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
                    (typeof client.provider)[':provider'][':resourceName'][':id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.provider)[':provider'][':resourceName'][':id']['$delete']
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
  const mutationDefaults = getDeleteProviderProviderResourceNameIdMutationOptions<
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

export function getPatchProviderProviderResourceNameIdMutationKey() {
  return ['provider', '/provider/:provider/:resourceName/:id', 'PATCH'] as const
}

export function getPatchProviderProviderResourceNameIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.provider)[':provider'][':resourceName'][':id']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.provider)[':provider'][':resourceName'][':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchProviderProviderResourceNameIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.provider)[':provider'][':resourceName'][':id']['$patch']
      >,
    ) {
      return parseResponse(
        client.provider[':provider'][':resourceName'][':id'].$patch(args, options),
      )
    },
  })
}

export function usePatchProviderProviderResourceNameId<
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
                    (typeof client.provider)[':provider'][':resourceName'][':id']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.provider)[':provider'][':resourceName'][':id']['$patch']>,
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
  const mutationDefaults = getPatchProviderProviderResourceNameIdMutationOptions<
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

export function getPostAnalyticsMutationKey() {
  return ['analytics', '/analytics', 'POST'] as const
}

export function getPostAnalyticsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analytics.$post>>>>>,
    TError,
    InferRequestType<typeof client.analytics.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAnalyticsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.analytics.$post>) {
      return parseResponse(client.analytics.$post(args, options))
    },
  })
}

export function usePostAnalytics<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analytics.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.analytics.$post>,
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
  const mutationDefaults = getPostAnalyticsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
