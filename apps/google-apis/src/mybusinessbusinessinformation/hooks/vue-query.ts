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

export function getV1AttributesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.attributes.$get>>,
) {
  return ['v1', '/v1/attributes', toValue(args)] as const
}

export function getV1AttributesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.attributes.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AttributesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.attributes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1Attributes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.attributes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.attributes.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.attributes.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.attributes.$get>>>>
          >,
          ReturnType<typeof getV1AttributesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.attributes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1AttributesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AttributesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.attributes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1CategoriesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.categories.$get>>,
) {
  return ['v1', '/v1/categories', toValue(args)] as const
}

export function getV1CategoriesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.categories.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1CategoriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.categories.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1Categories<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.categories.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.categories.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.categories.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.categories.$get>>>>
          >,
          ReturnType<typeof getV1CategoriesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.categories.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1CategoriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1CategoriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.categories.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1CategoriesBatchGetQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['categories:batchGet']['$get']>>,
) {
  return ['v1', '/v1/categories:batchGet', toValue(args)] as const
}

export function getV1CategoriesBatchGetQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['categories:batchGet']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1CategoriesBatchGetQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['categories:batchGet'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1CategoriesBatchGet<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['categories:batchGet']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['categories:batchGet']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['categories:batchGet']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['categories:batchGet']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1CategoriesBatchGetQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['categories:batchGet']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CategoriesBatchGetQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1CategoriesBatchGetQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['categories:batchGet'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ChainsSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['chains:search']['$get']>>,
) {
  return ['v1', '/v1/chains:search', toValue(args)] as const
}

export function getV1ChainsSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['chains:search']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ChainsSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['chains:search'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ChainsSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['chains:search']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['chains:search']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['chains:search']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['chains:search']['$get']>>>
            >
          >,
          ReturnType<typeof getV1ChainsSearchQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['chains:search']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ChainsSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ChainsSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['chains:search'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1GoogleLocationsSearchMutationKey() {
  return ['v1', '/v1/googleLocations:search', 'POST'] as const
}

export function getPostV1GoogleLocationsSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['googleLocations:search']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['googleLocations:search']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1GoogleLocationsSearchMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)['googleLocations:search']['$post']>,
    ) {
      return parseResponse(client.v1['googleLocations:search'].$post(args, options))
    },
  })
}

export function usePostV1GoogleLocationsSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['googleLocations:search']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)['googleLocations:search']['$post']>,
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
  const mutationDefaults = getPostV1GoogleLocationsSearchMutationOptions<TError, TOnMutateResult>(
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

export function getV1NameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)[':name']['$get']>>,
) {
  return ['v1', '/v1/:name', toValue(args)] as const
}

export function getV1NameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)[':name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1NameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1[':name'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Name<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)[':name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$get']>>>
            >
          >,
          ReturnType<typeof getV1NameQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1NameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1NameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV1NameMutationKey() {
  return ['v1', '/v1/:name', 'DELETE'] as const
}

export function getDeleteV1NameMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$delete']>>>>
    >,
    TError,
    InferRequestType<(typeof client.v1)[':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1NameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':name']['$delete']>) {
      return parseResponse(client.v1[':name'].$delete(args, options))
    },
  })
}

export function useDeleteV1Name<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)[':name']['$delete']>,
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
  const mutationDefaults = getDeleteV1NameMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchV1NameMutationKey() {
  return ['v1', '/v1/:name', 'PATCH'] as const
}

export function getPatchV1NameMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$patch']>>>>
    >,
    TError,
    InferRequestType<(typeof client.v1)[':name']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1NameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':name']['$patch']>) {
      return parseResponse(client.v1[':name'].$patch(args, options))
    },
  })
}

export function usePatchV1Name<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)[':name']['$patch']>,
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
  const mutationDefaults = getPatchV1NameMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1NameAssociateMutationKey() {
  return ['v1', '/v1/:name:associate', 'POST'] as const
}

export function getPostV1NameAssociateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name:associate']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':name:associate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1NameAssociateMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':name:associate']['$post']>) {
      return parseResponse(client.v1[':name:associate'].$post(args, options))
    },
  })
}

export function usePostV1NameAssociate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)[':name:associate']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)[':name:associate']['$post']>,
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
  const mutationDefaults = getPostV1NameAssociateMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1NameClearLocationAssociationMutationKey() {
  return ['v1', '/v1/:name:clearLocationAssociation', 'POST'] as const
}

export function getPostV1NameClearLocationAssociationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':name:clearLocationAssociation']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':name:clearLocationAssociation']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1NameClearLocationAssociationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)[':name:clearLocationAssociation']['$post']>,
    ) {
      return parseResponse(client.v1[':name:clearLocationAssociation'].$post(args, options))
    },
  })
}

export function usePostV1NameClearLocationAssociation<
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
                Awaited<ReturnType<(typeof client.v1)[':name:clearLocationAssociation']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)[':name:clearLocationAssociation']['$post']>,
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
  const mutationDefaults = getPostV1NameClearLocationAssociationMutationOptions<
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

export function getV1NameGetGoogleUpdatedQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)[':name:getGoogleUpdated']['$get']>>,
) {
  return ['v1', '/v1/:name:getGoogleUpdated', toValue(args)] as const
}

export function getV1NameGetGoogleUpdatedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)[':name:getGoogleUpdated']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1NameGetGoogleUpdatedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1[':name:getGoogleUpdated'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1NameGetGoogleUpdated<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':name:getGoogleUpdated']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)[':name:getGoogleUpdated']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)[':name:getGoogleUpdated']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)[':name:getGoogleUpdated']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1NameGetGoogleUpdatedQueryKey>
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
          Awaited<ReturnType<(typeof client.v1)[':name:getGoogleUpdated']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1NameGetGoogleUpdatedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1NameGetGoogleUpdatedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1[':name:getGoogleUpdated'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ParentLocationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)[':parent']['locations']['$get']>>,
) {
  return ['v1', '/v1/:parent/locations', toValue(args)] as const
}

export function getV1ParentLocationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)[':parent']['locations']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ParentLocationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1[':parent'].locations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ParentLocations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['locations']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)[':parent']['locations']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)[':parent']['locations']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)[':parent']['locations']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ParentLocationsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1)[':parent']['locations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ParentLocationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ParentLocationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1[':parent'].locations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1ParentLocationsMutationKey() {
  return ['v1', '/v1/:parent/locations', 'POST'] as const
}

export function getPostV1ParentLocationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['locations']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':parent']['locations']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ParentLocationsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':parent']['locations']['$post']>) {
      return parseResponse(client.v1[':parent'].locations.$post(args, options))
    },
  })
}

export function usePostV1ParentLocations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)[':parent']['locations']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)[':parent']['locations']['$post']>,
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
  const mutationDefaults = getPostV1ParentLocationsMutationOptions<TError, TOnMutateResult>(
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
