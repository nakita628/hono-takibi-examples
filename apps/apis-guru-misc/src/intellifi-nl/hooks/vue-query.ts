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

export function getAuthinfoKey() {
  return ['authinfo'] as const
}

export function getBlobsKey() {
  return ['blobs'] as const
}

export function getEventsKey() {
  return ['events'] as const
}

export function getItemsKey() {
  return ['items'] as const
}

export function getKeysKey() {
  return ['keys'] as const
}

export function getKvpairsKey() {
  return ['kvpairs'] as const
}

export function getLocationrulesKey() {
  return ['locationrules'] as const
}

export function getLocationsKey() {
  return ['locations'] as const
}

export function getPresencesKey() {
  return ['presences'] as const
}

export function getServicesKey() {
  return ['services'] as const
}

export function getSetsKey() {
  return ['sets'] as const
}

export function getSpotsKey() {
  return ['spots'] as const
}

export function getSpotsetsKey() {
  return ['spotsets'] as const
}

export function getSubscriptionsKey() {
  return ['subscriptions'] as const
}

export function getUsersKey() {
  return ['users'] as const
}

export function getAuthinfoQueryKey() {
  return ['authinfo', '/authinfo'] as const
}

export function getAuthinfoQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAuthinfoQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.authinfo.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAuthinfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authinfo.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authinfo.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authinfo.$get>>>>
          >,
          ReturnType<typeof getAuthinfoQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authinfo.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAuthinfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAuthinfoQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.authinfo.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBlobsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.blobs.$get>>,
) {
  return ['blobs', '/blobs', toValue(args)] as const
}

export function getBlobsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.blobs.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBlobsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.blobs.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useBlobs<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blobs.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.blobs.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blobs.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blobs.$get>>>>>,
          ReturnType<typeof getBlobsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blobs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBlobsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBlobsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.blobs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostBlobsMutationKey() {
  return ['blobs', '/blobs', 'POST'] as const
}

export function getPostBlobsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blobs.$post>>>>>,
    TError,
    InferRequestType<typeof client.blobs.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBlobsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.blobs.$post>) {
      return parseResponse(client.blobs.$post(args, options))
    },
  })
}

export function usePostBlobs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blobs.$post>>>>>,
          TError,
          InferRequestType<typeof client.blobs.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBlobsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getBlobsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.blobs)[':id']['$get']>>,
) {
  return ['blobs', '/blobs/:id', toValue(args)] as const
}

export function getBlobsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.blobs)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBlobsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.blobs[':id'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useBlobsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.blobs)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.blobs)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.blobs)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.blobs)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getBlobsIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.blobs)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBlobsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBlobsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.blobs[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteBlobsIdMutationKey() {
  return ['blobs', '/blobs/:id', 'DELETE'] as const
}

export function getDeleteBlobsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.blobs)[':id']['$delete']>>>>
    >,
    TError,
    InferRequestType<(typeof client.blobs)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteBlobsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.blobs)[':id']['$delete']>) {
      return parseResponse(client.blobs[':id'].$delete(args, options))
    },
  })
}

export function useDeleteBlobsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.blobs)[':id']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.blobs)[':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteBlobsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getBlobsIdDownloadFilenameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.blobs)[':id']['download'][':filename']['$get']>
  >,
) {
  return ['blobs', '/blobs/:id/download/:filename', toValue(args)] as const
}

export function getBlobsIdDownloadFilenameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.blobs)[':id']['download'][':filename']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBlobsIdDownloadFilenameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.blobs[':id'].download[':filename'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBlobsIdDownloadFilename<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.blobs)[':id']['download'][':filename']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.blobs)[':id']['download'][':filename']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.blobs)[':id']['download'][':filename']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.blobs)[':id']['download'][':filename']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBlobsIdDownloadFilenameQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.blobs)[':id']['download'][':filename']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBlobsIdDownloadFilenameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBlobsIdDownloadFilenameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.blobs[':id'].download[':filename'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostBlobsIdUploadMutationKey() {
  return ['blobs', '/blobs/:id/upload', 'POST'] as const
}

export function getPostBlobsIdUploadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.blobs)[':id']['upload']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.blobs)[':id']['upload']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBlobsIdUploadMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.blobs)[':id']['upload']['$post']>) {
      return parseResponse(client.blobs[':id'].upload.$post(args, options))
    },
  })
}

