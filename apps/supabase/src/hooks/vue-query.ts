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

export function getV1Key() {
  return ['v1'] as const
}

export function getV1BranchesBranchIdOrRefQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.branches)[':branch_id_or_ref']['$get']>
  >,
) {
  return ['v1', '/v1/branches/:branch_id_or_ref', toValue(args)] as const
}

export function getV1BranchesBranchIdOrRefQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.branches)[':branch_id_or_ref']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1BranchesBranchIdOrRefQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.branches[':branch_id_or_ref'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.branches)[':branch_id_or_ref']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.branches)[':branch_id_or_ref']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1BranchesBranchIdOrRefQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.branches)[':branch_id_or_ref']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BranchesBranchIdOrRefQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1BranchesBranchIdOrRefQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.branches[':branch_id_or_ref'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.branches)[':branch_id_or_ref']['push']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.branches)[':branch_id_or_ref']['push']['$post']>,
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.branches)[':branch_id_or_ref']['diff']['$get']>
  >,
) {
  return ['v1', '/v1/branches/:branch_id_or_ref/diff', toValue(args)] as const
}

export function getV1BranchesBranchIdOrRefDiffQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.branches)[':branch_id_or_ref']['diff']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1BranchesBranchIdOrRefDiffQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.branches[':branch_id_or_ref'].diff.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.branches)[':branch_id_or_ref']['diff']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.branches)[':branch_id_or_ref']['diff']['$get']>
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
                  ReturnType<(typeof client.v1.branches)[':branch_id_or_ref']['diff']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1BranchesBranchIdOrRefDiffQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.branches)[':branch_id_or_ref']['diff']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BranchesBranchIdOrRefDiffQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1BranchesBranchIdOrRefDiffQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.branches[':branch_id_or_ref'].diff.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ProjectsQueryKey() {
  return ['v1', '/v1/projects'] as const
}

export function getV1ProjectsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1ProjectsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Projects<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.projects.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.projects.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.projects.$get>>>>
          >,
          ReturnType<typeof getV1ProjectsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.projects.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1ProjectsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.projects.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.projects.$post>,
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)['available-regions']['$get']>
  >,
) {
  return ['v1', '/v1/projects/available-regions', toValue(args)] as const
}

export function getV1ProjectsAvailableRegionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)['available-regions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsAvailableRegionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects['available-regions'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)['available-regions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.projects)['available-regions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ProjectsAvailableRegionsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.projects)['available-regions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsAvailableRegionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsAvailableRegionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects['available-regions'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1OrganizationsQueryKey() {
  return ['v1', '/v1/organizations'] as const
}

export function getV1OrganizationsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1OrganizationsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.organizations.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Organizations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.organizations.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.organizations.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.organizations.$get>>>
            >
          >,
          ReturnType<typeof getV1OrganizationsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.organizations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1OrganizationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1OrganizationsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.organizations.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.oauth.authorize.$get>>,
) {
  return ['v1', '/v1/oauth/authorize', toValue(args)] as const
}

export function getV1OauthAuthorizeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.oauth.authorize.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1OauthAuthorizeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.oauth.authorize.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1OauthAuthorize<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.oauth.authorize.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.oauth.authorize.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.oauth.authorize.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.oauth.authorize.$get>>>
            >
          >,
          ReturnType<typeof getV1OauthAuthorizeQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.oauth.authorize.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1OauthAuthorizeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1OauthAuthorizeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.oauth.authorize.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.oauth.token.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.oauth.token.$post>,
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.oauth.authorize)['project-claim']['$get']>
  >,
) {
  return ['v1', '/v1/oauth/authorize/project-claim', toValue(args)] as const
}

export function getV1OauthAuthorizeProjectClaimQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.oauth.authorize)['project-claim']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1OauthAuthorizeProjectClaimQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.oauth.authorize['project-claim'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.oauth.authorize)['project-claim']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.oauth.authorize)['project-claim']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1OauthAuthorizeProjectClaimQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.oauth.authorize)['project-claim']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OauthAuthorizeProjectClaimQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1OauthAuthorizeProjectClaimQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.oauth.authorize['project-claim'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1SnippetsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.snippets.$get>>,
) {
  return ['v1', '/v1/snippets', toValue(args)] as const
}

export function getV1SnippetsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.snippets.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1SnippetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.snippets.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Snippets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.snippets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.snippets.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.snippets.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.snippets.$get>>>>
          >,
          ReturnType<typeof getV1SnippetsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.snippets.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1SnippetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1SnippetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.snippets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1SnippetsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.snippets)[':id']['$get']>>,
) {
  return ['v1', '/v1/snippets/:id', toValue(args)] as const
}

export function getV1SnippetsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.snippets)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1SnippetsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.snippets[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1SnippetsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.snippets)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.snippets)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.snippets)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.snippets)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getV1SnippetsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.snippets)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1SnippetsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1SnippetsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.snippets[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ProfileQueryKey() {
  return ['v1', '/v1/profile'] as const
}

export function getV1ProfileQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1ProfileQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.profile.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Profile<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.profile.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.profile.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.profile.$get>>>>
          >,
          ReturnType<typeof getV1ProfileQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.profile.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1ProfileQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1ProfileQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.profile.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ProjectsRefActionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.projects)[':ref']['actions']['$get']>>,
) {
  return ['v1', '/v1/projects/:ref/actions', toValue(args)] as const
}

export function getV1ProjectsRefActionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.projects)[':ref']['actions']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsRefActionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':ref'].actions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.projects)[':ref']['actions']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.projects)[':ref']['actions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ProjectsRefActionsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['actions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsRefActionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsRefActionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':ref'].actions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':ref']['actions'][':run_id']['$get']>
  >,
) {
  return ['v1', '/v1/projects/:ref/actions/:run_id', toValue(args)] as const
}

export function getV1ProjectsRefActionsRunIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':ref']['actions'][':run_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsRefActionsRunIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':ref'].actions[':run_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':ref']['actions'][':run_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.projects)[':ref']['actions'][':run_id']['$get']>
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
                  ReturnType<(typeof client.v1.projects)[':ref']['actions'][':run_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1ProjectsRefActionsRunIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['actions'][':run_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsRefActionsRunIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsRefActionsRunIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':ref'].actions[':run_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':ref']['actions'][':run_id']['logs']['$get']>
  >,
) {
  return ['v1', '/v1/projects/:ref/actions/:run_id/logs', toValue(args)] as const
}

export function getV1ProjectsRefActionsRunIdLogsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':ref']['actions'][':run_id']['logs']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsRefActionsRunIdLogsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':ref'].actions[':run_id'].logs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':ref']['actions'][':run_id']['logs']['$get']>
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
                    (typeof client.v1.projects)[':ref']['actions'][':run_id']['logs']['$get']
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
                    (typeof client.v1.projects)[':ref']['actions'][':run_id']['logs']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ProjectsRefActionsRunIdLogsQueryKey>
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
            ReturnType<(typeof client.v1.projects)[':ref']['actions'][':run_id']['logs']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsRefActionsRunIdLogsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsRefActionsRunIdLogsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':ref'].actions[':run_id'].logs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ProjectsRefApiKeysQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.projects)[':ref']['api-keys']['$get']>>,
) {
  return ['v1', '/v1/projects/:ref/api-keys', toValue(args)] as const
}

export function getV1ProjectsRefApiKeysQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.projects)[':ref']['api-keys']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsRefApiKeysQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':ref']['api-keys'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.projects)[':ref']['api-keys']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.projects)[':ref']['api-keys']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ProjectsRefApiKeysQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['api-keys']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsRefApiKeysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsRefApiKeysQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':ref']['api-keys'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':ref']['api-keys']['legacy']['$get']>
  >,
) {
  return ['v1', '/v1/projects/:ref/api-keys/legacy', toValue(args)] as const
}

export function getV1ProjectsRefApiKeysLegacyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':ref']['api-keys']['legacy']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsRefApiKeysLegacyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':ref']['api-keys'].legacy.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':ref']['api-keys']['legacy']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.projects)[':ref']['api-keys']['legacy']['$get']>
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
                  ReturnType<(typeof client.v1.projects)[':ref']['api-keys']['legacy']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1ProjectsRefApiKeysLegacyQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['api-keys']['legacy']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsRefApiKeysLegacyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsRefApiKeysLegacyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':ref']['api-keys'].legacy.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.projects)[':ref']['api-keys']['legacy']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.projects)[':ref']['api-keys']['legacy']['$put']>,
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':ref']['api-keys'][':id']['$get']>
  >,
) {
  return ['v1', '/v1/projects/:ref/api-keys/:id', toValue(args)] as const
}

export function getV1ProjectsRefApiKeysIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':ref']['api-keys'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsRefApiKeysIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':ref']['api-keys'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':ref']['api-keys'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.projects)[':ref']['api-keys'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ProjectsRefApiKeysIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['api-keys'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsRefApiKeysIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsRefApiKeysIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':ref']['api-keys'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.projects)[':ref']['api-keys'][':id']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.projects)[':ref']['api-keys'][':id']['$delete']>,
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.projects)[':ref']['api-keys'][':id']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.projects)[':ref']['api-keys'][':id']['$patch']>,
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.projects)[':ref']['branches']['$get']>>,
) {
  return ['v1', '/v1/projects/:ref/branches', toValue(args)] as const
}

export function getV1ProjectsRefBranchesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.projects)[':ref']['branches']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsRefBranchesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':ref'].branches.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.projects)[':ref']['branches']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.projects)[':ref']['branches']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ProjectsRefBranchesQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['branches']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsRefBranchesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsRefBranchesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':ref'].branches.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':ref']['branches'][':name']['$get']>
  >,
) {
  return ['v1', '/v1/projects/:ref/branches/:name', toValue(args)] as const
}

export function getV1ProjectsRefBranchesNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':ref']['branches'][':name']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsRefBranchesNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':ref'].branches[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':ref']['branches'][':name']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.projects)[':ref']['branches'][':name']['$get']>
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
                  ReturnType<(typeof client.v1.projects)[':ref']['branches'][':name']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1ProjectsRefBranchesNameQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['branches'][':name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsRefBranchesNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsRefBranchesNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':ref'].branches[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ProjectsRefCustomHostnameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':ref']['custom-hostname']['$get']>
  >,
) {
  return ['v1', '/v1/projects/:ref/custom-hostname', toValue(args)] as const
}

export function getV1ProjectsRefCustomHostnameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':ref']['custom-hostname']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsRefCustomHostnameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':ref']['custom-hostname'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':ref']['custom-hostname']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.projects)[':ref']['custom-hostname']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ProjectsRefCustomHostnameQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['custom-hostname']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsRefCustomHostnameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsRefCustomHostnameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':ref']['custom-hostname'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.projects)[':ref']['custom-hostname']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.projects)[':ref']['custom-hostname']['$delete']>,
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':ref']['jit-access']['$get']>
  >,
) {
  return ['v1', '/v1/projects/:ref/jit-access', toValue(args)] as const
}

export function getV1ProjectsRefJitAccessQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':ref']['jit-access']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsRefJitAccessQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':ref']['jit-access'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':ref']['jit-access']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.projects)[':ref']['jit-access']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ProjectsRefJitAccessQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['jit-access']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsRefJitAccessQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsRefJitAccessQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':ref']['jit-access'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.projects)[':ref']['network-bans']['retrieve']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.projects)[':ref']['network-bans']['retrieve']['$post']
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':ref']['network-restrictions']['$get']>
  >,
) {
  return ['v1', '/v1/projects/:ref/network-restrictions', toValue(args)] as const
}

export function getV1ProjectsRefNetworkRestrictionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':ref']['network-restrictions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsRefNetworkRestrictionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':ref']['network-restrictions'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':ref']['network-restrictions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.projects)[':ref']['network-restrictions']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1ProjectsRefNetworkRestrictionsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['network-restrictions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsRefNetworkRestrictionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsRefNetworkRestrictionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':ref']['network-restrictions'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.projects)[':ref']['pgsodium']['$get']>>,
) {
  return ['v1', '/v1/projects/:ref/pgsodium', toValue(args)] as const
}

export function getV1ProjectsRefPgsodiumQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.projects)[':ref']['pgsodium']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsRefPgsodiumQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':ref'].pgsodium.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.projects)[':ref']['pgsodium']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.projects)[':ref']['pgsodium']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ProjectsRefPgsodiumQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['pgsodium']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsRefPgsodiumQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsRefPgsodiumQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':ref'].pgsodium.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':ref']['postgrest']['$get']>
  >,
) {
  return ['v1', '/v1/projects/:ref/postgrest', toValue(args)] as const
}

export function getV1ProjectsRefPostgrestQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':ref']['postgrest']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsRefPostgrestQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':ref'].postgrest.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':ref']['postgrest']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.projects)[':ref']['postgrest']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ProjectsRefPostgrestQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['postgrest']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsRefPostgrestQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsRefPostgrestQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':ref'].postgrest.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.projects)[':ref']['$get']>>,
) {
  return ['v1', '/v1/projects/:ref', toValue(args)] as const
}

export function getV1ProjectsRefQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.projects)[':ref']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsRefQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':ref'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ProjectsRef<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.projects)[':ref']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.projects)[':ref']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.projects)[':ref']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.projects)[':ref']['$get']>>>
            >
          >,
          ReturnType<typeof getV1ProjectsRefQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.projects)[':ref']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsRefQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsRefQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':ref'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.projects)[':ref']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.projects)[':ref']['$patch']>,
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.projects)[':ref']['secrets']['$get']>>,
) {
  return ['v1', '/v1/projects/:ref/secrets', toValue(args)] as const
}

export function getV1ProjectsRefSecretsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.projects)[':ref']['secrets']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsRefSecretsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':ref'].secrets.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.projects)[':ref']['secrets']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.projects)[':ref']['secrets']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ProjectsRefSecretsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['secrets']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsRefSecretsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsRefSecretsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':ref'].secrets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':ref']['ssl-enforcement']['$get']>
  >,
) {
  return ['v1', '/v1/projects/:ref/ssl-enforcement', toValue(args)] as const
}

export function getV1ProjectsRefSslEnforcementQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':ref']['ssl-enforcement']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsRefSslEnforcementQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':ref']['ssl-enforcement'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':ref']['ssl-enforcement']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.projects)[':ref']['ssl-enforcement']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ProjectsRefSslEnforcementQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['ssl-enforcement']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsRefSslEnforcementQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsRefSslEnforcementQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':ref']['ssl-enforcement'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':ref']['types']['typescript']['$get']>
  >,
) {
  return ['v1', '/v1/projects/:ref/types/typescript', toValue(args)] as const
}

export function getV1ProjectsRefTypesTypescriptQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':ref']['types']['typescript']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsRefTypesTypescriptQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':ref'].types.typescript.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':ref']['types']['typescript']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.projects)[':ref']['types']['typescript']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1ProjectsRefTypesTypescriptQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['types']['typescript']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsRefTypesTypescriptQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsRefTypesTypescriptQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':ref'].types.typescript.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ProjectsRefVanitySubdomainQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':ref']['vanity-subdomain']['$get']>
  >,
) {
  return ['v1', '/v1/projects/:ref/vanity-subdomain', toValue(args)] as const
}

export function getV1ProjectsRefVanitySubdomainQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':ref']['vanity-subdomain']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsRefVanitySubdomainQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':ref']['vanity-subdomain'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':ref']['vanity-subdomain']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.projects)[':ref']['vanity-subdomain']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ProjectsRefVanitySubdomainQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['vanity-subdomain']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsRefVanitySubdomainQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsRefVanitySubdomainQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':ref']['vanity-subdomain'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':ref']['upgrade']['eligibility']['$get']>
  >,
) {
  return ['v1', '/v1/projects/:ref/upgrade/eligibility', toValue(args)] as const
}

export function getV1ProjectsRefUpgradeEligibilityQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':ref']['upgrade']['eligibility']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsRefUpgradeEligibilityQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':ref'].upgrade.eligibility.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':ref']['upgrade']['eligibility']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.projects)[':ref']['upgrade']['eligibility']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1ProjectsRefUpgradeEligibilityQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['upgrade']['eligibility']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsRefUpgradeEligibilityQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsRefUpgradeEligibilityQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':ref'].upgrade.eligibility.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ProjectsRefUpgradeStatusQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':ref']['upgrade']['status']['$get']>
  >,
) {
  return ['v1', '/v1/projects/:ref/upgrade/status', toValue(args)] as const
}

export function getV1ProjectsRefUpgradeStatusQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':ref']['upgrade']['status']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsRefUpgradeStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':ref'].upgrade.status.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':ref']['upgrade']['status']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.projects)[':ref']['upgrade']['status']['$get']>
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
                  ReturnType<(typeof client.v1.projects)[':ref']['upgrade']['status']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1ProjectsRefUpgradeStatusQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['upgrade']['status']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsRefUpgradeStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsRefUpgradeStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':ref'].upgrade.status.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ProjectsRefReadonlyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.projects)[':ref']['readonly']['$get']>>,
) {
  return ['v1', '/v1/projects/:ref/readonly', toValue(args)] as const
}

export function getV1ProjectsRefReadonlyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.projects)[':ref']['readonly']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsRefReadonlyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':ref'].readonly.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.projects)[':ref']['readonly']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.projects)[':ref']['readonly']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ProjectsRefReadonlyQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['readonly']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsRefReadonlyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsRefReadonlyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':ref'].readonly.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.v1.projects)[':ref']['read-replicas']['setup']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.projects)[':ref']['read-replicas']['setup']['$post']>,
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.projects)[':ref']['health']['$get']>>,
) {
  return ['v1', '/v1/projects/:ref/health', toValue(args)] as const
}

export function getV1ProjectsRefHealthQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.projects)[':ref']['health']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsRefHealthQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':ref'].health.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.projects)[':ref']['health']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.projects)[':ref']['health']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ProjectsRefHealthQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['health']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsRefHealthQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsRefHealthQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':ref'].health.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ProjectsRefConfigAuthSigningKeysLegacyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':ref']['config']['auth']['signing-keys']['legacy']['$get']
    >
  >,
) {
  return ['v1', '/v1/projects/:ref/config/auth/signing-keys/legacy', toValue(args)] as const
}

export function getV1ProjectsRefConfigAuthSigningKeysLegacyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':ref']['config']['auth']['signing-keys']['legacy']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsRefConfigAuthSigningKeysLegacyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':ref'].config.auth['signing-keys'].legacy.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':ref']['config']['auth']['signing-keys']['legacy']['$get']
    >
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
                    (typeof client.v1.projects)[':ref']['config']['auth']['signing-keys']['legacy']['$get']
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
                    (typeof client.v1.projects)[':ref']['config']['auth']['signing-keys']['legacy']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ProjectsRefConfigAuthSigningKeysLegacyQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsRefConfigAuthSigningKeysLegacyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':ref'].config.auth['signing-keys'].legacy.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':ref']['config']['auth']['signing-keys']['$get']>
  >,
) {
  return ['v1', '/v1/projects/:ref/config/auth/signing-keys', toValue(args)] as const
}

