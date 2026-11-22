import {
  injectQuery,
  injectMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
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

export function getAuthinfoQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authinfo.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authinfo.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAuthinfoQueryKey>
  >({
    queryKey: getAuthinfoQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.authinfo.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectAuthinfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authinfo.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authinfo.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAuthinfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAuthinfoQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getBlobsQueryKey(args: InferRequestType<typeof client.blobs.$get>) {
  return ['blobs', '/blobs', args] as const
}

export function getBlobsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blobs.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.blobs.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blobs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBlobsQueryKey>
  >({
    queryKey: getBlobsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.blobs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectBlobs<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blobs.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.blobs.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blobs.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getBlobsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBlobsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostBlobs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blobs.$post>>>>>,
        TError,
        InferRequestType<typeof client.blobs.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBlobsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getBlobsIdQueryKey(args: InferRequestType<(typeof client.blobs)[':id']['$get']>) {
  return ['blobs', '/blobs/:id', args] as const
}

export function getBlobsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.blobs)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.blobs)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.blobs)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBlobsIdQueryKey>
  >({
    queryKey: getBlobsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.blobs[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectBlobsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.blobs)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.blobs)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.blobs)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBlobsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBlobsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectDeleteBlobsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.blobs)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.blobs)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteBlobsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getBlobsIdDownloadFilenameQueryKey(
  args: InferRequestType<(typeof client.blobs)[':id']['download'][':filename']['$get']>,
) {
  return ['blobs', '/blobs/:id/download/:filename', args] as const
}

export function getBlobsIdDownloadFilenameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.blobs)[':id']['download'][':filename']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.blobs)[':id']['download'][':filename']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBlobsIdDownloadFilenameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.blobs[':id'].download[':filename'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectBlobsIdDownloadFilename<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.blobs)[':id']['download'][':filename']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.blobs)[':id']['download'][':filename']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBlobsIdDownloadFilenameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostBlobsIdUpload<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBlobsIdUploadMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getEventsQueryKey(args: InferRequestType<typeof client.events.$get>) {
  return ['events', '/events', args] as const
}

export function getEventsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.events.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEventsQueryKey>
  >({
    queryKey: getEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.events.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectEvents<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.events.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getEventsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEventsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getEventsIdQueryKey(args: InferRequestType<(typeof client.events)[':id']['$get']>) {
  return ['events', '/events/:id', args] as const
}

export function getEventsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.events)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEventsIdQueryKey>
  >({
    queryKey: getEventsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.events[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectEventsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.events)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEventsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEventsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getItemsQueryKey(args: InferRequestType<typeof client.items.$get>) {
  return ['items', '/items', args] as const
}

export function getItemsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.items.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.items.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.items.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getItemsQueryKey>
  >({
    queryKey: getItemsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.items.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectItems<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.items.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.items.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.items.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getItemsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getItemsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostItems<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.items.$post>>>>>,
        TError,
        InferRequestType<typeof client.items.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostItemsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getItemsIdQueryKey(args: InferRequestType<(typeof client.items)[':id']['$get']>) {
  return ['items', '/items/:id', args] as const
}

export function getItemsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.items)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.items)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.items)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getItemsIdQueryKey>
  >({
    queryKey: getItemsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.items[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectItemsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.items)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.items)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.items)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getItemsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getItemsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutItemsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.items)[':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.items)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutItemsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteItemsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.items)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.items)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteItemsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getKeysQueryKey(args: InferRequestType<typeof client.keys.$get>) {
  return ['keys', '/keys', args] as const
}

export function getKeysQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keys.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.keys.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keys.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getKeysQueryKey>
  >({
    queryKey: getKeysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.keys.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectKeys<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keys.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.keys.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keys.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getKeysQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getKeysQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keys.$post>>>>>,
        TError,
        InferRequestType<typeof client.keys.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostKeysMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getKeysIdQueryKey(args: InferRequestType<(typeof client.keys)[':id']['$get']>) {
  return ['keys', '/keys/:id', args] as const
}

export function getKeysIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.keys)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getKeysIdQueryKey>
  >({
    queryKey: getKeysIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.keys[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectKeysId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.keys)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':id']['$get']>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getKeysIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getKeysIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutKeysId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':id']['$put']>>>>
        >,
        TError,
        InferRequestType<(typeof client.keys)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutKeysIdMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteKeysId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.keys)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteKeysIdMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getKvpairsQueryKey(args: InferRequestType<typeof client.kvpairs.$get>) {
  return ['kvpairs', '/kvpairs', args] as const
}

export function getKvpairsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kvpairs.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.kvpairs.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kvpairs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getKvpairsQueryKey>
  >({
    queryKey: getKvpairsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.kvpairs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectKvpairs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kvpairs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.kvpairs.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kvpairs.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getKvpairsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getKvpairsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostKvpairs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kvpairs.$post>>>>>,
        TError,
        InferRequestType<typeof client.kvpairs.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostKvpairsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getKvpairsIdQueryKey(
  args: InferRequestType<(typeof client.kvpairs)[':id']['$get']>,
) {
  return ['kvpairs', '/kvpairs/:id', args] as const
}

export function getKvpairsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.kvpairs)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.kvpairs)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.kvpairs)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getKvpairsIdQueryKey>
  >({
    queryKey: getKvpairsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.kvpairs[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectKvpairsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.kvpairs)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.kvpairs)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.kvpairs)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getKvpairsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getKvpairsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutKvpairsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.kvpairs)[':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.kvpairs)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutKvpairsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteKvpairsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.kvpairs)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.kvpairs)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteKvpairsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getLocationrulesQueryKey(args: InferRequestType<typeof client.locationrules.$get>) {
  return ['locationrules', '/locationrules', args] as const
}

