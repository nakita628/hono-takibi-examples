import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/svelte-query'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/svelte-query'
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

export function getAssistantQueryKey(args: InferRequestType<typeof client.assistant.$get>) {
  return ['assistant', '/assistant', args] as const
}

export function getAssistantQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assistant.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.assistant.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assistant.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAssistantQueryKey>
  >({
    queryKey: getAssistantQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.assistant.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAssistant<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assistant.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.assistant.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assistant.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAssistantQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAssistantQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostAssistant<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assistant.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.assistant.$post>,
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
    const mutationDefaults = getPostAssistantMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAssistantIdQueryKey(
  args: InferRequestType<(typeof client.assistant)[':id']['$get']>,
) {
  return ['assistant', '/assistant/:id', args] as const
}

export function getAssistantIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.assistant)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.assistant)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.assistant)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAssistantIdQueryKey>
  >({
    queryKey: getAssistantIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.assistant[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAssistantId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.assistant)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.assistant)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.assistant)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAssistantIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAssistantIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createDeleteAssistantId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.assistant)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.assistant)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteAssistantIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchAssistantId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.assistant)[':id']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.assistant)[':id']['$patch']>,
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
    const mutationDefaults = getPatchAssistantIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSquadQueryKey(args: InferRequestType<typeof client.squad.$get>) {
  return ['squad', '/squad', args] as const
}

export function getSquadQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.squad.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.squad.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.squad.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSquadQueryKey>
  >({
    queryKey: getSquadQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.squad.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSquad<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.squad.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.squad.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.squad.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSquadQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSquadQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostSquad<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.squad.$post>>>>>,
        TError,
        InferRequestType<typeof client.squad.$post>,
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
    const mutationDefaults = getPostSquadMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSquadIdQueryKey(args: InferRequestType<(typeof client.squad)[':id']['$get']>) {
  return ['squad', '/squad/:id', args] as const
}

export function getSquadIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.squad)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.squad)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.squad)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSquadIdQueryKey>
  >({
    queryKey: getSquadIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.squad[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSquadId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.squad)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.squad)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.squad)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSquadIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSquadIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createDeleteSquadId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.squad)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.squad)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteSquadIdMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchSquadId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.squad)[':id']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.squad)[':id']['$patch']>,
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
    const mutationDefaults = getPatchSquadIdMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getCallQueryKey(args: InferRequestType<typeof client.call.$get>) {
  return ['call', '/call', args] as const
}

export function getCallQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.call.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.call.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.call.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCallQueryKey>
  >({
    queryKey: getCallQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.call.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCall<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.call.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.call.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.call.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getCallQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCallQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostCall<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.call.$post>>>>>,
        TError,
        InferRequestType<typeof client.call.$post>,
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
    const mutationDefaults = getPostCallMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getCallIdQueryKey(args: InferRequestType<(typeof client.call)[':id']['$get']>) {
  return ['call', '/call/:id', args] as const
}

export function getCallIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.call)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.call)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.call)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCallIdQueryKey>
  >({
    queryKey: getCallIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.call[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCallId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.call)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.call)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.call)[':id']['$get']>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCallIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCallIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createDeleteCallId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.call)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.call)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteCallIdMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchCallId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.call)[':id']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.call)[':id']['$patch']>,
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
    const mutationDefaults = getPatchCallIdMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getCallIdMonoRecordingQueryKey(
  args: InferRequestType<(typeof client.call)[':id']['mono-recording']['$get']>,
) {
  return ['call', '/call/:id/mono-recording', args] as const
}

export function getCallIdMonoRecordingQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.call)[':id']['mono-recording']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.call)[':id']['mono-recording']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCallIdMonoRecordingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.call[':id']['mono-recording'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCallIdMonoRecording<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.call)[':id']['mono-recording']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.call)[':id']['mono-recording']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCallIdMonoRecordingQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getCallIdStereoRecordingQueryKey(
  args: InferRequestType<(typeof client.call)[':id']['stereo-recording']['$get']>,
) {
  return ['call', '/call/:id/stereo-recording', args] as const
}

export function getCallIdStereoRecordingQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.call)[':id']['stereo-recording']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.call)[':id']['stereo-recording']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCallIdStereoRecordingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.call[':id']['stereo-recording'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCallIdStereoRecording<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.call)[':id']['stereo-recording']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.call)[':id']['stereo-recording']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getCallIdStereoRecordingQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCallIdVideoRecordingQueryKey(
  args: InferRequestType<(typeof client.call)[':id']['video-recording']['$get']>,
) {
  return ['call', '/call/:id/video-recording', args] as const
}

export function getCallIdVideoRecordingQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.call)[':id']['video-recording']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.call)[':id']['video-recording']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCallIdVideoRecordingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.call[':id']['video-recording'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCallIdVideoRecording<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.call)[':id']['video-recording']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.call)[':id']['video-recording']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getCallIdVideoRecordingQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCallIdCustomerRecordingQueryKey(
  args: InferRequestType<(typeof client.call)[':id']['customer-recording']['$get']>,
) {
  return ['call', '/call/:id/customer-recording', args] as const
}

export function getCallIdCustomerRecordingQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.call)[':id']['customer-recording']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.call)[':id']['customer-recording']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCallIdCustomerRecordingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.call[':id']['customer-recording'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCallIdCustomerRecording<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.call)[':id']['customer-recording']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.call)[':id']['customer-recording']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getCallIdCustomerRecordingQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCallIdAssistantRecordingQueryKey(
  args: InferRequestType<(typeof client.call)[':id']['assistant-recording']['$get']>,
) {
  return ['call', '/call/:id/assistant-recording', args] as const
}

export function getCallIdAssistantRecordingQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.call)[':id']['assistant-recording']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.call)[':id']['assistant-recording']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCallIdAssistantRecordingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.call[':id']['assistant-recording'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCallIdAssistantRecording<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.call)[':id']['assistant-recording']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.call)[':id']['assistant-recording']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getCallIdAssistantRecordingQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCallIdPcapQueryKey(
  args: InferRequestType<(typeof client.call)[':id']['pcap']['$get']>,
) {
  return ['call', '/call/:id/pcap', args] as const
}

export function getCallIdPcapQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.call)[':id']['pcap']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.call)[':id']['pcap']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.call)[':id']['pcap']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCallIdPcapQueryKey>
  >({
    queryKey: getCallIdPcapQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.call[':id'].pcap.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCallIdPcap<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.call)[':id']['pcap']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.call)[':id']['pcap']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.call)[':id']['pcap']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCallIdPcapQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCallIdPcapQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getCallIdCallLogsQueryKey(
  args: InferRequestType<(typeof client.call)[':id']['call-logs']['$get']>,
) {
  return ['call', '/call/:id/call-logs', args] as const
}

export function getCallIdCallLogsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.call)[':id']['call-logs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.call)[':id']['call-logs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.call)[':id']['call-logs']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCallIdCallLogsQueryKey>
  >({
    queryKey: getCallIdCallLogsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.call[':id']['call-logs'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCallIdCallLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.call)[':id']['call-logs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.call)[':id']['call-logs']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.call)[':id']['call-logs']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCallIdCallLogsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCallIdCallLogsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getChatQueryKey(args: InferRequestType<typeof client.chat.$get>) {
  return ['chat', '/chat', args] as const
}

export function getChatQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.chat.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getChatQueryKey>
  >({
    queryKey: getChatQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.chat.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createChat<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.chat.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getChatQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getChatQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostChat<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.$post>>>>>,
        TError,
        InferRequestType<typeof client.chat.$post>,
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
    const mutationDefaults = getPostChatMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getChatIdQueryKey(args: InferRequestType<(typeof client.chat)[':id']['$get']>) {
  return ['chat', '/chat/:id', args] as const
}

export function getChatIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.chat)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.chat)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.chat)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getChatIdQueryKey>
  >({
    queryKey: getChatIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.chat[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createChatId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.chat)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.chat)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.chat)[':id']['$get']>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getChatIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getChatIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createDeleteChatId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.chat)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.chat)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteChatIdMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostChatResponses<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.responses.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.chat.responses.$post>,
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
    const mutationDefaults = getPostChatResponsesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getCampaignQueryKey(args: InferRequestType<typeof client.campaign.$get>) {
  return ['campaign', '/campaign', args] as const
}

export function getCampaignQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.campaign.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.campaign.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.campaign.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCampaignQueryKey>
  >({
    queryKey: getCampaignQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.campaign.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCampaign<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.campaign.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.campaign.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.campaign.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getCampaignQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCampaignQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostCampaign<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.campaign.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.campaign.$post>,
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
    const mutationDefaults = getPostCampaignMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV2CampaignQueryKey(args: InferRequestType<typeof client.v2.campaign.$get>) {
  return ['v2', '/v2/campaign', args] as const
}

export function getV2CampaignQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.campaign.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.campaign.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.campaign.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2CampaignQueryKey>
  >({
    queryKey: getV2CampaignQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.campaign.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV2Campaign<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.campaign.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.campaign.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.campaign.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2CampaignQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2CampaignQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostV2Campaign<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.campaign.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v2.campaign.$post>,
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
    const mutationDefaults = getPostV2CampaignMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV2CampaignIdQueryKey(
  args: InferRequestType<(typeof client.v2.campaign)[':id']['$get']>,
) {
  return ['v2', '/v2/campaign/:id', args] as const
}

export function getV2CampaignIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.campaign)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.campaign)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.campaign)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2CampaignIdQueryKey>
  >({
    queryKey: getV2CampaignIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.campaign[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV2CampaignId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.campaign)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.campaign)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v2.campaign)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2CampaignIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2CampaignIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createDeleteV2CampaignId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v2.campaign)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.campaign)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteV2CampaignIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchV2CampaignId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v2.campaign)[':id']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.campaign)[':id']['$patch']>,
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
    const mutationDefaults = getPatchV2CampaignIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getCampaignIdQueryKey(
  args: InferRequestType<(typeof client.campaign)[':id']['$get']>,
) {
  return ['campaign', '/campaign/:id', args] as const
}

