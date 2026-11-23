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

export function getPosKey() {
  return ['pos'] as const
}

export function getPosItemsQueryKey(args: InferRequestType<typeof client.pos.items.$get>) {
  const { header: _, ...keyArgs } = args
  return ['pos', '/pos/items', keyArgs] as const
}

export function getPosItemsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pos.items.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.pos.items.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pos.items.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPosItemsQueryKey>
  >({
    queryKey: getPosItemsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.pos.items.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectPosItems<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pos.items.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.pos.items.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pos.items.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPosItemsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPosItemsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostPosItemsMutationKey() {
  return ['pos', '/pos/items', 'POST'] as const
}

export function getPostPosItemsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pos.items.$post>>>>>,
    TError,
    InferRequestType<typeof client.pos.items.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPosItemsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.pos.items.$post>) {
      return parseResponse(client.pos.items.$post(args, options))
    },
  })
}

export function injectPostPosItems<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pos.items.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.pos.items.$post>,
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
    const mutationDefaults = getPostPosItemsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPosItemsIdQueryKey(
  args: InferRequestType<(typeof client.pos.items)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['pos', '/pos/items/:id', keyArgs] as const
}

export function getPosItemsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.pos.items)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.pos.items)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.pos.items)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPosItemsIdQueryKey>
  >({
    queryKey: getPosItemsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.pos.items[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectPosItemsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.pos.items)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.pos.items)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.pos.items)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPosItemsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPosItemsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDeletePosItemsIdMutationKey() {
  return ['pos', '/pos/items/:id', 'DELETE'] as const
}

export function getDeletePosItemsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.pos.items)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.pos.items)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePosItemsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.pos.items)[':id']['$delete']>) {
      return parseResponse(client.pos.items[':id'].$delete(args, options))
    },
  })
}

export function injectDeletePosItemsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.pos.items)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.pos.items)[':id']['$delete']>,
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
    const mutationDefaults = getDeletePosItemsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchPosItemsIdMutationKey() {
  return ['pos', '/pos/items/:id', 'PATCH'] as const
}

export function getPatchPosItemsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.pos.items)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.pos.items)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchPosItemsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.pos.items)[':id']['$patch']>) {
      return parseResponse(client.pos.items[':id'].$patch(args, options))
    },
  })
}

export function injectPatchPosItemsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.pos.items)[':id']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.pos.items)[':id']['$patch']>,
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
    const mutationDefaults = getPatchPosItemsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPosLocationsQueryKey(args: InferRequestType<typeof client.pos.locations.$get>) {
  const { header: _, ...keyArgs } = args
  return ['pos', '/pos/locations', keyArgs] as const
}

export function getPosLocationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pos.locations.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.pos.locations.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pos.locations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPosLocationsQueryKey>
  >({
    queryKey: getPosLocationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.pos.locations.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectPosLocations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pos.locations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.pos.locations.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pos.locations.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPosLocationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPosLocationsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostPosLocationsMutationKey() {
  return ['pos', '/pos/locations', 'POST'] as const
}

export function getPostPosLocationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pos.locations.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.pos.locations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPosLocationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.pos.locations.$post>) {
      return parseResponse(client.pos.locations.$post(args, options))
    },
  })
}

export function injectPostPosLocations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pos.locations.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.pos.locations.$post>,
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
    const mutationDefaults = getPostPosLocationsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPosLocationsIdQueryKey(
  args: InferRequestType<(typeof client.pos.locations)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['pos', '/pos/locations/:id', keyArgs] as const
}

export function getPosLocationsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.pos.locations)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.pos.locations)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.pos.locations)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPosLocationsIdQueryKey>
  >({
    queryKey: getPosLocationsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.pos.locations[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectPosLocationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.pos.locations)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.pos.locations)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.pos.locations)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPosLocationsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPosLocationsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDeletePosLocationsIdMutationKey() {
  return ['pos', '/pos/locations/:id', 'DELETE'] as const
}

