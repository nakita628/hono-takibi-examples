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

export function getV1alpha1Key() {
  return ['v1alpha1'] as const
}

export function getPostV1alpha1GroupAddAssetsMutationKey() {
  return ['v1alpha1', '/v1alpha1/:group:addAssets', 'POST'] as const
}

export function getPostV1alpha1GroupAddAssetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1alpha1)[':group:addAssets']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1alpha1)[':group:addAssets']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1alpha1GroupAddAssetsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1alpha1)[':group:addAssets']['$post']>,
    ) {
      return parseResponse(client.v1alpha1[':group:addAssets'].$post(args, options))
    },
  })
}

export function usePostV1alpha1GroupAddAssets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1alpha1)[':group:addAssets']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1alpha1)[':group:addAssets']['$post']>,
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
  const mutationDefaults = getPostV1alpha1GroupAddAssetsMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1alpha1GroupRemoveAssetsMutationKey() {
  return ['v1alpha1', '/v1alpha1/:group:removeAssets', 'POST'] as const
}

export function getPostV1alpha1GroupRemoveAssetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1alpha1)[':group:removeAssets']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1alpha1)[':group:removeAssets']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1alpha1GroupRemoveAssetsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1alpha1)[':group:removeAssets']['$post']>,
    ) {
      return parseResponse(client.v1alpha1[':group:removeAssets'].$post(args, options))
    },
  })
}

export function usePostV1alpha1GroupRemoveAssets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1alpha1)[':group:removeAssets']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1alpha1)[':group:removeAssets']['$post']>,
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
  const mutationDefaults = getPostV1alpha1GroupRemoveAssetsMutationOptions<TError, TOnMutateResult>(
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

export function getV1alpha1NameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1alpha1)[':name']['$get']>>,
) {
  return ['v1alpha1', '/v1alpha1/:name', toValue(args)] as const
}

export function getV1alpha1NameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1alpha1)[':name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1alpha1NameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1alpha1[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1alpha1Name<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1alpha1)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1alpha1)[':name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1alpha1)[':name']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1alpha1)[':name']['$get']>>>
            >
          >,
          ReturnType<typeof getV1alpha1NameQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1alpha1)[':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1alpha1NameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1alpha1NameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1alpha1[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteV1alpha1Name<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1alpha1)[':name']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1alpha1)[':name']['$delete']>,
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
  const mutationDefaults = getDeleteV1alpha1NameMutationOptions<TError, TOnMutateResult>(
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

export function usePatchV1alpha1Name<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1alpha1)[':name']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v1alpha1)[':name']['$patch']>,
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
  const mutationDefaults = getPatchV1alpha1NameMutationOptions<TError, TOnMutateResult>(
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

export function getV1alpha1NameLocationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1alpha1)[':name']['locations']['$get']>>,
) {
  return ['v1alpha1', '/v1alpha1/:name/locations', toValue(args)] as const
}

export function getV1alpha1NameLocationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1alpha1)[':name']['locations']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1alpha1NameLocationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1alpha1[':name'].locations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1alpha1NameLocations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1alpha1)[':name']['locations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1alpha1)[':name']['locations']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1alpha1)[':name']['locations']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1alpha1)[':name']['locations']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1alpha1NameLocationsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1alpha1)[':name']['locations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1alpha1NameLocationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1alpha1NameLocationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1alpha1[':name'].locations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1alpha1NameOperationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1alpha1)[':name']['operations']['$get']>>,
) {
  return ['v1alpha1', '/v1alpha1/:name/operations', toValue(args)] as const
}