export function getCampaignIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.campaign)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.campaign)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.campaign)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCampaignIdQueryKey>
  >({
    queryKey: getCampaignIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.campaign[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCampaignId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.campaign)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.campaign)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.campaign)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCampaignIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCampaignIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createDeleteCampaignId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.campaign)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.campaign)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteCampaignIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchCampaignId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.campaign)[':id']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.campaign)[':id']['$patch']>,
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
    const mutationDefaults = getPatchCampaignIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV2CampaignIdContactsQueryKey(
  args: InferRequestType<(typeof client.v2.campaign)[':id']['contacts']['$get']>,
) {
  return ['v2', '/v2/campaign/:id/contacts', args] as const
}

export function getV2CampaignIdContactsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.campaign)[':id']['contacts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.campaign)[':id']['contacts']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2CampaignIdContactsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.campaign[':id'].contacts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2CampaignIdContacts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.campaign)[':id']['contacts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.campaign)[':id']['contacts']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV2CampaignIdContactsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getSessionQueryKey(args: InferRequestType<typeof client.session.$get>) {
  return ['session', '/session', args] as const
}

export function getSessionQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.session.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.session.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.session.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSessionQueryKey>
  >({
    queryKey: getSessionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.session.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSession<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.session.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.session.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.session.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSessionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSessionQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostSession<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.session.$post>>>>>,
        TError,
        InferRequestType<typeof client.session.$post>,
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
    const mutationDefaults = getPostSessionMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSessionIdQueryKey(
  args: InferRequestType<(typeof client.session)[':id']['$get']>,
) {
  return ['session', '/session/:id', args] as const
}

export function getSessionIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.session)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.session)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.session)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSessionIdQueryKey>
  >({
    queryKey: getSessionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.session[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSessionId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.session)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.session)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.session)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSessionIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSessionIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createDeleteSessionId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.session)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.session)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteSessionIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchSessionId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.session)[':id']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.session)[':id']['$patch']>,
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
    const mutationDefaults = getPatchSessionIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getTrafficAllocationsQueryKey(
  args: InferRequestType<(typeof client)['traffic-allocations']['$get']>,
) {
  return ['traffic-allocations', '/traffic-allocations', args] as const
}

