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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.appCategories.$get>>,
) {
  return ['v1', '/v1/appCategories', toValue(args)] as const
}

export function getV1AppCategoriesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.appCategories.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AppCategoriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.appCategories.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AppCategories<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.appCategories.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.appCategories.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.appCategories.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.appCategories.$get>>>
            >
          >,
          ReturnType<typeof getV1AppCategoriesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.appCategories.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppCategoriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AppCategoriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.appCategories.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AppCategoriesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.appCategories)[':id']['$get']>>,
) {
  return ['v1', '/v1/appCategories/:id', toValue(args)] as const
}

export function getV1AppCategoriesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.appCategories)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AppCategoriesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.appCategories[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AppCategoriesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.appCategories)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.appCategories)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.appCategories)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1AppCategoriesIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.appCategories)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppCategoriesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AppCategoriesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.appCategories[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AppCategoriesIdParentQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.appCategories)[':id']['parent']['$get']>
  >,
) {
  return ['v1', '/v1/appCategories/:id/parent', toValue(args)] as const
}

export function getV1AppCategoriesIdParentQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.appCategories)[':id']['parent']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AppCategoriesIdParentQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.appCategories[':id'].parent.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.appCategories)[':id']['parent']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.appCategories)[':id']['parent']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1AppCategoriesIdParentQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.appCategories)[':id']['parent']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppCategoriesIdParentQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AppCategoriesIdParentQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.appCategories[':id'].parent.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AppCategoriesIdSubcategoriesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.appCategories)[':id']['subcategories']['$get']>
  >,
) {
  return ['v1', '/v1/appCategories/:id/subcategories', toValue(args)] as const
}

export function getV1AppCategoriesIdSubcategoriesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.appCategories)[':id']['subcategories']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AppCategoriesIdSubcategoriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.appCategories[':id'].subcategories.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.appCategories)[':id']['subcategories']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.appCategories)[':id']['subcategories']['$get']>
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
                  ReturnType<(typeof client.v1.appCategories)[':id']['subcategories']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1AppCategoriesIdSubcategoriesQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.appCategories)[':id']['subcategories']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppCategoriesIdSubcategoriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AppCategoriesIdSubcategoriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.appCategories[':id'].subcategories.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AppEncryptionDeclarationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.appEncryptionDeclarations.$get>>,
) {
  return ['v1', '/v1/appEncryptionDeclarations', toValue(args)] as const
}

export function getV1AppEncryptionDeclarationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.appEncryptionDeclarations.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AppEncryptionDeclarationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.appEncryptionDeclarations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AppEncryptionDeclarations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.appEncryptionDeclarations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.appEncryptionDeclarations.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.appEncryptionDeclarations.$get>>
              >
            >
          >,
          ReturnType<typeof getV1AppEncryptionDeclarationsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.appEncryptionDeclarations.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppEncryptionDeclarationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AppEncryptionDeclarationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.appEncryptionDeclarations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AppEncryptionDeclarationsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.appEncryptionDeclarations)[':id']['$get']>
  >,
) {
  return ['v1', '/v1/appEncryptionDeclarations/:id', toValue(args)] as const
}

export function getV1AppEncryptionDeclarationsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.appEncryptionDeclarations)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AppEncryptionDeclarationsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.appEncryptionDeclarations[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.appEncryptionDeclarations)[':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.appEncryptionDeclarations)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1AppEncryptionDeclarationsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.appEncryptionDeclarations)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppEncryptionDeclarationsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AppEncryptionDeclarationsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.appEncryptionDeclarations[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AppEncryptionDeclarationsIdAppQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.appEncryptionDeclarations)[':id']['app']['$get']>
  >,
) {
  return ['v1', '/v1/appEncryptionDeclarations/:id/app', toValue(args)] as const
}

export function getV1AppEncryptionDeclarationsIdAppQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.appEncryptionDeclarations)[':id']['app']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AppEncryptionDeclarationsIdAppQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.appEncryptionDeclarations[':id'].app.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.appEncryptionDeclarations)[':id']['app']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.appEncryptionDeclarations)[':id']['app']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1AppEncryptionDeclarationsIdAppQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.appEncryptionDeclarations)[':id']['app']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppEncryptionDeclarationsIdAppQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AppEncryptionDeclarationsIdAppQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.appEncryptionDeclarations[':id'].app.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.appInfoLocalizations)[':id']['$get']>>,
) {
  return ['v1', '/v1/appInfoLocalizations/:id', toValue(args)] as const
}

export function getV1AppInfoLocalizationsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.appInfoLocalizations)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AppInfoLocalizationsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.appInfoLocalizations[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.appInfoLocalizations)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.appInfoLocalizations)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1AppInfoLocalizationsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.appInfoLocalizations)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppInfoLocalizationsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AppInfoLocalizationsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.appInfoLocalizations[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.appInfos)[':id']['$get']>>,
) {
  return ['v1', '/v1/appInfos/:id', toValue(args)] as const
}

export function getV1AppInfosIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.appInfos)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AppInfosIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.appInfos[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AppInfosId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.appInfos)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.appInfos)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.appInfos)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.appInfos)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getV1AppInfosIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.appInfos)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppInfosIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AppInfosIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.appInfos[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.appInfos)[':id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.appInfos)[':id']['$patch']>,
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.appInfos)[':id']['ageRatingDeclaration']['$get']>
  >,
) {
  return ['v1', '/v1/appInfos/:id/ageRatingDeclaration', toValue(args)] as const
}

export function getV1AppInfosIdAgeRatingDeclarationQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.appInfos)[':id']['ageRatingDeclaration']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AppInfosIdAgeRatingDeclarationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.appInfos[':id'].ageRatingDeclaration.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.appInfos)[':id']['ageRatingDeclaration']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.appInfos)[':id']['ageRatingDeclaration']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1AppInfosIdAgeRatingDeclarationQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.appInfos)[':id']['ageRatingDeclaration']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppInfosIdAgeRatingDeclarationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AppInfosIdAgeRatingDeclarationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.appInfos[':id'].ageRatingDeclaration.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AppInfosIdAppInfoLocalizationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.appInfos)[':id']['appInfoLocalizations']['$get']>
  >,
) {
  return ['v1', '/v1/appInfos/:id/appInfoLocalizations', toValue(args)] as const
}

export function getV1AppInfosIdAppInfoLocalizationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.appInfos)[':id']['appInfoLocalizations']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AppInfosIdAppInfoLocalizationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.appInfos[':id'].appInfoLocalizations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.appInfos)[':id']['appInfoLocalizations']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.appInfos)[':id']['appInfoLocalizations']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1AppInfosIdAppInfoLocalizationsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.appInfos)[':id']['appInfoLocalizations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppInfosIdAppInfoLocalizationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AppInfosIdAppInfoLocalizationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.appInfos[':id'].appInfoLocalizations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AppInfosIdPrimaryCategoryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.appInfos)[':id']['primaryCategory']['$get']>
  >,
) {
  return ['v1', '/v1/appInfos/:id/primaryCategory', toValue(args)] as const
}

export function getV1AppInfosIdPrimaryCategoryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.appInfos)[':id']['primaryCategory']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AppInfosIdPrimaryCategoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.appInfos[':id'].primaryCategory.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.appInfos)[':id']['primaryCategory']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.appInfos)[':id']['primaryCategory']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1AppInfosIdPrimaryCategoryQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.appInfos)[':id']['primaryCategory']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppInfosIdPrimaryCategoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AppInfosIdPrimaryCategoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.appInfos[':id'].primaryCategory.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AppInfosIdPrimarySubcategoryOneQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.appInfos)[':id']['primarySubcategoryOne']['$get']>
  >,
) {
  return ['v1', '/v1/appInfos/:id/primarySubcategoryOne', toValue(args)] as const
}

export function getV1AppInfosIdPrimarySubcategoryOneQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.appInfos)[':id']['primarySubcategoryOne']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AppInfosIdPrimarySubcategoryOneQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.appInfos[':id'].primarySubcategoryOne.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.appInfos)[':id']['primarySubcategoryOne']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.appInfos)[':id']['primarySubcategoryOne']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1AppInfosIdPrimarySubcategoryOneQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.appInfos)[':id']['primarySubcategoryOne']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppInfosIdPrimarySubcategoryOneQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AppInfosIdPrimarySubcategoryOneQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.appInfos[':id'].primarySubcategoryOne.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AppInfosIdPrimarySubcategoryTwoQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.appInfos)[':id']['primarySubcategoryTwo']['$get']>
  >,
) {
  return ['v1', '/v1/appInfos/:id/primarySubcategoryTwo', toValue(args)] as const
}

export function getV1AppInfosIdPrimarySubcategoryTwoQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.appInfos)[':id']['primarySubcategoryTwo']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AppInfosIdPrimarySubcategoryTwoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.appInfos[':id'].primarySubcategoryTwo.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.appInfos)[':id']['primarySubcategoryTwo']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.appInfos)[':id']['primarySubcategoryTwo']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1AppInfosIdPrimarySubcategoryTwoQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.appInfos)[':id']['primarySubcategoryTwo']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppInfosIdPrimarySubcategoryTwoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AppInfosIdPrimarySubcategoryTwoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.appInfos[':id'].primarySubcategoryTwo.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AppInfosIdSecondaryCategoryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.appInfos)[':id']['secondaryCategory']['$get']>
  >,
) {
  return ['v1', '/v1/appInfos/:id/secondaryCategory', toValue(args)] as const
}

export function getV1AppInfosIdSecondaryCategoryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.appInfos)[':id']['secondaryCategory']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AppInfosIdSecondaryCategoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.appInfos[':id'].secondaryCategory.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.appInfos)[':id']['secondaryCategory']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.appInfos)[':id']['secondaryCategory']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1AppInfosIdSecondaryCategoryQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.appInfos)[':id']['secondaryCategory']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppInfosIdSecondaryCategoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AppInfosIdSecondaryCategoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.appInfos[':id'].secondaryCategory.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AppInfosIdSecondarySubcategoryOneQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.appInfos)[':id']['secondarySubcategoryOne']['$get']>
  >,
) {
  return ['v1', '/v1/appInfos/:id/secondarySubcategoryOne', toValue(args)] as const
}

export function getV1AppInfosIdSecondarySubcategoryOneQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.appInfos)[':id']['secondarySubcategoryOne']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AppInfosIdSecondarySubcategoryOneQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.appInfos[':id'].secondarySubcategoryOne.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.appInfos)[':id']['secondarySubcategoryOne']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.appInfos)[':id']['secondarySubcategoryOne']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1AppInfosIdSecondarySubcategoryOneQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.appInfos)[':id']['secondarySubcategoryOne']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppInfosIdSecondarySubcategoryOneQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AppInfosIdSecondarySubcategoryOneQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.appInfos[':id'].secondarySubcategoryOne.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AppInfosIdSecondarySubcategoryTwoQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.appInfos)[':id']['secondarySubcategoryTwo']['$get']>
  >,
) {
  return ['v1', '/v1/appInfos/:id/secondarySubcategoryTwo', toValue(args)] as const
}

export function getV1AppInfosIdSecondarySubcategoryTwoQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.appInfos)[':id']['secondarySubcategoryTwo']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AppInfosIdSecondarySubcategoryTwoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.appInfos[':id'].secondarySubcategoryTwo.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.appInfos)[':id']['secondarySubcategoryTwo']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.appInfos)[':id']['secondarySubcategoryTwo']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1AppInfosIdSecondarySubcategoryTwoQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.appInfos)[':id']['secondarySubcategoryTwo']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppInfosIdSecondarySubcategoryTwoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AppInfosIdSecondarySubcategoryTwoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.appInfos[':id'].secondarySubcategoryTwo.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.appPreOrders.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.appPreOrders.$post>,
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.appPreOrders)[':id']['$get']>>,
) {
  return ['v1', '/v1/appPreOrders/:id', toValue(args)] as const
}

export function getV1AppPreOrdersIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.appPreOrders)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AppPreOrdersIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.appPreOrders[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AppPreOrdersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.appPreOrders)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.appPreOrders)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.appPreOrders)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1AppPreOrdersIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.appPreOrders)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppPreOrdersIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AppPreOrdersIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.appPreOrders[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.appPreviewSets)[':id']['$get']>>,
) {
  return ['v1', '/v1/appPreviewSets/:id', toValue(args)] as const
}

export function getV1AppPreviewSetsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.appPreviewSets)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AppPreviewSetsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.appPreviewSets[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AppPreviewSetsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.appPreviewSets)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.appPreviewSets)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.appPreviewSets)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1AppPreviewSetsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.appPreviewSets)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppPreviewSetsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AppPreviewSetsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.appPreviewSets[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.appPreviewSets)[':id']['appPreviews']['$get']>
  >,
) {
  return ['v1', '/v1/appPreviewSets/:id/appPreviews', toValue(args)] as const
}

