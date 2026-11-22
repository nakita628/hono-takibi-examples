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

export function getV1Key() {
  return ['v1'] as const
}

export function getV1BranchesBranchIdOrRefQueryKey(
  args: InferRequestType<(typeof client.v1.branches)[':branch_id_or_ref']['$get']>,
) {
  return ['v1', '/v1/branches/:branch_id_or_ref', args] as const
}

export function getV1BranchesBranchIdOrRefQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.branches)[':branch_id_or_ref']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.branches)[':branch_id_or_ref']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.branches)[':branch_id_or_ref']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BranchesBranchIdOrRefQueryKey>
  >({
    queryKey: getV1BranchesBranchIdOrRefQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.branches[':branch_id_or_ref'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1BranchesBranchIdOrRef<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.branches)[':branch_id_or_ref']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.branches)[':branch_id_or_ref']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.branches)[':branch_id_or_ref']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BranchesBranchIdOrRefQueryKey>
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
      ...getV1BranchesBranchIdOrRefQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1BranchesBranchIdOrRef<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.branches)[':branch_id_or_ref']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.branches)[':branch_id_or_ref']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.branches)[':branch_id_or_ref']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BranchesBranchIdOrRefQueryKey>
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
      ...getV1BranchesBranchIdOrRefQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteV1BranchesBranchIdOrRefMutationKey() {
  return ['v1', '/v1/branches/:branch_id_or_ref', 'DELETE'] as const
}

export function getDeleteV1BranchesBranchIdOrRefMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.branches)[':branch_id_or_ref']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.branches)[':branch_id_or_ref']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1BranchesBranchIdOrRefMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.branches)[':branch_id_or_ref']['$delete']>,
    ) {
      return parseResponse(client.v1.branches[':branch_id_or_ref'].$delete(args, options))
    },
  })
}

export function useDeleteV1BranchesBranchIdOrRef<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.branches)[':branch_id_or_ref']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.branches)[':branch_id_or_ref']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1BranchesBranchIdOrRefMutationOptions<TError, TOnMutateResult>(
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

export function getPatchV1BranchesBranchIdOrRefMutationKey() {
  return ['v1', '/v1/branches/:branch_id_or_ref', 'PATCH'] as const
}

export function getPatchV1BranchesBranchIdOrRefMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.branches)[':branch_id_or_ref']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.branches)[':branch_id_or_ref']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1BranchesBranchIdOrRefMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.branches)[':branch_id_or_ref']['$patch']>,
    ) {
      return parseResponse(client.v1.branches[':branch_id_or_ref'].$patch(args, options))
    },
  })
}

export function usePatchV1BranchesBranchIdOrRef<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.branches)[':branch_id_or_ref']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.branches)[':branch_id_or_ref']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV1BranchesBranchIdOrRefMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1BranchesBranchIdOrRefPushMutationKey() {
  return ['v1', '/v1/branches/:branch_id_or_ref/push', 'POST'] as const
}

export function getPostV1BranchesBranchIdOrRefPushMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.branches)[':branch_id_or_ref']['push']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.branches)[':branch_id_or_ref']['push']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1BranchesBranchIdOrRefPushMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.branches)[':branch_id_or_ref']['push']['$post']>,
    ) {
      return parseResponse(client.v1.branches[':branch_id_or_ref'].push.$post(args, options))
    },
  })
}

export function usePostV1BranchesBranchIdOrRefPush<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.branches)[':branch_id_or_ref']['push']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.branches)[':branch_id_or_ref']['push']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1BranchesBranchIdOrRefPushMutationOptions<
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

export function getPostV1BranchesBranchIdOrRefMergeMutationKey() {
  return ['v1', '/v1/branches/:branch_id_or_ref/merge', 'POST'] as const
}

export function getPostV1BranchesBranchIdOrRefMergeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.branches)[':branch_id_or_ref']['merge']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.branches)[':branch_id_or_ref']['merge']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1BranchesBranchIdOrRefMergeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.branches)[':branch_id_or_ref']['merge']['$post']>,
    ) {
      return parseResponse(client.v1.branches[':branch_id_or_ref'].merge.$post(args, options))
    },
  })
}

export function usePostV1BranchesBranchIdOrRefMerge<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.branches)[':branch_id_or_ref']['merge']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.branches)[':branch_id_or_ref']['merge']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1BranchesBranchIdOrRefMergeMutationOptions<
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

export function getPostV1BranchesBranchIdOrRefResetMutationKey() {
  return ['v1', '/v1/branches/:branch_id_or_ref/reset', 'POST'] as const
}

export function getPostV1BranchesBranchIdOrRefResetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.branches)[':branch_id_or_ref']['reset']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.branches)[':branch_id_or_ref']['reset']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1BranchesBranchIdOrRefResetMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.branches)[':branch_id_or_ref']['reset']['$post']>,
    ) {
      return parseResponse(client.v1.branches[':branch_id_or_ref'].reset.$post(args, options))
    },
  })
}

export function usePostV1BranchesBranchIdOrRefReset<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.branches)[':branch_id_or_ref']['reset']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.branches)[':branch_id_or_ref']['reset']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1BranchesBranchIdOrRefResetMutationOptions<
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

export function getPostV1BranchesBranchIdOrRefRestoreMutationKey() {
  return ['v1', '/v1/branches/:branch_id_or_ref/restore', 'POST'] as const
}

export function getPostV1BranchesBranchIdOrRefRestoreMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.branches)[':branch_id_or_ref']['restore']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.branches)[':branch_id_or_ref']['restore']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1BranchesBranchIdOrRefRestoreMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.branches)[':branch_id_or_ref']['restore']['$post']>,
    ) {
      return parseResponse(client.v1.branches[':branch_id_or_ref'].restore.$post(args, options))
    },
  })
}

export function usePostV1BranchesBranchIdOrRefRestore<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.branches)[':branch_id_or_ref']['restore']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.branches)[':branch_id_or_ref']['restore']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1BranchesBranchIdOrRefRestoreMutationOptions<
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

export function getV1BranchesBranchIdOrRefDiffQueryKey(
  args: InferRequestType<(typeof client.v1.branches)[':branch_id_or_ref']['diff']['$get']>,
) {
  return ['v1', '/v1/branches/:branch_id_or_ref/diff', args] as const
}

export function getV1BranchesBranchIdOrRefDiffQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.branches)[':branch_id_or_ref']['diff']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.branches)[':branch_id_or_ref']['diff']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.branches)[':branch_id_or_ref']['diff']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BranchesBranchIdOrRefDiffQueryKey>
  >({
    queryKey: getV1BranchesBranchIdOrRefDiffQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.branches[':branch_id_or_ref'].diff.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1BranchesBranchIdOrRefDiff<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.branches)[':branch_id_or_ref']['diff']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.branches)[':branch_id_or_ref']['diff']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.branches)[':branch_id_or_ref']['diff']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BranchesBranchIdOrRefDiffQueryKey>
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
      ...getV1BranchesBranchIdOrRefDiffQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1BranchesBranchIdOrRefDiff<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.branches)[':branch_id_or_ref']['diff']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.branches)[':branch_id_or_ref']['diff']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.branches)[':branch_id_or_ref']['diff']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BranchesBranchIdOrRefDiffQueryKey>
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
      ...getV1BranchesBranchIdOrRefDiffQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1ProjectsQueryKey() {
  return ['v1', '/v1/projects'] as const
}

export function getV1ProjectsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.projects.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.projects.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsQueryKey>
  >({
    queryKey: getV1ProjectsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1Projects<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.projects.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.projects.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1ProjectsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1Projects<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.projects.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.projects.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1ProjectsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV1ProjectsMutationKey() {
  return ['v1', '/v1/projects', 'POST'] as const
}

export function getPostV1ProjectsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.projects.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.projects.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.projects.$post>) {
      return parseResponse(client.v1.projects.$post(args, options))
    },
  })
}

export function usePostV1Projects<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.projects.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.projects.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ProjectsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1ProjectsAvailableRegionsQueryKey(
  args: InferRequestType<(typeof client.v1.projects)['available-regions']['$get']>,
) {
  return ['v1', '/v1/projects/available-regions', args] as const
}

export function getV1ProjectsAvailableRegionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)['available-regions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)['available-regions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)['available-regions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsAvailableRegionsQueryKey>
  >({
    queryKey: getV1ProjectsAvailableRegionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects['available-regions'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ProjectsAvailableRegions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)['available-regions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)['available-regions']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.projects)['available-regions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsAvailableRegionsQueryKey>
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
      ...getV1ProjectsAvailableRegionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ProjectsAvailableRegions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)['available-regions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)['available-regions']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.projects)['available-regions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsAvailableRegionsQueryKey>
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
      ...getV1ProjectsAvailableRegionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1OrganizationsQueryKey() {
  return ['v1', '/v1/organizations'] as const
}

export function getV1OrganizationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.organizations.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.organizations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1OrganizationsQueryKey>
  >({
    queryKey: getV1OrganizationsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.organizations.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1Organizations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.organizations.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.organizations.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1OrganizationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1OrganizationsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1Organizations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.organizations.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.organizations.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1OrganizationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1OrganizationsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV1OrganizationsMutationKey() {
  return ['v1', '/v1/organizations', 'POST'] as const
}

export function getPostV1OrganizationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.organizations.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.organizations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1OrganizationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.organizations.$post>) {
      return parseResponse(client.v1.organizations.$post(args, options))
    },
  })
}

export function usePostV1Organizations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.organizations.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.organizations.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1OrganizationsMutationOptions<TError, TOnMutateResult>(
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

export function getV1OauthAuthorizeQueryKey(
  args: InferRequestType<typeof client.v1.oauth.authorize.$get>,
) {
  return ['v1', '/v1/oauth/authorize', args] as const
}

export function getV1OauthAuthorizeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.oauth.authorize.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.oauth.authorize.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.oauth.authorize.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1OauthAuthorizeQueryKey>
  >({
    queryKey: getV1OauthAuthorizeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.oauth.authorize.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1OauthAuthorize<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.oauth.authorize.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.oauth.authorize.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.oauth.authorize.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1OauthAuthorizeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1OauthAuthorizeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1OauthAuthorize<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.oauth.authorize.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.oauth.authorize.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.oauth.authorize.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1OauthAuthorizeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1OauthAuthorizeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV1OauthTokenMutationKey() {
  return ['v1', '/v1/oauth/token', 'POST'] as const
}

export function getPostV1OauthTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.oauth.token.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.oauth.token.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1OauthTokenMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.oauth.token.$post>) {
      return parseResponse(client.v1.oauth.token.$post(args, options))
    },
  })
}

export function usePostV1OauthToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.oauth.token.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.oauth.token.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1OauthTokenMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1OauthRevokeMutationKey() {
  return ['v1', '/v1/oauth/revoke', 'POST'] as const
}

export function getPostV1OauthRevokeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.oauth.revoke.$post>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v1.oauth.revoke.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1OauthRevokeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.oauth.revoke.$post>) {
      return parseResponse(client.v1.oauth.revoke.$post(args, options))
    },
  })
}

export function usePostV1OauthRevoke<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.oauth.revoke.$post>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.v1.oauth.revoke.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1OauthRevokeMutationOptions<TError, TOnMutateResult>(
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

export function getV1OauthAuthorizeProjectClaimQueryKey(
  args: InferRequestType<(typeof client.v1.oauth.authorize)['project-claim']['$get']>,
) {
  return ['v1', '/v1/oauth/authorize/project-claim', args] as const
}

export function getV1OauthAuthorizeProjectClaimQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.oauth.authorize)['project-claim']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.oauth.authorize)['project-claim']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.oauth.authorize)['project-claim']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OauthAuthorizeProjectClaimQueryKey>
  >({
    queryKey: getV1OauthAuthorizeProjectClaimQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.oauth.authorize['project-claim'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1OauthAuthorizeProjectClaim<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.oauth.authorize)['project-claim']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.oauth.authorize)['project-claim']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.oauth.authorize)['project-claim']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1OauthAuthorizeProjectClaimQueryKey>
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
      ...getV1OauthAuthorizeProjectClaimQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1OauthAuthorizeProjectClaim<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.oauth.authorize)['project-claim']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.oauth.authorize)['project-claim']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.oauth.authorize)['project-claim']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1OauthAuthorizeProjectClaimQueryKey>
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
      ...getV1OauthAuthorizeProjectClaimQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1SnippetsQueryKey(args: InferRequestType<typeof client.v1.snippets.$get>) {
  return ['v1', '/v1/snippets', args] as const
}

export function getV1SnippetsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.snippets.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.snippets.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.snippets.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1SnippetsQueryKey>
  >({
    queryKey: getV1SnippetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.snippets.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1Snippets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.snippets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.snippets.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.snippets.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1SnippetsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1SnippetsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1Snippets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.snippets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.snippets.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.snippets.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1SnippetsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1SnippetsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1SnippetsIdQueryKey(
  args: InferRequestType<(typeof client.v1.snippets)[':id']['$get']>,
) {
  return ['v1', '/v1/snippets/:id', args] as const
}

export function getV1SnippetsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.snippets)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.snippets)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.snippets)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1SnippetsIdQueryKey>
  >({
    queryKey: getV1SnippetsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.snippets[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1SnippetsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.snippets)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.snippets)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.snippets)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1SnippetsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1SnippetsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1SnippetsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.snippets)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.snippets)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.snippets)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1SnippetsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1SnippetsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1ProfileQueryKey() {
  return ['v1', '/v1/profile'] as const
}

export function getV1ProfileQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.profile.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.profile.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1ProfileQueryKey>
  >({
    queryKey: getV1ProfileQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.profile.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1Profile<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.profile.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.profile.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProfileQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1ProfileQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1Profile<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.profile.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.profile.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProfileQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1ProfileQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1ProjectsRefActionsQueryKey(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['actions']['$get']>,
) {
  return ['v1', '/v1/projects/:ref/actions', args] as const
}

export function getV1ProjectsRefActionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':ref']['actions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['actions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['actions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsRefActionsQueryKey>
  >({
    queryKey: getV1ProjectsRefActionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':ref'].actions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ProjectsRefActions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':ref']['actions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['actions']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.projects)[':ref']['actions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefActionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1ProjectsRefActionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1ProjectsRefActions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':ref']['actions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['actions']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.projects)[':ref']['actions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefActionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1ProjectsRefActionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getHeadV1ProjectsRefActionsMutationKey() {
  return ['v1', '/v1/projects/:ref/actions', 'HEAD'] as const
}

export function getHeadV1ProjectsRefActionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['actions']['$head']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.projects)[':ref']['actions']['$head']>,
    TOnMutateResult
  >({
    mutationKey: getHeadV1ProjectsRefActionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.projects)[':ref']['actions']['$head']>,
    ) {
      return parseResponse(client.v1.projects[':ref'].actions.$head(args, options))
    },
  })
}

export function useHeadV1ProjectsRefActions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.projects)[':ref']['actions']['$head']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.projects)[':ref']['actions']['$head']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getHeadV1ProjectsRefActionsMutationOptions<TError, TOnMutateResult>(
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

export function getV1ProjectsRefActionsRunIdQueryKey(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['actions'][':run_id']['$get']>,
) {
  return ['v1', '/v1/projects/:ref/actions/:run_id', args] as const
}

export function getV1ProjectsRefActionsRunIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':ref']['actions'][':run_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['actions'][':run_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['actions'][':run_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsRefActionsRunIdQueryKey>
  >({
    queryKey: getV1ProjectsRefActionsRunIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':ref'].actions[':run_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ProjectsRefActionsRunId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':ref']['actions'][':run_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['actions'][':run_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.projects)[':ref']['actions'][':run_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefActionsRunIdQueryKey>
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
      ...getV1ProjectsRefActionsRunIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ProjectsRefActionsRunId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':ref']['actions'][':run_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['actions'][':run_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.projects)[':ref']['actions'][':run_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefActionsRunIdQueryKey>
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
      ...getV1ProjectsRefActionsRunIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPatchV1ProjectsRefActionsRunIdStatusMutationKey() {
  return ['v1', '/v1/projects/:ref/actions/:run_id/status', 'PATCH'] as const
}

export function getPatchV1ProjectsRefActionsRunIdStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':ref']['actions'][':run_id']['status']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.projects)[':ref']['actions'][':run_id']['status']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1ProjectsRefActionsRunIdStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':ref']['actions'][':run_id']['status']['$patch']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':ref'].actions[':run_id'].status.$patch(args, options),
      )
    },
  })
}

export function usePatchV1ProjectsRefActionsRunIdStatus<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.projects)[':ref']['actions'][':run_id']['status']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.projects)[':ref']['actions'][':run_id']['status']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV1ProjectsRefActionsRunIdStatusMutationOptions<
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

export function getV1ProjectsRefActionsRunIdLogsQueryKey(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['actions'][':run_id']['logs']['$get']>,
) {
  return ['v1', '/v1/projects/:ref/actions/:run_id/logs', args] as const
}

export function getV1ProjectsRefActionsRunIdLogsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.projects)[':ref']['actions'][':run_id']['logs']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['actions'][':run_id']['logs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.projects)[':ref']['actions'][':run_id']['logs']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsRefActionsRunIdLogsQueryKey>
  >({
    queryKey: getV1ProjectsRefActionsRunIdLogsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':ref'].actions[':run_id'].logs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ProjectsRefActionsRunIdLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.projects)[':ref']['actions'][':run_id']['logs']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['actions'][':run_id']['logs']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.projects)[':ref']['actions'][':run_id']['logs']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefActionsRunIdLogsQueryKey>
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
      ...getV1ProjectsRefActionsRunIdLogsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ProjectsRefActionsRunIdLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.projects)[':ref']['actions'][':run_id']['logs']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['actions'][':run_id']['logs']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.projects)[':ref']['actions'][':run_id']['logs']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefActionsRunIdLogsQueryKey>
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
      ...getV1ProjectsRefActionsRunIdLogsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1ProjectsRefApiKeysQueryKey(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['api-keys']['$get']>,
) {
  return ['v1', '/v1/projects/:ref/api-keys', args] as const
}

export function getV1ProjectsRefApiKeysQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':ref']['api-keys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['api-keys']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['api-keys']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsRefApiKeysQueryKey>
  >({
    queryKey: getV1ProjectsRefApiKeysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':ref']['api-keys'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ProjectsRefApiKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':ref']['api-keys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['api-keys']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.projects)[':ref']['api-keys']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefApiKeysQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1ProjectsRefApiKeysQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1ProjectsRefApiKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':ref']['api-keys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['api-keys']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.projects)[':ref']['api-keys']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefApiKeysQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1ProjectsRefApiKeysQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV1ProjectsRefApiKeysMutationKey() {
  return ['v1', '/v1/projects/:ref/api-keys', 'POST'] as const
}

export function getPostV1ProjectsRefApiKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['api-keys']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.projects)[':ref']['api-keys']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsRefApiKeysMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.projects)[':ref']['api-keys']['$post']>,
    ) {
      return parseResponse(client.v1.projects[':ref']['api-keys'].$post(args, options))
    },
  })
}