export function usePostBlobsIdUpload<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.blobs)[':id']['upload']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.blobs)[':id']['upload']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBlobsIdUploadMutationOptions<TError, TOnMutateResult>(
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

export function getEventsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.events.$get>>,
) {
  return ['events', '/events', toValue(args)] as const
}

export function getEventsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.events.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.events.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useEvents<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.events.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
          ReturnType<typeof getEventsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.events.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEventsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.events)[':id']['$get']>>,
) {
  return ['events', '/events/:id', toValue(args)] as const
}

export function getEventsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.events)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEventsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.events[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEventsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.events)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getEventsIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEventsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEventsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.events[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getItemsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.items.$get>>,
) {
  return ['items', '/items', toValue(args)] as const
}

export function getItemsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.items.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getItemsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.items.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useItems<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.items.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.items.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.items.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.items.$get>>>>>,
          ReturnType<typeof getItemsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.items.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getItemsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getItemsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.items.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostItemsMutationKey() {
  return ['items', '/items', 'POST'] as const
}

export function getPostItemsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.items.$post>>>>>,
    TError,
    InferRequestType<typeof client.items.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostItemsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.items.$post>) {
      return parseResponse(client.items.$post(args, options))
    },
  })
}

export function usePostItems<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.items.$post>>>>>,
          TError,
          InferRequestType<typeof client.items.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostItemsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getItemsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.items)[':id']['$get']>>,
) {
  return ['items', '/items/:id', toValue(args)] as const
}

export function getItemsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.items)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getItemsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.items[':id'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useItemsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.items)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.items)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.items)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.items)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getItemsIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.items)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getItemsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getItemsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.items[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutItemsIdMutationKey() {
  return ['items', '/items/:id', 'PUT'] as const
}

export function getPutItemsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.items)[':id']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.items)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutItemsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.items)[':id']['$put']>) {
      return parseResponse(client.items[':id'].$put(args, options))
    },
  })
}

export function usePutItemsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.items)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.items)[':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutItemsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteItemsIdMutationKey() {
  return ['items', '/items/:id', 'DELETE'] as const
}

export function getDeleteItemsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.items)[':id']['$delete']>>>>
    >,
    TError,
    InferRequestType<(typeof client.items)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteItemsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.items)[':id']['$delete']>) {
      return parseResponse(client.items[':id'].$delete(args, options))
    },
  })
}

export function useDeleteItemsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.items)[':id']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.items)[':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteItemsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getKeysQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.keys.$get>>) {
  return ['keys', '/keys', toValue(args)] as const
}

export function getKeysQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.keys.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKeysQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.keys.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useKeys<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keys.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.keys.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keys.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keys.$get>>>>>,
          ReturnType<typeof getKeysQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keys.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getKeysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKeysQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.keys.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostKeysMutationKey() {
  return ['keys', '/keys', 'POST'] as const
}

export function getPostKeysMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keys.$post>>>>>,
    TError,
    InferRequestType<typeof client.keys.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostKeysMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.keys.$post>) {
      return parseResponse(client.keys.$post(args, options))
    },
  })
}

export function usePostKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keys.$post>>>>>,
          TError,
          InferRequestType<typeof client.keys.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostKeysMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getKeysIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.keys)[':id']['$get']>>,
) {
  return ['keys', '/keys/:id', toValue(args)] as const
}

export function getKeysIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.keys)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKeysIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.keys[':id'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useKeysId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.keys)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getKeysIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getKeysIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKeysIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.keys[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutKeysIdMutationKey() {
  return ['keys', '/keys/:id', 'PUT'] as const
}

export function getPutKeysIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':id']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.keys)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutKeysIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.keys)[':id']['$put']>) {
      return parseResponse(client.keys[':id'].$put(args, options))
    },
  })
}

export function usePutKeysId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.keys)[':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutKeysIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteKeysIdMutationKey() {
  return ['keys', '/keys/:id', 'DELETE'] as const
}

export function getDeleteKeysIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':id']['$delete']>>>>
    >,
    TError,
    InferRequestType<(typeof client.keys)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteKeysIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.keys)[':id']['$delete']>) {
      return parseResponse(client.keys[':id'].$delete(args, options))
    },
  })
}

export function useDeleteKeysId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':id']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.keys)[':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteKeysIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getKvpairsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.kvpairs.$get>>,
) {
  return ['kvpairs', '/kvpairs', toValue(args)] as const
}