export function getV1alpha1NameOperationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1alpha1)[':name']['operations']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1alpha1NameOperationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1alpha1[':name'].operations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1alpha1NameOperations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1alpha1)[':name']['operations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1alpha1)[':name']['operations']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1alpha1)[':name']['operations']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1alpha1)[':name']['operations']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1alpha1NameOperationsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1alpha1)[':name']['operations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1alpha1NameOperationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1alpha1NameOperationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1alpha1[':name'].operations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV1alpha1NameCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1alpha1NameCancelMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1alpha1NameRunMutationKey() {
  return ['v1alpha1', '/v1alpha1/:name:run', 'POST'] as const
}

export function getPostV1alpha1NameRunMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1alpha1)[':name:run']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1alpha1)[':name:run']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1alpha1NameRunMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1alpha1)[':name:run']['$post']>) {
      return parseResponse(client.v1alpha1[':name:run'].$post(args, options))
    },
  })
}

export function usePostV1alpha1NameRun<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1alpha1)[':name:run']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1alpha1)[':name:run']['$post']>,
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
  const mutationDefaults = getPostV1alpha1NameRunMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1alpha1NameValidateMutationKey() {
  return ['v1alpha1', '/v1alpha1/:name:validate', 'POST'] as const
}

export function getPostV1alpha1NameValidateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1alpha1)[':name:validate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1alpha1)[':name:validate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1alpha1NameValidateMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1alpha1)[':name:validate']['$post']>) {
      return parseResponse(client.v1alpha1[':name:validate'].$post(args, options))
    },
  })
}

export function usePostV1alpha1NameValidate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1alpha1)[':name:validate']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1alpha1)[':name:validate']['$post']>,
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
  const mutationDefaults = getPostV1alpha1NameValidateMutationOptions<TError, TOnMutateResult>(
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

export function getV1alpha1ParentAssetsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1alpha1)[':parent']['assets']['$get']>>,
) {
  return ['v1alpha1', '/v1alpha1/:parent/assets', toValue(args)] as const
}

export function getV1alpha1ParentAssetsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1alpha1)[':parent']['assets']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1alpha1ParentAssetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1alpha1[':parent'].assets.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1alpha1ParentAssets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['assets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1alpha1)[':parent']['assets']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['assets']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['assets']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1alpha1ParentAssetsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['assets']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1alpha1ParentAssetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1alpha1ParentAssetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1alpha1[':parent'].assets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1alpha1ParentAssetsAggregateValuesMutationKey() {
  return ['v1alpha1', '/v1alpha1/:parent/assets:aggregateValues', 'POST'] as const
}

export function getPostV1alpha1ParentAssetsAggregateValuesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1alpha1)[':parent']['assets:aggregateValues']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1alpha1)[':parent']['assets:aggregateValues']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1alpha1ParentAssetsAggregateValuesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1alpha1)[':parent']['assets:aggregateValues']['$post']
      >,
    ) {
      return parseResponse(
        client.v1alpha1[':parent']['assets:aggregateValues'].$post(args, options),
      )
    },
  })
}

export function usePostV1alpha1ParentAssetsAggregateValues<
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
                  ReturnType<(typeof client.v1alpha1)[':parent']['assets:aggregateValues']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1alpha1)[':parent']['assets:aggregateValues']['$post']>,
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
  const mutationDefaults = getPostV1alpha1ParentAssetsAggregateValuesMutationOptions<
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

export function getPostV1alpha1ParentAssetsBatchDeleteMutationKey() {
  return ['v1alpha1', '/v1alpha1/:parent/assets:batchDelete', 'POST'] as const
}

export function getPostV1alpha1ParentAssetsBatchDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['assets:batchDelete']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1alpha1)[':parent']['assets:batchDelete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1alpha1ParentAssetsBatchDeleteMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1alpha1)[':parent']['assets:batchDelete']['$post']>,
    ) {
      return parseResponse(client.v1alpha1[':parent']['assets:batchDelete'].$post(args, options))
    },
  })
}

export function usePostV1alpha1ParentAssetsBatchDelete<
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
                  ReturnType<(typeof client.v1alpha1)[':parent']['assets:batchDelete']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1alpha1)[':parent']['assets:batchDelete']['$post']>,
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
  const mutationDefaults = getPostV1alpha1ParentAssetsBatchDeleteMutationOptions<
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