export function usePostV1ProjectsRefApiKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.projects)[':ref']['api-keys']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.projects)[':ref']['api-keys']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ProjectsRefApiKeysMutationOptions<TError, TOnMutateResult>(
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

export function getV1ProjectsRefApiKeysLegacyQueryKey(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['api-keys']['legacy']['$get']>,
) {
  return ['v1', '/v1/projects/:ref/api-keys/legacy', args] as const
}

export function getV1ProjectsRefApiKeysLegacyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':ref']['api-keys']['legacy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['api-keys']['legacy']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['api-keys']['legacy']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsRefApiKeysLegacyQueryKey>
  >({
    queryKey: getV1ProjectsRefApiKeysLegacyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':ref']['api-keys'].legacy.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ProjectsRefApiKeysLegacy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':ref']['api-keys']['legacy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['api-keys']['legacy']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.projects)[':ref']['api-keys']['legacy']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefApiKeysLegacyQueryKey>
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
      ...getV1ProjectsRefApiKeysLegacyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ProjectsRefApiKeysLegacy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':ref']['api-keys']['legacy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['api-keys']['legacy']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.projects)[':ref']['api-keys']['legacy']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefApiKeysLegacyQueryKey>
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
      ...getV1ProjectsRefApiKeysLegacyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutV1ProjectsRefApiKeysLegacyMutationKey() {
  return ['v1', '/v1/projects/:ref/api-keys/legacy', 'PUT'] as const
}

export function getPutV1ProjectsRefApiKeysLegacyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['api-keys']['legacy']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.projects)[':ref']['api-keys']['legacy']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1ProjectsRefApiKeysLegacyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.projects)[':ref']['api-keys']['legacy']['$put']>,
    ) {
      return parseResponse(client.v1.projects[':ref']['api-keys'].legacy.$put(args, options))
    },
  })
}

export function usePutV1ProjectsRefApiKeysLegacy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.projects)[':ref']['api-keys']['legacy']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.projects)[':ref']['api-keys']['legacy']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1ProjectsRefApiKeysLegacyMutationOptions<TError, TOnMutateResult>(
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

export function getV1ProjectsRefApiKeysIdQueryKey(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['api-keys'][':id']['$get']>,
) {
  return ['v1', '/v1/projects/:ref/api-keys/:id', args] as const
}

export function getV1ProjectsRefApiKeysIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':ref']['api-keys'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['api-keys'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['api-keys'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsRefApiKeysIdQueryKey>
  >({
    queryKey: getV1ProjectsRefApiKeysIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':ref']['api-keys'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ProjectsRefApiKeysId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':ref']['api-keys'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['api-keys'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.projects)[':ref']['api-keys'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefApiKeysIdQueryKey>
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
      ...getV1ProjectsRefApiKeysIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ProjectsRefApiKeysId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':ref']['api-keys'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['api-keys'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.projects)[':ref']['api-keys'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefApiKeysIdQueryKey>
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
      ...getV1ProjectsRefApiKeysIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteV1ProjectsRefApiKeysIdMutationKey() {
  return ['v1', '/v1/projects/:ref/api-keys/:id', 'DELETE'] as const
}

export function getDeleteV1ProjectsRefApiKeysIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['api-keys'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.projects)[':ref']['api-keys'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ProjectsRefApiKeysIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.projects)[':ref']['api-keys'][':id']['$delete']>,
    ) {
      return parseResponse(client.v1.projects[':ref']['api-keys'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteV1ProjectsRefApiKeysId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.projects)[':ref']['api-keys'][':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.projects)[':ref']['api-keys'][':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1ProjectsRefApiKeysIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchV1ProjectsRefApiKeysIdMutationKey() {
  return ['v1', '/v1/projects/:ref/api-keys/:id', 'PATCH'] as const
}

export function getPatchV1ProjectsRefApiKeysIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['api-keys'][':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.projects)[':ref']['api-keys'][':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1ProjectsRefApiKeysIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.projects)[':ref']['api-keys'][':id']['$patch']>,
    ) {
      return parseResponse(client.v1.projects[':ref']['api-keys'][':id'].$patch(args, options))
    },
  })
}

export function usePatchV1ProjectsRefApiKeysId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.projects)[':ref']['api-keys'][':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.projects)[':ref']['api-keys'][':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV1ProjectsRefApiKeysIdMutationOptions<TError, TOnMutateResult>(
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

export function getV1ProjectsRefBranchesQueryKey(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['branches']['$get']>,
) {
  return ['v1', '/v1/projects/:ref/branches', args] as const
}

export function getV1ProjectsRefBranchesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':ref']['branches']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['branches']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['branches']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsRefBranchesQueryKey>
  >({
    queryKey: getV1ProjectsRefBranchesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':ref'].branches.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ProjectsRefBranches<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':ref']['branches']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['branches']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.projects)[':ref']['branches']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefBranchesQueryKey>
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
      ...getV1ProjectsRefBranchesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ProjectsRefBranches<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':ref']['branches']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['branches']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.projects)[':ref']['branches']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefBranchesQueryKey>
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
      ...getV1ProjectsRefBranchesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV1ProjectsRefBranchesMutationKey() {
  return ['v1', '/v1/projects/:ref/branches', 'POST'] as const
}

export function getPostV1ProjectsRefBranchesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['branches']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.projects)[':ref']['branches']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsRefBranchesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.projects)[':ref']['branches']['$post']>,
    ) {
      return parseResponse(client.v1.projects[':ref'].branches.$post(args, options))
    },
  })
}

export function usePostV1ProjectsRefBranches<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.projects)[':ref']['branches']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.projects)[':ref']['branches']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ProjectsRefBranchesMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV1ProjectsRefBranchesMutationKey() {
  return ['v1', '/v1/projects/:ref/branches', 'DELETE'] as const
}

export function getDeleteV1ProjectsRefBranchesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['branches']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.projects)[':ref']['branches']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ProjectsRefBranchesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.projects)[':ref']['branches']['$delete']>,
    ) {
      return parseResponse(client.v1.projects[':ref'].branches.$delete(args, options))
    },
  })
}

export function useDeleteV1ProjectsRefBranches<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.projects)[':ref']['branches']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.projects)[':ref']['branches']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1ProjectsRefBranchesMutationOptions<TError, TOnMutateResult>(
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

export function getV1ProjectsRefBranchesNameQueryKey(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['branches'][':name']['$get']>,
) {
  return ['v1', '/v1/projects/:ref/branches/:name', args] as const
}

export function getV1ProjectsRefBranchesNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':ref']['branches'][':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['branches'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['branches'][':name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsRefBranchesNameQueryKey>
  >({
    queryKey: getV1ProjectsRefBranchesNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':ref'].branches[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ProjectsRefBranchesName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':ref']['branches'][':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['branches'][':name']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.projects)[':ref']['branches'][':name']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefBranchesNameQueryKey>
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
      ...getV1ProjectsRefBranchesNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ProjectsRefBranchesName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':ref']['branches'][':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['branches'][':name']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.projects)[':ref']['branches'][':name']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefBranchesNameQueryKey>
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
      ...getV1ProjectsRefBranchesNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1ProjectsRefCustomHostnameQueryKey(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['custom-hostname']['$get']>,
) {
  return ['v1', '/v1/projects/:ref/custom-hostname', args] as const
}

export function getV1ProjectsRefCustomHostnameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':ref']['custom-hostname']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['custom-hostname']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['custom-hostname']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsRefCustomHostnameQueryKey>
  >({
    queryKey: getV1ProjectsRefCustomHostnameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':ref']['custom-hostname'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ProjectsRefCustomHostname<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':ref']['custom-hostname']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['custom-hostname']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.projects)[':ref']['custom-hostname']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefCustomHostnameQueryKey>
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
      ...getV1ProjectsRefCustomHostnameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ProjectsRefCustomHostname<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':ref']['custom-hostname']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['custom-hostname']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.projects)[':ref']['custom-hostname']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefCustomHostnameQueryKey>
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
      ...getV1ProjectsRefCustomHostnameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteV1ProjectsRefCustomHostnameMutationKey() {
  return ['v1', '/v1/projects/:ref/custom-hostname', 'DELETE'] as const
}

export function getDeleteV1ProjectsRefCustomHostnameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['custom-hostname']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.projects)[':ref']['custom-hostname']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ProjectsRefCustomHostnameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.projects)[':ref']['custom-hostname']['$delete']>,
    ) {
      return parseResponse(client.v1.projects[':ref']['custom-hostname'].$delete(args, options))
    },
  })
}

export function useDeleteV1ProjectsRefCustomHostname<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.projects)[':ref']['custom-hostname']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.projects)[':ref']['custom-hostname']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1ProjectsRefCustomHostnameMutationOptions<
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

export function getPostV1ProjectsRefCustomHostnameInitializeMutationKey() {
  return ['v1', '/v1/projects/:ref/custom-hostname/initialize', 'POST'] as const
}

export function getPostV1ProjectsRefCustomHostnameInitializeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':ref']['custom-hostname']['initialize']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.projects)[':ref']['custom-hostname']['initialize']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsRefCustomHostnameInitializeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':ref']['custom-hostname']['initialize']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':ref']['custom-hostname'].initialize.$post(args, options),
      )
    },
  })
}

export function usePostV1ProjectsRefCustomHostnameInitialize<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.projects)[':ref']['custom-hostname']['initialize']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.projects)[':ref']['custom-hostname']['initialize']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ProjectsRefCustomHostnameInitializeMutationOptions<
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

export function getPostV1ProjectsRefCustomHostnameReverifyMutationKey() {
  return ['v1', '/v1/projects/:ref/custom-hostname/reverify', 'POST'] as const
}

export function getPostV1ProjectsRefCustomHostnameReverifyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.projects)[':ref']['custom-hostname']['reverify']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.projects)[':ref']['custom-hostname']['reverify']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsRefCustomHostnameReverifyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':ref']['custom-hostname']['reverify']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':ref']['custom-hostname'].reverify.$post(args, options),
      )
    },
  })
}

export function usePostV1ProjectsRefCustomHostnameReverify<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.projects)[':ref']['custom-hostname']['reverify']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.projects)[':ref']['custom-hostname']['reverify']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ProjectsRefCustomHostnameReverifyMutationOptions<
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

export function getPostV1ProjectsRefCustomHostnameActivateMutationKey() {
  return ['v1', '/v1/projects/:ref/custom-hostname/activate', 'POST'] as const
}

export function getPostV1ProjectsRefCustomHostnameActivateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.projects)[':ref']['custom-hostname']['activate']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.projects)[':ref']['custom-hostname']['activate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsRefCustomHostnameActivateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':ref']['custom-hostname']['activate']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':ref']['custom-hostname'].activate.$post(args, options),
      )
    },
  })
}

export function usePostV1ProjectsRefCustomHostnameActivate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.projects)[':ref']['custom-hostname']['activate']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.projects)[':ref']['custom-hostname']['activate']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ProjectsRefCustomHostnameActivateMutationOptions<
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

export function getV1ProjectsRefJitAccessQueryKey(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['jit-access']['$get']>,
) {
  return ['v1', '/v1/projects/:ref/jit-access', args] as const
}

export function getV1ProjectsRefJitAccessQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':ref']['jit-access']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['jit-access']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['jit-access']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsRefJitAccessQueryKey>
  >({
    queryKey: getV1ProjectsRefJitAccessQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':ref']['jit-access'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ProjectsRefJitAccess<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':ref']['jit-access']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['jit-access']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.projects)[':ref']['jit-access']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefJitAccessQueryKey>
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
      ...getV1ProjectsRefJitAccessQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ProjectsRefJitAccess<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':ref']['jit-access']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['jit-access']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.projects)[':ref']['jit-access']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefJitAccessQueryKey>
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
      ...getV1ProjectsRefJitAccessQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutV1ProjectsRefJitAccessMutationKey() {
  return ['v1', '/v1/projects/:ref/jit-access', 'PUT'] as const
}

export function getPutV1ProjectsRefJitAccessMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['jit-access']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.projects)[':ref']['jit-access']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1ProjectsRefJitAccessMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.projects)[':ref']['jit-access']['$put']>,
    ) {
      return parseResponse(client.v1.projects[':ref']['jit-access'].$put(args, options))
    },
  })
}

export function usePutV1ProjectsRefJitAccess<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.projects)[':ref']['jit-access']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.projects)[':ref']['jit-access']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1ProjectsRefJitAccessMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1ProjectsRefNetworkBansRetrieveMutationKey() {
  return ['v1', '/v1/projects/:ref/network-bans/retrieve', 'POST'] as const
}

export function getPostV1ProjectsRefNetworkBansRetrieveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.projects)[':ref']['network-bans']['retrieve']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.projects)[':ref']['network-bans']['retrieve']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsRefNetworkBansRetrieveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':ref']['network-bans']['retrieve']['$post']
      >,
    ) {
      return parseResponse(client.v1.projects[':ref']['network-bans'].retrieve.$post(args, options))
    },
  })
}

export function usePostV1ProjectsRefNetworkBansRetrieve<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.projects)[':ref']['network-bans']['retrieve']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.projects)[':ref']['network-bans']['retrieve']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ProjectsRefNetworkBansRetrieveMutationOptions<
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

export function getPostV1ProjectsRefNetworkBansRetrieveEnrichedMutationKey() {
  return ['v1', '/v1/projects/:ref/network-bans/retrieve/enriched', 'POST'] as const
}

export function getPostV1ProjectsRefNetworkBansRetrieveEnrichedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':ref']['network-bans']['retrieve']['enriched']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.projects)[':ref']['network-bans']['retrieve']['enriched']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsRefNetworkBansRetrieveEnrichedMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':ref']['network-bans']['retrieve']['enriched']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':ref']['network-bans'].retrieve.enriched.$post(args, options),
      )
    },
  })
}

export function usePostV1ProjectsRefNetworkBansRetrieveEnriched<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.projects)[':ref']['network-bans']['retrieve']['enriched']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.projects)[':ref']['network-bans']['retrieve']['enriched']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ProjectsRefNetworkBansRetrieveEnrichedMutationOptions<
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

export function getDeleteV1ProjectsRefNetworkBansMutationKey() {
  return ['v1', '/v1/projects/:ref/network-bans', 'DELETE'] as const
}

export function getDeleteV1ProjectsRefNetworkBansMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['network-bans']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.projects)[':ref']['network-bans']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ProjectsRefNetworkBansMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.projects)[':ref']['network-bans']['$delete']>,
    ) {
      return parseResponse(client.v1.projects[':ref']['network-bans'].$delete(args, options))
    },
  })
}

export function useDeleteV1ProjectsRefNetworkBans<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.projects)[':ref']['network-bans']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.projects)[':ref']['network-bans']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1ProjectsRefNetworkBansMutationOptions<
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

export function getV1ProjectsRefNetworkRestrictionsQueryKey(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['network-restrictions']['$get']>,
) {
  return ['v1', '/v1/projects/:ref/network-restrictions', args] as const
}

export function getV1ProjectsRefNetworkRestrictionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':ref']['network-restrictions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['network-restrictions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['network-restrictions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsRefNetworkRestrictionsQueryKey>
  >({
    queryKey: getV1ProjectsRefNetworkRestrictionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':ref']['network-restrictions'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ProjectsRefNetworkRestrictions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':ref']['network-restrictions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['network-restrictions']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.projects)[':ref']['network-restrictions']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefNetworkRestrictionsQueryKey>
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
      ...getV1ProjectsRefNetworkRestrictionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ProjectsRefNetworkRestrictions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':ref']['network-restrictions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['network-restrictions']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.projects)[':ref']['network-restrictions']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefNetworkRestrictionsQueryKey>
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
      ...getV1ProjectsRefNetworkRestrictionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPatchV1ProjectsRefNetworkRestrictionsMutationKey() {
  return ['v1', '/v1/projects/:ref/network-restrictions', 'PATCH'] as const
}

export function getPatchV1ProjectsRefNetworkRestrictionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['network-restrictions']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.projects)[':ref']['network-restrictions']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1ProjectsRefNetworkRestrictionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.projects)[':ref']['network-restrictions']['$patch']>,
    ) {
      return parseResponse(client.v1.projects[':ref']['network-restrictions'].$patch(args, options))
    },
  })
}

export function usePatchV1ProjectsRefNetworkRestrictions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.projects)[':ref']['network-restrictions']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.projects)[':ref']['network-restrictions']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV1ProjectsRefNetworkRestrictionsMutationOptions<
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

export function getPostV1ProjectsRefNetworkRestrictionsApplyMutationKey() {
  return ['v1', '/v1/projects/:ref/network-restrictions/apply', 'POST'] as const
}

export function getPostV1ProjectsRefNetworkRestrictionsApplyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':ref']['network-restrictions']['apply']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.projects)[':ref']['network-restrictions']['apply']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsRefNetworkRestrictionsApplyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':ref']['network-restrictions']['apply']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':ref']['network-restrictions'].apply.$post(args, options),
      )
    },
  })
}

export function usePostV1ProjectsRefNetworkRestrictionsApply<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.projects)[':ref']['network-restrictions']['apply']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.projects)[':ref']['network-restrictions']['apply']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ProjectsRefNetworkRestrictionsApplyMutationOptions<
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

export function getPostV1ProjectsRefNetworkRestrictionsReviewMutationKey() {
  return ['v1', '/v1/projects/:ref/network-restrictions/review', 'POST'] as const
}

export function getPostV1ProjectsRefNetworkRestrictionsReviewMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':ref']['network-restrictions']['review']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.projects)[':ref']['network-restrictions']['review']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsRefNetworkRestrictionsReviewMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':ref']['network-restrictions']['review']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':ref']['network-restrictions'].review.$post(args, options),
      )
    },
  })
}

export function usePostV1ProjectsRefNetworkRestrictionsReview<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.projects)[':ref']['network-restrictions']['review']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.projects)[':ref']['network-restrictions']['review']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ProjectsRefNetworkRestrictionsReviewMutationOptions<
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

export function getV1ProjectsRefPgsodiumQueryKey(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['pgsodium']['$get']>,
) {
  return ['v1', '/v1/projects/:ref/pgsodium', args] as const
}

export function getV1ProjectsRefPgsodiumQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':ref']['pgsodium']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['pgsodium']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['pgsodium']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsRefPgsodiumQueryKey>
  >({
    queryKey: getV1ProjectsRefPgsodiumQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':ref'].pgsodium.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ProjectsRefPgsodium<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':ref']['pgsodium']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['pgsodium']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.projects)[':ref']['pgsodium']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefPgsodiumQueryKey>
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
      ...getV1ProjectsRefPgsodiumQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ProjectsRefPgsodium<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':ref']['pgsodium']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['pgsodium']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.projects)[':ref']['pgsodium']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefPgsodiumQueryKey>
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
      ...getV1ProjectsRefPgsodiumQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutV1ProjectsRefPgsodiumMutationKey() {
  return ['v1', '/v1/projects/:ref/pgsodium', 'PUT'] as const
}

export function getPutV1ProjectsRefPgsodiumMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['pgsodium']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.projects)[':ref']['pgsodium']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1ProjectsRefPgsodiumMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.projects)[':ref']['pgsodium']['$put']>,
    ) {
      return parseResponse(client.v1.projects[':ref'].pgsodium.$put(args, options))
    },
  })
}

export function usePutV1ProjectsRefPgsodium<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.projects)[':ref']['pgsodium']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.projects)[':ref']['pgsodium']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1ProjectsRefPgsodiumMutationOptions<TError, TOnMutateResult>(
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

export function getV1ProjectsRefPostgrestQueryKey(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['postgrest']['$get']>,
) {
  return ['v1', '/v1/projects/:ref/postgrest', args] as const
}

export function getV1ProjectsRefPostgrestQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':ref']['postgrest']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['postgrest']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['postgrest']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsRefPostgrestQueryKey>
  >({
    queryKey: getV1ProjectsRefPostgrestQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':ref'].postgrest.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ProjectsRefPostgrest<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':ref']['postgrest']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['postgrest']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.projects)[':ref']['postgrest']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefPostgrestQueryKey>
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
      ...getV1ProjectsRefPostgrestQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ProjectsRefPostgrest<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':ref']['postgrest']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['postgrest']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.projects)[':ref']['postgrest']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefPostgrestQueryKey>
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
      ...getV1ProjectsRefPostgrestQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPatchV1ProjectsRefPostgrestMutationKey() {
  return ['v1', '/v1/projects/:ref/postgrest', 'PATCH'] as const
}

export function getPatchV1ProjectsRefPostgrestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['postgrest']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.projects)[':ref']['postgrest']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1ProjectsRefPostgrestMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.projects)[':ref']['postgrest']['$patch']>,
    ) {
      return parseResponse(client.v1.projects[':ref'].postgrest.$patch(args, options))
    },
  })
}

export function usePatchV1ProjectsRefPostgrest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.projects)[':ref']['postgrest']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.projects)[':ref']['postgrest']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV1ProjectsRefPostgrestMutationOptions<TError, TOnMutateResult>(
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

export function getV1ProjectsRefQueryKey(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['$get']>,
) {
  return ['v1', '/v1/projects/:ref', args] as const
}

export function getV1ProjectsRefQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.projects)[':ref']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.projects)[':ref']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsRefQueryKey>
  >({
    queryKey: getV1ProjectsRefQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':ref'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1ProjectsRef<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.projects)[':ref']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.projects)[':ref']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1ProjectsRefQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1ProjectsRef<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.projects)[':ref']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.projects)[':ref']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1ProjectsRefQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteV1ProjectsRefMutationKey() {
  return ['v1', '/v1/projects/:ref', 'DELETE'] as const
}

export function getDeleteV1ProjectsRefMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.projects)[':ref']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.projects)[':ref']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ProjectsRefMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.projects)[':ref']['$delete']>) {
      return parseResponse(client.v1.projects[':ref'].$delete(args, options))
    },
  })
}

export function useDeleteV1ProjectsRef<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.projects)[':ref']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.projects)[':ref']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1ProjectsRefMutationOptions<TError, TOnMutateResult>(
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

export function getPatchV1ProjectsRefMutationKey() {
  return ['v1', '/v1/projects/:ref', 'PATCH'] as const
}

export function getPatchV1ProjectsRefMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.projects)[':ref']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.projects)[':ref']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1ProjectsRefMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.projects)[':ref']['$patch']>) {
      return parseResponse(client.v1.projects[':ref'].$patch(args, options))
    },
  })
}

export function usePatchV1ProjectsRef<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.projects)[':ref']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.projects)[':ref']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV1ProjectsRefMutationOptions<TError, TOnMutateResult>(
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

export function getV1ProjectsRefSecretsQueryKey(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['secrets']['$get']>,
) {
  return ['v1', '/v1/projects/:ref/secrets', args] as const
}

export function getV1ProjectsRefSecretsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':ref']['secrets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['secrets']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['secrets']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsRefSecretsQueryKey>
  >({
    queryKey: getV1ProjectsRefSecretsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':ref'].secrets.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ProjectsRefSecrets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':ref']['secrets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['secrets']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.projects)[':ref']['secrets']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefSecretsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1ProjectsRefSecretsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1ProjectsRefSecrets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':ref']['secrets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['secrets']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.projects)[':ref']['secrets']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefSecretsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1ProjectsRefSecretsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV1ProjectsRefSecretsMutationKey() {
  return ['v1', '/v1/projects/:ref/secrets', 'POST'] as const
}

export function getPostV1ProjectsRefSecretsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['secrets']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.projects)[':ref']['secrets']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsRefSecretsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.projects)[':ref']['secrets']['$post']>,
    ) {
      return parseResponse(client.v1.projects[':ref'].secrets.$post(args, options))
    },
  })
}

export function usePostV1ProjectsRefSecrets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.projects)[':ref']['secrets']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.projects)[':ref']['secrets']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ProjectsRefSecretsMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV1ProjectsRefSecretsMutationKey() {
  return ['v1', '/v1/projects/:ref/secrets', 'DELETE'] as const
}

export function getDeleteV1ProjectsRefSecretsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['secrets']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.projects)[':ref']['secrets']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ProjectsRefSecretsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.projects)[':ref']['secrets']['$delete']>,
    ) {
      return parseResponse(client.v1.projects[':ref'].secrets.$delete(args, options))
    },
  })
}

export function useDeleteV1ProjectsRefSecrets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.projects)[':ref']['secrets']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.projects)[':ref']['secrets']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1ProjectsRefSecretsMutationOptions<TError, TOnMutateResult>(
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

export function getV1ProjectsRefSslEnforcementQueryKey(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['ssl-enforcement']['$get']>,
) {
  return ['v1', '/v1/projects/:ref/ssl-enforcement', args] as const
}

export function getV1ProjectsRefSslEnforcementQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':ref']['ssl-enforcement']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['ssl-enforcement']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['ssl-enforcement']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsRefSslEnforcementQueryKey>
  >({
    queryKey: getV1ProjectsRefSslEnforcementQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':ref']['ssl-enforcement'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ProjectsRefSslEnforcement<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':ref']['ssl-enforcement']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['ssl-enforcement']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.projects)[':ref']['ssl-enforcement']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefSslEnforcementQueryKey>
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
      ...getV1ProjectsRefSslEnforcementQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ProjectsRefSslEnforcement<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':ref']['ssl-enforcement']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['ssl-enforcement']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.projects)[':ref']['ssl-enforcement']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefSslEnforcementQueryKey>
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
      ...getV1ProjectsRefSslEnforcementQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutV1ProjectsRefSslEnforcementMutationKey() {
  return ['v1', '/v1/projects/:ref/ssl-enforcement', 'PUT'] as const
}

export function getPutV1ProjectsRefSslEnforcementMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['ssl-enforcement']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.projects)[':ref']['ssl-enforcement']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1ProjectsRefSslEnforcementMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.projects)[':ref']['ssl-enforcement']['$put']>,
    ) {
      return parseResponse(client.v1.projects[':ref']['ssl-enforcement'].$put(args, options))
    },
  })
}

export function usePutV1ProjectsRefSslEnforcement<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.projects)[':ref']['ssl-enforcement']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.projects)[':ref']['ssl-enforcement']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1ProjectsRefSslEnforcementMutationOptions<
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

export function getV1ProjectsRefTypesTypescriptQueryKey(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['types']['typescript']['$get']>,
) {
  return ['v1', '/v1/projects/:ref/types/typescript', args] as const
}

export function getV1ProjectsRefTypesTypescriptQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':ref']['types']['typescript']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['types']['typescript']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['types']['typescript']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsRefTypesTypescriptQueryKey>
  >({
    queryKey: getV1ProjectsRefTypesTypescriptQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':ref'].types.typescript.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ProjectsRefTypesTypescript<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':ref']['types']['typescript']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['types']['typescript']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.projects)[':ref']['types']['typescript']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefTypesTypescriptQueryKey>
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
      ...getV1ProjectsRefTypesTypescriptQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ProjectsRefTypesTypescript<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':ref']['types']['typescript']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['types']['typescript']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.projects)[':ref']['types']['typescript']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefTypesTypescriptQueryKey>
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
      ...getV1ProjectsRefTypesTypescriptQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1ProjectsRefVanitySubdomainQueryKey(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['vanity-subdomain']['$get']>,
) {
  return ['v1', '/v1/projects/:ref/vanity-subdomain', args] as const
}

export function getV1ProjectsRefVanitySubdomainQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':ref']['vanity-subdomain']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['vanity-subdomain']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['vanity-subdomain']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsRefVanitySubdomainQueryKey>
  >({
    queryKey: getV1ProjectsRefVanitySubdomainQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':ref']['vanity-subdomain'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ProjectsRefVanitySubdomain<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':ref']['vanity-subdomain']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['vanity-subdomain']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.projects)[':ref']['vanity-subdomain']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefVanitySubdomainQueryKey>
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
      ...getV1ProjectsRefVanitySubdomainQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ProjectsRefVanitySubdomain<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':ref']['vanity-subdomain']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['vanity-subdomain']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.projects)[':ref']['vanity-subdomain']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefVanitySubdomainQueryKey>
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
      ...getV1ProjectsRefVanitySubdomainQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteV1ProjectsRefVanitySubdomainMutationKey() {
  return ['v1', '/v1/projects/:ref/vanity-subdomain', 'DELETE'] as const
}

export function getDeleteV1ProjectsRefVanitySubdomainMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['vanity-subdomain']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.projects)[':ref']['vanity-subdomain']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ProjectsRefVanitySubdomainMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.projects)[':ref']['vanity-subdomain']['$delete']>,
    ) {
      return parseResponse(client.v1.projects[':ref']['vanity-subdomain'].$delete(args, options))
    },
  })
}

export function useDeleteV1ProjectsRefVanitySubdomain<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.projects)[':ref']['vanity-subdomain']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.projects)[':ref']['vanity-subdomain']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1ProjectsRefVanitySubdomainMutationOptions<
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

export function getPostV1ProjectsRefVanitySubdomainCheckAvailabilityMutationKey() {
  return ['v1', '/v1/projects/:ref/vanity-subdomain/check-availability', 'POST'] as const
}

export function getPostV1ProjectsRefVanitySubdomainCheckAvailabilityMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':ref']['vanity-subdomain']['check-availability']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.projects)[':ref']['vanity-subdomain']['check-availability']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsRefVanitySubdomainCheckAvailabilityMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':ref']['vanity-subdomain']['check-availability']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':ref']['vanity-subdomain']['check-availability'].$post(args, options),
      )
    },
  })
}

export function usePostV1ProjectsRefVanitySubdomainCheckAvailability<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.projects)[':ref']['vanity-subdomain']['check-availability']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.projects)[':ref']['vanity-subdomain']['check-availability']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ProjectsRefVanitySubdomainCheckAvailabilityMutationOptions<
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

export function getPostV1ProjectsRefVanitySubdomainActivateMutationKey() {
  return ['v1', '/v1/projects/:ref/vanity-subdomain/activate', 'POST'] as const
}

export function getPostV1ProjectsRefVanitySubdomainActivateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.projects)[':ref']['vanity-subdomain']['activate']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.projects)[':ref']['vanity-subdomain']['activate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsRefVanitySubdomainActivateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':ref']['vanity-subdomain']['activate']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':ref']['vanity-subdomain'].activate.$post(args, options),
      )
    },
  })
}

export function usePostV1ProjectsRefVanitySubdomainActivate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.projects)[':ref']['vanity-subdomain']['activate']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.projects)[':ref']['vanity-subdomain']['activate']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ProjectsRefVanitySubdomainActivateMutationOptions<
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

export function getPostV1ProjectsRefUpgradeMutationKey() {
  return ['v1', '/v1/projects/:ref/upgrade', 'POST'] as const
}

export function getPostV1ProjectsRefUpgradeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['upgrade']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.projects)[':ref']['upgrade']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsRefUpgradeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.projects)[':ref']['upgrade']['$post']>,
    ) {
      return parseResponse(client.v1.projects[':ref'].upgrade.$post(args, options))
    },
  })
}

export function usePostV1ProjectsRefUpgrade<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.projects)[':ref']['upgrade']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.projects)[':ref']['upgrade']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ProjectsRefUpgradeMutationOptions<TError, TOnMutateResult>(
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

export function getV1ProjectsRefUpgradeEligibilityQueryKey(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['upgrade']['eligibility']['$get']>,
) {
  return ['v1', '/v1/projects/:ref/upgrade/eligibility', args] as const
}

export function getV1ProjectsRefUpgradeEligibilityQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':ref']['upgrade']['eligibility']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['upgrade']['eligibility']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['upgrade']['eligibility']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsRefUpgradeEligibilityQueryKey>
  >({
    queryKey: getV1ProjectsRefUpgradeEligibilityQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':ref'].upgrade.eligibility.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ProjectsRefUpgradeEligibility<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':ref']['upgrade']['eligibility']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['upgrade']['eligibility']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.projects)[':ref']['upgrade']['eligibility']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefUpgradeEligibilityQueryKey>
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
      ...getV1ProjectsRefUpgradeEligibilityQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ProjectsRefUpgradeEligibility<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':ref']['upgrade']['eligibility']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['upgrade']['eligibility']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.projects)[':ref']['upgrade']['eligibility']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefUpgradeEligibilityQueryKey>
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
      ...getV1ProjectsRefUpgradeEligibilityQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1ProjectsRefUpgradeStatusQueryKey(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['upgrade']['status']['$get']>,
) {
  return ['v1', '/v1/projects/:ref/upgrade/status', args] as const
}

export function getV1ProjectsRefUpgradeStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':ref']['upgrade']['status']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['upgrade']['status']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['upgrade']['status']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsRefUpgradeStatusQueryKey>
  >({
    queryKey: getV1ProjectsRefUpgradeStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':ref'].upgrade.status.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ProjectsRefUpgradeStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':ref']['upgrade']['status']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['upgrade']['status']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.projects)[':ref']['upgrade']['status']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefUpgradeStatusQueryKey>
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
      ...getV1ProjectsRefUpgradeStatusQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ProjectsRefUpgradeStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':ref']['upgrade']['status']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['upgrade']['status']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.projects)[':ref']['upgrade']['status']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefUpgradeStatusQueryKey>
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
      ...getV1ProjectsRefUpgradeStatusQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1ProjectsRefReadonlyQueryKey(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['readonly']['$get']>,
) {
  return ['v1', '/v1/projects/:ref/readonly', args] as const
}

export function getV1ProjectsRefReadonlyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':ref']['readonly']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['readonly']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['readonly']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsRefReadonlyQueryKey>
  >({
    queryKey: getV1ProjectsRefReadonlyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':ref'].readonly.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ProjectsRefReadonly<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':ref']['readonly']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['readonly']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.projects)[':ref']['readonly']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefReadonlyQueryKey>
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
      ...getV1ProjectsRefReadonlyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ProjectsRefReadonly<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':ref']['readonly']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['readonly']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.projects)[':ref']['readonly']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefReadonlyQueryKey>
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
      ...getV1ProjectsRefReadonlyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV1ProjectsRefReadonlyTemporaryDisableMutationKey() {
  return ['v1', '/v1/projects/:ref/readonly/temporary-disable', 'POST'] as const
}

export function getPostV1ProjectsRefReadonlyTemporaryDisableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':ref']['readonly']['temporary-disable']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.projects)[':ref']['readonly']['temporary-disable']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsRefReadonlyTemporaryDisableMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':ref']['readonly']['temporary-disable']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':ref'].readonly['temporary-disable'].$post(args, options),
      )
    },
  })
}

export function usePostV1ProjectsRefReadonlyTemporaryDisable<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.projects)[':ref']['readonly']['temporary-disable']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.projects)[':ref']['readonly']['temporary-disable']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ProjectsRefReadonlyTemporaryDisableMutationOptions<
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

export function getPostV1ProjectsRefReadReplicasSetupMutationKey() {
  return ['v1', '/v1/projects/:ref/read-replicas/setup', 'POST'] as const
}

export function getPostV1ProjectsRefReadReplicasSetupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.projects)[':ref']['read-replicas']['setup']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.projects)[':ref']['read-replicas']['setup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsRefReadReplicasSetupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':ref']['read-replicas']['setup']['$post']
      >,
    ) {
      return parseResponse(client.v1.projects[':ref']['read-replicas'].setup.$post(args, options))
    },
  })
}

export function usePostV1ProjectsRefReadReplicasSetup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.projects)[':ref']['read-replicas']['setup']['$post']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1.projects)[':ref']['read-replicas']['setup']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ProjectsRefReadReplicasSetupMutationOptions<
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

export function getPostV1ProjectsRefReadReplicasRemoveMutationKey() {
  return ['v1', '/v1/projects/:ref/read-replicas/remove', 'POST'] as const
}

export function getPostV1ProjectsRefReadReplicasRemoveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.projects)[':ref']['read-replicas']['remove']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.projects)[':ref']['read-replicas']['remove']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsRefReadReplicasRemoveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':ref']['read-replicas']['remove']['$post']
      >,
    ) {
      return parseResponse(client.v1.projects[':ref']['read-replicas'].remove.$post(args, options))
    },
  })
}

export function usePostV1ProjectsRefReadReplicasRemove<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.projects)[':ref']['read-replicas']['remove']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1.projects)[':ref']['read-replicas']['remove']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ProjectsRefReadReplicasRemoveMutationOptions<
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

export function getV1ProjectsRefHealthQueryKey(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['health']['$get']>,
) {
  return ['v1', '/v1/projects/:ref/health', args] as const
}