export function getKvpairsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.kvpairs.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKvpairsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.kvpairs.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useKvpairs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kvpairs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.kvpairs.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kvpairs.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kvpairs.$get>>>>
          >,
          ReturnType<typeof getKvpairsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kvpairs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getKvpairsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKvpairsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.kvpairs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostKvpairsMutationKey() {
  return ['kvpairs', '/kvpairs', 'POST'] as const
}

export function getPostKvpairsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kvpairs.$post>>>>>,
    TError,
    InferRequestType<typeof client.kvpairs.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostKvpairsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.kvpairs.$post>) {
      return parseResponse(client.kvpairs.$post(args, options))
    },
  })
}

export function usePostKvpairs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kvpairs.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.kvpairs.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostKvpairsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getKvpairsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.kvpairs)[':id']['$get']>>,
) {
  return ['kvpairs', '/kvpairs/:id', toValue(args)] as const
}

export function getKvpairsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.kvpairs)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKvpairsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.kvpairs[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKvpairsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.kvpairs)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.kvpairs)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.kvpairs)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.kvpairs)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getKvpairsIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.kvpairs)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getKvpairsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKvpairsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.kvpairs[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutKvpairsIdMutationKey() {
  return ['kvpairs', '/kvpairs/:id', 'PUT'] as const
}

export function getPutKvpairsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.kvpairs)[':id']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.kvpairs)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutKvpairsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.kvpairs)[':id']['$put']>) {
      return parseResponse(client.kvpairs[':id'].$put(args, options))
    },
  })
}

export function usePutKvpairsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.kvpairs)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.kvpairs)[':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutKvpairsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteKvpairsIdMutationKey() {
  return ['kvpairs', '/kvpairs/:id', 'DELETE'] as const
}

export function getDeleteKvpairsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.kvpairs)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.kvpairs)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteKvpairsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.kvpairs)[':id']['$delete']>) {
      return parseResponse(client.kvpairs[':id'].$delete(args, options))
    },
  })
}

export function useDeleteKvpairsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.kvpairs)[':id']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.kvpairs)[':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteKvpairsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getLocationrulesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.locationrules.$get>>,
) {
  return ['locationrules', '/locationrules', toValue(args)] as const
}

export function getLocationrulesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.locationrules.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLocationrulesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.locationrules.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLocationrules<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locationrules.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.locationrules.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locationrules.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locationrules.$get>>>>
          >,
          ReturnType<typeof getLocationrulesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locationrules.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLocationrulesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLocationrulesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.locationrules.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostLocationrulesMutationKey() {
  return ['locationrules', '/locationrules', 'POST'] as const
}

export function getPostLocationrulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locationrules.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.locationrules.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLocationrulesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.locationrules.$post>) {
      return parseResponse(client.locationrules.$post(args, options))
    },
  })
}

export function usePostLocationrules<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locationrules.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.locationrules.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLocationrulesMutationOptions<TError, TOnMutateResult>(
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

export function getLocationrulesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.locationrules)[':id']['$get']>>,
) {
  return ['locationrules', '/locationrules/:id', toValue(args)] as const
}

export function getLocationrulesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.locationrules)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLocationrulesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.locationrules[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLocationrulesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.locationrules)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.locationrules)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.locationrules)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.locationrules)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getLocationrulesIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.locationrules)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLocationrulesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLocationrulesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.locationrules[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutLocationrulesIdMutationKey() {
  return ['locationrules', '/locationrules/:id', 'PUT'] as const
}

export function getPutLocationrulesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.locationrules)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.locationrules)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutLocationrulesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.locationrules)[':id']['$put']>) {
      return parseResponse(client.locationrules[':id'].$put(args, options))
    },
  })
}

export function usePutLocationrulesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.locationrules)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.locationrules)[':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutLocationrulesIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteLocationrulesIdMutationKey() {
  return ['locationrules', '/locationrules/:id', 'DELETE'] as const
}

export function getDeleteLocationrulesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.locationrules)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.locationrules)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteLocationrulesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.locationrules)[':id']['$delete']>) {
      return parseResponse(client.locationrules[':id'].$delete(args, options))
    },
  })
}

export function useDeleteLocationrulesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.locationrules)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.locationrules)[':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteLocationrulesIdMutationOptions<TError, TOnMutateResult>(
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

export function getLocationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.locations.$get>>,
) {
  return ['locations', '/locations', toValue(args)] as const
}

