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

export function getApiRegistryKey() {
  return ['api-registry'] as const
}

export function getApiSpecificationKey() {
  return ['api-specification'] as const
}

export function getApplyKey() {
  return ['apply'] as const
}

export function getCategoriesKey() {
  return ['categories'] as const
}

export function getChangelogsKey() {
  return ['changelogs'] as const
}

export function getCustompagesKey() {
  return ['custompages'] as const
}

export function getDocsKey() {
  return ['docs'] as const
}

export function getSchemaKey() {
  return ['schema'] as const
}

export function getVersionKey() {
  return ['version'] as const
}

export function getApiRegistryUuidQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['api-registry'][':uuid']['$get']>>,
) {
  return ['api-registry', '/api-registry/:uuid', toValue(args)] as const
}

export function getApiRegistryUuidQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['api-registry'][':uuid']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiRegistryUuidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['api-registry'][':uuid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiRegistryUuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['api-registry'][':uuid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['api-registry'][':uuid']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['api-registry'][':uuid']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['api-registry'][':uuid']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiRegistryUuidQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['api-registry'][':uuid']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiRegistryUuidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiRegistryUuidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['api-registry'][':uuid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiSpecificationQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['api-specification']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api-specification', '/api-specification', keyArgs] as const
}

export function getApiSpecificationQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['api-specification']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiSpecificationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['api-specification'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiSpecification<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['api-specification']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['api-specification']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['api-specification']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['api-specification']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiSpecificationQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['api-specification']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSpecificationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiSpecificationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['api-specification'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiSpecificationMutationKey() {
  return ['api-specification', '/api-specification', 'POST'] as const
}

export function getPostApiSpecificationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['api-specification']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['api-specification']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiSpecificationMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['api-specification']['$post']>) {
      return parseResponse(client['api-specification'].$post(args, options))
    },
  })
}

export function usePostApiSpecification<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['api-specification']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['api-specification']['$post']>,
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
  const mutationDefaults = getPostApiSpecificationMutationOptions<TError, TOnMutateResult>(
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

export function getPutApiSpecificationIdMutationKey() {
  return ['api-specification', '/api-specification/:id', 'PUT'] as const
}

export function getPutApiSpecificationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['api-specification'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['api-specification'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiSpecificationIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['api-specification'][':id']['$put']>) {
      return parseResponse(client['api-specification'][':id'].$put(args, options))
    },
  })
}

export function usePutApiSpecificationId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['api-specification'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['api-specification'][':id']['$put']>,
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
  const mutationDefaults = getPutApiSpecificationIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiSpecificationIdMutationKey() {
  return ['api-specification', '/api-specification/:id', 'DELETE'] as const
}

export function getDeleteApiSpecificationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['api-specification'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['api-specification'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiSpecificationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['api-specification'][':id']['$delete']>,
    ) {
      return parseResponse(client['api-specification'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiSpecificationId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client)['api-specification'][':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client)['api-specification'][':id']['$delete']>,
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
  const mutationDefaults = getDeleteApiSpecificationIdMutationOptions<TError, TOnMutateResult>(
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

export function getApplyQueryKey() {
  return ['apply', '/apply'] as const
}

export function getApplyQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApplyQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apply.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApply<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apply.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apply.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apply.$get>>>>>,
          ReturnType<typeof getApplyQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apply.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApplyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApplyQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.apply.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApplyMutationKey() {
  return ['apply', '/apply', 'POST'] as const
}

export function getPostApplyMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apply.$post>>>>>,
    TError,
    InferRequestType<typeof client.apply.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApplyMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.apply.$post>) {
      return parseResponse(client.apply.$post(args, options))
    },
  })
}

export function usePostApply<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apply.$post>>>>>,
          TError,
          InferRequestType<typeof client.apply.$post>,
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
  const mutationDefaults = getPostApplyMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCategoriesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.categories.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['categories', '/categories', keyArgs] as const
}

export function getCategoriesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.categories.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCategoriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.categories.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCategories<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.categories.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.$get>>>>
          >,
          ReturnType<typeof getCategoriesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCategoriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCategoriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.categories.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostCategoriesMutationKey() {
  return ['categories', '/categories', 'POST'] as const
}

export function getPostCategoriesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.$post>>>>>,
    TError,
    InferRequestType<typeof client.categories.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCategoriesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.categories.$post>) {
      return parseResponse(client.categories.$post(args, options))
    },
  })
}