export function getTrafficAllocationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['traffic-allocations']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['traffic-allocations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['traffic-allocations']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTrafficAllocationsQueryKey>
  >({
    queryKey: getTrafficAllocationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['traffic-allocations'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTrafficAllocations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['traffic-allocations']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['traffic-allocations']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['traffic-allocations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTrafficAllocationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTrafficAllocationsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostTrafficAllocations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTrafficAllocationsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getTrafficAllocationsLatestQueryKey(
  args: InferRequestType<(typeof client)['traffic-allocations']['latest']['$get']>,
) {
  return ['traffic-allocations', '/traffic-allocations/latest', args] as const
}

export function getTrafficAllocationsLatestQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['traffic-allocations']['latest']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['traffic-allocations']['latest']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getTrafficAllocationsLatestQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['traffic-allocations'].latest.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTrafficAllocationsLatest<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['traffic-allocations']['latest']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['traffic-allocations']['latest']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getTrafficAllocationsLatestQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getTrafficAllocationsMetricsQueryKey(
  args: InferRequestType<(typeof client)['traffic-allocations']['metrics']['$get']>,
) {
  return ['traffic-allocations', '/traffic-allocations/metrics', args] as const
}

export function getTrafficAllocationsMetricsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['traffic-allocations']['metrics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['traffic-allocations']['metrics']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getTrafficAllocationsMetricsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['traffic-allocations'].metrics.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTrafficAllocationsMetrics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['traffic-allocations']['metrics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['traffic-allocations']['metrics']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getTrafficAllocationsMetricsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getTrafficAllocationsIdQueryKey(
  args: InferRequestType<(typeof client)['traffic-allocations'][':id']['$get']>,
) {
  return ['traffic-allocations', '/traffic-allocations/:id', args] as const
}

export function getTrafficAllocationsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['traffic-allocations'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['traffic-allocations'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getTrafficAllocationsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['traffic-allocations'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTrafficAllocationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['traffic-allocations'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['traffic-allocations'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getTrafficAllocationsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPhoneNumberQueryKey(
  args: InferRequestType<(typeof client)['phone-number']['$get']>,
) {
  return ['phone-number', '/phone-number', args] as const
}

export function getPhoneNumberQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['phone-number']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client)['phone-number']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['phone-number']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPhoneNumberQueryKey>
  >({
    queryKey: getPhoneNumberQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['phone-number'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPhoneNumber<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['phone-number']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['phone-number']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['phone-number']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPhoneNumberQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPhoneNumberQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostPhoneNumber<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['phone-number']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['phone-number']['$post']>,
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
    const mutationDefaults = getPostPhoneNumberMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV2PhoneNumberQueryKey(
  args: InferRequestType<(typeof client.v2)['phone-number']['$get']>,
) {
  return ['v2', '/v2/phone-number', args] as const
}

export function getV2PhoneNumberQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['phone-number']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)['phone-number']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['phone-number']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2PhoneNumberQueryKey>
  >({
    queryKey: getV2PhoneNumberQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2['phone-number'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV2PhoneNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['phone-number']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2)['phone-number']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['phone-number']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2PhoneNumberQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2PhoneNumberQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPhoneNumberIdQueryKey(
  args: InferRequestType<(typeof client)['phone-number'][':id']['$get']>,
) {
  return ['phone-number', '/phone-number/:id', args] as const
}

export function getPhoneNumberIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['phone-number'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['phone-number'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['phone-number'][':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPhoneNumberIdQueryKey>
  >({
    queryKey: getPhoneNumberIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['phone-number'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPhoneNumberId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['phone-number'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['phone-number'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['phone-number'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPhoneNumberIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPhoneNumberIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createDeletePhoneNumberId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeletePhoneNumberIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchPhoneNumberId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchPhoneNumberIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getToolQueryKey(args: InferRequestType<typeof client.tool.$get>) {
  return ['tool', '/tool', args] as const
}

export function getToolQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tool.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.tool.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tool.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getToolQueryKey>
  >({
    queryKey: getToolQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tool.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createTool<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tool.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.tool.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tool.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getToolQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getToolQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostTool<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tool.$post>>>>>,
        TError,
        InferRequestType<typeof client.tool.$post>,
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
    const mutationDefaults = getPostToolMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getToolIdQueryKey(args: InferRequestType<(typeof client.tool)[':id']['$get']>) {
  return ['tool', '/tool/:id', args] as const
}

export function getToolIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tool)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.tool)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tool)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getToolIdQueryKey>
  >({
    queryKey: getToolIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tool[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createToolId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tool)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tool)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tool)[':id']['$get']>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getToolIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getToolIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createDeleteToolId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tool)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.tool)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteToolIdMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchToolId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tool)[':id']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.tool)[':id']['$patch']>,
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
    const mutationDefaults = getPatchToolIdMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getFileQueryKey(args: InferRequestType<typeof client.file.$get>) {
  return ['file', '/file', args] as const
}

export function getFileQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.file.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.file.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.file.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFileQueryKey>
  >({
    queryKey: getFileQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.file.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createFile<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.file.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.file.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.file.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getFileQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFileQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostFile<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.file.$post>>>>>,
        TError,
        InferRequestType<typeof client.file.$post>,
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
    const mutationDefaults = getPostFileMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getFileIdQueryKey(args: InferRequestType<(typeof client.file)[':id']['$get']>) {
  return ['file', '/file/:id', args] as const
}

export function getFileIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.file)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.file)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.file)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFileIdQueryKey>
  >({
    queryKey: getFileIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.file[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createFileId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.file)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.file)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.file)[':id']['$get']>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getFileIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFileIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createDeleteFileId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.file)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.file)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteFileIdMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchFileId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.file)[':id']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.file)[':id']['$patch']>,
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
    const mutationDefaults = getPatchFileIdMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV2KnowledgeBaseQueryKey(
  args: InferRequestType<(typeof client.v2)['knowledge-base']['$get']>,
) {
  return ['v2', '/v2/knowledge-base', args] as const
}

export function getV2KnowledgeBaseQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['knowledge-base']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)['knowledge-base']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['knowledge-base']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2KnowledgeBaseQueryKey>
  >({
    queryKey: getV2KnowledgeBaseQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2['knowledge-base'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV2KnowledgeBase<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['knowledge-base']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2)['knowledge-base']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['knowledge-base']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2KnowledgeBaseQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2KnowledgeBaseQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostV2KnowledgeBase<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['knowledge-base']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v2)['knowledge-base']['$post']>,
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
    const mutationDefaults = getPostV2KnowledgeBaseMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV2KnowledgeBaseIdFileQueryKey(
  args: InferRequestType<(typeof client.v2)['knowledge-base'][':id']['file']['$get']>,
) {
  return ['v2', '/v2/knowledge-base/:id/file', args] as const
}

export function getV2KnowledgeBaseIdFileQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2)['knowledge-base'][':id']['file']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)['knowledge-base'][':id']['file']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2KnowledgeBaseIdFileQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2['knowledge-base'][':id'].file.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2KnowledgeBaseIdFile<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2)['knowledge-base'][':id']['file']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2)['knowledge-base'][':id']['file']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV2KnowledgeBaseIdFileQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostV2KnowledgeBaseIdFile<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2KnowledgeBaseIdFileMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteV2KnowledgeBaseIdFileFileId<
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
                  (typeof client.v2)['knowledge-base'][':id']['file'][':fileId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2)['knowledge-base'][':id']['file'][':fileId']['$delete']>,
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
    const mutationDefaults = getDeleteV2KnowledgeBaseIdFileFileIdMutationOptions<
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

export function createPostV2KnowledgeBaseIdFileFileIdRetry<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2KnowledgeBaseIdFileFileIdRetryMutationOptions<
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

export function getV2KnowledgeBaseIdQueryKey(
  args: InferRequestType<(typeof client.v2)['knowledge-base'][':id']['$get']>,
) {
  return ['v2', '/v2/knowledge-base/:id', args] as const
}

export function getV2KnowledgeBaseIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['knowledge-base'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)['knowledge-base'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2KnowledgeBaseIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2['knowledge-base'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2KnowledgeBaseId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['knowledge-base'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2)['knowledge-base'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2KnowledgeBaseIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createDeleteV2KnowledgeBaseId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV2KnowledgeBaseIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchV2KnowledgeBaseId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchV2KnowledgeBaseIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getStructuredOutputQueryKey(
  args: InferRequestType<(typeof client)['structured-output']['$get']>,
) {
  return ['structured-output', '/structured-output', args] as const
}

export function getStructuredOutputQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['structured-output']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['structured-output']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['structured-output']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStructuredOutputQueryKey>
  >({
    queryKey: getStructuredOutputQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['structured-output'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStructuredOutput<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['structured-output']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['structured-output']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['structured-output']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStructuredOutputQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getStructuredOutputQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostStructuredOutput<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['structured-output']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['structured-output']['$post']>,
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
    const mutationDefaults = getPostStructuredOutputMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getStructuredOutputIdQueryKey(
  args: InferRequestType<(typeof client)['structured-output'][':id']['$get']>,
) {
  return ['structured-output', '/structured-output/:id', args] as const
}

export function getStructuredOutputIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['structured-output'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['structured-output'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getStructuredOutputIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['structured-output'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createStructuredOutputId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['structured-output'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['structured-output'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getStructuredOutputIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createDeleteStructuredOutputId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteStructuredOutputIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchStructuredOutputId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchStructuredOutputIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostStructuredOutputRun<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostStructuredOutputRunMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getEvalSimulationPersonalityQueryKey(
  args: InferRequestType<typeof client.eval.simulation.personality.$get>,
) {
  return ['eval', '/eval/simulation/personality', args] as const
}

export function getEvalSimulationPersonalityQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.eval.simulation.personality.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.eval.simulation.personality.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.eval.simulation.personality.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEvalSimulationPersonalityQueryKey>
  >({
    queryKey: getEvalSimulationPersonalityQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.eval.simulation.personality.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEvalSimulationPersonality<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.eval.simulation.personality.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.eval.simulation.personality.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.eval.simulation.personality.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEvalSimulationPersonalityQueryKey>
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
      ...getEvalSimulationPersonalityQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostEvalSimulationPersonality<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostEvalSimulationPersonalityMutationOptions<
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

export function getEvalSimulationPersonalityIdQueryKey(
  args: InferRequestType<(typeof client.eval.simulation.personality)[':id']['$get']>,
) {
  return ['eval', '/eval/simulation/personality/:id', args] as const
}

export function getEvalSimulationPersonalityIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.eval.simulation.personality)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.eval.simulation.personality)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getEvalSimulationPersonalityIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.eval.simulation.personality[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEvalSimulationPersonalityId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.eval.simulation.personality)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.eval.simulation.personality)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getEvalSimulationPersonalityIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDeleteEvalSimulationPersonalityId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteEvalSimulationPersonalityIdMutationOptions<
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

export function createPatchEvalSimulationPersonalityId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchEvalSimulationPersonalityIdMutationOptions<
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

export function getEvalSimulationScenarioQueryKey(
  args: InferRequestType<typeof client.eval.simulation.scenario.$get>,
) {
  return ['eval', '/eval/simulation/scenario', args] as const
}

export function getEvalSimulationScenarioQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.eval.simulation.scenario.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.eval.simulation.scenario.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.eval.simulation.scenario.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEvalSimulationScenarioQueryKey>
  >({
    queryKey: getEvalSimulationScenarioQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.eval.simulation.scenario.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEvalSimulationScenario<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.eval.simulation.scenario.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.eval.simulation.scenario.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.eval.simulation.scenario.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEvalSimulationScenarioQueryKey>
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
      ...getEvalSimulationScenarioQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostEvalSimulationScenario<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.eval.simulation.scenario.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.eval.simulation.scenario.$post>,
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
    const mutationDefaults = getPostEvalSimulationScenarioMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getEvalSimulationScenarioIdQueryKey(
  args: InferRequestType<(typeof client.eval.simulation.scenario)[':id']['$get']>,
) {
  return ['eval', '/eval/simulation/scenario/:id', args] as const
}

export function getEvalSimulationScenarioIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.eval.simulation.scenario)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.eval.simulation.scenario)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getEvalSimulationScenarioIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.eval.simulation.scenario[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEvalSimulationScenarioId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.eval.simulation.scenario)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.eval.simulation.scenario)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getEvalSimulationScenarioIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDeleteEvalSimulationScenarioId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteEvalSimulationScenarioIdMutationOptions<
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

export function createPatchEvalSimulationScenarioId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchEvalSimulationScenarioIdMutationOptions<
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

export function getEvalSimulationRunQueryKey(
  args: InferRequestType<typeof client.eval.simulation.run.$get>,
) {
  return ['eval', '/eval/simulation/run', args] as const
}

export function getEvalSimulationRunQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eval.simulation.run.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.eval.simulation.run.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eval.simulation.run.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEvalSimulationRunQueryKey>
  >({
    queryKey: getEvalSimulationRunQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.eval.simulation.run.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createEvalSimulationRun<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eval.simulation.run.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.eval.simulation.run.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.eval.simulation.run.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEvalSimulationRunQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEvalSimulationRunQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostEvalSimulationRun<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.eval.simulation.run.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.eval.simulation.run.$post>,
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
    const mutationDefaults = getPostEvalSimulationRunMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getEvalSimulationRunIdQueryKey(
  args: InferRequestType<(typeof client.eval.simulation.run)[':id']['$get']>,
) {
  return ['eval', '/eval/simulation/run/:id', args] as const
}

export function getEvalSimulationRunIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.eval.simulation.run)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.eval.simulation.run)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getEvalSimulationRunIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.eval.simulation.run[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEvalSimulationRunId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.eval.simulation.run)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.eval.simulation.run)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEvalSimulationRunIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPatchEvalSimulationRunId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchEvalSimulationRunIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getEvalSimulationRunIdItemQueryKey(
  args: InferRequestType<(typeof client.eval.simulation.run)[':id']['item']['$get']>,
) {
  return ['eval', '/eval/simulation/run/:id/item', args] as const
}

export function getEvalSimulationRunIdItemQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.eval.simulation.run)[':id']['item']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.eval.simulation.run)[':id']['item']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getEvalSimulationRunIdItemQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.eval.simulation.run[':id'].item.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEvalSimulationRunIdItem<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.eval.simulation.run)[':id']['item']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.eval.simulation.run)[':id']['item']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getEvalSimulationRunIdItemQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getEvalSimulationRunIdItemItemIdQueryKey(
  args: InferRequestType<(typeof client.eval.simulation.run)[':id']['item'][':itemId']['$get']>,
) {
  return ['eval', '/eval/simulation/run/:id/item/:itemId', args] as const
}

export function getEvalSimulationRunIdItemItemIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.eval.simulation.run)[':id']['item'][':itemId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.eval.simulation.run)[':id']['item'][':itemId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getEvalSimulationRunIdItemItemIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.eval.simulation.run[':id'].item[':itemId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEvalSimulationRunIdItemItemId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.eval.simulation.run)[':id']['item'][':itemId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.eval.simulation.run)[':id']['item'][':itemId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getEvalSimulationRunIdItemItemIdQueryKey>
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
      ...getEvalSimulationRunIdItemItemIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPatchEvalSimulationRunIdItemItemId<
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
                ReturnType<(typeof client.eval.simulation.run)[':id']['item'][':itemId']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.eval.simulation.run)[':id']['item'][':itemId']['$patch']>,
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
    const mutationDefaults = getPatchEvalSimulationRunIdItemItemIdMutationOptions<
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

export function createPostEvalSimulationRunIdItemItemIdGenerate<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostEvalSimulationRunIdItemItemIdGenerateMutationOptions<
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

export function getEvalSimulationSuiteQueryKey(
  args: InferRequestType<typeof client.eval.simulation.suite.$get>,
) {
  return ['eval', '/eval/simulation/suite', args] as const
}

export function getEvalSimulationSuiteQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eval.simulation.suite.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.eval.simulation.suite.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.eval.simulation.suite.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEvalSimulationSuiteQueryKey>
  >({
    queryKey: getEvalSimulationSuiteQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.eval.simulation.suite.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createEvalSimulationSuite<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eval.simulation.suite.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.eval.simulation.suite.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.eval.simulation.suite.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEvalSimulationSuiteQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEvalSimulationSuiteQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostEvalSimulationSuite<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.eval.simulation.suite.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.eval.simulation.suite.$post>,
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
    const mutationDefaults = getPostEvalSimulationSuiteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostEvalSimulationSuiteIdDuplicate<
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
                ReturnType<(typeof client.eval.simulation.suite)[':id']['duplicate']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.eval.simulation.suite)[':id']['duplicate']['$post']>,
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
    const mutationDefaults = getPostEvalSimulationSuiteIdDuplicateMutationOptions<
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

export function getEvalSimulationSuiteIdQueryKey(
  args: InferRequestType<(typeof client.eval.simulation.suite)[':id']['$get']>,
) {
  return ['eval', '/eval/simulation/suite/:id', args] as const
}

export function getEvalSimulationSuiteIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.eval.simulation.suite)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.eval.simulation.suite)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getEvalSimulationSuiteIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.eval.simulation.suite[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEvalSimulationSuiteId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.eval.simulation.suite)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.eval.simulation.suite)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getEvalSimulationSuiteIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDeleteEvalSimulationSuiteId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteEvalSimulationSuiteIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchEvalSimulationSuiteId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchEvalSimulationSuiteIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostEvalSimulationOnboardingRequirements<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostEvalSimulationOnboardingRequirementsMutationOptions<
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

export function createPostEvalSimulationOnboardingSuite<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostEvalSimulationOnboardingSuiteMutationOptions<
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

export function createPatchEvalSimulationOnboardingSuiteSuiteId<
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
                ReturnType<(typeof client.eval.simulation.onboarding.suite)[':suiteId']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.eval.simulation.onboarding.suite)[':suiteId']['$patch']>,
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
    const mutationDefaults = getPatchEvalSimulationOnboardingSuiteSuiteIdMutationOptions<
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

export function getEvalSimulationQueryKey(
  args: InferRequestType<typeof client.eval.simulation.$get>,
) {
  return ['eval', '/eval/simulation', args] as const
}

export function getEvalSimulationQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eval.simulation.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.eval.simulation.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eval.simulation.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEvalSimulationQueryKey>
  >({
    queryKey: getEvalSimulationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.eval.simulation.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createEvalSimulation<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eval.simulation.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.eval.simulation.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eval.simulation.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getEvalSimulationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEvalSimulationQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostEvalSimulation<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eval.simulation.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.eval.simulation.$post>,
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
    const mutationDefaults = getPostEvalSimulationMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getEvalSimulationConcurrencyQueryKey() {
  return ['eval', '/eval/simulation/concurrency'] as const
}

export function getEvalSimulationConcurrencyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.eval.simulation.concurrency.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.eval.simulation.concurrency.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEvalSimulationConcurrencyQueryKey>
  >({
    queryKey: getEvalSimulationConcurrencyQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.eval.simulation.concurrency.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEvalSimulationConcurrency<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.eval.simulation.concurrency.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.eval.simulation.concurrency.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEvalSimulationConcurrencyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEvalSimulationConcurrencyQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getEvalSimulationIdQueryKey(
  args: InferRequestType<(typeof client.eval.simulation)[':id']['$get']>,
) {
  return ['eval', '/eval/simulation/:id', args] as const
}

export function getEvalSimulationIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.eval.simulation)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.eval.simulation)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.eval.simulation)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEvalSimulationIdQueryKey>
  >({
    queryKey: getEvalSimulationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.eval.simulation[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEvalSimulationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.eval.simulation)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.eval.simulation)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.eval.simulation)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEvalSimulationIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEvalSimulationIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createDeleteEvalSimulationId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteEvalSimulationIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchEvalSimulationId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchEvalSimulationIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getReportingInsightQueryKey(
  args: InferRequestType<typeof client.reporting.insight.$get>,
) {
  return ['reporting', '/reporting/insight', args] as const
}

export function getReportingInsightQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reporting.insight.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.reporting.insight.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reporting.insight.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getReportingInsightQueryKey>
  >({
    queryKey: getReportingInsightQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.reporting.insight.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createReportingInsight<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reporting.insight.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.reporting.insight.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.reporting.insight.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReportingInsightQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getReportingInsightQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostReportingInsight<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.reporting.insight.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.reporting.insight.$post>,
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
    const mutationDefaults = getPostReportingInsightMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getReportingInsightIdQueryKey(
  args: InferRequestType<(typeof client.reporting.insight)[':id']['$get']>,
) {
  return ['reporting', '/reporting/insight/:id', args] as const
}

export function getReportingInsightIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.reporting.insight)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.reporting.insight)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.reporting.insight)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReportingInsightIdQueryKey>
  >({
    queryKey: getReportingInsightIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.reporting.insight[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createReportingInsightId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.reporting.insight)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.reporting.insight)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.reporting.insight)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReportingInsightIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getReportingInsightIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createDeleteReportingInsightId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteReportingInsightIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchReportingInsightId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchReportingInsightIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostReportingInsightIdRun<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostReportingInsightIdRunMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostReportingInsightPreview<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.reporting.insight.preview.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.reporting.insight.preview.$post>,
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
    const mutationDefaults = getPostReportingInsightPreviewMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getReportingBoardQueryKey(
  args: InferRequestType<typeof client.reporting.board.$get>,
) {
  return ['reporting', '/reporting/board', args] as const
}

export function getReportingBoardQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reporting.board.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.reporting.board.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reporting.board.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getReportingBoardQueryKey>
  >({
    queryKey: getReportingBoardQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.reporting.board.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createReportingBoard<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reporting.board.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.reporting.board.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reporting.board.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getReportingBoardQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getReportingBoardQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostReportingBoard<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reporting.board.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.reporting.board.$post>,
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
    const mutationDefaults = getPostReportingBoardMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getReportingBoardDefaultMetricsOverviewQueryKey() {
  return ['reporting', '/reporting/board/default/metrics-overview'] as const
}

export function getReportingBoardDefaultMetricsOverviewQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.reporting.board.default)['metrics-overview']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
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
  >({
    queryKey: getReportingBoardDefaultMetricsOverviewQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.reporting.board.default['metrics-overview'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createReportingBoardDefaultMetricsOverview<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.reporting.board.default)['metrics-overview']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getReportingBoardDefaultMetricsOverviewQueryKey>
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
      ...getReportingBoardDefaultMetricsOverviewQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getReportingBoardIdQueryKey(
  args: InferRequestType<(typeof client.reporting.board)[':id']['$get']>,
) {
  return ['reporting', '/reporting/board/:id', args] as const
}

export function getReportingBoardIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.reporting.board)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.reporting.board)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.reporting.board)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReportingBoardIdQueryKey>
  >({
    queryKey: getReportingBoardIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.reporting.board[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createReportingBoardId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.reporting.board)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.reporting.board)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.reporting.board)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReportingBoardIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getReportingBoardIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createDeleteReportingBoardId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteReportingBoardIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchReportingBoardId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchReportingBoardIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getEvalQueryKey(args: InferRequestType<typeof client.eval.$get>) {
  return ['eval', '/eval', args] as const
}

export function getEvalQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eval.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.eval.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eval.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEvalQueryKey>
  >({
    queryKey: getEvalQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.eval.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createEval<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eval.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.eval.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eval.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getEvalQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEvalQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostEval<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eval.$post>>>>>,
        TError,
        InferRequestType<typeof client.eval.$post>,
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
    const mutationDefaults = getPostEvalMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getEvalIdQueryKey(args: InferRequestType<(typeof client.eval)[':id']['$get']>) {
  return ['eval', '/eval/:id', args] as const
}

export function getEvalIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.eval)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.eval)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.eval)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEvalIdQueryKey>
  >({
    queryKey: getEvalIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.eval[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createEvalId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.eval)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.eval)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.eval)[':id']['$get']>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getEvalIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEvalIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createDeleteEvalId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.eval)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.eval)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteEvalIdMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchEvalId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.eval)[':id']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.eval)[':id']['$patch']>,
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
    const mutationDefaults = getPatchEvalIdMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getEvalRunIdQueryKey(
  args: InferRequestType<(typeof client.eval.run)[':id']['$get']>,
) {
  return ['eval', '/eval/run/:id', args] as const
}

export function getEvalRunIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.eval.run)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.eval.run)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.eval.run)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEvalRunIdQueryKey>
  >({
    queryKey: getEvalRunIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.eval.run[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createEvalRunId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.eval.run)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.eval.run)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.eval.run)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEvalRunIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEvalRunIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createDeleteEvalRunId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.eval.run)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.eval.run)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteEvalRunIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getEvalRunQueryKey(args: InferRequestType<typeof client.eval.run.$get>) {
  return ['eval', '/eval/run', args] as const
}