export function getLocationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.locations.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLocationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.locations.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useLocations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.locations.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locations.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locations.$get>>>>
          >,
          ReturnType<typeof getLocationsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locations.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLocationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLocationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.locations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostLocationsMutationKey() {
  return ['locations', '/locations', 'POST'] as const
}

export function getPostLocationsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locations.$post>>>>>,
    TError,
    InferRequestType<typeof client.locations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLocationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.locations.$post>) {
      return parseResponse(client.locations.$post(args, options))
    },
  })
}

export function usePostLocations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locations.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.locations.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLocationsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getLocationsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.locations)[':id']['$get']>>,
) {
  return ['locations', '/locations/:id', toValue(args)] as const
}

export function getLocationsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.locations)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLocationsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.locations[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLocationsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.locations)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.locations)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.locations)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.locations)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getLocationsIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.locations)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLocationsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLocationsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.locations[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutLocationsIdMutationKey() {
  return ['locations', '/locations/:id', 'PUT'] as const
}

export function getPutLocationsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.locations)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.locations)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutLocationsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.locations)[':id']['$put']>) {
      return parseResponse(client.locations[':id'].$put(args, options))
    },
  })
}

export function usePutLocationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.locations)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.locations)[':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutLocationsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteLocationsIdMutationKey() {
  return ['locations', '/locations/:id', 'DELETE'] as const
}

export function getDeleteLocationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.locations)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.locations)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteLocationsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.locations)[':id']['$delete']>) {
      return parseResponse(client.locations[':id'].$delete(args, options))
    },
  })
}

export function useDeleteLocationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.locations)[':id']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.locations)[':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteLocationsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPresencesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.presences.$get>>,
) {
  return ['presences', '/presences', toValue(args)] as const
}

export function getPresencesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.presences.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPresencesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.presences.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePresences<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.presences.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.presences.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.presences.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.presences.$get>>>>
          >,
          ReturnType<typeof getPresencesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.presences.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPresencesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPresencesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.presences.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPresencesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.presences)[':id']['$get']>>,
) {
  return ['presences', '/presences/:id', toValue(args)] as const
}

export function getPresencesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.presences)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPresencesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.presences[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePresencesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.presences)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.presences)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.presences)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.presences)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getPresencesIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.presences)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPresencesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPresencesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.presences[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getServicesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.services.$get>>,
) {
  return ['services', '/services', toValue(args)] as const
}

export function getServicesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.services.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getServicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.services.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useServices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.services.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.services.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.services.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.services.$get>>>>
          >,
          ReturnType<typeof getServicesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.services.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getServicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getServicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.services.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getServicesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.services)[':id']['$get']>>,
) {
  return ['services', '/services/:id', toValue(args)] as const
}

export function getServicesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.services)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getServicesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.services[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useServicesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.services)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.services)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.services)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.services)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getServicesIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.services)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getServicesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getServicesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.services[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutServicesIdMutationKey() {
  return ['services', '/services/:id', 'PUT'] as const
}

export function getPutServicesIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.services)[':id']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.services)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutServicesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.services)[':id']['$put']>) {
      return parseResponse(client.services[':id'].$put(args, options))
    },
  })
}

export function usePutServicesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.services)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.services)[':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutServicesIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSetsItemlistsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sets.itemlists.$get>>,
) {
  return ['sets', '/sets/itemlists', toValue(args)] as const
}

export function getSetsItemlistsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sets.itemlists.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSetsItemlistsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sets.itemlists.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSetsItemlists<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sets.itemlists.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sets.itemlists.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sets.itemlists.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sets.itemlists.$get>>>>
          >,
          ReturnType<typeof getSetsItemlistsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sets.itemlists.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSetsItemlistsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSetsItemlistsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sets.itemlists.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSetsItemlistsMutationKey() {
  return ['sets', '/sets/itemlists', 'POST'] as const
}

export function getPostSetsItemlistsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sets.itemlists.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.sets.itemlists.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSetsItemlistsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sets.itemlists.$post>) {
      return parseResponse(client.sets.itemlists.$post(args, options))
    },
  })
}

export function usePostSetsItemlists<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.sets.itemlists.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.sets.itemlists.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSetsItemlistsMutationOptions<TError, TOnMutateResult>(
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

export function getSetsItemlistsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sets.itemlists)[':id']['$get']>>,
) {
  return ['sets', '/sets/itemlists/:id', toValue(args)] as const
}