export function getV1AppPreviewSetsIdAppPreviewsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.appPreviewSets)[':id']['appPreviews']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AppPreviewSetsIdAppPreviewsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.appPreviewSets[':id'].appPreviews.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.appPreviewSets)[':id']['appPreviews']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.appPreviewSets)[':id']['appPreviews']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1AppPreviewSetsIdAppPreviewsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.appPreviewSets)[':id']['appPreviews']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppPreviewSetsIdAppPreviewsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AppPreviewSetsIdAppPreviewsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.appPreviewSets[':id'].appPreviews.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AppPreviewSetsIdRelationshipsAppPreviewsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.appPreviewSets)[':id']['relationships']['appPreviews']['$get']
    >
  >,
) {
  return ['v1', '/v1/appPreviewSets/:id/relationships/appPreviews', toValue(args)] as const
}

export function getV1AppPreviewSetsIdRelationshipsAppPreviewsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.appPreviewSets)[':id']['relationships']['appPreviews']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AppPreviewSetsIdRelationshipsAppPreviewsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.appPreviewSets[':id'].relationships.appPreviews.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.appPreviewSets)[':id']['relationships']['appPreviews']['$get']
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
                    (typeof client.v1.appPreviewSets)[':id']['relationships']['appPreviews']['$get']
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
                    (typeof client.v1.appPreviewSets)[':id']['relationships']['appPreviews']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1AppPreviewSetsIdRelationshipsAppPreviewsQueryKey>
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
              (typeof client.v1.appPreviewSets)[':id']['relationships']['appPreviews']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppPreviewSetsIdRelationshipsAppPreviewsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AppPreviewSetsIdRelationshipsAppPreviewsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.appPreviewSets[':id'].relationships.appPreviews.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.appPreviews.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.appPreviews.$post>,
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.appPreviews)[':id']['$get']>>,
) {
  return ['v1', '/v1/appPreviews/:id', toValue(args)] as const
}

export function getV1AppPreviewsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.appPreviews)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AppPreviewsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.appPreviews[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AppPreviewsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.appPreviews)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.appPreviews)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.appPreviews)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.appPreviews)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1AppPreviewsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.appPreviews)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppPreviewsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AppPreviewsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.appPreviews[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.appPricePoints.$get>>,
) {
  return ['v1', '/v1/appPricePoints', toValue(args)] as const
}

export function getV1AppPricePointsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.appPricePoints.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AppPricePointsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.appPricePoints.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AppPricePoints<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.appPricePoints.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.appPricePoints.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.appPricePoints.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.appPricePoints.$get>>>
            >
          >,
          ReturnType<typeof getV1AppPricePointsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.appPricePoints.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppPricePointsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AppPricePointsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.appPricePoints.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AppPricePointsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.appPricePoints)[':id']['$get']>>,
) {
  return ['v1', '/v1/appPricePoints/:id', toValue(args)] as const
}

export function getV1AppPricePointsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.appPricePoints)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AppPricePointsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.appPricePoints[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AppPricePointsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.appPricePoints)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.appPricePoints)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.appPricePoints)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1AppPricePointsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.appPricePoints)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppPricePointsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AppPricePointsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.appPricePoints[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AppPricePointsIdTerritoryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.appPricePoints)[':id']['territory']['$get']>
  >,
) {
  return ['v1', '/v1/appPricePoints/:id/territory', toValue(args)] as const
}

export function getV1AppPricePointsIdTerritoryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.appPricePoints)[':id']['territory']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AppPricePointsIdTerritoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.appPricePoints[':id'].territory.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.appPricePoints)[':id']['territory']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.appPricePoints)[':id']['territory']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1AppPricePointsIdTerritoryQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.appPricePoints)[':id']['territory']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppPricePointsIdTerritoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AppPricePointsIdTerritoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.appPricePoints[':id'].territory.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AppPriceTiersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.appPriceTiers.$get>>,
) {
  return ['v1', '/v1/appPriceTiers', toValue(args)] as const
}

export function getV1AppPriceTiersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.appPriceTiers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AppPriceTiersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.appPriceTiers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AppPriceTiers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.appPriceTiers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.appPriceTiers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.appPriceTiers.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.appPriceTiers.$get>>>
            >
          >,
          ReturnType<typeof getV1AppPriceTiersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.appPriceTiers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppPriceTiersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AppPriceTiersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.appPriceTiers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AppPriceTiersIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.appPriceTiers)[':id']['$get']>>,
) {
  return ['v1', '/v1/appPriceTiers/:id', toValue(args)] as const
}

export function getV1AppPriceTiersIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.appPriceTiers)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AppPriceTiersIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.appPriceTiers[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AppPriceTiersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.appPriceTiers)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.appPriceTiers)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.appPriceTiers)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1AppPriceTiersIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.appPriceTiers)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppPriceTiersIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AppPriceTiersIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.appPriceTiers[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AppPriceTiersIdPricePointsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.appPriceTiers)[':id']['pricePoints']['$get']>
  >,
) {
  return ['v1', '/v1/appPriceTiers/:id/pricePoints', toValue(args)] as const
}

export function getV1AppPriceTiersIdPricePointsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.appPriceTiers)[':id']['pricePoints']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AppPriceTiersIdPricePointsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.appPriceTiers[':id'].pricePoints.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.appPriceTiers)[':id']['pricePoints']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.appPriceTiers)[':id']['pricePoints']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1AppPriceTiersIdPricePointsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.appPriceTiers)[':id']['pricePoints']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppPriceTiersIdPricePointsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AppPriceTiersIdPricePointsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.appPriceTiers[':id'].pricePoints.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AppPricesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.appPrices)[':id']['$get']>>,
) {
  return ['v1', '/v1/appPrices/:id', toValue(args)] as const
}

export function getV1AppPricesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.appPrices)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AppPricesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.appPrices[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AppPricesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.appPrices)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.appPrices)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.appPrices)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.appPrices)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getV1AppPricesIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.appPrices)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppPricesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AppPricesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.appPrices[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.appScreenshotSets)[':id']['$get']>>,
) {
  return ['v1', '/v1/appScreenshotSets/:id', toValue(args)] as const
}

export function getV1AppScreenshotSetsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.appScreenshotSets)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AppScreenshotSetsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.appScreenshotSets[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AppScreenshotSetsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.appScreenshotSets)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.appScreenshotSets)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.appScreenshotSets)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1AppScreenshotSetsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.appScreenshotSets)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppScreenshotSetsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AppScreenshotSetsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.appScreenshotSets[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.appScreenshotSets)[':id']['appScreenshots']['$get']>
  >,
) {
  return ['v1', '/v1/appScreenshotSets/:id/appScreenshots', toValue(args)] as const
}

export function getV1AppScreenshotSetsIdAppScreenshotsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.appScreenshotSets)[':id']['appScreenshots']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AppScreenshotSetsIdAppScreenshotsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.appScreenshotSets[':id'].appScreenshots.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.appScreenshotSets)[':id']['appScreenshots']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.appScreenshotSets)[':id']['appScreenshots']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1AppScreenshotSetsIdAppScreenshotsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.appScreenshotSets)[':id']['appScreenshots']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppScreenshotSetsIdAppScreenshotsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AppScreenshotSetsIdAppScreenshotsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.appScreenshotSets[':id'].appScreenshots.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AppScreenshotSetsIdRelationshipsAppScreenshotsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.appScreenshotSets)[':id']['relationships']['appScreenshots']['$get']
    >
  >,
) {
  return ['v1', '/v1/appScreenshotSets/:id/relationships/appScreenshots', toValue(args)] as const
}

export function getV1AppScreenshotSetsIdRelationshipsAppScreenshotsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.appScreenshotSets)[':id']['relationships']['appScreenshots']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AppScreenshotSetsIdRelationshipsAppScreenshotsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.appScreenshotSets[':id'].relationships.appScreenshots.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.appScreenshotSets)[':id']['relationships']['appScreenshots']['$get']
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
                    (typeof client.v1.appScreenshotSets)[':id']['relationships']['appScreenshots']['$get']
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
                    (typeof client.v1.appScreenshotSets)[':id']['relationships']['appScreenshots']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1AppScreenshotSetsIdRelationshipsAppScreenshotsQueryKey>
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
              (typeof client.v1.appScreenshotSets)[':id']['relationships']['appScreenshots']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppScreenshotSetsIdRelationshipsAppScreenshotsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AppScreenshotSetsIdRelationshipsAppScreenshotsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.appScreenshotSets[':id'].relationships.appScreenshots.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.appScreenshots)[':id']['$get']>>,
) {
  return ['v1', '/v1/appScreenshots/:id', toValue(args)] as const
}

export function getV1AppScreenshotsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.appScreenshots)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AppScreenshotsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.appScreenshots[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AppScreenshotsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.appScreenshots)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.appScreenshots)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.appScreenshots)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1AppScreenshotsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.appScreenshots)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppScreenshotsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AppScreenshotsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.appScreenshots[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.appStoreReviewAttachments)[':id']['$get']>
  >,
) {
  return ['v1', '/v1/appStoreReviewAttachments/:id', toValue(args)] as const
}

export function getV1AppStoreReviewAttachmentsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.appStoreReviewAttachments)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AppStoreReviewAttachmentsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.appStoreReviewAttachments[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.appStoreReviewAttachments)[':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.appStoreReviewAttachments)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1AppStoreReviewAttachmentsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.appStoreReviewAttachments)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppStoreReviewAttachmentsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AppStoreReviewAttachmentsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.appStoreReviewAttachments[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.v1.appStoreReviewAttachments)[':id']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.appStoreReviewAttachments)[':id']['$delete']>,
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.appStoreReviewDetails.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v1.appStoreReviewDetails.$post>,
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.appStoreReviewDetails)[':id']['$get']>>,
) {
  return ['v1', '/v1/appStoreReviewDetails/:id', toValue(args)] as const
}

export function getV1AppStoreReviewDetailsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.appStoreReviewDetails)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AppStoreReviewDetailsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.appStoreReviewDetails[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.appStoreReviewDetails)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.appStoreReviewDetails)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1AppStoreReviewDetailsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.appStoreReviewDetails)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppStoreReviewDetailsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AppStoreReviewDetailsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.appStoreReviewDetails[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.appStoreReviewDetails)[':id']['appStoreReviewAttachments']['$get']
    >
  >,
) {
  return ['v1', '/v1/appStoreReviewDetails/:id/appStoreReviewAttachments', toValue(args)] as const
}

export function getV1AppStoreReviewDetailsIdAppStoreReviewAttachmentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.appStoreReviewDetails)[':id']['appStoreReviewAttachments']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AppStoreReviewDetailsIdAppStoreReviewAttachmentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.appStoreReviewDetails[':id'].appStoreReviewAttachments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.appStoreReviewDetails)[':id']['appStoreReviewAttachments']['$get']
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
                    (typeof client.v1.appStoreReviewDetails)[':id']['appStoreReviewAttachments']['$get']
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
                    (typeof client.v1.appStoreReviewDetails)[':id']['appStoreReviewAttachments']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1AppStoreReviewDetailsIdAppStoreReviewAttachmentsQueryKey>
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
              (typeof client.v1.appStoreReviewDetails)[':id']['appStoreReviewAttachments']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppStoreReviewDetailsIdAppStoreReviewAttachmentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AppStoreReviewDetailsIdAppStoreReviewAttachmentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.appStoreReviewDetails[':id'].appStoreReviewAttachments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.appStoreVersionLocalizations)[':id']['$get']>
  >,
) {
  return ['v1', '/v1/appStoreVersionLocalizations/:id', toValue(args)] as const
}

export function getV1AppStoreVersionLocalizationsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.appStoreVersionLocalizations)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AppStoreVersionLocalizationsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.appStoreVersionLocalizations[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.appStoreVersionLocalizations)[':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.appStoreVersionLocalizations)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1AppStoreVersionLocalizationsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.appStoreVersionLocalizations)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppStoreVersionLocalizationsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AppStoreVersionLocalizationsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.appStoreVersionLocalizations[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.appStoreVersionLocalizations)[':id']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.appStoreVersionLocalizations)[':id']['$patch']>,
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.appStoreVersionLocalizations)[':id']['appPreviewSets']['$get']
    >
  >,
) {
  return ['v1', '/v1/appStoreVersionLocalizations/:id/appPreviewSets', toValue(args)] as const
}

