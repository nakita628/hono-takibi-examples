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

export function getV2Key() {
  return ['v2'] as const
}

export function getV2NameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)[':name']['$get']>>,
) {
  return ['v2', '/v2/:name', toValue(args)] as const
}

export function getV2NameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)[':name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2NameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2[':name'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV2Name<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)[':name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name']['$get']>>>
            >
          >,
          ReturnType<typeof getV2NameQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2NameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2NameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV2NameMutationKey() {
  return ['v2', '/v2/:name', 'PUT'] as const
}

export function getPutV2NameMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.v2)[':name']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2NameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2)[':name']['$put']>) {
      return parseResponse(client.v2[':name'].$put(args, options))
    },
  })
}

export function usePutV2Name<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v2)[':name']['$put']>,
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
  const mutationDefaults = getPutV2NameMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteV2NameMutationKey() {
  return ['v2', '/v2/:name', 'DELETE'] as const
}

export function getDeleteV2NameMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name']['$delete']>>>>
    >,
    TError,
    InferRequestType<(typeof client.v2)[':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2NameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2)[':name']['$delete']>) {
      return parseResponse(client.v2[':name'].$delete(args, options))
    },
  })
}

export function useDeleteV2Name<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v2)[':name']['$delete']>,
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
  const mutationDefaults = getDeleteV2NameMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchV2NameMutationKey() {
  return ['v2', '/v2/:name', 'PATCH'] as const
}

export function getPatchV2NameMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name']['$patch']>>>>
    >,
    TError,
    InferRequestType<(typeof client.v2)[':name']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV2NameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2)[':name']['$patch']>) {
      return parseResponse(client.v2[':name'].$patch(args, options))
    },
  })
}

export function usePatchV2Name<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v2)[':name']['$patch']>,
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
  const mutationDefaults = getPatchV2NameMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV2NameLocationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)[':name']['locations']['$get']>>,
) {
  return ['v2', '/v2/:name/locations', toValue(args)] as const
}

export function getV2NameLocationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)[':name']['locations']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2NameLocationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2[':name'].locations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2NameLocations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name']['locations']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)[':name']['locations']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)[':name']['locations']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)[':name']['locations']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2NameLocationsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name']['locations']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2NameLocationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2NameLocationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2[':name'].locations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2NameOperationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)[':name']['operations']['$get']>>,
) {
  return ['v2', '/v2/:name/operations', toValue(args)] as const
}

export function getV2NameOperationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)[':name']['operations']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2NameOperationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2[':name'].operations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2NameOperations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name']['operations']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)[':name']['operations']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)[':name']['operations']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)[':name']['operations']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2NameOperationsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name']['operations']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2NameOperationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2NameOperationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2[':name'].operations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2NameCancelMutationKey() {
  return ['v2', '/v2/:name:cancel', 'POST'] as const
}

export function getPostV2NameCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name:cancel']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)[':name:cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2NameCancelMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2)[':name:cancel']['$post']>) {
      return parseResponse(client.v2[':name:cancel'].$post(args, options))
    },
  })
}

export function usePostV2NameCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name:cancel']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v2)[':name:cancel']['$post']>,
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
  const mutationDefaults = getPostV2NameCancelMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2NameCheckConsistencyMutationKey() {
  return ['v2', '/v2/:name:checkConsistency', 'POST'] as const
}

export function getPostV2NameCheckConsistencyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)[':name:checkConsistency']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)[':name:checkConsistency']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2NameCheckConsistencyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2)[':name:checkConsistency']['$post']>,
    ) {
      return parseResponse(client.v2[':name:checkConsistency'].$post(args, options))
    },
  })
}

export function usePostV2NameCheckConsistency<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)[':name:checkConsistency']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2)[':name:checkConsistency']['$post']>,
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
  const mutationDefaults = getPostV2NameCheckConsistencyMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2NameDropRowRangeMutationKey() {
  return ['v2', '/v2/:name:dropRowRange', 'POST'] as const
}

export function getPostV2NameDropRowRangeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name:dropRowRange']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)[':name:dropRowRange']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2NameDropRowRangeMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2)[':name:dropRowRange']['$post']>) {
      return parseResponse(client.v2[':name:dropRowRange'].$post(args, options))
    },
  })
}