export function getSetsItemlistsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sets.itemlists)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSetsItemlistsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sets.itemlists[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSetsItemlistsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sets.itemlists)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sets.itemlists)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sets.itemlists)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sets.itemlists)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSetsItemlistsIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.sets.itemlists)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSetsItemlistsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSetsItemlistsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sets.itemlists[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutSetsItemlistsIdMutationKey() {
  return ['sets', '/sets/itemlists/:id', 'PUT'] as const
}

export function getPutSetsItemlistsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.sets.itemlists)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.sets.itemlists)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSetsItemlistsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.sets.itemlists)[':id']['$put']>) {
      return parseResponse(client.sets.itemlists[':id'].$put(args, options))
    },
  })
}

export function usePutSetsItemlistsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sets.itemlists)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.sets.itemlists)[':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutSetsItemlistsIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteSetsItemlistsIdMutationKey() {
  return ['sets', '/sets/itemlists/:id', 'DELETE'] as const
}

export function getDeleteSetsItemlistsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.sets.itemlists)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.sets.itemlists)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSetsItemlistsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.sets.itemlists)[':id']['$delete']>) {
      return parseResponse(client.sets.itemlists[':id'].$delete(args, options))
    },
  })
}

export function useDeleteSetsItemlistsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sets.itemlists)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.sets.itemlists)[':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSetsItemlistsIdMutationOptions<TError, TOnMutateResult>(
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

export function getSetsItemlistsIdIdsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sets.itemlists)[':id']['ids']['$get']>>,
) {
  return ['sets', '/sets/itemlists/:id/ids', toValue(args)] as const
}

export function getSetsItemlistsIdIdsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sets.itemlists)[':id']['ids']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSetsItemlistsIdIdsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sets.itemlists[':id'].ids.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSetsItemlistsIdIds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sets.itemlists)[':id']['ids']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sets.itemlists)[':id']['ids']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sets.itemlists)[':id']['ids']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sets.itemlists)[':id']['ids']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSetsItemlistsIdIdsQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.sets.itemlists)[':id']['ids']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSetsItemlistsIdIdsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSetsItemlistsIdIdsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sets.itemlists[':id'].ids.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSetsItemlistsIdIdsMutationKey() {
  return ['sets', '/sets/itemlists/:id/ids', 'POST'] as const
}

export function getPostSetsItemlistsIdIdsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sets.itemlists)[':id']['ids']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sets.itemlists)[':id']['ids']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSetsItemlistsIdIdsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sets.itemlists)[':id']['ids']['$post']>,
    ) {
      return parseResponse(client.sets.itemlists[':id'].ids.$post(args, options))
    },
  })
}

export function usePostSetsItemlistsIdIds<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sets.itemlists)[':id']['ids']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.sets.itemlists)[':id']['ids']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSetsItemlistsIdIdsMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteSetsItemlistsIdIdsItemIdMutationKey() {
  return ['sets', '/sets/itemlists/:id/ids/:itemId', 'DELETE'] as const
}

export function getDeleteSetsItemlistsIdIdsItemIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sets.itemlists)[':id']['ids'][':itemId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sets.itemlists)[':id']['ids'][':itemId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSetsItemlistsIdIdsItemIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sets.itemlists)[':id']['ids'][':itemId']['$delete']>,
    ) {
      return parseResponse(client.sets.itemlists[':id'].ids[':itemId'].$delete(args, options))
    },
  })
}

export function useDeleteSetsItemlistsIdIdsItemId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.sets.itemlists)[':id']['ids'][':itemId']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.sets.itemlists)[':id']['ids'][':itemId']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSetsItemlistsIdIdsItemIdMutationOptions<
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

export function getSetsSpotlistsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sets.spotlists.$get>>,
) {
  return ['sets', '/sets/spotlists', toValue(args)] as const
}

export function getSetsSpotlistsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sets.spotlists.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSetsSpotlistsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sets.spotlists.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSetsSpotlists<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sets.spotlists.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sets.spotlists.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sets.spotlists.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sets.spotlists.$get>>>>
          >,
          ReturnType<typeof getSetsSpotlistsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sets.spotlists.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSetsSpotlistsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSetsSpotlistsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sets.spotlists.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSetsSpotlistsMutationKey() {
  return ['sets', '/sets/spotlists', 'POST'] as const
}

export function getPostSetsSpotlistsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sets.spotlists.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.sets.spotlists.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSetsSpotlistsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sets.spotlists.$post>) {
      return parseResponse(client.sets.spotlists.$post(args, options))
    },
  })
}