export function getV1AppStoreVersionLocalizationsIdAppPreviewSetsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.appStoreVersionLocalizations)[':id']['appPreviewSets']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AppStoreVersionLocalizationsIdAppPreviewSetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.appStoreVersionLocalizations[':id'].appPreviewSets.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.appStoreVersionLocalizations)[':id']['appPreviewSets']['$get']
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
                    (typeof client.v1.appStoreVersionLocalizations)[':id']['appPreviewSets']['$get']
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
                    (typeof client.v1.appStoreVersionLocalizations)[':id']['appPreviewSets']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1AppStoreVersionLocalizationsIdAppPreviewSetsQueryKey>
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
              (typeof client.v1.appStoreVersionLocalizations)[':id']['appPreviewSets']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppStoreVersionLocalizationsIdAppPreviewSetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AppStoreVersionLocalizationsIdAppPreviewSetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.appStoreVersionLocalizations[':id'].appPreviewSets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AppStoreVersionLocalizationsIdAppScreenshotSetsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.appStoreVersionLocalizations)[':id']['appScreenshotSets']['$get']
    >
  >,
) {
  return ['v1', '/v1/appStoreVersionLocalizations/:id/appScreenshotSets', toValue(args)] as const
}

export function getV1AppStoreVersionLocalizationsIdAppScreenshotSetsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.appStoreVersionLocalizations)[':id']['appScreenshotSets']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AppStoreVersionLocalizationsIdAppScreenshotSetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.appStoreVersionLocalizations[':id'].appScreenshotSets.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.appStoreVersionLocalizations)[':id']['appScreenshotSets']['$get']
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
                    (typeof client.v1.appStoreVersionLocalizations)[':id']['appScreenshotSets']['$get']
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
                    (typeof client.v1.appStoreVersionLocalizations)[':id']['appScreenshotSets']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1AppStoreVersionLocalizationsIdAppScreenshotSetsQueryKey>
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
              (typeof client.v1.appStoreVersionLocalizations)[':id']['appScreenshotSets']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppStoreVersionLocalizationsIdAppScreenshotSetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AppStoreVersionLocalizationsIdAppScreenshotSetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.appStoreVersionLocalizations[':id'].appScreenshotSets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.appStoreVersionPhasedReleases)[':id']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.appStoreVersionPhasedReleases)[':id']['$patch']>,
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.v1.appStoreVersionSubmissions)[':id']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.appStoreVersionSubmissions)[':id']['$delete']>,
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.appStoreVersions)[':id']['$get']>>,
) {
  return ['v1', '/v1/appStoreVersions/:id', toValue(args)] as const
}

export function getV1AppStoreVersionsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.appStoreVersions)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AppStoreVersionsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.appStoreVersions[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AppStoreVersionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.appStoreVersions)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.appStoreVersions)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.appStoreVersions)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1AppStoreVersionsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.appStoreVersions)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppStoreVersionsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AppStoreVersionsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.appStoreVersions[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.appStoreVersions)[':id']['ageRatingDeclaration']['$get']>
  >,
) {
  return ['v1', '/v1/appStoreVersions/:id/ageRatingDeclaration', toValue(args)] as const
}

export function getV1AppStoreVersionsIdAgeRatingDeclarationQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.appStoreVersions)[':id']['ageRatingDeclaration']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AppStoreVersionsIdAgeRatingDeclarationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.appStoreVersions[':id'].ageRatingDeclaration.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.appStoreVersions)[':id']['ageRatingDeclaration']['$get']>
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
                    (typeof client.v1.appStoreVersions)[':id']['ageRatingDeclaration']['$get']
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
                    (typeof client.v1.appStoreVersions)[':id']['ageRatingDeclaration']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1AppStoreVersionsIdAgeRatingDeclarationQueryKey>
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
            ReturnType<(typeof client.v1.appStoreVersions)[':id']['ageRatingDeclaration']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppStoreVersionsIdAgeRatingDeclarationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AppStoreVersionsIdAgeRatingDeclarationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.appStoreVersions[':id'].ageRatingDeclaration.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AppStoreVersionsIdAppStoreReviewDetailQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.appStoreVersions)[':id']['appStoreReviewDetail']['$get']>
  >,
) {
  return ['v1', '/v1/appStoreVersions/:id/appStoreReviewDetail', toValue(args)] as const
}

export function getV1AppStoreVersionsIdAppStoreReviewDetailQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.appStoreVersions)[':id']['appStoreReviewDetail']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AppStoreVersionsIdAppStoreReviewDetailQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.appStoreVersions[':id'].appStoreReviewDetail.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.appStoreVersions)[':id']['appStoreReviewDetail']['$get']>
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
                    (typeof client.v1.appStoreVersions)[':id']['appStoreReviewDetail']['$get']
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
                    (typeof client.v1.appStoreVersions)[':id']['appStoreReviewDetail']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1AppStoreVersionsIdAppStoreReviewDetailQueryKey>
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
            ReturnType<(typeof client.v1.appStoreVersions)[':id']['appStoreReviewDetail']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppStoreVersionsIdAppStoreReviewDetailQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AppStoreVersionsIdAppStoreReviewDetailQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.appStoreVersions[':id'].appStoreReviewDetail.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AppStoreVersionsIdAppStoreVersionLocalizationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.appStoreVersions)[':id']['appStoreVersionLocalizations']['$get']
    >
  >,
) {
  return ['v1', '/v1/appStoreVersions/:id/appStoreVersionLocalizations', toValue(args)] as const
}

export function getV1AppStoreVersionsIdAppStoreVersionLocalizationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.appStoreVersions)[':id']['appStoreVersionLocalizations']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AppStoreVersionsIdAppStoreVersionLocalizationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.appStoreVersions[':id'].appStoreVersionLocalizations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.appStoreVersions)[':id']['appStoreVersionLocalizations']['$get']
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
                    (typeof client.v1.appStoreVersions)[':id']['appStoreVersionLocalizations']['$get']
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
                    (typeof client.v1.appStoreVersions)[':id']['appStoreVersionLocalizations']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1AppStoreVersionsIdAppStoreVersionLocalizationsQueryKey>
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
              (typeof client.v1.appStoreVersions)[':id']['appStoreVersionLocalizations']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppStoreVersionsIdAppStoreVersionLocalizationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AppStoreVersionsIdAppStoreVersionLocalizationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.appStoreVersions[':id'].appStoreVersionLocalizations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AppStoreVersionsIdAppStoreVersionPhasedReleaseQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.appStoreVersions)[':id']['appStoreVersionPhasedRelease']['$get']
    >
  >,
) {
  return ['v1', '/v1/appStoreVersions/:id/appStoreVersionPhasedRelease', toValue(args)] as const
}

export function getV1AppStoreVersionsIdAppStoreVersionPhasedReleaseQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.appStoreVersions)[':id']['appStoreVersionPhasedRelease']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AppStoreVersionsIdAppStoreVersionPhasedReleaseQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.appStoreVersions[':id'].appStoreVersionPhasedRelease.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.appStoreVersions)[':id']['appStoreVersionPhasedRelease']['$get']
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
                    (typeof client.v1.appStoreVersions)[':id']['appStoreVersionPhasedRelease']['$get']
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
                    (typeof client.v1.appStoreVersions)[':id']['appStoreVersionPhasedRelease']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1AppStoreVersionsIdAppStoreVersionPhasedReleaseQueryKey>
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
              (typeof client.v1.appStoreVersions)[':id']['appStoreVersionPhasedRelease']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppStoreVersionsIdAppStoreVersionPhasedReleaseQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AppStoreVersionsIdAppStoreVersionPhasedReleaseQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.appStoreVersions[':id'].appStoreVersionPhasedRelease.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AppStoreVersionsIdAppStoreVersionSubmissionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.appStoreVersions)[':id']['appStoreVersionSubmission']['$get']
    >
  >,
) {
  return ['v1', '/v1/appStoreVersions/:id/appStoreVersionSubmission', toValue(args)] as const
}

export function getV1AppStoreVersionsIdAppStoreVersionSubmissionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.appStoreVersions)[':id']['appStoreVersionSubmission']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AppStoreVersionsIdAppStoreVersionSubmissionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.appStoreVersions[':id'].appStoreVersionSubmission.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.appStoreVersions)[':id']['appStoreVersionSubmission']['$get']
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
                    (typeof client.v1.appStoreVersions)[':id']['appStoreVersionSubmission']['$get']
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
                    (typeof client.v1.appStoreVersions)[':id']['appStoreVersionSubmission']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1AppStoreVersionsIdAppStoreVersionSubmissionQueryKey>
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
              (typeof client.v1.appStoreVersions)[':id']['appStoreVersionSubmission']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppStoreVersionsIdAppStoreVersionSubmissionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AppStoreVersionsIdAppStoreVersionSubmissionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.appStoreVersions[':id'].appStoreVersionSubmission.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AppStoreVersionsIdBuildQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.appStoreVersions)[':id']['build']['$get']>
  >,
) {
  return ['v1', '/v1/appStoreVersions/:id/build', toValue(args)] as const
}

export function getV1AppStoreVersionsIdBuildQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.appStoreVersions)[':id']['build']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AppStoreVersionsIdBuildQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.appStoreVersions[':id'].build.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.appStoreVersions)[':id']['build']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.appStoreVersions)[':id']['build']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1AppStoreVersionsIdBuildQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.appStoreVersions)[':id']['build']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppStoreVersionsIdBuildQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AppStoreVersionsIdBuildQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.appStoreVersions[':id'].build.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AppStoreVersionsIdIdfaDeclarationQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.appStoreVersions)[':id']['idfaDeclaration']['$get']>
  >,
) {
  return ['v1', '/v1/appStoreVersions/:id/idfaDeclaration', toValue(args)] as const
}

export function getV1AppStoreVersionsIdIdfaDeclarationQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.appStoreVersions)[':id']['idfaDeclaration']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AppStoreVersionsIdIdfaDeclarationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.appStoreVersions[':id'].idfaDeclaration.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.appStoreVersions)[':id']['idfaDeclaration']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.appStoreVersions)[':id']['idfaDeclaration']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1AppStoreVersionsIdIdfaDeclarationQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.appStoreVersions)[':id']['idfaDeclaration']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppStoreVersionsIdIdfaDeclarationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AppStoreVersionsIdIdfaDeclarationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.appStoreVersions[':id'].idfaDeclaration.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AppStoreVersionsIdRelationshipsBuildQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.appStoreVersions)[':id']['relationships']['build']['$get']>
  >,
) {
  return ['v1', '/v1/appStoreVersions/:id/relationships/build', toValue(args)] as const
}

export function getV1AppStoreVersionsIdRelationshipsBuildQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.appStoreVersions)[':id']['relationships']['build']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AppStoreVersionsIdRelationshipsBuildQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.appStoreVersions[':id'].relationships.build.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.appStoreVersions)[':id']['relationships']['build']['$get']>
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
                    (typeof client.v1.appStoreVersions)[':id']['relationships']['build']['$get']
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
                    (typeof client.v1.appStoreVersions)[':id']['relationships']['build']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1AppStoreVersionsIdRelationshipsBuildQueryKey>
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
            ReturnType<(typeof client.v1.appStoreVersions)[':id']['relationships']['build']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppStoreVersionsIdRelationshipsBuildQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AppStoreVersionsIdRelationshipsBuildQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.appStoreVersions[':id'].relationships.build.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.appStoreVersions)[':id']['routingAppCoverage']['$get']>
  >,
) {
  return ['v1', '/v1/appStoreVersions/:id/routingAppCoverage', toValue(args)] as const
}

export function getV1AppStoreVersionsIdRoutingAppCoverageQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.appStoreVersions)[':id']['routingAppCoverage']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AppStoreVersionsIdRoutingAppCoverageQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.appStoreVersions[':id'].routingAppCoverage.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.appStoreVersions)[':id']['routingAppCoverage']['$get']>
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
                    (typeof client.v1.appStoreVersions)[':id']['routingAppCoverage']['$get']
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
                    (typeof client.v1.appStoreVersions)[':id']['routingAppCoverage']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1AppStoreVersionsIdRoutingAppCoverageQueryKey>
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
            ReturnType<(typeof client.v1.appStoreVersions)[':id']['routingAppCoverage']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppStoreVersionsIdRoutingAppCoverageQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AppStoreVersionsIdRoutingAppCoverageQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.appStoreVersions[':id'].routingAppCoverage.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AppsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.apps.$get>>,
) {
  return ['v1', '/v1/apps', toValue(args)] as const
}

export function getV1AppsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.apps.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AppsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.apps.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Apps<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.apps.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.apps.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.apps.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.apps.$get>>>>
          >,
          ReturnType<typeof getV1AppsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.apps.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1AppsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AppsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.apps.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AppsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.apps)[':id']['$get']>>,
) {
  return ['v1', '/v1/apps/:id', toValue(args)] as const
}

export function getV1AppsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.apps)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AppsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.apps[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AppsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.apps)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.apps)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.apps)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.apps)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getV1AppsIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.apps)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AppsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.apps[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.apps)[':id']['appInfos']['$get']>>,
) {
  return ['v1', '/v1/apps/:id/appInfos', toValue(args)] as const
}