export function getDeletePosLocationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.pos.locations)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.pos.locations)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePosLocationsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.pos.locations)[':id']['$delete']>) {
      return parseResponse(client.pos.locations[':id'].$delete(args, options))
    },
  })
}

export function injectDeletePosLocationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.pos.locations)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.pos.locations)[':id']['$delete']>,
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
    const mutationDefaults = getDeletePosLocationsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchPosLocationsIdMutationKey() {
  return ['pos', '/pos/locations/:id', 'PATCH'] as const
}

export function getPatchPosLocationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.pos.locations)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.pos.locations)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchPosLocationsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.pos.locations)[':id']['$patch']>) {
      return parseResponse(client.pos.locations[':id'].$patch(args, options))
    },
  })
}

export function injectPatchPosLocationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.pos.locations)[':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.pos.locations)[':id']['$patch']>,
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
    const mutationDefaults = getPatchPosLocationsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPosMerchantsQueryKey(args: InferRequestType<typeof client.pos.merchants.$get>) {
  const { header: _, ...keyArgs } = args
  return ['pos', '/pos/merchants', keyArgs] as const
}

export function getPosMerchantsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pos.merchants.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.pos.merchants.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pos.merchants.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPosMerchantsQueryKey>
  >({
    queryKey: getPosMerchantsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.pos.merchants.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectPosMerchants<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pos.merchants.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.pos.merchants.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pos.merchants.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPosMerchantsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPosMerchantsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostPosMerchantsMutationKey() {
  return ['pos', '/pos/merchants', 'POST'] as const
}

export function getPostPosMerchantsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pos.merchants.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.pos.merchants.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPosMerchantsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.pos.merchants.$post>) {
      return parseResponse(client.pos.merchants.$post(args, options))
    },
  })
}

export function injectPostPosMerchants<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pos.merchants.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.pos.merchants.$post>,
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
    const mutationDefaults = getPostPosMerchantsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPosMerchantsIdQueryKey(
  args: InferRequestType<(typeof client.pos.merchants)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['pos', '/pos/merchants/:id', keyArgs] as const
}

export function getPosMerchantsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.pos.merchants)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.pos.merchants)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.pos.merchants)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPosMerchantsIdQueryKey>
  >({
    queryKey: getPosMerchantsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.pos.merchants[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectPosMerchantsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.pos.merchants)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.pos.merchants)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.pos.merchants)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPosMerchantsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPosMerchantsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDeletePosMerchantsIdMutationKey() {
  return ['pos', '/pos/merchants/:id', 'DELETE'] as const
}

export function getDeletePosMerchantsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.pos.merchants)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.pos.merchants)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePosMerchantsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.pos.merchants)[':id']['$delete']>) {
      return parseResponse(client.pos.merchants[':id'].$delete(args, options))
    },
  })
}

export function injectDeletePosMerchantsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.pos.merchants)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.pos.merchants)[':id']['$delete']>,
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
    const mutationDefaults = getDeletePosMerchantsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchPosMerchantsIdMutationKey() {
  return ['pos', '/pos/merchants/:id', 'PATCH'] as const
}

export function getPatchPosMerchantsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.pos.merchants)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.pos.merchants)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchPosMerchantsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.pos.merchants)[':id']['$patch']>) {
      return parseResponse(client.pos.merchants[':id'].$patch(args, options))
    },
  })
}

export function injectPatchPosMerchantsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.pos.merchants)[':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.pos.merchants)[':id']['$patch']>,
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
    const mutationDefaults = getPatchPosMerchantsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPosModifierGroupsQueryKey(
  args: InferRequestType<(typeof client.pos)['modifier-groups']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['pos', '/pos/modifier-groups', keyArgs] as const
}

export function getPosModifierGroupsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.pos)['modifier-groups']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.pos)['modifier-groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.pos)['modifier-groups']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPosModifierGroupsQueryKey>
  >({
    queryKey: getPosModifierGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.pos['modifier-groups'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectPosModifierGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.pos)['modifier-groups']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.pos)['modifier-groups']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.pos)['modifier-groups']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPosModifierGroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPosModifierGroupsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostPosModifierGroupsMutationKey() {
  return ['pos', '/pos/modifier-groups', 'POST'] as const
}

export function getPostPosModifierGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.pos)['modifier-groups']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.pos)['modifier-groups']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPosModifierGroupsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.pos)['modifier-groups']['$post']>) {
      return parseResponse(client.pos['modifier-groups'].$post(args, options))
    },
  })
}