export function getPostV1alpha1ParentAssetsBatchUpdateMutationKey() {
  return ['v1alpha1', '/v1alpha1/:parent/assets:batchUpdate', 'POST'] as const
}

export function getPostV1alpha1ParentAssetsBatchUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['assets:batchUpdate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1alpha1)[':parent']['assets:batchUpdate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1alpha1ParentAssetsBatchUpdateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1alpha1)[':parent']['assets:batchUpdate']['$post']>,
    ) {
      return parseResponse(client.v1alpha1[':parent']['assets:batchUpdate'].$post(args, options))
    },
  })
}

export function usePostV1alpha1ParentAssetsBatchUpdate<
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
                  ReturnType<(typeof client.v1alpha1)[':parent']['assets:batchUpdate']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1alpha1)[':parent']['assets:batchUpdate']['$post']>,
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
  const mutationDefaults = getPostV1alpha1ParentAssetsBatchUpdateMutationOptions<
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

export function getPostV1alpha1ParentAssetsReportAssetFramesMutationKey() {
  return ['v1alpha1', '/v1alpha1/:parent/assets:reportAssetFrames', 'POST'] as const
}

export function getPostV1alpha1ParentAssetsReportAssetFramesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1alpha1)[':parent']['assets:reportAssetFrames']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1alpha1)[':parent']['assets:reportAssetFrames']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1alpha1ParentAssetsReportAssetFramesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1alpha1)[':parent']['assets:reportAssetFrames']['$post']
      >,
    ) {
      return parseResponse(
        client.v1alpha1[':parent']['assets:reportAssetFrames'].$post(args, options),
      )
    },
  })
}

export function usePostV1alpha1ParentAssetsReportAssetFrames<
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
                    (typeof client.v1alpha1)[':parent']['assets:reportAssetFrames']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1alpha1)[':parent']['assets:reportAssetFrames']['$post']
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
  const mutationDefaults = getPostV1alpha1ParentAssetsReportAssetFramesMutationOptions<
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

export function getV1alpha1ParentGroupsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1alpha1)[':parent']['groups']['$get']>>,
) {
  return ['v1alpha1', '/v1alpha1/:parent/groups', toValue(args)] as const
}

export function getV1alpha1ParentGroupsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1alpha1)[':parent']['groups']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1alpha1ParentGroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1alpha1[':parent'].groups.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1alpha1ParentGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['groups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1alpha1)[':parent']['groups']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['groups']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['groups']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1alpha1ParentGroupsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['groups']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1alpha1ParentGroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1alpha1ParentGroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1alpha1[':parent'].groups.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1alpha1ParentGroupsMutationKey() {
  return ['v1alpha1', '/v1alpha1/:parent/groups', 'POST'] as const
}

export function getPostV1alpha1ParentGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['groups']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1alpha1)[':parent']['groups']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1alpha1ParentGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1alpha1)[':parent']['groups']['$post']>,
    ) {
      return parseResponse(client.v1alpha1[':parent'].groups.$post(args, options))
    },
  })
}

export function usePostV1alpha1ParentGroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['groups']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1alpha1)[':parent']['groups']['$post']>,
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
  const mutationDefaults = getPostV1alpha1ParentGroupsMutationOptions<TError, TOnMutateResult>(
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

export function getV1alpha1ParentImportDataFilesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1alpha1)[':parent']['importDataFiles']['$get']>
  >,
) {
  return ['v1alpha1', '/v1alpha1/:parent/importDataFiles', toValue(args)] as const
}