export function getV1AppsIdAppInfosQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.apps)[':id']['appInfos']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AppsIdAppInfosQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.apps[':id'].appInfos.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AppsIdAppInfos<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.apps)[':id']['appInfos']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.apps)[':id']['appInfos']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.apps)[':id']['appInfos']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1AppsIdAppInfosQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.apps)[':id']['appInfos']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppsIdAppInfosQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AppsIdAppInfosQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.apps[':id'].appInfos.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AppsIdAppStoreVersionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.apps)[':id']['appStoreVersions']['$get']>
  >,
) {
  return ['v1', '/v1/apps/:id/appStoreVersions', toValue(args)] as const
}

export function getV1AppsIdAppStoreVersionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.apps)[':id']['appStoreVersions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AppsIdAppStoreVersionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.apps[':id'].appStoreVersions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.apps)[':id']['appStoreVersions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.apps)[':id']['appStoreVersions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1AppsIdAppStoreVersionsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.apps)[':id']['appStoreVersions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppsIdAppStoreVersionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AppsIdAppStoreVersionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.apps[':id'].appStoreVersions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AppsIdAvailableTerritoriesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.apps)[':id']['availableTerritories']['$get']>
  >,
) {
  return ['v1', '/v1/apps/:id/availableTerritories', toValue(args)] as const
}

export function getV1AppsIdAvailableTerritoriesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.apps)[':id']['availableTerritories']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AppsIdAvailableTerritoriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.apps[':id'].availableTerritories.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.apps)[':id']['availableTerritories']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.apps)[':id']['availableTerritories']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1AppsIdAvailableTerritoriesQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.apps)[':id']['availableTerritories']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppsIdAvailableTerritoriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AppsIdAvailableTerritoriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.apps[':id'].availableTerritories.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AppsIdBetaAppLocalizationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.apps)[':id']['betaAppLocalizations']['$get']>
  >,
) {
  return ['v1', '/v1/apps/:id/betaAppLocalizations', toValue(args)] as const
}

export function getV1AppsIdBetaAppLocalizationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.apps)[':id']['betaAppLocalizations']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AppsIdBetaAppLocalizationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.apps[':id'].betaAppLocalizations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.apps)[':id']['betaAppLocalizations']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.apps)[':id']['betaAppLocalizations']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1AppsIdBetaAppLocalizationsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.apps)[':id']['betaAppLocalizations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppsIdBetaAppLocalizationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AppsIdBetaAppLocalizationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.apps[':id'].betaAppLocalizations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AppsIdBetaAppReviewDetailQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.apps)[':id']['betaAppReviewDetail']['$get']>
  >,
) {
  return ['v1', '/v1/apps/:id/betaAppReviewDetail', toValue(args)] as const
}

export function getV1AppsIdBetaAppReviewDetailQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.apps)[':id']['betaAppReviewDetail']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AppsIdBetaAppReviewDetailQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.apps[':id'].betaAppReviewDetail.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.apps)[':id']['betaAppReviewDetail']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.apps)[':id']['betaAppReviewDetail']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1AppsIdBetaAppReviewDetailQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.apps)[':id']['betaAppReviewDetail']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppsIdBetaAppReviewDetailQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AppsIdBetaAppReviewDetailQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.apps[':id'].betaAppReviewDetail.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AppsIdBetaGroupsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.apps)[':id']['betaGroups']['$get']>>,
) {
  return ['v1', '/v1/apps/:id/betaGroups', toValue(args)] as const
}

export function getV1AppsIdBetaGroupsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.apps)[':id']['betaGroups']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AppsIdBetaGroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.apps[':id'].betaGroups.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.apps)[':id']['betaGroups']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.apps)[':id']['betaGroups']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1AppsIdBetaGroupsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.apps)[':id']['betaGroups']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppsIdBetaGroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AppsIdBetaGroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.apps[':id'].betaGroups.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AppsIdBetaLicenseAgreementQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.apps)[':id']['betaLicenseAgreement']['$get']>
  >,
) {
  return ['v1', '/v1/apps/:id/betaLicenseAgreement', toValue(args)] as const
}

export function getV1AppsIdBetaLicenseAgreementQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.apps)[':id']['betaLicenseAgreement']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AppsIdBetaLicenseAgreementQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.apps[':id'].betaLicenseAgreement.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.apps)[':id']['betaLicenseAgreement']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.apps)[':id']['betaLicenseAgreement']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1AppsIdBetaLicenseAgreementQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.apps)[':id']['betaLicenseAgreement']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppsIdBetaLicenseAgreementQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AppsIdBetaLicenseAgreementQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.apps[':id'].betaLicenseAgreement.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AppsIdBuildsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.apps)[':id']['builds']['$get']>>,
) {
  return ['v1', '/v1/apps/:id/builds', toValue(args)] as const
}

export function getV1AppsIdBuildsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.apps)[':id']['builds']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AppsIdBuildsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.apps[':id'].builds.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AppsIdBuilds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.apps)[':id']['builds']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.apps)[':id']['builds']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.apps)[':id']['builds']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1AppsIdBuildsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.apps)[':id']['builds']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppsIdBuildsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AppsIdBuildsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.apps[':id'].builds.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AppsIdEndUserLicenseAgreementQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.apps)[':id']['endUserLicenseAgreement']['$get']>
  >,
) {
  return ['v1', '/v1/apps/:id/endUserLicenseAgreement', toValue(args)] as const
}

export function getV1AppsIdEndUserLicenseAgreementQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.apps)[':id']['endUserLicenseAgreement']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AppsIdEndUserLicenseAgreementQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.apps[':id'].endUserLicenseAgreement.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.apps)[':id']['endUserLicenseAgreement']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.apps)[':id']['endUserLicenseAgreement']['$get']>
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
                  ReturnType<(typeof client.v1.apps)[':id']['endUserLicenseAgreement']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1AppsIdEndUserLicenseAgreementQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.apps)[':id']['endUserLicenseAgreement']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppsIdEndUserLicenseAgreementQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AppsIdEndUserLicenseAgreementQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.apps[':id'].endUserLicenseAgreement.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AppsIdGameCenterEnabledVersionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.apps)[':id']['gameCenterEnabledVersions']['$get']>
  >,
) {
  return ['v1', '/v1/apps/:id/gameCenterEnabledVersions', toValue(args)] as const
}

export function getV1AppsIdGameCenterEnabledVersionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.apps)[':id']['gameCenterEnabledVersions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AppsIdGameCenterEnabledVersionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.apps[':id'].gameCenterEnabledVersions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.apps)[':id']['gameCenterEnabledVersions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.apps)[':id']['gameCenterEnabledVersions']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1AppsIdGameCenterEnabledVersionsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.apps)[':id']['gameCenterEnabledVersions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppsIdGameCenterEnabledVersionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AppsIdGameCenterEnabledVersionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.apps[':id'].gameCenterEnabledVersions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AppsIdInAppPurchasesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.apps)[':id']['inAppPurchases']['$get']>
  >,
) {
  return ['v1', '/v1/apps/:id/inAppPurchases', toValue(args)] as const
}

export function getV1AppsIdInAppPurchasesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.apps)[':id']['inAppPurchases']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AppsIdInAppPurchasesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.apps[':id'].inAppPurchases.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.apps)[':id']['inAppPurchases']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.apps)[':id']['inAppPurchases']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1AppsIdInAppPurchasesQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.apps)[':id']['inAppPurchases']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppsIdInAppPurchasesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AppsIdInAppPurchasesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.apps[':id'].inAppPurchases.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AppsIdPerfPowerMetricsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.apps)[':id']['perfPowerMetrics']['$get']>
  >,
) {
  return ['v1', '/v1/apps/:id/perfPowerMetrics', toValue(args)] as const
}

export function getV1AppsIdPerfPowerMetricsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.apps)[':id']['perfPowerMetrics']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AppsIdPerfPowerMetricsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.apps[':id'].perfPowerMetrics.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.apps)[':id']['perfPowerMetrics']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.apps)[':id']['perfPowerMetrics']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1AppsIdPerfPowerMetricsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.apps)[':id']['perfPowerMetrics']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppsIdPerfPowerMetricsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AppsIdPerfPowerMetricsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.apps[':id'].perfPowerMetrics.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AppsIdPreOrderQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.apps)[':id']['preOrder']['$get']>>,
) {
  return ['v1', '/v1/apps/:id/preOrder', toValue(args)] as const
}

export function getV1AppsIdPreOrderQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.apps)[':id']['preOrder']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AppsIdPreOrderQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.apps[':id'].preOrder.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AppsIdPreOrder<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.apps)[':id']['preOrder']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.apps)[':id']['preOrder']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.apps)[':id']['preOrder']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1AppsIdPreOrderQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.apps)[':id']['preOrder']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppsIdPreOrderQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AppsIdPreOrderQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.apps[':id'].preOrder.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AppsIdPreReleaseVersionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.apps)[':id']['preReleaseVersions']['$get']>
  >,
) {
  return ['v1', '/v1/apps/:id/preReleaseVersions', toValue(args)] as const
}

export function getV1AppsIdPreReleaseVersionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.apps)[':id']['preReleaseVersions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AppsIdPreReleaseVersionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.apps[':id'].preReleaseVersions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.apps)[':id']['preReleaseVersions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.apps)[':id']['preReleaseVersions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1AppsIdPreReleaseVersionsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.apps)[':id']['preReleaseVersions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppsIdPreReleaseVersionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AppsIdPreReleaseVersionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.apps[':id'].preReleaseVersions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AppsIdPricesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.apps)[':id']['prices']['$get']>>,
) {
  return ['v1', '/v1/apps/:id/prices', toValue(args)] as const
}

export function getV1AppsIdPricesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.apps)[':id']['prices']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AppsIdPricesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.apps[':id'].prices.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AppsIdPrices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.apps)[':id']['prices']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.apps)[':id']['prices']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.apps)[':id']['prices']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1AppsIdPricesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.apps)[':id']['prices']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppsIdPricesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AppsIdPricesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.apps[':id'].prices.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
          InferRequestType<
            (typeof client.v1.apps)[':id']['relationships']['betaTesters']['$delete']
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.betaAppLocalizations.$get>>,
) {
  return ['v1', '/v1/betaAppLocalizations', toValue(args)] as const
}

export function getV1BetaAppLocalizationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.betaAppLocalizations.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1BetaAppLocalizationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.betaAppLocalizations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1BetaAppLocalizations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.betaAppLocalizations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.betaAppLocalizations.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.betaAppLocalizations.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.betaAppLocalizations.$get>>>
            >
          >,
          ReturnType<typeof getV1BetaAppLocalizationsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.betaAppLocalizations.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BetaAppLocalizationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1BetaAppLocalizationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.betaAppLocalizations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.betaAppLocalizations)[':id']['$get']>>,
) {
  return ['v1', '/v1/betaAppLocalizations/:id', toValue(args)] as const
}

export function getV1BetaAppLocalizationsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.betaAppLocalizations)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1BetaAppLocalizationsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.betaAppLocalizations[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.betaAppLocalizations)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.betaAppLocalizations)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1BetaAppLocalizationsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.betaAppLocalizations)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BetaAppLocalizationsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1BetaAppLocalizationsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.betaAppLocalizations[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.betaAppLocalizations)[':id']['app']['$get']>
  >,
) {
  return ['v1', '/v1/betaAppLocalizations/:id/app', toValue(args)] as const
}

export function getV1BetaAppLocalizationsIdAppQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.betaAppLocalizations)[':id']['app']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1BetaAppLocalizationsIdAppQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.betaAppLocalizations[':id'].app.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.betaAppLocalizations)[':id']['app']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.betaAppLocalizations)[':id']['app']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1BetaAppLocalizationsIdAppQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.betaAppLocalizations)[':id']['app']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BetaAppLocalizationsIdAppQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1BetaAppLocalizationsIdAppQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.betaAppLocalizations[':id'].app.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1BetaAppReviewDetailsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.betaAppReviewDetails.$get>>,
) {
  return ['v1', '/v1/betaAppReviewDetails', toValue(args)] as const
}

export function getV1BetaAppReviewDetailsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.betaAppReviewDetails.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1BetaAppReviewDetailsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.betaAppReviewDetails.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1BetaAppReviewDetails<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.betaAppReviewDetails.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.betaAppReviewDetails.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.betaAppReviewDetails.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.betaAppReviewDetails.$get>>>
            >
          >,
          ReturnType<typeof getV1BetaAppReviewDetailsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.betaAppReviewDetails.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BetaAppReviewDetailsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1BetaAppReviewDetailsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.betaAppReviewDetails.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1BetaAppReviewDetailsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.betaAppReviewDetails)[':id']['$get']>>,
) {
  return ['v1', '/v1/betaAppReviewDetails/:id', toValue(args)] as const
}