export function getLocationrulesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locationrules.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.locationrules.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locationrules.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLocationrulesQueryKey>
  >({
    queryKey: getLocationrulesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.locationrules.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectLocationrules<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locationrules.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.locationrules.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locationrules.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getLocationrulesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLocationrulesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostLocationrules<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locationrules.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.locationrules.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostLocationrulesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getLocationrulesIdQueryKey(
  args: InferRequestType<(typeof client.locationrules)[':id']['$get']>,
) {
  return ['locationrules', '/locationrules/:id', args] as const
}

export function getLocationrulesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.locationrules)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.locationrules)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.locationrules)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLocationrulesIdQueryKey>
  >({
    queryKey: getLocationrulesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.locationrules[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectLocationrulesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.locationrules)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.locationrules)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.locationrules)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLocationrulesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLocationrulesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutLocationrulesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.locationrules)[':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.locationrules)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutLocationrulesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteLocationrulesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteLocationrulesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getLocationsQueryKey(args: InferRequestType<typeof client.locations.$get>) {
  return ['locations', '/locations', args] as const
}

export function getLocationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locations.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.locations.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locations.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLocationsQueryKey>
  >({
    queryKey: getLocationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.locations.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectLocations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.locations.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locations.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getLocationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLocationsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostLocations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locations.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.locations.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostLocationsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getLocationsIdQueryKey(
  args: InferRequestType<(typeof client.locations)[':id']['$get']>,
) {
  return ['locations', '/locations/:id', args] as const
}

export function getLocationsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.locations)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.locations)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.locations)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLocationsIdQueryKey>
  >({
    queryKey: getLocationsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.locations[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectLocationsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.locations)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.locations)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.locations)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLocationsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLocationsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutLocationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.locations)[':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.locations)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutLocationsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteLocationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.locations)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.locations)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteLocationsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPresencesQueryKey(args: InferRequestType<typeof client.presences.$get>) {
  return ['presences', '/presences', args] as const
}

export function getPresencesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.presences.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.presences.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.presences.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPresencesQueryKey>
  >({
    queryKey: getPresencesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.presences.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectPresences<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.presences.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.presences.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.presences.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPresencesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPresencesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPresencesIdQueryKey(
  args: InferRequestType<(typeof client.presences)[':id']['$get']>,
) {
  return ['presences', '/presences/:id', args] as const
}

export function getPresencesIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.presences)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.presences)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.presences)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPresencesIdQueryKey>
  >({
    queryKey: getPresencesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.presences[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectPresencesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.presences)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.presences)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.presences)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPresencesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPresencesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getServicesQueryKey(args: InferRequestType<typeof client.services.$get>) {
  return ['services', '/services', args] as const
}

export function getServicesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.services.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.services.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.services.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getServicesQueryKey>
  >({
    queryKey: getServicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.services.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectServices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.services.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.services.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.services.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getServicesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getServicesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getServicesIdQueryKey(
  args: InferRequestType<(typeof client.services)[':id']['$get']>,
) {
  return ['services', '/services/:id', args] as const
}

export function getServicesIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.services)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.services)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.services)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getServicesIdQueryKey>
  >({
    queryKey: getServicesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.services[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectServicesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.services)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.services)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.services)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getServicesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getServicesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutServicesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.services)[':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.services)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutServicesIdMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getSetsItemlistsQueryKey(
  args: InferRequestType<typeof client.sets.itemlists.$get>,
) {
  return ['sets', '/sets/itemlists', args] as const
}