export function usePostSetsSpotlists<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.sets.spotlists.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.sets.spotlists.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSetsSpotlistsMutationOptions<TError, TOnMutateResult>(
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

export function getSetsSpotlistsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sets.spotlists)[':id']['$get']>>,
) {
  return ['sets', '/sets/spotlists/:id', toValue(args)] as const
}

export function getSetsSpotlistsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sets.spotlists)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSetsSpotlistsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sets.spotlists[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSetsSpotlistsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sets.spotlists)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sets.spotlists)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sets.spotlists)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sets.spotlists)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSetsSpotlistsIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.sets.spotlists)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSetsSpotlistsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSetsSpotlistsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sets.spotlists[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutSetsSpotlistsIdMutationKey() {
  return ['sets', '/sets/spotlists/:id', 'PUT'] as const
}

export function getPutSetsSpotlistsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.sets.spotlists)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.sets.spotlists)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSetsSpotlistsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.sets.spotlists)[':id']['$put']>) {
      return parseResponse(client.sets.spotlists[':id'].$put(args, options))
    },
  })
}

export function usePutSetsSpotlistsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sets.spotlists)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.sets.spotlists)[':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutSetsSpotlistsIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteSetsSpotlistsIdMutationKey() {
  return ['sets', '/sets/spotlists/:id', 'DELETE'] as const
}

export function getDeleteSetsSpotlistsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.sets.spotlists)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.sets.spotlists)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSetsSpotlistsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.sets.spotlists)[':id']['$delete']>) {
      return parseResponse(client.sets.spotlists[':id'].$delete(args, options))
    },
  })
}

export function useDeleteSetsSpotlistsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sets.spotlists)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.sets.spotlists)[':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSetsSpotlistsIdMutationOptions<TError, TOnMutateResult>(
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

export function getSetsSpotlistsIdIdsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sets.spotlists)[':id']['ids']['$get']>>,
) {
  return ['sets', '/sets/spotlists/:id/ids', toValue(args)] as const
}

export function getSetsSpotlistsIdIdsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sets.spotlists)[':id']['ids']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSetsSpotlistsIdIdsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sets.spotlists[':id'].ids.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSetsSpotlistsIdIds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sets.spotlists)[':id']['ids']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sets.spotlists)[':id']['ids']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sets.spotlists)[':id']['ids']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sets.spotlists)[':id']['ids']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSetsSpotlistsIdIdsQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.sets.spotlists)[':id']['ids']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSetsSpotlistsIdIdsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSetsSpotlistsIdIdsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sets.spotlists[':id'].ids.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSetsSpotlistsIdIdsMutationKey() {
  return ['sets', '/sets/spotlists/:id/ids', 'POST'] as const
}

export function getPostSetsSpotlistsIdIdsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sets.spotlists)[':id']['ids']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sets.spotlists)[':id']['ids']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSetsSpotlistsIdIdsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sets.spotlists)[':id']['ids']['$post']>,
    ) {
      return parseResponse(client.sets.spotlists[':id'].ids.$post(args, options))
    },
  })
}

export function usePostSetsSpotlistsIdIds<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sets.spotlists)[':id']['ids']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.sets.spotlists)[':id']['ids']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSetsSpotlistsIdIdsMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteSetsSpotlistsIdIdsItemIdMutationKey() {
  return ['sets', '/sets/spotlists/:id/ids/:itemId', 'DELETE'] as const
}

export function getDeleteSetsSpotlistsIdIdsItemIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sets.spotlists)[':id']['ids'][':itemId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sets.spotlists)[':id']['ids'][':itemId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSetsSpotlistsIdIdsItemIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sets.spotlists)[':id']['ids'][':itemId']['$delete']>,
    ) {
      return parseResponse(client.sets.spotlists[':id'].ids[':itemId'].$delete(args, options))
    },
  })
}

export function useDeleteSetsSpotlistsIdIdsItemId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.sets.spotlists)[':id']['ids'][':itemId']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.sets.spotlists)[':id']['ids'][':itemId']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSetsSpotlistsIdIdsItemIdMutationOptions<
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

export function getSpotsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.spots.$get>>,
) {
  return ['spots', '/spots', toValue(args)] as const
}

export function getSpotsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.spots.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpotsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spots.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSpots<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spots.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.spots.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spots.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spots.$get>>>>>,
          ReturnType<typeof getSpotsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spots.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSpotsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpotsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spots.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSpotsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.spots)[':id']['$get']>>,
) {
  return ['spots', '/spots/:id', toValue(args)] as const
}