export function getV1BetaAppReviewDetailsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.betaAppReviewDetails)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1BetaAppReviewDetailsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.betaAppReviewDetails[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.betaAppReviewDetails)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.betaAppReviewDetails)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1BetaAppReviewDetailsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.betaAppReviewDetails)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BetaAppReviewDetailsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1BetaAppReviewDetailsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.betaAppReviewDetails[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.betaAppReviewDetails)[':id']['app']['$get']>
  >,
) {
  return ['v1', '/v1/betaAppReviewDetails/:id/app', toValue(args)] as const
}

export function getV1BetaAppReviewDetailsIdAppQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.betaAppReviewDetails)[':id']['app']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1BetaAppReviewDetailsIdAppQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.betaAppReviewDetails[':id'].app.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.betaAppReviewDetails)[':id']['app']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.betaAppReviewDetails)[':id']['app']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1BetaAppReviewDetailsIdAppQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.betaAppReviewDetails)[':id']['app']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BetaAppReviewDetailsIdAppQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1BetaAppReviewDetailsIdAppQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.betaAppReviewDetails[':id'].app.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1BetaAppReviewSubmissionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.betaAppReviewSubmissions.$get>>,
) {
  return ['v1', '/v1/betaAppReviewSubmissions', toValue(args)] as const
}

export function getV1BetaAppReviewSubmissionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.betaAppReviewSubmissions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1BetaAppReviewSubmissionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.betaAppReviewSubmissions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1BetaAppReviewSubmissions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.betaAppReviewSubmissions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.betaAppReviewSubmissions.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.betaAppReviewSubmissions.$get>>
              >
            >
          >,
          ReturnType<typeof getV1BetaAppReviewSubmissionsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.betaAppReviewSubmissions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BetaAppReviewSubmissionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1BetaAppReviewSubmissionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.betaAppReviewSubmissions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.betaAppReviewSubmissions)[':id']['$get']>
  >,
) {
  return ['v1', '/v1/betaAppReviewSubmissions/:id', toValue(args)] as const
}

export function getV1BetaAppReviewSubmissionsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.betaAppReviewSubmissions)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1BetaAppReviewSubmissionsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.betaAppReviewSubmissions[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.betaAppReviewSubmissions)[':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.betaAppReviewSubmissions)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1BetaAppReviewSubmissionsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.betaAppReviewSubmissions)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BetaAppReviewSubmissionsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1BetaAppReviewSubmissionsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.betaAppReviewSubmissions[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1BetaAppReviewSubmissionsIdBuildQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.betaAppReviewSubmissions)[':id']['build']['$get']>
  >,
) {
  return ['v1', '/v1/betaAppReviewSubmissions/:id/build', toValue(args)] as const
}

export function getV1BetaAppReviewSubmissionsIdBuildQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.betaAppReviewSubmissions)[':id']['build']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1BetaAppReviewSubmissionsIdBuildQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.betaAppReviewSubmissions[':id'].build.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.betaAppReviewSubmissions)[':id']['build']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.betaAppReviewSubmissions)[':id']['build']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1BetaAppReviewSubmissionsIdBuildQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.betaAppReviewSubmissions)[':id']['build']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BetaAppReviewSubmissionsIdBuildQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1BetaAppReviewSubmissionsIdBuildQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.betaAppReviewSubmissions[':id'].build.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1BetaBuildLocalizationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.betaBuildLocalizations.$get>>,
) {
  return ['v1', '/v1/betaBuildLocalizations', toValue(args)] as const
}

export function getV1BetaBuildLocalizationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.betaBuildLocalizations.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1BetaBuildLocalizationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.betaBuildLocalizations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1BetaBuildLocalizations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.betaBuildLocalizations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.betaBuildLocalizations.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.betaBuildLocalizations.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.betaBuildLocalizations.$get>>
              >
            >
          >,
          ReturnType<typeof getV1BetaBuildLocalizationsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.betaBuildLocalizations.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BetaBuildLocalizationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1BetaBuildLocalizationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.betaBuildLocalizations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.betaBuildLocalizations.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v1.betaBuildLocalizations.$post>,
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.betaBuildLocalizations)[':id']['$get']>
  >,
) {
  return ['v1', '/v1/betaBuildLocalizations/:id', toValue(args)] as const
}

export function getV1BetaBuildLocalizationsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.betaBuildLocalizations)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1BetaBuildLocalizationsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.betaBuildLocalizations[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.betaBuildLocalizations)[':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.betaBuildLocalizations)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1BetaBuildLocalizationsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.betaBuildLocalizations)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BetaBuildLocalizationsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1BetaBuildLocalizationsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.betaBuildLocalizations[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.betaBuildLocalizations)[':id']['build']['$get']>
  >,
) {
  return ['v1', '/v1/betaBuildLocalizations/:id/build', toValue(args)] as const
}

export function getV1BetaBuildLocalizationsIdBuildQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.betaBuildLocalizations)[':id']['build']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1BetaBuildLocalizationsIdBuildQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.betaBuildLocalizations[':id'].build.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.betaBuildLocalizations)[':id']['build']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.betaBuildLocalizations)[':id']['build']['$get']>
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
                  ReturnType<(typeof client.v1.betaBuildLocalizations)[':id']['build']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1BetaBuildLocalizationsIdBuildQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.betaBuildLocalizations)[':id']['build']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BetaBuildLocalizationsIdBuildQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1BetaBuildLocalizationsIdBuildQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.betaBuildLocalizations[':id'].build.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1BetaGroupsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.betaGroups.$get>>,
) {
  return ['v1', '/v1/betaGroups', toValue(args)] as const
}

export function getV1BetaGroupsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.betaGroups.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1BetaGroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.betaGroups.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1BetaGroups<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.betaGroups.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.betaGroups.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.betaGroups.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.betaGroups.$get>>>>
          >,
          ReturnType<typeof getV1BetaGroupsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.betaGroups.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1BetaGroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1BetaGroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.betaGroups.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.betaGroups.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.betaGroups.$post>,
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.betaGroups)[':id']['$get']>>,
) {
  return ['v1', '/v1/betaGroups/:id', toValue(args)] as const
}

export function getV1BetaGroupsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.betaGroups)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1BetaGroupsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.betaGroups[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1BetaGroupsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.betaGroups)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.betaGroups)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.betaGroups)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.betaGroups)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1BetaGroupsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.betaGroups)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BetaGroupsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1BetaGroupsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.betaGroups[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.betaGroups)[':id']['app']['$get']>>,
) {
  return ['v1', '/v1/betaGroups/:id/app', toValue(args)] as const
}

export function getV1BetaGroupsIdAppQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.betaGroups)[':id']['app']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1BetaGroupsIdAppQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.betaGroups[':id'].app.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1BetaGroupsIdApp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.betaGroups)[':id']['app']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.betaGroups)[':id']['app']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.betaGroups)[':id']['app']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1BetaGroupsIdAppQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.betaGroups)[':id']['app']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BetaGroupsIdAppQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1BetaGroupsIdAppQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.betaGroups[':id'].app.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1BetaGroupsIdBetaTestersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.betaGroups)[':id']['betaTesters']['$get']>
  >,
) {
  return ['v1', '/v1/betaGroups/:id/betaTesters', toValue(args)] as const
}

export function getV1BetaGroupsIdBetaTestersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.betaGroups)[':id']['betaTesters']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1BetaGroupsIdBetaTestersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.betaGroups[':id'].betaTesters.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.betaGroups)[':id']['betaTesters']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.betaGroups)[':id']['betaTesters']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1BetaGroupsIdBetaTestersQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.betaGroups)[':id']['betaTesters']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BetaGroupsIdBetaTestersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1BetaGroupsIdBetaTestersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.betaGroups[':id'].betaTesters.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1BetaGroupsIdBuildsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.betaGroups)[':id']['builds']['$get']>>,
) {
  return ['v1', '/v1/betaGroups/:id/builds', toValue(args)] as const
}

export function getV1BetaGroupsIdBuildsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.betaGroups)[':id']['builds']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1BetaGroupsIdBuildsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.betaGroups[':id'].builds.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.betaGroups)[':id']['builds']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.betaGroups)[':id']['builds']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1BetaGroupsIdBuildsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.betaGroups)[':id']['builds']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BetaGroupsIdBuildsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1BetaGroupsIdBuildsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.betaGroups[':id'].builds.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1BetaGroupsIdRelationshipsBetaTestersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.betaGroups)[':id']['relationships']['betaTesters']['$get']>
  >,
) {
  return ['v1', '/v1/betaGroups/:id/relationships/betaTesters', toValue(args)] as const
}

export function getV1BetaGroupsIdRelationshipsBetaTestersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.betaGroups)[':id']['relationships']['betaTesters']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1BetaGroupsIdRelationshipsBetaTestersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.betaGroups[':id'].relationships.betaTesters.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.betaGroups)[':id']['relationships']['betaTesters']['$get']>
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
                    (typeof client.v1.betaGroups)[':id']['relationships']['betaTesters']['$get']
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
                    (typeof client.v1.betaGroups)[':id']['relationships']['betaTesters']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1BetaGroupsIdRelationshipsBetaTestersQueryKey>
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
            ReturnType<(typeof client.v1.betaGroups)[':id']['relationships']['betaTesters']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BetaGroupsIdRelationshipsBetaTestersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1BetaGroupsIdRelationshipsBetaTestersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.betaGroups[':id'].relationships.betaTesters.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.betaGroups)[':id']['relationships']['builds']['$get']>
  >,
) {
  return ['v1', '/v1/betaGroups/:id/relationships/builds', toValue(args)] as const
}

export function getV1BetaGroupsIdRelationshipsBuildsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.betaGroups)[':id']['relationships']['builds']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1BetaGroupsIdRelationshipsBuildsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.betaGroups[':id'].relationships.builds.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.betaGroups)[':id']['relationships']['builds']['$get']>
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
                    (typeof client.v1.betaGroups)[':id']['relationships']['builds']['$get']
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
                    (typeof client.v1.betaGroups)[':id']['relationships']['builds']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1BetaGroupsIdRelationshipsBuildsQueryKey>
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
            ReturnType<(typeof client.v1.betaGroups)[':id']['relationships']['builds']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BetaGroupsIdRelationshipsBuildsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1BetaGroupsIdRelationshipsBuildsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.betaGroups[':id'].relationships.builds.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
          InferRequestType<
            (typeof client.v1.betaGroups)[':id']['relationships']['builds']['$post']
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.betaLicenseAgreements.$get>>,
) {
  return ['v1', '/v1/betaLicenseAgreements', toValue(args)] as const
}

export function getV1BetaLicenseAgreementsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.betaLicenseAgreements.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1BetaLicenseAgreementsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.betaLicenseAgreements.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1BetaLicenseAgreements<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.betaLicenseAgreements.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.betaLicenseAgreements.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.betaLicenseAgreements.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.betaLicenseAgreements.$get>>>
            >
          >,
          ReturnType<typeof getV1BetaLicenseAgreementsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.betaLicenseAgreements.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BetaLicenseAgreementsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1BetaLicenseAgreementsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.betaLicenseAgreements.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1BetaLicenseAgreementsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.betaLicenseAgreements)[':id']['$get']>>,
) {
  return ['v1', '/v1/betaLicenseAgreements/:id', toValue(args)] as const
}

export function getV1BetaLicenseAgreementsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.betaLicenseAgreements)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1BetaLicenseAgreementsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.betaLicenseAgreements[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.betaLicenseAgreements)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.betaLicenseAgreements)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1BetaLicenseAgreementsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.betaLicenseAgreements)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BetaLicenseAgreementsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1BetaLicenseAgreementsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.betaLicenseAgreements[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.betaLicenseAgreements)[':id']['app']['$get']>
  >,
) {
  return ['v1', '/v1/betaLicenseAgreements/:id/app', toValue(args)] as const
}

export function getV1BetaLicenseAgreementsIdAppQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.betaLicenseAgreements)[':id']['app']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1BetaLicenseAgreementsIdAppQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.betaLicenseAgreements[':id'].app.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.betaLicenseAgreements)[':id']['app']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.betaLicenseAgreements)[':id']['app']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1BetaLicenseAgreementsIdAppQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.betaLicenseAgreements)[':id']['app']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BetaLicenseAgreementsIdAppQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1BetaLicenseAgreementsIdAppQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.betaLicenseAgreements[':id'].app.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.betaTesterInvitations.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v1.betaTesterInvitations.$post>,
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.betaTesters.$get>>,
) {
  return ['v1', '/v1/betaTesters', toValue(args)] as const
}

