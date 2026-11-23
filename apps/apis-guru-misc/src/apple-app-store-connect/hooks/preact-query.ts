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

export function getPatchV1AgeRatingDeclarationsIdMutationKey() {
  return ['v1', '/v1/ageRatingDeclarations/:id', 'PATCH'] as const
}

export function getPatchV1AgeRatingDeclarationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.ageRatingDeclarations)[':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.ageRatingDeclarations)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1AgeRatingDeclarationsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.ageRatingDeclarations)[':id']['$patch']>,
    ) {
      return parseResponse(client.v1.ageRatingDeclarations[':id'].$patch(args, options))
    },
  })
}

export function usePatchV1AgeRatingDeclarationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.ageRatingDeclarations)[':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.ageRatingDeclarations)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV1AgeRatingDeclarationsIdMutationOptions<
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

export function getV1AppCategoriesQueryKey(
  args: InferRequestType<typeof client.v1.appCategories.$get>,
) {
  return ['v1', '/v1/appCategories', args] as const
}

export function getV1AppCategoriesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.appCategories.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.appCategories.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.appCategories.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppCategoriesQueryKey>
  >({
    queryKey: getV1AppCategoriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.appCategories.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1AppCategories<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.appCategories.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.appCategories.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.appCategories.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppCategoriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1AppCategoriesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1AppCategories<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.appCategories.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.appCategories.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.appCategories.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppCategoriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1AppCategoriesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1AppCategoriesIdQueryKey(
  args: InferRequestType<(typeof client.v1.appCategories)[':id']['$get']>,
) {
  return ['v1', '/v1/appCategories/:id', args] as const
}

export function getV1AppCategoriesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.appCategories)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.appCategories)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.appCategories)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppCategoriesIdQueryKey>
  >({
    queryKey: getV1AppCategoriesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.appCategories[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1AppCategoriesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.appCategories)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.appCategories)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.appCategories)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppCategoriesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1AppCategoriesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1AppCategoriesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.appCategories)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.appCategories)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.appCategories)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppCategoriesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1AppCategoriesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1AppCategoriesIdParentQueryKey(
  args: InferRequestType<(typeof client.v1.appCategories)[':id']['parent']['$get']>,
) {
  return ['v1', '/v1/appCategories/:id/parent', args] as const
}

export function getV1AppCategoriesIdParentQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.appCategories)[':id']['parent']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.appCategories)[':id']['parent']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.appCategories)[':id']['parent']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppCategoriesIdParentQueryKey>
  >({
    queryKey: getV1AppCategoriesIdParentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.appCategories[':id'].parent.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1AppCategoriesIdParent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.appCategories)[':id']['parent']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.appCategories)[':id']['parent']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.appCategories)[':id']['parent']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppCategoriesIdParentQueryKey>
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
      ...getV1AppCategoriesIdParentQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1AppCategoriesIdParent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.appCategories)[':id']['parent']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.appCategories)[':id']['parent']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.appCategories)[':id']['parent']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppCategoriesIdParentQueryKey>
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
      ...getV1AppCategoriesIdParentQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1AppCategoriesIdSubcategoriesQueryKey(
  args: InferRequestType<(typeof client.v1.appCategories)[':id']['subcategories']['$get']>,
) {
  return ['v1', '/v1/appCategories/:id/subcategories', args] as const
}

export function getV1AppCategoriesIdSubcategoriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.appCategories)[':id']['subcategories']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.appCategories)[':id']['subcategories']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.appCategories)[':id']['subcategories']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppCategoriesIdSubcategoriesQueryKey>
  >({
    queryKey: getV1AppCategoriesIdSubcategoriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.appCategories[':id'].subcategories.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1AppCategoriesIdSubcategories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.appCategories)[':id']['subcategories']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.appCategories)[':id']['subcategories']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.appCategories)[':id']['subcategories']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppCategoriesIdSubcategoriesQueryKey>
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
      ...getV1AppCategoriesIdSubcategoriesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1AppCategoriesIdSubcategories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.appCategories)[':id']['subcategories']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.appCategories)[':id']['subcategories']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.appCategories)[':id']['subcategories']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppCategoriesIdSubcategoriesQueryKey>
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
      ...getV1AppCategoriesIdSubcategoriesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1AppEncryptionDeclarationsQueryKey(
  args: InferRequestType<typeof client.v1.appEncryptionDeclarations.$get>,
) {
  return ['v1', '/v1/appEncryptionDeclarations', args] as const
}

export function getV1AppEncryptionDeclarationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.appEncryptionDeclarations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.appEncryptionDeclarations.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.appEncryptionDeclarations.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppEncryptionDeclarationsQueryKey>
  >({
    queryKey: getV1AppEncryptionDeclarationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.appEncryptionDeclarations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1AppEncryptionDeclarations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.appEncryptionDeclarations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.appEncryptionDeclarations.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.appEncryptionDeclarations.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppEncryptionDeclarationsQueryKey>
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
      ...getV1AppEncryptionDeclarationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1AppEncryptionDeclarations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.appEncryptionDeclarations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.appEncryptionDeclarations.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.appEncryptionDeclarations.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppEncryptionDeclarationsQueryKey>
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
      ...getV1AppEncryptionDeclarationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1AppEncryptionDeclarationsIdQueryKey(
  args: InferRequestType<(typeof client.v1.appEncryptionDeclarations)[':id']['$get']>,
) {
  return ['v1', '/v1/appEncryptionDeclarations/:id', args] as const
}

export function getV1AppEncryptionDeclarationsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.appEncryptionDeclarations)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.appEncryptionDeclarations)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.appEncryptionDeclarations)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppEncryptionDeclarationsIdQueryKey>
  >({
    queryKey: getV1AppEncryptionDeclarationsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.appEncryptionDeclarations[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1AppEncryptionDeclarationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.appEncryptionDeclarations)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.appEncryptionDeclarations)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.appEncryptionDeclarations)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppEncryptionDeclarationsIdQueryKey>
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
      ...getV1AppEncryptionDeclarationsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1AppEncryptionDeclarationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.appEncryptionDeclarations)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.appEncryptionDeclarations)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.appEncryptionDeclarations)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppEncryptionDeclarationsIdQueryKey>
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
      ...getV1AppEncryptionDeclarationsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1AppEncryptionDeclarationsIdAppQueryKey(
  args: InferRequestType<(typeof client.v1.appEncryptionDeclarations)[':id']['app']['$get']>,
) {
  return ['v1', '/v1/appEncryptionDeclarations/:id/app', args] as const
}

export function getV1AppEncryptionDeclarationsIdAppQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.appEncryptionDeclarations)[':id']['app']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.appEncryptionDeclarations)[':id']['app']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.appEncryptionDeclarations)[':id']['app']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppEncryptionDeclarationsIdAppQueryKey>
  >({
    queryKey: getV1AppEncryptionDeclarationsIdAppQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.appEncryptionDeclarations[':id'].app.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1AppEncryptionDeclarationsIdApp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.appEncryptionDeclarations)[':id']['app']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.appEncryptionDeclarations)[':id']['app']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.appEncryptionDeclarations)[':id']['app']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppEncryptionDeclarationsIdAppQueryKey>
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
      ...getV1AppEncryptionDeclarationsIdAppQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1AppEncryptionDeclarationsIdApp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.appEncryptionDeclarations)[':id']['app']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.appEncryptionDeclarations)[':id']['app']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.appEncryptionDeclarations)[':id']['app']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppEncryptionDeclarationsIdAppQueryKey>
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
      ...getV1AppEncryptionDeclarationsIdAppQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV1AppEncryptionDeclarationsIdRelationshipsBuildsMutationKey() {
  return ['v1', '/v1/appEncryptionDeclarations/:id/relationships/builds', 'POST'] as const
}

export function getPostV1AppEncryptionDeclarationsIdRelationshipsBuildsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.appEncryptionDeclarations)[':id']['relationships']['builds']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v1.appEncryptionDeclarations)[':id']['relationships']['builds']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1AppEncryptionDeclarationsIdRelationshipsBuildsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.appEncryptionDeclarations)[':id']['relationships']['builds']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.appEncryptionDeclarations[':id'].relationships.builds.$post(args, options),
      )
    },
  })
}

export function usePostV1AppEncryptionDeclarationsIdRelationshipsBuilds<
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
                    (typeof client.v1.appEncryptionDeclarations)[':id']['relationships']['builds']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v1.appEncryptionDeclarations)[':id']['relationships']['builds']['$post']
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
  const mutationDefaults = getPostV1AppEncryptionDeclarationsIdRelationshipsBuildsMutationOptions<
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

export function getPostV1AppInfoLocalizationsMutationKey() {
  return ['v1', '/v1/appInfoLocalizations', 'POST'] as const
}

export function getPostV1AppInfoLocalizationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.appInfoLocalizations.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.appInfoLocalizations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AppInfoLocalizationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.appInfoLocalizations.$post>) {
      return parseResponse(client.v1.appInfoLocalizations.$post(args, options))
    },
  })
}

export function usePostV1AppInfoLocalizations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.appInfoLocalizations.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.appInfoLocalizations.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1AppInfoLocalizationsMutationOptions<TError, TOnMutateResult>(
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

export function getV1AppInfoLocalizationsIdQueryKey(
  args: InferRequestType<(typeof client.v1.appInfoLocalizations)[':id']['$get']>,
) {
  return ['v1', '/v1/appInfoLocalizations/:id', args] as const
}

export function getV1AppInfoLocalizationsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.appInfoLocalizations)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.appInfoLocalizations)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.appInfoLocalizations)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppInfoLocalizationsIdQueryKey>
  >({
    queryKey: getV1AppInfoLocalizationsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.appInfoLocalizations[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1AppInfoLocalizationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.appInfoLocalizations)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.appInfoLocalizations)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.appInfoLocalizations)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppInfoLocalizationsIdQueryKey>
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
      ...getV1AppInfoLocalizationsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1AppInfoLocalizationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.appInfoLocalizations)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.appInfoLocalizations)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.appInfoLocalizations)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppInfoLocalizationsIdQueryKey>
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
      ...getV1AppInfoLocalizationsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteV1AppInfoLocalizationsIdMutationKey() {
  return ['v1', '/v1/appInfoLocalizations/:id', 'DELETE'] as const
}

export function getDeleteV1AppInfoLocalizationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.appInfoLocalizations)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.appInfoLocalizations)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1AppInfoLocalizationsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.appInfoLocalizations)[':id']['$delete']>,
    ) {
      return parseResponse(client.v1.appInfoLocalizations[':id'].$delete(args, options))
    },
  })
}

export function useDeleteV1AppInfoLocalizationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.appInfoLocalizations)[':id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1.appInfoLocalizations)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1AppInfoLocalizationsIdMutationOptions<
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

export function getPatchV1AppInfoLocalizationsIdMutationKey() {
  return ['v1', '/v1/appInfoLocalizations/:id', 'PATCH'] as const
}

export function getPatchV1AppInfoLocalizationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.appInfoLocalizations)[':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.appInfoLocalizations)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1AppInfoLocalizationsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.appInfoLocalizations)[':id']['$patch']>,
    ) {
      return parseResponse(client.v1.appInfoLocalizations[':id'].$patch(args, options))
    },
  })
}

export function usePatchV1AppInfoLocalizationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.appInfoLocalizations)[':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.appInfoLocalizations)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV1AppInfoLocalizationsIdMutationOptions<TError, TOnMutateResult>(
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

export function getV1AppInfosIdQueryKey(
  args: InferRequestType<(typeof client.v1.appInfos)[':id']['$get']>,
) {
  return ['v1', '/v1/appInfos/:id', args] as const
}

export function getV1AppInfosIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.appInfos)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.appInfos)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.appInfos)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppInfosIdQueryKey>
  >({
    queryKey: getV1AppInfosIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.appInfos[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1AppInfosId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.appInfos)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.appInfos)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.appInfos)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppInfosIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1AppInfosIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1AppInfosId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.appInfos)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.appInfos)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.appInfos)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppInfosIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1AppInfosIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPatchV1AppInfosIdMutationKey() {
  return ['v1', '/v1/appInfos/:id', 'PATCH'] as const
}

export function getPatchV1AppInfosIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.appInfos)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.appInfos)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1AppInfosIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.appInfos)[':id']['$patch']>) {
      return parseResponse(client.v1.appInfos[':id'].$patch(args, options))
    },
  })
}

export function usePatchV1AppInfosId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.appInfos)[':id']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.appInfos)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV1AppInfosIdMutationOptions<TError, TOnMutateResult>(
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

export function getV1AppInfosIdAgeRatingDeclarationQueryKey(
  args: InferRequestType<(typeof client.v1.appInfos)[':id']['ageRatingDeclaration']['$get']>,
) {
  return ['v1', '/v1/appInfos/:id/ageRatingDeclaration', args] as const
}

export function getV1AppInfosIdAgeRatingDeclarationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.appInfos)[':id']['ageRatingDeclaration']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.appInfos)[':id']['ageRatingDeclaration']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.appInfos)[':id']['ageRatingDeclaration']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppInfosIdAgeRatingDeclarationQueryKey>
  >({
    queryKey: getV1AppInfosIdAgeRatingDeclarationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.appInfos[':id'].ageRatingDeclaration.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1AppInfosIdAgeRatingDeclaration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.appInfos)[':id']['ageRatingDeclaration']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.appInfos)[':id']['ageRatingDeclaration']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.appInfos)[':id']['ageRatingDeclaration']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppInfosIdAgeRatingDeclarationQueryKey>
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
      ...getV1AppInfosIdAgeRatingDeclarationQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1AppInfosIdAgeRatingDeclaration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.appInfos)[':id']['ageRatingDeclaration']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.appInfos)[':id']['ageRatingDeclaration']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.appInfos)[':id']['ageRatingDeclaration']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppInfosIdAgeRatingDeclarationQueryKey>
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
      ...getV1AppInfosIdAgeRatingDeclarationQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1AppInfosIdAppInfoLocalizationsQueryKey(
  args: InferRequestType<(typeof client.v1.appInfos)[':id']['appInfoLocalizations']['$get']>,
) {
  return ['v1', '/v1/appInfos/:id/appInfoLocalizations', args] as const
}

export function getV1AppInfosIdAppInfoLocalizationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.appInfos)[':id']['appInfoLocalizations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.appInfos)[':id']['appInfoLocalizations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.appInfos)[':id']['appInfoLocalizations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppInfosIdAppInfoLocalizationsQueryKey>
  >({
    queryKey: getV1AppInfosIdAppInfoLocalizationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.appInfos[':id'].appInfoLocalizations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1AppInfosIdAppInfoLocalizations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.appInfos)[':id']['appInfoLocalizations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.appInfos)[':id']['appInfoLocalizations']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.appInfos)[':id']['appInfoLocalizations']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppInfosIdAppInfoLocalizationsQueryKey>
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
      ...getV1AppInfosIdAppInfoLocalizationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1AppInfosIdAppInfoLocalizations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.appInfos)[':id']['appInfoLocalizations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.appInfos)[':id']['appInfoLocalizations']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.appInfos)[':id']['appInfoLocalizations']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppInfosIdAppInfoLocalizationsQueryKey>
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
      ...getV1AppInfosIdAppInfoLocalizationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1AppInfosIdPrimaryCategoryQueryKey(
  args: InferRequestType<(typeof client.v1.appInfos)[':id']['primaryCategory']['$get']>,
) {
  return ['v1', '/v1/appInfos/:id/primaryCategory', args] as const
}

export function getV1AppInfosIdPrimaryCategoryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.appInfos)[':id']['primaryCategory']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.appInfos)[':id']['primaryCategory']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.appInfos)[':id']['primaryCategory']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppInfosIdPrimaryCategoryQueryKey>
  >({
    queryKey: getV1AppInfosIdPrimaryCategoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.appInfos[':id'].primaryCategory.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1AppInfosIdPrimaryCategory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.appInfos)[':id']['primaryCategory']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.appInfos)[':id']['primaryCategory']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.appInfos)[':id']['primaryCategory']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppInfosIdPrimaryCategoryQueryKey>
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
      ...getV1AppInfosIdPrimaryCategoryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1AppInfosIdPrimaryCategory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.appInfos)[':id']['primaryCategory']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.appInfos)[':id']['primaryCategory']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.appInfos)[':id']['primaryCategory']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppInfosIdPrimaryCategoryQueryKey>
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
      ...getV1AppInfosIdPrimaryCategoryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1AppInfosIdPrimarySubcategoryOneQueryKey(
  args: InferRequestType<(typeof client.v1.appInfos)[':id']['primarySubcategoryOne']['$get']>,
) {
  return ['v1', '/v1/appInfos/:id/primarySubcategoryOne', args] as const
}

export function getV1AppInfosIdPrimarySubcategoryOneQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.appInfos)[':id']['primarySubcategoryOne']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.appInfos)[':id']['primarySubcategoryOne']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.appInfos)[':id']['primarySubcategoryOne']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppInfosIdPrimarySubcategoryOneQueryKey>
  >({
    queryKey: getV1AppInfosIdPrimarySubcategoryOneQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.appInfos[':id'].primarySubcategoryOne.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1AppInfosIdPrimarySubcategoryOne<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.appInfos)[':id']['primarySubcategoryOne']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.appInfos)[':id']['primarySubcategoryOne']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.appInfos)[':id']['primarySubcategoryOne']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppInfosIdPrimarySubcategoryOneQueryKey>
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
      ...getV1AppInfosIdPrimarySubcategoryOneQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1AppInfosIdPrimarySubcategoryOne<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.appInfos)[':id']['primarySubcategoryOne']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.appInfos)[':id']['primarySubcategoryOne']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.appInfos)[':id']['primarySubcategoryOne']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppInfosIdPrimarySubcategoryOneQueryKey>
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
      ...getV1AppInfosIdPrimarySubcategoryOneQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1AppInfosIdPrimarySubcategoryTwoQueryKey(
  args: InferRequestType<(typeof client.v1.appInfos)[':id']['primarySubcategoryTwo']['$get']>,
) {
  return ['v1', '/v1/appInfos/:id/primarySubcategoryTwo', args] as const
}

export function getV1AppInfosIdPrimarySubcategoryTwoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.appInfos)[':id']['primarySubcategoryTwo']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.appInfos)[':id']['primarySubcategoryTwo']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.appInfos)[':id']['primarySubcategoryTwo']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppInfosIdPrimarySubcategoryTwoQueryKey>
  >({
    queryKey: getV1AppInfosIdPrimarySubcategoryTwoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.appInfos[':id'].primarySubcategoryTwo.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1AppInfosIdPrimarySubcategoryTwo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.appInfos)[':id']['primarySubcategoryTwo']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.appInfos)[':id']['primarySubcategoryTwo']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.appInfos)[':id']['primarySubcategoryTwo']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppInfosIdPrimarySubcategoryTwoQueryKey>
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
      ...getV1AppInfosIdPrimarySubcategoryTwoQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1AppInfosIdPrimarySubcategoryTwo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.appInfos)[':id']['primarySubcategoryTwo']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.appInfos)[':id']['primarySubcategoryTwo']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.appInfos)[':id']['primarySubcategoryTwo']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppInfosIdPrimarySubcategoryTwoQueryKey>
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
      ...getV1AppInfosIdPrimarySubcategoryTwoQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1AppInfosIdSecondaryCategoryQueryKey(
  args: InferRequestType<(typeof client.v1.appInfos)[':id']['secondaryCategory']['$get']>,
) {
  return ['v1', '/v1/appInfos/:id/secondaryCategory', args] as const
}

export function getV1AppInfosIdSecondaryCategoryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.appInfos)[':id']['secondaryCategory']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.appInfos)[':id']['secondaryCategory']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.appInfos)[':id']['secondaryCategory']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppInfosIdSecondaryCategoryQueryKey>
  >({
    queryKey: getV1AppInfosIdSecondaryCategoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.appInfos[':id'].secondaryCategory.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1AppInfosIdSecondaryCategory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.appInfos)[':id']['secondaryCategory']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.appInfos)[':id']['secondaryCategory']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.appInfos)[':id']['secondaryCategory']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppInfosIdSecondaryCategoryQueryKey>
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
      ...getV1AppInfosIdSecondaryCategoryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1AppInfosIdSecondaryCategory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.appInfos)[':id']['secondaryCategory']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.appInfos)[':id']['secondaryCategory']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.appInfos)[':id']['secondaryCategory']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppInfosIdSecondaryCategoryQueryKey>
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
      ...getV1AppInfosIdSecondaryCategoryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1AppInfosIdSecondarySubcategoryOneQueryKey(
  args: InferRequestType<(typeof client.v1.appInfos)[':id']['secondarySubcategoryOne']['$get']>,
) {
  return ['v1', '/v1/appInfos/:id/secondarySubcategoryOne', args] as const
}

export function getV1AppInfosIdSecondarySubcategoryOneQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.appInfos)[':id']['secondarySubcategoryOne']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.appInfos)[':id']['secondarySubcategoryOne']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.appInfos)[':id']['secondarySubcategoryOne']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppInfosIdSecondarySubcategoryOneQueryKey>
  >({
    queryKey: getV1AppInfosIdSecondarySubcategoryOneQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.appInfos[':id'].secondarySubcategoryOne.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1AppInfosIdSecondarySubcategoryOne<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.appInfos)[':id']['secondarySubcategoryOne']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.appInfos)[':id']['secondarySubcategoryOne']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.appInfos)[':id']['secondarySubcategoryOne']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppInfosIdSecondarySubcategoryOneQueryKey>
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
      ...getV1AppInfosIdSecondarySubcategoryOneQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1AppInfosIdSecondarySubcategoryOne<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.appInfos)[':id']['secondarySubcategoryOne']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.appInfos)[':id']['secondarySubcategoryOne']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.appInfos)[':id']['secondarySubcategoryOne']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppInfosIdSecondarySubcategoryOneQueryKey>
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
      ...getV1AppInfosIdSecondarySubcategoryOneQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1AppInfosIdSecondarySubcategoryTwoQueryKey(
  args: InferRequestType<(typeof client.v1.appInfos)[':id']['secondarySubcategoryTwo']['$get']>,
) {
  return ['v1', '/v1/appInfos/:id/secondarySubcategoryTwo', args] as const
}

export function getV1AppInfosIdSecondarySubcategoryTwoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.appInfos)[':id']['secondarySubcategoryTwo']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.appInfos)[':id']['secondarySubcategoryTwo']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.appInfos)[':id']['secondarySubcategoryTwo']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppInfosIdSecondarySubcategoryTwoQueryKey>
  >({
    queryKey: getV1AppInfosIdSecondarySubcategoryTwoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.appInfos[':id'].secondarySubcategoryTwo.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1AppInfosIdSecondarySubcategoryTwo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.appInfos)[':id']['secondarySubcategoryTwo']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.appInfos)[':id']['secondarySubcategoryTwo']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.appInfos)[':id']['secondarySubcategoryTwo']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppInfosIdSecondarySubcategoryTwoQueryKey>
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
      ...getV1AppInfosIdSecondarySubcategoryTwoQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1AppInfosIdSecondarySubcategoryTwo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.appInfos)[':id']['secondarySubcategoryTwo']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.appInfos)[':id']['secondarySubcategoryTwo']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.appInfos)[':id']['secondarySubcategoryTwo']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppInfosIdSecondarySubcategoryTwoQueryKey>
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
      ...getV1AppInfosIdSecondarySubcategoryTwoQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV1AppPreOrdersMutationKey() {
  return ['v1', '/v1/appPreOrders', 'POST'] as const
}

export function getPostV1AppPreOrdersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.appPreOrders.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.appPreOrders.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AppPreOrdersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.appPreOrders.$post>) {
      return parseResponse(client.v1.appPreOrders.$post(args, options))
    },
  })
}

export function usePostV1AppPreOrders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.appPreOrders.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.appPreOrders.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1AppPreOrdersMutationOptions<TError, TOnMutateResult>(
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

export function getV1AppPreOrdersIdQueryKey(
  args: InferRequestType<(typeof client.v1.appPreOrders)[':id']['$get']>,
) {
  return ['v1', '/v1/appPreOrders/:id', args] as const
}

export function getV1AppPreOrdersIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.appPreOrders)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.appPreOrders)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.appPreOrders)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppPreOrdersIdQueryKey>
  >({
    queryKey: getV1AppPreOrdersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.appPreOrders[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1AppPreOrdersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.appPreOrders)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.appPreOrders)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.appPreOrders)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppPreOrdersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1AppPreOrdersIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1AppPreOrdersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.appPreOrders)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.appPreOrders)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.appPreOrders)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppPreOrdersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1AppPreOrdersIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteV1AppPreOrdersIdMutationKey() {
  return ['v1', '/v1/appPreOrders/:id', 'DELETE'] as const
}

export function getDeleteV1AppPreOrdersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.appPreOrders)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.appPreOrders)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1AppPreOrdersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.appPreOrders)[':id']['$delete']>) {
      return parseResponse(client.v1.appPreOrders[':id'].$delete(args, options))
    },
  })
}

export function useDeleteV1AppPreOrdersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.appPreOrders)[':id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1.appPreOrders)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1AppPreOrdersIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchV1AppPreOrdersIdMutationKey() {
  return ['v1', '/v1/appPreOrders/:id', 'PATCH'] as const
}

export function getPatchV1AppPreOrdersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.appPreOrders)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.appPreOrders)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1AppPreOrdersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.appPreOrders)[':id']['$patch']>) {
      return parseResponse(client.v1.appPreOrders[':id'].$patch(args, options))
    },
  })
}

export function usePatchV1AppPreOrdersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.appPreOrders)[':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.appPreOrders)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV1AppPreOrdersIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1AppPreviewSetsMutationKey() {
  return ['v1', '/v1/appPreviewSets', 'POST'] as const
}

export function getPostV1AppPreviewSetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.appPreviewSets.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.appPreviewSets.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AppPreviewSetsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.appPreviewSets.$post>) {
      return parseResponse(client.v1.appPreviewSets.$post(args, options))
    },
  })
}

export function usePostV1AppPreviewSets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.appPreviewSets.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.appPreviewSets.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1AppPreviewSetsMutationOptions<TError, TOnMutateResult>(
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

export function getV1AppPreviewSetsIdQueryKey(
  args: InferRequestType<(typeof client.v1.appPreviewSets)[':id']['$get']>,
) {
  return ['v1', '/v1/appPreviewSets/:id', args] as const
}

export function getV1AppPreviewSetsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.appPreviewSets)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.appPreviewSets)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.appPreviewSets)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppPreviewSetsIdQueryKey>
  >({
    queryKey: getV1AppPreviewSetsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.appPreviewSets[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1AppPreviewSetsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.appPreviewSets)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.appPreviewSets)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.appPreviewSets)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppPreviewSetsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1AppPreviewSetsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1AppPreviewSetsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.appPreviewSets)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.appPreviewSets)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.appPreviewSets)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppPreviewSetsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1AppPreviewSetsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteV1AppPreviewSetsIdMutationKey() {
  return ['v1', '/v1/appPreviewSets/:id', 'DELETE'] as const
}

export function getDeleteV1AppPreviewSetsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.appPreviewSets)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.appPreviewSets)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1AppPreviewSetsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.appPreviewSets)[':id']['$delete']>) {
      return parseResponse(client.v1.appPreviewSets[':id'].$delete(args, options))
    },
  })
}

export function useDeleteV1AppPreviewSetsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.appPreviewSets)[':id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1.appPreviewSets)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1AppPreviewSetsIdMutationOptions<TError, TOnMutateResult>(
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

export function getV1AppPreviewSetsIdAppPreviewsQueryKey(
  args: InferRequestType<(typeof client.v1.appPreviewSets)[':id']['appPreviews']['$get']>,
) {
  return ['v1', '/v1/appPreviewSets/:id/appPreviews', args] as const
}

export function getV1AppPreviewSetsIdAppPreviewsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.appPreviewSets)[':id']['appPreviews']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.appPreviewSets)[':id']['appPreviews']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.appPreviewSets)[':id']['appPreviews']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppPreviewSetsIdAppPreviewsQueryKey>
  >({
    queryKey: getV1AppPreviewSetsIdAppPreviewsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.appPreviewSets[':id'].appPreviews.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1AppPreviewSetsIdAppPreviews<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.appPreviewSets)[':id']['appPreviews']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.appPreviewSets)[':id']['appPreviews']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.appPreviewSets)[':id']['appPreviews']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppPreviewSetsIdAppPreviewsQueryKey>
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
      ...getV1AppPreviewSetsIdAppPreviewsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1AppPreviewSetsIdAppPreviews<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.appPreviewSets)[':id']['appPreviews']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.appPreviewSets)[':id']['appPreviews']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.appPreviewSets)[':id']['appPreviews']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppPreviewSetsIdAppPreviewsQueryKey>
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
      ...getV1AppPreviewSetsIdAppPreviewsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1AppPreviewSetsIdRelationshipsAppPreviewsQueryKey(
  args: InferRequestType<
    (typeof client.v1.appPreviewSets)[':id']['relationships']['appPreviews']['$get']
  >,
) {
  return ['v1', '/v1/appPreviewSets/:id/relationships/appPreviews', args] as const
}

