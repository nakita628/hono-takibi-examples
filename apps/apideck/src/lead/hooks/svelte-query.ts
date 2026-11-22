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

export function createLeadLeads<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lead.leads.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.lead.leads.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLeadLeadsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostLeadLeads<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostLeadLeadsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createLeadLeadsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.lead.leads)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.lead.leads)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLeadLeadsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createDeleteLeadLeadsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteLeadLeadsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchLeadLeadsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchLeadLeadsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
