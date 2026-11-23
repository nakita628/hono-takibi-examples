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

export function getDataIntegrationsKey() {
  return ['dataIntegrations'] as const
}

export function getEventIntegrationsKey() {
  return ['eventIntegrations'] as const
}

export function getTagsKey() {
  return ['tags'] as const
}

export function getDataIntegrationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.dataIntegrations.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['dataIntegrations', '/dataIntegrations', keyArgs] as const
}

export function getDataIntegrationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.dataIntegrations.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDataIntegrationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dataIntegrations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDataIntegrations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dataIntegrations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.dataIntegrations.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.dataIntegrations.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.dataIntegrations.$get>>>
            >
          >,
          ReturnType<typeof getDataIntegrationsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dataIntegrations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDataIntegrationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDataIntegrationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dataIntegrations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDataIntegrationsMutationKey() {
  return ['dataIntegrations', '/dataIntegrations', 'POST'] as const
}

export function getPostDataIntegrationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dataIntegrations.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.dataIntegrations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDataIntegrationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.dataIntegrations.$post>) {
      return parseResponse(client.dataIntegrations.$post(args, options))
    },
  })
}

export function usePostDataIntegrations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.dataIntegrations.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.dataIntegrations.$post>,
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
  const mutationDefaults = getPostDataIntegrationsMutationOptions<TError, TOnMutateResult>(
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

export function getEventIntegrationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.eventIntegrations.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['eventIntegrations', '/eventIntegrations', keyArgs] as const
}

export function getEventIntegrationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.eventIntegrations.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEventIntegrationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.eventIntegrations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEventIntegrations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eventIntegrations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.eventIntegrations.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.eventIntegrations.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.eventIntegrations.$get>>>
            >
          >,
          ReturnType<typeof getEventIntegrationsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eventIntegrations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEventIntegrationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEventIntegrationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.eventIntegrations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostEventIntegrationsMutationKey() {
  return ['eventIntegrations', '/eventIntegrations', 'POST'] as const
}

export function getPostEventIntegrationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eventIntegrations.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.eventIntegrations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEventIntegrationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.eventIntegrations.$post>) {
      return parseResponse(client.eventIntegrations.$post(args, options))
    },
  })
}

export function usePostEventIntegrations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.eventIntegrations.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.eventIntegrations.$post>,
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
  const mutationDefaults = getPostEventIntegrationsMutationOptions<TError, TOnMutateResult>(
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

export function getDataIntegrationsIdentifierQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dataIntegrations)[':Identifier']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['dataIntegrations', '/dataIntegrations/:Identifier', keyArgs] as const
}

export function getDataIntegrationsIdentifierQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dataIntegrations)[':Identifier']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDataIntegrationsIdentifierQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dataIntegrations[':Identifier'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDataIntegrationsIdentifier<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dataIntegrations)[':Identifier']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dataIntegrations)[':Identifier']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dataIntegrations)[':Identifier']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dataIntegrations)[':Identifier']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDataIntegrationsIdentifierQueryKey>
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
          Awaited<ReturnType<(typeof client.dataIntegrations)[':Identifier']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDataIntegrationsIdentifierQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDataIntegrationsIdentifierQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dataIntegrations[':Identifier'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteDataIntegrationsIdentifierMutationKey() {
  return ['dataIntegrations', '/dataIntegrations/:Identifier', 'DELETE'] as const
}

export function getDeleteDataIntegrationsIdentifierMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dataIntegrations)[':Identifier']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.dataIntegrations)[':Identifier']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDataIntegrationsIdentifierMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.dataIntegrations)[':Identifier']['$delete']>,
    ) {
      return parseResponse(client.dataIntegrations[':Identifier'].$delete(args, options))
    },
  })
}

export function useDeleteDataIntegrationsIdentifier<
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
                Awaited<ReturnType<(typeof client.dataIntegrations)[':Identifier']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.dataIntegrations)[':Identifier']['$delete']>,
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
  const mutationDefaults = getDeleteDataIntegrationsIdentifierMutationOptions<
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

export function getPatchDataIntegrationsIdentifierMutationKey() {
  return ['dataIntegrations', '/dataIntegrations/:Identifier', 'PATCH'] as const
}

export function getPatchDataIntegrationsIdentifierMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dataIntegrations)[':Identifier']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.dataIntegrations)[':Identifier']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchDataIntegrationsIdentifierMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.dataIntegrations)[':Identifier']['$patch']>,
    ) {
      return parseResponse(client.dataIntegrations[':Identifier'].$patch(args, options))
    },
  })
}

export function usePatchDataIntegrationsIdentifier<
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
                Awaited<ReturnType<(typeof client.dataIntegrations)[':Identifier']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.dataIntegrations)[':Identifier']['$patch']>,
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
  const mutationDefaults = getPatchDataIntegrationsIdentifierMutationOptions<
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

export function getEventIntegrationsNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.eventIntegrations)[':Name']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['eventIntegrations', '/eventIntegrations/:Name', keyArgs] as const
}