export function getV1AppPreviewSetsIdRelationshipsAppPreviewsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.appPreviewSets)[':id']['relationships']['appPreviews']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.appPreviewSets)[':id']['relationships']['appPreviews']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.appPreviewSets)[':id']['relationships']['appPreviews']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppPreviewSetsIdRelationshipsAppPreviewsQueryKey>
  >({
    queryKey: getV1AppPreviewSetsIdRelationshipsAppPreviewsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.appPreviewSets[':id'].relationships.appPreviews.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1AppPreviewSetsIdRelationshipsAppPreviews<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.appPreviewSets)[':id']['relationships']['appPreviews']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.appPreviewSets)[':id']['relationships']['appPreviews']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.appPreviewSets)[':id']['relationships']['appPreviews']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppPreviewSetsIdRelationshipsAppPreviewsQueryKey>
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
      ...getV1AppPreviewSetsIdRelationshipsAppPreviewsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1AppPreviewSetsIdRelationshipsAppPreviews<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.appPreviewSets)[':id']['relationships']['appPreviews']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.appPreviewSets)[':id']['relationships']['appPreviews']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.appPreviewSets)[':id']['relationships']['appPreviews']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppPreviewSetsIdRelationshipsAppPreviewsQueryKey>
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
      ...getV1AppPreviewSetsIdRelationshipsAppPreviewsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPatchV1AppPreviewSetsIdRelationshipsAppPreviewsMutationKey() {
  return ['v1', '/v1/appPreviewSets/:id/relationships/appPreviews', 'PATCH'] as const
}

export function getPatchV1AppPreviewSetsIdRelationshipsAppPreviewsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.appPreviewSets)[':id']['relationships']['appPreviews']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v1.appPreviewSets)[':id']['relationships']['appPreviews']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchV1AppPreviewSetsIdRelationshipsAppPreviewsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.appPreviewSets)[':id']['relationships']['appPreviews']['$patch']
      >,
    ) {
      return parseResponse(
        client.v1.appPreviewSets[':id'].relationships.appPreviews.$patch(args, options),
      )
    },
  })
}

export function usePatchV1AppPreviewSetsIdRelationshipsAppPreviews<
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
                    (typeof client.v1.appPreviewSets)[':id']['relationships']['appPreviews']['$patch']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v1.appPreviewSets)[':id']['relationships']['appPreviews']['$patch']
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
  const mutationDefaults = getPatchV1AppPreviewSetsIdRelationshipsAppPreviewsMutationOptions<
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

export function getPostV1AppPreviewsMutationKey() {
  return ['v1', '/v1/appPreviews', 'POST'] as const
}

export function getPostV1AppPreviewsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.appPreviews.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.appPreviews.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AppPreviewsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.appPreviews.$post>) {
      return parseResponse(client.v1.appPreviews.$post(args, options))
    },
  })
}

export function usePostV1AppPreviews<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.appPreviews.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.appPreviews.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1AppPreviewsMutationOptions<TError, TOnMutateResult>(
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

export function getV1AppPreviewsIdQueryKey(
  args: InferRequestType<(typeof client.v1.appPreviews)[':id']['$get']>,
) {
  return ['v1', '/v1/appPreviews/:id', args] as const
}

export function getV1AppPreviewsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.appPreviews)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.appPreviews)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.appPreviews)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppPreviewsIdQueryKey>
  >({
    queryKey: getV1AppPreviewsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.appPreviews[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1AppPreviewsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.appPreviews)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.appPreviews)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.appPreviews)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppPreviewsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1AppPreviewsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1AppPreviewsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.appPreviews)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.appPreviews)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.appPreviews)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppPreviewsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1AppPreviewsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteV1AppPreviewsIdMutationKey() {
  return ['v1', '/v1/appPreviews/:id', 'DELETE'] as const
}

export function getDeleteV1AppPreviewsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.appPreviews)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.appPreviews)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1AppPreviewsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.appPreviews)[':id']['$delete']>) {
      return parseResponse(client.v1.appPreviews[':id'].$delete(args, options))
    },
  })
}

export function useDeleteV1AppPreviewsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.appPreviews)[':id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1.appPreviews)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1AppPreviewsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchV1AppPreviewsIdMutationKey() {
  return ['v1', '/v1/appPreviews/:id', 'PATCH'] as const
}

export function getPatchV1AppPreviewsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.appPreviews)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.appPreviews)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1AppPreviewsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.appPreviews)[':id']['$patch']>) {
      return parseResponse(client.v1.appPreviews[':id'].$patch(args, options))
    },
  })
}

export function usePatchV1AppPreviewsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.appPreviews)[':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.appPreviews)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV1AppPreviewsIdMutationOptions<TError, TOnMutateResult>(
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

export function getV1AppPricePointsQueryKey(
  args: InferRequestType<typeof client.v1.appPricePoints.$get>,
) {
  return ['v1', '/v1/appPricePoints', args] as const
}

export function getV1AppPricePointsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.appPricePoints.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.appPricePoints.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.appPricePoints.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppPricePointsQueryKey>
  >({
    queryKey: getV1AppPricePointsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.appPricePoints.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1AppPricePoints<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.appPricePoints.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.appPricePoints.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.appPricePoints.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppPricePointsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1AppPricePointsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1AppPricePoints<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.appPricePoints.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.appPricePoints.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.appPricePoints.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppPricePointsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1AppPricePointsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1AppPricePointsIdQueryKey(
  args: InferRequestType<(typeof client.v1.appPricePoints)[':id']['$get']>,
) {
  return ['v1', '/v1/appPricePoints/:id', args] as const
}

export function getV1AppPricePointsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.appPricePoints)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.appPricePoints)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.appPricePoints)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppPricePointsIdQueryKey>
  >({
    queryKey: getV1AppPricePointsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.appPricePoints[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1AppPricePointsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.appPricePoints)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.appPricePoints)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.appPricePoints)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppPricePointsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1AppPricePointsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1AppPricePointsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.appPricePoints)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.appPricePoints)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.appPricePoints)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppPricePointsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1AppPricePointsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1AppPricePointsIdTerritoryQueryKey(
  args: InferRequestType<(typeof client.v1.appPricePoints)[':id']['territory']['$get']>,
) {
  return ['v1', '/v1/appPricePoints/:id/territory', args] as const
}

export function getV1AppPricePointsIdTerritoryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.appPricePoints)[':id']['territory']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.appPricePoints)[':id']['territory']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.appPricePoints)[':id']['territory']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppPricePointsIdTerritoryQueryKey>
  >({
    queryKey: getV1AppPricePointsIdTerritoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.appPricePoints[':id'].territory.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1AppPricePointsIdTerritory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.appPricePoints)[':id']['territory']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.appPricePoints)[':id']['territory']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.appPricePoints)[':id']['territory']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppPricePointsIdTerritoryQueryKey>
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
      ...getV1AppPricePointsIdTerritoryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1AppPricePointsIdTerritory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.appPricePoints)[':id']['territory']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.appPricePoints)[':id']['territory']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.appPricePoints)[':id']['territory']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppPricePointsIdTerritoryQueryKey>
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
      ...getV1AppPricePointsIdTerritoryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1AppPriceTiersQueryKey(
  args: InferRequestType<typeof client.v1.appPriceTiers.$get>,
) {
  return ['v1', '/v1/appPriceTiers', args] as const
}

export function getV1AppPriceTiersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.appPriceTiers.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.appPriceTiers.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.appPriceTiers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppPriceTiersQueryKey>
  >({
    queryKey: getV1AppPriceTiersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.appPriceTiers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1AppPriceTiers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.appPriceTiers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.appPriceTiers.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.appPriceTiers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppPriceTiersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1AppPriceTiersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1AppPriceTiers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.appPriceTiers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.appPriceTiers.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.appPriceTiers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppPriceTiersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1AppPriceTiersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1AppPriceTiersIdQueryKey(
  args: InferRequestType<(typeof client.v1.appPriceTiers)[':id']['$get']>,
) {
  return ['v1', '/v1/appPriceTiers/:id', args] as const
}

export function getV1AppPriceTiersIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.appPriceTiers)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.appPriceTiers)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.appPriceTiers)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppPriceTiersIdQueryKey>
  >({
    queryKey: getV1AppPriceTiersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.appPriceTiers[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1AppPriceTiersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.appPriceTiers)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.appPriceTiers)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.appPriceTiers)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppPriceTiersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1AppPriceTiersIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1AppPriceTiersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.appPriceTiers)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.appPriceTiers)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.appPriceTiers)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppPriceTiersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1AppPriceTiersIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1AppPriceTiersIdPricePointsQueryKey(
  args: InferRequestType<(typeof client.v1.appPriceTiers)[':id']['pricePoints']['$get']>,
) {
  return ['v1', '/v1/appPriceTiers/:id/pricePoints', args] as const
}

export function getV1AppPriceTiersIdPricePointsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.appPriceTiers)[':id']['pricePoints']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.appPriceTiers)[':id']['pricePoints']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.appPriceTiers)[':id']['pricePoints']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppPriceTiersIdPricePointsQueryKey>
  >({
    queryKey: getV1AppPriceTiersIdPricePointsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.appPriceTiers[':id'].pricePoints.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1AppPriceTiersIdPricePoints<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.appPriceTiers)[':id']['pricePoints']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.appPriceTiers)[':id']['pricePoints']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.appPriceTiers)[':id']['pricePoints']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppPriceTiersIdPricePointsQueryKey>
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
      ...getV1AppPriceTiersIdPricePointsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1AppPriceTiersIdPricePoints<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.appPriceTiers)[':id']['pricePoints']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.appPriceTiers)[':id']['pricePoints']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.appPriceTiers)[':id']['pricePoints']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppPriceTiersIdPricePointsQueryKey>
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
      ...getV1AppPriceTiersIdPricePointsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1AppPricesIdQueryKey(
  args: InferRequestType<(typeof client.v1.appPrices)[':id']['$get']>,
) {
  return ['v1', '/v1/appPrices/:id', args] as const
}

export function getV1AppPricesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.appPrices)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.appPrices)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.appPrices)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppPricesIdQueryKey>
  >({
    queryKey: getV1AppPricesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.appPrices[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1AppPricesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.appPrices)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.appPrices)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.appPrices)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppPricesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1AppPricesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1AppPricesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.appPrices)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.appPrices)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.appPrices)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppPricesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1AppPricesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV1AppScreenshotSetsMutationKey() {
  return ['v1', '/v1/appScreenshotSets', 'POST'] as const
}

export function getPostV1AppScreenshotSetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.appScreenshotSets.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.appScreenshotSets.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AppScreenshotSetsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.appScreenshotSets.$post>) {
      return parseResponse(client.v1.appScreenshotSets.$post(args, options))
    },
  })
}

export function usePostV1AppScreenshotSets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.appScreenshotSets.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.appScreenshotSets.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1AppScreenshotSetsMutationOptions<TError, TOnMutateResult>(
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

export function getV1AppScreenshotSetsIdQueryKey(
  args: InferRequestType<(typeof client.v1.appScreenshotSets)[':id']['$get']>,
) {
  return ['v1', '/v1/appScreenshotSets/:id', args] as const
}

export function getV1AppScreenshotSetsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.appScreenshotSets)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.appScreenshotSets)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.appScreenshotSets)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppScreenshotSetsIdQueryKey>
  >({
    queryKey: getV1AppScreenshotSetsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.appScreenshotSets[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1AppScreenshotSetsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.appScreenshotSets)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.appScreenshotSets)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.appScreenshotSets)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppScreenshotSetsIdQueryKey>
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
      ...getV1AppScreenshotSetsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1AppScreenshotSetsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.appScreenshotSets)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.appScreenshotSets)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.appScreenshotSets)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppScreenshotSetsIdQueryKey>
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
      ...getV1AppScreenshotSetsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteV1AppScreenshotSetsIdMutationKey() {
  return ['v1', '/v1/appScreenshotSets/:id', 'DELETE'] as const
}

export function getDeleteV1AppScreenshotSetsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.appScreenshotSets)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.appScreenshotSets)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1AppScreenshotSetsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.appScreenshotSets)[':id']['$delete']>,
    ) {
      return parseResponse(client.v1.appScreenshotSets[':id'].$delete(args, options))
    },
  })
}

export function useDeleteV1AppScreenshotSetsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.appScreenshotSets)[':id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1.appScreenshotSets)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1AppScreenshotSetsIdMutationOptions<TError, TOnMutateResult>(
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

export function getV1AppScreenshotSetsIdAppScreenshotsQueryKey(
  args: InferRequestType<(typeof client.v1.appScreenshotSets)[':id']['appScreenshots']['$get']>,
) {
  return ['v1', '/v1/appScreenshotSets/:id/appScreenshots', args] as const
}

export function getV1AppScreenshotSetsIdAppScreenshotsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.appScreenshotSets)[':id']['appScreenshots']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.appScreenshotSets)[':id']['appScreenshots']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.appScreenshotSets)[':id']['appScreenshots']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppScreenshotSetsIdAppScreenshotsQueryKey>
  >({
    queryKey: getV1AppScreenshotSetsIdAppScreenshotsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.appScreenshotSets[':id'].appScreenshots.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1AppScreenshotSetsIdAppScreenshots<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.appScreenshotSets)[':id']['appScreenshots']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.appScreenshotSets)[':id']['appScreenshots']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.appScreenshotSets)[':id']['appScreenshots']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppScreenshotSetsIdAppScreenshotsQueryKey>
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
      ...getV1AppScreenshotSetsIdAppScreenshotsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1AppScreenshotSetsIdAppScreenshots<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.appScreenshotSets)[':id']['appScreenshots']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.appScreenshotSets)[':id']['appScreenshots']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.appScreenshotSets)[':id']['appScreenshots']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppScreenshotSetsIdAppScreenshotsQueryKey>
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
      ...getV1AppScreenshotSetsIdAppScreenshotsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1AppScreenshotSetsIdRelationshipsAppScreenshotsQueryKey(
  args: InferRequestType<
    (typeof client.v1.appScreenshotSets)[':id']['relationships']['appScreenshots']['$get']
  >,
) {
  return ['v1', '/v1/appScreenshotSets/:id/relationships/appScreenshots', args] as const
}

export function getV1AppScreenshotSetsIdRelationshipsAppScreenshotsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.appScreenshotSets)[':id']['relationships']['appScreenshots']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.appScreenshotSets)[':id']['relationships']['appScreenshots']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.appScreenshotSets)[':id']['relationships']['appScreenshots']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppScreenshotSetsIdRelationshipsAppScreenshotsQueryKey>
  >({
    queryKey: getV1AppScreenshotSetsIdRelationshipsAppScreenshotsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.appScreenshotSets[':id'].relationships.appScreenshots.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1AppScreenshotSetsIdRelationshipsAppScreenshots<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.appScreenshotSets)[':id']['relationships']['appScreenshots']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.appScreenshotSets)[':id']['relationships']['appScreenshots']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.appScreenshotSets)[':id']['relationships']['appScreenshots']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppScreenshotSetsIdRelationshipsAppScreenshotsQueryKey>
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
      ...getV1AppScreenshotSetsIdRelationshipsAppScreenshotsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1AppScreenshotSetsIdRelationshipsAppScreenshots<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.appScreenshotSets)[':id']['relationships']['appScreenshots']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.appScreenshotSets)[':id']['relationships']['appScreenshots']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.appScreenshotSets)[':id']['relationships']['appScreenshots']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppScreenshotSetsIdRelationshipsAppScreenshotsQueryKey>
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
      ...getV1AppScreenshotSetsIdRelationshipsAppScreenshotsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPatchV1AppScreenshotSetsIdRelationshipsAppScreenshotsMutationKey() {
  return ['v1', '/v1/appScreenshotSets/:id/relationships/appScreenshots', 'PATCH'] as const
}

export function getPatchV1AppScreenshotSetsIdRelationshipsAppScreenshotsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.appScreenshotSets)[':id']['relationships']['appScreenshots']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v1.appScreenshotSets)[':id']['relationships']['appScreenshots']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchV1AppScreenshotSetsIdRelationshipsAppScreenshotsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.appScreenshotSets)[':id']['relationships']['appScreenshots']['$patch']
      >,
    ) {
      return parseResponse(
        client.v1.appScreenshotSets[':id'].relationships.appScreenshots.$patch(args, options),
      )
    },
  })
}

export function usePatchV1AppScreenshotSetsIdRelationshipsAppScreenshots<
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
                    (typeof client.v1.appScreenshotSets)[':id']['relationships']['appScreenshots']['$patch']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v1.appScreenshotSets)[':id']['relationships']['appScreenshots']['$patch']
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
  const mutationDefaults = getPatchV1AppScreenshotSetsIdRelationshipsAppScreenshotsMutationOptions<
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

export function getPostV1AppScreenshotsMutationKey() {
  return ['v1', '/v1/appScreenshots', 'POST'] as const
}

export function getPostV1AppScreenshotsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.appScreenshots.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.appScreenshots.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AppScreenshotsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.appScreenshots.$post>) {
      return parseResponse(client.v1.appScreenshots.$post(args, options))
    },
  })
}

export function usePostV1AppScreenshots<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.appScreenshots.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.appScreenshots.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1AppScreenshotsMutationOptions<TError, TOnMutateResult>(
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

export function getV1AppScreenshotsIdQueryKey(
  args: InferRequestType<(typeof client.v1.appScreenshots)[':id']['$get']>,
) {
  return ['v1', '/v1/appScreenshots/:id', args] as const
}

export function getV1AppScreenshotsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.appScreenshots)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.appScreenshots)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.appScreenshots)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppScreenshotsIdQueryKey>
  >({
    queryKey: getV1AppScreenshotsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.appScreenshots[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1AppScreenshotsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.appScreenshots)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.appScreenshots)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.appScreenshots)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppScreenshotsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1AppScreenshotsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1AppScreenshotsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.appScreenshots)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.appScreenshots)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.appScreenshots)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppScreenshotsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1AppScreenshotsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteV1AppScreenshotsIdMutationKey() {
  return ['v1', '/v1/appScreenshots/:id', 'DELETE'] as const
}

export function getDeleteV1AppScreenshotsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.appScreenshots)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.appScreenshots)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1AppScreenshotsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.appScreenshots)[':id']['$delete']>) {
      return parseResponse(client.v1.appScreenshots[':id'].$delete(args, options))
    },
  })
}

export function useDeleteV1AppScreenshotsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.appScreenshots)[':id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1.appScreenshots)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1AppScreenshotsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchV1AppScreenshotsIdMutationKey() {
  return ['v1', '/v1/appScreenshots/:id', 'PATCH'] as const
}

export function getPatchV1AppScreenshotsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.appScreenshots)[':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.appScreenshots)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1AppScreenshotsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.appScreenshots)[':id']['$patch']>) {
      return parseResponse(client.v1.appScreenshots[':id'].$patch(args, options))
    },
  })
}

export function usePatchV1AppScreenshotsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.appScreenshots)[':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.appScreenshots)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV1AppScreenshotsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1AppStoreReviewAttachmentsMutationKey() {
  return ['v1', '/v1/appStoreReviewAttachments', 'POST'] as const
}

export function getPostV1AppStoreReviewAttachmentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.appStoreReviewAttachments.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.appStoreReviewAttachments.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AppStoreReviewAttachmentsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.appStoreReviewAttachments.$post>) {
      return parseResponse(client.v1.appStoreReviewAttachments.$post(args, options))
    },
  })
}

export function usePostV1AppStoreReviewAttachments<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.appStoreReviewAttachments.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.appStoreReviewAttachments.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1AppStoreReviewAttachmentsMutationOptions<
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

export function getV1AppStoreReviewAttachmentsIdQueryKey(
  args: InferRequestType<(typeof client.v1.appStoreReviewAttachments)[':id']['$get']>,
) {
  return ['v1', '/v1/appStoreReviewAttachments/:id', args] as const
}

export function getV1AppStoreReviewAttachmentsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.appStoreReviewAttachments)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.appStoreReviewAttachments)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.appStoreReviewAttachments)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppStoreReviewAttachmentsIdQueryKey>
  >({
    queryKey: getV1AppStoreReviewAttachmentsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.appStoreReviewAttachments[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1AppStoreReviewAttachmentsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.appStoreReviewAttachments)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.appStoreReviewAttachments)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.appStoreReviewAttachments)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppStoreReviewAttachmentsIdQueryKey>
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
      ...getV1AppStoreReviewAttachmentsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1AppStoreReviewAttachmentsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.appStoreReviewAttachments)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.appStoreReviewAttachments)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.appStoreReviewAttachments)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppStoreReviewAttachmentsIdQueryKey>
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
      ...getV1AppStoreReviewAttachmentsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteV1AppStoreReviewAttachmentsIdMutationKey() {
  return ['v1', '/v1/appStoreReviewAttachments/:id', 'DELETE'] as const
}

export function getDeleteV1AppStoreReviewAttachmentsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.appStoreReviewAttachments)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.appStoreReviewAttachments)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1AppStoreReviewAttachmentsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.appStoreReviewAttachments)[':id']['$delete']>,
    ) {
      return parseResponse(client.v1.appStoreReviewAttachments[':id'].$delete(args, options))
    },
  })
}

export function useDeleteV1AppStoreReviewAttachmentsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.appStoreReviewAttachments)[':id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1.appStoreReviewAttachments)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1AppStoreReviewAttachmentsIdMutationOptions<
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

export function getPatchV1AppStoreReviewAttachmentsIdMutationKey() {
  return ['v1', '/v1/appStoreReviewAttachments/:id', 'PATCH'] as const
}

export function getPatchV1AppStoreReviewAttachmentsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.appStoreReviewAttachments)[':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.appStoreReviewAttachments)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1AppStoreReviewAttachmentsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.appStoreReviewAttachments)[':id']['$patch']>,
    ) {
      return parseResponse(client.v1.appStoreReviewAttachments[':id'].$patch(args, options))
    },
  })
}

export function usePatchV1AppStoreReviewAttachmentsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.appStoreReviewAttachments)[':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.appStoreReviewAttachments)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV1AppStoreReviewAttachmentsIdMutationOptions<
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

export function getPostV1AppStoreReviewDetailsMutationKey() {
  return ['v1', '/v1/appStoreReviewDetails', 'POST'] as const
}

export function getPostV1AppStoreReviewDetailsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.appStoreReviewDetails.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.appStoreReviewDetails.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AppStoreReviewDetailsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.appStoreReviewDetails.$post>) {
      return parseResponse(client.v1.appStoreReviewDetails.$post(args, options))
    },
  })
}

export function usePostV1AppStoreReviewDetails<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.appStoreReviewDetails.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.appStoreReviewDetails.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1AppStoreReviewDetailsMutationOptions<TError, TOnMutateResult>(
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

export function getV1AppStoreReviewDetailsIdQueryKey(
  args: InferRequestType<(typeof client.v1.appStoreReviewDetails)[':id']['$get']>,
) {
  return ['v1', '/v1/appStoreReviewDetails/:id', args] as const
}

export function getV1AppStoreReviewDetailsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.appStoreReviewDetails)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.appStoreReviewDetails)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.appStoreReviewDetails)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppStoreReviewDetailsIdQueryKey>
  >({
    queryKey: getV1AppStoreReviewDetailsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.appStoreReviewDetails[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1AppStoreReviewDetailsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.appStoreReviewDetails)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.appStoreReviewDetails)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.appStoreReviewDetails)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppStoreReviewDetailsIdQueryKey>
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
      ...getV1AppStoreReviewDetailsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1AppStoreReviewDetailsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.appStoreReviewDetails)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.appStoreReviewDetails)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.appStoreReviewDetails)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppStoreReviewDetailsIdQueryKey>
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
      ...getV1AppStoreReviewDetailsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPatchV1AppStoreReviewDetailsIdMutationKey() {
  return ['v1', '/v1/appStoreReviewDetails/:id', 'PATCH'] as const
}

export function getPatchV1AppStoreReviewDetailsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.appStoreReviewDetails)[':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.appStoreReviewDetails)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1AppStoreReviewDetailsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.appStoreReviewDetails)[':id']['$patch']>,
    ) {
      return parseResponse(client.v1.appStoreReviewDetails[':id'].$patch(args, options))
    },
  })
}

export function usePatchV1AppStoreReviewDetailsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.appStoreReviewDetails)[':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.appStoreReviewDetails)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV1AppStoreReviewDetailsIdMutationOptions<
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

export function getV1AppStoreReviewDetailsIdAppStoreReviewAttachmentsQueryKey(
  args: InferRequestType<
    (typeof client.v1.appStoreReviewDetails)[':id']['appStoreReviewAttachments']['$get']
  >,
) {
  return ['v1', '/v1/appStoreReviewDetails/:id/appStoreReviewAttachments', args] as const
}

export function getV1AppStoreReviewDetailsIdAppStoreReviewAttachmentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.appStoreReviewDetails)[':id']['appStoreReviewAttachments']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.appStoreReviewDetails)[':id']['appStoreReviewAttachments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.appStoreReviewDetails)[':id']['appStoreReviewAttachments']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppStoreReviewDetailsIdAppStoreReviewAttachmentsQueryKey>
  >({
    queryKey: getV1AppStoreReviewDetailsIdAppStoreReviewAttachmentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.appStoreReviewDetails[':id'].appStoreReviewAttachments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1AppStoreReviewDetailsIdAppStoreReviewAttachments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.appStoreReviewDetails)[':id']['appStoreReviewAttachments']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.appStoreReviewDetails)[':id']['appStoreReviewAttachments']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.appStoreReviewDetails)[':id']['appStoreReviewAttachments']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppStoreReviewDetailsIdAppStoreReviewAttachmentsQueryKey>
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
      ...getV1AppStoreReviewDetailsIdAppStoreReviewAttachmentsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1AppStoreReviewDetailsIdAppStoreReviewAttachments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.appStoreReviewDetails)[':id']['appStoreReviewAttachments']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.appStoreReviewDetails)[':id']['appStoreReviewAttachments']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.appStoreReviewDetails)[':id']['appStoreReviewAttachments']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppStoreReviewDetailsIdAppStoreReviewAttachmentsQueryKey>
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
      ...getV1AppStoreReviewDetailsIdAppStoreReviewAttachmentsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV1AppStoreVersionLocalizationsMutationKey() {
  return ['v1', '/v1/appStoreVersionLocalizations', 'POST'] as const
}

export function getPostV1AppStoreVersionLocalizationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.appStoreVersionLocalizations.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.appStoreVersionLocalizations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AppStoreVersionLocalizationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.appStoreVersionLocalizations.$post>) {
      return parseResponse(client.v1.appStoreVersionLocalizations.$post(args, options))
    },
  })
}

export function usePostV1AppStoreVersionLocalizations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.appStoreVersionLocalizations.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.appStoreVersionLocalizations.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1AppStoreVersionLocalizationsMutationOptions<
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

export function getV1AppStoreVersionLocalizationsIdQueryKey(
  args: InferRequestType<(typeof client.v1.appStoreVersionLocalizations)[':id']['$get']>,
) {
  return ['v1', '/v1/appStoreVersionLocalizations/:id', args] as const
}

export function getV1AppStoreVersionLocalizationsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.appStoreVersionLocalizations)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.appStoreVersionLocalizations)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.appStoreVersionLocalizations)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppStoreVersionLocalizationsIdQueryKey>
  >({
    queryKey: getV1AppStoreVersionLocalizationsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.appStoreVersionLocalizations[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1AppStoreVersionLocalizationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.appStoreVersionLocalizations)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.appStoreVersionLocalizations)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.appStoreVersionLocalizations)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppStoreVersionLocalizationsIdQueryKey>
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
      ...getV1AppStoreVersionLocalizationsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1AppStoreVersionLocalizationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.appStoreVersionLocalizations)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.appStoreVersionLocalizations)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.appStoreVersionLocalizations)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppStoreVersionLocalizationsIdQueryKey>
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
      ...getV1AppStoreVersionLocalizationsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteV1AppStoreVersionLocalizationsIdMutationKey() {
  return ['v1', '/v1/appStoreVersionLocalizations/:id', 'DELETE'] as const
}

export function getDeleteV1AppStoreVersionLocalizationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.appStoreVersionLocalizations)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.appStoreVersionLocalizations)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1AppStoreVersionLocalizationsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.appStoreVersionLocalizations)[':id']['$delete']>,
    ) {
      return parseResponse(client.v1.appStoreVersionLocalizations[':id'].$delete(args, options))
    },
  })
}

export function useDeleteV1AppStoreVersionLocalizationsId<
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
                  ReturnType<(typeof client.v1.appStoreVersionLocalizations)[':id']['$delete']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1.appStoreVersionLocalizations)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1AppStoreVersionLocalizationsIdMutationOptions<
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

export function getPatchV1AppStoreVersionLocalizationsIdMutationKey() {
  return ['v1', '/v1/appStoreVersionLocalizations/:id', 'PATCH'] as const
}

export function getPatchV1AppStoreVersionLocalizationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.appStoreVersionLocalizations)[':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.appStoreVersionLocalizations)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1AppStoreVersionLocalizationsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.appStoreVersionLocalizations)[':id']['$patch']>,
    ) {
      return parseResponse(client.v1.appStoreVersionLocalizations[':id'].$patch(args, options))
    },
  })
}

export function usePatchV1AppStoreVersionLocalizationsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.appStoreVersionLocalizations)[':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.appStoreVersionLocalizations)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV1AppStoreVersionLocalizationsIdMutationOptions<
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

export function getV1AppStoreVersionLocalizationsIdAppPreviewSetsQueryKey(
  args: InferRequestType<
    (typeof client.v1.appStoreVersionLocalizations)[':id']['appPreviewSets']['$get']
  >,
) {
  return ['v1', '/v1/appStoreVersionLocalizations/:id/appPreviewSets', args] as const
}

export function getV1AppStoreVersionLocalizationsIdAppPreviewSetsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.appStoreVersionLocalizations)[':id']['appPreviewSets']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.appStoreVersionLocalizations)[':id']['appPreviewSets']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.appStoreVersionLocalizations)[':id']['appPreviewSets']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppStoreVersionLocalizationsIdAppPreviewSetsQueryKey>
  >({
    queryKey: getV1AppStoreVersionLocalizationsIdAppPreviewSetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.appStoreVersionLocalizations[':id'].appPreviewSets.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1AppStoreVersionLocalizationsIdAppPreviewSets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.appStoreVersionLocalizations)[':id']['appPreviewSets']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.appStoreVersionLocalizations)[':id']['appPreviewSets']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.appStoreVersionLocalizations)[':id']['appPreviewSets']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppStoreVersionLocalizationsIdAppPreviewSetsQueryKey>
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
      ...getV1AppStoreVersionLocalizationsIdAppPreviewSetsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1AppStoreVersionLocalizationsIdAppPreviewSets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.appStoreVersionLocalizations)[':id']['appPreviewSets']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.appStoreVersionLocalizations)[':id']['appPreviewSets']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.appStoreVersionLocalizations)[':id']['appPreviewSets']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppStoreVersionLocalizationsIdAppPreviewSetsQueryKey>
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
      ...getV1AppStoreVersionLocalizationsIdAppPreviewSetsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1AppStoreVersionLocalizationsIdAppScreenshotSetsQueryKey(
  args: InferRequestType<
    (typeof client.v1.appStoreVersionLocalizations)[':id']['appScreenshotSets']['$get']
  >,
) {
  return ['v1', '/v1/appStoreVersionLocalizations/:id/appScreenshotSets', args] as const
}

export function getV1AppStoreVersionLocalizationsIdAppScreenshotSetsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.appStoreVersionLocalizations)[':id']['appScreenshotSets']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.appStoreVersionLocalizations)[':id']['appScreenshotSets']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.appStoreVersionLocalizations)[':id']['appScreenshotSets']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppStoreVersionLocalizationsIdAppScreenshotSetsQueryKey>
  >({
    queryKey: getV1AppStoreVersionLocalizationsIdAppScreenshotSetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.appStoreVersionLocalizations[':id'].appScreenshotSets.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1AppStoreVersionLocalizationsIdAppScreenshotSets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.appStoreVersionLocalizations)[':id']['appScreenshotSets']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.appStoreVersionLocalizations)[':id']['appScreenshotSets']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.appStoreVersionLocalizations)[':id']['appScreenshotSets']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppStoreVersionLocalizationsIdAppScreenshotSetsQueryKey>
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
      ...getV1AppStoreVersionLocalizationsIdAppScreenshotSetsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1AppStoreVersionLocalizationsIdAppScreenshotSets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.appStoreVersionLocalizations)[':id']['appScreenshotSets']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.appStoreVersionLocalizations)[':id']['appScreenshotSets']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.appStoreVersionLocalizations)[':id']['appScreenshotSets']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppStoreVersionLocalizationsIdAppScreenshotSetsQueryKey>
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
      ...getV1AppStoreVersionLocalizationsIdAppScreenshotSetsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV1AppStoreVersionPhasedReleasesMutationKey() {
  return ['v1', '/v1/appStoreVersionPhasedReleases', 'POST'] as const
}

export function getPostV1AppStoreVersionPhasedReleasesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.appStoreVersionPhasedReleases.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.appStoreVersionPhasedReleases.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AppStoreVersionPhasedReleasesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.appStoreVersionPhasedReleases.$post>) {
      return parseResponse(client.v1.appStoreVersionPhasedReleases.$post(args, options))
    },
  })
}

export function usePostV1AppStoreVersionPhasedReleases<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.appStoreVersionPhasedReleases.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.appStoreVersionPhasedReleases.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1AppStoreVersionPhasedReleasesMutationOptions<
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

export function getDeleteV1AppStoreVersionPhasedReleasesIdMutationKey() {
  return ['v1', '/v1/appStoreVersionPhasedReleases/:id', 'DELETE'] as const
}

export function getDeleteV1AppStoreVersionPhasedReleasesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.appStoreVersionPhasedReleases)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.appStoreVersionPhasedReleases)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1AppStoreVersionPhasedReleasesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.appStoreVersionPhasedReleases)[':id']['$delete']>,
    ) {
      return parseResponse(client.v1.appStoreVersionPhasedReleases[':id'].$delete(args, options))
    },
  })
}

export function useDeleteV1AppStoreVersionPhasedReleasesId<
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
                  ReturnType<(typeof client.v1.appStoreVersionPhasedReleases)[':id']['$delete']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1.appStoreVersionPhasedReleases)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1AppStoreVersionPhasedReleasesIdMutationOptions<
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

export function getPatchV1AppStoreVersionPhasedReleasesIdMutationKey() {
  return ['v1', '/v1/appStoreVersionPhasedReleases/:id', 'PATCH'] as const
}

export function getPatchV1AppStoreVersionPhasedReleasesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.appStoreVersionPhasedReleases)[':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.appStoreVersionPhasedReleases)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1AppStoreVersionPhasedReleasesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.appStoreVersionPhasedReleases)[':id']['$patch']>,
    ) {
      return parseResponse(client.v1.appStoreVersionPhasedReleases[':id'].$patch(args, options))
    },
  })
}

export function usePatchV1AppStoreVersionPhasedReleasesId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.appStoreVersionPhasedReleases)[':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.appStoreVersionPhasedReleases)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV1AppStoreVersionPhasedReleasesIdMutationOptions<
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

export function getPostV1AppStoreVersionSubmissionsMutationKey() {
  return ['v1', '/v1/appStoreVersionSubmissions', 'POST'] as const
}

export function getPostV1AppStoreVersionSubmissionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.appStoreVersionSubmissions.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.appStoreVersionSubmissions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AppStoreVersionSubmissionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.appStoreVersionSubmissions.$post>) {
      return parseResponse(client.v1.appStoreVersionSubmissions.$post(args, options))
    },
  })
}

export function usePostV1AppStoreVersionSubmissions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.appStoreVersionSubmissions.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.appStoreVersionSubmissions.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1AppStoreVersionSubmissionsMutationOptions<
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

export function getDeleteV1AppStoreVersionSubmissionsIdMutationKey() {
  return ['v1', '/v1/appStoreVersionSubmissions/:id', 'DELETE'] as const
}

export function getDeleteV1AppStoreVersionSubmissionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.appStoreVersionSubmissions)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.appStoreVersionSubmissions)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1AppStoreVersionSubmissionsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.appStoreVersionSubmissions)[':id']['$delete']>,
    ) {
      return parseResponse(client.v1.appStoreVersionSubmissions[':id'].$delete(args, options))
    },
  })
}

export function useDeleteV1AppStoreVersionSubmissionsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.appStoreVersionSubmissions)[':id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1.appStoreVersionSubmissions)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1AppStoreVersionSubmissionsIdMutationOptions<
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

export function getPostV1AppStoreVersionsMutationKey() {
  return ['v1', '/v1/appStoreVersions', 'POST'] as const
}

export function getPostV1AppStoreVersionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.appStoreVersions.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.appStoreVersions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AppStoreVersionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.appStoreVersions.$post>) {
      return parseResponse(client.v1.appStoreVersions.$post(args, options))
    },
  })
}

export function usePostV1AppStoreVersions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.appStoreVersions.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.appStoreVersions.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1AppStoreVersionsMutationOptions<TError, TOnMutateResult>(
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

export function getV1AppStoreVersionsIdQueryKey(
  args: InferRequestType<(typeof client.v1.appStoreVersions)[':id']['$get']>,
) {
  return ['v1', '/v1/appStoreVersions/:id', args] as const
}

export function getV1AppStoreVersionsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.appStoreVersions)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.appStoreVersions)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.appStoreVersions)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppStoreVersionsIdQueryKey>
  >({
    queryKey: getV1AppStoreVersionsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.appStoreVersions[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1AppStoreVersionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.appStoreVersions)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.appStoreVersions)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.appStoreVersions)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppStoreVersionsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1AppStoreVersionsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1AppStoreVersionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.appStoreVersions)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.appStoreVersions)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.appStoreVersions)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppStoreVersionsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1AppStoreVersionsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteV1AppStoreVersionsIdMutationKey() {
  return ['v1', '/v1/appStoreVersions/:id', 'DELETE'] as const
}

export function getDeleteV1AppStoreVersionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.appStoreVersions)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.appStoreVersions)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1AppStoreVersionsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.appStoreVersions)[':id']['$delete']>,
    ) {
      return parseResponse(client.v1.appStoreVersions[':id'].$delete(args, options))
    },
  })
}

export function useDeleteV1AppStoreVersionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.appStoreVersions)[':id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1.appStoreVersions)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1AppStoreVersionsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchV1AppStoreVersionsIdMutationKey() {
  return ['v1', '/v1/appStoreVersions/:id', 'PATCH'] as const
}

export function getPatchV1AppStoreVersionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.appStoreVersions)[':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.appStoreVersions)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1AppStoreVersionsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.appStoreVersions)[':id']['$patch']>) {
      return parseResponse(client.v1.appStoreVersions[':id'].$patch(args, options))
    },
  })
}

export function usePatchV1AppStoreVersionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.appStoreVersions)[':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.appStoreVersions)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV1AppStoreVersionsIdMutationOptions<TError, TOnMutateResult>(
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

export function getV1AppStoreVersionsIdAgeRatingDeclarationQueryKey(
  args: InferRequestType<
    (typeof client.v1.appStoreVersions)[':id']['ageRatingDeclaration']['$get']
  >,
) {
  return ['v1', '/v1/appStoreVersions/:id/ageRatingDeclaration', args] as const
}

export function getV1AppStoreVersionsIdAgeRatingDeclarationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.appStoreVersions)[':id']['ageRatingDeclaration']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.appStoreVersions)[':id']['ageRatingDeclaration']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.appStoreVersions)[':id']['ageRatingDeclaration']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppStoreVersionsIdAgeRatingDeclarationQueryKey>
  >({
    queryKey: getV1AppStoreVersionsIdAgeRatingDeclarationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.appStoreVersions[':id'].ageRatingDeclaration.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1AppStoreVersionsIdAgeRatingDeclaration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.appStoreVersions)[':id']['ageRatingDeclaration']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.appStoreVersions)[':id']['ageRatingDeclaration']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.appStoreVersions)[':id']['ageRatingDeclaration']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppStoreVersionsIdAgeRatingDeclarationQueryKey>
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
      ...getV1AppStoreVersionsIdAgeRatingDeclarationQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1AppStoreVersionsIdAgeRatingDeclaration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.appStoreVersions)[':id']['ageRatingDeclaration']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.appStoreVersions)[':id']['ageRatingDeclaration']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.appStoreVersions)[':id']['ageRatingDeclaration']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppStoreVersionsIdAgeRatingDeclarationQueryKey>
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
      ...getV1AppStoreVersionsIdAgeRatingDeclarationQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1AppStoreVersionsIdAppStoreReviewDetailQueryKey(
  args: InferRequestType<
    (typeof client.v1.appStoreVersions)[':id']['appStoreReviewDetail']['$get']
  >,
) {
  return ['v1', '/v1/appStoreVersions/:id/appStoreReviewDetail', args] as const
}

export function getV1AppStoreVersionsIdAppStoreReviewDetailQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.appStoreVersions)[':id']['appStoreReviewDetail']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.appStoreVersions)[':id']['appStoreReviewDetail']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.appStoreVersions)[':id']['appStoreReviewDetail']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppStoreVersionsIdAppStoreReviewDetailQueryKey>
  >({
    queryKey: getV1AppStoreVersionsIdAppStoreReviewDetailQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.appStoreVersions[':id'].appStoreReviewDetail.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1AppStoreVersionsIdAppStoreReviewDetail<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.appStoreVersions)[':id']['appStoreReviewDetail']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.appStoreVersions)[':id']['appStoreReviewDetail']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.appStoreVersions)[':id']['appStoreReviewDetail']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppStoreVersionsIdAppStoreReviewDetailQueryKey>
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
      ...getV1AppStoreVersionsIdAppStoreReviewDetailQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1AppStoreVersionsIdAppStoreReviewDetail<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.appStoreVersions)[':id']['appStoreReviewDetail']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.appStoreVersions)[':id']['appStoreReviewDetail']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.appStoreVersions)[':id']['appStoreReviewDetail']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppStoreVersionsIdAppStoreReviewDetailQueryKey>
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
      ...getV1AppStoreVersionsIdAppStoreReviewDetailQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1AppStoreVersionsIdAppStoreVersionLocalizationsQueryKey(
  args: InferRequestType<
    (typeof client.v1.appStoreVersions)[':id']['appStoreVersionLocalizations']['$get']
  >,
) {
  return ['v1', '/v1/appStoreVersions/:id/appStoreVersionLocalizations', args] as const
}

export function getV1AppStoreVersionsIdAppStoreVersionLocalizationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.appStoreVersions)[':id']['appStoreVersionLocalizations']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.appStoreVersions)[':id']['appStoreVersionLocalizations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.appStoreVersions)[':id']['appStoreVersionLocalizations']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppStoreVersionsIdAppStoreVersionLocalizationsQueryKey>
  >({
    queryKey: getV1AppStoreVersionsIdAppStoreVersionLocalizationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.appStoreVersions[':id'].appStoreVersionLocalizations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1AppStoreVersionsIdAppStoreVersionLocalizations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.appStoreVersions)[':id']['appStoreVersionLocalizations']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.appStoreVersions)[':id']['appStoreVersionLocalizations']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.appStoreVersions)[':id']['appStoreVersionLocalizations']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppStoreVersionsIdAppStoreVersionLocalizationsQueryKey>
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
      ...getV1AppStoreVersionsIdAppStoreVersionLocalizationsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1AppStoreVersionsIdAppStoreVersionLocalizations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.appStoreVersions)[':id']['appStoreVersionLocalizations']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.appStoreVersions)[':id']['appStoreVersionLocalizations']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.appStoreVersions)[':id']['appStoreVersionLocalizations']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppStoreVersionsIdAppStoreVersionLocalizationsQueryKey>
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
      ...getV1AppStoreVersionsIdAppStoreVersionLocalizationsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1AppStoreVersionsIdAppStoreVersionPhasedReleaseQueryKey(
  args: InferRequestType<
    (typeof client.v1.appStoreVersions)[':id']['appStoreVersionPhasedRelease']['$get']
  >,
) {
  return ['v1', '/v1/appStoreVersions/:id/appStoreVersionPhasedRelease', args] as const
}

export function getV1AppStoreVersionsIdAppStoreVersionPhasedReleaseQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.appStoreVersions)[':id']['appStoreVersionPhasedRelease']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.appStoreVersions)[':id']['appStoreVersionPhasedRelease']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.appStoreVersions)[':id']['appStoreVersionPhasedRelease']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppStoreVersionsIdAppStoreVersionPhasedReleaseQueryKey>
  >({
    queryKey: getV1AppStoreVersionsIdAppStoreVersionPhasedReleaseQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.appStoreVersions[':id'].appStoreVersionPhasedRelease.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1AppStoreVersionsIdAppStoreVersionPhasedRelease<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.appStoreVersions)[':id']['appStoreVersionPhasedRelease']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.appStoreVersions)[':id']['appStoreVersionPhasedRelease']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.appStoreVersions)[':id']['appStoreVersionPhasedRelease']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppStoreVersionsIdAppStoreVersionPhasedReleaseQueryKey>
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
      ...getV1AppStoreVersionsIdAppStoreVersionPhasedReleaseQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1AppStoreVersionsIdAppStoreVersionPhasedRelease<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.appStoreVersions)[':id']['appStoreVersionPhasedRelease']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.appStoreVersions)[':id']['appStoreVersionPhasedRelease']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.appStoreVersions)[':id']['appStoreVersionPhasedRelease']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppStoreVersionsIdAppStoreVersionPhasedReleaseQueryKey>
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
      ...getV1AppStoreVersionsIdAppStoreVersionPhasedReleaseQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1AppStoreVersionsIdAppStoreVersionSubmissionQueryKey(
  args: InferRequestType<
    (typeof client.v1.appStoreVersions)[':id']['appStoreVersionSubmission']['$get']
  >,
) {
  return ['v1', '/v1/appStoreVersions/:id/appStoreVersionSubmission', args] as const
}

export function getV1AppStoreVersionsIdAppStoreVersionSubmissionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.appStoreVersions)[':id']['appStoreVersionSubmission']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.appStoreVersions)[':id']['appStoreVersionSubmission']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.appStoreVersions)[':id']['appStoreVersionSubmission']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppStoreVersionsIdAppStoreVersionSubmissionQueryKey>
  >({
    queryKey: getV1AppStoreVersionsIdAppStoreVersionSubmissionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.appStoreVersions[':id'].appStoreVersionSubmission.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1AppStoreVersionsIdAppStoreVersionSubmission<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.appStoreVersions)[':id']['appStoreVersionSubmission']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.appStoreVersions)[':id']['appStoreVersionSubmission']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.appStoreVersions)[':id']['appStoreVersionSubmission']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppStoreVersionsIdAppStoreVersionSubmissionQueryKey>
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
      ...getV1AppStoreVersionsIdAppStoreVersionSubmissionQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1AppStoreVersionsIdAppStoreVersionSubmission<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.appStoreVersions)[':id']['appStoreVersionSubmission']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.appStoreVersions)[':id']['appStoreVersionSubmission']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.appStoreVersions)[':id']['appStoreVersionSubmission']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppStoreVersionsIdAppStoreVersionSubmissionQueryKey>
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
      ...getV1AppStoreVersionsIdAppStoreVersionSubmissionQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1AppStoreVersionsIdBuildQueryKey(
  args: InferRequestType<(typeof client.v1.appStoreVersions)[':id']['build']['$get']>,
) {
  return ['v1', '/v1/appStoreVersions/:id/build', args] as const
}

export function getV1AppStoreVersionsIdBuildQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.appStoreVersions)[':id']['build']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.appStoreVersions)[':id']['build']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.appStoreVersions)[':id']['build']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppStoreVersionsIdBuildQueryKey>
  >({
    queryKey: getV1AppStoreVersionsIdBuildQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.appStoreVersions[':id'].build.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1AppStoreVersionsIdBuild<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.appStoreVersions)[':id']['build']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.appStoreVersions)[':id']['build']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.appStoreVersions)[':id']['build']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppStoreVersionsIdBuildQueryKey>
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
      ...getV1AppStoreVersionsIdBuildQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1AppStoreVersionsIdBuild<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.appStoreVersions)[':id']['build']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.appStoreVersions)[':id']['build']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.appStoreVersions)[':id']['build']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppStoreVersionsIdBuildQueryKey>
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
      ...getV1AppStoreVersionsIdBuildQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1AppStoreVersionsIdIdfaDeclarationQueryKey(
  args: InferRequestType<(typeof client.v1.appStoreVersions)[':id']['idfaDeclaration']['$get']>,
) {
  return ['v1', '/v1/appStoreVersions/:id/idfaDeclaration', args] as const
}

export function getV1AppStoreVersionsIdIdfaDeclarationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.appStoreVersions)[':id']['idfaDeclaration']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.appStoreVersions)[':id']['idfaDeclaration']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.appStoreVersions)[':id']['idfaDeclaration']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppStoreVersionsIdIdfaDeclarationQueryKey>
  >({
    queryKey: getV1AppStoreVersionsIdIdfaDeclarationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.appStoreVersions[':id'].idfaDeclaration.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1AppStoreVersionsIdIdfaDeclaration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.appStoreVersions)[':id']['idfaDeclaration']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.appStoreVersions)[':id']['idfaDeclaration']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.appStoreVersions)[':id']['idfaDeclaration']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppStoreVersionsIdIdfaDeclarationQueryKey>
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
      ...getV1AppStoreVersionsIdIdfaDeclarationQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1AppStoreVersionsIdIdfaDeclaration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.appStoreVersions)[':id']['idfaDeclaration']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.appStoreVersions)[':id']['idfaDeclaration']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.appStoreVersions)[':id']['idfaDeclaration']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppStoreVersionsIdIdfaDeclarationQueryKey>
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
      ...getV1AppStoreVersionsIdIdfaDeclarationQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1AppStoreVersionsIdRelationshipsBuildQueryKey(
  args: InferRequestType<
    (typeof client.v1.appStoreVersions)[':id']['relationships']['build']['$get']
  >,
) {
  return ['v1', '/v1/appStoreVersions/:id/relationships/build', args] as const
}

export function getV1AppStoreVersionsIdRelationshipsBuildQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.appStoreVersions)[':id']['relationships']['build']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.appStoreVersions)[':id']['relationships']['build']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.appStoreVersions)[':id']['relationships']['build']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppStoreVersionsIdRelationshipsBuildQueryKey>
  >({
    queryKey: getV1AppStoreVersionsIdRelationshipsBuildQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.appStoreVersions[':id'].relationships.build.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1AppStoreVersionsIdRelationshipsBuild<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.appStoreVersions)[':id']['relationships']['build']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.appStoreVersions)[':id']['relationships']['build']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.appStoreVersions)[':id']['relationships']['build']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppStoreVersionsIdRelationshipsBuildQueryKey>
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
      ...getV1AppStoreVersionsIdRelationshipsBuildQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1AppStoreVersionsIdRelationshipsBuild<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.appStoreVersions)[':id']['relationships']['build']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.appStoreVersions)[':id']['relationships']['build']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.appStoreVersions)[':id']['relationships']['build']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppStoreVersionsIdRelationshipsBuildQueryKey>
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
      ...getV1AppStoreVersionsIdRelationshipsBuildQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPatchV1AppStoreVersionsIdRelationshipsBuildMutationKey() {
  return ['v1', '/v1/appStoreVersions/:id/relationships/build', 'PATCH'] as const
}

export function getPatchV1AppStoreVersionsIdRelationshipsBuildMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.appStoreVersions)[':id']['relationships']['build']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v1.appStoreVersions)[':id']['relationships']['build']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchV1AppStoreVersionsIdRelationshipsBuildMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.appStoreVersions)[':id']['relationships']['build']['$patch']
      >,
    ) {
      return parseResponse(
        client.v1.appStoreVersions[':id'].relationships.build.$patch(args, options),
      )
    },
  })
}

export function usePatchV1AppStoreVersionsIdRelationshipsBuild<
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
                    (typeof client.v1.appStoreVersions)[':id']['relationships']['build']['$patch']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v1.appStoreVersions)[':id']['relationships']['build']['$patch']
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
  const mutationDefaults = getPatchV1AppStoreVersionsIdRelationshipsBuildMutationOptions<
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

export function getV1AppStoreVersionsIdRoutingAppCoverageQueryKey(
  args: InferRequestType<(typeof client.v1.appStoreVersions)[':id']['routingAppCoverage']['$get']>,
) {
  return ['v1', '/v1/appStoreVersions/:id/routingAppCoverage', args] as const
}

export function getV1AppStoreVersionsIdRoutingAppCoverageQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.appStoreVersions)[':id']['routingAppCoverage']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.appStoreVersions)[':id']['routingAppCoverage']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.appStoreVersions)[':id']['routingAppCoverage']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppStoreVersionsIdRoutingAppCoverageQueryKey>
  >({
    queryKey: getV1AppStoreVersionsIdRoutingAppCoverageQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.appStoreVersions[':id'].routingAppCoverage.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1AppStoreVersionsIdRoutingAppCoverage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.appStoreVersions)[':id']['routingAppCoverage']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.appStoreVersions)[':id']['routingAppCoverage']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.appStoreVersions)[':id']['routingAppCoverage']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppStoreVersionsIdRoutingAppCoverageQueryKey>
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
      ...getV1AppStoreVersionsIdRoutingAppCoverageQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1AppStoreVersionsIdRoutingAppCoverage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.appStoreVersions)[':id']['routingAppCoverage']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.appStoreVersions)[':id']['routingAppCoverage']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.appStoreVersions)[':id']['routingAppCoverage']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppStoreVersionsIdRoutingAppCoverageQueryKey>
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
      ...getV1AppStoreVersionsIdRoutingAppCoverageQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1AppsQueryKey(args: InferRequestType<typeof client.v1.apps.$get>) {
  return ['v1', '/v1/apps', args] as const
}

export function getV1AppsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.apps.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.apps.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.apps.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1AppsQueryKey>
  >({
    queryKey: getV1AppsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.apps.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1Apps<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.apps.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.apps.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.apps.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getV1AppsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1AppsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1Apps<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.apps.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.apps.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.apps.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getV1AppsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1AppsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1AppsIdQueryKey(
  args: InferRequestType<(typeof client.v1.apps)[':id']['$get']>,
) {
  return ['v1', '/v1/apps/:id', args] as const
}

export function getV1AppsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.apps)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.v1.apps)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.apps)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppsIdQueryKey>
  >({
    queryKey: getV1AppsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.apps[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1AppsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.apps)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.apps)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.apps)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1AppsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1AppsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.apps)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.apps)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.apps)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1AppsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPatchV1AppsIdMutationKey() {
  return ['v1', '/v1/apps/:id', 'PATCH'] as const
}

export function getPatchV1AppsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.apps)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.apps)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1AppsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.apps)[':id']['$patch']>) {
      return parseResponse(client.v1.apps[':id'].$patch(args, options))
    },
  })
}

export function usePatchV1AppsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.apps)[':id']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.apps)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV1AppsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1AppsIdAppInfosQueryKey(
  args: InferRequestType<(typeof client.v1.apps)[':id']['appInfos']['$get']>,
) {
  return ['v1', '/v1/apps/:id/appInfos', args] as const
}