export function usePostV2NameDropRowRange<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)[':name:dropRowRange']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2)[':name:dropRowRange']['$post']>,
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
  const mutationDefaults = getPostV2NameDropRowRangeMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2NameGenerateConsistencyTokenMutationKey() {
  return ['v2', '/v2/:name:generateConsistencyToken', 'POST'] as const
}

export function getPostV2NameGenerateConsistencyTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)[':name:generateConsistencyToken']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)[':name:generateConsistencyToken']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2NameGenerateConsistencyTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2)[':name:generateConsistencyToken']['$post']>,
    ) {
      return parseResponse(client.v2[':name:generateConsistencyToken'].$post(args, options))
    },
  })
}

export function usePostV2NameGenerateConsistencyToken<
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
                Awaited<ReturnType<(typeof client.v2)[':name:generateConsistencyToken']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2)[':name:generateConsistencyToken']['$post']>,
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
  const mutationDefaults = getPostV2NameGenerateConsistencyTokenMutationOptions<
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

export function getPostV2NameModifyColumnFamiliesMutationKey() {
  return ['v2', '/v2/:name:modifyColumnFamilies', 'POST'] as const
}

export function getPostV2NameModifyColumnFamiliesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)[':name:modifyColumnFamilies']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)[':name:modifyColumnFamilies']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2NameModifyColumnFamiliesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2)[':name:modifyColumnFamilies']['$post']>,
    ) {
      return parseResponse(client.v2[':name:modifyColumnFamilies'].$post(args, options))
    },
  })
}

export function usePostV2NameModifyColumnFamilies<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)[':name:modifyColumnFamilies']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2)[':name:modifyColumnFamilies']['$post']>,
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
  const mutationDefaults = getPostV2NameModifyColumnFamiliesMutationOptions<
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

export function getPostV2NameUndeleteMutationKey() {
  return ['v2', '/v2/:name:undelete', 'POST'] as const
}

export function getPostV2NameUndeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name:undelete']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)[':name:undelete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2NameUndeleteMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2)[':name:undelete']['$post']>) {
      return parseResponse(client.v2[':name:undelete'].$post(args, options))
    },
  })
}

export function usePostV2NameUndelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)[':name:undelete']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2)[':name:undelete']['$post']>,
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
  const mutationDefaults = getPostV2NameUndeleteMutationOptions<TError, TOnMutateResult>(
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

export function getV2ParentAppProfilesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)[':parent']['appProfiles']['$get']>>,
) {
  return ['v2', '/v2/:parent/appProfiles', toValue(args)] as const
}

export function getV2ParentAppProfilesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)[':parent']['appProfiles']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2ParentAppProfilesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2[':parent'].appProfiles.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2ParentAppProfiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2)[':parent']['appProfiles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)[':parent']['appProfiles']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)[':parent']['appProfiles']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)[':parent']['appProfiles']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2ParentAppProfilesQueryKey>
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
          Awaited<ReturnType<(typeof client.v2)[':parent']['appProfiles']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ParentAppProfilesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2ParentAppProfilesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2[':parent'].appProfiles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2ParentAppProfilesMutationKey() {
  return ['v2', '/v2/:parent/appProfiles', 'POST'] as const
}

export function getPostV2ParentAppProfilesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)[':parent']['appProfiles']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)[':parent']['appProfiles']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2ParentAppProfilesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2)[':parent']['appProfiles']['$post']>,
    ) {
      return parseResponse(client.v2[':parent'].appProfiles.$post(args, options))
    },
  })
}

export function usePostV2ParentAppProfiles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)[':parent']['appProfiles']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2)[':parent']['appProfiles']['$post']>,
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
  const mutationDefaults = getPostV2ParentAppProfilesMutationOptions<TError, TOnMutateResult>(
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

export function getV2ParentBackupsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)[':parent']['backups']['$get']>>,
) {
  return ['v2', '/v2/:parent/backups', toValue(args)] as const
}