export function injectPostPosModifierGroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.pos)['modifier-groups']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.pos)['modifier-groups']['$post']>,
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
    const mutationDefaults = getPostPosModifierGroupsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPosModifierGroupsIdQueryKey(
  args: InferRequestType<(typeof client.pos)['modifier-groups'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['pos', '/pos/modifier-groups/:id', keyArgs] as const
}

export function getPosModifierGroupsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.pos)['modifier-groups'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.pos)['modifier-groups'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.pos)['modifier-groups'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPosModifierGroupsIdQueryKey>
  >({
    queryKey: getPosModifierGroupsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.pos['modifier-groups'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectPosModifierGroupsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.pos)['modifier-groups'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.pos)['modifier-groups'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.pos)['modifier-groups'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPosModifierGroupsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPosModifierGroupsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDeletePosModifierGroupsIdMutationKey() {
  return ['pos', '/pos/modifier-groups/:id', 'DELETE'] as const
}

export function getDeletePosModifierGroupsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.pos)['modifier-groups'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.pos)['modifier-groups'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePosModifierGroupsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.pos)['modifier-groups'][':id']['$delete']>,
    ) {
      return parseResponse(client.pos['modifier-groups'][':id'].$delete(args, options))
    },
  })
}

export function injectDeletePosModifierGroupsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.pos)['modifier-groups'][':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.pos)['modifier-groups'][':id']['$delete']>,
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
    const mutationDefaults = getDeletePosModifierGroupsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchPosModifierGroupsIdMutationKey() {
  return ['pos', '/pos/modifier-groups/:id', 'PATCH'] as const
}

export function getPatchPosModifierGroupsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.pos)['modifier-groups'][':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.pos)['modifier-groups'][':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchPosModifierGroupsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.pos)['modifier-groups'][':id']['$patch']>,
    ) {
      return parseResponse(client.pos['modifier-groups'][':id'].$patch(args, options))
    },
  })
}

export function injectPatchPosModifierGroupsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.pos)['modifier-groups'][':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.pos)['modifier-groups'][':id']['$patch']>,
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
    const mutationDefaults = getPatchPosModifierGroupsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPosModifiersQueryKey(args: InferRequestType<typeof client.pos.modifiers.$get>) {
  const { header: _, ...keyArgs } = args
  return ['pos', '/pos/modifiers', keyArgs] as const
}

export function getPosModifiersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pos.modifiers.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.pos.modifiers.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pos.modifiers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPosModifiersQueryKey>
  >({
    queryKey: getPosModifiersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.pos.modifiers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectPosModifiers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pos.modifiers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.pos.modifiers.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pos.modifiers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPosModifiersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPosModifiersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostPosModifiersMutationKey() {
  return ['pos', '/pos/modifiers', 'POST'] as const
}

export function getPostPosModifiersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pos.modifiers.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.pos.modifiers.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPosModifiersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.pos.modifiers.$post>) {
      return parseResponse(client.pos.modifiers.$post(args, options))
    },
  })
}

export function injectPostPosModifiers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pos.modifiers.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.pos.modifiers.$post>,
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
    const mutationDefaults = getPostPosModifiersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPosModifiersIdQueryKey(
  args: InferRequestType<(typeof client.pos.modifiers)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['pos', '/pos/modifiers/:id', keyArgs] as const
}

export function getPosModifiersIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.pos.modifiers)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.pos.modifiers)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.pos.modifiers)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPosModifiersIdQueryKey>
  >({
    queryKey: getPosModifiersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.pos.modifiers[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectPosModifiersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.pos.modifiers)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.pos.modifiers)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.pos.modifiers)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPosModifiersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPosModifiersIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDeletePosModifiersIdMutationKey() {
  return ['pos', '/pos/modifiers/:id', 'DELETE'] as const
}