export function getV1AppsIdAppInfosQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.apps)[':id']['appInfos']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.apps)[':id']['appInfos']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.apps)[':id']['appInfos']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppsIdAppInfosQueryKey>
  >({
    queryKey: getV1AppsIdAppInfosQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.apps[':id'].appInfos.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1AppsIdAppInfos<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.apps)[':id']['appInfos']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.apps)[':id']['appInfos']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.apps)[':id']['appInfos']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppsIdAppInfosQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1AppsIdAppInfosQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1AppsIdAppInfos<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.apps)[':id']['appInfos']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.apps)[':id']['appInfos']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.apps)[':id']['appInfos']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppsIdAppInfosQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1AppsIdAppInfosQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1AppsIdAppStoreVersionsQueryKey(
  args: InferRequestType<(typeof client.v1.apps)[':id']['appStoreVersions']['$get']>,
) {
  return ['v1', '/v1/apps/:id/appStoreVersions', args] as const
}

export function getV1AppsIdAppStoreVersionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.apps)[':id']['appStoreVersions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.apps)[':id']['appStoreVersions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.apps)[':id']['appStoreVersions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppsIdAppStoreVersionsQueryKey>
  >({
    queryKey: getV1AppsIdAppStoreVersionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.apps[':id'].appStoreVersions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1AppsIdAppStoreVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.apps)[':id']['appStoreVersions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.apps)[':id']['appStoreVersions']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.apps)[':id']['appStoreVersions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppsIdAppStoreVersionsQueryKey>
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
      ...getV1AppsIdAppStoreVersionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1AppsIdAppStoreVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.apps)[':id']['appStoreVersions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.apps)[':id']['appStoreVersions']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.apps)[':id']['appStoreVersions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppsIdAppStoreVersionsQueryKey>
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
      ...getV1AppsIdAppStoreVersionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1AppsIdAvailableTerritoriesQueryKey(
  args: InferRequestType<(typeof client.v1.apps)[':id']['availableTerritories']['$get']>,
) {
  return ['v1', '/v1/apps/:id/availableTerritories', args] as const
}

export function getV1AppsIdAvailableTerritoriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.apps)[':id']['availableTerritories']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.apps)[':id']['availableTerritories']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.apps)[':id']['availableTerritories']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppsIdAvailableTerritoriesQueryKey>
  >({
    queryKey: getV1AppsIdAvailableTerritoriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.apps[':id'].availableTerritories.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1AppsIdAvailableTerritories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.apps)[':id']['availableTerritories']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.apps)[':id']['availableTerritories']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.apps)[':id']['availableTerritories']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppsIdAvailableTerritoriesQueryKey>
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
      ...getV1AppsIdAvailableTerritoriesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1AppsIdAvailableTerritories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.apps)[':id']['availableTerritories']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.apps)[':id']['availableTerritories']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.apps)[':id']['availableTerritories']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppsIdAvailableTerritoriesQueryKey>
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
      ...getV1AppsIdAvailableTerritoriesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1AppsIdBetaAppLocalizationsQueryKey(
  args: InferRequestType<(typeof client.v1.apps)[':id']['betaAppLocalizations']['$get']>,
) {
  return ['v1', '/v1/apps/:id/betaAppLocalizations', args] as const
}

export function getV1AppsIdBetaAppLocalizationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.apps)[':id']['betaAppLocalizations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.apps)[':id']['betaAppLocalizations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.apps)[':id']['betaAppLocalizations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppsIdBetaAppLocalizationsQueryKey>
  >({
    queryKey: getV1AppsIdBetaAppLocalizationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.apps[':id'].betaAppLocalizations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1AppsIdBetaAppLocalizations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.apps)[':id']['betaAppLocalizations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.apps)[':id']['betaAppLocalizations']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.apps)[':id']['betaAppLocalizations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppsIdBetaAppLocalizationsQueryKey>
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
      ...getV1AppsIdBetaAppLocalizationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1AppsIdBetaAppLocalizations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.apps)[':id']['betaAppLocalizations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.apps)[':id']['betaAppLocalizations']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.apps)[':id']['betaAppLocalizations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppsIdBetaAppLocalizationsQueryKey>
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
      ...getV1AppsIdBetaAppLocalizationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1AppsIdBetaAppReviewDetailQueryKey(
  args: InferRequestType<(typeof client.v1.apps)[':id']['betaAppReviewDetail']['$get']>,
) {
  return ['v1', '/v1/apps/:id/betaAppReviewDetail', args] as const
}

export function getV1AppsIdBetaAppReviewDetailQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.apps)[':id']['betaAppReviewDetail']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.apps)[':id']['betaAppReviewDetail']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.apps)[':id']['betaAppReviewDetail']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppsIdBetaAppReviewDetailQueryKey>
  >({
    queryKey: getV1AppsIdBetaAppReviewDetailQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.apps[':id'].betaAppReviewDetail.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1AppsIdBetaAppReviewDetail<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.apps)[':id']['betaAppReviewDetail']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.apps)[':id']['betaAppReviewDetail']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.apps)[':id']['betaAppReviewDetail']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppsIdBetaAppReviewDetailQueryKey>
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
      ...getV1AppsIdBetaAppReviewDetailQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1AppsIdBetaAppReviewDetail<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.apps)[':id']['betaAppReviewDetail']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.apps)[':id']['betaAppReviewDetail']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.apps)[':id']['betaAppReviewDetail']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppsIdBetaAppReviewDetailQueryKey>
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
      ...getV1AppsIdBetaAppReviewDetailQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1AppsIdBetaGroupsQueryKey(
  args: InferRequestType<(typeof client.v1.apps)[':id']['betaGroups']['$get']>,
) {
  return ['v1', '/v1/apps/:id/betaGroups', args] as const
}

export function getV1AppsIdBetaGroupsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.apps)[':id']['betaGroups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.apps)[':id']['betaGroups']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.apps)[':id']['betaGroups']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppsIdBetaGroupsQueryKey>
  >({
    queryKey: getV1AppsIdBetaGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.apps[':id'].betaGroups.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1AppsIdBetaGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.apps)[':id']['betaGroups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.apps)[':id']['betaGroups']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.apps)[':id']['betaGroups']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppsIdBetaGroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1AppsIdBetaGroupsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1AppsIdBetaGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.apps)[':id']['betaGroups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.apps)[':id']['betaGroups']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.apps)[':id']['betaGroups']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppsIdBetaGroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1AppsIdBetaGroupsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1AppsIdBetaLicenseAgreementQueryKey(
  args: InferRequestType<(typeof client.v1.apps)[':id']['betaLicenseAgreement']['$get']>,
) {
  return ['v1', '/v1/apps/:id/betaLicenseAgreement', args] as const
}

export function getV1AppsIdBetaLicenseAgreementQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.apps)[':id']['betaLicenseAgreement']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.apps)[':id']['betaLicenseAgreement']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.apps)[':id']['betaLicenseAgreement']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppsIdBetaLicenseAgreementQueryKey>
  >({
    queryKey: getV1AppsIdBetaLicenseAgreementQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.apps[':id'].betaLicenseAgreement.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1AppsIdBetaLicenseAgreement<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.apps)[':id']['betaLicenseAgreement']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.apps)[':id']['betaLicenseAgreement']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.apps)[':id']['betaLicenseAgreement']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppsIdBetaLicenseAgreementQueryKey>
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
      ...getV1AppsIdBetaLicenseAgreementQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1AppsIdBetaLicenseAgreement<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.apps)[':id']['betaLicenseAgreement']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.apps)[':id']['betaLicenseAgreement']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.apps)[':id']['betaLicenseAgreement']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppsIdBetaLicenseAgreementQueryKey>
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
      ...getV1AppsIdBetaLicenseAgreementQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1AppsIdBuildsQueryKey(
  args: InferRequestType<(typeof client.v1.apps)[':id']['builds']['$get']>,
) {
  return ['v1', '/v1/apps/:id/builds', args] as const
}

export function getV1AppsIdBuildsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.apps)[':id']['builds']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.apps)[':id']['builds']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.apps)[':id']['builds']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppsIdBuildsQueryKey>
  >({
    queryKey: getV1AppsIdBuildsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.apps[':id'].builds.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1AppsIdBuilds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.apps)[':id']['builds']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.apps)[':id']['builds']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.apps)[':id']['builds']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppsIdBuildsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1AppsIdBuildsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1AppsIdBuilds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.apps)[':id']['builds']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.apps)[':id']['builds']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.apps)[':id']['builds']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppsIdBuildsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1AppsIdBuildsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1AppsIdEndUserLicenseAgreementQueryKey(
  args: InferRequestType<(typeof client.v1.apps)[':id']['endUserLicenseAgreement']['$get']>,
) {
  return ['v1', '/v1/apps/:id/endUserLicenseAgreement', args] as const
}

export function getV1AppsIdEndUserLicenseAgreementQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.apps)[':id']['endUserLicenseAgreement']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.apps)[':id']['endUserLicenseAgreement']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.apps)[':id']['endUserLicenseAgreement']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppsIdEndUserLicenseAgreementQueryKey>
  >({
    queryKey: getV1AppsIdEndUserLicenseAgreementQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.apps[':id'].endUserLicenseAgreement.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1AppsIdEndUserLicenseAgreement<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.apps)[':id']['endUserLicenseAgreement']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.apps)[':id']['endUserLicenseAgreement']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.apps)[':id']['endUserLicenseAgreement']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppsIdEndUserLicenseAgreementQueryKey>
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
      ...getV1AppsIdEndUserLicenseAgreementQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1AppsIdEndUserLicenseAgreement<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.apps)[':id']['endUserLicenseAgreement']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.apps)[':id']['endUserLicenseAgreement']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.apps)[':id']['endUserLicenseAgreement']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppsIdEndUserLicenseAgreementQueryKey>
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
      ...getV1AppsIdEndUserLicenseAgreementQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1AppsIdGameCenterEnabledVersionsQueryKey(
  args: InferRequestType<(typeof client.v1.apps)[':id']['gameCenterEnabledVersions']['$get']>,
) {
  return ['v1', '/v1/apps/:id/gameCenterEnabledVersions', args] as const
}

export function getV1AppsIdGameCenterEnabledVersionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.apps)[':id']['gameCenterEnabledVersions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.apps)[':id']['gameCenterEnabledVersions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.apps)[':id']['gameCenterEnabledVersions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppsIdGameCenterEnabledVersionsQueryKey>
  >({
    queryKey: getV1AppsIdGameCenterEnabledVersionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.apps[':id'].gameCenterEnabledVersions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1AppsIdGameCenterEnabledVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.apps)[':id']['gameCenterEnabledVersions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.apps)[':id']['gameCenterEnabledVersions']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.apps)[':id']['gameCenterEnabledVersions']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppsIdGameCenterEnabledVersionsQueryKey>
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
      ...getV1AppsIdGameCenterEnabledVersionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1AppsIdGameCenterEnabledVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.apps)[':id']['gameCenterEnabledVersions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.apps)[':id']['gameCenterEnabledVersions']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.apps)[':id']['gameCenterEnabledVersions']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppsIdGameCenterEnabledVersionsQueryKey>
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
      ...getV1AppsIdGameCenterEnabledVersionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1AppsIdInAppPurchasesQueryKey(
  args: InferRequestType<(typeof client.v1.apps)[':id']['inAppPurchases']['$get']>,
) {
  return ['v1', '/v1/apps/:id/inAppPurchases', args] as const
}

export function getV1AppsIdInAppPurchasesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.apps)[':id']['inAppPurchases']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.apps)[':id']['inAppPurchases']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.apps)[':id']['inAppPurchases']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppsIdInAppPurchasesQueryKey>
  >({
    queryKey: getV1AppsIdInAppPurchasesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.apps[':id'].inAppPurchases.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1AppsIdInAppPurchases<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.apps)[':id']['inAppPurchases']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.apps)[':id']['inAppPurchases']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.apps)[':id']['inAppPurchases']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppsIdInAppPurchasesQueryKey>
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
      ...getV1AppsIdInAppPurchasesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1AppsIdInAppPurchases<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.apps)[':id']['inAppPurchases']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.apps)[':id']['inAppPurchases']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.apps)[':id']['inAppPurchases']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppsIdInAppPurchasesQueryKey>
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
      ...getV1AppsIdInAppPurchasesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1AppsIdPerfPowerMetricsQueryKey(
  args: InferRequestType<(typeof client.v1.apps)[':id']['perfPowerMetrics']['$get']>,
) {
  return ['v1', '/v1/apps/:id/perfPowerMetrics', args] as const
}

export function getV1AppsIdPerfPowerMetricsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.apps)[':id']['perfPowerMetrics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.apps)[':id']['perfPowerMetrics']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.apps)[':id']['perfPowerMetrics']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppsIdPerfPowerMetricsQueryKey>
  >({
    queryKey: getV1AppsIdPerfPowerMetricsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.apps[':id'].perfPowerMetrics.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1AppsIdPerfPowerMetrics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.apps)[':id']['perfPowerMetrics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.apps)[':id']['perfPowerMetrics']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.apps)[':id']['perfPowerMetrics']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppsIdPerfPowerMetricsQueryKey>
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
      ...getV1AppsIdPerfPowerMetricsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1AppsIdPerfPowerMetrics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.apps)[':id']['perfPowerMetrics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.apps)[':id']['perfPowerMetrics']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.apps)[':id']['perfPowerMetrics']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppsIdPerfPowerMetricsQueryKey>
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
      ...getV1AppsIdPerfPowerMetricsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1AppsIdPreOrderQueryKey(
  args: InferRequestType<(typeof client.v1.apps)[':id']['preOrder']['$get']>,
) {
  return ['v1', '/v1/apps/:id/preOrder', args] as const
}

export function getV1AppsIdPreOrderQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.apps)[':id']['preOrder']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.apps)[':id']['preOrder']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.apps)[':id']['preOrder']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppsIdPreOrderQueryKey>
  >({
    queryKey: getV1AppsIdPreOrderQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.apps[':id'].preOrder.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1AppsIdPreOrder<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.apps)[':id']['preOrder']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.apps)[':id']['preOrder']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.apps)[':id']['preOrder']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppsIdPreOrderQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1AppsIdPreOrderQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1AppsIdPreOrder<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.apps)[':id']['preOrder']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.apps)[':id']['preOrder']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.apps)[':id']['preOrder']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppsIdPreOrderQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1AppsIdPreOrderQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1AppsIdPreReleaseVersionsQueryKey(
  args: InferRequestType<(typeof client.v1.apps)[':id']['preReleaseVersions']['$get']>,
) {
  return ['v1', '/v1/apps/:id/preReleaseVersions', args] as const
}

export function getV1AppsIdPreReleaseVersionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.apps)[':id']['preReleaseVersions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.apps)[':id']['preReleaseVersions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.apps)[':id']['preReleaseVersions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppsIdPreReleaseVersionsQueryKey>
  >({
    queryKey: getV1AppsIdPreReleaseVersionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.apps[':id'].preReleaseVersions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1AppsIdPreReleaseVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.apps)[':id']['preReleaseVersions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.apps)[':id']['preReleaseVersions']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.apps)[':id']['preReleaseVersions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppsIdPreReleaseVersionsQueryKey>
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
      ...getV1AppsIdPreReleaseVersionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1AppsIdPreReleaseVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.apps)[':id']['preReleaseVersions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.apps)[':id']['preReleaseVersions']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.apps)[':id']['preReleaseVersions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppsIdPreReleaseVersionsQueryKey>
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
      ...getV1AppsIdPreReleaseVersionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1AppsIdPricesQueryKey(
  args: InferRequestType<(typeof client.v1.apps)[':id']['prices']['$get']>,
) {
  return ['v1', '/v1/apps/:id/prices', args] as const
}

export function getV1AppsIdPricesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.apps)[':id']['prices']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.apps)[':id']['prices']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.apps)[':id']['prices']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppsIdPricesQueryKey>
  >({
    queryKey: getV1AppsIdPricesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.apps[':id'].prices.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1AppsIdPrices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.apps)[':id']['prices']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.apps)[':id']['prices']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.apps)[':id']['prices']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppsIdPricesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1AppsIdPricesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1AppsIdPrices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.apps)[':id']['prices']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.apps)[':id']['prices']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.apps)[':id']['prices']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AppsIdPricesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1AppsIdPricesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteV1AppsIdRelationshipsBetaTestersMutationKey() {
  return ['v1', '/v1/apps/:id/relationships/betaTesters', 'DELETE'] as const
}

export function getDeleteV1AppsIdRelationshipsBetaTestersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.apps)[':id']['relationships']['betaTesters']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.apps)[':id']['relationships']['betaTesters']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1AppsIdRelationshipsBetaTestersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.apps)[':id']['relationships']['betaTesters']['$delete']
      >,
    ) {
      return parseResponse(client.v1.apps[':id'].relationships.betaTesters.$delete(args, options))
    },
  })
}

export function useDeleteV1AppsIdRelationshipsBetaTesters<
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
                    (typeof client.v1.apps)[':id']['relationships']['betaTesters']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1.apps)[':id']['relationships']['betaTesters']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1AppsIdRelationshipsBetaTestersMutationOptions<
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

export function getV1BetaAppLocalizationsQueryKey(
  args: InferRequestType<typeof client.v1.betaAppLocalizations.$get>,
) {
  return ['v1', '/v1/betaAppLocalizations', args] as const
}

export function getV1BetaAppLocalizationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.betaAppLocalizations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.betaAppLocalizations.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.betaAppLocalizations.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BetaAppLocalizationsQueryKey>
  >({
    queryKey: getV1BetaAppLocalizationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.betaAppLocalizations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1BetaAppLocalizations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.betaAppLocalizations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.betaAppLocalizations.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.betaAppLocalizations.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BetaAppLocalizationsQueryKey>
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
      ...getV1BetaAppLocalizationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1BetaAppLocalizations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.betaAppLocalizations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.betaAppLocalizations.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.betaAppLocalizations.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BetaAppLocalizationsQueryKey>
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
      ...getV1BetaAppLocalizationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV1BetaAppLocalizationsMutationKey() {
  return ['v1', '/v1/betaAppLocalizations', 'POST'] as const
}

export function getPostV1BetaAppLocalizationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.betaAppLocalizations.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.betaAppLocalizations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1BetaAppLocalizationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.betaAppLocalizations.$post>) {
      return parseResponse(client.v1.betaAppLocalizations.$post(args, options))
    },
  })
}

export function usePostV1BetaAppLocalizations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.betaAppLocalizations.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.betaAppLocalizations.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1BetaAppLocalizationsMutationOptions<TError, TOnMutateResult>(
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

export function getV1BetaAppLocalizationsIdQueryKey(
  args: InferRequestType<(typeof client.v1.betaAppLocalizations)[':id']['$get']>,
) {
  return ['v1', '/v1/betaAppLocalizations/:id', args] as const
}

export function getV1BetaAppLocalizationsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.betaAppLocalizations)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.betaAppLocalizations)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.betaAppLocalizations)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BetaAppLocalizationsIdQueryKey>
  >({
    queryKey: getV1BetaAppLocalizationsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.betaAppLocalizations[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1BetaAppLocalizationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.betaAppLocalizations)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.betaAppLocalizations)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.betaAppLocalizations)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BetaAppLocalizationsIdQueryKey>
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
      ...getV1BetaAppLocalizationsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1BetaAppLocalizationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.betaAppLocalizations)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.betaAppLocalizations)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.betaAppLocalizations)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BetaAppLocalizationsIdQueryKey>
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
      ...getV1BetaAppLocalizationsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteV1BetaAppLocalizationsIdMutationKey() {
  return ['v1', '/v1/betaAppLocalizations/:id', 'DELETE'] as const
}

export function getDeleteV1BetaAppLocalizationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.betaAppLocalizations)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.betaAppLocalizations)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1BetaAppLocalizationsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.betaAppLocalizations)[':id']['$delete']>,
    ) {
      return parseResponse(client.v1.betaAppLocalizations[':id'].$delete(args, options))
    },
  })
}

export function useDeleteV1BetaAppLocalizationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.betaAppLocalizations)[':id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1.betaAppLocalizations)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1BetaAppLocalizationsIdMutationOptions<
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

export function getPatchV1BetaAppLocalizationsIdMutationKey() {
  return ['v1', '/v1/betaAppLocalizations/:id', 'PATCH'] as const
}

export function getPatchV1BetaAppLocalizationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.betaAppLocalizations)[':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.betaAppLocalizations)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1BetaAppLocalizationsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.betaAppLocalizations)[':id']['$patch']>,
    ) {
      return parseResponse(client.v1.betaAppLocalizations[':id'].$patch(args, options))
    },
  })
}

export function usePatchV1BetaAppLocalizationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.betaAppLocalizations)[':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.betaAppLocalizations)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV1BetaAppLocalizationsIdMutationOptions<TError, TOnMutateResult>(
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

export function getV1BetaAppLocalizationsIdAppQueryKey(
  args: InferRequestType<(typeof client.v1.betaAppLocalizations)[':id']['app']['$get']>,
) {
  return ['v1', '/v1/betaAppLocalizations/:id/app', args] as const
}

export function getV1BetaAppLocalizationsIdAppQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.betaAppLocalizations)[':id']['app']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.betaAppLocalizations)[':id']['app']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.betaAppLocalizations)[':id']['app']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BetaAppLocalizationsIdAppQueryKey>
  >({
    queryKey: getV1BetaAppLocalizationsIdAppQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.betaAppLocalizations[':id'].app.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1BetaAppLocalizationsIdApp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.betaAppLocalizations)[':id']['app']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.betaAppLocalizations)[':id']['app']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.betaAppLocalizations)[':id']['app']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BetaAppLocalizationsIdAppQueryKey>
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
      ...getV1BetaAppLocalizationsIdAppQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1BetaAppLocalizationsIdApp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.betaAppLocalizations)[':id']['app']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.betaAppLocalizations)[':id']['app']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.betaAppLocalizations)[':id']['app']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BetaAppLocalizationsIdAppQueryKey>
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
      ...getV1BetaAppLocalizationsIdAppQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1BetaAppReviewDetailsQueryKey(
  args: InferRequestType<typeof client.v1.betaAppReviewDetails.$get>,
) {
  return ['v1', '/v1/betaAppReviewDetails', args] as const
}

export function getV1BetaAppReviewDetailsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.betaAppReviewDetails.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.betaAppReviewDetails.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.betaAppReviewDetails.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BetaAppReviewDetailsQueryKey>
  >({
    queryKey: getV1BetaAppReviewDetailsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.betaAppReviewDetails.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1BetaAppReviewDetails<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.betaAppReviewDetails.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.betaAppReviewDetails.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.betaAppReviewDetails.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BetaAppReviewDetailsQueryKey>
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
      ...getV1BetaAppReviewDetailsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1BetaAppReviewDetails<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.betaAppReviewDetails.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.betaAppReviewDetails.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.betaAppReviewDetails.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BetaAppReviewDetailsQueryKey>
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
      ...getV1BetaAppReviewDetailsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1BetaAppReviewDetailsIdQueryKey(
  args: InferRequestType<(typeof client.v1.betaAppReviewDetails)[':id']['$get']>,
) {
  return ['v1', '/v1/betaAppReviewDetails/:id', args] as const
}

export function getV1BetaAppReviewDetailsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.betaAppReviewDetails)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.betaAppReviewDetails)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.betaAppReviewDetails)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BetaAppReviewDetailsIdQueryKey>
  >({
    queryKey: getV1BetaAppReviewDetailsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.betaAppReviewDetails[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1BetaAppReviewDetailsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.betaAppReviewDetails)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.betaAppReviewDetails)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.betaAppReviewDetails)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BetaAppReviewDetailsIdQueryKey>
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
      ...getV1BetaAppReviewDetailsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1BetaAppReviewDetailsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.betaAppReviewDetails)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.betaAppReviewDetails)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.betaAppReviewDetails)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BetaAppReviewDetailsIdQueryKey>
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
      ...getV1BetaAppReviewDetailsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPatchV1BetaAppReviewDetailsIdMutationKey() {
  return ['v1', '/v1/betaAppReviewDetails/:id', 'PATCH'] as const
}

export function getPatchV1BetaAppReviewDetailsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.betaAppReviewDetails)[':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.betaAppReviewDetails)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1BetaAppReviewDetailsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.betaAppReviewDetails)[':id']['$patch']>,
    ) {
      return parseResponse(client.v1.betaAppReviewDetails[':id'].$patch(args, options))
    },
  })
}

export function usePatchV1BetaAppReviewDetailsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.betaAppReviewDetails)[':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.betaAppReviewDetails)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV1BetaAppReviewDetailsIdMutationOptions<TError, TOnMutateResult>(
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

export function getV1BetaAppReviewDetailsIdAppQueryKey(
  args: InferRequestType<(typeof client.v1.betaAppReviewDetails)[':id']['app']['$get']>,
) {
  return ['v1', '/v1/betaAppReviewDetails/:id/app', args] as const
}

export function getV1BetaAppReviewDetailsIdAppQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.betaAppReviewDetails)[':id']['app']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.betaAppReviewDetails)[':id']['app']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.betaAppReviewDetails)[':id']['app']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BetaAppReviewDetailsIdAppQueryKey>
  >({
    queryKey: getV1BetaAppReviewDetailsIdAppQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.betaAppReviewDetails[':id'].app.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1BetaAppReviewDetailsIdApp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.betaAppReviewDetails)[':id']['app']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.betaAppReviewDetails)[':id']['app']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.betaAppReviewDetails)[':id']['app']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BetaAppReviewDetailsIdAppQueryKey>
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
      ...getV1BetaAppReviewDetailsIdAppQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1BetaAppReviewDetailsIdApp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.betaAppReviewDetails)[':id']['app']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.betaAppReviewDetails)[':id']['app']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.betaAppReviewDetails)[':id']['app']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BetaAppReviewDetailsIdAppQueryKey>
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
      ...getV1BetaAppReviewDetailsIdAppQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1BetaAppReviewSubmissionsQueryKey(
  args: InferRequestType<typeof client.v1.betaAppReviewSubmissions.$get>,
) {
  return ['v1', '/v1/betaAppReviewSubmissions', args] as const
}

export function getV1BetaAppReviewSubmissionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.betaAppReviewSubmissions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.betaAppReviewSubmissions.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.betaAppReviewSubmissions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BetaAppReviewSubmissionsQueryKey>
  >({
    queryKey: getV1BetaAppReviewSubmissionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.betaAppReviewSubmissions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1BetaAppReviewSubmissions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.betaAppReviewSubmissions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.betaAppReviewSubmissions.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.betaAppReviewSubmissions.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BetaAppReviewSubmissionsQueryKey>
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
      ...getV1BetaAppReviewSubmissionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1BetaAppReviewSubmissions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.betaAppReviewSubmissions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.betaAppReviewSubmissions.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.betaAppReviewSubmissions.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BetaAppReviewSubmissionsQueryKey>
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
      ...getV1BetaAppReviewSubmissionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV1BetaAppReviewSubmissionsMutationKey() {
  return ['v1', '/v1/betaAppReviewSubmissions', 'POST'] as const
}

export function getPostV1BetaAppReviewSubmissionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.betaAppReviewSubmissions.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.betaAppReviewSubmissions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1BetaAppReviewSubmissionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.betaAppReviewSubmissions.$post>) {
      return parseResponse(client.v1.betaAppReviewSubmissions.$post(args, options))
    },
  })
}

export function usePostV1BetaAppReviewSubmissions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.betaAppReviewSubmissions.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.betaAppReviewSubmissions.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1BetaAppReviewSubmissionsMutationOptions<
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

export function getV1BetaAppReviewSubmissionsIdQueryKey(
  args: InferRequestType<(typeof client.v1.betaAppReviewSubmissions)[':id']['$get']>,
) {
  return ['v1', '/v1/betaAppReviewSubmissions/:id', args] as const
}

export function getV1BetaAppReviewSubmissionsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.betaAppReviewSubmissions)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.betaAppReviewSubmissions)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.betaAppReviewSubmissions)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BetaAppReviewSubmissionsIdQueryKey>
  >({
    queryKey: getV1BetaAppReviewSubmissionsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.betaAppReviewSubmissions[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1BetaAppReviewSubmissionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.betaAppReviewSubmissions)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.betaAppReviewSubmissions)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.betaAppReviewSubmissions)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BetaAppReviewSubmissionsIdQueryKey>
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
      ...getV1BetaAppReviewSubmissionsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1BetaAppReviewSubmissionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.betaAppReviewSubmissions)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.betaAppReviewSubmissions)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.betaAppReviewSubmissions)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BetaAppReviewSubmissionsIdQueryKey>
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
      ...getV1BetaAppReviewSubmissionsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1BetaAppReviewSubmissionsIdBuildQueryKey(
  args: InferRequestType<(typeof client.v1.betaAppReviewSubmissions)[':id']['build']['$get']>,
) {
  return ['v1', '/v1/betaAppReviewSubmissions/:id/build', args] as const
}