export function getV1ProjectsRefHealthQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':ref']['health']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['health']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['health']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsRefHealthQueryKey>
  >({
    queryKey: getV1ProjectsRefHealthQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':ref'].health.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ProjectsRefHealth<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':ref']['health']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['health']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.projects)[':ref']['health']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefHealthQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1ProjectsRefHealthQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1ProjectsRefHealth<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':ref']['health']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['health']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.projects)[':ref']['health']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefHealthQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1ProjectsRefHealthQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1ProjectsRefConfigAuthSigningKeysLegacyQueryKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['config']['auth']['signing-keys']['legacy']['$get']
  >,
) {
  return ['v1', '/v1/projects/:ref/config/auth/signing-keys/legacy', args] as const
}

export function getV1ProjectsRefConfigAuthSigningKeysLegacyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.projects)[':ref']['config']['auth']['signing-keys']['legacy']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['config']['auth']['signing-keys']['legacy']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':ref']['config']['auth']['signing-keys']['legacy']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsRefConfigAuthSigningKeysLegacyQueryKey>
  >({
    queryKey: getV1ProjectsRefConfigAuthSigningKeysLegacyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':ref'].config.auth['signing-keys'].legacy.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ProjectsRefConfigAuthSigningKeysLegacy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.projects)[':ref']['config']['auth']['signing-keys']['legacy']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['config']['auth']['signing-keys']['legacy']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.projects)[':ref']['config']['auth']['signing-keys']['legacy']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefConfigAuthSigningKeysLegacyQueryKey>
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
      ...getV1ProjectsRefConfigAuthSigningKeysLegacyQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ProjectsRefConfigAuthSigningKeysLegacy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.projects)[':ref']['config']['auth']['signing-keys']['legacy']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['config']['auth']['signing-keys']['legacy']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.projects)[':ref']['config']['auth']['signing-keys']['legacy']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefConfigAuthSigningKeysLegacyQueryKey>
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
      ...getV1ProjectsRefConfigAuthSigningKeysLegacyQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV1ProjectsRefConfigAuthSigningKeysLegacyMutationKey() {
  return ['v1', '/v1/projects/:ref/config/auth/signing-keys/legacy', 'POST'] as const
}

export function getPostV1ProjectsRefConfigAuthSigningKeysLegacyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':ref']['config']['auth']['signing-keys']['legacy']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.projects)[':ref']['config']['auth']['signing-keys']['legacy']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsRefConfigAuthSigningKeysLegacyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':ref']['config']['auth']['signing-keys']['legacy']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':ref'].config.auth['signing-keys'].legacy.$post(args, options),
      )
    },
  })
}

export function usePostV1ProjectsRefConfigAuthSigningKeysLegacy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.projects)[':ref']['config']['auth']['signing-keys']['legacy']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.projects)[':ref']['config']['auth']['signing-keys']['legacy']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ProjectsRefConfigAuthSigningKeysLegacyMutationOptions<
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

export function getV1ProjectsRefConfigAuthSigningKeysQueryKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['config']['auth']['signing-keys']['$get']
  >,
) {
  return ['v1', '/v1/projects/:ref/config/auth/signing-keys', args] as const
}

export function getV1ProjectsRefConfigAuthSigningKeysQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.projects)[':ref']['config']['auth']['signing-keys']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['config']['auth']['signing-keys']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':ref']['config']['auth']['signing-keys']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsRefConfigAuthSigningKeysQueryKey>
  >({
    queryKey: getV1ProjectsRefConfigAuthSigningKeysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':ref'].config.auth['signing-keys'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ProjectsRefConfigAuthSigningKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.projects)[':ref']['config']['auth']['signing-keys']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['config']['auth']['signing-keys']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.projects)[':ref']['config']['auth']['signing-keys']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefConfigAuthSigningKeysQueryKey>
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
      ...getV1ProjectsRefConfigAuthSigningKeysQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ProjectsRefConfigAuthSigningKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.projects)[':ref']['config']['auth']['signing-keys']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['config']['auth']['signing-keys']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.projects)[':ref']['config']['auth']['signing-keys']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefConfigAuthSigningKeysQueryKey>
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
      ...getV1ProjectsRefConfigAuthSigningKeysQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV1ProjectsRefConfigAuthSigningKeysMutationKey() {
  return ['v1', '/v1/projects/:ref/config/auth/signing-keys', 'POST'] as const
}

export function getPostV1ProjectsRefConfigAuthSigningKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':ref']['config']['auth']['signing-keys']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.projects)[':ref']['config']['auth']['signing-keys']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsRefConfigAuthSigningKeysMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':ref']['config']['auth']['signing-keys']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':ref'].config.auth['signing-keys'].$post(args, options),
      )
    },
  })
}

export function usePostV1ProjectsRefConfigAuthSigningKeys<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.projects)[':ref']['config']['auth']['signing-keys']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.projects)[':ref']['config']['auth']['signing-keys']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ProjectsRefConfigAuthSigningKeysMutationOptions<
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

export function getV1ProjectsRefConfigAuthSigningKeysIdQueryKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['config']['auth']['signing-keys'][':id']['$get']
  >,
) {
  return ['v1', '/v1/projects/:ref/config/auth/signing-keys/:id', args] as const
}

export function getV1ProjectsRefConfigAuthSigningKeysIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.projects)[':ref']['config']['auth']['signing-keys'][':id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['config']['auth']['signing-keys'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':ref']['config']['auth']['signing-keys'][':id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsRefConfigAuthSigningKeysIdQueryKey>
  >({
    queryKey: getV1ProjectsRefConfigAuthSigningKeysIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':ref'].config.auth['signing-keys'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ProjectsRefConfigAuthSigningKeysId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.projects)[':ref']['config']['auth']['signing-keys'][':id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['config']['auth']['signing-keys'][':id']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.projects)[':ref']['config']['auth']['signing-keys'][':id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefConfigAuthSigningKeysIdQueryKey>
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
      ...getV1ProjectsRefConfigAuthSigningKeysIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ProjectsRefConfigAuthSigningKeysId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.projects)[':ref']['config']['auth']['signing-keys'][':id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['config']['auth']['signing-keys'][':id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.projects)[':ref']['config']['auth']['signing-keys'][':id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefConfigAuthSigningKeysIdQueryKey>
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
      ...getV1ProjectsRefConfigAuthSigningKeysIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteV1ProjectsRefConfigAuthSigningKeysIdMutationKey() {
  return ['v1', '/v1/projects/:ref/config/auth/signing-keys/:id', 'DELETE'] as const
}

export function getDeleteV1ProjectsRefConfigAuthSigningKeysIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':ref']['config']['auth']['signing-keys'][':id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.projects)[':ref']['config']['auth']['signing-keys'][':id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ProjectsRefConfigAuthSigningKeysIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':ref']['config']['auth']['signing-keys'][':id']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':ref'].config.auth['signing-keys'][':id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV1ProjectsRefConfigAuthSigningKeysId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.projects)[':ref']['config']['auth']['signing-keys'][':id']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.projects)[':ref']['config']['auth']['signing-keys'][':id']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1ProjectsRefConfigAuthSigningKeysIdMutationOptions<
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

export function getPatchV1ProjectsRefConfigAuthSigningKeysIdMutationKey() {
  return ['v1', '/v1/projects/:ref/config/auth/signing-keys/:id', 'PATCH'] as const
}

export function getPatchV1ProjectsRefConfigAuthSigningKeysIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':ref']['config']['auth']['signing-keys'][':id']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.projects)[':ref']['config']['auth']['signing-keys'][':id']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchV1ProjectsRefConfigAuthSigningKeysIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':ref']['config']['auth']['signing-keys'][':id']['$patch']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':ref'].config.auth['signing-keys'][':id'].$patch(args, options),
      )
    },
  })
}

export function usePatchV1ProjectsRefConfigAuthSigningKeysId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.projects)[':ref']['config']['auth']['signing-keys'][':id']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.projects)[':ref']['config']['auth']['signing-keys'][':id']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV1ProjectsRefConfigAuthSigningKeysIdMutationOptions<
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

export function getV1ProjectsRefConfigAuthQueryKey(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['config']['auth']['$get']>,
) {
  return ['v1', '/v1/projects/:ref/config/auth', args] as const
}

export function getV1ProjectsRefConfigAuthQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':ref']['config']['auth']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['config']['auth']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['config']['auth']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsRefConfigAuthQueryKey>
  >({
    queryKey: getV1ProjectsRefConfigAuthQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':ref'].config.auth.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ProjectsRefConfigAuth<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':ref']['config']['auth']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['config']['auth']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.projects)[':ref']['config']['auth']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefConfigAuthQueryKey>
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
      ...getV1ProjectsRefConfigAuthQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ProjectsRefConfigAuth<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':ref']['config']['auth']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['config']['auth']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.projects)[':ref']['config']['auth']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefConfigAuthQueryKey>
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
      ...getV1ProjectsRefConfigAuthQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPatchV1ProjectsRefConfigAuthMutationKey() {
  return ['v1', '/v1/projects/:ref/config/auth', 'PATCH'] as const
}

export function getPatchV1ProjectsRefConfigAuthMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['config']['auth']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.projects)[':ref']['config']['auth']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1ProjectsRefConfigAuthMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.projects)[':ref']['config']['auth']['$patch']>,
    ) {
      return parseResponse(client.v1.projects[':ref'].config.auth.$patch(args, options))
    },
  })
}

export function usePatchV1ProjectsRefConfigAuth<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.projects)[':ref']['config']['auth']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.projects)[':ref']['config']['auth']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV1ProjectsRefConfigAuthMutationOptions<TError, TOnMutateResult>(
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

export function getV1ProjectsRefConfigAuthThirdPartyAuthQueryKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['config']['auth']['third-party-auth']['$get']
  >,
) {
  return ['v1', '/v1/projects/:ref/config/auth/third-party-auth', args] as const
}

export function getV1ProjectsRefConfigAuthThirdPartyAuthQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.projects)[':ref']['config']['auth']['third-party-auth']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['config']['auth']['third-party-auth']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':ref']['config']['auth']['third-party-auth']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsRefConfigAuthThirdPartyAuthQueryKey>
  >({
    queryKey: getV1ProjectsRefConfigAuthThirdPartyAuthQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':ref'].config.auth['third-party-auth'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ProjectsRefConfigAuthThirdPartyAuth<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.projects)[':ref']['config']['auth']['third-party-auth']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['config']['auth']['third-party-auth']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.projects)[':ref']['config']['auth']['third-party-auth']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefConfigAuthThirdPartyAuthQueryKey>
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
      ...getV1ProjectsRefConfigAuthThirdPartyAuthQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ProjectsRefConfigAuthThirdPartyAuth<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.projects)[':ref']['config']['auth']['third-party-auth']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['config']['auth']['third-party-auth']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.projects)[':ref']['config']['auth']['third-party-auth']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefConfigAuthThirdPartyAuthQueryKey>
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
      ...getV1ProjectsRefConfigAuthThirdPartyAuthQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV1ProjectsRefConfigAuthThirdPartyAuthMutationKey() {
  return ['v1', '/v1/projects/:ref/config/auth/third-party-auth', 'POST'] as const
}

export function getPostV1ProjectsRefConfigAuthThirdPartyAuthMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':ref']['config']['auth']['third-party-auth']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.projects)[':ref']['config']['auth']['third-party-auth']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsRefConfigAuthThirdPartyAuthMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':ref']['config']['auth']['third-party-auth']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':ref'].config.auth['third-party-auth'].$post(args, options),
      )
    },
  })
}

export function usePostV1ProjectsRefConfigAuthThirdPartyAuth<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.projects)[':ref']['config']['auth']['third-party-auth']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.projects)[':ref']['config']['auth']['third-party-auth']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ProjectsRefConfigAuthThirdPartyAuthMutationOptions<
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

export function getV1ProjectsRefConfigAuthThirdPartyAuthTpaIdQueryKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['config']['auth']['third-party-auth'][':tpa_id']['$get']
  >,
) {
  return ['v1', '/v1/projects/:ref/config/auth/third-party-auth/:tpa_id', args] as const
}

export function getV1ProjectsRefConfigAuthThirdPartyAuthTpaIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.projects)[':ref']['config']['auth']['third-party-auth'][':tpa_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['config']['auth']['third-party-auth'][':tpa_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':ref']['config']['auth']['third-party-auth'][':tpa_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsRefConfigAuthThirdPartyAuthTpaIdQueryKey>
  >({
    queryKey: getV1ProjectsRefConfigAuthThirdPartyAuthTpaIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':ref'].config.auth['third-party-auth'][':tpa_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ProjectsRefConfigAuthThirdPartyAuthTpaId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.projects)[':ref']['config']['auth']['third-party-auth'][':tpa_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['config']['auth']['third-party-auth'][':tpa_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.projects)[':ref']['config']['auth']['third-party-auth'][':tpa_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefConfigAuthThirdPartyAuthTpaIdQueryKey>
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
      ...getV1ProjectsRefConfigAuthThirdPartyAuthTpaIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ProjectsRefConfigAuthThirdPartyAuthTpaId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.projects)[':ref']['config']['auth']['third-party-auth'][':tpa_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['config']['auth']['third-party-auth'][':tpa_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.projects)[':ref']['config']['auth']['third-party-auth'][':tpa_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefConfigAuthThirdPartyAuthTpaIdQueryKey>
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
      ...getV1ProjectsRefConfigAuthThirdPartyAuthTpaIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteV1ProjectsRefConfigAuthThirdPartyAuthTpaIdMutationKey() {
  return ['v1', '/v1/projects/:ref/config/auth/third-party-auth/:tpa_id', 'DELETE'] as const
}

export function getDeleteV1ProjectsRefConfigAuthThirdPartyAuthTpaIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':ref']['config']['auth']['third-party-auth'][':tpa_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.projects)[':ref']['config']['auth']['third-party-auth'][':tpa_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ProjectsRefConfigAuthThirdPartyAuthTpaIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':ref']['config']['auth']['third-party-auth'][':tpa_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':ref'].config.auth['third-party-auth'][':tpa_id'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteV1ProjectsRefConfigAuthThirdPartyAuthTpaId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.projects)[':ref']['config']['auth']['third-party-auth'][':tpa_id']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.projects)[':ref']['config']['auth']['third-party-auth'][':tpa_id']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1ProjectsRefConfigAuthThirdPartyAuthTpaIdMutationOptions<
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

export function getPostV1ProjectsRefPauseMutationKey() {
  return ['v1', '/v1/projects/:ref/pause', 'POST'] as const
}

export function getPostV1ProjectsRefPauseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['pause']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.projects)[':ref']['pause']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsRefPauseMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.projects)[':ref']['pause']['$post']>,
    ) {
      return parseResponse(client.v1.projects[':ref'].pause.$post(args, options))
    },
  })
}

export function usePostV1ProjectsRefPause<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.projects)[':ref']['pause']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.projects)[':ref']['pause']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ProjectsRefPauseMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1ProjectsRefRestartMutationKey() {
  return ['v1', '/v1/projects/:ref/restart', 'POST'] as const
}

export function getPostV1ProjectsRefRestartMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['restart']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.projects)[':ref']['restart']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsRefRestartMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.projects)[':ref']['restart']['$post']>,
    ) {
      return parseResponse(client.v1.projects[':ref'].restart.$post(args, options))
    },
  })
}

export function usePostV1ProjectsRefRestart<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.projects)[':ref']['restart']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.projects)[':ref']['restart']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ProjectsRefRestartMutationOptions<TError, TOnMutateResult>(
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

export function getV1ProjectsRefRestoreQueryKey(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['restore']['$get']>,
) {
  return ['v1', '/v1/projects/:ref/restore', args] as const
}

export function getV1ProjectsRefRestoreQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':ref']['restore']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['restore']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['restore']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsRefRestoreQueryKey>
  >({
    queryKey: getV1ProjectsRefRestoreQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':ref'].restore.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ProjectsRefRestore<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':ref']['restore']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['restore']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.projects)[':ref']['restore']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefRestoreQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1ProjectsRefRestoreQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1ProjectsRefRestore<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':ref']['restore']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['restore']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.projects)[':ref']['restore']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefRestoreQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1ProjectsRefRestoreQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV1ProjectsRefRestoreMutationKey() {
  return ['v1', '/v1/projects/:ref/restore', 'POST'] as const
}

export function getPostV1ProjectsRefRestoreMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['restore']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.projects)[':ref']['restore']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsRefRestoreMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.projects)[':ref']['restore']['$post']>,
    ) {
      return parseResponse(client.v1.projects[':ref'].restore.$post(args, options))
    },
  })
}

export function usePostV1ProjectsRefRestore<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.projects)[':ref']['restore']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.projects)[':ref']['restore']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ProjectsRefRestoreMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1ProjectsRefRestoreCancelMutationKey() {
  return ['v1', '/v1/projects/:ref/restore/cancel', 'POST'] as const
}

export function getPostV1ProjectsRefRestoreCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['restore']['cancel']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.projects)[':ref']['restore']['cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsRefRestoreCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.projects)[':ref']['restore']['cancel']['$post']>,
    ) {
      return parseResponse(client.v1.projects[':ref'].restore.cancel.$post(args, options))
    },
  })
}

export function usePostV1ProjectsRefRestoreCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.projects)[':ref']['restore']['cancel']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.projects)[':ref']['restore']['cancel']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ProjectsRefRestoreCancelMutationOptions<
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

export function getV1ProjectsRefBillingAddonsQueryKey(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['billing']['addons']['$get']>,
) {
  return ['v1', '/v1/projects/:ref/billing/addons', args] as const
}

export function getV1ProjectsRefBillingAddonsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':ref']['billing']['addons']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['billing']['addons']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['billing']['addons']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsRefBillingAddonsQueryKey>
  >({
    queryKey: getV1ProjectsRefBillingAddonsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':ref'].billing.addons.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ProjectsRefBillingAddons<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':ref']['billing']['addons']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['billing']['addons']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.projects)[':ref']['billing']['addons']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefBillingAddonsQueryKey>
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
      ...getV1ProjectsRefBillingAddonsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ProjectsRefBillingAddons<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':ref']['billing']['addons']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['billing']['addons']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.projects)[':ref']['billing']['addons']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefBillingAddonsQueryKey>
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
      ...getV1ProjectsRefBillingAddonsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPatchV1ProjectsRefBillingAddonsMutationKey() {
  return ['v1', '/v1/projects/:ref/billing/addons', 'PATCH'] as const
}

export function getPatchV1ProjectsRefBillingAddonsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['billing']['addons']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.projects)[':ref']['billing']['addons']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1ProjectsRefBillingAddonsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.projects)[':ref']['billing']['addons']['$patch']>,
    ) {
      return parseResponse(client.v1.projects[':ref'].billing.addons.$patch(args, options))
    },
  })
}

export function usePatchV1ProjectsRefBillingAddons<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.projects)[':ref']['billing']['addons']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.projects)[':ref']['billing']['addons']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV1ProjectsRefBillingAddonsMutationOptions<
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

export function getDeleteV1ProjectsRefBillingAddonsAddonVariantMutationKey() {
  return ['v1', '/v1/projects/:ref/billing/addons/:addon_variant', 'DELETE'] as const
}

export function getDeleteV1ProjectsRefBillingAddonsAddonVariantMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':ref']['billing']['addons'][':addon_variant']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.projects)[':ref']['billing']['addons'][':addon_variant']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ProjectsRefBillingAddonsAddonVariantMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':ref']['billing']['addons'][':addon_variant']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':ref'].billing.addons[':addon_variant'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV1ProjectsRefBillingAddonsAddonVariant<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.projects)[':ref']['billing']['addons'][':addon_variant']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.projects)[':ref']['billing']['addons'][':addon_variant']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1ProjectsRefBillingAddonsAddonVariantMutationOptions<
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

export function getV1ProjectsRefClaimTokenQueryKey(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['claim-token']['$get']>,
) {
  return ['v1', '/v1/projects/:ref/claim-token', args] as const
}

export function getV1ProjectsRefClaimTokenQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':ref']['claim-token']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['claim-token']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['claim-token']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsRefClaimTokenQueryKey>
  >({
    queryKey: getV1ProjectsRefClaimTokenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':ref']['claim-token'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ProjectsRefClaimToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':ref']['claim-token']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['claim-token']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.projects)[':ref']['claim-token']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefClaimTokenQueryKey>
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
      ...getV1ProjectsRefClaimTokenQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ProjectsRefClaimToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':ref']['claim-token']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['claim-token']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.projects)[':ref']['claim-token']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefClaimTokenQueryKey>
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
      ...getV1ProjectsRefClaimTokenQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV1ProjectsRefClaimTokenMutationKey() {
  return ['v1', '/v1/projects/:ref/claim-token', 'POST'] as const
}

export function getPostV1ProjectsRefClaimTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['claim-token']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.projects)[':ref']['claim-token']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsRefClaimTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.projects)[':ref']['claim-token']['$post']>,
    ) {
      return parseResponse(client.v1.projects[':ref']['claim-token'].$post(args, options))
    },
  })
}

export function usePostV1ProjectsRefClaimToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.projects)[':ref']['claim-token']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.projects)[':ref']['claim-token']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ProjectsRefClaimTokenMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV1ProjectsRefClaimTokenMutationKey() {
  return ['v1', '/v1/projects/:ref/claim-token', 'DELETE'] as const
}

export function getDeleteV1ProjectsRefClaimTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['claim-token']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.projects)[':ref']['claim-token']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ProjectsRefClaimTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.projects)[':ref']['claim-token']['$delete']>,
    ) {
      return parseResponse(client.v1.projects[':ref']['claim-token'].$delete(args, options))
    },
  })
}

export function useDeleteV1ProjectsRefClaimToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.projects)[':ref']['claim-token']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1.projects)[':ref']['claim-token']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1ProjectsRefClaimTokenMutationOptions<TError, TOnMutateResult>(
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

export function getV1ProjectsRefAdvisorsPerformanceQueryKey(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['advisors']['performance']['$get']>,
) {
  return ['v1', '/v1/projects/:ref/advisors/performance', args] as const
}

export function getV1ProjectsRefAdvisorsPerformanceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':ref']['advisors']['performance']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['advisors']['performance']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.projects)[':ref']['advisors']['performance']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsRefAdvisorsPerformanceQueryKey>
  >({
    queryKey: getV1ProjectsRefAdvisorsPerformanceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':ref'].advisors.performance.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ProjectsRefAdvisorsPerformance<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':ref']['advisors']['performance']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['advisors']['performance']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.projects)[':ref']['advisors']['performance']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefAdvisorsPerformanceQueryKey>
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
      ...getV1ProjectsRefAdvisorsPerformanceQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ProjectsRefAdvisorsPerformance<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':ref']['advisors']['performance']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['advisors']['performance']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.projects)[':ref']['advisors']['performance']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefAdvisorsPerformanceQueryKey>
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
      ...getV1ProjectsRefAdvisorsPerformanceQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1ProjectsRefAdvisorsSecurityQueryKey(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['advisors']['security']['$get']>,
) {
  return ['v1', '/v1/projects/:ref/advisors/security', args] as const
}

export function getV1ProjectsRefAdvisorsSecurityQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':ref']['advisors']['security']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['advisors']['security']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['advisors']['security']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsRefAdvisorsSecurityQueryKey>
  >({
    queryKey: getV1ProjectsRefAdvisorsSecurityQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':ref'].advisors.security.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ProjectsRefAdvisorsSecurity<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':ref']['advisors']['security']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['advisors']['security']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.projects)[':ref']['advisors']['security']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefAdvisorsSecurityQueryKey>
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
      ...getV1ProjectsRefAdvisorsSecurityQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ProjectsRefAdvisorsSecurity<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':ref']['advisors']['security']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['advisors']['security']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.projects)[':ref']['advisors']['security']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefAdvisorsSecurityQueryKey>
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
      ...getV1ProjectsRefAdvisorsSecurityQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1ProjectsRefAnalyticsEndpointsLogsAllQueryKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['analytics']['endpoints']['logs.all']['$get']
  >,
) {
  return ['v1', '/v1/projects/:ref/analytics/endpoints/logs.all', args] as const
}

export function getV1ProjectsRefAnalyticsEndpointsLogsAllQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.projects)[':ref']['analytics']['endpoints']['logs.all']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['analytics']['endpoints']['logs.all']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':ref']['analytics']['endpoints']['logs.all']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsRefAnalyticsEndpointsLogsAllQueryKey>
  >({
    queryKey: getV1ProjectsRefAnalyticsEndpointsLogsAllQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':ref'].analytics.endpoints['logs.all'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ProjectsRefAnalyticsEndpointsLogsAll<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.projects)[':ref']['analytics']['endpoints']['logs.all']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['analytics']['endpoints']['logs.all']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.projects)[':ref']['analytics']['endpoints']['logs.all']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefAnalyticsEndpointsLogsAllQueryKey>
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
      ...getV1ProjectsRefAnalyticsEndpointsLogsAllQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ProjectsRefAnalyticsEndpointsLogsAll<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.projects)[':ref']['analytics']['endpoints']['logs.all']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['analytics']['endpoints']['logs.all']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.projects)[':ref']['analytics']['endpoints']['logs.all']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefAnalyticsEndpointsLogsAllQueryKey>
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
      ...getV1ProjectsRefAnalyticsEndpointsLogsAllQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1ProjectsRefAnalyticsEndpointsLogsQueryKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['analytics']['endpoints']['logs']['$get']
  >,
) {
  return ['v1', '/v1/projects/:ref/analytics/endpoints/logs', args] as const
}

export function getV1ProjectsRefAnalyticsEndpointsLogsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.projects)[':ref']['analytics']['endpoints']['logs']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['analytics']['endpoints']['logs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':ref']['analytics']['endpoints']['logs']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsRefAnalyticsEndpointsLogsQueryKey>
  >({
    queryKey: getV1ProjectsRefAnalyticsEndpointsLogsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':ref'].analytics.endpoints.logs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ProjectsRefAnalyticsEndpointsLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.projects)[':ref']['analytics']['endpoints']['logs']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['analytics']['endpoints']['logs']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.projects)[':ref']['analytics']['endpoints']['logs']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefAnalyticsEndpointsLogsQueryKey>
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
      ...getV1ProjectsRefAnalyticsEndpointsLogsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ProjectsRefAnalyticsEndpointsLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.projects)[':ref']['analytics']['endpoints']['logs']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['analytics']['endpoints']['logs']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.projects)[':ref']['analytics']['endpoints']['logs']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefAnalyticsEndpointsLogsQueryKey>
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
      ...getV1ProjectsRefAnalyticsEndpointsLogsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV1ProjectsRefAnalyticsEndpointsLogsMutationKey() {
  return ['v1', '/v1/projects/:ref/analytics/endpoints/logs', 'POST'] as const
}

export function getPostV1ProjectsRefAnalyticsEndpointsLogsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':ref']['analytics']['endpoints']['logs']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.projects)[':ref']['analytics']['endpoints']['logs']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsRefAnalyticsEndpointsLogsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':ref']['analytics']['endpoints']['logs']['$post']
      >,
    ) {
      return parseResponse(client.v1.projects[':ref'].analytics.endpoints.logs.$post(args, options))
    },
  })
}

export function usePostV1ProjectsRefAnalyticsEndpointsLogs<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.projects)[':ref']['analytics']['endpoints']['logs']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.projects)[':ref']['analytics']['endpoints']['logs']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ProjectsRefAnalyticsEndpointsLogsMutationOptions<
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

export function getV1ProjectsRefAnalyticsEndpointsUsageApiCountsQueryKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['analytics']['endpoints']['usage.api-counts']['$get']
  >,
) {
  return ['v1', '/v1/projects/:ref/analytics/endpoints/usage.api-counts', args] as const
}

export function getV1ProjectsRefAnalyticsEndpointsUsageApiCountsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.projects)[':ref']['analytics']['endpoints']['usage.api-counts']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['analytics']['endpoints']['usage.api-counts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':ref']['analytics']['endpoints']['usage.api-counts']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsRefAnalyticsEndpointsUsageApiCountsQueryKey>
  >({
    queryKey: getV1ProjectsRefAnalyticsEndpointsUsageApiCountsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':ref'].analytics.endpoints['usage.api-counts'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ProjectsRefAnalyticsEndpointsUsageApiCounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.projects)[':ref']['analytics']['endpoints']['usage.api-counts']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['analytics']['endpoints']['usage.api-counts']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.projects)[':ref']['analytics']['endpoints']['usage.api-counts']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefAnalyticsEndpointsUsageApiCountsQueryKey>
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
      ...getV1ProjectsRefAnalyticsEndpointsUsageApiCountsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ProjectsRefAnalyticsEndpointsUsageApiCounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.projects)[':ref']['analytics']['endpoints']['usage.api-counts']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['analytics']['endpoints']['usage.api-counts']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.projects)[':ref']['analytics']['endpoints']['usage.api-counts']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefAnalyticsEndpointsUsageApiCountsQueryKey>
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
      ...getV1ProjectsRefAnalyticsEndpointsUsageApiCountsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1ProjectsRefAnalyticsEndpointsUsageApiRequestsCountQueryKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['analytics']['endpoints']['usage.api-requests-count']['$get']
  >,
) {
  return ['v1', '/v1/projects/:ref/analytics/endpoints/usage.api-requests-count', args] as const
}

export function getV1ProjectsRefAnalyticsEndpointsUsageApiRequestsCountQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.projects)[':ref']['analytics']['endpoints']['usage.api-requests-count']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['analytics']['endpoints']['usage.api-requests-count']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':ref']['analytics']['endpoints']['usage.api-requests-count']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsRefAnalyticsEndpointsUsageApiRequestsCountQueryKey>
  >({
    queryKey: getV1ProjectsRefAnalyticsEndpointsUsageApiRequestsCountQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':ref'].analytics.endpoints['usage.api-requests-count'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ProjectsRefAnalyticsEndpointsUsageApiRequestsCount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.projects)[':ref']['analytics']['endpoints']['usage.api-requests-count']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['analytics']['endpoints']['usage.api-requests-count']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.projects)[':ref']['analytics']['endpoints']['usage.api-requests-count']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefAnalyticsEndpointsUsageApiRequestsCountQueryKey>
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
      ...getV1ProjectsRefAnalyticsEndpointsUsageApiRequestsCountQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ProjectsRefAnalyticsEndpointsUsageApiRequestsCount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.projects)[':ref']['analytics']['endpoints']['usage.api-requests-count']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['analytics']['endpoints']['usage.api-requests-count']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.projects)[':ref']['analytics']['endpoints']['usage.api-requests-count']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefAnalyticsEndpointsUsageApiRequestsCountQueryKey>
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
      ...getV1ProjectsRefAnalyticsEndpointsUsageApiRequestsCountQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1ProjectsRefAnalyticsEndpointsFunctionsCombinedStatsQueryKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['analytics']['endpoints']['functions.combined-stats']['$get']
  >,
) {
  return ['v1', '/v1/projects/:ref/analytics/endpoints/functions.combined-stats', args] as const
}

export function getV1ProjectsRefAnalyticsEndpointsFunctionsCombinedStatsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.projects)[':ref']['analytics']['endpoints']['functions.combined-stats']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['analytics']['endpoints']['functions.combined-stats']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':ref']['analytics']['endpoints']['functions.combined-stats']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsRefAnalyticsEndpointsFunctionsCombinedStatsQueryKey>
  >({
    queryKey: getV1ProjectsRefAnalyticsEndpointsFunctionsCombinedStatsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':ref'].analytics.endpoints['functions.combined-stats'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ProjectsRefAnalyticsEndpointsFunctionsCombinedStats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.projects)[':ref']['analytics']['endpoints']['functions.combined-stats']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['analytics']['endpoints']['functions.combined-stats']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.projects)[':ref']['analytics']['endpoints']['functions.combined-stats']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefAnalyticsEndpointsFunctionsCombinedStatsQueryKey>
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
      ...getV1ProjectsRefAnalyticsEndpointsFunctionsCombinedStatsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ProjectsRefAnalyticsEndpointsFunctionsCombinedStats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.projects)[':ref']['analytics']['endpoints']['functions.combined-stats']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['analytics']['endpoints']['functions.combined-stats']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.projects)[':ref']['analytics']['endpoints']['functions.combined-stats']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefAnalyticsEndpointsFunctionsCombinedStatsQueryKey>
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
      ...getV1ProjectsRefAnalyticsEndpointsFunctionsCombinedStatsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1ProjectsRefAnalyticsEndpointsMetricsQueryKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['analytics']['endpoints']['metrics']['$get']
  >,
) {
  return ['v1', '/v1/projects/:ref/analytics/endpoints/metrics', args] as const
}

export function getV1ProjectsRefAnalyticsEndpointsMetricsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.projects)[':ref']['analytics']['endpoints']['metrics']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['analytics']['endpoints']['metrics']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':ref']['analytics']['endpoints']['metrics']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsRefAnalyticsEndpointsMetricsQueryKey>
  >({
    queryKey: getV1ProjectsRefAnalyticsEndpointsMetricsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':ref'].analytics.endpoints.metrics.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ProjectsRefAnalyticsEndpointsMetrics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.projects)[':ref']['analytics']['endpoints']['metrics']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['analytics']['endpoints']['metrics']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.projects)[':ref']['analytics']['endpoints']['metrics']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefAnalyticsEndpointsMetricsQueryKey>
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
      ...getV1ProjectsRefAnalyticsEndpointsMetricsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ProjectsRefAnalyticsEndpointsMetrics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.projects)[':ref']['analytics']['endpoints']['metrics']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['analytics']['endpoints']['metrics']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.projects)[':ref']['analytics']['endpoints']['metrics']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefAnalyticsEndpointsMetricsQueryKey>
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
      ...getV1ProjectsRefAnalyticsEndpointsMetricsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV1ProjectsRefCliLoginRoleMutationKey() {
  return ['v1', '/v1/projects/:ref/cli/login-role', 'POST'] as const
}

export function getPostV1ProjectsRefCliLoginRoleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['cli']['login-role']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.projects)[':ref']['cli']['login-role']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsRefCliLoginRoleMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.projects)[':ref']['cli']['login-role']['$post']>,
    ) {
      return parseResponse(client.v1.projects[':ref'].cli['login-role'].$post(args, options))
    },
  })
}

export function usePostV1ProjectsRefCliLoginRole<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.projects)[':ref']['cli']['login-role']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.projects)[':ref']['cli']['login-role']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ProjectsRefCliLoginRoleMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV1ProjectsRefCliLoginRoleMutationKey() {
  return ['v1', '/v1/projects/:ref/cli/login-role', 'DELETE'] as const
}

export function getDeleteV1ProjectsRefCliLoginRoleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['cli']['login-role']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.projects)[':ref']['cli']['login-role']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ProjectsRefCliLoginRoleMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.projects)[':ref']['cli']['login-role']['$delete']>,
    ) {
      return parseResponse(client.v1.projects[':ref'].cli['login-role'].$delete(args, options))
    },
  })
}

export function useDeleteV1ProjectsRefCliLoginRole<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.projects)[':ref']['cli']['login-role']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.projects)[':ref']['cli']['login-role']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1ProjectsRefCliLoginRoleMutationOptions<
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

export function getV1ProjectsRefDatabaseMigrationsQueryKey(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['database']['migrations']['$get']>,
) {
  return ['v1', '/v1/projects/:ref/database/migrations', args] as const
}

export function getV1ProjectsRefDatabaseMigrationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':ref']['database']['migrations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['database']['migrations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['database']['migrations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsRefDatabaseMigrationsQueryKey>
  >({
    queryKey: getV1ProjectsRefDatabaseMigrationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':ref'].database.migrations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ProjectsRefDatabaseMigrations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':ref']['database']['migrations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['database']['migrations']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.projects)[':ref']['database']['migrations']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefDatabaseMigrationsQueryKey>
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
      ...getV1ProjectsRefDatabaseMigrationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ProjectsRefDatabaseMigrations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':ref']['database']['migrations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['database']['migrations']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.projects)[':ref']['database']['migrations']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefDatabaseMigrationsQueryKey>
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
      ...getV1ProjectsRefDatabaseMigrationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutV1ProjectsRefDatabaseMigrationsMutationKey() {
  return ['v1', '/v1/projects/:ref/database/migrations', 'PUT'] as const
}

export function getPutV1ProjectsRefDatabaseMigrationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['database']['migrations']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.projects)[':ref']['database']['migrations']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1ProjectsRefDatabaseMigrationsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.projects)[':ref']['database']['migrations']['$put']>,
    ) {
      return parseResponse(client.v1.projects[':ref'].database.migrations.$put(args, options))
    },
  })
}

export function usePutV1ProjectsRefDatabaseMigrations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.projects)[':ref']['database']['migrations']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.projects)[':ref']['database']['migrations']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1ProjectsRefDatabaseMigrationsMutationOptions<
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

