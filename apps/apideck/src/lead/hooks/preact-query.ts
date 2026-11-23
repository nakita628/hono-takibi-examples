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

export function getLeadKey() {
  return ['lead'] as const
}

export function getLeadLeadsQueryKey(args: InferRequestType<typeof client.lead.leads.$get>) {
  const { header: _, ...keyArgs } = args
  return ['lead', '/lead/leads', keyArgs] as const
}

export function getLeadLeadsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lead.leads.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.lead.leads.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lead.leads.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLeadLeadsQueryKey>
  >({
    queryKey: getLeadLeadsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.lead.leads.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useLeadLeads<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lead.leads.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.lead.leads.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lead.leads.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getLeadLeadsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getLeadLeadsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseLeadLeads<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lead.leads.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.lead.leads.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lead.leads.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getLeadLeadsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getLeadLeadsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostLeadLeadsMutationKey() {
  return ['lead', '/lead/leads', 'POST'] as const
}

export function getPostLeadLeadsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lead.leads.$post>>>>>,
    TError,
    InferRequestType<typeof client.lead.leads.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLeadLeadsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.lead.leads.$post>) {
      return parseResponse(client.lead.leads.$post(args, options))
    },
  })
}

export function usePostLeadLeads<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lead.leads.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.lead.leads.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLeadLeadsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getLeadLeadsIdQueryKey(
  args: InferRequestType<(typeof client.lead.leads)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['lead', '/lead/leads/:id', keyArgs] as const
}

export function getLeadLeadsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.lead.leads)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lead.leads)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.lead.leads)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLeadLeadsIdQueryKey>
  >({
    queryKey: getLeadLeadsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.lead.leads[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useLeadLeadsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.lead.leads)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lead.leads)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.lead.leads)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLeadLeadsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getLeadLeadsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseLeadLeadsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.lead.leads)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lead.leads)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.lead.leads)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLeadLeadsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getLeadLeadsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteLeadLeadsIdMutationKey() {
  return ['lead', '/lead/leads/:id', 'DELETE'] as const
}

export function getDeleteLeadLeadsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.lead.leads)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.lead.leads)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteLeadLeadsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.lead.leads)[':id']['$delete']>) {
      return parseResponse(client.lead.leads[':id'].$delete(args, options))
    },
  })
}

export function useDeleteLeadLeadsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.lead.leads)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.lead.leads)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteLeadLeadsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchLeadLeadsIdMutationKey() {
  return ['lead', '/lead/leads/:id', 'PATCH'] as const
}

export function getPatchLeadLeadsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.lead.leads)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.lead.leads)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchLeadLeadsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.lead.leads)[':id']['$patch']>) {
      return parseResponse(client.lead.leads[':id'].$patch(args, options))
    },
  })
}

export function usePatchLeadLeadsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.lead.leads)[':id']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.lead.leads)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchLeadLeadsIdMutationOptions<TError, TOnMutateResult>(
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