export function getV1BetaAppReviewSubmissionsIdBuildQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.betaAppReviewSubmissions)[':id']['build']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.betaAppReviewSubmissions)[':id']['build']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.betaAppReviewSubmissions)[':id']['build']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BetaAppReviewSubmissionsIdBuildQueryKey>
  >({
    queryKey: getV1BetaAppReviewSubmissionsIdBuildQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.betaAppReviewSubmissions[':id'].build.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1BetaAppReviewSubmissionsIdBuild<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.betaAppReviewSubmissions)[':id']['build']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.betaAppReviewSubmissions)[':id']['build']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.betaAppReviewSubmissions)[':id']['build']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BetaAppReviewSubmissionsIdBuildQueryKey>
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
      ...getV1BetaAppReviewSubmissionsIdBuildQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1BetaAppReviewSubmissionsIdBuild<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.betaAppReviewSubmissions)[':id']['build']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.betaAppReviewSubmissions)[':id']['build']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.betaAppReviewSubmissions)[':id']['build']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BetaAppReviewSubmissionsIdBuildQueryKey>
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
      ...getV1BetaAppReviewSubmissionsIdBuildQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1BetaBuildLocalizationsQueryKey(
  args: InferRequestType<typeof client.v1.betaBuildLocalizations.$get>,
) {
  return ['v1', '/v1/betaBuildLocalizations', args] as const
}

export function getV1BetaBuildLocalizationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.betaBuildLocalizations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.betaBuildLocalizations.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.betaBuildLocalizations.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BetaBuildLocalizationsQueryKey>
  >({
    queryKey: getV1BetaBuildLocalizationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.betaBuildLocalizations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1BetaBuildLocalizations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.betaBuildLocalizations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.betaBuildLocalizations.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.betaBuildLocalizations.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BetaBuildLocalizationsQueryKey>
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
      ...getV1BetaBuildLocalizationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1BetaBuildLocalizations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.betaBuildLocalizations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.betaBuildLocalizations.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.betaBuildLocalizations.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BetaBuildLocalizationsQueryKey>
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
      ...getV1BetaBuildLocalizationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV1BetaBuildLocalizationsMutationKey() {
  return ['v1', '/v1/betaBuildLocalizations', 'POST'] as const
}

export function getPostV1BetaBuildLocalizationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.betaBuildLocalizations.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.betaBuildLocalizations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1BetaBuildLocalizationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.betaBuildLocalizations.$post>) {
      return parseResponse(client.v1.betaBuildLocalizations.$post(args, options))
    },
  })
}

export function usePostV1BetaBuildLocalizations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.betaBuildLocalizations.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.betaBuildLocalizations.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1BetaBuildLocalizationsMutationOptions<TError, TOnMutateResult>(
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

export function getV1BetaBuildLocalizationsIdQueryKey(
  args: InferRequestType<(typeof client.v1.betaBuildLocalizations)[':id']['$get']>,
) {
  return ['v1', '/v1/betaBuildLocalizations/:id', args] as const
}

export function getV1BetaBuildLocalizationsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.betaBuildLocalizations)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.betaBuildLocalizations)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.betaBuildLocalizations)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BetaBuildLocalizationsIdQueryKey>
  >({
    queryKey: getV1BetaBuildLocalizationsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.betaBuildLocalizations[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1BetaBuildLocalizationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.betaBuildLocalizations)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.betaBuildLocalizations)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.betaBuildLocalizations)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BetaBuildLocalizationsIdQueryKey>
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
      ...getV1BetaBuildLocalizationsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1BetaBuildLocalizationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.betaBuildLocalizations)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.betaBuildLocalizations)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.betaBuildLocalizations)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BetaBuildLocalizationsIdQueryKey>
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
      ...getV1BetaBuildLocalizationsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteV1BetaBuildLocalizationsIdMutationKey() {
  return ['v1', '/v1/betaBuildLocalizations/:id', 'DELETE'] as const
}

export function getDeleteV1BetaBuildLocalizationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.betaBuildLocalizations)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.betaBuildLocalizations)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1BetaBuildLocalizationsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.betaBuildLocalizations)[':id']['$delete']>,
    ) {
      return parseResponse(client.v1.betaBuildLocalizations[':id'].$delete(args, options))
    },
  })
}

export function useDeleteV1BetaBuildLocalizationsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.betaBuildLocalizations)[':id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1.betaBuildLocalizations)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1BetaBuildLocalizationsIdMutationOptions<
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

export function getPatchV1BetaBuildLocalizationsIdMutationKey() {
  return ['v1', '/v1/betaBuildLocalizations/:id', 'PATCH'] as const
}

export function getPatchV1BetaBuildLocalizationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.betaBuildLocalizations)[':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.betaBuildLocalizations)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1BetaBuildLocalizationsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.betaBuildLocalizations)[':id']['$patch']>,
    ) {
      return parseResponse(client.v1.betaBuildLocalizations[':id'].$patch(args, options))
    },
  })
}

export function usePatchV1BetaBuildLocalizationsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.betaBuildLocalizations)[':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.betaBuildLocalizations)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV1BetaBuildLocalizationsIdMutationOptions<
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

export function getV1BetaBuildLocalizationsIdBuildQueryKey(
  args: InferRequestType<(typeof client.v1.betaBuildLocalizations)[':id']['build']['$get']>,
) {
  return ['v1', '/v1/betaBuildLocalizations/:id/build', args] as const
}

export function getV1BetaBuildLocalizationsIdBuildQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.betaBuildLocalizations)[':id']['build']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.betaBuildLocalizations)[':id']['build']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.betaBuildLocalizations)[':id']['build']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BetaBuildLocalizationsIdBuildQueryKey>
  >({
    queryKey: getV1BetaBuildLocalizationsIdBuildQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.betaBuildLocalizations[':id'].build.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1BetaBuildLocalizationsIdBuild<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.betaBuildLocalizations)[':id']['build']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.betaBuildLocalizations)[':id']['build']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.betaBuildLocalizations)[':id']['build']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BetaBuildLocalizationsIdBuildQueryKey>
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
      ...getV1BetaBuildLocalizationsIdBuildQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1BetaBuildLocalizationsIdBuild<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.betaBuildLocalizations)[':id']['build']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.betaBuildLocalizations)[':id']['build']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.betaBuildLocalizations)[':id']['build']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BetaBuildLocalizationsIdBuildQueryKey>
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
      ...getV1BetaBuildLocalizationsIdBuildQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1BetaGroupsQueryKey(args: InferRequestType<typeof client.v1.betaGroups.$get>) {
  return ['v1', '/v1/betaGroups', args] as const
}

export function getV1BetaGroupsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.betaGroups.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.betaGroups.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.betaGroups.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1BetaGroupsQueryKey>
  >({
    queryKey: getV1BetaGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.betaGroups.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1BetaGroups<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.betaGroups.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.betaGroups.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.betaGroups.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1BetaGroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1BetaGroupsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1BetaGroups<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.betaGroups.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.betaGroups.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.betaGroups.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1BetaGroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1BetaGroupsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV1BetaGroupsMutationKey() {
  return ['v1', '/v1/betaGroups', 'POST'] as const
}

export function getPostV1BetaGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.betaGroups.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.betaGroups.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1BetaGroupsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.betaGroups.$post>) {
      return parseResponse(client.v1.betaGroups.$post(args, options))
    },
  })
}

export function usePostV1BetaGroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.betaGroups.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.betaGroups.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1BetaGroupsMutationOptions<TError, TOnMutateResult>(
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

export function getV1BetaGroupsIdQueryKey(
  args: InferRequestType<(typeof client.v1.betaGroups)[':id']['$get']>,
) {
  return ['v1', '/v1/betaGroups/:id', args] as const
}

export function getV1BetaGroupsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.betaGroups)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.betaGroups)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.betaGroups)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BetaGroupsIdQueryKey>
  >({
    queryKey: getV1BetaGroupsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.betaGroups[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1BetaGroupsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.betaGroups)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.betaGroups)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.betaGroups)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BetaGroupsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1BetaGroupsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1BetaGroupsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.betaGroups)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.betaGroups)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.betaGroups)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BetaGroupsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1BetaGroupsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteV1BetaGroupsIdMutationKey() {
  return ['v1', '/v1/betaGroups/:id', 'DELETE'] as const
}

export function getDeleteV1BetaGroupsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.betaGroups)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.betaGroups)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1BetaGroupsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.betaGroups)[':id']['$delete']>) {
      return parseResponse(client.v1.betaGroups[':id'].$delete(args, options))
    },
  })
}

export function useDeleteV1BetaGroupsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.betaGroups)[':id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1.betaGroups)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1BetaGroupsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchV1BetaGroupsIdMutationKey() {
  return ['v1', '/v1/betaGroups/:id', 'PATCH'] as const
}

export function getPatchV1BetaGroupsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.betaGroups)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.betaGroups)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1BetaGroupsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.betaGroups)[':id']['$patch']>) {
      return parseResponse(client.v1.betaGroups[':id'].$patch(args, options))
    },
  })
}

export function usePatchV1BetaGroupsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.betaGroups)[':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.betaGroups)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV1BetaGroupsIdMutationOptions<TError, TOnMutateResult>(
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

export function getV1BetaGroupsIdAppQueryKey(
  args: InferRequestType<(typeof client.v1.betaGroups)[':id']['app']['$get']>,
) {
  return ['v1', '/v1/betaGroups/:id/app', args] as const
}

export function getV1BetaGroupsIdAppQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.betaGroups)[':id']['app']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.betaGroups)[':id']['app']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.betaGroups)[':id']['app']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BetaGroupsIdAppQueryKey>
  >({
    queryKey: getV1BetaGroupsIdAppQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.betaGroups[':id'].app.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1BetaGroupsIdApp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.betaGroups)[':id']['app']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.betaGroups)[':id']['app']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.betaGroups)[':id']['app']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BetaGroupsIdAppQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1BetaGroupsIdAppQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1BetaGroupsIdApp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.betaGroups)[':id']['app']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.betaGroups)[':id']['app']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.betaGroups)[':id']['app']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BetaGroupsIdAppQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1BetaGroupsIdAppQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1BetaGroupsIdBetaTestersQueryKey(
  args: InferRequestType<(typeof client.v1.betaGroups)[':id']['betaTesters']['$get']>,
) {
  return ['v1', '/v1/betaGroups/:id/betaTesters', args] as const
}

export function getV1BetaGroupsIdBetaTestersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.betaGroups)[':id']['betaTesters']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.betaGroups)[':id']['betaTesters']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.betaGroups)[':id']['betaTesters']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BetaGroupsIdBetaTestersQueryKey>
  >({
    queryKey: getV1BetaGroupsIdBetaTestersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.betaGroups[':id'].betaTesters.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1BetaGroupsIdBetaTesters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.betaGroups)[':id']['betaTesters']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.betaGroups)[':id']['betaTesters']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.betaGroups)[':id']['betaTesters']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BetaGroupsIdBetaTestersQueryKey>
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
      ...getV1BetaGroupsIdBetaTestersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1BetaGroupsIdBetaTesters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.betaGroups)[':id']['betaTesters']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.betaGroups)[':id']['betaTesters']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.betaGroups)[':id']['betaTesters']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BetaGroupsIdBetaTestersQueryKey>
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
      ...getV1BetaGroupsIdBetaTestersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1BetaGroupsIdBuildsQueryKey(
  args: InferRequestType<(typeof client.v1.betaGroups)[':id']['builds']['$get']>,
) {
  return ['v1', '/v1/betaGroups/:id/builds', args] as const
}

export function getV1BetaGroupsIdBuildsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.betaGroups)[':id']['builds']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.betaGroups)[':id']['builds']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.betaGroups)[':id']['builds']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BetaGroupsIdBuildsQueryKey>
  >({
    queryKey: getV1BetaGroupsIdBuildsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.betaGroups[':id'].builds.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1BetaGroupsIdBuilds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.betaGroups)[':id']['builds']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.betaGroups)[':id']['builds']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.betaGroups)[':id']['builds']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BetaGroupsIdBuildsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1BetaGroupsIdBuildsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1BetaGroupsIdBuilds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.betaGroups)[':id']['builds']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.betaGroups)[':id']['builds']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.betaGroups)[':id']['builds']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BetaGroupsIdBuildsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1BetaGroupsIdBuildsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1BetaGroupsIdRelationshipsBetaTestersQueryKey(
  args: InferRequestType<
    (typeof client.v1.betaGroups)[':id']['relationships']['betaTesters']['$get']
  >,
) {
  return ['v1', '/v1/betaGroups/:id/relationships/betaTesters', args] as const
}

export function getV1BetaGroupsIdRelationshipsBetaTestersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.betaGroups)[':id']['relationships']['betaTesters']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.betaGroups)[':id']['relationships']['betaTesters']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.betaGroups)[':id']['relationships']['betaTesters']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BetaGroupsIdRelationshipsBetaTestersQueryKey>
  >({
    queryKey: getV1BetaGroupsIdRelationshipsBetaTestersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.betaGroups[':id'].relationships.betaTesters.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1BetaGroupsIdRelationshipsBetaTesters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.betaGroups)[':id']['relationships']['betaTesters']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.betaGroups)[':id']['relationships']['betaTesters']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.betaGroups)[':id']['relationships']['betaTesters']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BetaGroupsIdRelationshipsBetaTestersQueryKey>
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
      ...getV1BetaGroupsIdRelationshipsBetaTestersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1BetaGroupsIdRelationshipsBetaTesters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.betaGroups)[':id']['relationships']['betaTesters']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.betaGroups)[':id']['relationships']['betaTesters']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.betaGroups)[':id']['relationships']['betaTesters']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BetaGroupsIdRelationshipsBetaTestersQueryKey>
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
      ...getV1BetaGroupsIdRelationshipsBetaTestersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV1BetaGroupsIdRelationshipsBetaTestersMutationKey() {
  return ['v1', '/v1/betaGroups/:id/relationships/betaTesters', 'POST'] as const
}

export function getPostV1BetaGroupsIdRelationshipsBetaTestersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.betaGroups)[':id']['relationships']['betaTesters']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.betaGroups)[':id']['relationships']['betaTesters']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1BetaGroupsIdRelationshipsBetaTestersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.betaGroups)[':id']['relationships']['betaTesters']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.betaGroups[':id'].relationships.betaTesters.$post(args, options),
      )
    },
  })
}

export function usePostV1BetaGroupsIdRelationshipsBetaTesters<
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
                    (typeof client.v1.betaGroups)[':id']['relationships']['betaTesters']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v1.betaGroups)[':id']['relationships']['betaTesters']['$post']
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
  const mutationDefaults = getPostV1BetaGroupsIdRelationshipsBetaTestersMutationOptions<
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

export function getDeleteV1BetaGroupsIdRelationshipsBetaTestersMutationKey() {
  return ['v1', '/v1/betaGroups/:id/relationships/betaTesters', 'DELETE'] as const
}

export function getDeleteV1BetaGroupsIdRelationshipsBetaTestersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.betaGroups)[':id']['relationships']['betaTesters']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v1.betaGroups)[':id']['relationships']['betaTesters']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1BetaGroupsIdRelationshipsBetaTestersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.betaGroups)[':id']['relationships']['betaTesters']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.betaGroups[':id'].relationships.betaTesters.$delete(args, options),
      )
    },
  })
}

export function useDeleteV1BetaGroupsIdRelationshipsBetaTesters<
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
                    (typeof client.v1.betaGroups)[':id']['relationships']['betaTesters']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v1.betaGroups)[':id']['relationships']['betaTesters']['$delete']
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
  const mutationDefaults = getDeleteV1BetaGroupsIdRelationshipsBetaTestersMutationOptions<
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

export function getV1BetaGroupsIdRelationshipsBuildsQueryKey(
  args: InferRequestType<(typeof client.v1.betaGroups)[':id']['relationships']['builds']['$get']>,
) {
  return ['v1', '/v1/betaGroups/:id/relationships/builds', args] as const
}

export function getV1BetaGroupsIdRelationshipsBuildsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.betaGroups)[':id']['relationships']['builds']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.betaGroups)[':id']['relationships']['builds']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.betaGroups)[':id']['relationships']['builds']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BetaGroupsIdRelationshipsBuildsQueryKey>
  >({
    queryKey: getV1BetaGroupsIdRelationshipsBuildsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.betaGroups[':id'].relationships.builds.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1BetaGroupsIdRelationshipsBuilds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.betaGroups)[':id']['relationships']['builds']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.betaGroups)[':id']['relationships']['builds']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.betaGroups)[':id']['relationships']['builds']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BetaGroupsIdRelationshipsBuildsQueryKey>
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
      ...getV1BetaGroupsIdRelationshipsBuildsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1BetaGroupsIdRelationshipsBuilds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.betaGroups)[':id']['relationships']['builds']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.betaGroups)[':id']['relationships']['builds']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.betaGroups)[':id']['relationships']['builds']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BetaGroupsIdRelationshipsBuildsQueryKey>
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
      ...getV1BetaGroupsIdRelationshipsBuildsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV1BetaGroupsIdRelationshipsBuildsMutationKey() {
  return ['v1', '/v1/betaGroups/:id/relationships/builds', 'POST'] as const
}

export function getPostV1BetaGroupsIdRelationshipsBuildsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.betaGroups)[':id']['relationships']['builds']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.betaGroups)[':id']['relationships']['builds']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1BetaGroupsIdRelationshipsBuildsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.betaGroups)[':id']['relationships']['builds']['$post']
      >,
    ) {
      return parseResponse(client.v1.betaGroups[':id'].relationships.builds.$post(args, options))
    },
  })
}

export function usePostV1BetaGroupsIdRelationshipsBuilds<
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
                    (typeof client.v1.betaGroups)[':id']['relationships']['builds']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1.betaGroups)[':id']['relationships']['builds']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1BetaGroupsIdRelationshipsBuildsMutationOptions<
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

export function getDeleteV1BetaGroupsIdRelationshipsBuildsMutationKey() {
  return ['v1', '/v1/betaGroups/:id/relationships/builds', 'DELETE'] as const
}

export function getDeleteV1BetaGroupsIdRelationshipsBuildsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.betaGroups)[':id']['relationships']['builds']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.betaGroups)[':id']['relationships']['builds']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1BetaGroupsIdRelationshipsBuildsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.betaGroups)[':id']['relationships']['builds']['$delete']
      >,
    ) {
      return parseResponse(client.v1.betaGroups[':id'].relationships.builds.$delete(args, options))
    },
  })
}

export function useDeleteV1BetaGroupsIdRelationshipsBuilds<
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
                    (typeof client.v1.betaGroups)[':id']['relationships']['builds']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v1.betaGroups)[':id']['relationships']['builds']['$delete']
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
  const mutationDefaults = getDeleteV1BetaGroupsIdRelationshipsBuildsMutationOptions<
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

export function getV1BetaLicenseAgreementsQueryKey(
  args: InferRequestType<typeof client.v1.betaLicenseAgreements.$get>,
) {
  return ['v1', '/v1/betaLicenseAgreements', args] as const
}

export function getV1BetaLicenseAgreementsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.betaLicenseAgreements.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.betaLicenseAgreements.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.betaLicenseAgreements.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BetaLicenseAgreementsQueryKey>
  >({
    queryKey: getV1BetaLicenseAgreementsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.betaLicenseAgreements.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1BetaLicenseAgreements<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.betaLicenseAgreements.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.betaLicenseAgreements.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.betaLicenseAgreements.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BetaLicenseAgreementsQueryKey>
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
      ...getV1BetaLicenseAgreementsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1BetaLicenseAgreements<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.betaLicenseAgreements.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.betaLicenseAgreements.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.betaLicenseAgreements.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BetaLicenseAgreementsQueryKey>
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
      ...getV1BetaLicenseAgreementsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1BetaLicenseAgreementsIdQueryKey(
  args: InferRequestType<(typeof client.v1.betaLicenseAgreements)[':id']['$get']>,
) {
  return ['v1', '/v1/betaLicenseAgreements/:id', args] as const
}

export function getV1BetaLicenseAgreementsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.betaLicenseAgreements)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.betaLicenseAgreements)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.betaLicenseAgreements)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BetaLicenseAgreementsIdQueryKey>
  >({
    queryKey: getV1BetaLicenseAgreementsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.betaLicenseAgreements[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1BetaLicenseAgreementsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.betaLicenseAgreements)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.betaLicenseAgreements)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.betaLicenseAgreements)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BetaLicenseAgreementsIdQueryKey>
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
      ...getV1BetaLicenseAgreementsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1BetaLicenseAgreementsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.betaLicenseAgreements)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.betaLicenseAgreements)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.betaLicenseAgreements)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BetaLicenseAgreementsIdQueryKey>
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
      ...getV1BetaLicenseAgreementsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPatchV1BetaLicenseAgreementsIdMutationKey() {
  return ['v1', '/v1/betaLicenseAgreements/:id', 'PATCH'] as const
}

export function getPatchV1BetaLicenseAgreementsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.betaLicenseAgreements)[':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.betaLicenseAgreements)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1BetaLicenseAgreementsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.betaLicenseAgreements)[':id']['$patch']>,
    ) {
      return parseResponse(client.v1.betaLicenseAgreements[':id'].$patch(args, options))
    },
  })
}

export function usePatchV1BetaLicenseAgreementsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.betaLicenseAgreements)[':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.betaLicenseAgreements)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV1BetaLicenseAgreementsIdMutationOptions<
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

export function getV1BetaLicenseAgreementsIdAppQueryKey(
  args: InferRequestType<(typeof client.v1.betaLicenseAgreements)[':id']['app']['$get']>,
) {
  return ['v1', '/v1/betaLicenseAgreements/:id/app', args] as const
}

export function getV1BetaLicenseAgreementsIdAppQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.betaLicenseAgreements)[':id']['app']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.betaLicenseAgreements)[':id']['app']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.betaLicenseAgreements)[':id']['app']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BetaLicenseAgreementsIdAppQueryKey>
  >({
    queryKey: getV1BetaLicenseAgreementsIdAppQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.betaLicenseAgreements[':id'].app.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1BetaLicenseAgreementsIdApp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.betaLicenseAgreements)[':id']['app']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.betaLicenseAgreements)[':id']['app']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.betaLicenseAgreements)[':id']['app']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BetaLicenseAgreementsIdAppQueryKey>
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
      ...getV1BetaLicenseAgreementsIdAppQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1BetaLicenseAgreementsIdApp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.betaLicenseAgreements)[':id']['app']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.betaLicenseAgreements)[':id']['app']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.betaLicenseAgreements)[':id']['app']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BetaLicenseAgreementsIdAppQueryKey>
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
      ...getV1BetaLicenseAgreementsIdAppQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV1BetaTesterInvitationsMutationKey() {
  return ['v1', '/v1/betaTesterInvitations', 'POST'] as const
}

export function getPostV1BetaTesterInvitationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.betaTesterInvitations.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.betaTesterInvitations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1BetaTesterInvitationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.betaTesterInvitations.$post>) {
      return parseResponse(client.v1.betaTesterInvitations.$post(args, options))
    },
  })
}

export function usePostV1BetaTesterInvitations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.betaTesterInvitations.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.betaTesterInvitations.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1BetaTesterInvitationsMutationOptions<TError, TOnMutateResult>(
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

export function getV1BetaTestersQueryKey(
  args: InferRequestType<typeof client.v1.betaTesters.$get>,
) {
  return ['v1', '/v1/betaTesters', args] as const
}

export function getV1BetaTestersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.betaTesters.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.betaTesters.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.betaTesters.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1BetaTestersQueryKey>
  >({
    queryKey: getV1BetaTestersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.betaTesters.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1BetaTesters<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.betaTesters.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.betaTesters.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.betaTesters.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1BetaTestersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1BetaTestersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1BetaTesters<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.betaTesters.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.betaTesters.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.betaTesters.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1BetaTestersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1BetaTestersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV1BetaTestersMutationKey() {
  return ['v1', '/v1/betaTesters', 'POST'] as const
}

export function getPostV1BetaTestersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.betaTesters.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.betaTesters.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1BetaTestersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.betaTesters.$post>) {
      return parseResponse(client.v1.betaTesters.$post(args, options))
    },
  })
}

export function usePostV1BetaTesters<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.betaTesters.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.betaTesters.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1BetaTestersMutationOptions<TError, TOnMutateResult>(
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

export function getV1BetaTestersIdQueryKey(
  args: InferRequestType<(typeof client.v1.betaTesters)[':id']['$get']>,
) {
  return ['v1', '/v1/betaTesters/:id', args] as const
}

export function getV1BetaTestersIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.betaTesters)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.betaTesters)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.betaTesters)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BetaTestersIdQueryKey>
  >({
    queryKey: getV1BetaTestersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.betaTesters[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1BetaTestersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.betaTesters)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.betaTesters)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.betaTesters)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BetaTestersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1BetaTestersIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1BetaTestersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.betaTesters)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.betaTesters)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.betaTesters)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BetaTestersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1BetaTestersIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteV1BetaTestersIdMutationKey() {
  return ['v1', '/v1/betaTesters/:id', 'DELETE'] as const
}

export function getDeleteV1BetaTestersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.betaTesters)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.betaTesters)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1BetaTestersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.betaTesters)[':id']['$delete']>) {
      return parseResponse(client.v1.betaTesters[':id'].$delete(args, options))
    },
  })
}

export function useDeleteV1BetaTestersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.betaTesters)[':id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1.betaTesters)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1BetaTestersIdMutationOptions<TError, TOnMutateResult>(
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

export function getV1BetaTestersIdAppsQueryKey(
  args: InferRequestType<(typeof client.v1.betaTesters)[':id']['apps']['$get']>,
) {
  return ['v1', '/v1/betaTesters/:id/apps', args] as const
}

export function getV1BetaTestersIdAppsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.betaTesters)[':id']['apps']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.betaTesters)[':id']['apps']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.betaTesters)[':id']['apps']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BetaTestersIdAppsQueryKey>
  >({
    queryKey: getV1BetaTestersIdAppsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.betaTesters[':id'].apps.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1BetaTestersIdApps<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.betaTesters)[':id']['apps']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.betaTesters)[':id']['apps']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.betaTesters)[':id']['apps']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BetaTestersIdAppsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1BetaTestersIdAppsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1BetaTestersIdApps<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.betaTesters)[':id']['apps']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.betaTesters)[':id']['apps']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.betaTesters)[':id']['apps']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BetaTestersIdAppsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1BetaTestersIdAppsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1BetaTestersIdBetaGroupsQueryKey(
  args: InferRequestType<(typeof client.v1.betaTesters)[':id']['betaGroups']['$get']>,
) {
  return ['v1', '/v1/betaTesters/:id/betaGroups', args] as const
}

export function getV1BetaTestersIdBetaGroupsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.betaTesters)[':id']['betaGroups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.betaTesters)[':id']['betaGroups']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.betaTesters)[':id']['betaGroups']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BetaTestersIdBetaGroupsQueryKey>
  >({
    queryKey: getV1BetaTestersIdBetaGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.betaTesters[':id'].betaGroups.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1BetaTestersIdBetaGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.betaTesters)[':id']['betaGroups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.betaTesters)[':id']['betaGroups']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.betaTesters)[':id']['betaGroups']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BetaTestersIdBetaGroupsQueryKey>
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
      ...getV1BetaTestersIdBetaGroupsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1BetaTestersIdBetaGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.betaTesters)[':id']['betaGroups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.betaTesters)[':id']['betaGroups']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.betaTesters)[':id']['betaGroups']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BetaTestersIdBetaGroupsQueryKey>
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
      ...getV1BetaTestersIdBetaGroupsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1BetaTestersIdBuildsQueryKey(
  args: InferRequestType<(typeof client.v1.betaTesters)[':id']['builds']['$get']>,
) {
  return ['v1', '/v1/betaTesters/:id/builds', args] as const
}

export function getV1BetaTestersIdBuildsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.betaTesters)[':id']['builds']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.betaTesters)[':id']['builds']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.betaTesters)[':id']['builds']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BetaTestersIdBuildsQueryKey>
  >({
    queryKey: getV1BetaTestersIdBuildsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.betaTesters[':id'].builds.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1BetaTestersIdBuilds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.betaTesters)[':id']['builds']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.betaTesters)[':id']['builds']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.betaTesters)[':id']['builds']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BetaTestersIdBuildsQueryKey>
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
      ...getV1BetaTestersIdBuildsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1BetaTestersIdBuilds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.betaTesters)[':id']['builds']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.betaTesters)[':id']['builds']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.betaTesters)[':id']['builds']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BetaTestersIdBuildsQueryKey>
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
      ...getV1BetaTestersIdBuildsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1BetaTestersIdRelationshipsAppsQueryKey(
  args: InferRequestType<(typeof client.v1.betaTesters)[':id']['relationships']['apps']['$get']>,
) {
  return ['v1', '/v1/betaTesters/:id/relationships/apps', args] as const
}