export function getDeletePosModifiersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.pos.modifiers)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.pos.modifiers)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePosModifiersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.pos.modifiers)[':id']['$delete']>) {
      return parseResponse(client.pos.modifiers[':id'].$delete(args, options))
    },
  })
}

export function injectDeletePosModifiersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.pos.modifiers)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.pos.modifiers)[':id']['$delete']>,
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
    const mutationDefaults = getDeletePosModifiersIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchPosModifiersIdMutationKey() {
  return ['pos', '/pos/modifiers/:id', 'PATCH'] as const
}

export function getPatchPosModifiersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.pos.modifiers)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.pos.modifiers)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchPosModifiersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.pos.modifiers)[':id']['$patch']>) {
      return parseResponse(client.pos.modifiers[':id'].$patch(args, options))
    },
  })
}

export function injectPatchPosModifiersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.pos.modifiers)[':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.pos.modifiers)[':id']['$patch']>,
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
    const mutationDefaults = getPatchPosModifiersIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPosOrderTypesQueryKey(
  args: InferRequestType<(typeof client.pos)['order-types']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['pos', '/pos/order-types', keyArgs] as const
}

export function getPosOrderTypesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.pos)['order-types']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.pos)['order-types']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.pos)['order-types']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPosOrderTypesQueryKey>
  >({
    queryKey: getPosOrderTypesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.pos['order-types'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectPosOrderTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.pos)['order-types']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.pos)['order-types']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.pos)['order-types']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPosOrderTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPosOrderTypesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostPosOrderTypesMutationKey() {
  return ['pos', '/pos/order-types', 'POST'] as const
}

export function getPostPosOrderTypesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.pos)['order-types']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.pos)['order-types']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPosOrderTypesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.pos)['order-types']['$post']>) {
      return parseResponse(client.pos['order-types'].$post(args, options))
    },
  })
}

export function injectPostPosOrderTypes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.pos)['order-types']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.pos)['order-types']['$post']>,
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
    const mutationDefaults = getPostPosOrderTypesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPosOrderTypesIdQueryKey(
  args: InferRequestType<(typeof client.pos)['order-types'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['pos', '/pos/order-types/:id', keyArgs] as const
}

export function getPosOrderTypesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.pos)['order-types'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.pos)['order-types'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.pos)['order-types'][':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPosOrderTypesIdQueryKey>
  >({
    queryKey: getPosOrderTypesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.pos['order-types'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectPosOrderTypesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.pos)['order-types'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.pos)['order-types'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.pos)['order-types'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPosOrderTypesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPosOrderTypesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDeletePosOrderTypesIdMutationKey() {
  return ['pos', '/pos/order-types/:id', 'DELETE'] as const
}

export function getDeletePosOrderTypesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.pos)['order-types'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.pos)['order-types'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePosOrderTypesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.pos)['order-types'][':id']['$delete']>) {
      return parseResponse(client.pos['order-types'][':id'].$delete(args, options))
    },
  })
}

export function injectDeletePosOrderTypesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.pos)['order-types'][':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.pos)['order-types'][':id']['$delete']>,
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
    const mutationDefaults = getDeletePosOrderTypesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchPosOrderTypesIdMutationKey() {
  return ['pos', '/pos/order-types/:id', 'PATCH'] as const
}

export function getPatchPosOrderTypesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.pos)['order-types'][':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.pos)['order-types'][':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchPosOrderTypesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.pos)['order-types'][':id']['$patch']>) {
      return parseResponse(client.pos['order-types'][':id'].$patch(args, options))
    },
  })
}

export function injectPatchPosOrderTypesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.pos)['order-types'][':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.pos)['order-types'][':id']['$patch']>,
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
    const mutationDefaults = getPatchPosOrderTypesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPosOrdersQueryKey(args: InferRequestType<typeof client.pos.orders.$get>) {
  const { header: _, ...keyArgs } = args
  return ['pos', '/pos/orders', keyArgs] as const
}

export function getPosOrdersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pos.orders.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.pos.orders.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pos.orders.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPosOrdersQueryKey>
  >({
    queryKey: getPosOrdersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.pos.orders.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectPosOrders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pos.orders.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.pos.orders.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pos.orders.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPosOrdersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPosOrdersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostPosOrdersMutationKey() {
  return ['pos', '/pos/orders', 'POST'] as const
}

export function getPostPosOrdersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pos.orders.$post>>>>>,
    TError,
    InferRequestType<typeof client.pos.orders.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPosOrdersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.pos.orders.$post>) {
      return parseResponse(client.pos.orders.$post(args, options))
    },
  })
}

export function injectPostPosOrders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pos.orders.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.pos.orders.$post>,
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
    const mutationDefaults = getPostPosOrdersMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPosOrdersIdQueryKey(
  args: InferRequestType<(typeof client.pos.orders)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['pos', '/pos/orders/:id', keyArgs] as const
}

export function getPosOrdersIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.pos.orders)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.pos.orders)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.pos.orders)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPosOrdersIdQueryKey>
  >({
    queryKey: getPosOrdersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.pos.orders[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectPosOrdersId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.pos.orders)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.pos.orders)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.pos.orders)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPosOrdersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPosOrdersIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDeletePosOrdersIdMutationKey() {
  return ['pos', '/pos/orders/:id', 'DELETE'] as const
}

export function getDeletePosOrdersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.pos.orders)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.pos.orders)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePosOrdersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.pos.orders)[':id']['$delete']>) {
      return parseResponse(client.pos.orders[':id'].$delete(args, options))
    },
  })
}

export function injectDeletePosOrdersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.pos.orders)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.pos.orders)[':id']['$delete']>,
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
    const mutationDefaults = getDeletePosOrdersIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchPosOrdersIdMutationKey() {
  return ['pos', '/pos/orders/:id', 'PATCH'] as const
}

export function getPatchPosOrdersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.pos.orders)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.pos.orders)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchPosOrdersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.pos.orders)[':id']['$patch']>) {
      return parseResponse(client.pos.orders[':id'].$patch(args, options))
    },
  })
}

export function injectPatchPosOrdersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.pos.orders)[':id']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.pos.orders)[':id']['$patch']>,
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
    const mutationDefaults = getPatchPosOrdersIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostPosOrdersIdPayMutationKey() {
  return ['pos', '/pos/orders/:id/pay', 'POST'] as const
}

export function getPostPosOrdersIdPayMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.pos.orders)[':id']['pay']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.pos.orders)[':id']['pay']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPosOrdersIdPayMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.pos.orders)[':id']['pay']['$post']>) {
      return parseResponse(client.pos.orders[':id'].pay.$post(args, options))
    },
  })
}

export function injectPostPosOrdersIdPay<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.pos.orders)[':id']['pay']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.pos.orders)[':id']['pay']['$post']>,
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
    const mutationDefaults = getPostPosOrdersIdPayMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPosPaymentsQueryKey(args: InferRequestType<typeof client.pos.payments.$get>) {
  const { header: _, ...keyArgs } = args
  return ['pos', '/pos/payments', keyArgs] as const
}

export function getPosPaymentsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pos.payments.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.pos.payments.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pos.payments.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPosPaymentsQueryKey>
  >({
    queryKey: getPosPaymentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.pos.payments.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectPosPayments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pos.payments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.pos.payments.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pos.payments.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPosPaymentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPosPaymentsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostPosPaymentsMutationKey() {
  return ['pos', '/pos/payments', 'POST'] as const
}

export function getPostPosPaymentsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pos.payments.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.pos.payments.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPosPaymentsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.pos.payments.$post>) {
      return parseResponse(client.pos.payments.$post(args, options))
    },
  })
}

export function injectPostPosPayments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pos.payments.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.pos.payments.$post>,
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
    const mutationDefaults = getPostPosPaymentsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPosPaymentsIdQueryKey(
  args: InferRequestType<(typeof client.pos.payments)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['pos', '/pos/payments/:id', keyArgs] as const
}