export function getV1BetaTestersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.betaTesters.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1BetaTestersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.betaTesters.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1BetaTesters<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.betaTesters.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.betaTesters.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.betaTesters.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.betaTesters.$get>>>>
          >,
          ReturnType<typeof getV1BetaTestersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.betaTesters.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1BetaTestersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1BetaTestersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.betaTesters.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.betaTesters.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.betaTesters.$post>,
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.betaTesters)[':id']['$get']>>,
) {
  return ['v1', '/v1/betaTesters/:id', toValue(args)] as const
}

export function getV1BetaTestersIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.betaTesters)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1BetaTestersIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.betaTesters[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1BetaTestersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.betaTesters)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.betaTesters)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.betaTesters)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.betaTesters)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1BetaTestersIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.betaTesters)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BetaTestersIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1BetaTestersIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.betaTesters[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.betaTesters)[':id']['apps']['$get']>>,
) {
  return ['v1', '/v1/betaTesters/:id/apps', toValue(args)] as const
}

export function getV1BetaTestersIdAppsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.betaTesters)[':id']['apps']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1BetaTestersIdAppsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.betaTesters[':id'].apps.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.betaTesters)[':id']['apps']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.betaTesters)[':id']['apps']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1BetaTestersIdAppsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.betaTesters)[':id']['apps']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BetaTestersIdAppsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1BetaTestersIdAppsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.betaTesters[':id'].apps.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1BetaTestersIdBetaGroupsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.betaTesters)[':id']['betaGroups']['$get']>
  >,
) {
  return ['v1', '/v1/betaTesters/:id/betaGroups', toValue(args)] as const
}

export function getV1BetaTestersIdBetaGroupsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.betaTesters)[':id']['betaGroups']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1BetaTestersIdBetaGroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.betaTesters[':id'].betaGroups.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.betaTesters)[':id']['betaGroups']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.betaTesters)[':id']['betaGroups']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1BetaTestersIdBetaGroupsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.betaTesters)[':id']['betaGroups']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BetaTestersIdBetaGroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1BetaTestersIdBetaGroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.betaTesters[':id'].betaGroups.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1BetaTestersIdBuildsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.betaTesters)[':id']['builds']['$get']>>,
) {
  return ['v1', '/v1/betaTesters/:id/builds', toValue(args)] as const
}

export function getV1BetaTestersIdBuildsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.betaTesters)[':id']['builds']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1BetaTestersIdBuildsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.betaTesters[':id'].builds.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.betaTesters)[':id']['builds']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.betaTesters)[':id']['builds']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1BetaTestersIdBuildsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.betaTesters)[':id']['builds']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BetaTestersIdBuildsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1BetaTestersIdBuildsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.betaTesters[':id'].builds.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1BetaTestersIdRelationshipsAppsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.betaTesters)[':id']['relationships']['apps']['$get']>
  >,
) {
  return ['v1', '/v1/betaTesters/:id/relationships/apps', toValue(args)] as const
}

export function getV1BetaTestersIdRelationshipsAppsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.betaTesters)[':id']['relationships']['apps']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1BetaTestersIdRelationshipsAppsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.betaTesters[':id'].relationships.apps.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.betaTesters)[':id']['relationships']['apps']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.betaTesters)[':id']['relationships']['apps']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1BetaTestersIdRelationshipsAppsQueryKey>
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
            ReturnType<(typeof client.v1.betaTesters)[':id']['relationships']['apps']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BetaTestersIdRelationshipsAppsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1BetaTestersIdRelationshipsAppsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.betaTesters[':id'].relationships.apps.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
          InferRequestType<
            (typeof client.v1.betaTesters)[':id']['relationships']['apps']['$delete']
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.betaTesters)[':id']['relationships']['betaGroups']['$get']>
  >,
) {
  return ['v1', '/v1/betaTesters/:id/relationships/betaGroups', toValue(args)] as const
}

export function getV1BetaTestersIdRelationshipsBetaGroupsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.betaTesters)[':id']['relationships']['betaGroups']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1BetaTestersIdRelationshipsBetaGroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.betaTesters[':id'].relationships.betaGroups.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.betaTesters)[':id']['relationships']['betaGroups']['$get']>
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
                    (typeof client.v1.betaTesters)[':id']['relationships']['betaGroups']['$get']
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
                    (typeof client.v1.betaTesters)[':id']['relationships']['betaGroups']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1BetaTestersIdRelationshipsBetaGroupsQueryKey>
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
            ReturnType<(typeof client.v1.betaTesters)[':id']['relationships']['betaGroups']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BetaTestersIdRelationshipsBetaGroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1BetaTestersIdRelationshipsBetaGroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.betaTesters[':id'].relationships.betaGroups.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.betaTesters)[':id']['relationships']['builds']['$get']>
  >,
) {
  return ['v1', '/v1/betaTesters/:id/relationships/builds', toValue(args)] as const
}

export function getV1BetaTestersIdRelationshipsBuildsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.betaTesters)[':id']['relationships']['builds']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1BetaTestersIdRelationshipsBuildsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.betaTesters[':id'].relationships.builds.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.betaTesters)[':id']['relationships']['builds']['$get']>
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
                    (typeof client.v1.betaTesters)[':id']['relationships']['builds']['$get']
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
                    (typeof client.v1.betaTesters)[':id']['relationships']['builds']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1BetaTestersIdRelationshipsBuildsQueryKey>
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
            ReturnType<(typeof client.v1.betaTesters)[':id']['relationships']['builds']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BetaTestersIdRelationshipsBuildsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1BetaTestersIdRelationshipsBuildsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.betaTesters[':id'].relationships.builds.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
          InferRequestType<
            (typeof client.v1.betaTesters)[':id']['relationships']['builds']['$post']
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.buildBetaDetails.$get>>,
) {
  return ['v1', '/v1/buildBetaDetails', toValue(args)] as const
}

export function getV1BuildBetaDetailsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.buildBetaDetails.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1BuildBetaDetailsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.buildBetaDetails.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1BuildBetaDetails<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.buildBetaDetails.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.buildBetaDetails.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.buildBetaDetails.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.buildBetaDetails.$get>>>
            >
          >,
          ReturnType<typeof getV1BuildBetaDetailsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.buildBetaDetails.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1BuildBetaDetailsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1BuildBetaDetailsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.buildBetaDetails.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1BuildBetaDetailsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.buildBetaDetails)[':id']['$get']>>,
) {
  return ['v1', '/v1/buildBetaDetails/:id', toValue(args)] as const
}

export function getV1BuildBetaDetailsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.buildBetaDetails)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1BuildBetaDetailsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.buildBetaDetails[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1BuildBetaDetailsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.buildBetaDetails)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.buildBetaDetails)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.buildBetaDetails)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1BuildBetaDetailsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.buildBetaDetails)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BuildBetaDetailsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1BuildBetaDetailsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.buildBetaDetails[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.buildBetaDetails)[':id']['build']['$get']>
  >,
) {
  return ['v1', '/v1/buildBetaDetails/:id/build', toValue(args)] as const
}

export function getV1BuildBetaDetailsIdBuildQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.buildBetaDetails)[':id']['build']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1BuildBetaDetailsIdBuildQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.buildBetaDetails[':id'].build.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.buildBetaDetails)[':id']['build']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.buildBetaDetails)[':id']['build']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1BuildBetaDetailsIdBuildQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.buildBetaDetails)[':id']['build']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BuildBetaDetailsIdBuildQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1BuildBetaDetailsIdBuildQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.buildBetaDetails[':id'].build.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.buildBetaNotifications.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v1.buildBetaNotifications.$post>,
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

export function getV1BuildsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.builds.$get>>,
) {
  return ['v1', '/v1/builds', toValue(args)] as const
}

export function getV1BuildsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.builds.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1BuildsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.builds.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Builds<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.builds.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.builds.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.builds.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.builds.$get>>>>
          >,
          ReturnType<typeof getV1BuildsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.builds.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1BuildsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1BuildsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.builds.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1BuildsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.builds)[':id']['$get']>>,
) {
  return ['v1', '/v1/builds/:id', toValue(args)] as const
}

export function getV1BuildsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.builds)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1BuildsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.builds[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1BuildsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.builds)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.builds)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.builds)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.builds)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getV1BuildsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.builds)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BuildsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1BuildsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.builds[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.builds)[':id']['app']['$get']>>,
) {
  return ['v1', '/v1/builds/:id/app', toValue(args)] as const
}

export function getV1BuildsIdAppQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.builds)[':id']['app']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1BuildsIdAppQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.builds[':id'].app.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1BuildsIdApp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.builds)[':id']['app']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.builds)[':id']['app']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.builds)[':id']['app']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1BuildsIdAppQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.builds)[':id']['app']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BuildsIdAppQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1BuildsIdAppQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.builds[':id'].app.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1BuildsIdAppEncryptionDeclarationQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.builds)[':id']['appEncryptionDeclaration']['$get']>
  >,
) {
  return ['v1', '/v1/builds/:id/appEncryptionDeclaration', toValue(args)] as const
}

export function getV1BuildsIdAppEncryptionDeclarationQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.builds)[':id']['appEncryptionDeclaration']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1BuildsIdAppEncryptionDeclarationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.builds[':id'].appEncryptionDeclaration.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.builds)[':id']['appEncryptionDeclaration']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.builds)[':id']['appEncryptionDeclaration']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1BuildsIdAppEncryptionDeclarationQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.builds)[':id']['appEncryptionDeclaration']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BuildsIdAppEncryptionDeclarationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1BuildsIdAppEncryptionDeclarationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.builds[':id'].appEncryptionDeclaration.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1BuildsIdAppStoreVersionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.builds)[':id']['appStoreVersion']['$get']>
  >,
) {
  return ['v1', '/v1/builds/:id/appStoreVersion', toValue(args)] as const
}

export function getV1BuildsIdAppStoreVersionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.builds)[':id']['appStoreVersion']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1BuildsIdAppStoreVersionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.builds[':id'].appStoreVersion.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.builds)[':id']['appStoreVersion']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.builds)[':id']['appStoreVersion']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1BuildsIdAppStoreVersionQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.builds)[':id']['appStoreVersion']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BuildsIdAppStoreVersionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1BuildsIdAppStoreVersionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.builds[':id'].appStoreVersion.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1BuildsIdBetaAppReviewSubmissionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.builds)[':id']['betaAppReviewSubmission']['$get']>
  >,
) {
  return ['v1', '/v1/builds/:id/betaAppReviewSubmission', toValue(args)] as const
}

export function getV1BuildsIdBetaAppReviewSubmissionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.builds)[':id']['betaAppReviewSubmission']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1BuildsIdBetaAppReviewSubmissionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.builds[':id'].betaAppReviewSubmission.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.builds)[':id']['betaAppReviewSubmission']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.builds)[':id']['betaAppReviewSubmission']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1BuildsIdBetaAppReviewSubmissionQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.builds)[':id']['betaAppReviewSubmission']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BuildsIdBetaAppReviewSubmissionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1BuildsIdBetaAppReviewSubmissionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.builds[':id'].betaAppReviewSubmission.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1BuildsIdBetaBuildLocalizationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.builds)[':id']['betaBuildLocalizations']['$get']>
  >,
) {
  return ['v1', '/v1/builds/:id/betaBuildLocalizations', toValue(args)] as const
}

export function getV1BuildsIdBetaBuildLocalizationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.builds)[':id']['betaBuildLocalizations']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1BuildsIdBetaBuildLocalizationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.builds[':id'].betaBuildLocalizations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.builds)[':id']['betaBuildLocalizations']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.builds)[':id']['betaBuildLocalizations']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1BuildsIdBetaBuildLocalizationsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.builds)[':id']['betaBuildLocalizations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BuildsIdBetaBuildLocalizationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1BuildsIdBetaBuildLocalizationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.builds[':id'].betaBuildLocalizations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1BuildsIdBuildBetaDetailQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.builds)[':id']['buildBetaDetail']['$get']>
  >,
) {
  return ['v1', '/v1/builds/:id/buildBetaDetail', toValue(args)] as const
}

export function getV1BuildsIdBuildBetaDetailQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.builds)[':id']['buildBetaDetail']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1BuildsIdBuildBetaDetailQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.builds[':id'].buildBetaDetail.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.builds)[':id']['buildBetaDetail']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.builds)[':id']['buildBetaDetail']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1BuildsIdBuildBetaDetailQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.builds)[':id']['buildBetaDetail']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BuildsIdBuildBetaDetailQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1BuildsIdBuildBetaDetailQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.builds[':id'].buildBetaDetail.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1BuildsIdDiagnosticSignaturesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.builds)[':id']['diagnosticSignatures']['$get']>
  >,
) {
  return ['v1', '/v1/builds/:id/diagnosticSignatures', toValue(args)] as const
}