export function getV1BetaTestersIdRelationshipsAppsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.betaTesters)[':id']['relationships']['apps']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.betaTesters)[':id']['relationships']['apps']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.betaTesters)[':id']['relationships']['apps']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BetaTestersIdRelationshipsAppsQueryKey>
  >({
    queryKey: getV1BetaTestersIdRelationshipsAppsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.betaTesters[':id'].relationships.apps.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1BetaTestersIdRelationshipsApps<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.betaTesters)[':id']['relationships']['apps']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.betaTesters)[':id']['relationships']['apps']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.betaTesters)[':id']['relationships']['apps']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BetaTestersIdRelationshipsAppsQueryKey>
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
      ...getV1BetaTestersIdRelationshipsAppsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1BetaTestersIdRelationshipsApps<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.betaTesters)[':id']['relationships']['apps']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.betaTesters)[':id']['relationships']['apps']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.betaTesters)[':id']['relationships']['apps']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BetaTestersIdRelationshipsAppsQueryKey>
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
      ...getV1BetaTestersIdRelationshipsAppsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteV1BetaTestersIdRelationshipsAppsMutationKey() {
  return ['v1', '/v1/betaTesters/:id/relationships/apps', 'DELETE'] as const
}

export function getDeleteV1BetaTestersIdRelationshipsAppsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.betaTesters)[':id']['relationships']['apps']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.betaTesters)[':id']['relationships']['apps']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1BetaTestersIdRelationshipsAppsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.betaTesters)[':id']['relationships']['apps']['$delete']
      >,
    ) {
      return parseResponse(client.v1.betaTesters[':id'].relationships.apps.$delete(args, options))
    },
  })
}

export function useDeleteV1BetaTestersIdRelationshipsApps<
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
                    (typeof client.v1.betaTesters)[':id']['relationships']['apps']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1.betaTesters)[':id']['relationships']['apps']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1BetaTestersIdRelationshipsAppsMutationOptions<
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

export function getV1BetaTestersIdRelationshipsBetaGroupsQueryKey(
  args: InferRequestType<
    (typeof client.v1.betaTesters)[':id']['relationships']['betaGroups']['$get']
  >,
) {
  return ['v1', '/v1/betaTesters/:id/relationships/betaGroups', args] as const
}

export function getV1BetaTestersIdRelationshipsBetaGroupsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.betaTesters)[':id']['relationships']['betaGroups']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.betaTesters)[':id']['relationships']['betaGroups']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.betaTesters)[':id']['relationships']['betaGroups']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BetaTestersIdRelationshipsBetaGroupsQueryKey>
  >({
    queryKey: getV1BetaTestersIdRelationshipsBetaGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.betaTesters[':id'].relationships.betaGroups.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1BetaTestersIdRelationshipsBetaGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.betaTesters)[':id']['relationships']['betaGroups']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.betaTesters)[':id']['relationships']['betaGroups']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.betaTesters)[':id']['relationships']['betaGroups']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BetaTestersIdRelationshipsBetaGroupsQueryKey>
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
      ...getV1BetaTestersIdRelationshipsBetaGroupsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1BetaTestersIdRelationshipsBetaGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.betaTesters)[':id']['relationships']['betaGroups']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.betaTesters)[':id']['relationships']['betaGroups']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.betaTesters)[':id']['relationships']['betaGroups']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BetaTestersIdRelationshipsBetaGroupsQueryKey>
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
      ...getV1BetaTestersIdRelationshipsBetaGroupsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV1BetaTestersIdRelationshipsBetaGroupsMutationKey() {
  return ['v1', '/v1/betaTesters/:id/relationships/betaGroups', 'POST'] as const
}

export function getPostV1BetaTestersIdRelationshipsBetaGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.betaTesters)[':id']['relationships']['betaGroups']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.betaTesters)[':id']['relationships']['betaGroups']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1BetaTestersIdRelationshipsBetaGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.betaTesters)[':id']['relationships']['betaGroups']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.betaTesters[':id'].relationships.betaGroups.$post(args, options),
      )
    },
  })
}

export function usePostV1BetaTestersIdRelationshipsBetaGroups<
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
                    (typeof client.v1.betaTesters)[':id']['relationships']['betaGroups']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v1.betaTesters)[':id']['relationships']['betaGroups']['$post']
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
  const mutationDefaults = getPostV1BetaTestersIdRelationshipsBetaGroupsMutationOptions<
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

export function getDeleteV1BetaTestersIdRelationshipsBetaGroupsMutationKey() {
  return ['v1', '/v1/betaTesters/:id/relationships/betaGroups', 'DELETE'] as const
}

export function getDeleteV1BetaTestersIdRelationshipsBetaGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.betaTesters)[':id']['relationships']['betaGroups']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v1.betaTesters)[':id']['relationships']['betaGroups']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1BetaTestersIdRelationshipsBetaGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.betaTesters)[':id']['relationships']['betaGroups']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.betaTesters[':id'].relationships.betaGroups.$delete(args, options),
      )
    },
  })
}

export function useDeleteV1BetaTestersIdRelationshipsBetaGroups<
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
                    (typeof client.v1.betaTesters)[':id']['relationships']['betaGroups']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v1.betaTesters)[':id']['relationships']['betaGroups']['$delete']
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
  const mutationDefaults = getDeleteV1BetaTestersIdRelationshipsBetaGroupsMutationOptions<
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

export function getV1BetaTestersIdRelationshipsBuildsQueryKey(
  args: InferRequestType<(typeof client.v1.betaTesters)[':id']['relationships']['builds']['$get']>,
) {
  return ['v1', '/v1/betaTesters/:id/relationships/builds', args] as const
}

export function getV1BetaTestersIdRelationshipsBuildsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.betaTesters)[':id']['relationships']['builds']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.betaTesters)[':id']['relationships']['builds']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.betaTesters)[':id']['relationships']['builds']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BetaTestersIdRelationshipsBuildsQueryKey>
  >({
    queryKey: getV1BetaTestersIdRelationshipsBuildsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.betaTesters[':id'].relationships.builds.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1BetaTestersIdRelationshipsBuilds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.betaTesters)[':id']['relationships']['builds']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.betaTesters)[':id']['relationships']['builds']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.betaTesters)[':id']['relationships']['builds']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BetaTestersIdRelationshipsBuildsQueryKey>
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
      ...getV1BetaTestersIdRelationshipsBuildsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1BetaTestersIdRelationshipsBuilds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.betaTesters)[':id']['relationships']['builds']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.betaTesters)[':id']['relationships']['builds']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.betaTesters)[':id']['relationships']['builds']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BetaTestersIdRelationshipsBuildsQueryKey>
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
      ...getV1BetaTestersIdRelationshipsBuildsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV1BetaTestersIdRelationshipsBuildsMutationKey() {
  return ['v1', '/v1/betaTesters/:id/relationships/builds', 'POST'] as const
}

export function getPostV1BetaTestersIdRelationshipsBuildsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.betaTesters)[':id']['relationships']['builds']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.betaTesters)[':id']['relationships']['builds']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1BetaTestersIdRelationshipsBuildsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.betaTesters)[':id']['relationships']['builds']['$post']
      >,
    ) {
      return parseResponse(client.v1.betaTesters[':id'].relationships.builds.$post(args, options))
    },
  })
}

export function usePostV1BetaTestersIdRelationshipsBuilds<
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
                    (typeof client.v1.betaTesters)[':id']['relationships']['builds']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1.betaTesters)[':id']['relationships']['builds']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1BetaTestersIdRelationshipsBuildsMutationOptions<
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

export function getDeleteV1BetaTestersIdRelationshipsBuildsMutationKey() {
  return ['v1', '/v1/betaTesters/:id/relationships/builds', 'DELETE'] as const
}

export function getDeleteV1BetaTestersIdRelationshipsBuildsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.betaTesters)[':id']['relationships']['builds']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.betaTesters)[':id']['relationships']['builds']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1BetaTestersIdRelationshipsBuildsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.betaTesters)[':id']['relationships']['builds']['$delete']
      >,
    ) {
      return parseResponse(client.v1.betaTesters[':id'].relationships.builds.$delete(args, options))
    },
  })
}

export function useDeleteV1BetaTestersIdRelationshipsBuilds<
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
                    (typeof client.v1.betaTesters)[':id']['relationships']['builds']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v1.betaTesters)[':id']['relationships']['builds']['$delete']
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
  const mutationDefaults = getDeleteV1BetaTestersIdRelationshipsBuildsMutationOptions<
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

export function getV1BuildBetaDetailsQueryKey(
  args: InferRequestType<typeof client.v1.buildBetaDetails.$get>,
) {
  return ['v1', '/v1/buildBetaDetails', args] as const
}

export function getV1BuildBetaDetailsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.buildBetaDetails.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.buildBetaDetails.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.buildBetaDetails.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1BuildBetaDetailsQueryKey>
  >({
    queryKey: getV1BuildBetaDetailsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.buildBetaDetails.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1BuildBetaDetails<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.buildBetaDetails.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.buildBetaDetails.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.buildBetaDetails.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BuildBetaDetailsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1BuildBetaDetailsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1BuildBetaDetails<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.buildBetaDetails.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.buildBetaDetails.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.buildBetaDetails.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BuildBetaDetailsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1BuildBetaDetailsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1BuildBetaDetailsIdQueryKey(
  args: InferRequestType<(typeof client.v1.buildBetaDetails)[':id']['$get']>,
) {
  return ['v1', '/v1/buildBetaDetails/:id', args] as const
}

export function getV1BuildBetaDetailsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.buildBetaDetails)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.buildBetaDetails)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.buildBetaDetails)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BuildBetaDetailsIdQueryKey>
  >({
    queryKey: getV1BuildBetaDetailsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.buildBetaDetails[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1BuildBetaDetailsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.buildBetaDetails)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.buildBetaDetails)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.buildBetaDetails)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BuildBetaDetailsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1BuildBetaDetailsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1BuildBetaDetailsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.buildBetaDetails)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.buildBetaDetails)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.buildBetaDetails)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BuildBetaDetailsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1BuildBetaDetailsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPatchV1BuildBetaDetailsIdMutationKey() {
  return ['v1', '/v1/buildBetaDetails/:id', 'PATCH'] as const
}

export function getPatchV1BuildBetaDetailsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.buildBetaDetails)[':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.buildBetaDetails)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1BuildBetaDetailsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.buildBetaDetails)[':id']['$patch']>) {
      return parseResponse(client.v1.buildBetaDetails[':id'].$patch(args, options))
    },
  })
}

export function usePatchV1BuildBetaDetailsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.buildBetaDetails)[':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.buildBetaDetails)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV1BuildBetaDetailsIdMutationOptions<TError, TOnMutateResult>(
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

export function getV1BuildBetaDetailsIdBuildQueryKey(
  args: InferRequestType<(typeof client.v1.buildBetaDetails)[':id']['build']['$get']>,
) {
  return ['v1', '/v1/buildBetaDetails/:id/build', args] as const
}

export function getV1BuildBetaDetailsIdBuildQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.buildBetaDetails)[':id']['build']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.buildBetaDetails)[':id']['build']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.buildBetaDetails)[':id']['build']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BuildBetaDetailsIdBuildQueryKey>
  >({
    queryKey: getV1BuildBetaDetailsIdBuildQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.buildBetaDetails[':id'].build.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1BuildBetaDetailsIdBuild<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.buildBetaDetails)[':id']['build']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.buildBetaDetails)[':id']['build']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.buildBetaDetails)[':id']['build']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BuildBetaDetailsIdBuildQueryKey>
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
      ...getV1BuildBetaDetailsIdBuildQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1BuildBetaDetailsIdBuild<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.buildBetaDetails)[':id']['build']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.buildBetaDetails)[':id']['build']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.buildBetaDetails)[':id']['build']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BuildBetaDetailsIdBuildQueryKey>
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
      ...getV1BuildBetaDetailsIdBuildQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV1BuildBetaNotificationsMutationKey() {
  return ['v1', '/v1/buildBetaNotifications', 'POST'] as const
}

export function getPostV1BuildBetaNotificationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.buildBetaNotifications.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.buildBetaNotifications.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1BuildBetaNotificationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.buildBetaNotifications.$post>) {
      return parseResponse(client.v1.buildBetaNotifications.$post(args, options))
    },
  })
}

export function usePostV1BuildBetaNotifications<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.buildBetaNotifications.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.buildBetaNotifications.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1BuildBetaNotificationsMutationOptions<TError, TOnMutateResult>(
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

export function getV1BuildsQueryKey(args: InferRequestType<typeof client.v1.builds.$get>) {
  return ['v1', '/v1/builds', args] as const
}

export function getV1BuildsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.builds.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.builds.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.builds.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1BuildsQueryKey>
  >({
    queryKey: getV1BuildsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.builds.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1Builds<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.builds.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.builds.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.builds.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1BuildsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1BuildsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1Builds<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.builds.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.builds.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.builds.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1BuildsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1BuildsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1BuildsIdQueryKey(
  args: InferRequestType<(typeof client.v1.builds)[':id']['$get']>,
) {
  return ['v1', '/v1/builds/:id', args] as const
}

export function getV1BuildsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.builds)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.builds)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.builds)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BuildsIdQueryKey>
  >({
    queryKey: getV1BuildsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.builds[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1BuildsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.builds)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.builds)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.builds)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BuildsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1BuildsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1BuildsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.builds)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.builds)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.builds)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BuildsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1BuildsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPatchV1BuildsIdMutationKey() {
  return ['v1', '/v1/builds/:id', 'PATCH'] as const
}

export function getPatchV1BuildsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.builds)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.builds)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1BuildsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.builds)[':id']['$patch']>) {
      return parseResponse(client.v1.builds[':id'].$patch(args, options))
    },
  })
}

export function usePatchV1BuildsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.builds)[':id']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.builds)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV1BuildsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1BuildsIdAppQueryKey(
  args: InferRequestType<(typeof client.v1.builds)[':id']['app']['$get']>,
) {
  return ['v1', '/v1/builds/:id/app', args] as const
}

export function getV1BuildsIdAppQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.builds)[':id']['app']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.builds)[':id']['app']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.builds)[':id']['app']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BuildsIdAppQueryKey>
  >({
    queryKey: getV1BuildsIdAppQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.builds[':id'].app.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1BuildsIdApp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.builds)[':id']['app']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.builds)[':id']['app']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.builds)[':id']['app']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BuildsIdAppQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1BuildsIdAppQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1BuildsIdApp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.builds)[':id']['app']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.builds)[':id']['app']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.builds)[':id']['app']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BuildsIdAppQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1BuildsIdAppQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1BuildsIdAppEncryptionDeclarationQueryKey(
  args: InferRequestType<(typeof client.v1.builds)[':id']['appEncryptionDeclaration']['$get']>,
) {
  return ['v1', '/v1/builds/:id/appEncryptionDeclaration', args] as const
}

export function getV1BuildsIdAppEncryptionDeclarationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.builds)[':id']['appEncryptionDeclaration']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.builds)[':id']['appEncryptionDeclaration']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.builds)[':id']['appEncryptionDeclaration']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BuildsIdAppEncryptionDeclarationQueryKey>
  >({
    queryKey: getV1BuildsIdAppEncryptionDeclarationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.builds[':id'].appEncryptionDeclaration.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1BuildsIdAppEncryptionDeclaration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.builds)[':id']['appEncryptionDeclaration']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.builds)[':id']['appEncryptionDeclaration']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.builds)[':id']['appEncryptionDeclaration']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BuildsIdAppEncryptionDeclarationQueryKey>
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
      ...getV1BuildsIdAppEncryptionDeclarationQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1BuildsIdAppEncryptionDeclaration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.builds)[':id']['appEncryptionDeclaration']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.builds)[':id']['appEncryptionDeclaration']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.builds)[':id']['appEncryptionDeclaration']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BuildsIdAppEncryptionDeclarationQueryKey>
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
      ...getV1BuildsIdAppEncryptionDeclarationQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1BuildsIdAppStoreVersionQueryKey(
  args: InferRequestType<(typeof client.v1.builds)[':id']['appStoreVersion']['$get']>,
) {
  return ['v1', '/v1/builds/:id/appStoreVersion', args] as const
}

export function getV1BuildsIdAppStoreVersionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.builds)[':id']['appStoreVersion']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.builds)[':id']['appStoreVersion']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.builds)[':id']['appStoreVersion']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BuildsIdAppStoreVersionQueryKey>
  >({
    queryKey: getV1BuildsIdAppStoreVersionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.builds[':id'].appStoreVersion.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1BuildsIdAppStoreVersion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.builds)[':id']['appStoreVersion']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.builds)[':id']['appStoreVersion']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.builds)[':id']['appStoreVersion']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BuildsIdAppStoreVersionQueryKey>
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
      ...getV1BuildsIdAppStoreVersionQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1BuildsIdAppStoreVersion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.builds)[':id']['appStoreVersion']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.builds)[':id']['appStoreVersion']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.builds)[':id']['appStoreVersion']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BuildsIdAppStoreVersionQueryKey>
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
      ...getV1BuildsIdAppStoreVersionQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1BuildsIdBetaAppReviewSubmissionQueryKey(
  args: InferRequestType<(typeof client.v1.builds)[':id']['betaAppReviewSubmission']['$get']>,
) {
  return ['v1', '/v1/builds/:id/betaAppReviewSubmission', args] as const
}

export function getV1BuildsIdBetaAppReviewSubmissionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.builds)[':id']['betaAppReviewSubmission']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.builds)[':id']['betaAppReviewSubmission']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.builds)[':id']['betaAppReviewSubmission']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BuildsIdBetaAppReviewSubmissionQueryKey>
  >({
    queryKey: getV1BuildsIdBetaAppReviewSubmissionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.builds[':id'].betaAppReviewSubmission.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1BuildsIdBetaAppReviewSubmission<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.builds)[':id']['betaAppReviewSubmission']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.builds)[':id']['betaAppReviewSubmission']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.builds)[':id']['betaAppReviewSubmission']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BuildsIdBetaAppReviewSubmissionQueryKey>
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
      ...getV1BuildsIdBetaAppReviewSubmissionQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1BuildsIdBetaAppReviewSubmission<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.builds)[':id']['betaAppReviewSubmission']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.builds)[':id']['betaAppReviewSubmission']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.builds)[':id']['betaAppReviewSubmission']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BuildsIdBetaAppReviewSubmissionQueryKey>
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
      ...getV1BuildsIdBetaAppReviewSubmissionQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1BuildsIdBetaBuildLocalizationsQueryKey(
  args: InferRequestType<(typeof client.v1.builds)[':id']['betaBuildLocalizations']['$get']>,
) {
  return ['v1', '/v1/builds/:id/betaBuildLocalizations', args] as const
}

export function getV1BuildsIdBetaBuildLocalizationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.builds)[':id']['betaBuildLocalizations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.builds)[':id']['betaBuildLocalizations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.builds)[':id']['betaBuildLocalizations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BuildsIdBetaBuildLocalizationsQueryKey>
  >({
    queryKey: getV1BuildsIdBetaBuildLocalizationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.builds[':id'].betaBuildLocalizations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1BuildsIdBetaBuildLocalizations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.builds)[':id']['betaBuildLocalizations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.builds)[':id']['betaBuildLocalizations']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.builds)[':id']['betaBuildLocalizations']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BuildsIdBetaBuildLocalizationsQueryKey>
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
      ...getV1BuildsIdBetaBuildLocalizationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1BuildsIdBetaBuildLocalizations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.builds)[':id']['betaBuildLocalizations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.builds)[':id']['betaBuildLocalizations']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.builds)[':id']['betaBuildLocalizations']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BuildsIdBetaBuildLocalizationsQueryKey>
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
      ...getV1BuildsIdBetaBuildLocalizationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1BuildsIdBuildBetaDetailQueryKey(
  args: InferRequestType<(typeof client.v1.builds)[':id']['buildBetaDetail']['$get']>,
) {
  return ['v1', '/v1/builds/:id/buildBetaDetail', args] as const
}

export function getV1BuildsIdBuildBetaDetailQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.builds)[':id']['buildBetaDetail']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.builds)[':id']['buildBetaDetail']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.builds)[':id']['buildBetaDetail']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BuildsIdBuildBetaDetailQueryKey>
  >({
    queryKey: getV1BuildsIdBuildBetaDetailQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.builds[':id'].buildBetaDetail.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1BuildsIdBuildBetaDetail<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.builds)[':id']['buildBetaDetail']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.builds)[':id']['buildBetaDetail']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.builds)[':id']['buildBetaDetail']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BuildsIdBuildBetaDetailQueryKey>
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
      ...getV1BuildsIdBuildBetaDetailQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1BuildsIdBuildBetaDetail<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.builds)[':id']['buildBetaDetail']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.builds)[':id']['buildBetaDetail']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.builds)[':id']['buildBetaDetail']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BuildsIdBuildBetaDetailQueryKey>
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
      ...getV1BuildsIdBuildBetaDetailQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1BuildsIdDiagnosticSignaturesQueryKey(
  args: InferRequestType<(typeof client.v1.builds)[':id']['diagnosticSignatures']['$get']>,
) {
  return ['v1', '/v1/builds/:id/diagnosticSignatures', args] as const
}

export function getV1BuildsIdDiagnosticSignaturesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.builds)[':id']['diagnosticSignatures']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.builds)[':id']['diagnosticSignatures']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.builds)[':id']['diagnosticSignatures']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BuildsIdDiagnosticSignaturesQueryKey>
  >({
    queryKey: getV1BuildsIdDiagnosticSignaturesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.builds[':id'].diagnosticSignatures.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1BuildsIdDiagnosticSignatures<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.builds)[':id']['diagnosticSignatures']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.builds)[':id']['diagnosticSignatures']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.builds)[':id']['diagnosticSignatures']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BuildsIdDiagnosticSignaturesQueryKey>
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
      ...getV1BuildsIdDiagnosticSignaturesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1BuildsIdDiagnosticSignatures<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.builds)[':id']['diagnosticSignatures']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.builds)[':id']['diagnosticSignatures']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.builds)[':id']['diagnosticSignatures']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BuildsIdDiagnosticSignaturesQueryKey>
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
      ...getV1BuildsIdDiagnosticSignaturesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1BuildsIdIconsQueryKey(
  args: InferRequestType<(typeof client.v1.builds)[':id']['icons']['$get']>,
) {
  return ['v1', '/v1/builds/:id/icons', args] as const
}

export function getV1BuildsIdIconsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.builds)[':id']['icons']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.builds)[':id']['icons']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.builds)[':id']['icons']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BuildsIdIconsQueryKey>
  >({
    queryKey: getV1BuildsIdIconsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.builds[':id'].icons.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1BuildsIdIcons<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.builds)[':id']['icons']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.builds)[':id']['icons']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.builds)[':id']['icons']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BuildsIdIconsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1BuildsIdIconsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1BuildsIdIcons<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.builds)[':id']['icons']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.builds)[':id']['icons']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.builds)[':id']['icons']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BuildsIdIconsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1BuildsIdIconsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1BuildsIdIndividualTestersQueryKey(
  args: InferRequestType<(typeof client.v1.builds)[':id']['individualTesters']['$get']>,
) {
  return ['v1', '/v1/builds/:id/individualTesters', args] as const
}

export function getV1BuildsIdIndividualTestersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.builds)[':id']['individualTesters']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.builds)[':id']['individualTesters']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.builds)[':id']['individualTesters']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BuildsIdIndividualTestersQueryKey>
  >({
    queryKey: getV1BuildsIdIndividualTestersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.builds[':id'].individualTesters.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1BuildsIdIndividualTesters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.builds)[':id']['individualTesters']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.builds)[':id']['individualTesters']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.builds)[':id']['individualTesters']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BuildsIdIndividualTestersQueryKey>
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
      ...getV1BuildsIdIndividualTestersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1BuildsIdIndividualTesters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.builds)[':id']['individualTesters']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.builds)[':id']['individualTesters']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.builds)[':id']['individualTesters']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BuildsIdIndividualTestersQueryKey>
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
      ...getV1BuildsIdIndividualTestersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1BuildsIdPerfPowerMetricsQueryKey(
  args: InferRequestType<(typeof client.v1.builds)[':id']['perfPowerMetrics']['$get']>,
) {
  return ['v1', '/v1/builds/:id/perfPowerMetrics', args] as const
}

export function getV1BuildsIdPerfPowerMetricsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.builds)[':id']['perfPowerMetrics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.builds)[':id']['perfPowerMetrics']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.builds)[':id']['perfPowerMetrics']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BuildsIdPerfPowerMetricsQueryKey>
  >({
    queryKey: getV1BuildsIdPerfPowerMetricsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.builds[':id'].perfPowerMetrics.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1BuildsIdPerfPowerMetrics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.builds)[':id']['perfPowerMetrics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.builds)[':id']['perfPowerMetrics']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.builds)[':id']['perfPowerMetrics']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BuildsIdPerfPowerMetricsQueryKey>
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
      ...getV1BuildsIdPerfPowerMetricsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1BuildsIdPerfPowerMetrics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.builds)[':id']['perfPowerMetrics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.builds)[':id']['perfPowerMetrics']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.builds)[':id']['perfPowerMetrics']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BuildsIdPerfPowerMetricsQueryKey>
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
      ...getV1BuildsIdPerfPowerMetricsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1BuildsIdPreReleaseVersionQueryKey(
  args: InferRequestType<(typeof client.v1.builds)[':id']['preReleaseVersion']['$get']>,
) {
  return ['v1', '/v1/builds/:id/preReleaseVersion', args] as const
}

export function getV1BuildsIdPreReleaseVersionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.builds)[':id']['preReleaseVersion']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.builds)[':id']['preReleaseVersion']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.builds)[':id']['preReleaseVersion']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BuildsIdPreReleaseVersionQueryKey>
  >({
    queryKey: getV1BuildsIdPreReleaseVersionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.builds[':id'].preReleaseVersion.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1BuildsIdPreReleaseVersion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.builds)[':id']['preReleaseVersion']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.builds)[':id']['preReleaseVersion']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.builds)[':id']['preReleaseVersion']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BuildsIdPreReleaseVersionQueryKey>
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
      ...getV1BuildsIdPreReleaseVersionQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1BuildsIdPreReleaseVersion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.builds)[':id']['preReleaseVersion']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.builds)[':id']['preReleaseVersion']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.builds)[':id']['preReleaseVersion']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BuildsIdPreReleaseVersionQueryKey>
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
      ...getV1BuildsIdPreReleaseVersionQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1BuildsIdRelationshipsAppEncryptionDeclarationQueryKey(
  args: InferRequestType<
    (typeof client.v1.builds)[':id']['relationships']['appEncryptionDeclaration']['$get']
  >,
) {
  return ['v1', '/v1/builds/:id/relationships/appEncryptionDeclaration', args] as const
}