export function getPosPaymentsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.pos.payments)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.pos.payments)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.pos.payments)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPosPaymentsIdQueryKey>
  >({
    queryKey: getPosPaymentsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.pos.payments[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectPosPaymentsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.pos.payments)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.pos.payments)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.pos.payments)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPosPaymentsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPosPaymentsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDeletePosPaymentsIdMutationKey() {
  return ['pos', '/pos/payments/:id', 'DELETE'] as const
}

export function getDeletePosPaymentsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.pos.payments)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.pos.payments)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePosPaymentsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.pos.payments)[':id']['$delete']>) {
      return parseResponse(client.pos.payments[':id'].$delete(args, options))
    },
  })
}

export function injectDeletePosPaymentsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.pos.payments)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.pos.payments)[':id']['$delete']>,
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
    const mutationDefaults = getDeletePosPaymentsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchPosPaymentsIdMutationKey() {
  return ['pos', '/pos/payments/:id', 'PATCH'] as const
}

export function getPatchPosPaymentsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.pos.payments)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.pos.payments)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchPosPaymentsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.pos.payments)[':id']['$patch']>) {
      return parseResponse(client.pos.payments[':id'].$patch(args, options))
    },
  })
}

export function injectPatchPosPaymentsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.pos.payments)[':id']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.pos.payments)[':id']['$patch']>,
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
    const mutationDefaults = getPatchPosPaymentsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPosTendersQueryKey(args: InferRequestType<typeof client.pos.tenders.$get>) {
  const { header: _, ...keyArgs } = args
  return ['pos', '/pos/tenders', keyArgs] as const
}

export function getPosTendersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pos.tenders.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.pos.tenders.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pos.tenders.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPosTendersQueryKey>
  >({
    queryKey: getPosTendersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.pos.tenders.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectPosTenders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pos.tenders.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.pos.tenders.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pos.tenders.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPosTendersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPosTendersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostPosTendersMutationKey() {
  return ['pos', '/pos/tenders', 'POST'] as const
}

export function getPostPosTendersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pos.tenders.$post>>>>>,
    TError,
    InferRequestType<typeof client.pos.tenders.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPosTendersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.pos.tenders.$post>) {
      return parseResponse(client.pos.tenders.$post(args, options))
    },
  })
}

export function injectPostPosTenders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pos.tenders.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.pos.tenders.$post>,
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
    const mutationDefaults = getPostPosTendersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPosTendersIdQueryKey(
  args: InferRequestType<(typeof client.pos.tenders)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['pos', '/pos/tenders/:id', keyArgs] as const
}

export function getPosTendersIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.pos.tenders)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.pos.tenders)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.pos.tenders)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPosTendersIdQueryKey>
  >({
    queryKey: getPosTendersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.pos.tenders[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectPosTendersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.pos.tenders)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.pos.tenders)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.pos.tenders)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPosTendersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPosTendersIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDeletePosTendersIdMutationKey() {
  return ['pos', '/pos/tenders/:id', 'DELETE'] as const
}

export function getDeletePosTendersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.pos.tenders)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.pos.tenders)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePosTendersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.pos.tenders)[':id']['$delete']>) {
      return parseResponse(client.pos.tenders[':id'].$delete(args, options))
    },
  })
}

export function injectDeletePosTendersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.pos.tenders)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.pos.tenders)[':id']['$delete']>,
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
    const mutationDefaults = getDeletePosTendersIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchPosTendersIdMutationKey() {
  return ['pos', '/pos/tenders/:id', 'PATCH'] as const
}

export function getPatchPosTendersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.pos.tenders)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.pos.tenders)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchPosTendersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.pos.tenders)[':id']['$patch']>) {
      return parseResponse(client.pos.tenders[':id'].$patch(args, options))
    },
  })
}

export function injectPatchPosTendersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.pos.tenders)[':id']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.pos.tenders)[':id']['$patch']>,
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
    const mutationDefaults = getPatchPosTendersIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