export function getSetsItemlistsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sets.itemlists.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.sets.itemlists.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sets.itemlists.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSetsItemlistsQueryKey>
  >({
    queryKey: getSetsItemlistsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sets.itemlists.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSetsItemlists<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sets.itemlists.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.sets.itemlists.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sets.itemlists.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSetsItemlistsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSetsItemlistsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostSetsItemlists<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sets.itemlists.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.sets.itemlists.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSetsItemlistsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getSetsItemlistsIdQueryKey(
  args: InferRequestType<(typeof client.sets.itemlists)[':id']['$get']>,
) {
  return ['sets', '/sets/itemlists/:id', args] as const
}

export function getSetsItemlistsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sets.itemlists)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sets.itemlists)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.sets.itemlists)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSetsItemlistsIdQueryKey>
  >({
    queryKey: getSetsItemlistsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sets.itemlists[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSetsItemlistsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sets.itemlists)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.sets.itemlists)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.sets.itemlists)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSetsItemlistsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSetsItemlistsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutSetsItemlistsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.sets.itemlists)[':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.sets.itemlists)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutSetsItemlistsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteSetsItemlistsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteSetsItemlistsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getSetsItemlistsIdIdsQueryKey(
  args: InferRequestType<(typeof client.sets.itemlists)[':id']['ids']['$get']>,
) {
  return ['sets', '/sets/itemlists/:id/ids', args] as const
}

export function getSetsItemlistsIdIdsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sets.itemlists)[':id']['ids']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sets.itemlists)[':id']['ids']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSetsItemlistsIdIdsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sets.itemlists[':id'].ids.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSetsItemlistsIdIds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sets.itemlists)[':id']['ids']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.sets.itemlists)[':id']['ids']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSetsItemlistsIdIdsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostSetsItemlistsIdIds<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSetsItemlistsIdIdsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteSetsItemlistsIdIdsItemId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteSetsItemlistsIdIdsItemIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getSetsSpotlistsQueryKey(
  args: InferRequestType<typeof client.sets.spotlists.$get>,
) {
  return ['sets', '/sets/spotlists', args] as const
}

export function getSetsSpotlistsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sets.spotlists.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.sets.spotlists.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sets.spotlists.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSetsSpotlistsQueryKey>
  >({
    queryKey: getSetsSpotlistsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sets.spotlists.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSetsSpotlists<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sets.spotlists.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.sets.spotlists.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sets.spotlists.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSetsSpotlistsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSetsSpotlistsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostSetsSpotlists<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sets.spotlists.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.sets.spotlists.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSetsSpotlistsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getSetsSpotlistsIdQueryKey(
  args: InferRequestType<(typeof client.sets.spotlists)[':id']['$get']>,
) {
  return ['sets', '/sets/spotlists/:id', args] as const
}

export function getSetsSpotlistsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sets.spotlists)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sets.spotlists)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.sets.spotlists)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSetsSpotlistsIdQueryKey>
  >({
    queryKey: getSetsSpotlistsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sets.spotlists[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSetsSpotlistsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sets.spotlists)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.sets.spotlists)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.sets.spotlists)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSetsSpotlistsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSetsSpotlistsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutSetsSpotlistsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.sets.spotlists)[':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.sets.spotlists)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutSetsSpotlistsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteSetsSpotlistsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteSetsSpotlistsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getSetsSpotlistsIdIdsQueryKey(
  args: InferRequestType<(typeof client.sets.spotlists)[':id']['ids']['$get']>,
) {
  return ['sets', '/sets/spotlists/:id/ids', args] as const
}

export function getSetsSpotlistsIdIdsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sets.spotlists)[':id']['ids']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sets.spotlists)[':id']['ids']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSetsSpotlistsIdIdsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sets.spotlists[':id'].ids.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSetsSpotlistsIdIds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sets.spotlists)[':id']['ids']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.sets.spotlists)[':id']['ids']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSetsSpotlistsIdIdsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostSetsSpotlistsIdIds<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSetsSpotlistsIdIdsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteSetsSpotlistsIdIdsItemId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteSetsSpotlistsIdIdsItemIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getSpotsQueryKey(args: InferRequestType<typeof client.spots.$get>) {
  return ['spots', '/spots', args] as const
}

export function getSpotsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spots.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.spots.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spots.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSpotsQueryKey>
  >({
    queryKey: getSpotsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spots.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSpots<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spots.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.spots.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spots.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSpotsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSpotsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getSpotsIdQueryKey(args: InferRequestType<(typeof client.spots)[':id']['$get']>) {
  return ['spots', '/spots/:id', args] as const
}

export function getSpotsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.spots)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.spots)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.spots)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSpotsIdQueryKey>
  >({
    queryKey: getSpotsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spots[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSpotsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.spots)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.spots)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.spots)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpotsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSpotsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutSpotsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.spots)[':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.spots)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutSpotsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getSpotsIdSetsQueryKey(
  args: InferRequestType<(typeof client.spots)[':id']['sets']['$get']>,
) {
  return ['spots', '/spots/:id/sets', args] as const
}