export function usePostCategories<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.categories.$post>,
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
  const mutationDefaults = getPostCategoriesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCategoriesSlugQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.categories)[':slug']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['categories', '/categories/:slug', keyArgs] as const
}

export function getCategoriesSlugQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.categories)[':slug']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCategoriesSlugQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.categories[':slug'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCategoriesSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.categories)[':slug']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.categories)[':slug']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.categories)[':slug']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.categories)[':slug']['$get']>>>
            >
          >,
          ReturnType<typeof getCategoriesSlugQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.categories)[':slug']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCategoriesSlugQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCategoriesSlugQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.categories[':slug'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutCategoriesSlugMutationKey() {
  return ['categories', '/categories/:slug', 'PUT'] as const
}

export function getPutCategoriesSlugMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.categories)[':slug']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.categories)[':slug']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutCategoriesSlugMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.categories)[':slug']['$put']>) {
      return parseResponse(client.categories[':slug'].$put(args, options))
    },
  })
}

export function usePutCategoriesSlug<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.categories)[':slug']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.categories)[':slug']['$put']>,
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
  const mutationDefaults = getPutCategoriesSlugMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteCategoriesSlugMutationKey() {
  return ['categories', '/categories/:slug', 'DELETE'] as const
}

export function getDeleteCategoriesSlugMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.categories)[':slug']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.categories)[':slug']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCategoriesSlugMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.categories)[':slug']['$delete']>) {
      return parseResponse(client.categories[':slug'].$delete(args, options))
    },
  })
}

export function useDeleteCategoriesSlug<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.categories)[':slug']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.categories)[':slug']['$delete']>,
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
  const mutationDefaults = getDeleteCategoriesSlugMutationOptions<TError, TOnMutateResult>(
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

export function getCategoriesSlugDocsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.categories)[':slug']['docs']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['categories', '/categories/:slug/docs', keyArgs] as const
}

export function getCategoriesSlugDocsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.categories)[':slug']['docs']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCategoriesSlugDocsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.categories[':slug'].docs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCategoriesSlugDocs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.categories)[':slug']['docs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.categories)[':slug']['docs']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.categories)[':slug']['docs']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.categories)[':slug']['docs']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCategoriesSlugDocsQueryKey>
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
          Awaited<ReturnType<(typeof client.categories)[':slug']['docs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCategoriesSlugDocsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCategoriesSlugDocsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.categories[':slug'].docs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getChangelogsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.changelogs.$get>>,
) {
  return ['changelogs', '/changelogs', toValue(args)] as const
}

export function getChangelogsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.changelogs.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChangelogsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.changelogs.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useChangelogs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.changelogs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.changelogs.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.changelogs.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.changelogs.$get>>>>
          >,
          ReturnType<typeof getChangelogsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.changelogs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getChangelogsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChangelogsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.changelogs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostChangelogsMutationKey() {
  return ['changelogs', '/changelogs', 'POST'] as const
}

export function getPostChangelogsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.changelogs.$post>>>>>,
    TError,
    InferRequestType<typeof client.changelogs.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostChangelogsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.changelogs.$post>) {
      return parseResponse(client.changelogs.$post(args, options))
    },
  })
}

export function usePostChangelogs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.changelogs.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.changelogs.$post>,
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
  const mutationDefaults = getPostChangelogsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getChangelogsSlugQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.changelogs)[':slug']['$get']>>,
) {
  return ['changelogs', '/changelogs/:slug', toValue(args)] as const
}

export function getChangelogsSlugQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.changelogs)[':slug']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChangelogsSlugQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.changelogs[':slug'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChangelogsSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.changelogs)[':slug']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.changelogs)[':slug']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.changelogs)[':slug']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.changelogs)[':slug']['$get']>>>
            >
          >,
          ReturnType<typeof getChangelogsSlugQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.changelogs)[':slug']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChangelogsSlugQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChangelogsSlugQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.changelogs[':slug'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutChangelogsSlugMutationKey() {
  return ['changelogs', '/changelogs/:slug', 'PUT'] as const
}

export function getPutChangelogsSlugMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.changelogs)[':slug']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.changelogs)[':slug']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutChangelogsSlugMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.changelogs)[':slug']['$put']>) {
      return parseResponse(client.changelogs[':slug'].$put(args, options))
    },
  })
}

export function usePutChangelogsSlug<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.changelogs)[':slug']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.changelogs)[':slug']['$put']>,
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
  const mutationDefaults = getPutChangelogsSlugMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteChangelogsSlugMutationKey() {
  return ['changelogs', '/changelogs/:slug', 'DELETE'] as const
}

export function getDeleteChangelogsSlugMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.changelogs)[':slug']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.changelogs)[':slug']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteChangelogsSlugMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.changelogs)[':slug']['$delete']>) {
      return parseResponse(client.changelogs[':slug'].$delete(args, options))
    },
  })
}

export function useDeleteChangelogsSlug<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.changelogs)[':slug']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.changelogs)[':slug']['$delete']>,
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
  const mutationDefaults = getDeleteChangelogsSlugMutationOptions<TError, TOnMutateResult>(
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

export function getCustompagesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.custompages.$get>>,
) {
  return ['custompages', '/custompages', toValue(args)] as const
}

export function getCustompagesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.custompages.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCustompagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.custompages.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCustompages<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.custompages.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.custompages.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.custompages.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.custompages.$get>>>>
          >,
          ReturnType<typeof getCustompagesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.custompages.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCustompagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCustompagesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.custompages.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostCustompagesMutationKey() {
  return ['custompages', '/custompages', 'POST'] as const
}

export function getPostCustompagesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.custompages.$post>>>>>,
    TError,
    InferRequestType<typeof client.custompages.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCustompagesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.custompages.$post>) {
      return parseResponse(client.custompages.$post(args, options))
    },
  })
}

export function usePostCustompages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.custompages.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.custompages.$post>,
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
  const mutationDefaults = getPostCustompagesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCustompagesSlugQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.custompages)[':slug']['$get']>>,
) {
  return ['custompages', '/custompages/:slug', toValue(args)] as const
}

export function getCustompagesSlugQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.custompages)[':slug']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCustompagesSlugQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.custompages[':slug'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCustompagesSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.custompages)[':slug']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.custompages)[':slug']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.custompages)[':slug']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.custompages)[':slug']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCustompagesSlugQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.custompages)[':slug']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustompagesSlugQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCustompagesSlugQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.custompages[':slug'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutCustompagesSlugMutationKey() {
  return ['custompages', '/custompages/:slug', 'PUT'] as const
}

export function getPutCustompagesSlugMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.custompages)[':slug']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.custompages)[':slug']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutCustompagesSlugMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.custompages)[':slug']['$put']>) {
      return parseResponse(client.custompages[':slug'].$put(args, options))
    },
  })
}

export function usePutCustompagesSlug<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.custompages)[':slug']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.custompages)[':slug']['$put']>,
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
  const mutationDefaults = getPutCustompagesSlugMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteCustompagesSlugMutationKey() {
  return ['custompages', '/custompages/:slug', 'DELETE'] as const
}

export function getDeleteCustompagesSlugMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.custompages)[':slug']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.custompages)[':slug']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCustompagesSlugMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.custompages)[':slug']['$delete']>) {
      return parseResponse(client.custompages[':slug'].$delete(args, options))
    },
  })
}

export function useDeleteCustompagesSlug<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.custompages)[':slug']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.custompages)[':slug']['$delete']>,
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
  const mutationDefaults = getDeleteCustompagesSlugMutationOptions<TError, TOnMutateResult>(
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

export function getDocsSlugQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.docs)[':slug']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['docs', '/docs/:slug', keyArgs] as const
}

export function getDocsSlugQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.docs)[':slug']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDocsSlugQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.docs[':slug'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDocsSlug<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.docs)[':slug']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.docs)[':slug']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.docs)[':slug']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.docs)[':slug']['$get']>>>
            >
          >,
          ReturnType<typeof getDocsSlugQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.docs)[':slug']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDocsSlugQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDocsSlugQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.docs[':slug'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutDocsSlugMutationKey() {
  return ['docs', '/docs/:slug', 'PUT'] as const
}

export function getPutDocsSlugMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.docs)[':slug']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.docs)[':slug']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDocsSlugMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.docs)[':slug']['$put']>) {
      return parseResponse(client.docs[':slug'].$put(args, options))
    },
  })
}

export function usePutDocsSlug<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.docs)[':slug']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.docs)[':slug']['$put']>,
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
  const mutationDefaults = getPutDocsSlugMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteDocsSlugMutationKey() {
  return ['docs', '/docs/:slug', 'DELETE'] as const
}

export function getDeleteDocsSlugMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.docs)[':slug']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.docs)[':slug']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDocsSlugMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.docs)[':slug']['$delete']>) {
      return parseResponse(client.docs[':slug'].$delete(args, options))
    },
  })
}