export function getV1BuildsIdRelationshipsAppEncryptionDeclarationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.builds)[':id']['relationships']['appEncryptionDeclaration']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.builds)[':id']['relationships']['appEncryptionDeclaration']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.builds)[':id']['relationships']['appEncryptionDeclaration']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BuildsIdRelationshipsAppEncryptionDeclarationQueryKey>
  >({
    queryKey: getV1BuildsIdRelationshipsAppEncryptionDeclarationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.builds[':id'].relationships.appEncryptionDeclaration.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1BuildsIdRelationshipsAppEncryptionDeclaration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.builds)[':id']['relationships']['appEncryptionDeclaration']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.builds)[':id']['relationships']['appEncryptionDeclaration']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.builds)[':id']['relationships']['appEncryptionDeclaration']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BuildsIdRelationshipsAppEncryptionDeclarationQueryKey>
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
      ...getV1BuildsIdRelationshipsAppEncryptionDeclarationQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1BuildsIdRelationshipsAppEncryptionDeclaration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.builds)[':id']['relationships']['appEncryptionDeclaration']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.builds)[':id']['relationships']['appEncryptionDeclaration']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.builds)[':id']['relationships']['appEncryptionDeclaration']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BuildsIdRelationshipsAppEncryptionDeclarationQueryKey>
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
      ...getV1BuildsIdRelationshipsAppEncryptionDeclarationQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPatchV1BuildsIdRelationshipsAppEncryptionDeclarationMutationKey() {
  return ['v1', '/v1/builds/:id/relationships/appEncryptionDeclaration', 'PATCH'] as const
}

export function getPatchV1BuildsIdRelationshipsAppEncryptionDeclarationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.builds)[':id']['relationships']['appEncryptionDeclaration']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v1.builds)[':id']['relationships']['appEncryptionDeclaration']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchV1BuildsIdRelationshipsAppEncryptionDeclarationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.builds)[':id']['relationships']['appEncryptionDeclaration']['$patch']
      >,
    ) {
      return parseResponse(
        client.v1.builds[':id'].relationships.appEncryptionDeclaration.$patch(args, options),
      )
    },
  })
}

export function usePatchV1BuildsIdRelationshipsAppEncryptionDeclaration<
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
                    (typeof client.v1.builds)[':id']['relationships']['appEncryptionDeclaration']['$patch']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v1.builds)[':id']['relationships']['appEncryptionDeclaration']['$patch']
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
  const mutationDefaults = getPatchV1BuildsIdRelationshipsAppEncryptionDeclarationMutationOptions<
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

export function getPostV1BuildsIdRelationshipsBetaGroupsMutationKey() {
  return ['v1', '/v1/builds/:id/relationships/betaGroups', 'POST'] as const
}

export function getPostV1BuildsIdRelationshipsBetaGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.builds)[':id']['relationships']['betaGroups']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.builds)[':id']['relationships']['betaGroups']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1BuildsIdRelationshipsBetaGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.builds)[':id']['relationships']['betaGroups']['$post']
      >,
    ) {
      return parseResponse(client.v1.builds[':id'].relationships.betaGroups.$post(args, options))
    },
  })
}

export function usePostV1BuildsIdRelationshipsBetaGroups<
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
                    (typeof client.v1.builds)[':id']['relationships']['betaGroups']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1.builds)[':id']['relationships']['betaGroups']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1BuildsIdRelationshipsBetaGroupsMutationOptions<
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

export function getDeleteV1BuildsIdRelationshipsBetaGroupsMutationKey() {
  return ['v1', '/v1/builds/:id/relationships/betaGroups', 'DELETE'] as const
}

export function getDeleteV1BuildsIdRelationshipsBetaGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.builds)[':id']['relationships']['betaGroups']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.builds)[':id']['relationships']['betaGroups']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1BuildsIdRelationshipsBetaGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.builds)[':id']['relationships']['betaGroups']['$delete']
      >,
    ) {
      return parseResponse(client.v1.builds[':id'].relationships.betaGroups.$delete(args, options))
    },
  })
}

export function useDeleteV1BuildsIdRelationshipsBetaGroups<
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
                    (typeof client.v1.builds)[':id']['relationships']['betaGroups']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v1.builds)[':id']['relationships']['betaGroups']['$delete']
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
  const mutationDefaults = getDeleteV1BuildsIdRelationshipsBetaGroupsMutationOptions<
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

export function getV1BuildsIdRelationshipsIndividualTestersQueryKey(
  args: InferRequestType<
    (typeof client.v1.builds)[':id']['relationships']['individualTesters']['$get']
  >,
) {
  return ['v1', '/v1/builds/:id/relationships/individualTesters', args] as const
}

export function getV1BuildsIdRelationshipsIndividualTestersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.builds)[':id']['relationships']['individualTesters']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.builds)[':id']['relationships']['individualTesters']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.builds)[':id']['relationships']['individualTesters']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BuildsIdRelationshipsIndividualTestersQueryKey>
  >({
    queryKey: getV1BuildsIdRelationshipsIndividualTestersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.builds[':id'].relationships.individualTesters.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1BuildsIdRelationshipsIndividualTesters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.builds)[':id']['relationships']['individualTesters']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.builds)[':id']['relationships']['individualTesters']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.builds)[':id']['relationships']['individualTesters']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BuildsIdRelationshipsIndividualTestersQueryKey>
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
      ...getV1BuildsIdRelationshipsIndividualTestersQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1BuildsIdRelationshipsIndividualTesters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.builds)[':id']['relationships']['individualTesters']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.builds)[':id']['relationships']['individualTesters']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.builds)[':id']['relationships']['individualTesters']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BuildsIdRelationshipsIndividualTestersQueryKey>
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
      ...getV1BuildsIdRelationshipsIndividualTestersQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV1BuildsIdRelationshipsIndividualTestersMutationKey() {
  return ['v1', '/v1/builds/:id/relationships/individualTesters', 'POST'] as const
}

export function getPostV1BuildsIdRelationshipsIndividualTestersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.builds)[':id']['relationships']['individualTesters']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v1.builds)[':id']['relationships']['individualTesters']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1BuildsIdRelationshipsIndividualTestersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.builds)[':id']['relationships']['individualTesters']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.builds[':id'].relationships.individualTesters.$post(args, options),
      )
    },
  })
}

export function usePostV1BuildsIdRelationshipsIndividualTesters<
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
                    (typeof client.v1.builds)[':id']['relationships']['individualTesters']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v1.builds)[':id']['relationships']['individualTesters']['$post']
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
  const mutationDefaults = getPostV1BuildsIdRelationshipsIndividualTestersMutationOptions<
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

export function getDeleteV1BuildsIdRelationshipsIndividualTestersMutationKey() {
  return ['v1', '/v1/builds/:id/relationships/individualTesters', 'DELETE'] as const
}

export function getDeleteV1BuildsIdRelationshipsIndividualTestersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.builds)[':id']['relationships']['individualTesters']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v1.builds)[':id']['relationships']['individualTesters']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1BuildsIdRelationshipsIndividualTestersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.builds)[':id']['relationships']['individualTesters']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.builds[':id'].relationships.individualTesters.$delete(args, options),
      )
    },
  })
}

export function useDeleteV1BuildsIdRelationshipsIndividualTesters<
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
                    (typeof client.v1.builds)[':id']['relationships']['individualTesters']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v1.builds)[':id']['relationships']['individualTesters']['$delete']
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
  const mutationDefaults = getDeleteV1BuildsIdRelationshipsIndividualTestersMutationOptions<
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

export function getPostV1BundleIdCapabilitiesMutationKey() {
  return ['v1', '/v1/bundleIdCapabilities', 'POST'] as const
}

export function getPostV1BundleIdCapabilitiesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.bundleIdCapabilities.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.bundleIdCapabilities.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1BundleIdCapabilitiesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.bundleIdCapabilities.$post>) {
      return parseResponse(client.v1.bundleIdCapabilities.$post(args, options))
    },
  })
}

export function usePostV1BundleIdCapabilities<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.bundleIdCapabilities.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.bundleIdCapabilities.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1BundleIdCapabilitiesMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV1BundleIdCapabilitiesIdMutationKey() {
  return ['v1', '/v1/bundleIdCapabilities/:id', 'DELETE'] as const
}

export function getDeleteV1BundleIdCapabilitiesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.bundleIdCapabilities)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.bundleIdCapabilities)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1BundleIdCapabilitiesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.bundleIdCapabilities)[':id']['$delete']>,
    ) {
      return parseResponse(client.v1.bundleIdCapabilities[':id'].$delete(args, options))
    },
  })
}

export function useDeleteV1BundleIdCapabilitiesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.bundleIdCapabilities)[':id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1.bundleIdCapabilities)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1BundleIdCapabilitiesIdMutationOptions<
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

export function getPatchV1BundleIdCapabilitiesIdMutationKey() {
  return ['v1', '/v1/bundleIdCapabilities/:id', 'PATCH'] as const
}

export function getPatchV1BundleIdCapabilitiesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.bundleIdCapabilities)[':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.bundleIdCapabilities)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1BundleIdCapabilitiesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.bundleIdCapabilities)[':id']['$patch']>,
    ) {
      return parseResponse(client.v1.bundleIdCapabilities[':id'].$patch(args, options))
    },
  })
}

export function usePatchV1BundleIdCapabilitiesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.bundleIdCapabilities)[':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.bundleIdCapabilities)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV1BundleIdCapabilitiesIdMutationOptions<TError, TOnMutateResult>(
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

export function getV1BundleIdsQueryKey(args: InferRequestType<typeof client.v1.bundleIds.$get>) {
  return ['v1', '/v1/bundleIds', args] as const
}

export function getV1BundleIdsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.bundleIds.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.bundleIds.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.bundleIds.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1BundleIdsQueryKey>
  >({
    queryKey: getV1BundleIdsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.bundleIds.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1BundleIds<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.bundleIds.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.bundleIds.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.bundleIds.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1BundleIdsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1BundleIdsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1BundleIds<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.bundleIds.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.bundleIds.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.bundleIds.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1BundleIdsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1BundleIdsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV1BundleIdsMutationKey() {
  return ['v1', '/v1/bundleIds', 'POST'] as const
}

export function getPostV1BundleIdsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.bundleIds.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.bundleIds.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1BundleIdsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.bundleIds.$post>) {
      return parseResponse(client.v1.bundleIds.$post(args, options))
    },
  })
}

export function usePostV1BundleIds<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.bundleIds.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.bundleIds.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1BundleIdsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1BundleIdsIdQueryKey(
  args: InferRequestType<(typeof client.v1.bundleIds)[':id']['$get']>,
) {
  return ['v1', '/v1/bundleIds/:id', args] as const
}

export function getV1BundleIdsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.bundleIds)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.bundleIds)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.bundleIds)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BundleIdsIdQueryKey>
  >({
    queryKey: getV1BundleIdsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.bundleIds[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1BundleIdsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.bundleIds)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.bundleIds)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.bundleIds)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BundleIdsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1BundleIdsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1BundleIdsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.bundleIds)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.bundleIds)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.bundleIds)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BundleIdsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1BundleIdsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteV1BundleIdsIdMutationKey() {
  return ['v1', '/v1/bundleIds/:id', 'DELETE'] as const
}

export function getDeleteV1BundleIdsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.bundleIds)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.bundleIds)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1BundleIdsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.bundleIds)[':id']['$delete']>) {
      return parseResponse(client.v1.bundleIds[':id'].$delete(args, options))
    },
  })
}

export function useDeleteV1BundleIdsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.bundleIds)[':id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1.bundleIds)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1BundleIdsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchV1BundleIdsIdMutationKey() {
  return ['v1', '/v1/bundleIds/:id', 'PATCH'] as const
}

export function getPatchV1BundleIdsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.bundleIds)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.bundleIds)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1BundleIdsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.bundleIds)[':id']['$patch']>) {
      return parseResponse(client.v1.bundleIds[':id'].$patch(args, options))
    },
  })
}

export function usePatchV1BundleIdsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.bundleIds)[':id']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.bundleIds)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV1BundleIdsIdMutationOptions<TError, TOnMutateResult>(
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

export function getV1BundleIdsIdAppQueryKey(
  args: InferRequestType<(typeof client.v1.bundleIds)[':id']['app']['$get']>,
) {
  return ['v1', '/v1/bundleIds/:id/app', args] as const
}

export function getV1BundleIdsIdAppQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.bundleIds)[':id']['app']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.bundleIds)[':id']['app']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.bundleIds)[':id']['app']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BundleIdsIdAppQueryKey>
  >({
    queryKey: getV1BundleIdsIdAppQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.bundleIds[':id'].app.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1BundleIdsIdApp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.bundleIds)[':id']['app']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.bundleIds)[':id']['app']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.bundleIds)[':id']['app']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BundleIdsIdAppQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1BundleIdsIdAppQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1BundleIdsIdApp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.bundleIds)[':id']['app']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.bundleIds)[':id']['app']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.bundleIds)[':id']['app']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BundleIdsIdAppQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1BundleIdsIdAppQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1BundleIdsIdBundleIdCapabilitiesQueryKey(
  args: InferRequestType<(typeof client.v1.bundleIds)[':id']['bundleIdCapabilities']['$get']>,
) {
  return ['v1', '/v1/bundleIds/:id/bundleIdCapabilities', args] as const
}

export function getV1BundleIdsIdBundleIdCapabilitiesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.bundleIds)[':id']['bundleIdCapabilities']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.bundleIds)[':id']['bundleIdCapabilities']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.bundleIds)[':id']['bundleIdCapabilities']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BundleIdsIdBundleIdCapabilitiesQueryKey>
  >({
    queryKey: getV1BundleIdsIdBundleIdCapabilitiesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.bundleIds[':id'].bundleIdCapabilities.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1BundleIdsIdBundleIdCapabilities<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.bundleIds)[':id']['bundleIdCapabilities']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.bundleIds)[':id']['bundleIdCapabilities']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.bundleIds)[':id']['bundleIdCapabilities']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BundleIdsIdBundleIdCapabilitiesQueryKey>
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
      ...getV1BundleIdsIdBundleIdCapabilitiesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1BundleIdsIdBundleIdCapabilities<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.bundleIds)[':id']['bundleIdCapabilities']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.bundleIds)[':id']['bundleIdCapabilities']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.bundleIds)[':id']['bundleIdCapabilities']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BundleIdsIdBundleIdCapabilitiesQueryKey>
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
      ...getV1BundleIdsIdBundleIdCapabilitiesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1BundleIdsIdProfilesQueryKey(
  args: InferRequestType<(typeof client.v1.bundleIds)[':id']['profiles']['$get']>,
) {
  return ['v1', '/v1/bundleIds/:id/profiles', args] as const
}

export function getV1BundleIdsIdProfilesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.bundleIds)[':id']['profiles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.bundleIds)[':id']['profiles']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.bundleIds)[':id']['profiles']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BundleIdsIdProfilesQueryKey>
  >({
    queryKey: getV1BundleIdsIdProfilesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.bundleIds[':id'].profiles.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1BundleIdsIdProfiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.bundleIds)[':id']['profiles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.bundleIds)[':id']['profiles']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.bundleIds)[':id']['profiles']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BundleIdsIdProfilesQueryKey>
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
      ...getV1BundleIdsIdProfilesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1BundleIdsIdProfiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.bundleIds)[':id']['profiles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.bundleIds)[':id']['profiles']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.bundleIds)[':id']['profiles']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BundleIdsIdProfilesQueryKey>
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
      ...getV1BundleIdsIdProfilesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1CertificatesQueryKey(
  args: InferRequestType<typeof client.v1.certificates.$get>,
) {
  return ['v1', '/v1/certificates', args] as const
}

export function getV1CertificatesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.certificates.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.certificates.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.certificates.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1CertificatesQueryKey>
  >({
    queryKey: getV1CertificatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.certificates.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1Certificates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.certificates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.certificates.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.certificates.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1CertificatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1CertificatesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1Certificates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.certificates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.certificates.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.certificates.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1CertificatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1CertificatesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV1CertificatesMutationKey() {
  return ['v1', '/v1/certificates', 'POST'] as const
}

export function getPostV1CertificatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.certificates.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.certificates.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CertificatesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.certificates.$post>) {
      return parseResponse(client.v1.certificates.$post(args, options))
    },
  })
}

export function usePostV1Certificates<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.certificates.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.certificates.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1CertificatesMutationOptions<TError, TOnMutateResult>(
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

export function getV1CertificatesIdQueryKey(
  args: InferRequestType<(typeof client.v1.certificates)[':id']['$get']>,
) {
  return ['v1', '/v1/certificates/:id', args] as const
}

export function getV1CertificatesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.certificates)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.certificates)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.certificates)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CertificatesIdQueryKey>
  >({
    queryKey: getV1CertificatesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.certificates[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1CertificatesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.certificates)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.certificates)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.certificates)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CertificatesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1CertificatesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1CertificatesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.certificates)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.certificates)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.certificates)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CertificatesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1CertificatesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteV1CertificatesIdMutationKey() {
  return ['v1', '/v1/certificates/:id', 'DELETE'] as const
}

export function getDeleteV1CertificatesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.certificates)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.certificates)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1CertificatesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.certificates)[':id']['$delete']>) {
      return parseResponse(client.v1.certificates[':id'].$delete(args, options))
    },
  })
}

export function useDeleteV1CertificatesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.certificates)[':id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1.certificates)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1CertificatesIdMutationOptions<TError, TOnMutateResult>(
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

export function getV1DevicesQueryKey(args: InferRequestType<typeof client.v1.devices.$get>) {
  return ['v1', '/v1/devices', args] as const
}

export function getV1DevicesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.devices.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.devices.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.devices.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1DevicesQueryKey>
  >({
    queryKey: getV1DevicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.devices.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1Devices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.devices.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.devices.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.devices.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1DevicesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1DevicesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1Devices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.devices.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.devices.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.devices.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1DevicesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1DevicesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV1DevicesMutationKey() {
  return ['v1', '/v1/devices', 'POST'] as const
}

export function getPostV1DevicesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.devices.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.devices.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DevicesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.devices.$post>) {
      return parseResponse(client.v1.devices.$post(args, options))
    },
  })
}

export function usePostV1Devices<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.devices.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.devices.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1DevicesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1DevicesIdQueryKey(
  args: InferRequestType<(typeof client.v1.devices)[':id']['$get']>,
) {
  return ['v1', '/v1/devices/:id', args] as const
}

export function getV1DevicesIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.devices)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.devices)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.devices)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1DevicesIdQueryKey>
  >({
    queryKey: getV1DevicesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.devices[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1DevicesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.devices)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.devices)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.devices)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1DevicesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1DevicesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1DevicesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.devices)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.devices)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.devices)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1DevicesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1DevicesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPatchV1DevicesIdMutationKey() {
  return ['v1', '/v1/devices/:id', 'PATCH'] as const
}

export function getPatchV1DevicesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.devices)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.devices)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1DevicesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.devices)[':id']['$patch']>) {
      return parseResponse(client.v1.devices[':id'].$patch(args, options))
    },
  })
}

export function usePatchV1DevicesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.devices)[':id']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.devices)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV1DevicesIdMutationOptions<TError, TOnMutateResult>(
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

export function getV1DiagnosticSignaturesIdLogsQueryKey(
  args: InferRequestType<(typeof client.v1.diagnosticSignatures)[':id']['logs']['$get']>,
) {
  return ['v1', '/v1/diagnosticSignatures/:id/logs', args] as const
}

export function getV1DiagnosticSignaturesIdLogsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.diagnosticSignatures)[':id']['logs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.diagnosticSignatures)[':id']['logs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.diagnosticSignatures)[':id']['logs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1DiagnosticSignaturesIdLogsQueryKey>
  >({
    queryKey: getV1DiagnosticSignaturesIdLogsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.diagnosticSignatures[':id'].logs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1DiagnosticSignaturesIdLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.diagnosticSignatures)[':id']['logs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.diagnosticSignatures)[':id']['logs']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.diagnosticSignatures)[':id']['logs']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1DiagnosticSignaturesIdLogsQueryKey>
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
      ...getV1DiagnosticSignaturesIdLogsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1DiagnosticSignaturesIdLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.diagnosticSignatures)[':id']['logs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.diagnosticSignatures)[':id']['logs']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.diagnosticSignatures)[':id']['logs']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1DiagnosticSignaturesIdLogsQueryKey>
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
      ...getV1DiagnosticSignaturesIdLogsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV1EndUserLicenseAgreementsMutationKey() {
  return ['v1', '/v1/endUserLicenseAgreements', 'POST'] as const
}

export function getPostV1EndUserLicenseAgreementsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.endUserLicenseAgreements.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.endUserLicenseAgreements.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1EndUserLicenseAgreementsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.endUserLicenseAgreements.$post>) {
      return parseResponse(client.v1.endUserLicenseAgreements.$post(args, options))
    },
  })
}

export function usePostV1EndUserLicenseAgreements<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.endUserLicenseAgreements.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.endUserLicenseAgreements.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1EndUserLicenseAgreementsMutationOptions<
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

export function getV1EndUserLicenseAgreementsIdQueryKey(
  args: InferRequestType<(typeof client.v1.endUserLicenseAgreements)[':id']['$get']>,
) {
  return ['v1', '/v1/endUserLicenseAgreements/:id', args] as const
}

export function getV1EndUserLicenseAgreementsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.endUserLicenseAgreements)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.endUserLicenseAgreements)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.endUserLicenseAgreements)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1EndUserLicenseAgreementsIdQueryKey>
  >({
    queryKey: getV1EndUserLicenseAgreementsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.endUserLicenseAgreements[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1EndUserLicenseAgreementsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.endUserLicenseAgreements)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.endUserLicenseAgreements)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.endUserLicenseAgreements)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1EndUserLicenseAgreementsIdQueryKey>
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
      ...getV1EndUserLicenseAgreementsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1EndUserLicenseAgreementsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.endUserLicenseAgreements)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.endUserLicenseAgreements)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.endUserLicenseAgreements)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1EndUserLicenseAgreementsIdQueryKey>
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
      ...getV1EndUserLicenseAgreementsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteV1EndUserLicenseAgreementsIdMutationKey() {
  return ['v1', '/v1/endUserLicenseAgreements/:id', 'DELETE'] as const
}

export function getDeleteV1EndUserLicenseAgreementsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.endUserLicenseAgreements)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.endUserLicenseAgreements)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1EndUserLicenseAgreementsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.endUserLicenseAgreements)[':id']['$delete']>,
    ) {
      return parseResponse(client.v1.endUserLicenseAgreements[':id'].$delete(args, options))
    },
  })
}

export function useDeleteV1EndUserLicenseAgreementsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.endUserLicenseAgreements)[':id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1.endUserLicenseAgreements)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1EndUserLicenseAgreementsIdMutationOptions<
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

export function getPatchV1EndUserLicenseAgreementsIdMutationKey() {
  return ['v1', '/v1/endUserLicenseAgreements/:id', 'PATCH'] as const
}

export function getPatchV1EndUserLicenseAgreementsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.endUserLicenseAgreements)[':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.endUserLicenseAgreements)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1EndUserLicenseAgreementsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.endUserLicenseAgreements)[':id']['$patch']>,
    ) {
      return parseResponse(client.v1.endUserLicenseAgreements[':id'].$patch(args, options))
    },
  })
}

export function usePatchV1EndUserLicenseAgreementsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.endUserLicenseAgreements)[':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.endUserLicenseAgreements)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV1EndUserLicenseAgreementsIdMutationOptions<
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

export function getV1EndUserLicenseAgreementsIdTerritoriesQueryKey(
  args: InferRequestType<(typeof client.v1.endUserLicenseAgreements)[':id']['territories']['$get']>,
) {
  return ['v1', '/v1/endUserLicenseAgreements/:id/territories', args] as const
}

export function getV1EndUserLicenseAgreementsIdTerritoriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.endUserLicenseAgreements)[':id']['territories']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.endUserLicenseAgreements)[':id']['territories']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.endUserLicenseAgreements)[':id']['territories']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1EndUserLicenseAgreementsIdTerritoriesQueryKey>
  >({
    queryKey: getV1EndUserLicenseAgreementsIdTerritoriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.endUserLicenseAgreements[':id'].territories.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1EndUserLicenseAgreementsIdTerritories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.endUserLicenseAgreements)[':id']['territories']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.endUserLicenseAgreements)[':id']['territories']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.endUserLicenseAgreements)[':id']['territories']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1EndUserLicenseAgreementsIdTerritoriesQueryKey>
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
      ...getV1EndUserLicenseAgreementsIdTerritoriesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1EndUserLicenseAgreementsIdTerritories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.endUserLicenseAgreements)[':id']['territories']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.endUserLicenseAgreements)[':id']['territories']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.endUserLicenseAgreements)[':id']['territories']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1EndUserLicenseAgreementsIdTerritoriesQueryKey>
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
      ...getV1EndUserLicenseAgreementsIdTerritoriesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1FinanceReportsQueryKey(
  args: InferRequestType<typeof client.v1.financeReports.$get>,
) {
  return ['v1', '/v1/financeReports', args] as const
}

export function getV1FinanceReportsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.financeReports.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.financeReports.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.financeReports.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1FinanceReportsQueryKey>
  >({
    queryKey: getV1FinanceReportsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.financeReports.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1FinanceReports<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.financeReports.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.financeReports.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.financeReports.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1FinanceReportsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1FinanceReportsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1FinanceReports<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.financeReports.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.financeReports.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.financeReports.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1FinanceReportsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1FinanceReportsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1GameCenterEnabledVersionsIdCompatibleVersionsQueryKey(
  args: InferRequestType<
    (typeof client.v1.gameCenterEnabledVersions)[':id']['compatibleVersions']['$get']
  >,
) {
  return ['v1', '/v1/gameCenterEnabledVersions/:id/compatibleVersions', args] as const
}

export function getV1GameCenterEnabledVersionsIdCompatibleVersionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.gameCenterEnabledVersions)[':id']['compatibleVersions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.gameCenterEnabledVersions)[':id']['compatibleVersions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.gameCenterEnabledVersions)[':id']['compatibleVersions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1GameCenterEnabledVersionsIdCompatibleVersionsQueryKey>
  >({
    queryKey: getV1GameCenterEnabledVersionsIdCompatibleVersionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.gameCenterEnabledVersions[':id'].compatibleVersions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1GameCenterEnabledVersionsIdCompatibleVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.gameCenterEnabledVersions)[':id']['compatibleVersions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.gameCenterEnabledVersions)[':id']['compatibleVersions']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.gameCenterEnabledVersions)[':id']['compatibleVersions']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1GameCenterEnabledVersionsIdCompatibleVersionsQueryKey>
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
      ...getV1GameCenterEnabledVersionsIdCompatibleVersionsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1GameCenterEnabledVersionsIdCompatibleVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.gameCenterEnabledVersions)[':id']['compatibleVersions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.gameCenterEnabledVersions)[':id']['compatibleVersions']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.gameCenterEnabledVersions)[':id']['compatibleVersions']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1GameCenterEnabledVersionsIdCompatibleVersionsQueryKey>
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
      ...getV1GameCenterEnabledVersionsIdCompatibleVersionsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1GameCenterEnabledVersionsIdRelationshipsCompatibleVersionsQueryKey(
  args: InferRequestType<
    (typeof client.v1.gameCenterEnabledVersions)[':id']['relationships']['compatibleVersions']['$get']
  >,
) {
  return ['v1', '/v1/gameCenterEnabledVersions/:id/relationships/compatibleVersions', args] as const
}

export function getV1GameCenterEnabledVersionsIdRelationshipsCompatibleVersionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.gameCenterEnabledVersions)[':id']['relationships']['compatibleVersions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.gameCenterEnabledVersions)[':id']['relationships']['compatibleVersions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.gameCenterEnabledVersions)[':id']['relationships']['compatibleVersions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1GameCenterEnabledVersionsIdRelationshipsCompatibleVersionsQueryKey>
  >({
    queryKey: getV1GameCenterEnabledVersionsIdRelationshipsCompatibleVersionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.gameCenterEnabledVersions[':id'].relationships.compatibleVersions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1GameCenterEnabledVersionsIdRelationshipsCompatibleVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.gameCenterEnabledVersions)[':id']['relationships']['compatibleVersions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.gameCenterEnabledVersions)[':id']['relationships']['compatibleVersions']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.gameCenterEnabledVersions)[':id']['relationships']['compatibleVersions']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1GameCenterEnabledVersionsIdRelationshipsCompatibleVersionsQueryKey>
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
      ...getV1GameCenterEnabledVersionsIdRelationshipsCompatibleVersionsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1GameCenterEnabledVersionsIdRelationshipsCompatibleVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.gameCenterEnabledVersions)[':id']['relationships']['compatibleVersions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.gameCenterEnabledVersions)[':id']['relationships']['compatibleVersions']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.gameCenterEnabledVersions)[':id']['relationships']['compatibleVersions']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1GameCenterEnabledVersionsIdRelationshipsCompatibleVersionsQueryKey>
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
      ...getV1GameCenterEnabledVersionsIdRelationshipsCompatibleVersionsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV1GameCenterEnabledVersionsIdRelationshipsCompatibleVersionsMutationKey() {
  return [
    'v1',
    '/v1/gameCenterEnabledVersions/:id/relationships/compatibleVersions',
    'POST',
  ] as const
}

export function getPostV1GameCenterEnabledVersionsIdRelationshipsCompatibleVersionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.gameCenterEnabledVersions)[':id']['relationships']['compatibleVersions']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v1.gameCenterEnabledVersions)[':id']['relationships']['compatibleVersions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1GameCenterEnabledVersionsIdRelationshipsCompatibleVersionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.gameCenterEnabledVersions)[':id']['relationships']['compatibleVersions']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.gameCenterEnabledVersions[':id'].relationships.compatibleVersions.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostV1GameCenterEnabledVersionsIdRelationshipsCompatibleVersions<
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
                    (typeof client.v1.gameCenterEnabledVersions)[':id']['relationships']['compatibleVersions']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v1.gameCenterEnabledVersions)[':id']['relationships']['compatibleVersions']['$post']
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
  const mutationDefaults =
    getPostV1GameCenterEnabledVersionsIdRelationshipsCompatibleVersionsMutationOptions<
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

export function getDeleteV1GameCenterEnabledVersionsIdRelationshipsCompatibleVersionsMutationKey() {
  return [
    'v1',
    '/v1/gameCenterEnabledVersions/:id/relationships/compatibleVersions',
    'DELETE',
  ] as const
}

export function getDeleteV1GameCenterEnabledVersionsIdRelationshipsCompatibleVersionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.gameCenterEnabledVersions)[':id']['relationships']['compatibleVersions']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v1.gameCenterEnabledVersions)[':id']['relationships']['compatibleVersions']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1GameCenterEnabledVersionsIdRelationshipsCompatibleVersionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.gameCenterEnabledVersions)[':id']['relationships']['compatibleVersions']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.gameCenterEnabledVersions[':id'].relationships.compatibleVersions.$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteV1GameCenterEnabledVersionsIdRelationshipsCompatibleVersions<
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
                    (typeof client.v1.gameCenterEnabledVersions)[':id']['relationships']['compatibleVersions']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v1.gameCenterEnabledVersions)[':id']['relationships']['compatibleVersions']['$delete']
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
  const mutationDefaults =
    getDeleteV1GameCenterEnabledVersionsIdRelationshipsCompatibleVersionsMutationOptions<
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