export function getV1alpha1ParentImportDataFilesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1alpha1)[':parent']['importDataFiles']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1alpha1ParentImportDataFilesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1alpha1[':parent'].importDataFiles.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1alpha1ParentImportDataFiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['importDataFiles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1alpha1)[':parent']['importDataFiles']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['importDataFiles']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['importDataFiles']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1alpha1ParentImportDataFilesQueryKey>
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
          Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['importDataFiles']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1alpha1ParentImportDataFilesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1alpha1ParentImportDataFilesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1alpha1[':parent'].importDataFiles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1alpha1ParentImportDataFilesMutationKey() {
  return ['v1alpha1', '/v1alpha1/:parent/importDataFiles', 'POST'] as const
}

export function getPostV1alpha1ParentImportDataFilesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['importDataFiles']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1alpha1)[':parent']['importDataFiles']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1alpha1ParentImportDataFilesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1alpha1)[':parent']['importDataFiles']['$post']>,
    ) {
      return parseResponse(client.v1alpha1[':parent'].importDataFiles.$post(args, options))
    },
  })
}

export function usePostV1alpha1ParentImportDataFiles<
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
                Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['importDataFiles']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1alpha1)[':parent']['importDataFiles']['$post']>,
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
  const mutationDefaults = getPostV1alpha1ParentImportDataFilesMutationOptions<
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

export function getV1alpha1ParentImportJobsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1alpha1)[':parent']['importJobs']['$get']>
  >,
) {
  return ['v1alpha1', '/v1alpha1/:parent/importJobs', toValue(args)] as const
}

export function getV1alpha1ParentImportJobsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1alpha1)[':parent']['importJobs']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1alpha1ParentImportJobsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1alpha1[':parent'].importJobs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1alpha1ParentImportJobs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['importJobs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1alpha1)[':parent']['importJobs']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['importJobs']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['importJobs']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1alpha1ParentImportJobsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['importJobs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1alpha1ParentImportJobsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1alpha1ParentImportJobsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1alpha1[':parent'].importJobs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1alpha1ParentImportJobsMutationKey() {
  return ['v1alpha1', '/v1alpha1/:parent/importJobs', 'POST'] as const
}

export function getPostV1alpha1ParentImportJobsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['importJobs']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1alpha1)[':parent']['importJobs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1alpha1ParentImportJobsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1alpha1)[':parent']['importJobs']['$post']>,
    ) {
      return parseResponse(client.v1alpha1[':parent'].importJobs.$post(args, options))
    },
  })
}

export function usePostV1alpha1ParentImportJobs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['importJobs']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1alpha1)[':parent']['importJobs']['$post']>,
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
  const mutationDefaults = getPostV1alpha1ParentImportJobsMutationOptions<TError, TOnMutateResult>(
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

export function getV1alpha1ParentPreferenceSetsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1alpha1)[':parent']['preferenceSets']['$get']>
  >,
) {
  return ['v1alpha1', '/v1alpha1/:parent/preferenceSets', toValue(args)] as const
}

export function getV1alpha1ParentPreferenceSetsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1alpha1)[':parent']['preferenceSets']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1alpha1ParentPreferenceSetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1alpha1[':parent'].preferenceSets.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1alpha1ParentPreferenceSets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['preferenceSets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1alpha1)[':parent']['preferenceSets']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['preferenceSets']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['preferenceSets']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1alpha1ParentPreferenceSetsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['preferenceSets']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1alpha1ParentPreferenceSetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1alpha1ParentPreferenceSetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1alpha1[':parent'].preferenceSets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1alpha1ParentPreferenceSetsMutationKey() {
  return ['v1alpha1', '/v1alpha1/:parent/preferenceSets', 'POST'] as const
}

export function getPostV1alpha1ParentPreferenceSetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['preferenceSets']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1alpha1)[':parent']['preferenceSets']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1alpha1ParentPreferenceSetsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1alpha1)[':parent']['preferenceSets']['$post']>,
    ) {
      return parseResponse(client.v1alpha1[':parent'].preferenceSets.$post(args, options))
    },
  })
}

export function usePostV1alpha1ParentPreferenceSets<
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
                Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['preferenceSets']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1alpha1)[':parent']['preferenceSets']['$post']>,
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
  const mutationDefaults = getPostV1alpha1ParentPreferenceSetsMutationOptions<
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

export function getV1alpha1ParentReportConfigsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1alpha1)[':parent']['reportConfigs']['$get']>
  >,
) {
  return ['v1alpha1', '/v1alpha1/:parent/reportConfigs', toValue(args)] as const
}