export function useDeleteDocsSlug<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<(typeof client.docs)[':slug']['$delete']>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.docs)[':slug']['$delete']>,
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
  const mutationDefaults = getDeleteDocsSlugMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDocsSlugProductionQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.docs)[':slug']['production']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['docs', '/docs/:slug/production', keyArgs] as const
}

export function getDocsSlugProductionQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.docs)[':slug']['production']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDocsSlugProductionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.docs[':slug'].production.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDocsSlugProduction<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.docs)[':slug']['production']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.docs)[':slug']['production']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.docs)[':slug']['production']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.docs)[':slug']['production']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDocsSlugProductionQueryKey>
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
          Awaited<ReturnType<(typeof client.docs)[':slug']['production']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDocsSlugProductionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDocsSlugProductionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.docs[':slug'].production.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDocsMutationKey() {
  return ['docs', '/docs', 'POST'] as const
}

export function getPostDocsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.docs.$post>>>>>,
    TError,
    InferRequestType<typeof client.docs.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDocsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.docs.$post>) {
      return parseResponse(client.docs.$post(args, options))
    },
  })
}

export function usePostDocs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.docs.$post>>>>>,
          TError,
          InferRequestType<typeof client.docs.$post>,
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
  const mutationDefaults = getPostDocsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostDocsSearchMutationKey() {
  return ['docs', '/docs/search', 'POST'] as const
}

export function getPostDocsSearchMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.docs.search.$post>>>>>,
    TError,
    InferRequestType<typeof client.docs.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDocsSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.docs.search.$post>) {
      return parseResponse(client.docs.search.$post(args, options))
    },
  })
}

export function usePostDocsSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.docs.search.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.docs.search.$post>,
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
  const mutationDefaults = getPostDocsSearchMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getQueryKey() {
  return ['', '/'] as const
}

export function getQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.index.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function use<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
          ReturnType<typeof getQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSchemaQueryKey() {
  return ['schema', '/schema'] as const
}

export function getSchemaQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSchemaQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.schema.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSchema<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schema.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schema.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schema.$get>>>>>,
          ReturnType<typeof getSchemaQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schema.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSchemaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSchemaQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.schema.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getVersionQueryKey() {
  return ['version', '/version'] as const
}

export function getVersionQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getVersionQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.version.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useVersion<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.version.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.version.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.version.$get>>>>
          >,
          ReturnType<typeof getVersionQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.version.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getVersionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getVersionQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.version.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostVersionMutationKey() {
  return ['version', '/version', 'POST'] as const
}

export function getPostVersionMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.version.$post>>>>>,
    TError,
    InferRequestType<typeof client.version.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostVersionMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.version.$post>) {
      return parseResponse(client.version.$post(args, options))
    },
  })
}

export function usePostVersion<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.version.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.version.$post>,
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
  const mutationDefaults = getPostVersionMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getVersionVersionIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.version)[':versionId']['$get']>>,
) {
  return ['version', '/version/:versionId', toValue(args)] as const
}

export function getVersionVersionIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.version)[':versionId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVersionVersionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.version[':versionId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVersionVersionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.version)[':versionId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.version)[':versionId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.version)[':versionId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.version)[':versionId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getVersionVersionIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.version)[':versionId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVersionVersionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVersionVersionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.version[':versionId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutVersionVersionIdMutationKey() {
  return ['version', '/version/:versionId', 'PUT'] as const
}

export function getPutVersionVersionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.version)[':versionId']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.version)[':versionId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutVersionVersionIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.version)[':versionId']['$put']>) {
      return parseResponse(client.version[':versionId'].$put(args, options))
    },
  })
}

export function usePutVersionVersionId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.version)[':versionId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.version)[':versionId']['$put']>,
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
  const mutationDefaults = getPutVersionVersionIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteVersionVersionIdMutationKey() {
  return ['version', '/version/:versionId', 'DELETE'] as const
}

export function getDeleteVersionVersionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.version)[':versionId']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.version)[':versionId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteVersionVersionIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.version)[':versionId']['$delete']>) {
      return parseResponse(client.version[':versionId'].$delete(args, options))
    },
  })
}

export function useDeleteVersionVersionId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.version)[':versionId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.version)[':versionId']['$delete']>,
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
  const mutationDefaults = getDeleteVersionVersionIdMutationOptions<TError, TOnMutateResult>(
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
