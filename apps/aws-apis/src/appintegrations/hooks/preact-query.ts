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
  args: InferRequestType<typeof client.dataIntegrations.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['dataIntegrations', '/dataIntegrations', keyArgs] as const
}

export function getDataIntegrationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dataIntegrations.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.dataIntegrations.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dataIntegrations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDataIntegrationsQueryKey>
  >({
    queryKey: getDataIntegrationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dataIntegrations.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useDataIntegrations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dataIntegrations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.dataIntegrations.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dataIntegrations.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDataIntegrationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDataIntegrationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDataIntegrations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dataIntegrations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.dataIntegrations.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dataIntegrations.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDataIntegrationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDataIntegrationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
  args: InferRequestType<typeof client.eventIntegrations.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['eventIntegrations', '/eventIntegrations', keyArgs] as const
}

export function getEventIntegrationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eventIntegrations.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.eventIntegrations.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eventIntegrations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEventIntegrationsQueryKey>
  >({
    queryKey: getEventIntegrationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.eventIntegrations.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useEventIntegrations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eventIntegrations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.eventIntegrations.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.eventIntegrations.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEventIntegrationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getEventIntegrationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseEventIntegrations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eventIntegrations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.eventIntegrations.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.eventIntegrations.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEventIntegrationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getEventIntegrationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
  args: InferRequestType<(typeof client.dataIntegrations)[':Identifier']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['dataIntegrations', '/dataIntegrations/:Identifier', keyArgs] as const
}

export function getDataIntegrationsIdentifierQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dataIntegrations)[':Identifier']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dataIntegrations)[':Identifier']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDataIntegrationsIdentifierQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dataIntegrations[':Identifier'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.dataIntegrations)[':Identifier']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getDataIntegrationsIdentifierQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getDataIntegrationsIdentifierQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDataIntegrationsIdentifier<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dataIntegrations)[':Identifier']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dataIntegrations)[':Identifier']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getDataIntegrationsIdentifierQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<(typeof client.eventIntegrations)[':Name']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['eventIntegrations', '/eventIntegrations/:Name', keyArgs] as const
}

export function getEventIntegrationsNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.eventIntegrations)[':Name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.eventIntegrations)[':Name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getEventIntegrationsNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.eventIntegrations[':Name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useEventIntegrationsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.eventIntegrations)[':Name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.eventIntegrations)[':Name']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getEventIntegrationsNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getEventIntegrationsNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEventIntegrationsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.eventIntegrations)[':Name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.eventIntegrations)[':Name']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getEventIntegrationsNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<(typeof client.dataIntegrations)[':Identifier']['associations']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['dataIntegrations', '/dataIntegrations/:Identifier/associations', keyArgs] as const
}

export function getDataIntegrationsIdentifierAssociationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dataIntegrations)[':Identifier']['associations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dataIntegrations)[':Identifier']['associations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDataIntegrationsIdentifierAssociationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dataIntegrations[':Identifier'].associations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.dataIntegrations)[':Identifier']['associations']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getDataIntegrationsIdentifierAssociationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDataIntegrationsIdentifierAssociations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dataIntegrations)[':Identifier']['associations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dataIntegrations)[':Identifier']['associations']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getDataIntegrationsIdentifierAssociationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getEventIntegrationsNameAssociationsQueryKey(
  args: InferRequestType<(typeof client.eventIntegrations)[':Name']['associations']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['eventIntegrations', '/eventIntegrations/:Name/associations', keyArgs] as const
}

export function getEventIntegrationsNameAssociationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.eventIntegrations)[':Name']['associations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.eventIntegrations)[':Name']['associations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getEventIntegrationsNameAssociationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.eventIntegrations[':Name'].associations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.eventIntegrations)[':Name']['associations']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getEventIntegrationsNameAssociationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getEventIntegrationsNameAssociationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEventIntegrationsNameAssociations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.eventIntegrations)[':Name']['associations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.eventIntegrations)[':Name']['associations']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<typeof getEventIntegrationsNameAssociationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getEventIntegrationsNameAssociationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getTagsResourceArnQueryKey(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tags', '/tags/:resourceArn', keyArgs] as const
}

export function getTagsResourceArnQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagsResourceArnQueryKey>
  >({
    queryKey: getTagsResourceArnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tags[':resourceArn'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTagsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTagsResourceArnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTagsResourceArnQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTagsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTagsResourceArnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTagsResourceArnQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.tags)[':resourceArn']['$post']>,
        TOnMutateResult
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