export function getPostV1ProjectsRefDatabaseMigrationsMutationKey() {
  return ['v1', '/v1/projects/:ref/database/migrations', 'POST'] as const
}

export function getPostV1ProjectsRefDatabaseMigrationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.projects)[':ref']['database']['migrations']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.projects)[':ref']['database']['migrations']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsRefDatabaseMigrationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':ref']['database']['migrations']['$post']
      >,
    ) {
      return parseResponse(client.v1.projects[':ref'].database.migrations.$post(args, options))
    },
  })
}

export function usePostV1ProjectsRefDatabaseMigrations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.projects)[':ref']['database']['migrations']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.projects)[':ref']['database']['migrations']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ProjectsRefDatabaseMigrationsMutationOptions<
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

export function getDeleteV1ProjectsRefDatabaseMigrationsMutationKey() {
  return ['v1', '/v1/projects/:ref/database/migrations', 'DELETE'] as const
}

export function getDeleteV1ProjectsRefDatabaseMigrationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.projects)[':ref']['database']['migrations']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.projects)[':ref']['database']['migrations']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ProjectsRefDatabaseMigrationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':ref']['database']['migrations']['$delete']
      >,
    ) {
      return parseResponse(client.v1.projects[':ref'].database.migrations.$delete(args, options))
    },
  })
}

export function useDeleteV1ProjectsRefDatabaseMigrations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.projects)[':ref']['database']['migrations']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.projects)[':ref']['database']['migrations']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1ProjectsRefDatabaseMigrationsMutationOptions<
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

export function getV1ProjectsRefDatabaseMigrationsVersionQueryKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['database']['migrations'][':version']['$get']
  >,
) {
  return ['v1', '/v1/projects/:ref/database/migrations/:version', args] as const
}

export function getV1ProjectsRefDatabaseMigrationsVersionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.projects)[':ref']['database']['migrations'][':version']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['database']['migrations'][':version']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':ref']['database']['migrations'][':version']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsRefDatabaseMigrationsVersionQueryKey>
  >({
    queryKey: getV1ProjectsRefDatabaseMigrationsVersionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':ref'].database.migrations[':version'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ProjectsRefDatabaseMigrationsVersion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.projects)[':ref']['database']['migrations'][':version']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['database']['migrations'][':version']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.projects)[':ref']['database']['migrations'][':version']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefDatabaseMigrationsVersionQueryKey>
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
      ...getV1ProjectsRefDatabaseMigrationsVersionQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ProjectsRefDatabaseMigrationsVersion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.projects)[':ref']['database']['migrations'][':version']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['database']['migrations'][':version']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.projects)[':ref']['database']['migrations'][':version']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefDatabaseMigrationsVersionQueryKey>
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
      ...getV1ProjectsRefDatabaseMigrationsVersionQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPatchV1ProjectsRefDatabaseMigrationsVersionMutationKey() {
  return ['v1', '/v1/projects/:ref/database/migrations/:version', 'PATCH'] as const
}

export function getPatchV1ProjectsRefDatabaseMigrationsVersionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':ref']['database']['migrations'][':version']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.projects)[':ref']['database']['migrations'][':version']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchV1ProjectsRefDatabaseMigrationsVersionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':ref']['database']['migrations'][':version']['$patch']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':ref'].database.migrations[':version'].$patch(args, options),
      )
    },
  })
}

export function usePatchV1ProjectsRefDatabaseMigrationsVersion<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.projects)[':ref']['database']['migrations'][':version']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.projects)[':ref']['database']['migrations'][':version']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV1ProjectsRefDatabaseMigrationsVersionMutationOptions<
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

export function getPostV1ProjectsRefDatabaseQueryMutationKey() {
  return ['v1', '/v1/projects/:ref/database/query', 'POST'] as const
}

export function getPostV1ProjectsRefDatabaseQueryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['database']['query']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.projects)[':ref']['database']['query']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsRefDatabaseQueryMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.projects)[':ref']['database']['query']['$post']>,
    ) {
      return parseResponse(client.v1.projects[':ref'].database.query.$post(args, options))
    },
  })
}

export function usePostV1ProjectsRefDatabaseQuery<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.projects)[':ref']['database']['query']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.projects)[':ref']['database']['query']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ProjectsRefDatabaseQueryMutationOptions<
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

export function getPostV1ProjectsRefDatabaseQueryReadOnlyMutationKey() {
  return ['v1', '/v1/projects/:ref/database/query/read-only', 'POST'] as const
}

export function getPostV1ProjectsRefDatabaseQueryReadOnlyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':ref']['database']['query']['read-only']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.projects)[':ref']['database']['query']['read-only']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsRefDatabaseQueryReadOnlyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':ref']['database']['query']['read-only']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':ref'].database.query['read-only'].$post(args, options),
      )
    },
  })
}

export function usePostV1ProjectsRefDatabaseQueryReadOnly<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.projects)[':ref']['database']['query']['read-only']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.projects)[':ref']['database']['query']['read-only']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ProjectsRefDatabaseQueryReadOnlyMutationOptions<
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

export function getPostV1ProjectsRefDatabaseWebhooksEnableMutationKey() {
  return ['v1', '/v1/projects/:ref/database/webhooks/enable', 'POST'] as const
}

export function getPostV1ProjectsRefDatabaseWebhooksEnableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':ref']['database']['webhooks']['enable']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.projects)[':ref']['database']['webhooks']['enable']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsRefDatabaseWebhooksEnableMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':ref']['database']['webhooks']['enable']['$post']
      >,
    ) {
      return parseResponse(client.v1.projects[':ref'].database.webhooks.enable.$post(args, options))
    },
  })
}

export function usePostV1ProjectsRefDatabaseWebhooksEnable<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.projects)[':ref']['database']['webhooks']['enable']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.projects)[':ref']['database']['webhooks']['enable']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ProjectsRefDatabaseWebhooksEnableMutationOptions<
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

export function getV1ProjectsRefDatabaseContextQueryKey(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['database']['context']['$get']>,
) {
  return ['v1', '/v1/projects/:ref/database/context', args] as const
}

export function getV1ProjectsRefDatabaseContextQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':ref']['database']['context']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['database']['context']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['database']['context']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsRefDatabaseContextQueryKey>
  >({
    queryKey: getV1ProjectsRefDatabaseContextQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':ref'].database.context.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ProjectsRefDatabaseContext<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':ref']['database']['context']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['database']['context']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.projects)[':ref']['database']['context']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefDatabaseContextQueryKey>
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
      ...getV1ProjectsRefDatabaseContextQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ProjectsRefDatabaseContext<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':ref']['database']['context']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['database']['context']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.projects)[':ref']['database']['context']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefDatabaseContextQueryKey>
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
      ...getV1ProjectsRefDatabaseContextQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPatchV1ProjectsRefDatabasePasswordMutationKey() {
  return ['v1', '/v1/projects/:ref/database/password', 'PATCH'] as const
}

export function getPatchV1ProjectsRefDatabasePasswordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['database']['password']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.projects)[':ref']['database']['password']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1ProjectsRefDatabasePasswordMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.projects)[':ref']['database']['password']['$patch']>,
    ) {
      return parseResponse(client.v1.projects[':ref'].database.password.$patch(args, options))
    },
  })
}

export function usePatchV1ProjectsRefDatabasePassword<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.projects)[':ref']['database']['password']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.projects)[':ref']['database']['password']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV1ProjectsRefDatabasePasswordMutationOptions<
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

export function getV1ProjectsRefDatabaseJitQueryKey(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['database']['jit']['$get']>,
) {
  return ['v1', '/v1/projects/:ref/database/jit', args] as const
}

export function getV1ProjectsRefDatabaseJitQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':ref']['database']['jit']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['database']['jit']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['database']['jit']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsRefDatabaseJitQueryKey>
  >({
    queryKey: getV1ProjectsRefDatabaseJitQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':ref'].database.jit.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ProjectsRefDatabaseJit<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':ref']['database']['jit']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['database']['jit']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.projects)[':ref']['database']['jit']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefDatabaseJitQueryKey>
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
      ...getV1ProjectsRefDatabaseJitQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ProjectsRefDatabaseJit<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':ref']['database']['jit']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['database']['jit']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.projects)[':ref']['database']['jit']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefDatabaseJitQueryKey>
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
      ...getV1ProjectsRefDatabaseJitQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutV1ProjectsRefDatabaseJitMutationKey() {
  return ['v1', '/v1/projects/:ref/database/jit', 'PUT'] as const
}

export function getPutV1ProjectsRefDatabaseJitMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['database']['jit']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.projects)[':ref']['database']['jit']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1ProjectsRefDatabaseJitMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.projects)[':ref']['database']['jit']['$put']>,
    ) {
      return parseResponse(client.v1.projects[':ref'].database.jit.$put(args, options))
    },
  })
}

export function usePutV1ProjectsRefDatabaseJit<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.projects)[':ref']['database']['jit']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.projects)[':ref']['database']['jit']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1ProjectsRefDatabaseJitMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1ProjectsRefDatabaseJitMutationKey() {
  return ['v1', '/v1/projects/:ref/database/jit', 'POST'] as const
}

export function getPostV1ProjectsRefDatabaseJitMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['database']['jit']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.projects)[':ref']['database']['jit']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsRefDatabaseJitMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.projects)[':ref']['database']['jit']['$post']>,
    ) {
      return parseResponse(client.v1.projects[':ref'].database.jit.$post(args, options))
    },
  })
}

export function usePostV1ProjectsRefDatabaseJit<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.projects)[':ref']['database']['jit']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.projects)[':ref']['database']['jit']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ProjectsRefDatabaseJitMutationOptions<TError, TOnMutateResult>(
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

export function getV1ProjectsRefDatabaseJitListQueryKey(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['database']['jit']['list']['$get']>,
) {
  return ['v1', '/v1/projects/:ref/database/jit/list', args] as const
}

export function getV1ProjectsRefDatabaseJitListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':ref']['database']['jit']['list']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['database']['jit']['list']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.projects)[':ref']['database']['jit']['list']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsRefDatabaseJitListQueryKey>
  >({
    queryKey: getV1ProjectsRefDatabaseJitListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':ref'].database.jit.list.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ProjectsRefDatabaseJitList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':ref']['database']['jit']['list']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['database']['jit']['list']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.projects)[':ref']['database']['jit']['list']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefDatabaseJitListQueryKey>
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
      ...getV1ProjectsRefDatabaseJitListQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ProjectsRefDatabaseJitList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':ref']['database']['jit']['list']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['database']['jit']['list']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.projects)[':ref']['database']['jit']['list']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefDatabaseJitListQueryKey>
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
      ...getV1ProjectsRefDatabaseJitListQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV1ProjectsRefDatabaseJitInviteMutationKey() {
  return ['v1', '/v1/projects/:ref/database/jit/invite', 'POST'] as const
}

export function getPostV1ProjectsRefDatabaseJitInviteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.projects)[':ref']['database']['jit']['invite']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.projects)[':ref']['database']['jit']['invite']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsRefDatabaseJitInviteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':ref']['database']['jit']['invite']['$post']
      >,
    ) {
      return parseResponse(client.v1.projects[':ref'].database.jit.invite.$post(args, options))
    },
  })
}

export function usePostV1ProjectsRefDatabaseJitInvite<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.projects)[':ref']['database']['jit']['invite']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.projects)[':ref']['database']['jit']['invite']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ProjectsRefDatabaseJitInviteMutationOptions<
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

export function getPostV1ProjectsRefDatabaseJitInviteAcceptMutationKey() {
  return ['v1', '/v1/projects/:ref/database/jit/invite/accept', 'POST'] as const
}

export function getPostV1ProjectsRefDatabaseJitInviteAcceptMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':ref']['database']['jit']['invite']['accept']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.projects)[':ref']['database']['jit']['invite']['accept']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsRefDatabaseJitInviteAcceptMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':ref']['database']['jit']['invite']['accept']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':ref'].database.jit.invite.accept.$post(args, options),
      )
    },
  })
}

export function usePostV1ProjectsRefDatabaseJitInviteAccept<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.projects)[':ref']['database']['jit']['invite']['accept']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.projects)[':ref']['database']['jit']['invite']['accept']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ProjectsRefDatabaseJitInviteAcceptMutationOptions<
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

export function getDeleteV1ProjectsRefDatabaseJitInviteInviteIdMutationKey() {
  return ['v1', '/v1/projects/:ref/database/jit/invite/:invite_id', 'DELETE'] as const
}

export function getDeleteV1ProjectsRefDatabaseJitInviteInviteIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':ref']['database']['jit']['invite'][':invite_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.projects)[':ref']['database']['jit']['invite'][':invite_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ProjectsRefDatabaseJitInviteInviteIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':ref']['database']['jit']['invite'][':invite_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':ref'].database.jit.invite[':invite_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV1ProjectsRefDatabaseJitInviteInviteId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.projects)[':ref']['database']['jit']['invite'][':invite_id']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.projects)[':ref']['database']['jit']['invite'][':invite_id']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1ProjectsRefDatabaseJitInviteInviteIdMutationOptions<
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

export function getDeleteV1ProjectsRefDatabaseJitUserIdMutationKey() {
  return ['v1', '/v1/projects/:ref/database/jit/:user_id', 'DELETE'] as const
}

export function getDeleteV1ProjectsRefDatabaseJitUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':ref']['database']['jit'][':user_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.projects)[':ref']['database']['jit'][':user_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ProjectsRefDatabaseJitUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':ref']['database']['jit'][':user_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':ref'].database.jit[':user_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV1ProjectsRefDatabaseJitUserId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.projects)[':ref']['database']['jit'][':user_id']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.projects)[':ref']['database']['jit'][':user_id']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1ProjectsRefDatabaseJitUserIdMutationOptions<
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

export function getV1ProjectsRefDatabaseOpenapiQueryKey(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['database']['openapi']['$get']>,
) {
  return ['v1', '/v1/projects/:ref/database/openapi', args] as const
}

export function getV1ProjectsRefDatabaseOpenapiQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':ref']['database']['openapi']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['database']['openapi']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['database']['openapi']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsRefDatabaseOpenapiQueryKey>
  >({
    queryKey: getV1ProjectsRefDatabaseOpenapiQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':ref'].database.openapi.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ProjectsRefDatabaseOpenapi<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':ref']['database']['openapi']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['database']['openapi']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.projects)[':ref']['database']['openapi']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefDatabaseOpenapiQueryKey>
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
      ...getV1ProjectsRefDatabaseOpenapiQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ProjectsRefDatabaseOpenapi<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':ref']['database']['openapi']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['database']['openapi']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.projects)[':ref']['database']['openapi']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefDatabaseOpenapiQueryKey>
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
      ...getV1ProjectsRefDatabaseOpenapiQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1ProjectsRefFunctionsQueryKey(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['functions']['$get']>,
) {
  return ['v1', '/v1/projects/:ref/functions', args] as const
}

export function getV1ProjectsRefFunctionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':ref']['functions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['functions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['functions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsRefFunctionsQueryKey>
  >({
    queryKey: getV1ProjectsRefFunctionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':ref'].functions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ProjectsRefFunctions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':ref']['functions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['functions']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.projects)[':ref']['functions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefFunctionsQueryKey>
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
      ...getV1ProjectsRefFunctionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ProjectsRefFunctions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':ref']['functions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['functions']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.projects)[':ref']['functions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefFunctionsQueryKey>
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
      ...getV1ProjectsRefFunctionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutV1ProjectsRefFunctionsMutationKey() {
  return ['v1', '/v1/projects/:ref/functions', 'PUT'] as const
}

export function getPutV1ProjectsRefFunctionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['functions']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.projects)[':ref']['functions']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1ProjectsRefFunctionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.projects)[':ref']['functions']['$put']>,
    ) {
      return parseResponse(client.v1.projects[':ref'].functions.$put(args, options))
    },
  })
}

export function usePutV1ProjectsRefFunctions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.projects)[':ref']['functions']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.projects)[':ref']['functions']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1ProjectsRefFunctionsMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1ProjectsRefFunctionsMutationKey() {
  return ['v1', '/v1/projects/:ref/functions', 'POST'] as const
}

export function getPostV1ProjectsRefFunctionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['functions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.projects)[':ref']['functions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsRefFunctionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.projects)[':ref']['functions']['$post']>,
    ) {
      return parseResponse(client.v1.projects[':ref'].functions.$post(args, options))
    },
  })
}

export function usePostV1ProjectsRefFunctions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.projects)[':ref']['functions']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.projects)[':ref']['functions']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ProjectsRefFunctionsMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV1ProjectsRefFunctionsMutationKey() {
  return ['v1', '/v1/projects/:ref/functions', 'DELETE'] as const
}

export function getDeleteV1ProjectsRefFunctionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['functions']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.projects)[':ref']['functions']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ProjectsRefFunctionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.projects)[':ref']['functions']['$delete']>,
    ) {
      return parseResponse(client.v1.projects[':ref'].functions.$delete(args, options))
    },
  })
}

export function useDeleteV1ProjectsRefFunctions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.projects)[':ref']['functions']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1.projects)[':ref']['functions']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1ProjectsRefFunctionsMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1ProjectsRefFunctionsDeployMutationKey() {
  return ['v1', '/v1/projects/:ref/functions/deploy', 'POST'] as const
}

export function getPostV1ProjectsRefFunctionsDeployMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['functions']['deploy']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.projects)[':ref']['functions']['deploy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsRefFunctionsDeployMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.projects)[':ref']['functions']['deploy']['$post']>,
    ) {
      return parseResponse(client.v1.projects[':ref'].functions.deploy.$post(args, options))
    },
  })
}

export function usePostV1ProjectsRefFunctionsDeploy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.projects)[':ref']['functions']['deploy']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.projects)[':ref']['functions']['deploy']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ProjectsRefFunctionsDeployMutationOptions<
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

export function getV1ProjectsRefFunctionsFunctionSlugQueryKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['functions'][':function_slug']['$get']
  >,
) {
  return ['v1', '/v1/projects/:ref/functions/:function_slug', args] as const
}