export function getV1BuildsIdDiagnosticSignaturesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.builds)[':id']['diagnosticSignatures']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1BuildsIdDiagnosticSignaturesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.builds[':id'].diagnosticSignatures.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.builds)[':id']['diagnosticSignatures']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.builds)[':id']['diagnosticSignatures']['$get']>
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
                  ReturnType<(typeof client.v1.builds)[':id']['diagnosticSignatures']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1BuildsIdDiagnosticSignaturesQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.builds)[':id']['diagnosticSignatures']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BuildsIdDiagnosticSignaturesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1BuildsIdDiagnosticSignaturesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.builds[':id'].diagnosticSignatures.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1BuildsIdIconsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.builds)[':id']['icons']['$get']>>,
) {
  return ['v1', '/v1/builds/:id/icons', toValue(args)] as const
}

export function getV1BuildsIdIconsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.builds)[':id']['icons']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1BuildsIdIconsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.builds[':id'].icons.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1BuildsIdIcons<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.builds)[':id']['icons']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.builds)[':id']['icons']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.builds)[':id']['icons']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1BuildsIdIconsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.builds)[':id']['icons']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BuildsIdIconsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1BuildsIdIconsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.builds[':id'].icons.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1BuildsIdIndividualTestersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.builds)[':id']['individualTesters']['$get']>
  >,
) {
  return ['v1', '/v1/builds/:id/individualTesters', toValue(args)] as const
}

export function getV1BuildsIdIndividualTestersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.builds)[':id']['individualTesters']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1BuildsIdIndividualTestersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.builds[':id'].individualTesters.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.builds)[':id']['individualTesters']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.builds)[':id']['individualTesters']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1BuildsIdIndividualTestersQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.builds)[':id']['individualTesters']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BuildsIdIndividualTestersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1BuildsIdIndividualTestersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.builds[':id'].individualTesters.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1BuildsIdPerfPowerMetricsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.builds)[':id']['perfPowerMetrics']['$get']>
  >,
) {
  return ['v1', '/v1/builds/:id/perfPowerMetrics', toValue(args)] as const
}

export function getV1BuildsIdPerfPowerMetricsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.builds)[':id']['perfPowerMetrics']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1BuildsIdPerfPowerMetricsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.builds[':id'].perfPowerMetrics.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.builds)[':id']['perfPowerMetrics']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.builds)[':id']['perfPowerMetrics']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1BuildsIdPerfPowerMetricsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.builds)[':id']['perfPowerMetrics']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BuildsIdPerfPowerMetricsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1BuildsIdPerfPowerMetricsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.builds[':id'].perfPowerMetrics.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1BuildsIdPreReleaseVersionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.builds)[':id']['preReleaseVersion']['$get']>
  >,
) {
  return ['v1', '/v1/builds/:id/preReleaseVersion', toValue(args)] as const
}

export function getV1BuildsIdPreReleaseVersionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.builds)[':id']['preReleaseVersion']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1BuildsIdPreReleaseVersionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.builds[':id'].preReleaseVersion.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.builds)[':id']['preReleaseVersion']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.builds)[':id']['preReleaseVersion']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1BuildsIdPreReleaseVersionQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.builds)[':id']['preReleaseVersion']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BuildsIdPreReleaseVersionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1BuildsIdPreReleaseVersionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.builds[':id'].preReleaseVersion.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1BuildsIdRelationshipsAppEncryptionDeclarationQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.builds)[':id']['relationships']['appEncryptionDeclaration']['$get']
    >
  >,
) {
  return ['v1', '/v1/builds/:id/relationships/appEncryptionDeclaration', toValue(args)] as const
}

export function getV1BuildsIdRelationshipsAppEncryptionDeclarationQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.builds)[':id']['relationships']['appEncryptionDeclaration']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1BuildsIdRelationshipsAppEncryptionDeclarationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.builds[':id'].relationships.appEncryptionDeclaration.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.builds)[':id']['relationships']['appEncryptionDeclaration']['$get']
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
                    (typeof client.v1.builds)[':id']['relationships']['appEncryptionDeclaration']['$get']
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
                    (typeof client.v1.builds)[':id']['relationships']['appEncryptionDeclaration']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1BuildsIdRelationshipsAppEncryptionDeclarationQueryKey>
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
              (typeof client.v1.builds)[':id']['relationships']['appEncryptionDeclaration']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BuildsIdRelationshipsAppEncryptionDeclarationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1BuildsIdRelationshipsAppEncryptionDeclarationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.builds[':id'].relationships.appEncryptionDeclaration.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
          InferRequestType<
            (typeof client.v1.builds)[':id']['relationships']['betaGroups']['$post']
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.builds)[':id']['relationships']['individualTesters']['$get']>
  >,
) {
  return ['v1', '/v1/builds/:id/relationships/individualTesters', toValue(args)] as const
}

export function getV1BuildsIdRelationshipsIndividualTestersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.builds)[':id']['relationships']['individualTesters']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1BuildsIdRelationshipsIndividualTestersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.builds[':id'].relationships.individualTesters.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.builds)[':id']['relationships']['individualTesters']['$get']>
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
                    (typeof client.v1.builds)[':id']['relationships']['individualTesters']['$get']
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
                    (typeof client.v1.builds)[':id']['relationships']['individualTesters']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1BuildsIdRelationshipsIndividualTestersQueryKey>
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
              (typeof client.v1.builds)[':id']['relationships']['individualTesters']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BuildsIdRelationshipsIndividualTestersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1BuildsIdRelationshipsIndividualTestersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.builds[':id'].relationships.individualTesters.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getV1BundleIdsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.bundleIds.$get>>,
) {
  return ['v1', '/v1/bundleIds', toValue(args)] as const
}

export function getV1BundleIdsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.bundleIds.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1BundleIdsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.bundleIds.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1BundleIds<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.bundleIds.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.bundleIds.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.bundleIds.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.bundleIds.$get>>>>
          >,
          ReturnType<typeof getV1BundleIdsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.bundleIds.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1BundleIdsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1BundleIdsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.bundleIds.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.bundleIds.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.bundleIds.$post>,
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.bundleIds)[':id']['$get']>>,
) {
  return ['v1', '/v1/bundleIds/:id', toValue(args)] as const
}

export function getV1BundleIdsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.bundleIds)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1BundleIdsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.bundleIds[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1BundleIdsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.bundleIds)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.bundleIds)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.bundleIds)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.bundleIds)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getV1BundleIdsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.bundleIds)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BundleIdsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1BundleIdsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.bundleIds[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.bundleIds)[':id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.bundleIds)[':id']['$patch']>,
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.bundleIds)[':id']['app']['$get']>>,
) {
  return ['v1', '/v1/bundleIds/:id/app', toValue(args)] as const
}

export function getV1BundleIdsIdAppQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.bundleIds)[':id']['app']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1BundleIdsIdAppQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.bundleIds[':id'].app.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1BundleIdsIdApp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.bundleIds)[':id']['app']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.bundleIds)[':id']['app']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.bundleIds)[':id']['app']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1BundleIdsIdAppQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.bundleIds)[':id']['app']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BundleIdsIdAppQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1BundleIdsIdAppQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.bundleIds[':id'].app.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1BundleIdsIdBundleIdCapabilitiesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.bundleIds)[':id']['bundleIdCapabilities']['$get']>
  >,
) {
  return ['v1', '/v1/bundleIds/:id/bundleIdCapabilities', toValue(args)] as const
}

export function getV1BundleIdsIdBundleIdCapabilitiesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.bundleIds)[':id']['bundleIdCapabilities']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1BundleIdsIdBundleIdCapabilitiesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.bundleIds[':id'].bundleIdCapabilities.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.bundleIds)[':id']['bundleIdCapabilities']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.bundleIds)[':id']['bundleIdCapabilities']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1BundleIdsIdBundleIdCapabilitiesQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.bundleIds)[':id']['bundleIdCapabilities']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BundleIdsIdBundleIdCapabilitiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1BundleIdsIdBundleIdCapabilitiesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.bundleIds[':id'].bundleIdCapabilities.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1BundleIdsIdProfilesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.bundleIds)[':id']['profiles']['$get']>>,
) {
  return ['v1', '/v1/bundleIds/:id/profiles', toValue(args)] as const
}

export function getV1BundleIdsIdProfilesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.bundleIds)[':id']['profiles']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1BundleIdsIdProfilesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.bundleIds[':id'].profiles.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.bundleIds)[':id']['profiles']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.bundleIds)[':id']['profiles']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1BundleIdsIdProfilesQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.bundleIds)[':id']['profiles']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BundleIdsIdProfilesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1BundleIdsIdProfilesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.bundleIds[':id'].profiles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1CertificatesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.certificates.$get>>,
) {
  return ['v1', '/v1/certificates', toValue(args)] as const
}

export function getV1CertificatesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.certificates.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1CertificatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.certificates.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1Certificates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.certificates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.certificates.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.certificates.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.certificates.$get>>>
            >
          >,
          ReturnType<typeof getV1CertificatesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.certificates.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1CertificatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1CertificatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.certificates.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.certificates.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.certificates.$post>,
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.certificates)[':id']['$get']>>,
) {
  return ['v1', '/v1/certificates/:id', toValue(args)] as const
}

export function getV1CertificatesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.certificates)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1CertificatesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.certificates[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1CertificatesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.certificates)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.certificates)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.certificates)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1CertificatesIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.certificates)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CertificatesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1CertificatesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.certificates[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getV1DevicesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.devices.$get>>,
) {
  return ['v1', '/v1/devices', toValue(args)] as const
}

export function getV1DevicesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.devices.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1DevicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.devices.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Devices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.devices.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.devices.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.devices.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.devices.$get>>>>
          >,
          ReturnType<typeof getV1DevicesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.devices.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1DevicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1DevicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.devices.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.devices.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.devices.$post>,
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.devices)[':id']['$get']>>,
) {
  return ['v1', '/v1/devices/:id', toValue(args)] as const
}

export function getV1DevicesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.devices)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1DevicesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.devices[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1DevicesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.devices)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.devices)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.devices)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.devices)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getV1DevicesIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.devices)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1DevicesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1DevicesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.devices[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.diagnosticSignatures)[':id']['logs']['$get']>
  >,
) {
  return ['v1', '/v1/diagnosticSignatures/:id/logs', toValue(args)] as const
}

export function getV1DiagnosticSignaturesIdLogsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.diagnosticSignatures)[':id']['logs']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1DiagnosticSignaturesIdLogsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.diagnosticSignatures[':id'].logs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.diagnosticSignatures)[':id']['logs']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.diagnosticSignatures)[':id']['logs']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1DiagnosticSignaturesIdLogsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.diagnosticSignatures)[':id']['logs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1DiagnosticSignaturesIdLogsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1DiagnosticSignaturesIdLogsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.diagnosticSignatures[':id'].logs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.endUserLicenseAgreements)[':id']['$get']>
  >,
) {
  return ['v1', '/v1/endUserLicenseAgreements/:id', toValue(args)] as const
}

export function getV1EndUserLicenseAgreementsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.endUserLicenseAgreements)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1EndUserLicenseAgreementsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.endUserLicenseAgreements[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.endUserLicenseAgreements)[':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.endUserLicenseAgreements)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1EndUserLicenseAgreementsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.endUserLicenseAgreements)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1EndUserLicenseAgreementsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1EndUserLicenseAgreementsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.endUserLicenseAgreements[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.endUserLicenseAgreements)[':id']['territories']['$get']>
  >,
) {
  return ['v1', '/v1/endUserLicenseAgreements/:id/territories', toValue(args)] as const
}

export function getV1EndUserLicenseAgreementsIdTerritoriesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.endUserLicenseAgreements)[':id']['territories']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1EndUserLicenseAgreementsIdTerritoriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.endUserLicenseAgreements[':id'].territories.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.endUserLicenseAgreements)[':id']['territories']['$get']>
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
                    (typeof client.v1.endUserLicenseAgreements)[':id']['territories']['$get']
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
                    (typeof client.v1.endUserLicenseAgreements)[':id']['territories']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1EndUserLicenseAgreementsIdTerritoriesQueryKey>
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
            ReturnType<(typeof client.v1.endUserLicenseAgreements)[':id']['territories']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1EndUserLicenseAgreementsIdTerritoriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1EndUserLicenseAgreementsIdTerritoriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.endUserLicenseAgreements[':id'].territories.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1FinanceReportsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.financeReports.$get>>,
) {
  return ['v1', '/v1/financeReports', toValue(args)] as const
}

export function getV1FinanceReportsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.financeReports.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1FinanceReportsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.financeReports.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1FinanceReports<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.financeReports.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.financeReports.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.financeReports.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.financeReports.$get>>>
            >
          >,
          ReturnType<typeof getV1FinanceReportsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.financeReports.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1FinanceReportsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1FinanceReportsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.financeReports.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1GameCenterEnabledVersionsIdCompatibleVersionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.gameCenterEnabledVersions)[':id']['compatibleVersions']['$get']
    >
  >,
) {
  return ['v1', '/v1/gameCenterEnabledVersions/:id/compatibleVersions', toValue(args)] as const
}