export function getEventIntegrationsNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.eventIntegrations)[':Name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEventIntegrationsNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.eventIntegrations[':Name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEventIntegrationsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.eventIntegrations)[':Name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.eventIntegrations)[':Name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.eventIntegrations)[':Name']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.eventIntegrations)[':Name']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEventIntegrationsNameQueryKey>
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
          Awaited<ReturnType<(typeof client.eventIntegrations)[':Name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEventIntegrationsNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEventIntegrationsNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.eventIntegrations[':Name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteEventIntegrationsNameMutationKey() {
  return ['eventIntegrations', '/eventIntegrations/:Name', 'DELETE'] as const
}

export function getDeleteEventIntegrationsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.eventIntegrations)[':Name']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.eventIntegrations)[':Name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteEventIntegrationsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.eventIntegrations)[':Name']['$delete']>,
    ) {
      return parseResponse(client.eventIntegrations[':Name'].$delete(args, options))
    },
  })
}

export function useDeleteEventIntegrationsName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.eventIntegrations)[':Name']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.eventIntegrations)[':Name']['$delete']>,
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
  const mutationDefaults = getDeleteEventIntegrationsNameMutationOptions<TError, TOnMutateResult>(
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

export function getPatchEventIntegrationsNameMutationKey() {
  return ['eventIntegrations', '/eventIntegrations/:Name', 'PATCH'] as const
}

export function getPatchEventIntegrationsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.eventIntegrations)[':Name']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.eventIntegrations)[':Name']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchEventIntegrationsNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.eventIntegrations)[':Name']['$patch']>) {
      return parseResponse(client.eventIntegrations[':Name'].$patch(args, options))
    },
  })
}

export function usePatchEventIntegrationsName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.eventIntegrations)[':Name']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.eventIntegrations)[':Name']['$patch']>,
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
  const mutationDefaults = getPatchEventIntegrationsNameMutationOptions<TError, TOnMutateResult>(
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

export function getDataIntegrationsIdentifierAssociationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dataIntegrations)[':Identifier']['associations']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['dataIntegrations', '/dataIntegrations/:Identifier/associations', keyArgs] as const
}

export function getDataIntegrationsIdentifierAssociationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dataIntegrations)[':Identifier']['associations']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDataIntegrationsIdentifierAssociationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dataIntegrations[':Identifier'].associations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDataIntegrationsIdentifierAssociations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dataIntegrations)[':Identifier']['associations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dataIntegrations)[':Identifier']['associations']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.dataIntegrations)[':Identifier']['associations']['$get']
                  >
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
                  ReturnType<
                    (typeof client.dataIntegrations)[':Identifier']['associations']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDataIntegrationsIdentifierAssociationsQueryKey>
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
          Awaited<
            ReturnType<(typeof client.dataIntegrations)[':Identifier']['associations']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDataIntegrationsIdentifierAssociationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDataIntegrationsIdentifierAssociationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dataIntegrations[':Identifier'].associations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEventIntegrationsNameAssociationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.eventIntegrations)[':Name']['associations']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['eventIntegrations', '/eventIntegrations/:Name/associations', keyArgs] as const
}

export function getEventIntegrationsNameAssociationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.eventIntegrations)[':Name']['associations']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEventIntegrationsNameAssociationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.eventIntegrations[':Name'].associations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEventIntegrationsNameAssociations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.eventIntegrations)[':Name']['associations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.eventIntegrations)[':Name']['associations']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.eventIntegrations)[':Name']['associations']['$get']>
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
                  ReturnType<(typeof client.eventIntegrations)[':Name']['associations']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getEventIntegrationsNameAssociationsQueryKey>
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
          Awaited<ReturnType<(typeof client.eventIntegrations)[':Name']['associations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEventIntegrationsNameAssociationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEventIntegrationsNameAssociationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.eventIntegrations[':Name'].associations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTagsResourceArnQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':resourceArn']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['tags', '/tags/:resourceArn', keyArgs] as const
}

export function getTagsResourceArnQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':resourceArn']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTagsResourceArnQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tags[':resourceArn'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTagsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':resourceArn']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTagsResourceArnQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagsResourceArnQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTagsResourceArnQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tags[':resourceArn'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostTagsResourceArnMutationKey() {
  return ['tags', '/tags/:resourceArn', 'POST'] as const
}

export function getPostTagsResourceArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tags)[':resourceArn']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTagsResourceArnMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tags)[':resourceArn']['$post']>) {
      return parseResponse(client.tags[':resourceArn'].$post(args, options))
    },
  })
}

export function usePostTagsResourceArn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tags)[':resourceArn']['$post']>,
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
  const mutationDefaults = getPostTagsResourceArnMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteTagsResourceArnTagKeysMutationKey() {
  return ['tags', '/tags/:resourceArn#tagKeys', 'DELETE'] as const
}

export function getDeleteTagsResourceArnTagKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTagsResourceArnTagKeysMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
    ) {
      return parseResponse(client.tags[':resourceArn#tagKeys'].$delete(args, options))
    },
  })
}

export function useDeleteTagsResourceArnTagKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
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
  const mutationDefaults = getDeleteTagsResourceArnTagKeysMutationOptions<TError, TOnMutateResult>(
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
