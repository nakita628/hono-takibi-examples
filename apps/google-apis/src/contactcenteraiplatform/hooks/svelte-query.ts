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

export function getV1alpha1Key() {
  return ['v1alpha1'] as const
}

export function getV1alpha1NameQueryKey(
  args: InferRequestType<(typeof client.v1alpha1)[':name']['$get']>,
) {
  return ['v1alpha1', '/v1alpha1/:name', args] as const
}

export function getV1alpha1NameQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1alpha1)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1alpha1)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1alpha1)[':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1alpha1NameQueryKey>
  >({
    queryKey: getV1alpha1NameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1alpha1[':name'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1alpha1Name<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1alpha1)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1alpha1)[':name']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1alpha1)[':name']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1alpha1NameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1alpha1NameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteV1alpha1NameMutationKey() {
  return ['v1alpha1', '/v1alpha1/:name', 'DELETE'] as const
}

export function getDeleteV1alpha1NameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1alpha1)[':name']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1alpha1)[':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1alpha1NameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1alpha1)[':name']['$delete']>) {
      return parseResponse(client.v1alpha1[':name'].$delete(args, options))
    },
  })
}

export function createDeleteV1alpha1Name<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1alpha1)[':name']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1alpha1)[':name']['$delete']>,
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
    const mutationDefaults = getDeleteV1alpha1NameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchV1alpha1NameMutationKey() {
  return ['v1alpha1', '/v1alpha1/:name', 'PATCH'] as const
}

export function getPatchV1alpha1NameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1alpha1)[':name']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1alpha1)[':name']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1alpha1NameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1alpha1)[':name']['$patch']>) {
      return parseResponse(client.v1alpha1[':name'].$patch(args, options))
    },
  })
}

export function createPatchV1alpha1Name<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1alpha1)[':name']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1alpha1)[':name']['$patch']>,
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
    const mutationDefaults = getPatchV1alpha1NameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1alpha1NameLocationsQueryKey(
  args: InferRequestType<(typeof client.v1alpha1)[':name']['locations']['$get']>,
) {
  return ['v1alpha1', '/v1alpha1/:name/locations', args] as const
}

export function getV1alpha1NameLocationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1alpha1)[':name']['locations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1alpha1)[':name']['locations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1alpha1)[':name']['locations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1alpha1NameLocationsQueryKey>
  >({
    queryKey: getV1alpha1NameLocationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1alpha1[':name'].locations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1alpha1NameLocations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1alpha1)[':name']['locations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1alpha1)[':name']['locations']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1alpha1)[':name']['locations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1alpha1NameLocationsQueryKey>
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
      ...getV1alpha1NameLocationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1alpha1NameOperationsQueryKey(
  args: InferRequestType<(typeof client.v1alpha1)[':name']['operations']['$get']>,
) {
  return ['v1alpha1', '/v1alpha1/:name/operations', args] as const
}

export function getV1alpha1NameOperationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1alpha1)[':name']['operations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1alpha1)[':name']['operations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1alpha1)[':name']['operations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1alpha1NameOperationsQueryKey>
  >({
    queryKey: getV1alpha1NameOperationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1alpha1[':name'].operations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1alpha1NameOperations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1alpha1)[':name']['operations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1alpha1)[':name']['operations']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1alpha1)[':name']['operations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1alpha1NameOperationsQueryKey>
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
      ...getV1alpha1NameOperationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV1alpha1NameCancelMutationKey() {
  return ['v1alpha1', '/v1alpha1/:name:cancel', 'POST'] as const
}

export function getPostV1alpha1NameCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1alpha1)[':name:cancel']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1alpha1)[':name:cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1alpha1NameCancelMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1alpha1)[':name:cancel']['$post']>) {
      return parseResponse(client.v1alpha1[':name:cancel'].$post(args, options))
    },
  })
}

export function createPostV1alpha1NameCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1alpha1)[':name:cancel']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1alpha1)[':name:cancel']['$post']>,
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
    const mutationDefaults = getPostV1alpha1NameCancelMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1alpha1ParentContactCentersQueryKey(
  args: InferRequestType<(typeof client.v1alpha1)[':parent']['contactCenters']['$get']>,
) {
  return ['v1alpha1', '/v1alpha1/:parent/contactCenters', args] as const
}

export function getV1alpha1ParentContactCentersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['contactCenters']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1alpha1)[':parent']['contactCenters']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['contactCenters']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1alpha1ParentContactCentersQueryKey>
  >({
    queryKey: getV1alpha1ParentContactCentersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1alpha1[':parent'].contactCenters.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1alpha1ParentContactCenters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['contactCenters']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1alpha1)[':parent']['contactCenters']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['contactCenters']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1alpha1ParentContactCentersQueryKey>
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
      ...getV1alpha1ParentContactCentersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV1alpha1ParentContactCentersMutationKey() {
  return ['v1alpha1', '/v1alpha1/:parent/contactCenters', 'POST'] as const
}

export function getPostV1alpha1ParentContactCentersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['contactCenters']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1alpha1)[':parent']['contactCenters']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1alpha1ParentContactCentersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1alpha1)[':parent']['contactCenters']['$post']>,
    ) {
      return parseResponse(client.v1alpha1[':parent'].contactCenters.$post(args, options))
    },
  })
}

export function createPostV1alpha1ParentContactCenters<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['contactCenters']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1alpha1)[':parent']['contactCenters']['$post']>,
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
    const mutationDefaults = getPostV1alpha1ParentContactCentersMutationOptions<
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

export function getV1alpha1ParentQueryContactCenterQuotaQueryKey(
  args: InferRequestType<(typeof client.v1alpha1)[':parent:queryContactCenterQuota']['$get']>,
) {
  return ['v1alpha1', '/v1alpha1/:parent:queryContactCenterQuota', args] as const
}

export function getV1alpha1ParentQueryContactCenterQuotaQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1alpha1)[':parent:queryContactCenterQuota']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1alpha1)[':parent:queryContactCenterQuota']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1alpha1)[':parent:queryContactCenterQuota']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1alpha1ParentQueryContactCenterQuotaQueryKey>
  >({
    queryKey: getV1alpha1ParentQueryContactCenterQuotaQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1alpha1[':parent:queryContactCenterQuota'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1alpha1ParentQueryContactCenterQuota<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1alpha1)[':parent:queryContactCenterQuota']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1alpha1)[':parent:queryContactCenterQuota']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1alpha1)[':parent:queryContactCenterQuota']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1alpha1ParentQueryContactCenterQuotaQueryKey>
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
      ...getV1alpha1ParentQueryContactCenterQuotaQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}