export function getSpotsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.spots)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpotsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spots[':id'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSpotsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.spots)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.spots)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.spots)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.spots)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getSpotsIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.spots)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSpotsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpotsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spots[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutSpotsIdMutationKey() {
  return ['spots', '/spots/:id', 'PUT'] as const
}

export function getPutSpotsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.spots)[':id']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.spots)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSpotsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.spots)[':id']['$put']>) {
      return parseResponse(client.spots[':id'].$put(args, options))
    },
  })
}

export function usePutSpotsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.spots)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.spots)[':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutSpotsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSpotsIdSetsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.spots)[':id']['sets']['$get']>>,
) {
  return ['spots', '/spots/:id/sets', toValue(args)] as const
}

export function getSpotsIdSetsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.spots)[':id']['sets']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpotsIdSetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spots[':id'].sets.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSpotsIdSets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.spots)[':id']['sets']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.spots)[':id']['sets']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.spots)[':id']['sets']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.spots)[':id']['sets']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSpotsIdSetsQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.spots)[':id']['sets']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSpotsIdSetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpotsIdSetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spots[':id'].sets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSpotsIdSetsMutationKey() {
  return ['spots', '/spots/:id/sets', 'POST'] as const
}

export function getPostSpotsIdSetsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.spots)[':id']['sets']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.spots)[':id']['sets']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSpotsIdSetsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.spots)[':id']['sets']['$post']>) {
      return parseResponse(client.spots[':id'].sets.$post(args, options))
    },
  })
}

export function usePostSpotsIdSets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.spots)[':id']['sets']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.spots)[':id']['sets']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSpotsIdSetsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSpotsIdSetsSetIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.spots)[':id']['sets'][':setId']['$get']>>,
) {
  return ['spots', '/spots/:id/sets/:setId', toValue(args)] as const
}

export function getSpotsIdSetsSetIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.spots)[':id']['sets'][':setId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpotsIdSetsSetIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spots[':id'].sets[':setId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSpotsIdSetsSetId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spots)[':id']['sets'][':setId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.spots)[':id']['sets'][':setId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.spots)[':id']['sets'][':setId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.spots)[':id']['sets'][':setId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSpotsIdSetsSetIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.spots)[':id']['sets'][':setId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSpotsIdSetsSetIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpotsIdSetsSetIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spots[':id'].sets[':setId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutSpotsIdSetsSetIdMutationKey() {
  return ['spots', '/spots/:id/sets/:setId', 'PUT'] as const
}

export function getPutSpotsIdSetsSetIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.spots)[':id']['sets'][':setId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.spots)[':id']['sets'][':setId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSpotsIdSetsSetIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.spots)[':id']['sets'][':setId']['$put']>,
    ) {
      return parseResponse(client.spots[':id'].sets[':setId'].$put(args, options))
    },
  })
}

export function usePutSpotsIdSetsSetId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.spots)[':id']['sets'][':setId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.spots)[':id']['sets'][':setId']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutSpotsIdSetsSetIdMutationOptions<TError, TOnMutateResult>(
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

export function getSpotsetsQueryKey() {
  return ['spotsets', '/spotsets'] as const
}

export function getSpotsetsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSpotsetsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spotsets.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSpotsets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spotsets.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spotsets.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spotsets.$get>>>>
          >,
          ReturnType<typeof getSpotsetsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spotsets.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSpotsetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSpotsetsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.spotsets.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSpotsetsMutationKey() {
  return ['spotsets', '/spotsets', 'POST'] as const
}

export function getPostSpotsetsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spotsets.$post>>>>>,
    TError,
    InferRequestType<typeof client.spotsets.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSpotsetsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.spotsets.$post>) {
      return parseResponse(client.spotsets.$post(args, options))
    },
  })
}

export function usePostSpotsets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spotsets.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.spotsets.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSpotsetsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSpotsetsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.spotsets)[':id']['$get']>>,
) {
  return ['spotsets', '/spotsets/:id', toValue(args)] as const
}

export function getSpotsetsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.spotsets)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpotsetsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spotsets[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSpotsetsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.spotsets)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.spotsets)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.spotsets)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.spotsets)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getSpotsetsIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.spotsets)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSpotsetsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpotsetsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spotsets[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutSpotsetsIdMutationKey() {
  return ['spotsets', '/spotsets/:id', 'PUT'] as const
}

export function getPutSpotsetsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.spotsets)[':id']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.spotsets)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSpotsetsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.spotsets)[':id']['$put']>) {
      return parseResponse(client.spotsets[':id'].$put(args, options))
    },
  })
}