export function getV1ProjectsRefFunctionsFunctionSlugQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.projects)[':ref']['functions'][':function_slug']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['functions'][':function_slug']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.projects)[':ref']['functions'][':function_slug']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsRefFunctionsFunctionSlugQueryKey>
  >({
    queryKey: getV1ProjectsRefFunctionsFunctionSlugQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':ref'].functions[':function_slug'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ProjectsRefFunctionsFunctionSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.projects)[':ref']['functions'][':function_slug']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['functions'][':function_slug']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.projects)[':ref']['functions'][':function_slug']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefFunctionsFunctionSlugQueryKey>
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
      ...getV1ProjectsRefFunctionsFunctionSlugQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ProjectsRefFunctionsFunctionSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.projects)[':ref']['functions'][':function_slug']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['functions'][':function_slug']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.projects)[':ref']['functions'][':function_slug']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefFunctionsFunctionSlugQueryKey>
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
      ...getV1ProjectsRefFunctionsFunctionSlugQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteV1ProjectsRefFunctionsFunctionSlugMutationKey() {
  return ['v1', '/v1/projects/:ref/functions/:function_slug', 'DELETE'] as const
}

export function getDeleteV1ProjectsRefFunctionsFunctionSlugMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':ref']['functions'][':function_slug']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.projects)[':ref']['functions'][':function_slug']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ProjectsRefFunctionsFunctionSlugMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':ref']['functions'][':function_slug']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':ref'].functions[':function_slug'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV1ProjectsRefFunctionsFunctionSlug<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.projects)[':ref']['functions'][':function_slug']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.projects)[':ref']['functions'][':function_slug']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1ProjectsRefFunctionsFunctionSlugMutationOptions<
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

export function getPatchV1ProjectsRefFunctionsFunctionSlugMutationKey() {
  return ['v1', '/v1/projects/:ref/functions/:function_slug', 'PATCH'] as const
}

export function getPatchV1ProjectsRefFunctionsFunctionSlugMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.projects)[':ref']['functions'][':function_slug']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.projects)[':ref']['functions'][':function_slug']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1ProjectsRefFunctionsFunctionSlugMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':ref']['functions'][':function_slug']['$patch']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':ref'].functions[':function_slug'].$patch(args, options),
      )
    },
  })
}

export function usePatchV1ProjectsRefFunctionsFunctionSlug<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.projects)[':ref']['functions'][':function_slug']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.projects)[':ref']['functions'][':function_slug']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV1ProjectsRefFunctionsFunctionSlugMutationOptions<
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

export function getV1ProjectsRefFunctionsFunctionSlugBodyQueryKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['functions'][':function_slug']['body']['$get']
  >,
) {
  return ['v1', '/v1/projects/:ref/functions/:function_slug/body', args] as const
}

export function getV1ProjectsRefFunctionsFunctionSlugBodyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.projects)[':ref']['functions'][':function_slug']['body']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['functions'][':function_slug']['body']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':ref']['functions'][':function_slug']['body']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsRefFunctionsFunctionSlugBodyQueryKey>
  >({
    queryKey: getV1ProjectsRefFunctionsFunctionSlugBodyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':ref'].functions[':function_slug'].body.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ProjectsRefFunctionsFunctionSlugBody<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.projects)[':ref']['functions'][':function_slug']['body']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['functions'][':function_slug']['body']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.projects)[':ref']['functions'][':function_slug']['body']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefFunctionsFunctionSlugBodyQueryKey>
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
      ...getV1ProjectsRefFunctionsFunctionSlugBodyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ProjectsRefFunctionsFunctionSlugBody<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.projects)[':ref']['functions'][':function_slug']['body']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['functions'][':function_slug']['body']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.projects)[':ref']['functions'][':function_slug']['body']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefFunctionsFunctionSlugBodyQueryKey>
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
      ...getV1ProjectsRefFunctionsFunctionSlugBodyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1ProjectsRefStorageBucketsQueryKey(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['storage']['buckets']['$get']>,
) {
  return ['v1', '/v1/projects/:ref/storage/buckets', args] as const
}

export function getV1ProjectsRefStorageBucketsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':ref']['storage']['buckets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['storage']['buckets']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['storage']['buckets']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsRefStorageBucketsQueryKey>
  >({
    queryKey: getV1ProjectsRefStorageBucketsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':ref'].storage.buckets.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ProjectsRefStorageBuckets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':ref']['storage']['buckets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['storage']['buckets']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.projects)[':ref']['storage']['buckets']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefStorageBucketsQueryKey>
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
      ...getV1ProjectsRefStorageBucketsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ProjectsRefStorageBuckets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':ref']['storage']['buckets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['storage']['buckets']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.projects)[':ref']['storage']['buckets']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefStorageBucketsQueryKey>
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
      ...getV1ProjectsRefStorageBucketsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1ProjectsRefConfigDiskQueryKey(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['config']['disk']['$get']>,
) {
  return ['v1', '/v1/projects/:ref/config/disk', args] as const
}

export function getV1ProjectsRefConfigDiskQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':ref']['config']['disk']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['config']['disk']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['config']['disk']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsRefConfigDiskQueryKey>
  >({
    queryKey: getV1ProjectsRefConfigDiskQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':ref'].config.disk.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ProjectsRefConfigDisk<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':ref']['config']['disk']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['config']['disk']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.projects)[':ref']['config']['disk']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefConfigDiskQueryKey>
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
      ...getV1ProjectsRefConfigDiskQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ProjectsRefConfigDisk<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':ref']['config']['disk']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['config']['disk']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.projects)[':ref']['config']['disk']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefConfigDiskQueryKey>
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
      ...getV1ProjectsRefConfigDiskQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV1ProjectsRefConfigDiskMutationKey() {
  return ['v1', '/v1/projects/:ref/config/disk', 'POST'] as const
}

export function getPostV1ProjectsRefConfigDiskMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['config']['disk']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.projects)[':ref']['config']['disk']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsRefConfigDiskMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.projects)[':ref']['config']['disk']['$post']>,
    ) {
      return parseResponse(client.v1.projects[':ref'].config.disk.$post(args, options))
    },
  })
}

export function usePostV1ProjectsRefConfigDisk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.projects)[':ref']['config']['disk']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.projects)[':ref']['config']['disk']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ProjectsRefConfigDiskMutationOptions<TError, TOnMutateResult>(
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

export function getV1ProjectsRefConfigDiskUtilQueryKey(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['config']['disk']['util']['$get']>,
) {
  return ['v1', '/v1/projects/:ref/config/disk/util', args] as const
}

export function getV1ProjectsRefConfigDiskUtilQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':ref']['config']['disk']['util']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['config']['disk']['util']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['config']['disk']['util']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsRefConfigDiskUtilQueryKey>
  >({
    queryKey: getV1ProjectsRefConfigDiskUtilQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':ref'].config.disk.util.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ProjectsRefConfigDiskUtil<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':ref']['config']['disk']['util']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['config']['disk']['util']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.projects)[':ref']['config']['disk']['util']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefConfigDiskUtilQueryKey>
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
      ...getV1ProjectsRefConfigDiskUtilQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ProjectsRefConfigDiskUtil<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':ref']['config']['disk']['util']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['config']['disk']['util']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.projects)[':ref']['config']['disk']['util']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefConfigDiskUtilQueryKey>
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
      ...getV1ProjectsRefConfigDiskUtilQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1ProjectsRefConfigDiskAutoscaleQueryKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['config']['disk']['autoscale']['$get']
  >,
) {
  return ['v1', '/v1/projects/:ref/config/disk/autoscale', args] as const
}

export function getV1ProjectsRefConfigDiskAutoscaleQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.projects)[':ref']['config']['disk']['autoscale']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['config']['disk']['autoscale']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.projects)[':ref']['config']['disk']['autoscale']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsRefConfigDiskAutoscaleQueryKey>
  >({
    queryKey: getV1ProjectsRefConfigDiskAutoscaleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':ref'].config.disk.autoscale.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ProjectsRefConfigDiskAutoscale<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.projects)[':ref']['config']['disk']['autoscale']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['config']['disk']['autoscale']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.projects)[':ref']['config']['disk']['autoscale']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefConfigDiskAutoscaleQueryKey>
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
      ...getV1ProjectsRefConfigDiskAutoscaleQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ProjectsRefConfigDiskAutoscale<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.projects)[':ref']['config']['disk']['autoscale']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['config']['disk']['autoscale']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.projects)[':ref']['config']['disk']['autoscale']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefConfigDiskAutoscaleQueryKey>
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
      ...getV1ProjectsRefConfigDiskAutoscaleQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1ProjectsRefConfigStorageQueryKey(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['config']['storage']['$get']>,
) {
  return ['v1', '/v1/projects/:ref/config/storage', args] as const
}

export function getV1ProjectsRefConfigStorageQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':ref']['config']['storage']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['config']['storage']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['config']['storage']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsRefConfigStorageQueryKey>
  >({
    queryKey: getV1ProjectsRefConfigStorageQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':ref'].config.storage.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ProjectsRefConfigStorage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':ref']['config']['storage']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['config']['storage']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.projects)[':ref']['config']['storage']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefConfigStorageQueryKey>
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
      ...getV1ProjectsRefConfigStorageQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ProjectsRefConfigStorage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':ref']['config']['storage']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['config']['storage']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.projects)[':ref']['config']['storage']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefConfigStorageQueryKey>
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
      ...getV1ProjectsRefConfigStorageQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPatchV1ProjectsRefConfigStorageMutationKey() {
  return ['v1', '/v1/projects/:ref/config/storage', 'PATCH'] as const
}

export function getPatchV1ProjectsRefConfigStorageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['config']['storage']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.projects)[':ref']['config']['storage']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1ProjectsRefConfigStorageMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.projects)[':ref']['config']['storage']['$patch']>,
    ) {
      return parseResponse(client.v1.projects[':ref'].config.storage.$patch(args, options))
    },
  })
}

export function usePatchV1ProjectsRefConfigStorage<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.projects)[':ref']['config']['storage']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.projects)[':ref']['config']['storage']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV1ProjectsRefConfigStorageMutationOptions<
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

export function getV1ProjectsRefConfigDatabasePgbouncerQueryKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['config']['database']['pgbouncer']['$get']
  >,
) {
  return ['v1', '/v1/projects/:ref/config/database/pgbouncer', args] as const
}

export function getV1ProjectsRefConfigDatabasePgbouncerQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.projects)[':ref']['config']['database']['pgbouncer']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['config']['database']['pgbouncer']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':ref']['config']['database']['pgbouncer']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsRefConfigDatabasePgbouncerQueryKey>
  >({
    queryKey: getV1ProjectsRefConfigDatabasePgbouncerQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':ref'].config.database.pgbouncer.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ProjectsRefConfigDatabasePgbouncer<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.projects)[':ref']['config']['database']['pgbouncer']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['config']['database']['pgbouncer']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.projects)[':ref']['config']['database']['pgbouncer']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefConfigDatabasePgbouncerQueryKey>
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
      ...getV1ProjectsRefConfigDatabasePgbouncerQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ProjectsRefConfigDatabasePgbouncer<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.projects)[':ref']['config']['database']['pgbouncer']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['config']['database']['pgbouncer']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.projects)[':ref']['config']['database']['pgbouncer']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefConfigDatabasePgbouncerQueryKey>
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
      ...getV1ProjectsRefConfigDatabasePgbouncerQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1ProjectsRefConfigDatabasePoolerQueryKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['config']['database']['pooler']['$get']
  >,
) {
  return ['v1', '/v1/projects/:ref/config/database/pooler', args] as const
}

export function getV1ProjectsRefConfigDatabasePoolerQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.projects)[':ref']['config']['database']['pooler']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['config']['database']['pooler']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.projects)[':ref']['config']['database']['pooler']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsRefConfigDatabasePoolerQueryKey>
  >({
    queryKey: getV1ProjectsRefConfigDatabasePoolerQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':ref'].config.database.pooler.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ProjectsRefConfigDatabasePooler<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.projects)[':ref']['config']['database']['pooler']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['config']['database']['pooler']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.projects)[':ref']['config']['database']['pooler']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefConfigDatabasePoolerQueryKey>
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
      ...getV1ProjectsRefConfigDatabasePoolerQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ProjectsRefConfigDatabasePooler<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.projects)[':ref']['config']['database']['pooler']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['config']['database']['pooler']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.projects)[':ref']['config']['database']['pooler']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefConfigDatabasePoolerQueryKey>
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
      ...getV1ProjectsRefConfigDatabasePoolerQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPatchV1ProjectsRefConfigDatabasePoolerMutationKey() {
  return ['v1', '/v1/projects/:ref/config/database/pooler', 'PATCH'] as const
}

export function getPatchV1ProjectsRefConfigDatabasePoolerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':ref']['config']['database']['pooler']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.projects)[':ref']['config']['database']['pooler']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1ProjectsRefConfigDatabasePoolerMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':ref']['config']['database']['pooler']['$patch']
      >,
    ) {
      return parseResponse(client.v1.projects[':ref'].config.database.pooler.$patch(args, options))
    },
  })
}

export function usePatchV1ProjectsRefConfigDatabasePooler<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.projects)[':ref']['config']['database']['pooler']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.projects)[':ref']['config']['database']['pooler']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV1ProjectsRefConfigDatabasePoolerMutationOptions<
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

export function getV1ProjectsRefConfigDatabasePostgresQueryKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['config']['database']['postgres']['$get']
  >,
) {
  return ['v1', '/v1/projects/:ref/config/database/postgres', args] as const
}

export function getV1ProjectsRefConfigDatabasePostgresQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.projects)[':ref']['config']['database']['postgres']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['config']['database']['postgres']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':ref']['config']['database']['postgres']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsRefConfigDatabasePostgresQueryKey>
  >({
    queryKey: getV1ProjectsRefConfigDatabasePostgresQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':ref'].config.database.postgres.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ProjectsRefConfigDatabasePostgres<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.projects)[':ref']['config']['database']['postgres']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['config']['database']['postgres']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.projects)[':ref']['config']['database']['postgres']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefConfigDatabasePostgresQueryKey>
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
      ...getV1ProjectsRefConfigDatabasePostgresQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ProjectsRefConfigDatabasePostgres<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.projects)[':ref']['config']['database']['postgres']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['config']['database']['postgres']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.projects)[':ref']['config']['database']['postgres']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefConfigDatabasePostgresQueryKey>
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
      ...getV1ProjectsRefConfigDatabasePostgresQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutV1ProjectsRefConfigDatabasePostgresMutationKey() {
  return ['v1', '/v1/projects/:ref/config/database/postgres', 'PUT'] as const
}

export function getPutV1ProjectsRefConfigDatabasePostgresMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':ref']['config']['database']['postgres']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.projects)[':ref']['config']['database']['postgres']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1ProjectsRefConfigDatabasePostgresMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':ref']['config']['database']['postgres']['$put']
      >,
    ) {
      return parseResponse(client.v1.projects[':ref'].config.database.postgres.$put(args, options))
    },
  })
}

export function usePutV1ProjectsRefConfigDatabasePostgres<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.projects)[':ref']['config']['database']['postgres']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.projects)[':ref']['config']['database']['postgres']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1ProjectsRefConfigDatabasePostgresMutationOptions<
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

export function getPatchV1ProjectsRefConfigDatabasePostgresMutationKey() {
  return ['v1', '/v1/projects/:ref/config/database/postgres', 'PATCH'] as const
}

export function getPatchV1ProjectsRefConfigDatabasePostgresMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':ref']['config']['database']['postgres']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.projects)[':ref']['config']['database']['postgres']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchV1ProjectsRefConfigDatabasePostgresMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':ref']['config']['database']['postgres']['$patch']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':ref'].config.database.postgres.$patch(args, options),
      )
    },
  })
}

export function usePatchV1ProjectsRefConfigDatabasePostgres<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.projects)[':ref']['config']['database']['postgres']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.projects)[':ref']['config']['database']['postgres']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV1ProjectsRefConfigDatabasePostgresMutationOptions<
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

export function getV1ProjectsRefConfigRealtimeQueryKey(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['config']['realtime']['$get']>,
) {
  return ['v1', '/v1/projects/:ref/config/realtime', args] as const
}

export function getV1ProjectsRefConfigRealtimeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':ref']['config']['realtime']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['config']['realtime']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['config']['realtime']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsRefConfigRealtimeQueryKey>
  >({
    queryKey: getV1ProjectsRefConfigRealtimeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':ref'].config.realtime.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ProjectsRefConfigRealtime<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':ref']['config']['realtime']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['config']['realtime']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.projects)[':ref']['config']['realtime']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefConfigRealtimeQueryKey>
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
      ...getV1ProjectsRefConfigRealtimeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ProjectsRefConfigRealtime<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':ref']['config']['realtime']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['config']['realtime']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.projects)[':ref']['config']['realtime']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefConfigRealtimeQueryKey>
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
      ...getV1ProjectsRefConfigRealtimeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPatchV1ProjectsRefConfigRealtimeMutationKey() {
  return ['v1', '/v1/projects/:ref/config/realtime', 'PATCH'] as const
}

export function getPatchV1ProjectsRefConfigRealtimeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['config']['realtime']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.projects)[':ref']['config']['realtime']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1ProjectsRefConfigRealtimeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.projects)[':ref']['config']['realtime']['$patch']>,
    ) {
      return parseResponse(client.v1.projects[':ref'].config.realtime.$patch(args, options))
    },
  })
}

export function usePatchV1ProjectsRefConfigRealtime<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.projects)[':ref']['config']['realtime']['$patch']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1.projects)[':ref']['config']['realtime']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV1ProjectsRefConfigRealtimeMutationOptions<
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

export function getPostV1ProjectsRefConfigRealtimeShutdownMutationKey() {
  return ['v1', '/v1/projects/:ref/config/realtime/shutdown', 'POST'] as const
}

export function getPostV1ProjectsRefConfigRealtimeShutdownMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':ref']['config']['realtime']['shutdown']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v1.projects)[':ref']['config']['realtime']['shutdown']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsRefConfigRealtimeShutdownMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':ref']['config']['realtime']['shutdown']['$post']
      >,
    ) {
      return parseResponse(client.v1.projects[':ref'].config.realtime.shutdown.$post(args, options))
    },
  })
}

export function usePostV1ProjectsRefConfigRealtimeShutdown<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.projects)[':ref']['config']['realtime']['shutdown']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v1.projects)[':ref']['config']['realtime']['shutdown']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ProjectsRefConfigRealtimeShutdownMutationOptions<
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

export function getV1ProjectsRefConfigAuthSsoProvidersQueryKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['config']['auth']['sso']['providers']['$get']
  >,
) {
  return ['v1', '/v1/projects/:ref/config/auth/sso/providers', args] as const
}