export function getV1alpha1ParentReportConfigsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1alpha1)[':parent']['reportConfigs']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1alpha1ParentReportConfigsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1alpha1[':parent'].reportConfigs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1alpha1ParentReportConfigs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['reportConfigs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1alpha1)[':parent']['reportConfigs']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['reportConfigs']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['reportConfigs']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1alpha1ParentReportConfigsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['reportConfigs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1alpha1ParentReportConfigsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1alpha1ParentReportConfigsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1alpha1[':parent'].reportConfigs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1alpha1ParentReportConfigsMutationKey() {
  return ['v1alpha1', '/v1alpha1/:parent/reportConfigs', 'POST'] as const
}

export function getPostV1alpha1ParentReportConfigsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['reportConfigs']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1alpha1)[':parent']['reportConfigs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1alpha1ParentReportConfigsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1alpha1)[':parent']['reportConfigs']['$post']>,
    ) {
      return parseResponse(client.v1alpha1[':parent'].reportConfigs.$post(args, options))
    },
  })
}

export function usePostV1alpha1ParentReportConfigs<
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
                Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['reportConfigs']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1alpha1)[':parent']['reportConfigs']['$post']>,
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
  const mutationDefaults = getPostV1alpha1ParentReportConfigsMutationOptions<
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

export function getV1alpha1ParentReportsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1alpha1)[':parent']['reports']['$get']>>,
) {
  return ['v1alpha1', '/v1alpha1/:parent/reports', toValue(args)] as const
}

export function getV1alpha1ParentReportsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1alpha1)[':parent']['reports']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1alpha1ParentReportsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1alpha1[':parent'].reports.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1alpha1ParentReports<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['reports']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1alpha1)[':parent']['reports']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['reports']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['reports']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1alpha1ParentReportsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['reports']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1alpha1ParentReportsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1alpha1ParentReportsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1alpha1[':parent'].reports.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1alpha1ParentReportsMutationKey() {
  return ['v1alpha1', '/v1alpha1/:parent/reports', 'POST'] as const
}

export function getPostV1alpha1ParentReportsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['reports']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1alpha1)[':parent']['reports']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1alpha1ParentReportsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1alpha1)[':parent']['reports']['$post']>,
    ) {
      return parseResponse(client.v1alpha1[':parent'].reports.$post(args, options))
    },
  })
}

export function usePostV1alpha1ParentReports<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['reports']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1alpha1)[':parent']['reports']['$post']>,
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
  const mutationDefaults = getPostV1alpha1ParentReportsMutationOptions<TError, TOnMutateResult>(
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

export function getV1alpha1ParentSourcesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1alpha1)[':parent']['sources']['$get']>>,
) {
  return ['v1alpha1', '/v1alpha1/:parent/sources', toValue(args)] as const
}

export function getV1alpha1ParentSourcesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1alpha1)[':parent']['sources']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1alpha1ParentSourcesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1alpha1[':parent'].sources.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1alpha1ParentSources<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['sources']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1alpha1)[':parent']['sources']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['sources']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['sources']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1alpha1ParentSourcesQueryKey>
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
          Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['sources']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1alpha1ParentSourcesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1alpha1ParentSourcesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1alpha1[':parent'].sources.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1alpha1ParentSourcesMutationKey() {
  return ['v1alpha1', '/v1alpha1/:parent/sources', 'POST'] as const
}

export function getPostV1alpha1ParentSourcesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['sources']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1alpha1)[':parent']['sources']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1alpha1ParentSourcesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1alpha1)[':parent']['sources']['$post']>,
    ) {
      return parseResponse(client.v1alpha1[':parent'].sources.$post(args, options))
    },
  })
}

export function usePostV1alpha1ParentSources<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['sources']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1alpha1)[':parent']['sources']['$post']>,
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
  const mutationDefaults = getPostV1alpha1ParentSourcesMutationOptions<TError, TOnMutateResult>(
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
