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

export function getV1BlocksIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.blocks)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/blocks/:id', keyArgs] as const
}

export function getV1BlocksIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.blocks)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1BlocksIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.blocks[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1BlocksId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.blocks)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.blocks)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.blocks)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.blocks)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getV1BlocksIdQueryKey>
        >,
        { queryKey: unknown }
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.blocks)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BlocksIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1BlocksIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.blocks[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV1BlocksIdMutationKey() {
  return ['v1', '/v1/blocks/:id', 'DELETE'] as const
}

export function getDeleteV1BlocksIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.blocks)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.blocks)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1BlocksIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.blocks)[':id']['$delete']>) {
      return parseResponse(client.v1.blocks[':id'].$delete(args, options))
    },
  })
}

export function useDeleteV1BlocksId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.blocks)[':id']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.blocks)[':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1BlocksIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchV1BlocksIdMutationKey() {
  return ['v1', '/v1/blocks/:id', 'PATCH'] as const
}

export function getPatchV1BlocksIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.blocks)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.blocks)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1BlocksIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.blocks)[':id']['$patch']>) {
      return parseResponse(client.v1.blocks[':id'].$patch(args, options))
    },
  })
}

export function usePatchV1BlocksId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.blocks)[':id']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.blocks)[':id']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV1BlocksIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1BlocksIdChildrenQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.blocks)[':id']['children']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/blocks/:id/children', keyArgs] as const
}

export function getV1BlocksIdChildrenQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.blocks)[':id']['children']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1BlocksIdChildrenQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.blocks[':id'].children.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1BlocksIdChildren<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.blocks)[':id']['children']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.blocks)[':id']['children']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.blocks)[':id']['children']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.blocks)[':id']['children']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1BlocksIdChildrenQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client.v1.blocks)[':id']['children']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BlocksIdChildrenQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1BlocksIdChildrenQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.blocks[':id'].children.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchV1BlocksIdChildrenMutationKey() {
  return ['v1', '/v1/blocks/:id/children', 'PATCH'] as const
}

export function getPatchV1BlocksIdChildrenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.blocks)[':id']['children']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.blocks)[':id']['children']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1BlocksIdChildrenMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.blocks)[':id']['children']['$patch']>,
    ) {
      return parseResponse(client.v1.blocks[':id'].children.$patch(args, options))
    },
  })
}

export function usePatchV1BlocksIdChildren<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.blocks)[':id']['children']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.blocks)[':id']['children']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV1BlocksIdChildrenMutationOptions<TError, TOnMutateResult>(
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

export function getV1CommentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.comments.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/comments', keyArgs] as const
}

export function getV1CommentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.comments.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1CommentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.comments.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Comments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.comments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.comments.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.comments.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.comments.$get>>>>
          >,
          ReturnType<typeof getV1CommentsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.comments.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1CommentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1CommentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.comments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1DatabasesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.databases)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/databases/:id', keyArgs] as const
}

export function getV1DatabasesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.databases)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1DatabasesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.databases[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1DatabasesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.databases)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.databases)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.databases)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.databases)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getV1DatabasesIdQueryKey>
        >,
        { queryKey: unknown }
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.databases)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1DatabasesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1DatabasesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.databases[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchV1DatabasesIdMutationKey() {
  return ['v1', '/v1/databases/:id', 'PATCH'] as const
}

export function getPatchV1DatabasesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.databases)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.databases)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1DatabasesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.databases)[':id']['$patch']>) {
      return parseResponse(client.v1.databases[':id'].$patch(args, options))
    },
  })
}

export function usePatchV1DatabasesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.databases)[':id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.databases)[':id']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV1DatabasesIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1DatabasesIdQueryMutationKey() {
  return ['v1', '/v1/databases/:id/query', 'POST'] as const
}

export function getPostV1DatabasesIdQueryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.databases)[':id']['query']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.databases)[':id']['query']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DatabasesIdQueryMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.databases)[':id']['query']['$post']>,
    ) {
      return parseResponse(client.v1.databases[':id'].query.$post(args, options))
    },
  })
}

export function usePostV1DatabasesIdQuery<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.databases)[':id']['query']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.databases)[':id']['query']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1DatabasesIdQueryMutationOptions<TError, TOnMutateResult>(
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

export function getV1PagesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.pages)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/pages/:id', keyArgs] as const
}

export function getV1PagesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.pages)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PagesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.pages[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PagesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.pages)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.pages)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.pages)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.pages)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getV1PagesIdQueryKey>
        >,
        { queryKey: unknown }
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.pages)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1PagesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PagesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.pages[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchV1PagesIdMutationKey() {
  return ['v1', '/v1/pages/:id', 'PATCH'] as const
}

export function getPatchV1PagesIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.pages)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.pages)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1PagesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.pages)[':id']['$patch']>) {
      return parseResponse(client.v1.pages[':id'].$patch(args, options))
    },
  })
}

export function usePatchV1PagesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.pages)[':id']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.pages)[':id']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV1PagesIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1PagesPageIdPropertiesPropertyIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.pages)[':page_id']['properties'][':property_id']['$get']>
  >,
) {
  return ['v1', '/v1/pages/:page_id/properties/:property_id', toValue(args)] as const
}

export function getV1PagesPageIdPropertiesPropertyIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.pages)[':page_id']['properties'][':property_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PagesPageIdPropertiesPropertyIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.pages[':page_id'].properties[':property_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PagesPageIdPropertiesPropertyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.pages)[':page_id']['properties'][':property_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.pages)[':page_id']['properties'][':property_id']['$get']>
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
                    (typeof client.v1.pages)[':page_id']['properties'][':property_id']['$get']
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
                    (typeof client.v1.pages)[':page_id']['properties'][':property_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1PagesPageIdPropertiesPropertyIdQueryKey>
        >,
        { queryKey: unknown }
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
            ReturnType<(typeof client.v1.pages)[':page_id']['properties'][':property_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PagesPageIdPropertiesPropertyIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PagesPageIdPropertiesPropertyIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.pages[':page_id'].properties[':property_id'].$get(toValue(args), {
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
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/users/:id', keyArgs] as const
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