export function getV1ProjectsRefConfigAuthSigningKeysQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':ref']['config']['auth']['signing-keys']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsRefConfigAuthSigningKeysQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':ref'].config.auth['signing-keys'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':ref']['config']['auth']['signing-keys']['$get']>
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
                    (typeof client.v1.projects)[':ref']['config']['auth']['signing-keys']['$get']
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
                    (typeof client.v1.projects)[':ref']['config']['auth']['signing-keys']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ProjectsRefConfigAuthSigningKeysQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsRefConfigAuthSigningKeysQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':ref'].config.auth['signing-keys'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':ref']['config']['auth']['signing-keys'][':id']['$get']
    >
  >,
) {
  return ['v1', '/v1/projects/:ref/config/auth/signing-keys/:id', toValue(args)] as const
}

export function getV1ProjectsRefConfigAuthSigningKeysIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':ref']['config']['auth']['signing-keys'][':id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsRefConfigAuthSigningKeysIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':ref'].config.auth['signing-keys'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':ref']['config']['auth']['signing-keys'][':id']['$get']
    >
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
                    (typeof client.v1.projects)[':ref']['config']['auth']['signing-keys'][':id']['$get']
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
                    (typeof client.v1.projects)[':ref']['config']['auth']['signing-keys'][':id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ProjectsRefConfigAuthSigningKeysIdQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsRefConfigAuthSigningKeysIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':ref'].config.auth['signing-keys'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':ref']['config']['auth']['$get']>
  >,
) {
  return ['v1', '/v1/projects/:ref/config/auth', toValue(args)] as const
}

export function getV1ProjectsRefConfigAuthQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':ref']['config']['auth']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsRefConfigAuthQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':ref'].config.auth.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':ref']['config']['auth']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.projects)[':ref']['config']['auth']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ProjectsRefConfigAuthQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['config']['auth']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsRefConfigAuthQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsRefConfigAuthQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':ref'].config.auth.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':ref']['config']['auth']['third-party-auth']['$get']
    >
  >,
) {
  return ['v1', '/v1/projects/:ref/config/auth/third-party-auth', toValue(args)] as const
}

export function getV1ProjectsRefConfigAuthThirdPartyAuthQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':ref']['config']['auth']['third-party-auth']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsRefConfigAuthThirdPartyAuthQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':ref'].config.auth['third-party-auth'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':ref']['config']['auth']['third-party-auth']['$get']
    >
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
                    (typeof client.v1.projects)[':ref']['config']['auth']['third-party-auth']['$get']
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
                    (typeof client.v1.projects)[':ref']['config']['auth']['third-party-auth']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ProjectsRefConfigAuthThirdPartyAuthQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsRefConfigAuthThirdPartyAuthQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':ref'].config.auth['third-party-auth'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':ref']['config']['auth']['third-party-auth'][':tpa_id']['$get']
    >
  >,
) {
  return ['v1', '/v1/projects/:ref/config/auth/third-party-auth/:tpa_id', toValue(args)] as const
}

export function getV1ProjectsRefConfigAuthThirdPartyAuthTpaIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':ref']['config']['auth']['third-party-auth'][':tpa_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsRefConfigAuthThirdPartyAuthTpaIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':ref'].config.auth['third-party-auth'][':tpa_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':ref']['config']['auth']['third-party-auth'][':tpa_id']['$get']
    >
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
                    (typeof client.v1.projects)[':ref']['config']['auth']['third-party-auth'][':tpa_id']['$get']
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
                    (typeof client.v1.projects)[':ref']['config']['auth']['third-party-auth'][':tpa_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ProjectsRefConfigAuthThirdPartyAuthTpaIdQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsRefConfigAuthThirdPartyAuthTpaIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':ref'].config.auth['third-party-auth'][':tpa_id'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.projects)[':ref']['restore']['$get']>>,
) {
  return ['v1', '/v1/projects/:ref/restore', toValue(args)] as const
}

export function getV1ProjectsRefRestoreQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.projects)[':ref']['restore']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsRefRestoreQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':ref'].restore.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.projects)[':ref']['restore']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.projects)[':ref']['restore']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ProjectsRefRestoreQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['restore']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsRefRestoreQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsRefRestoreQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':ref'].restore.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.projects)[':ref']['restore']['cancel']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.projects)[':ref']['restore']['cancel']['$post']>,
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':ref']['billing']['addons']['$get']>
  >,
) {
  return ['v1', '/v1/projects/:ref/billing/addons', toValue(args)] as const
}

export function getV1ProjectsRefBillingAddonsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':ref']['billing']['addons']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsRefBillingAddonsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':ref'].billing.addons.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':ref']['billing']['addons']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.projects)[':ref']['billing']['addons']['$get']>
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
                  ReturnType<(typeof client.v1.projects)[':ref']['billing']['addons']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1ProjectsRefBillingAddonsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['billing']['addons']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsRefBillingAddonsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsRefBillingAddonsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':ref'].billing.addons.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':ref']['claim-token']['$get']>
  >,
) {
  return ['v1', '/v1/projects/:ref/claim-token', toValue(args)] as const
}

export function getV1ProjectsRefClaimTokenQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':ref']['claim-token']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsRefClaimTokenQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':ref']['claim-token'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':ref']['claim-token']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.projects)[':ref']['claim-token']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ProjectsRefClaimTokenQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['claim-token']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsRefClaimTokenQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsRefClaimTokenQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':ref']['claim-token'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':ref']['advisors']['performance']['$get']>
  >,
) {
  return ['v1', '/v1/projects/:ref/advisors/performance', toValue(args)] as const
}

export function getV1ProjectsRefAdvisorsPerformanceQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':ref']['advisors']['performance']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsRefAdvisorsPerformanceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':ref'].advisors.performance.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':ref']['advisors']['performance']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.projects)[':ref']['advisors']['performance']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1ProjectsRefAdvisorsPerformanceQueryKey>
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
            ReturnType<(typeof client.v1.projects)[':ref']['advisors']['performance']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsRefAdvisorsPerformanceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsRefAdvisorsPerformanceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':ref'].advisors.performance.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ProjectsRefAdvisorsSecurityQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':ref']['advisors']['security']['$get']>
  >,
) {
  return ['v1', '/v1/projects/:ref/advisors/security', toValue(args)] as const
}