export function getV2ParentBackupsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)[':parent']['backups']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2ParentBackupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2[':parent'].backups.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2ParentBackups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':parent']['backups']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)[':parent']['backups']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)[':parent']['backups']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)[':parent']['backups']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2ParentBackupsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':parent']['backups']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ParentBackupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2ParentBackupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2[':parent'].backups.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2ParentBackupsMutationKey() {
  return ['v2', '/v2/:parent/backups', 'POST'] as const
}

export function getPostV2ParentBackupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':parent']['backups']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)[':parent']['backups']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2ParentBackupsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2)[':parent']['backups']['$post']>) {
      return parseResponse(client.v2[':parent'].backups.$post(args, options))
    },
  })
}

export function usePostV2ParentBackups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)[':parent']['backups']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2)[':parent']['backups']['$post']>,
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
  const mutationDefaults = getPostV2ParentBackupsMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2ParentBackupsCopyMutationKey() {
  return ['v2', '/v2/:parent/backups:copy', 'POST'] as const
}

export function getPostV2ParentBackupsCopyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)[':parent']['backups:copy']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)[':parent']['backups:copy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2ParentBackupsCopyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2)[':parent']['backups:copy']['$post']>,
    ) {
      return parseResponse(client.v2[':parent']['backups:copy'].$post(args, options))
    },
  })
}

export function usePostV2ParentBackupsCopy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)[':parent']['backups:copy']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2)[':parent']['backups:copy']['$post']>,
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
  const mutationDefaults = getPostV2ParentBackupsCopyMutationOptions<TError, TOnMutateResult>(
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

export function getV2ParentClustersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)[':parent']['clusters']['$get']>>,
) {
  return ['v2', '/v2/:parent/clusters', toValue(args)] as const
}

export function getV2ParentClustersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)[':parent']['clusters']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2ParentClustersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2[':parent'].clusters.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2ParentClusters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':parent']['clusters']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)[':parent']['clusters']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)[':parent']['clusters']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)[':parent']['clusters']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2ParentClustersQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':parent']['clusters']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ParentClustersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2ParentClustersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2[':parent'].clusters.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2ParentClustersMutationKey() {
  return ['v2', '/v2/:parent/clusters', 'POST'] as const
}

export function getPostV2ParentClustersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)[':parent']['clusters']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)[':parent']['clusters']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2ParentClustersMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2)[':parent']['clusters']['$post']>) {
      return parseResponse(client.v2[':parent'].clusters.$post(args, options))
    },
  })
}

export function usePostV2ParentClusters<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)[':parent']['clusters']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2)[':parent']['clusters']['$post']>,
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
  const mutationDefaults = getPostV2ParentClustersMutationOptions<TError, TOnMutateResult>(
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

export function getV2ParentHotTabletsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)[':parent']['hotTablets']['$get']>>,
) {
  return ['v2', '/v2/:parent/hotTablets', toValue(args)] as const
}

export function getV2ParentHotTabletsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)[':parent']['hotTablets']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2ParentHotTabletsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2[':parent'].hotTablets.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2ParentHotTablets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':parent']['hotTablets']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)[':parent']['hotTablets']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)[':parent']['hotTablets']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)[':parent']['hotTablets']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2ParentHotTabletsQueryKey>
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
          Awaited<ReturnType<(typeof client.v2)[':parent']['hotTablets']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ParentHotTabletsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2ParentHotTabletsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2[':parent'].hotTablets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2ParentInstancesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)[':parent']['instances']['$get']>>,
) {
  return ['v2', '/v2/:parent/instances', toValue(args)] as const
}

export function getV2ParentInstancesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)[':parent']['instances']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2ParentInstancesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2[':parent'].instances.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2ParentInstances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':parent']['instances']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)[':parent']['instances']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)[':parent']['instances']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)[':parent']['instances']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2ParentInstancesQueryKey>
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
          Awaited<ReturnType<(typeof client.v2)[':parent']['instances']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ParentInstancesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2ParentInstancesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2[':parent'].instances.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2ParentInstancesMutationKey() {
  return ['v2', '/v2/:parent/instances', 'POST'] as const
}

export function getPostV2ParentInstancesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)[':parent']['instances']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)[':parent']['instances']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2ParentInstancesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2)[':parent']['instances']['$post']>) {
      return parseResponse(client.v2[':parent'].instances.$post(args, options))
    },
  })
}