export function getEvalRunQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eval.run.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.eval.run.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eval.run.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEvalRunQueryKey>
  >({
    queryKey: getEvalRunQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.eval.run.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createEvalRun<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eval.run.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.eval.run.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eval.run.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getEvalRunQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEvalRunQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostEvalRun<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eval.run.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.eval.run.$post>,
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
    const mutationDefaults = getPostEvalRunMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getObservabilityScorecardIdQueryKey(
  args: InferRequestType<(typeof client.observability.scorecard)[':id']['$get']>,
) {
  return ['observability', '/observability/scorecard/:id', args] as const
}

export function getObservabilityScorecardIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.observability.scorecard)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.observability.scorecard)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getObservabilityScorecardIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.observability.scorecard[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createObservabilityScorecardId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.observability.scorecard)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.observability.scorecard)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getObservabilityScorecardIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDeleteObservabilityScorecardId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteObservabilityScorecardIdMutationOptions<
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

export function createPatchObservabilityScorecardId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchObservabilityScorecardIdMutationOptions<
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

export function getObservabilityScorecardQueryKey(
  args: InferRequestType<typeof client.observability.scorecard.$get>,
) {
  return ['observability', '/observability/scorecard', args] as const
}

export function getObservabilityScorecardQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.observability.scorecard.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.observability.scorecard.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.observability.scorecard.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getObservabilityScorecardQueryKey>
  >({
    queryKey: getObservabilityScorecardQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.observability.scorecard.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createObservabilityScorecard<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.observability.scorecard.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.observability.scorecard.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.observability.scorecard.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getObservabilityScorecardQueryKey>
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
      ...getObservabilityScorecardQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostObservabilityScorecard<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.observability.scorecard.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.observability.scorecard.$post>,
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
    const mutationDefaults = getPostObservabilityScorecardMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getProviderProviderResourceNameQueryKey(
  args: InferRequestType<(typeof client.provider)[':provider'][':resourceName']['$get']>,
) {
  return ['provider', '/provider/:provider/:resourceName', args] as const
}

export function getProviderProviderResourceNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.provider)[':provider'][':resourceName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.provider)[':provider'][':resourceName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getProviderProviderResourceNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.provider[':provider'][':resourceName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProviderProviderResourceName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.provider)[':provider'][':resourceName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.provider)[':provider'][':resourceName']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getProviderProviderResourceNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostProviderProviderResourceName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostProviderProviderResourceNameMutationOptions<
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

export function getProviderProviderResourceNameIdQueryKey(
  args: InferRequestType<(typeof client.provider)[':provider'][':resourceName'][':id']['$get']>,
) {
  return ['provider', '/provider/:provider/:resourceName/:id', args] as const
}

export function getProviderProviderResourceNameIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.provider)[':provider'][':resourceName'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.provider)[':provider'][':resourceName'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getProviderProviderResourceNameIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.provider[':provider'][':resourceName'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProviderProviderResourceNameId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.provider)[':provider'][':resourceName'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.provider)[':provider'][':resourceName'][':id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getProviderProviderResourceNameIdQueryKey>
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
      ...getProviderProviderResourceNameIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDeleteProviderProviderResourceNameId<
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
                ReturnType<(typeof client.provider)[':provider'][':resourceName'][':id']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.provider)[':provider'][':resourceName'][':id']['$delete']>,
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
    const mutationDefaults = getDeleteProviderProviderResourceNameIdMutationOptions<
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

export function createPatchProviderProviderResourceNameId<
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
                ReturnType<(typeof client.provider)[':provider'][':resourceName'][':id']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.provider)[':provider'][':resourceName'][':id']['$patch']>,
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
    const mutationDefaults = getPatchProviderProviderResourceNameIdMutationOptions<
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

export function createPostAnalytics<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analytics.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.analytics.$post>,
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
    const mutationDefaults = getPostAnalyticsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