export function getV1ProjectsRefAdvisorsSecurityQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':ref']['advisors']['security']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsRefAdvisorsSecurityQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':ref'].advisors.security.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':ref']['advisors']['security']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.projects)[':ref']['advisors']['security']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1ProjectsRefAdvisorsSecurityQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['advisors']['security']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsRefAdvisorsSecurityQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsRefAdvisorsSecurityQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':ref'].advisors.security.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ProjectsRefAnalyticsEndpointsLogsAllQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':ref']['analytics']['endpoints']['logs.all']['$get']
    >
  >,
) {
  return ['v1', '/v1/projects/:ref/analytics/endpoints/logs.all', toValue(args)] as const
}

export function getV1ProjectsRefAnalyticsEndpointsLogsAllQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':ref']['analytics']['endpoints']['logs.all']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsRefAnalyticsEndpointsLogsAllQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':ref'].analytics.endpoints['logs.all'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':ref']['analytics']['endpoints']['logs.all']['$get']
    >
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
                    (typeof client.v1.projects)[':ref']['analytics']['endpoints']['logs.all']['$get']
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
                    (typeof client.v1.projects)[':ref']['analytics']['endpoints']['logs.all']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ProjectsRefAnalyticsEndpointsLogsAllQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsRefAnalyticsEndpointsLogsAllQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':ref'].analytics.endpoints['logs.all'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ProjectsRefAnalyticsEndpointsLogsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':ref']['analytics']['endpoints']['logs']['$get']>
  >,
) {
  return ['v1', '/v1/projects/:ref/analytics/endpoints/logs', toValue(args)] as const
}

export function getV1ProjectsRefAnalyticsEndpointsLogsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':ref']['analytics']['endpoints']['logs']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsRefAnalyticsEndpointsLogsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':ref'].analytics.endpoints.logs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':ref']['analytics']['endpoints']['logs']['$get']>
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
                    (typeof client.v1.projects)[':ref']['analytics']['endpoints']['logs']['$get']
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
                    (typeof client.v1.projects)[':ref']['analytics']['endpoints']['logs']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ProjectsRefAnalyticsEndpointsLogsQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsRefAnalyticsEndpointsLogsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':ref'].analytics.endpoints.logs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':ref']['analytics']['endpoints']['usage.api-counts']['$get']
    >
  >,
) {
  return ['v1', '/v1/projects/:ref/analytics/endpoints/usage.api-counts', toValue(args)] as const
}

export function getV1ProjectsRefAnalyticsEndpointsUsageApiCountsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':ref']['analytics']['endpoints']['usage.api-counts']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsRefAnalyticsEndpointsUsageApiCountsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':ref'].analytics.endpoints['usage.api-counts'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':ref']['analytics']['endpoints']['usage.api-counts']['$get']
    >
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
                    (typeof client.v1.projects)[':ref']['analytics']['endpoints']['usage.api-counts']['$get']
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
                    (typeof client.v1.projects)[':ref']['analytics']['endpoints']['usage.api-counts']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ProjectsRefAnalyticsEndpointsUsageApiCountsQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsRefAnalyticsEndpointsUsageApiCountsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':ref'].analytics.endpoints['usage.api-counts'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ProjectsRefAnalyticsEndpointsUsageApiRequestsCountQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':ref']['analytics']['endpoints']['usage.api-requests-count']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/projects/:ref/analytics/endpoints/usage.api-requests-count',
    toValue(args),
  ] as const
}

export function getV1ProjectsRefAnalyticsEndpointsUsageApiRequestsCountQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':ref']['analytics']['endpoints']['usage.api-requests-count']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsRefAnalyticsEndpointsUsageApiRequestsCountQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':ref'].analytics.endpoints['usage.api-requests-count'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':ref']['analytics']['endpoints']['usage.api-requests-count']['$get']
    >
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
                    (typeof client.v1.projects)[':ref']['analytics']['endpoints']['usage.api-requests-count']['$get']
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
                    (typeof client.v1.projects)[':ref']['analytics']['endpoints']['usage.api-requests-count']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ProjectsRefAnalyticsEndpointsUsageApiRequestsCountQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1ProjectsRefAnalyticsEndpointsUsageApiRequestsCountQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':ref'].analytics.endpoints['usage.api-requests-count'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getV1ProjectsRefAnalyticsEndpointsFunctionsCombinedStatsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':ref']['analytics']['endpoints']['functions.combined-stats']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/projects/:ref/analytics/endpoints/functions.combined-stats',
    toValue(args),
  ] as const
}

export function getV1ProjectsRefAnalyticsEndpointsFunctionsCombinedStatsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':ref']['analytics']['endpoints']['functions.combined-stats']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1ProjectsRefAnalyticsEndpointsFunctionsCombinedStatsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':ref'].analytics.endpoints['functions.combined-stats'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':ref']['analytics']['endpoints']['functions.combined-stats']['$get']
    >
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
                    (typeof client.v1.projects)[':ref']['analytics']['endpoints']['functions.combined-stats']['$get']
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
                    (typeof client.v1.projects)[':ref']['analytics']['endpoints']['functions.combined-stats']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ProjectsRefAnalyticsEndpointsFunctionsCombinedStatsQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1ProjectsRefAnalyticsEndpointsFunctionsCombinedStatsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':ref'].analytics.endpoints['functions.combined-stats'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getV1ProjectsRefAnalyticsEndpointsMetricsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':ref']['analytics']['endpoints']['metrics']['$get']
    >
  >,
) {
  return ['v1', '/v1/projects/:ref/analytics/endpoints/metrics', toValue(args)] as const
}

export function getV1ProjectsRefAnalyticsEndpointsMetricsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':ref']['analytics']['endpoints']['metrics']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsRefAnalyticsEndpointsMetricsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':ref'].analytics.endpoints.metrics.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':ref']['analytics']['endpoints']['metrics']['$get']
    >
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
                    (typeof client.v1.projects)[':ref']['analytics']['endpoints']['metrics']['$get']
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
                    (typeof client.v1.projects)[':ref']['analytics']['endpoints']['metrics']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ProjectsRefAnalyticsEndpointsMetricsQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsRefAnalyticsEndpointsMetricsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':ref'].analytics.endpoints.metrics.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.projects)[':ref']['cli']['login-role']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.projects)[':ref']['cli']['login-role']['$post']>,
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':ref']['database']['migrations']['$get']>
  >,
) {
  return ['v1', '/v1/projects/:ref/database/migrations', toValue(args)] as const
}

export function getV1ProjectsRefDatabaseMigrationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':ref']['database']['migrations']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsRefDatabaseMigrationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':ref'].database.migrations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':ref']['database']['migrations']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.projects)[':ref']['database']['migrations']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1ProjectsRefDatabaseMigrationsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['database']['migrations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsRefDatabaseMigrationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsRefDatabaseMigrationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':ref'].database.migrations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.projects)[':ref']['database']['migrations']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.projects)[':ref']['database']['migrations']['$delete']
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':ref']['database']['migrations'][':version']['$get']
    >
  >,
) {
  return ['v1', '/v1/projects/:ref/database/migrations/:version', toValue(args)] as const
}

export function getV1ProjectsRefDatabaseMigrationsVersionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':ref']['database']['migrations'][':version']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsRefDatabaseMigrationsVersionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':ref'].database.migrations[':version'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':ref']['database']['migrations'][':version']['$get']
    >
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
                    (typeof client.v1.projects)[':ref']['database']['migrations'][':version']['$get']
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
                    (typeof client.v1.projects)[':ref']['database']['migrations'][':version']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ProjectsRefDatabaseMigrationsVersionQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsRefDatabaseMigrationsVersionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':ref'].database.migrations[':version'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.projects)[':ref']['database']['query']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.projects)[':ref']['database']['query']['$post']>,
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':ref']['database']['context']['$get']>
  >,
) {
  return ['v1', '/v1/projects/:ref/database/context', toValue(args)] as const
}

export function getV1ProjectsRefDatabaseContextQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':ref']['database']['context']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsRefDatabaseContextQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':ref'].database.context.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':ref']['database']['context']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.projects)[':ref']['database']['context']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1ProjectsRefDatabaseContextQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['database']['context']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsRefDatabaseContextQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsRefDatabaseContextQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':ref'].database.context.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':ref']['database']['jit']['$get']>
  >,
) {
  return ['v1', '/v1/projects/:ref/database/jit', toValue(args)] as const
}

export function getV1ProjectsRefDatabaseJitQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':ref']['database']['jit']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsRefDatabaseJitQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':ref'].database.jit.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':ref']['database']['jit']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.projects)[':ref']['database']['jit']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ProjectsRefDatabaseJitQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['database']['jit']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsRefDatabaseJitQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsRefDatabaseJitQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':ref'].database.jit.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':ref']['database']['jit']['list']['$get']>
  >,
) {
  return ['v1', '/v1/projects/:ref/database/jit/list', toValue(args)] as const
}

export function getV1ProjectsRefDatabaseJitListQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':ref']['database']['jit']['list']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsRefDatabaseJitListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':ref'].database.jit.list.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':ref']['database']['jit']['list']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.projects)[':ref']['database']['jit']['list']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1ProjectsRefDatabaseJitListQueryKey>
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
            ReturnType<(typeof client.v1.projects)[':ref']['database']['jit']['list']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsRefDatabaseJitListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsRefDatabaseJitListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':ref'].database.jit.list.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
          InferRequestType<
            (typeof client.v1.projects)[':ref']['database']['jit']['invite']['$post']
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':ref']['database']['openapi']['$get']>
  >,
) {
  return ['v1', '/v1/projects/:ref/database/openapi', toValue(args)] as const
}

export function getV1ProjectsRefDatabaseOpenapiQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':ref']['database']['openapi']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsRefDatabaseOpenapiQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':ref'].database.openapi.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':ref']['database']['openapi']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.projects)[':ref']['database']['openapi']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1ProjectsRefDatabaseOpenapiQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['database']['openapi']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsRefDatabaseOpenapiQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsRefDatabaseOpenapiQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':ref'].database.openapi.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ProjectsRefFunctionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':ref']['functions']['$get']>
  >,
) {
  return ['v1', '/v1/projects/:ref/functions', toValue(args)] as const
}

export function getV1ProjectsRefFunctionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':ref']['functions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsRefFunctionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':ref'].functions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':ref']['functions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.projects)[':ref']['functions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ProjectsRefFunctionsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['functions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsRefFunctionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsRefFunctionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':ref'].functions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':ref']['functions'][':function_slug']['$get']>
  >,
) {
  return ['v1', '/v1/projects/:ref/functions/:function_slug', toValue(args)] as const
}

export function getV1ProjectsRefFunctionsFunctionSlugQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':ref']['functions'][':function_slug']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsRefFunctionsFunctionSlugQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':ref'].functions[':function_slug'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':ref']['functions'][':function_slug']['$get']>
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
                    (typeof client.v1.projects)[':ref']['functions'][':function_slug']['$get']
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
                    (typeof client.v1.projects)[':ref']['functions'][':function_slug']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ProjectsRefFunctionsFunctionSlugQueryKey>
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
            ReturnType<(typeof client.v1.projects)[':ref']['functions'][':function_slug']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsRefFunctionsFunctionSlugQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsRefFunctionsFunctionSlugQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':ref'].functions[':function_slug'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':ref']['functions'][':function_slug']['body']['$get']
    >
  >,
) {
  return ['v1', '/v1/projects/:ref/functions/:function_slug/body', toValue(args)] as const
}

export function getV1ProjectsRefFunctionsFunctionSlugBodyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':ref']['functions'][':function_slug']['body']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsRefFunctionsFunctionSlugBodyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':ref'].functions[':function_slug'].body.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':ref']['functions'][':function_slug']['body']['$get']
    >
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
                    (typeof client.v1.projects)[':ref']['functions'][':function_slug']['body']['$get']
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
                    (typeof client.v1.projects)[':ref']['functions'][':function_slug']['body']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ProjectsRefFunctionsFunctionSlugBodyQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsRefFunctionsFunctionSlugBodyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':ref'].functions[':function_slug'].body.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ProjectsRefStorageBucketsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':ref']['storage']['buckets']['$get']>
  >,
) {
  return ['v1', '/v1/projects/:ref/storage/buckets', toValue(args)] as const
}

export function getV1ProjectsRefStorageBucketsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':ref']['storage']['buckets']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsRefStorageBucketsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':ref'].storage.buckets.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':ref']['storage']['buckets']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.projects)[':ref']['storage']['buckets']['$get']>
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
                  ReturnType<(typeof client.v1.projects)[':ref']['storage']['buckets']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1ProjectsRefStorageBucketsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['storage']['buckets']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsRefStorageBucketsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsRefStorageBucketsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':ref'].storage.buckets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ProjectsRefConfigDiskQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':ref']['config']['disk']['$get']>
  >,
) {
  return ['v1', '/v1/projects/:ref/config/disk', toValue(args)] as const
}

export function getV1ProjectsRefConfigDiskQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':ref']['config']['disk']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsRefConfigDiskQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':ref'].config.disk.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':ref']['config']['disk']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.projects)[':ref']['config']['disk']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ProjectsRefConfigDiskQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['config']['disk']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsRefConfigDiskQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsRefConfigDiskQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':ref'].config.disk.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':ref']['config']['disk']['util']['$get']>
  >,
) {
  return ['v1', '/v1/projects/:ref/config/disk/util', toValue(args)] as const
}

export function getV1ProjectsRefConfigDiskUtilQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':ref']['config']['disk']['util']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsRefConfigDiskUtilQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':ref'].config.disk.util.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':ref']['config']['disk']['util']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.projects)[':ref']['config']['disk']['util']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1ProjectsRefConfigDiskUtilQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['config']['disk']['util']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsRefConfigDiskUtilQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsRefConfigDiskUtilQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':ref'].config.disk.util.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ProjectsRefConfigDiskAutoscaleQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':ref']['config']['disk']['autoscale']['$get']>
  >,
) {
  return ['v1', '/v1/projects/:ref/config/disk/autoscale', toValue(args)] as const
}

export function getV1ProjectsRefConfigDiskAutoscaleQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':ref']['config']['disk']['autoscale']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsRefConfigDiskAutoscaleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':ref'].config.disk.autoscale.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':ref']['config']['disk']['autoscale']['$get']>
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
                    (typeof client.v1.projects)[':ref']['config']['disk']['autoscale']['$get']
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
                    (typeof client.v1.projects)[':ref']['config']['disk']['autoscale']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ProjectsRefConfigDiskAutoscaleQueryKey>
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
            ReturnType<(typeof client.v1.projects)[':ref']['config']['disk']['autoscale']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsRefConfigDiskAutoscaleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsRefConfigDiskAutoscaleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':ref'].config.disk.autoscale.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ProjectsRefConfigStorageQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':ref']['config']['storage']['$get']>
  >,
) {
  return ['v1', '/v1/projects/:ref/config/storage', toValue(args)] as const
}

export function getV1ProjectsRefConfigStorageQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':ref']['config']['storage']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsRefConfigStorageQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':ref'].config.storage.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':ref']['config']['storage']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.projects)[':ref']['config']['storage']['$get']>
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
                  ReturnType<(typeof client.v1.projects)[':ref']['config']['storage']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1ProjectsRefConfigStorageQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['config']['storage']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsRefConfigStorageQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsRefConfigStorageQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':ref'].config.storage.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':ref']['config']['database']['pgbouncer']['$get']>
  >,
) {
  return ['v1', '/v1/projects/:ref/config/database/pgbouncer', toValue(args)] as const
}

export function getV1ProjectsRefConfigDatabasePgbouncerQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':ref']['config']['database']['pgbouncer']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsRefConfigDatabasePgbouncerQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':ref'].config.database.pgbouncer.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':ref']['config']['database']['pgbouncer']['$get']>
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
                    (typeof client.v1.projects)[':ref']['config']['database']['pgbouncer']['$get']
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
                    (typeof client.v1.projects)[':ref']['config']['database']['pgbouncer']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ProjectsRefConfigDatabasePgbouncerQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsRefConfigDatabasePgbouncerQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':ref'].config.database.pgbouncer.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ProjectsRefConfigDatabasePoolerQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':ref']['config']['database']['pooler']['$get']>
  >,
) {
  return ['v1', '/v1/projects/:ref/config/database/pooler', toValue(args)] as const
}

export function getV1ProjectsRefConfigDatabasePoolerQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':ref']['config']['database']['pooler']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsRefConfigDatabasePoolerQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':ref'].config.database.pooler.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':ref']['config']['database']['pooler']['$get']>
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
                    (typeof client.v1.projects)[':ref']['config']['database']['pooler']['$get']
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
                    (typeof client.v1.projects)[':ref']['config']['database']['pooler']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ProjectsRefConfigDatabasePoolerQueryKey>
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
            ReturnType<(typeof client.v1.projects)[':ref']['config']['database']['pooler']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsRefConfigDatabasePoolerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsRefConfigDatabasePoolerQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':ref'].config.database.pooler.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':ref']['config']['database']['postgres']['$get']>
  >,
) {
  return ['v1', '/v1/projects/:ref/config/database/postgres', toValue(args)] as const
}

export function getV1ProjectsRefConfigDatabasePostgresQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':ref']['config']['database']['postgres']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsRefConfigDatabasePostgresQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':ref'].config.database.postgres.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':ref']['config']['database']['postgres']['$get']>
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
                    (typeof client.v1.projects)[':ref']['config']['database']['postgres']['$get']
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
                    (typeof client.v1.projects)[':ref']['config']['database']['postgres']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ProjectsRefConfigDatabasePostgresQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsRefConfigDatabasePostgresQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':ref'].config.database.postgres.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':ref']['config']['realtime']['$get']>
  >,
) {
  return ['v1', '/v1/projects/:ref/config/realtime', toValue(args)] as const
}

export function getV1ProjectsRefConfigRealtimeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':ref']['config']['realtime']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsRefConfigRealtimeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':ref'].config.realtime.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':ref']['config']['realtime']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.projects)[':ref']['config']['realtime']['$get']>
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
                  ReturnType<(typeof client.v1.projects)[':ref']['config']['realtime']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1ProjectsRefConfigRealtimeQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['config']['realtime']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsRefConfigRealtimeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsRefConfigRealtimeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':ref'].config.realtime.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':ref']['config']['auth']['sso']['providers']['$get']
    >
  >,
) {
  return ['v1', '/v1/projects/:ref/config/auth/sso/providers', toValue(args)] as const
}

export function getV1ProjectsRefConfigAuthSsoProvidersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':ref']['config']['auth']['sso']['providers']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsRefConfigAuthSsoProvidersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':ref'].config.auth.sso.providers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':ref']['config']['auth']['sso']['providers']['$get']
    >
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
                    (typeof client.v1.projects)[':ref']['config']['auth']['sso']['providers']['$get']
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
                    (typeof client.v1.projects)[':ref']['config']['auth']['sso']['providers']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ProjectsRefConfigAuthSsoProvidersQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsRefConfigAuthSsoProvidersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':ref'].config.auth.sso.providers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':ref']['config']['auth']['sso']['providers'][':provider_id']['$get']
    >
  >,
) {
  return ['v1', '/v1/projects/:ref/config/auth/sso/providers/:provider_id', toValue(args)] as const
}