export function usePutSpotsetsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.spotsets)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.spotsets)[':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutSpotsetsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSubscriptionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.subscriptions.$get>>,
) {
  return ['subscriptions', '/subscriptions', toValue(args)] as const
}

export function getSubscriptionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.subscriptions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSubscriptionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.subscriptions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSubscriptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.subscriptions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$get>>>>
          >,
          ReturnType<typeof getSubscriptionsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSubscriptionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSubscriptionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.subscriptions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSubscriptionsMutationKey() {
  return ['subscriptions', '/subscriptions', 'POST'] as const
}

export function getPostSubscriptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.subscriptions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSubscriptionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.subscriptions.$post>) {
      return parseResponse(client.subscriptions.$post(args, options))
    },
  })
}

export function usePostSubscriptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.subscriptions.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSubscriptionsMutationOptions<TError, TOnMutateResult>(
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

export function getSubscriptionsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.subscriptions)[':id']['$get']>>,
) {
  return ['subscriptions', '/subscriptions/:id', toValue(args)] as const
}

export function getSubscriptionsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.subscriptions)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSubscriptionsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.subscriptions[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSubscriptionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.subscriptions)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.subscriptions)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.subscriptions)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.subscriptions)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSubscriptionsIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.subscriptions)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSubscriptionsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSubscriptionsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.subscriptions[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutSubscriptionsIdMutationKey() {
  return ['subscriptions', '/subscriptions/:id', 'PUT'] as const
}

export function getPutSubscriptionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.subscriptions)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.subscriptions)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSubscriptionsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.subscriptions)[':id']['$put']>) {
      return parseResponse(client.subscriptions[':id'].$put(args, options))
    },
  })
}

export function usePutSubscriptionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.subscriptions)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.subscriptions)[':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutSubscriptionsIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteSubscriptionsIdMutationKey() {
  return ['subscriptions', '/subscriptions/:id', 'DELETE'] as const
}

export function getDeleteSubscriptionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.subscriptions)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.subscriptions)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSubscriptionsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.subscriptions)[':id']['$delete']>) {
      return parseResponse(client.subscriptions[':id'].$delete(args, options))
    },
  })
}

export function useDeleteSubscriptionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.subscriptions)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.subscriptions)[':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSubscriptionsIdMutationOptions<TError, TOnMutateResult>(
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

export function getSubscriptionsIdEventsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.subscriptions)[':id']['events']['$get']>>,
) {
  return ['subscriptions', '/subscriptions/:id/events', toValue(args)] as const
}

export function getSubscriptionsIdEventsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.subscriptions)[':id']['events']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSubscriptionsIdEventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.subscriptions[':id'].events.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSubscriptionsIdEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.subscriptions)[':id']['events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.subscriptions)[':id']['events']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.subscriptions)[':id']['events']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.subscriptions)[':id']['events']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSubscriptionsIdEventsQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.subscriptions)[':id']['events']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSubscriptionsIdEventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSubscriptionsIdEventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.subscriptions[':id'].events.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.$get>>,
) {
  return ['users', '/users', toValue(args)] as const
}

export function getUsersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useUsers<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
          ReturnType<typeof getUsersQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostUsersMutationKey() {
  return ['users', '/users', 'POST'] as const
}

export function getPostUsersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$post>>>>>,
    TError,
    InferRequestType<typeof client.users.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.users.$post>) {
      return parseResponse(client.users.$post(args, options))
    },
  })
}

export function usePostUsers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$post>>>>>,
          TError,
          InferRequestType<typeof client.users.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUsersMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getUsersIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':id']['$get']>>,
) {
  return ['users', '/users/:id', toValue(args)] as const
}

export function getUsersIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':id'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useUsersId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getUsersIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutUsersIdMutationKey() {
  return ['users', '/users/:id', 'PUT'] as const
}

export function getPutUsersIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.users)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutUsersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users)[':id']['$put']>) {
      return parseResponse(client.users[':id'].$put(args, options))
    },
  })
}

export function usePutUsersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.users)[':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutUsersIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteUsersIdMutationKey() {
  return ['users', '/users/:id', 'DELETE'] as const
}

export function getDeleteUsersIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$delete']>>>>
    >,
    TError,
    InferRequestType<(typeof client.users)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users)[':id']['$delete']>) {
      return parseResponse(client.users[':id'].$delete(args, options))
    },
  })
}

export function useDeleteUsersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.users)[':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteUsersIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