export function getV1GameCenterEnabledVersionsIdCompatibleVersionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.gameCenterEnabledVersions)[':id']['compatibleVersions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1GameCenterEnabledVersionsIdCompatibleVersionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.gameCenterEnabledVersions[':id'].compatibleVersions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.gameCenterEnabledVersions)[':id']['compatibleVersions']['$get']
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
                    (typeof client.v1.gameCenterEnabledVersions)[':id']['compatibleVersions']['$get']
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
                    (typeof client.v1.gameCenterEnabledVersions)[':id']['compatibleVersions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1GameCenterEnabledVersionsIdCompatibleVersionsQueryKey>
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
              (typeof client.v1.gameCenterEnabledVersions)[':id']['compatibleVersions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1GameCenterEnabledVersionsIdCompatibleVersionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1GameCenterEnabledVersionsIdCompatibleVersionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.gameCenterEnabledVersions[':id'].compatibleVersions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1GameCenterEnabledVersionsIdRelationshipsCompatibleVersionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.gameCenterEnabledVersions)[':id']['relationships']['compatibleVersions']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/gameCenterEnabledVersions/:id/relationships/compatibleVersions',
    toValue(args),
  ] as const
}

export function getV1GameCenterEnabledVersionsIdRelationshipsCompatibleVersionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.gameCenterEnabledVersions)[':id']['relationships']['compatibleVersions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1GameCenterEnabledVersionsIdRelationshipsCompatibleVersionsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.gameCenterEnabledVersions[':id'].relationships.compatibleVersions.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.gameCenterEnabledVersions)[':id']['relationships']['compatibleVersions']['$get']
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
                    (typeof client.v1.gameCenterEnabledVersions)[':id']['relationships']['compatibleVersions']['$get']
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
                    (typeof client.v1.gameCenterEnabledVersions)[':id']['relationships']['compatibleVersions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1GameCenterEnabledVersionsIdRelationshipsCompatibleVersionsQueryKey>
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
              (typeof client.v1.gameCenterEnabledVersions)[':id']['relationships']['compatibleVersions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1GameCenterEnabledVersionsIdRelationshipsCompatibleVersionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1GameCenterEnabledVersionsIdRelationshipsCompatibleVersionsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.gameCenterEnabledVersions[':id'].relationships.compatibleVersions.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.inAppPurchases)[':id']['$get']>>,
) {
  return ['v1', '/v1/inAppPurchases/:id', toValue(args)] as const
}

export function getV1InAppPurchasesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.inAppPurchases)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1InAppPurchasesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.inAppPurchases[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1InAppPurchasesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.inAppPurchases)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.inAppPurchases)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.inAppPurchases)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1InAppPurchasesIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.inAppPurchases)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1InAppPurchasesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1InAppPurchasesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.inAppPurchases[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1PreReleaseVersionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.preReleaseVersions.$get>>,
) {
  return ['v1', '/v1/preReleaseVersions', toValue(args)] as const
}

export function getV1PreReleaseVersionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.preReleaseVersions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PreReleaseVersionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.preReleaseVersions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PreReleaseVersions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.preReleaseVersions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.preReleaseVersions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.preReleaseVersions.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.preReleaseVersions.$get>>>
            >
          >,
          ReturnType<typeof getV1PreReleaseVersionsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.preReleaseVersions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PreReleaseVersionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PreReleaseVersionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.preReleaseVersions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1PreReleaseVersionsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.preReleaseVersions)[':id']['$get']>>,
) {
  return ['v1', '/v1/preReleaseVersions/:id', toValue(args)] as const
}

export function getV1PreReleaseVersionsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.preReleaseVersions)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PreReleaseVersionsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.preReleaseVersions[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.preReleaseVersions)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.preReleaseVersions)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1PreReleaseVersionsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.preReleaseVersions)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PreReleaseVersionsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PreReleaseVersionsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.preReleaseVersions[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1PreReleaseVersionsIdAppQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.preReleaseVersions)[':id']['app']['$get']>
  >,
) {
  return ['v1', '/v1/preReleaseVersions/:id/app', toValue(args)] as const
}

export function getV1PreReleaseVersionsIdAppQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.preReleaseVersions)[':id']['app']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PreReleaseVersionsIdAppQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.preReleaseVersions[':id'].app.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.preReleaseVersions)[':id']['app']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.preReleaseVersions)[':id']['app']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1PreReleaseVersionsIdAppQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.preReleaseVersions)[':id']['app']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PreReleaseVersionsIdAppQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PreReleaseVersionsIdAppQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.preReleaseVersions[':id'].app.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1PreReleaseVersionsIdBuildsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.preReleaseVersions)[':id']['builds']['$get']>
  >,
) {
  return ['v1', '/v1/preReleaseVersions/:id/builds', toValue(args)] as const
}

export function getV1PreReleaseVersionsIdBuildsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.preReleaseVersions)[':id']['builds']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PreReleaseVersionsIdBuildsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.preReleaseVersions[':id'].builds.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.preReleaseVersions)[':id']['builds']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.preReleaseVersions)[':id']['builds']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1PreReleaseVersionsIdBuildsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.preReleaseVersions)[':id']['builds']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PreReleaseVersionsIdBuildsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PreReleaseVersionsIdBuildsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.preReleaseVersions[':id'].builds.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ProfilesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.profiles.$get>>,
) {
  return ['v1', '/v1/profiles', toValue(args)] as const
}

export function getV1ProfilesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.profiles.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProfilesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.profiles.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Profiles<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.profiles.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.profiles.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.profiles.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.profiles.$get>>>>
          >,
          ReturnType<typeof getV1ProfilesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.profiles.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1ProfilesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProfilesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.profiles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.profiles.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.profiles.$post>,
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.profiles)[':id']['$get']>>,
) {
  return ['v1', '/v1/profiles/:id', toValue(args)] as const
}

export function getV1ProfilesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.profiles)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProfilesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.profiles[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ProfilesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.profiles)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.profiles)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.profiles)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.profiles)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getV1ProfilesIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.profiles)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProfilesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProfilesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.profiles[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.profiles)[':id']['bundleId']['$get']>>,
) {
  return ['v1', '/v1/profiles/:id/bundleId', toValue(args)] as const
}

export function getV1ProfilesIdBundleIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.profiles)[':id']['bundleId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProfilesIdBundleIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.profiles[':id'].bundleId.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.profiles)[':id']['bundleId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.profiles)[':id']['bundleId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ProfilesIdBundleIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.profiles)[':id']['bundleId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProfilesIdBundleIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProfilesIdBundleIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.profiles[':id'].bundleId.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ProfilesIdCertificatesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.profiles)[':id']['certificates']['$get']>
  >,
) {
  return ['v1', '/v1/profiles/:id/certificates', toValue(args)] as const
}

export function getV1ProfilesIdCertificatesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.profiles)[':id']['certificates']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProfilesIdCertificatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.profiles[':id'].certificates.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.profiles)[':id']['certificates']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.profiles)[':id']['certificates']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ProfilesIdCertificatesQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.profiles)[':id']['certificates']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProfilesIdCertificatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProfilesIdCertificatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.profiles[':id'].certificates.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ProfilesIdDevicesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.profiles)[':id']['devices']['$get']>>,
) {
  return ['v1', '/v1/profiles/:id/devices', toValue(args)] as const
}

export function getV1ProfilesIdDevicesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.profiles)[':id']['devices']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProfilesIdDevicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.profiles[':id'].devices.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.profiles)[':id']['devices']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.profiles)[':id']['devices']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ProfilesIdDevicesQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.profiles)[':id']['devices']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProfilesIdDevicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProfilesIdDevicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.profiles[':id'].devices.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.routingAppCoverages)[':id']['$get']>>,
) {
  return ['v1', '/v1/routingAppCoverages/:id', toValue(args)] as const
}

export function getV1RoutingAppCoveragesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.routingAppCoverages)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1RoutingAppCoveragesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.routingAppCoverages[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.routingAppCoverages)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.routingAppCoverages)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1RoutingAppCoveragesIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.routingAppCoverages)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1RoutingAppCoveragesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1RoutingAppCoveragesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.routingAppCoverages[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.salesReports.$get>>,
) {
  return ['v1', '/v1/salesReports', toValue(args)] as const
}

export function getV1SalesReportsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.salesReports.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1SalesReportsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.salesReports.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1SalesReports<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.salesReports.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.salesReports.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.salesReports.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.salesReports.$get>>>
            >
          >,
          ReturnType<typeof getV1SalesReportsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.salesReports.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1SalesReportsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1SalesReportsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.salesReports.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1TerritoriesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.territories.$get>>,
) {
  return ['v1', '/v1/territories', toValue(args)] as const
}

export function getV1TerritoriesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.territories.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1TerritoriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.territories.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1Territories<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.territories.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.territories.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.territories.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.territories.$get>>>>
          >,
          ReturnType<typeof getV1TerritoriesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.territories.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1TerritoriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1TerritoriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.territories.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1UserInvitationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.userInvitations.$get>>,
) {
  return ['v1', '/v1/userInvitations', toValue(args)] as const
}

export function getV1UserInvitationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.userInvitations.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1UserInvitationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.userInvitations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1UserInvitations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.userInvitations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.userInvitations.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.userInvitations.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.userInvitations.$get>>>
            >
          >,
          ReturnType<typeof getV1UserInvitationsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.userInvitations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1UserInvitationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1UserInvitationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.userInvitations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.userInvitations)[':id']['$get']>>,
) {
  return ['v1', '/v1/userInvitations/:id', toValue(args)] as const
}

export function getV1UserInvitationsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.userInvitations)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1UserInvitationsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.userInvitations[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1UserInvitationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.userInvitations)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.userInvitations)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.userInvitations)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1UserInvitationsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.userInvitations)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1UserInvitationsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1UserInvitationsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.userInvitations[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.userInvitations)[':id']['visibleApps']['$get']>
  >,
) {
  return ['v1', '/v1/userInvitations/:id/visibleApps', toValue(args)] as const
}

export function getV1UserInvitationsIdVisibleAppsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.userInvitations)[':id']['visibleApps']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1UserInvitationsIdVisibleAppsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.userInvitations[':id'].visibleApps.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.userInvitations)[':id']['visibleApps']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.userInvitations)[':id']['visibleApps']['$get']>
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
                  ReturnType<(typeof client.v1.userInvitations)[':id']['visibleApps']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1UserInvitationsIdVisibleAppsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.userInvitations)[':id']['visibleApps']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1UserInvitationsIdVisibleAppsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1UserInvitationsIdVisibleAppsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.userInvitations[':id'].visibleApps.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1UsersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.users.$get>>,
) {
  return ['v1', '/v1/users', toValue(args)] as const
}

export function getV1UsersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.users.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1UsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.users.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Users<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.users.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.$get>>>>
          >,
          ReturnType<typeof getV1UsersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1UsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1UsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.users.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1UsersIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.users)[':id']['$get']>>,
) {
  return ['v1', '/v1/users/:id', toValue(args)] as const
}

export function getV1UsersIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.users)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1UsersIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.users[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1UsersId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.users)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.users)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.users)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.users)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getV1UsersIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.users)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1UsersIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1UsersIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.users[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v1.users)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.users)[':id']['$delete']>,
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.users)[':id']['relationships']['visibleApps']['$get']>
  >,
) {
  return ['v1', '/v1/users/:id/relationships/visibleApps', toValue(args)] as const
}

export function getV1UsersIdRelationshipsVisibleAppsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.users)[':id']['relationships']['visibleApps']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1UsersIdRelationshipsVisibleAppsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.users[':id'].relationships.visibleApps.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.users)[':id']['relationships']['visibleApps']['$get']>
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
                    (typeof client.v1.users)[':id']['relationships']['visibleApps']['$get']
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
                    (typeof client.v1.users)[':id']['relationships']['visibleApps']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1UsersIdRelationshipsVisibleAppsQueryKey>
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
            ReturnType<(typeof client.v1.users)[':id']['relationships']['visibleApps']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1UsersIdRelationshipsVisibleAppsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1UsersIdRelationshipsVisibleAppsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.users[':id'].relationships.visibleApps.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
          InferRequestType<
            (typeof client.v1.users)[':id']['relationships']['visibleApps']['$post']
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
          InferRequestType<
            (typeof client.v1.users)[':id']['relationships']['visibleApps']['$patch']
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.users)[':id']['visibleApps']['$get']>>,
) {
  return ['v1', '/v1/users/:id/visibleApps', toValue(args)] as const
}

export function getV1UsersIdVisibleAppsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.users)[':id']['visibleApps']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1UsersIdVisibleAppsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.users[':id'].visibleApps.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.users)[':id']['visibleApps']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.users)[':id']['visibleApps']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1UsersIdVisibleAppsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.users)[':id']['visibleApps']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1UsersIdVisibleAppsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1UsersIdVisibleAppsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.users[':id'].visibleApps.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