export function usePostV2ParentInstances<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)[':parent']['instances']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2)[':parent']['instances']['$post']>,
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
  const mutationDefaults = getPostV2ParentInstancesMutationOptions<TError, TOnMutateResult>(
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

export function getV2ParentTablesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)[':parent']['tables']['$get']>>,
) {
  return ['v2', '/v2/:parent/tables', toValue(args)] as const
}

export function getV2ParentTablesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)[':parent']['tables']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2ParentTablesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2[':parent'].tables.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2ParentTables<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':parent']['tables']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)[':parent']['tables']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)[':parent']['tables']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)[':parent']['tables']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2ParentTablesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':parent']['tables']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ParentTablesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2ParentTablesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2[':parent'].tables.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2ParentTablesMutationKey() {
  return ['v2', '/v2/:parent/tables', 'POST'] as const
}

export function getPostV2ParentTablesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':parent']['tables']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)[':parent']['tables']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2ParentTablesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2)[':parent']['tables']['$post']>) {
      return parseResponse(client.v2[':parent'].tables.$post(args, options))
    },
  })
}

export function usePostV2ParentTables<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)[':parent']['tables']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2)[':parent']['tables']['$post']>,
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
  const mutationDefaults = getPostV2ParentTablesMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2ParentTablesRestoreMutationKey() {
  return ['v2', '/v2/:parent/tables:restore', 'POST'] as const
}

export function getPostV2ParentTablesRestoreMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)[':parent']['tables:restore']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)[':parent']['tables:restore']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2ParentTablesRestoreMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2)[':parent']['tables:restore']['$post']>,
    ) {
      return parseResponse(client.v2[':parent']['tables:restore'].$post(args, options))
    },
  })
}

export function usePostV2ParentTablesRestore<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)[':parent']['tables:restore']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2)[':parent']['tables:restore']['$post']>,
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
  const mutationDefaults = getPostV2ParentTablesRestoreMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2ResourceGetIamPolicyMutationKey() {
  return ['v2', '/v2/:resource:getIamPolicy', 'POST'] as const
}

export function getPostV2ResourceGetIamPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)[':resource:getIamPolicy']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)[':resource:getIamPolicy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2ResourceGetIamPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2)[':resource:getIamPolicy']['$post']>,
    ) {
      return parseResponse(client.v2[':resource:getIamPolicy'].$post(args, options))
    },
  })
}

export function usePostV2ResourceGetIamPolicy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)[':resource:getIamPolicy']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2)[':resource:getIamPolicy']['$post']>,
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
  const mutationDefaults = getPostV2ResourceGetIamPolicyMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2ResourceSetIamPolicyMutationKey() {
  return ['v2', '/v2/:resource:setIamPolicy', 'POST'] as const
}

export function getPostV2ResourceSetIamPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)[':resource:setIamPolicy']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)[':resource:setIamPolicy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2ResourceSetIamPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2)[':resource:setIamPolicy']['$post']>,
    ) {
      return parseResponse(client.v2[':resource:setIamPolicy'].$post(args, options))
    },
  })
}

export function usePostV2ResourceSetIamPolicy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)[':resource:setIamPolicy']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2)[':resource:setIamPolicy']['$post']>,
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
  const mutationDefaults = getPostV2ResourceSetIamPolicyMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2ResourceTestIamPermissionsMutationKey() {
  return ['v2', '/v2/:resource:testIamPermissions', 'POST'] as const
}

export function getPostV2ResourceTestIamPermissionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)[':resource:testIamPermissions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)[':resource:testIamPermissions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2ResourceTestIamPermissionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2)[':resource:testIamPermissions']['$post']>,
    ) {
      return parseResponse(client.v2[':resource:testIamPermissions'].$post(args, options))
    },
  })
}

export function usePostV2ResourceTestIamPermissions<
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
                Awaited<ReturnType<(typeof client.v2)[':resource:testIamPermissions']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2)[':resource:testIamPermissions']['$post']>,
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
  const mutationDefaults = getPostV2ResourceTestIamPermissionsMutationOptions<
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