export function getPatchV1GameCenterEnabledVersionsIdRelationshipsCompatibleVersionsMutationKey() {
  return [
    'v1',
    '/v1/gameCenterEnabledVersions/:id/relationships/compatibleVersions',
    'PATCH',
  ] as const
}

export function getPatchV1GameCenterEnabledVersionsIdRelationshipsCompatibleVersionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.gameCenterEnabledVersions)[':id']['relationships']['compatibleVersions']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v1.gameCenterEnabledVersions)[':id']['relationships']['compatibleVersions']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchV1GameCenterEnabledVersionsIdRelationshipsCompatibleVersionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.gameCenterEnabledVersions)[':id']['relationships']['compatibleVersions']['$patch']
      >,
    ) {
      return parseResponse(
        client.v1.gameCenterEnabledVersions[':id'].relationships.compatibleVersions.$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchV1GameCenterEnabledVersionsIdRelationshipsCompatibleVersions<
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
                    (typeof client.v1.gameCenterEnabledVersions)[':id']['relationships']['compatibleVersions']['$patch']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v1.gameCenterEnabledVersions)[':id']['relationships']['compatibleVersions']['$patch']
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
  const mutationDefaults =
    getPatchV1GameCenterEnabledVersionsIdRelationshipsCompatibleVersionsMutationOptions<
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

export function getPostV1IdfaDeclarationsMutationKey() {
  return ['v1', '/v1/idfaDeclarations', 'POST'] as const
}

export function getPostV1IdfaDeclarationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.idfaDeclarations.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.idfaDeclarations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1IdfaDeclarationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.idfaDeclarations.$post>) {
      return parseResponse(client.v1.idfaDeclarations.$post(args, options))
    },
  })
}

export function usePostV1IdfaDeclarations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.idfaDeclarations.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.idfaDeclarations.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1IdfaDeclarationsMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV1IdfaDeclarationsIdMutationKey() {
  return ['v1', '/v1/idfaDeclarations/:id', 'DELETE'] as const
}

export function getDeleteV1IdfaDeclarationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.idfaDeclarations)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.idfaDeclarations)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1IdfaDeclarationsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.idfaDeclarations)[':id']['$delete']>,
    ) {
      return parseResponse(client.v1.idfaDeclarations[':id'].$delete(args, options))
    },
  })
}

export function useDeleteV1IdfaDeclarationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.idfaDeclarations)[':id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1.idfaDeclarations)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1IdfaDeclarationsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchV1IdfaDeclarationsIdMutationKey() {
  return ['v1', '/v1/idfaDeclarations/:id', 'PATCH'] as const
}

export function getPatchV1IdfaDeclarationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.idfaDeclarations)[':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.idfaDeclarations)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1IdfaDeclarationsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.idfaDeclarations)[':id']['$patch']>) {
      return parseResponse(client.v1.idfaDeclarations[':id'].$patch(args, options))
    },
  })
}

export function usePatchV1IdfaDeclarationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.idfaDeclarations)[':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.idfaDeclarations)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV1IdfaDeclarationsIdMutationOptions<TError, TOnMutateResult>(
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

export function getV1InAppPurchasesIdQueryKey(
  args: InferRequestType<(typeof client.v1.inAppPurchases)[':id']['$get']>,
) {
  return ['v1', '/v1/inAppPurchases/:id', args] as const
}

export function getV1InAppPurchasesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.inAppPurchases)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.inAppPurchases)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.inAppPurchases)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1InAppPurchasesIdQueryKey>
  >({
    queryKey: getV1InAppPurchasesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.inAppPurchases[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1InAppPurchasesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.inAppPurchases)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.inAppPurchases)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.inAppPurchases)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1InAppPurchasesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1InAppPurchasesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1InAppPurchasesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.inAppPurchases)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.inAppPurchases)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.inAppPurchases)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1InAppPurchasesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1InAppPurchasesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1PreReleaseVersionsQueryKey(
  args: InferRequestType<typeof client.v1.preReleaseVersions.$get>,
) {
  return ['v1', '/v1/preReleaseVersions', args] as const
}

export function getV1PreReleaseVersionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.preReleaseVersions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.preReleaseVersions.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.preReleaseVersions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PreReleaseVersionsQueryKey>
  >({
    queryKey: getV1PreReleaseVersionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.preReleaseVersions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1PreReleaseVersions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.preReleaseVersions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.preReleaseVersions.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.preReleaseVersions.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1PreReleaseVersionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1PreReleaseVersionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1PreReleaseVersions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.preReleaseVersions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.preReleaseVersions.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.preReleaseVersions.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1PreReleaseVersionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1PreReleaseVersionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1PreReleaseVersionsIdQueryKey(
  args: InferRequestType<(typeof client.v1.preReleaseVersions)[':id']['$get']>,
) {
  return ['v1', '/v1/preReleaseVersions/:id', args] as const
}

export function getV1PreReleaseVersionsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.preReleaseVersions)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.preReleaseVersions)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.preReleaseVersions)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PreReleaseVersionsIdQueryKey>
  >({
    queryKey: getV1PreReleaseVersionsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.preReleaseVersions[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1PreReleaseVersionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.preReleaseVersions)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.preReleaseVersions)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.preReleaseVersions)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1PreReleaseVersionsIdQueryKey>
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
      ...getV1PreReleaseVersionsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1PreReleaseVersionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.preReleaseVersions)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.preReleaseVersions)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.preReleaseVersions)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1PreReleaseVersionsIdQueryKey>
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
      ...getV1PreReleaseVersionsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1PreReleaseVersionsIdAppQueryKey(
  args: InferRequestType<(typeof client.v1.preReleaseVersions)[':id']['app']['$get']>,
) {
  return ['v1', '/v1/preReleaseVersions/:id/app', args] as const
}

export function getV1PreReleaseVersionsIdAppQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.preReleaseVersions)[':id']['app']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.preReleaseVersions)[':id']['app']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.preReleaseVersions)[':id']['app']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PreReleaseVersionsIdAppQueryKey>
  >({
    queryKey: getV1PreReleaseVersionsIdAppQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.preReleaseVersions[':id'].app.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1PreReleaseVersionsIdApp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.preReleaseVersions)[':id']['app']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.preReleaseVersions)[':id']['app']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.preReleaseVersions)[':id']['app']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1PreReleaseVersionsIdAppQueryKey>
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
      ...getV1PreReleaseVersionsIdAppQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1PreReleaseVersionsIdApp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.preReleaseVersions)[':id']['app']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.preReleaseVersions)[':id']['app']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.preReleaseVersions)[':id']['app']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1PreReleaseVersionsIdAppQueryKey>
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
      ...getV1PreReleaseVersionsIdAppQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1PreReleaseVersionsIdBuildsQueryKey(
  args: InferRequestType<(typeof client.v1.preReleaseVersions)[':id']['builds']['$get']>,
) {
  return ['v1', '/v1/preReleaseVersions/:id/builds', args] as const
}

export function getV1PreReleaseVersionsIdBuildsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.preReleaseVersions)[':id']['builds']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.preReleaseVersions)[':id']['builds']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.preReleaseVersions)[':id']['builds']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PreReleaseVersionsIdBuildsQueryKey>
  >({
    queryKey: getV1PreReleaseVersionsIdBuildsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.preReleaseVersions[':id'].builds.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1PreReleaseVersionsIdBuilds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.preReleaseVersions)[':id']['builds']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.preReleaseVersions)[':id']['builds']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.preReleaseVersions)[':id']['builds']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1PreReleaseVersionsIdBuildsQueryKey>
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
      ...getV1PreReleaseVersionsIdBuildsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1PreReleaseVersionsIdBuilds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.preReleaseVersions)[':id']['builds']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.preReleaseVersions)[':id']['builds']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.preReleaseVersions)[':id']['builds']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1PreReleaseVersionsIdBuildsQueryKey>
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
      ...getV1PreReleaseVersionsIdBuildsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1ProfilesQueryKey(args: InferRequestType<typeof client.v1.profiles.$get>) {
  return ['v1', '/v1/profiles', args] as const
}

export function getV1ProfilesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.profiles.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.profiles.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.profiles.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1ProfilesQueryKey>
  >({
    queryKey: getV1ProfilesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.profiles.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1Profiles<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.profiles.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.profiles.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.profiles.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProfilesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1ProfilesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1Profiles<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.profiles.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.profiles.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.profiles.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProfilesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1ProfilesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV1ProfilesMutationKey() {
  return ['v1', '/v1/profiles', 'POST'] as const
}

export function getPostV1ProfilesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.profiles.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.profiles.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProfilesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.profiles.$post>) {
      return parseResponse(client.v1.profiles.$post(args, options))
    },
  })
}

export function usePostV1Profiles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.profiles.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.profiles.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ProfilesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1ProfilesIdQueryKey(
  args: InferRequestType<(typeof client.v1.profiles)[':id']['$get']>,
) {
  return ['v1', '/v1/profiles/:id', args] as const
}

export function getV1ProfilesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.profiles)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.profiles)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.profiles)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProfilesIdQueryKey>
  >({
    queryKey: getV1ProfilesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.profiles[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1ProfilesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.profiles)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.profiles)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.profiles)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProfilesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1ProfilesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1ProfilesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.profiles)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.profiles)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.profiles)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProfilesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1ProfilesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteV1ProfilesIdMutationKey() {
  return ['v1', '/v1/profiles/:id', 'DELETE'] as const
}

export function getDeleteV1ProfilesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.profiles)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.profiles)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ProfilesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.profiles)[':id']['$delete']>) {
      return parseResponse(client.v1.profiles[':id'].$delete(args, options))
    },
  })
}

export function useDeleteV1ProfilesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.profiles)[':id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1.profiles)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1ProfilesIdMutationOptions<TError, TOnMutateResult>(
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

export function getV1ProfilesIdBundleIdQueryKey(
  args: InferRequestType<(typeof client.v1.profiles)[':id']['bundleId']['$get']>,
) {
  return ['v1', '/v1/profiles/:id/bundleId', args] as const
}

export function getV1ProfilesIdBundleIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.profiles)[':id']['bundleId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.profiles)[':id']['bundleId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.profiles)[':id']['bundleId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProfilesIdBundleIdQueryKey>
  >({
    queryKey: getV1ProfilesIdBundleIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.profiles[':id'].bundleId.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ProfilesIdBundleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.profiles)[':id']['bundleId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.profiles)[':id']['bundleId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.profiles)[':id']['bundleId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProfilesIdBundleIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1ProfilesIdBundleIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1ProfilesIdBundleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.profiles)[':id']['bundleId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.profiles)[':id']['bundleId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.profiles)[':id']['bundleId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProfilesIdBundleIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1ProfilesIdBundleIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1ProfilesIdCertificatesQueryKey(
  args: InferRequestType<(typeof client.v1.profiles)[':id']['certificates']['$get']>,
) {
  return ['v1', '/v1/profiles/:id/certificates', args] as const
}

export function getV1ProfilesIdCertificatesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.profiles)[':id']['certificates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.profiles)[':id']['certificates']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.profiles)[':id']['certificates']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProfilesIdCertificatesQueryKey>
  >({
    queryKey: getV1ProfilesIdCertificatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.profiles[':id'].certificates.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ProfilesIdCertificates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.profiles)[':id']['certificates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.profiles)[':id']['certificates']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.profiles)[':id']['certificates']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProfilesIdCertificatesQueryKey>
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
      ...getV1ProfilesIdCertificatesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ProfilesIdCertificates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.profiles)[':id']['certificates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.profiles)[':id']['certificates']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.profiles)[':id']['certificates']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProfilesIdCertificatesQueryKey>
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
      ...getV1ProfilesIdCertificatesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1ProfilesIdDevicesQueryKey(
  args: InferRequestType<(typeof client.v1.profiles)[':id']['devices']['$get']>,
) {
  return ['v1', '/v1/profiles/:id/devices', args] as const
}

export function getV1ProfilesIdDevicesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.profiles)[':id']['devices']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.profiles)[':id']['devices']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.profiles)[':id']['devices']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProfilesIdDevicesQueryKey>
  >({
    queryKey: getV1ProfilesIdDevicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.profiles[':id'].devices.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ProfilesIdDevices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.profiles)[':id']['devices']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.profiles)[':id']['devices']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.profiles)[':id']['devices']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProfilesIdDevicesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1ProfilesIdDevicesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1ProfilesIdDevices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.profiles)[':id']['devices']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.profiles)[':id']['devices']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.profiles)[':id']['devices']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProfilesIdDevicesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1ProfilesIdDevicesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV1RoutingAppCoveragesMutationKey() {
  return ['v1', '/v1/routingAppCoverages', 'POST'] as const
}

export function getPostV1RoutingAppCoveragesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.routingAppCoverages.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.routingAppCoverages.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1RoutingAppCoveragesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.routingAppCoverages.$post>) {
      return parseResponse(client.v1.routingAppCoverages.$post(args, options))
    },
  })
}

export function usePostV1RoutingAppCoverages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.routingAppCoverages.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.routingAppCoverages.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1RoutingAppCoveragesMutationOptions<TError, TOnMutateResult>(
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

export function getV1RoutingAppCoveragesIdQueryKey(
  args: InferRequestType<(typeof client.v1.routingAppCoverages)[':id']['$get']>,
) {
  return ['v1', '/v1/routingAppCoverages/:id', args] as const
}

export function getV1RoutingAppCoveragesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.routingAppCoverages)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.routingAppCoverages)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.routingAppCoverages)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1RoutingAppCoveragesIdQueryKey>
  >({
    queryKey: getV1RoutingAppCoveragesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.routingAppCoverages[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1RoutingAppCoveragesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.routingAppCoverages)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.routingAppCoverages)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.routingAppCoverages)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1RoutingAppCoveragesIdQueryKey>
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
      ...getV1RoutingAppCoveragesIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1RoutingAppCoveragesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.routingAppCoverages)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.routingAppCoverages)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.routingAppCoverages)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1RoutingAppCoveragesIdQueryKey>
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
      ...getV1RoutingAppCoveragesIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteV1RoutingAppCoveragesIdMutationKey() {
  return ['v1', '/v1/routingAppCoverages/:id', 'DELETE'] as const
}

export function getDeleteV1RoutingAppCoveragesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.routingAppCoverages)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.routingAppCoverages)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1RoutingAppCoveragesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.routingAppCoverages)[':id']['$delete']>,
    ) {
      return parseResponse(client.v1.routingAppCoverages[':id'].$delete(args, options))
    },
  })
}

export function useDeleteV1RoutingAppCoveragesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.routingAppCoverages)[':id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1.routingAppCoverages)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1RoutingAppCoveragesIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchV1RoutingAppCoveragesIdMutationKey() {
  return ['v1', '/v1/routingAppCoverages/:id', 'PATCH'] as const
}

export function getPatchV1RoutingAppCoveragesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.routingAppCoverages)[':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.routingAppCoverages)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1RoutingAppCoveragesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.routingAppCoverages)[':id']['$patch']>,
    ) {
      return parseResponse(client.v1.routingAppCoverages[':id'].$patch(args, options))
    },
  })
}

export function usePatchV1RoutingAppCoveragesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.routingAppCoverages)[':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.routingAppCoverages)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV1RoutingAppCoveragesIdMutationOptions<TError, TOnMutateResult>(
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

export function getV1SalesReportsQueryKey(
  args: InferRequestType<typeof client.v1.salesReports.$get>,
) {
  return ['v1', '/v1/salesReports', args] as const
}

export function getV1SalesReportsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.salesReports.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.salesReports.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.salesReports.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1SalesReportsQueryKey>
  >({
    queryKey: getV1SalesReportsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.salesReports.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1SalesReports<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.salesReports.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.salesReports.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.salesReports.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1SalesReportsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1SalesReportsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1SalesReports<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.salesReports.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.salesReports.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.salesReports.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1SalesReportsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1SalesReportsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1TerritoriesQueryKey(
  args: InferRequestType<typeof client.v1.territories.$get>,
) {
  return ['v1', '/v1/territories', args] as const
}

export function getV1TerritoriesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.territories.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.territories.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.territories.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1TerritoriesQueryKey>
  >({
    queryKey: getV1TerritoriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.territories.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1Territories<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.territories.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.territories.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.territories.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1TerritoriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1TerritoriesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1Territories<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.territories.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.territories.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.territories.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1TerritoriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1TerritoriesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1UserInvitationsQueryKey(
  args: InferRequestType<typeof client.v1.userInvitations.$get>,
) {
  return ['v1', '/v1/userInvitations', args] as const
}

export function getV1UserInvitationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.userInvitations.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.userInvitations.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.userInvitations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1UserInvitationsQueryKey>
  >({
    queryKey: getV1UserInvitationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.userInvitations.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1UserInvitations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.userInvitations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.userInvitations.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.userInvitations.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1UserInvitationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1UserInvitationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1UserInvitations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.userInvitations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.userInvitations.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.userInvitations.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1UserInvitationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1UserInvitationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV1UserInvitationsMutationKey() {
  return ['v1', '/v1/userInvitations', 'POST'] as const
}

export function getPostV1UserInvitationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.userInvitations.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.userInvitations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1UserInvitationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.userInvitations.$post>) {
      return parseResponse(client.v1.userInvitations.$post(args, options))
    },
  })
}

export function usePostV1UserInvitations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.userInvitations.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.userInvitations.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1UserInvitationsMutationOptions<TError, TOnMutateResult>(
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

export function getV1UserInvitationsIdQueryKey(
  args: InferRequestType<(typeof client.v1.userInvitations)[':id']['$get']>,
) {
  return ['v1', '/v1/userInvitations/:id', args] as const
}

export function getV1UserInvitationsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.userInvitations)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.userInvitations)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.userInvitations)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1UserInvitationsIdQueryKey>
  >({
    queryKey: getV1UserInvitationsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.userInvitations[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1UserInvitationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.userInvitations)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.userInvitations)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.userInvitations)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1UserInvitationsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1UserInvitationsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1UserInvitationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.userInvitations)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.userInvitations)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.userInvitations)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1UserInvitationsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1UserInvitationsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteV1UserInvitationsIdMutationKey() {
  return ['v1', '/v1/userInvitations/:id', 'DELETE'] as const
}

export function getDeleteV1UserInvitationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.userInvitations)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.userInvitations)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1UserInvitationsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.userInvitations)[':id']['$delete']>) {
      return parseResponse(client.v1.userInvitations[':id'].$delete(args, options))
    },
  })
}

export function useDeleteV1UserInvitationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.userInvitations)[':id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1.userInvitations)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1UserInvitationsIdMutationOptions<TError, TOnMutateResult>(
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

export function getV1UserInvitationsIdVisibleAppsQueryKey(
  args: InferRequestType<(typeof client.v1.userInvitations)[':id']['visibleApps']['$get']>,
) {
  return ['v1', '/v1/userInvitations/:id/visibleApps', args] as const
}

export function getV1UserInvitationsIdVisibleAppsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.userInvitations)[':id']['visibleApps']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.userInvitations)[':id']['visibleApps']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.userInvitations)[':id']['visibleApps']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1UserInvitationsIdVisibleAppsQueryKey>
  >({
    queryKey: getV1UserInvitationsIdVisibleAppsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.userInvitations[':id'].visibleApps.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1UserInvitationsIdVisibleApps<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.userInvitations)[':id']['visibleApps']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.userInvitations)[':id']['visibleApps']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.userInvitations)[':id']['visibleApps']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1UserInvitationsIdVisibleAppsQueryKey>
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
      ...getV1UserInvitationsIdVisibleAppsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1UserInvitationsIdVisibleApps<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.userInvitations)[':id']['visibleApps']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.userInvitations)[':id']['visibleApps']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.userInvitations)[':id']['visibleApps']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1UserInvitationsIdVisibleAppsQueryKey>
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
      ...getV1UserInvitationsIdVisibleAppsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1UsersQueryKey(args: InferRequestType<typeof client.v1.users.$get>) {
  return ['v1', '/v1/users', args] as const
}

export function getV1UsersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.users.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1UsersQueryKey>
  >({
    queryKey: getV1UsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.users.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1Users<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.users.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getV1UsersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1UsersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1Users<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.users.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getV1UsersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1UsersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1UsersIdQueryKey(
  args: InferRequestType<(typeof client.v1.users)[':id']['$get']>,
) {
  return ['v1', '/v1/users/:id', args] as const
}

export function getV1UsersIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.users)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.v1.users)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.users)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1UsersIdQueryKey>
  >({
    queryKey: getV1UsersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.users[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1UsersId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.users)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.users)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.users)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1UsersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1UsersIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1UsersId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.users)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.users)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.users)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1UsersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1UsersIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteV1UsersIdMutationKey() {
  return ['v1', '/v1/users/:id', 'DELETE'] as const
}

export function getDeleteV1UsersIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.users)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.users)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1UsersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.users)[':id']['$delete']>) {
      return parseResponse(client.v1.users[':id'].$delete(args, options))
    },
  })
}

export function useDeleteV1UsersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.users)[':id']['$delete']>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1.users)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1UsersIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchV1UsersIdMutationKey() {
  return ['v1', '/v1/users/:id', 'PATCH'] as const
}

export function getPatchV1UsersIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.users)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.users)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1UsersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.users)[':id']['$patch']>) {
      return parseResponse(client.v1.users[':id'].$patch(args, options))
    },
  })
}

export function usePatchV1UsersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.users)[':id']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.users)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV1UsersIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1UsersIdRelationshipsVisibleAppsQueryKey(
  args: InferRequestType<(typeof client.v1.users)[':id']['relationships']['visibleApps']['$get']>,
) {
  return ['v1', '/v1/users/:id/relationships/visibleApps', args] as const
}

export function getV1UsersIdRelationshipsVisibleAppsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.users)[':id']['relationships']['visibleApps']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.users)[':id']['relationships']['visibleApps']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.users)[':id']['relationships']['visibleApps']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1UsersIdRelationshipsVisibleAppsQueryKey>
  >({
    queryKey: getV1UsersIdRelationshipsVisibleAppsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.users[':id'].relationships.visibleApps.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1UsersIdRelationshipsVisibleApps<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.users)[':id']['relationships']['visibleApps']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.users)[':id']['relationships']['visibleApps']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.users)[':id']['relationships']['visibleApps']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1UsersIdRelationshipsVisibleAppsQueryKey>
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
      ...getV1UsersIdRelationshipsVisibleAppsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1UsersIdRelationshipsVisibleApps<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.users)[':id']['relationships']['visibleApps']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.users)[':id']['relationships']['visibleApps']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.users)[':id']['relationships']['visibleApps']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1UsersIdRelationshipsVisibleAppsQueryKey>
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
      ...getV1UsersIdRelationshipsVisibleAppsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV1UsersIdRelationshipsVisibleAppsMutationKey() {
  return ['v1', '/v1/users/:id/relationships/visibleApps', 'POST'] as const
}

export function getPostV1UsersIdRelationshipsVisibleAppsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.users)[':id']['relationships']['visibleApps']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.users)[':id']['relationships']['visibleApps']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1UsersIdRelationshipsVisibleAppsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.users)[':id']['relationships']['visibleApps']['$post']
      >,
    ) {
      return parseResponse(client.v1.users[':id'].relationships.visibleApps.$post(args, options))
    },
  })
}

export function usePostV1UsersIdRelationshipsVisibleApps<
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
                    (typeof client.v1.users)[':id']['relationships']['visibleApps']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1.users)[':id']['relationships']['visibleApps']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1UsersIdRelationshipsVisibleAppsMutationOptions<
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

export function getDeleteV1UsersIdRelationshipsVisibleAppsMutationKey() {
  return ['v1', '/v1/users/:id/relationships/visibleApps', 'DELETE'] as const
}

export function getDeleteV1UsersIdRelationshipsVisibleAppsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.users)[':id']['relationships']['visibleApps']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.users)[':id']['relationships']['visibleApps']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1UsersIdRelationshipsVisibleAppsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.users)[':id']['relationships']['visibleApps']['$delete']
      >,
    ) {
      return parseResponse(client.v1.users[':id'].relationships.visibleApps.$delete(args, options))
    },
  })
}

export function useDeleteV1UsersIdRelationshipsVisibleApps<
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
                    (typeof client.v1.users)[':id']['relationships']['visibleApps']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v1.users)[':id']['relationships']['visibleApps']['$delete']
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
  const mutationDefaults = getDeleteV1UsersIdRelationshipsVisibleAppsMutationOptions<
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

export function getPatchV1UsersIdRelationshipsVisibleAppsMutationKey() {
  return ['v1', '/v1/users/:id/relationships/visibleApps', 'PATCH'] as const
}

export function getPatchV1UsersIdRelationshipsVisibleAppsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.users)[':id']['relationships']['visibleApps']['$patch']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.users)[':id']['relationships']['visibleApps']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1UsersIdRelationshipsVisibleAppsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.users)[':id']['relationships']['visibleApps']['$patch']
      >,
    ) {
      return parseResponse(client.v1.users[':id'].relationships.visibleApps.$patch(args, options))
    },
  })
}

export function usePatchV1UsersIdRelationshipsVisibleApps<
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
                    (typeof client.v1.users)[':id']['relationships']['visibleApps']['$patch']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1.users)[':id']['relationships']['visibleApps']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV1UsersIdRelationshipsVisibleAppsMutationOptions<
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

export function getV1UsersIdVisibleAppsQueryKey(
  args: InferRequestType<(typeof client.v1.users)[':id']['visibleApps']['$get']>,
) {
  return ['v1', '/v1/users/:id/visibleApps', args] as const
}

export function getV1UsersIdVisibleAppsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.users)[':id']['visibleApps']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.users)[':id']['visibleApps']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.users)[':id']['visibleApps']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1UsersIdVisibleAppsQueryKey>
  >({
    queryKey: getV1UsersIdVisibleAppsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.users[':id'].visibleApps.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1UsersIdVisibleApps<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.users)[':id']['visibleApps']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.users)[':id']['visibleApps']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.users)[':id']['visibleApps']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1UsersIdVisibleAppsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1UsersIdVisibleAppsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1UsersIdVisibleApps<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.users)[':id']['visibleApps']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.users)[':id']['visibleApps']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.users)[':id']['visibleApps']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1UsersIdVisibleAppsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1UsersIdVisibleAppsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}