export function getV1ProjectsRefConfigAuthSsoProvidersProviderIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':ref']['config']['auth']['sso']['providers'][':provider_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsRefConfigAuthSsoProvidersProviderIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':ref'].config.auth.sso.providers[':provider_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':ref']['config']['auth']['sso']['providers'][':provider_id']['$get']
    >
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
                    (typeof client.v1.projects)[':ref']['config']['auth']['sso']['providers'][':provider_id']['$get']
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
                    (typeof client.v1.projects)[':ref']['config']['auth']['sso']['providers'][':provider_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ProjectsRefConfigAuthSsoProvidersProviderIdQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsRefConfigAuthSsoProvidersProviderIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':ref'].config.auth.sso.providers[':provider_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':ref']['database']['backups']['$get']>
  >,
) {
  return ['v1', '/v1/projects/:ref/database/backups', toValue(args)] as const
}

export function getV1ProjectsRefDatabaseBackupsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':ref']['database']['backups']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsRefDatabaseBackupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':ref'].database.backups.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':ref']['database']['backups']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.projects)[':ref']['database']['backups']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1ProjectsRefDatabaseBackupsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['database']['backups']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsRefDatabaseBackupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsRefDatabaseBackupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':ref'].database.backups.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':ref']['database']['backups']['restore-point']['$get']
    >
  >,
) {
  return ['v1', '/v1/projects/:ref/database/backups/restore-point', toValue(args)] as const
}

export function getV1ProjectsRefDatabaseBackupsRestorePointQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':ref']['database']['backups']['restore-point']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsRefDatabaseBackupsRestorePointQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':ref'].database.backups['restore-point'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':ref']['database']['backups']['restore-point']['$get']
    >
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
                    (typeof client.v1.projects)[':ref']['database']['backups']['restore-point']['$get']
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
                    (typeof client.v1.projects)[':ref']['database']['backups']['restore-point']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ProjectsRefDatabaseBackupsRestorePointQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsRefDatabaseBackupsRestorePointQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':ref'].database.backups['restore-point'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':ref']['database']['backups']['schedule']['$get']>
  >,
) {
  return ['v1', '/v1/projects/:ref/database/backups/schedule', toValue(args)] as const
}

export function getV1ProjectsRefDatabaseBackupsScheduleQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':ref']['database']['backups']['schedule']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsRefDatabaseBackupsScheduleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':ref'].database.backups.schedule.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':ref']['database']['backups']['schedule']['$get']>
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
                    (typeof client.v1.projects)[':ref']['database']['backups']['schedule']['$get']
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
                    (typeof client.v1.projects)[':ref']['database']['backups']['schedule']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ProjectsRefDatabaseBackupsScheduleQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsRefDatabaseBackupsScheduleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':ref'].database.backups.schedule.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.organizations)[':slug']['entitlements']['$get']>
  >,
) {
  return ['v1', '/v1/organizations/:slug/entitlements', toValue(args)] as const
}

export function getV1OrganizationsSlugEntitlementsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.organizations)[':slug']['entitlements']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1OrganizationsSlugEntitlementsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.organizations[':slug'].entitlements.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.organizations)[':slug']['entitlements']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.organizations)[':slug']['entitlements']['$get']>
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
                  ReturnType<(typeof client.v1.organizations)[':slug']['entitlements']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1OrganizationsSlugEntitlementsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.organizations)[':slug']['entitlements']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OrganizationsSlugEntitlementsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1OrganizationsSlugEntitlementsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.organizations[':slug'].entitlements.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1OrganizationsSlugMembersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.organizations)[':slug']['members']['$get']>
  >,
) {
  return ['v1', '/v1/organizations/:slug/members', toValue(args)] as const
}

export function getV1OrganizationsSlugMembersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.organizations)[':slug']['members']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1OrganizationsSlugMembersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.organizations[':slug'].members.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.organizations)[':slug']['members']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.organizations)[':slug']['members']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1OrganizationsSlugMembersQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.organizations)[':slug']['members']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OrganizationsSlugMembersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1OrganizationsSlugMembersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.organizations[':slug'].members.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1OrganizationsSlugQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.organizations)[':slug']['$get']>>,
) {
  return ['v1', '/v1/organizations/:slug', toValue(args)] as const
}

export function getV1OrganizationsSlugQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.organizations)[':slug']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1OrganizationsSlugQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.organizations[':slug'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1OrganizationsSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.organizations)[':slug']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.organizations)[':slug']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.organizations)[':slug']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1OrganizationsSlugQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.organizations)[':slug']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OrganizationsSlugQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1OrganizationsSlugQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.organizations[':slug'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1OrganizationsSlugProjectClaimTokenQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.organizations)[':slug']['project-claim'][':token']['$get']>
  >,
) {
  return ['v1', '/v1/organizations/:slug/project-claim/:token', toValue(args)] as const
}

export function getV1OrganizationsSlugProjectClaimTokenQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.organizations)[':slug']['project-claim'][':token']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1OrganizationsSlugProjectClaimTokenQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.organizations[':slug']['project-claim'][':token'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.organizations)[':slug']['project-claim'][':token']['$get']>
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
                    (typeof client.v1.organizations)[':slug']['project-claim'][':token']['$get']
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
                    (typeof client.v1.organizations)[':slug']['project-claim'][':token']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1OrganizationsSlugProjectClaimTokenQueryKey>
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
            ReturnType<(typeof client.v1.organizations)[':slug']['project-claim'][':token']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OrganizationsSlugProjectClaimTokenQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1OrganizationsSlugProjectClaimTokenQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.organizations[':slug']['project-claim'][':token'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.organizations)[':slug']['projects']['$get']>
  >,
) {
  return ['v1', '/v1/organizations/:slug/projects', toValue(args)] as const
}

export function getV1OrganizationsSlugProjectsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.organizations)[':slug']['projects']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1OrganizationsSlugProjectsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.organizations[':slug'].projects.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.organizations)[':slug']['projects']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.organizations)[':slug']['projects']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1OrganizationsSlugProjectsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.organizations)[':slug']['projects']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OrganizationsSlugProjectsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1OrganizationsSlugProjectsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.organizations[':slug'].projects.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