export function getSpotsIdSetsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.spots)[':id']['sets']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spots)[':id']['sets']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.spots)[':id']['sets']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSpotsIdSetsQueryKey>
  >({
    queryKey: getSpotsIdSetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spots[':id'].sets.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSpotsIdSets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.spots)[':id']['sets']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.spots)[':id']['sets']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.spots)[':id']['sets']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpotsIdSetsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSpotsIdSetsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostSpotsIdSets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.spots)[':id']['sets']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.spots)[':id']['sets']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSpotsIdSetsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getSpotsIdSetsSetIdQueryKey(
  args: InferRequestType<(typeof client.spots)[':id']['sets'][':setId']['$get']>,
) {
  return ['spots', '/spots/:id/sets/:setId', args] as const
}

export function getSpotsIdSetsSetIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spots)[':id']['sets'][':setId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.spots)[':id']['sets'][':setId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSpotsIdSetsSetIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spots[':id'].sets[':setId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSpotsIdSetsSetId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.spots)[':id']['sets'][':setId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.spots)[':id']['sets'][':setId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSpotsIdSetsSetIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutSpotsIdSetsSetId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutSpotsIdSetsSetIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getSpotsetsQueryKey() {
  return ['spotsets', '/spotsets'] as const
}

export function getSpotsetsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spotsets.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spotsets.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSpotsetsQueryKey>
  >({
    queryKey: getSpotsetsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.spotsets.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSpotsets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spotsets.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spotsets.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSpotsetsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSpotsetsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectPostSpotsets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spotsets.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.spotsets.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSpotsetsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getSpotsetsIdQueryKey(
  args: InferRequestType<(typeof client.spotsets)[':id']['$get']>,
) {
  return ['spotsets', '/spotsets/:id', args] as const
}

export function getSpotsetsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.spotsets)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.spotsets)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.spotsets)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSpotsetsIdQueryKey>
  >({
    queryKey: getSpotsetsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spotsets[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSpotsetsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.spotsets)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.spotsets)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.spotsets)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpotsetsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSpotsetsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutSpotsetsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.spotsets)[':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.spotsets)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutSpotsetsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getSubscriptionsQueryKey(args: InferRequestType<typeof client.subscriptions.$get>) {
  return ['subscriptions', '/subscriptions', args] as const
}

export function getSubscriptionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.subscriptions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSubscriptionsQueryKey>
  >({
    queryKey: getSubscriptionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.subscriptions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSubscriptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.subscriptions.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSubscriptionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSubscriptionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostSubscriptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.subscriptions.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSubscriptionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getSubscriptionsIdQueryKey(
  args: InferRequestType<(typeof client.subscriptions)[':id']['$get']>,
) {
  return ['subscriptions', '/subscriptions/:id', args] as const
}

export function getSubscriptionsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.subscriptions)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.subscriptions)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.subscriptions)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSubscriptionsIdQueryKey>
  >({
    queryKey: getSubscriptionsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.subscriptions[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSubscriptionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.subscriptions)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.subscriptions)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.subscriptions)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSubscriptionsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSubscriptionsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutSubscriptionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.subscriptions)[':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.subscriptions)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutSubscriptionsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteSubscriptionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteSubscriptionsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getSubscriptionsIdEventsQueryKey(
  args: InferRequestType<(typeof client.subscriptions)[':id']['events']['$get']>,
) {
  return ['subscriptions', '/subscriptions/:id/events', args] as const
}

export function getSubscriptionsIdEventsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.subscriptions)[':id']['events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.subscriptions)[':id']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSubscriptionsIdEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.subscriptions[':id'].events.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSubscriptionsIdEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.subscriptions)[':id']['events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.subscriptions)[':id']['events']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSubscriptionsIdEventsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getUsersQueryKey(args: InferRequestType<typeof client.users.$get>) {
  return ['users', '/users', args] as const
}

export function getUsersQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.users.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUsersQueryKey>
  >({
    queryKey: getUsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectUsers<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.users.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getUsersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostUsers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$post>>>>>,
        TError,
        InferRequestType<typeof client.users.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsersMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getUsersIdQueryKey(args: InferRequestType<(typeof client.users)[':id']['$get']>) {
  return ['users', '/users/:id', args] as const
}

export function getUsersIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.users)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdQueryKey>
  >({
    queryKey: getUsersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectUsersId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutUsersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.users)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutUsersIdMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteUsersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.users)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteUsersIdMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