export function getV1ProjectsRefConfigAuthSsoProvidersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.projects)[':ref']['config']['auth']['sso']['providers']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['config']['auth']['sso']['providers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':ref']['config']['auth']['sso']['providers']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsRefConfigAuthSsoProvidersQueryKey>
  >({
    queryKey: getV1ProjectsRefConfigAuthSsoProvidersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':ref'].config.auth.sso.providers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ProjectsRefConfigAuthSsoProviders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.projects)[':ref']['config']['auth']['sso']['providers']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['config']['auth']['sso']['providers']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.projects)[':ref']['config']['auth']['sso']['providers']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefConfigAuthSsoProvidersQueryKey>
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
      ...getV1ProjectsRefConfigAuthSsoProvidersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ProjectsRefConfigAuthSsoProviders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.projects)[':ref']['config']['auth']['sso']['providers']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['config']['auth']['sso']['providers']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.projects)[':ref']['config']['auth']['sso']['providers']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefConfigAuthSsoProvidersQueryKey>
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
      ...getV1ProjectsRefConfigAuthSsoProvidersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV1ProjectsRefConfigAuthSsoProvidersMutationKey() {
  return ['v1', '/v1/projects/:ref/config/auth/sso/providers', 'POST'] as const
}

export function getPostV1ProjectsRefConfigAuthSsoProvidersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':ref']['config']['auth']['sso']['providers']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.projects)[':ref']['config']['auth']['sso']['providers']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsRefConfigAuthSsoProvidersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':ref']['config']['auth']['sso']['providers']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':ref'].config.auth.sso.providers.$post(args, options),
      )
    },
  })
}

export function usePostV1ProjectsRefConfigAuthSsoProviders<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.projects)[':ref']['config']['auth']['sso']['providers']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.projects)[':ref']['config']['auth']['sso']['providers']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ProjectsRefConfigAuthSsoProvidersMutationOptions<
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

export function getV1ProjectsRefConfigAuthSsoProvidersProviderIdQueryKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['config']['auth']['sso']['providers'][':provider_id']['$get']
  >,
) {
  return ['v1', '/v1/projects/:ref/config/auth/sso/providers/:provider_id', args] as const
}

export function getV1ProjectsRefConfigAuthSsoProvidersProviderIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.projects)[':ref']['config']['auth']['sso']['providers'][':provider_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['config']['auth']['sso']['providers'][':provider_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':ref']['config']['auth']['sso']['providers'][':provider_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsRefConfigAuthSsoProvidersProviderIdQueryKey>
  >({
    queryKey: getV1ProjectsRefConfigAuthSsoProvidersProviderIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':ref'].config.auth.sso.providers[':provider_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ProjectsRefConfigAuthSsoProvidersProviderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.projects)[':ref']['config']['auth']['sso']['providers'][':provider_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['config']['auth']['sso']['providers'][':provider_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.projects)[':ref']['config']['auth']['sso']['providers'][':provider_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefConfigAuthSsoProvidersProviderIdQueryKey>
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
      ...getV1ProjectsRefConfigAuthSsoProvidersProviderIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ProjectsRefConfigAuthSsoProvidersProviderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.projects)[':ref']['config']['auth']['sso']['providers'][':provider_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['config']['auth']['sso']['providers'][':provider_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.projects)[':ref']['config']['auth']['sso']['providers'][':provider_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefConfigAuthSsoProvidersProviderIdQueryKey>
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
      ...getV1ProjectsRefConfigAuthSsoProvidersProviderIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutV1ProjectsRefConfigAuthSsoProvidersProviderIdMutationKey() {
  return ['v1', '/v1/projects/:ref/config/auth/sso/providers/:provider_id', 'PUT'] as const
}

export function getPutV1ProjectsRefConfigAuthSsoProvidersProviderIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':ref']['config']['auth']['sso']['providers'][':provider_id']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.projects)[':ref']['config']['auth']['sso']['providers'][':provider_id']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV1ProjectsRefConfigAuthSsoProvidersProviderIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':ref']['config']['auth']['sso']['providers'][':provider_id']['$put']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':ref'].config.auth.sso.providers[':provider_id'].$put(args, options),
      )
    },
  })
}

export function usePutV1ProjectsRefConfigAuthSsoProvidersProviderId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.projects)[':ref']['config']['auth']['sso']['providers'][':provider_id']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.projects)[':ref']['config']['auth']['sso']['providers'][':provider_id']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1ProjectsRefConfigAuthSsoProvidersProviderIdMutationOptions<
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

export function getDeleteV1ProjectsRefConfigAuthSsoProvidersProviderIdMutationKey() {
  return ['v1', '/v1/projects/:ref/config/auth/sso/providers/:provider_id', 'DELETE'] as const
}

export function getDeleteV1ProjectsRefConfigAuthSsoProvidersProviderIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':ref']['config']['auth']['sso']['providers'][':provider_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.projects)[':ref']['config']['auth']['sso']['providers'][':provider_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ProjectsRefConfigAuthSsoProvidersProviderIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':ref']['config']['auth']['sso']['providers'][':provider_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':ref'].config.auth.sso.providers[':provider_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV1ProjectsRefConfigAuthSsoProvidersProviderId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.projects)[':ref']['config']['auth']['sso']['providers'][':provider_id']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.projects)[':ref']['config']['auth']['sso']['providers'][':provider_id']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1ProjectsRefConfigAuthSsoProvidersProviderIdMutationOptions<
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

export function getV1ProjectsRefDatabaseBackupsQueryKey(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['database']['backups']['$get']>,
) {
  return ['v1', '/v1/projects/:ref/database/backups', args] as const
}

export function getV1ProjectsRefDatabaseBackupsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':ref']['database']['backups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['database']['backups']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['database']['backups']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsRefDatabaseBackupsQueryKey>
  >({
    queryKey: getV1ProjectsRefDatabaseBackupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':ref'].database.backups.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ProjectsRefDatabaseBackups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':ref']['database']['backups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['database']['backups']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.projects)[':ref']['database']['backups']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefDatabaseBackupsQueryKey>
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
      ...getV1ProjectsRefDatabaseBackupsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ProjectsRefDatabaseBackups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':ref']['database']['backups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['database']['backups']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.projects)[':ref']['database']['backups']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefDatabaseBackupsQueryKey>
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
      ...getV1ProjectsRefDatabaseBackupsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV1ProjectsRefDatabaseBackupsRestorePitrMutationKey() {
  return ['v1', '/v1/projects/:ref/database/backups/restore-pitr', 'POST'] as const
}

export function getPostV1ProjectsRefDatabaseBackupsRestorePitrMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':ref']['database']['backups']['restore-pitr']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.projects)[':ref']['database']['backups']['restore-pitr']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsRefDatabaseBackupsRestorePitrMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':ref']['database']['backups']['restore-pitr']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':ref'].database.backups['restore-pitr'].$post(args, options),
      )
    },
  })
}

export function usePostV1ProjectsRefDatabaseBackupsRestorePitr<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.projects)[':ref']['database']['backups']['restore-pitr']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.projects)[':ref']['database']['backups']['restore-pitr']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ProjectsRefDatabaseBackupsRestorePitrMutationOptions<
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

export function getV1ProjectsRefDatabaseBackupsRestorePointQueryKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['database']['backups']['restore-point']['$get']
  >,
) {
  return ['v1', '/v1/projects/:ref/database/backups/restore-point', args] as const
}

export function getV1ProjectsRefDatabaseBackupsRestorePointQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.projects)[':ref']['database']['backups']['restore-point']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['database']['backups']['restore-point']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':ref']['database']['backups']['restore-point']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsRefDatabaseBackupsRestorePointQueryKey>
  >({
    queryKey: getV1ProjectsRefDatabaseBackupsRestorePointQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':ref'].database.backups['restore-point'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ProjectsRefDatabaseBackupsRestorePoint<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.projects)[':ref']['database']['backups']['restore-point']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['database']['backups']['restore-point']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.projects)[':ref']['database']['backups']['restore-point']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefDatabaseBackupsRestorePointQueryKey>
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
      ...getV1ProjectsRefDatabaseBackupsRestorePointQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ProjectsRefDatabaseBackupsRestorePoint<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.projects)[':ref']['database']['backups']['restore-point']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['database']['backups']['restore-point']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.projects)[':ref']['database']['backups']['restore-point']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefDatabaseBackupsRestorePointQueryKey>
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
      ...getV1ProjectsRefDatabaseBackupsRestorePointQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV1ProjectsRefDatabaseBackupsRestorePointMutationKey() {
  return ['v1', '/v1/projects/:ref/database/backups/restore-point', 'POST'] as const
}

export function getPostV1ProjectsRefDatabaseBackupsRestorePointMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':ref']['database']['backups']['restore-point']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.projects)[':ref']['database']['backups']['restore-point']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsRefDatabaseBackupsRestorePointMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':ref']['database']['backups']['restore-point']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':ref'].database.backups['restore-point'].$post(args, options),
      )
    },
  })
}

export function usePostV1ProjectsRefDatabaseBackupsRestorePoint<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.projects)[':ref']['database']['backups']['restore-point']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.projects)[':ref']['database']['backups']['restore-point']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ProjectsRefDatabaseBackupsRestorePointMutationOptions<
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

export function getPostV1ProjectsRefDatabaseBackupsRestoreMutationKey() {
  return ['v1', '/v1/projects/:ref/database/backups/restore', 'POST'] as const
}

export function getPostV1ProjectsRefDatabaseBackupsRestoreMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':ref']['database']['backups']['restore']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.projects)[':ref']['database']['backups']['restore']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsRefDatabaseBackupsRestoreMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':ref']['database']['backups']['restore']['$post']
      >,
    ) {
      return parseResponse(client.v1.projects[':ref'].database.backups.restore.$post(args, options))
    },
  })
}

export function usePostV1ProjectsRefDatabaseBackupsRestore<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.projects)[':ref']['database']['backups']['restore']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.projects)[':ref']['database']['backups']['restore']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ProjectsRefDatabaseBackupsRestoreMutationOptions<
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

export function getV1ProjectsRefDatabaseBackupsScheduleQueryKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['database']['backups']['schedule']['$get']
  >,
) {
  return ['v1', '/v1/projects/:ref/database/backups/schedule', args] as const
}

export function getV1ProjectsRefDatabaseBackupsScheduleQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.projects)[':ref']['database']['backups']['schedule']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['database']['backups']['schedule']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':ref']['database']['backups']['schedule']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsRefDatabaseBackupsScheduleQueryKey>
  >({
    queryKey: getV1ProjectsRefDatabaseBackupsScheduleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':ref'].database.backups.schedule.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ProjectsRefDatabaseBackupsSchedule<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.projects)[':ref']['database']['backups']['schedule']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['database']['backups']['schedule']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.projects)[':ref']['database']['backups']['schedule']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefDatabaseBackupsScheduleQueryKey>
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
      ...getV1ProjectsRefDatabaseBackupsScheduleQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ProjectsRefDatabaseBackupsSchedule<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.projects)[':ref']['database']['backups']['schedule']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['database']['backups']['schedule']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.projects)[':ref']['database']['backups']['schedule']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsRefDatabaseBackupsScheduleQueryKey>
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
      ...getV1ProjectsRefDatabaseBackupsScheduleQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPatchV1ProjectsRefDatabaseBackupsScheduleMutationKey() {
  return ['v1', '/v1/projects/:ref/database/backups/schedule', 'PATCH'] as const
}

export function getPatchV1ProjectsRefDatabaseBackupsScheduleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':ref']['database']['backups']['schedule']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.projects)[':ref']['database']['backups']['schedule']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchV1ProjectsRefDatabaseBackupsScheduleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':ref']['database']['backups']['schedule']['$patch']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':ref'].database.backups.schedule.$patch(args, options),
      )
    },
  })
}

export function usePatchV1ProjectsRefDatabaseBackupsSchedule<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.projects)[':ref']['database']['backups']['schedule']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.projects)[':ref']['database']['backups']['schedule']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV1ProjectsRefDatabaseBackupsScheduleMutationOptions<
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

export function getPostV1ProjectsRefDatabaseBackupsUndoMutationKey() {
  return ['v1', '/v1/projects/:ref/database/backups/undo', 'POST'] as const
}

export function getPostV1ProjectsRefDatabaseBackupsUndoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.projects)[':ref']['database']['backups']['undo']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.projects)[':ref']['database']['backups']['undo']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsRefDatabaseBackupsUndoMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':ref']['database']['backups']['undo']['$post']
      >,
    ) {
      return parseResponse(client.v1.projects[':ref'].database.backups.undo.$post(args, options))
    },
  })
}

export function usePostV1ProjectsRefDatabaseBackupsUndo<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.projects)[':ref']['database']['backups']['undo']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.projects)[':ref']['database']['backups']['undo']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ProjectsRefDatabaseBackupsUndoMutationOptions<
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

export function getV1OrganizationsSlugEntitlementsQueryKey(
  args: InferRequestType<(typeof client.v1.organizations)[':slug']['entitlements']['$get']>,
) {
  return ['v1', '/v1/organizations/:slug/entitlements', args] as const
}

export function getV1OrganizationsSlugEntitlementsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.organizations)[':slug']['entitlements']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.organizations)[':slug']['entitlements']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.organizations)[':slug']['entitlements']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OrganizationsSlugEntitlementsQueryKey>
  >({
    queryKey: getV1OrganizationsSlugEntitlementsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.organizations[':slug'].entitlements.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1OrganizationsSlugEntitlements<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.organizations)[':slug']['entitlements']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.organizations)[':slug']['entitlements']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.organizations)[':slug']['entitlements']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1OrganizationsSlugEntitlementsQueryKey>
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
      ...getV1OrganizationsSlugEntitlementsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1OrganizationsSlugEntitlements<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.organizations)[':slug']['entitlements']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.organizations)[':slug']['entitlements']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.organizations)[':slug']['entitlements']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1OrganizationsSlugEntitlementsQueryKey>
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
      ...getV1OrganizationsSlugEntitlementsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1OrganizationsSlugMembersQueryKey(
  args: InferRequestType<(typeof client.v1.organizations)[':slug']['members']['$get']>,
) {
  return ['v1', '/v1/organizations/:slug/members', args] as const
}

export function getV1OrganizationsSlugMembersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.organizations)[':slug']['members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.organizations)[':slug']['members']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.organizations)[':slug']['members']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OrganizationsSlugMembersQueryKey>
  >({
    queryKey: getV1OrganizationsSlugMembersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.organizations[':slug'].members.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1OrganizationsSlugMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.organizations)[':slug']['members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.organizations)[':slug']['members']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.organizations)[':slug']['members']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1OrganizationsSlugMembersQueryKey>
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
      ...getV1OrganizationsSlugMembersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1OrganizationsSlugMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.organizations)[':slug']['members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.organizations)[':slug']['members']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.organizations)[':slug']['members']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1OrganizationsSlugMembersQueryKey>
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
      ...getV1OrganizationsSlugMembersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1OrganizationsSlugQueryKey(
  args: InferRequestType<(typeof client.v1.organizations)[':slug']['$get']>,
) {
  return ['v1', '/v1/organizations/:slug', args] as const
}

export function getV1OrganizationsSlugQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.organizations)[':slug']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.organizations)[':slug']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.organizations)[':slug']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OrganizationsSlugQueryKey>
  >({
    queryKey: getV1OrganizationsSlugQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.organizations[':slug'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1OrganizationsSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.organizations)[':slug']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.organizations)[':slug']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.organizations)[':slug']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1OrganizationsSlugQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1OrganizationsSlugQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1OrganizationsSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.organizations)[':slug']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.organizations)[':slug']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.organizations)[':slug']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1OrganizationsSlugQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1OrganizationsSlugQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1OrganizationsSlugProjectClaimTokenQueryKey(
  args: InferRequestType<
    (typeof client.v1.organizations)[':slug']['project-claim'][':token']['$get']
  >,
) {
  return ['v1', '/v1/organizations/:slug/project-claim/:token', args] as const
}

export function getV1OrganizationsSlugProjectClaimTokenQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.organizations)[':slug']['project-claim'][':token']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':slug']['project-claim'][':token']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.organizations)[':slug']['project-claim'][':token']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OrganizationsSlugProjectClaimTokenQueryKey>
  >({
    queryKey: getV1OrganizationsSlugProjectClaimTokenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.organizations[':slug']['project-claim'][':token'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1OrganizationsSlugProjectClaimToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.organizations)[':slug']['project-claim'][':token']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':slug']['project-claim'][':token']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.organizations)[':slug']['project-claim'][':token']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1OrganizationsSlugProjectClaimTokenQueryKey>
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
      ...getV1OrganizationsSlugProjectClaimTokenQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1OrganizationsSlugProjectClaimToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.organizations)[':slug']['project-claim'][':token']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':slug']['project-claim'][':token']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.organizations)[':slug']['project-claim'][':token']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1OrganizationsSlugProjectClaimTokenQueryKey>
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
      ...getV1OrganizationsSlugProjectClaimTokenQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV1OrganizationsSlugProjectClaimTokenMutationKey() {
  return ['v1', '/v1/organizations/:slug/project-claim/:token', 'POST'] as const
}

export function getPostV1OrganizationsSlugProjectClaimTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.organizations)[':slug']['project-claim'][':token']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.organizations)[':slug']['project-claim'][':token']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1OrganizationsSlugProjectClaimTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.organizations)[':slug']['project-claim'][':token']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.organizations[':slug']['project-claim'][':token'].$post(args, options),
      )
    },
  })
}

export function usePostV1OrganizationsSlugProjectClaimToken<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.organizations)[':slug']['project-claim'][':token']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v1.organizations)[':slug']['project-claim'][':token']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1OrganizationsSlugProjectClaimTokenMutationOptions<
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

export function getV1OrganizationsSlugProjectsQueryKey(
  args: InferRequestType<(typeof client.v1.organizations)[':slug']['projects']['$get']>,
) {
  return ['v1', '/v1/organizations/:slug/projects', args] as const
}

export function getV1OrganizationsSlugProjectsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.organizations)[':slug']['projects']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.organizations)[':slug']['projects']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.organizations)[':slug']['projects']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OrganizationsSlugProjectsQueryKey>
  >({
    queryKey: getV1OrganizationsSlugProjectsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.organizations[':slug'].projects.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1OrganizationsSlugProjects<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.organizations)[':slug']['projects']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.organizations)[':slug']['projects']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.organizations)[':slug']['projects']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1OrganizationsSlugProjectsQueryKey>
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
      ...getV1OrganizationsSlugProjectsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1OrganizationsSlugProjects<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.organizations)[':slug']['projects']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.organizations)[':slug']['projects']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.organizations)[':slug']['projects']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1OrganizationsSlugProjectsQueryKey>
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
      ...getV1OrganizationsSlugProjectsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}
