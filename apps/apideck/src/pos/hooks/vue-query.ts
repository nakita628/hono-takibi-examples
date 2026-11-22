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

export function getPosKey() {
  return ['pos'] as const
}

export function getPosItemsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.pos.items.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['pos', '/pos/items', keyArgs] as const
}

export function getPosItemsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.pos.items.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPosItemsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.pos.items.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePosItems<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pos.items.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.pos.items.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pos.items.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pos.items.$get>>>>
          >,
          ReturnType<typeof getPosItemsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pos.items.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPosItemsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPosItemsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.pos.items.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostPosItems<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pos.items.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.pos.items.$post>,
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
  const mutationDefaults = getPostPosItemsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPosItemsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.pos.items)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['pos', '/pos/items/:id', keyArgs] as const
}

export function getPosItemsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.pos.items)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPosItemsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.pos.items[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePosItemsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.pos.items)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.pos.items)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.pos.items)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.pos.items)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getPosItemsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.pos.items)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPosItemsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPosItemsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.pos.items[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeletePosItemsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.pos.items)[':id']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.pos.items)[':id']['$delete']>,
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
  const mutationDefaults = getDeletePosItemsIdMutationOptions<TError, TOnMutateResult>(
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

export function usePatchPosItemsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.pos.items)[':id']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.pos.items)[':id']['$patch']>,
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
  const mutationDefaults = getPatchPosItemsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPosLocationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.pos.locations.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['pos', '/pos/locations', keyArgs] as const
}

export function getPosLocationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.pos.locations.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPosLocationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.pos.locations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePosLocations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pos.locations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.pos.locations.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pos.locations.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pos.locations.$get>>>>
          >,
          ReturnType<typeof getPosLocationsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pos.locations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPosLocationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPosLocationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.pos.locations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostPosLocations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pos.locations.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.pos.locations.$post>,
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
  const mutationDefaults = getPostPosLocationsMutationOptions<TError, TOnMutateResult>(
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

export function getPosLocationsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.pos.locations)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['pos', '/pos/locations/:id', keyArgs] as const
}

export function getPosLocationsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.pos.locations)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPosLocationsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.pos.locations[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePosLocationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.pos.locations)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.pos.locations)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.pos.locations)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.pos.locations)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPosLocationsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.pos.locations)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPosLocationsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPosLocationsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.pos.locations[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeletePosLocationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeletePosLocationsIdMutationOptions<TError, TOnMutateResult>(
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

export function usePatchPosLocationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchPosLocationsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPosMerchantsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.pos.merchants.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['pos', '/pos/merchants', keyArgs] as const
}

export function getPosMerchantsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.pos.merchants.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPosMerchantsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.pos.merchants.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePosMerchants<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pos.merchants.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.pos.merchants.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pos.merchants.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pos.merchants.$get>>>>
          >,
          ReturnType<typeof getPosMerchantsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pos.merchants.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPosMerchantsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPosMerchantsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.pos.merchants.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostPosMerchants<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pos.merchants.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.pos.merchants.$post>,
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
  const mutationDefaults = getPostPosMerchantsMutationOptions<TError, TOnMutateResult>(
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

export function getPosMerchantsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.pos.merchants)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['pos', '/pos/merchants/:id', keyArgs] as const
}

export function getPosMerchantsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.pos.merchants)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPosMerchantsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.pos.merchants[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePosMerchantsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.pos.merchants)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.pos.merchants)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.pos.merchants)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.pos.merchants)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPosMerchantsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.pos.merchants)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPosMerchantsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPosMerchantsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.pos.merchants[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeletePosMerchantsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeletePosMerchantsIdMutationOptions<TError, TOnMutateResult>(
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

export function usePatchPosMerchantsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchPosMerchantsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPosModifierGroupsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.pos)['modifier-groups']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['pos', '/pos/modifier-groups', keyArgs] as const
}

export function getPosModifierGroupsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.pos)['modifier-groups']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPosModifierGroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.pos['modifier-groups'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePosModifierGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.pos)['modifier-groups']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.pos)['modifier-groups']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.pos)['modifier-groups']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.pos)['modifier-groups']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPosModifierGroupsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.pos)['modifier-groups']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPosModifierGroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPosModifierGroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.pos['modifier-groups'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostPosModifierGroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPosModifierGroupsMutationOptions<TError, TOnMutateResult>(
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

export function getPosModifierGroupsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.pos)['modifier-groups'][':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['pos', '/pos/modifier-groups/:id', keyArgs] as const
}

export function getPosModifierGroupsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.pos)['modifier-groups'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPosModifierGroupsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.pos['modifier-groups'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePosModifierGroupsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.pos)['modifier-groups'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.pos)['modifier-groups'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.pos)['modifier-groups'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.pos)['modifier-groups'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPosModifierGroupsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.pos)['modifier-groups'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPosModifierGroupsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPosModifierGroupsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.pos['modifier-groups'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeletePosModifierGroupsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeletePosModifierGroupsIdMutationOptions<TError, TOnMutateResult>(
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

export function usePatchPosModifierGroupsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchPosModifierGroupsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPosModifiersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.pos.modifiers.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['pos', '/pos/modifiers', keyArgs] as const
}

export function getPosModifiersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.pos.modifiers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPosModifiersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.pos.modifiers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePosModifiers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pos.modifiers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.pos.modifiers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pos.modifiers.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pos.modifiers.$get>>>>
          >,
          ReturnType<typeof getPosModifiersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pos.modifiers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPosModifiersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPosModifiersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.pos.modifiers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostPosModifiers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pos.modifiers.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.pos.modifiers.$post>,
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
  const mutationDefaults = getPostPosModifiersMutationOptions<TError, TOnMutateResult>(
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

export function getPosModifiersIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.pos.modifiers)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['pos', '/pos/modifiers/:id', keyArgs] as const
}

export function getPosModifiersIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.pos.modifiers)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPosModifiersIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.pos.modifiers[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePosModifiersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.pos.modifiers)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.pos.modifiers)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.pos.modifiers)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.pos.modifiers)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPosModifiersIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.pos.modifiers)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPosModifiersIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPosModifiersIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.pos.modifiers[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeletePosModifiersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeletePosModifiersIdMutationOptions<TError, TOnMutateResult>(
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

export function usePatchPosModifiersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchPosModifiersIdMutationOptions<TError, TOnMutateResult>(
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

export function getPosOrderTypesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.pos)['order-types']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['pos', '/pos/order-types', keyArgs] as const
}

export function getPosOrderTypesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.pos)['order-types']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPosOrderTypesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.pos['order-types'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePosOrderTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.pos)['order-types']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.pos)['order-types']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.pos)['order-types']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.pos)['order-types']['$get']>>>
            >
          >,
          ReturnType<typeof getPosOrderTypesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.pos)['order-types']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPosOrderTypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPosOrderTypesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.pos['order-types'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostPosOrderTypes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.pos)['order-types']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.pos)['order-types']['$post']>,
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
  const mutationDefaults = getPostPosOrderTypesMutationOptions<TError, TOnMutateResult>(
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

export function getPosOrderTypesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.pos)['order-types'][':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['pos', '/pos/order-types/:id', keyArgs] as const
}

export function getPosOrderTypesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.pos)['order-types'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPosOrderTypesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.pos['order-types'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePosOrderTypesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.pos)['order-types'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.pos)['order-types'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.pos)['order-types'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.pos)['order-types'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPosOrderTypesIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.pos)['order-types'][':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPosOrderTypesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPosOrderTypesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.pos['order-types'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeletePosOrderTypesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeletePosOrderTypesIdMutationOptions<TError, TOnMutateResult>(
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

export function usePatchPosOrderTypesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchPosOrderTypesIdMutationOptions<TError, TOnMutateResult>(
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

export function getPosOrdersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.pos.orders.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['pos', '/pos/orders', keyArgs] as const
}

export function getPosOrdersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.pos.orders.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPosOrdersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.pos.orders.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePosOrders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pos.orders.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.pos.orders.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pos.orders.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pos.orders.$get>>>>
          >,
          ReturnType<typeof getPosOrdersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pos.orders.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPosOrdersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPosOrdersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.pos.orders.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostPosOrders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pos.orders.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.pos.orders.$post>,
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
  const mutationDefaults = getPostPosOrdersMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPosOrdersIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.pos.orders)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['pos', '/pos/orders/:id', keyArgs] as const
}

export function getPosOrdersIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.pos.orders)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPosOrdersIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.pos.orders[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePosOrdersId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.pos.orders)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.pos.orders)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.pos.orders)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.pos.orders)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getPosOrdersIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.pos.orders)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPosOrdersIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPosOrdersIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.pos.orders[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeletePosOrdersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.pos.orders)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.pos.orders)[':id']['$delete']>,
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
  const mutationDefaults = getDeletePosOrdersIdMutationOptions<TError, TOnMutateResult>(
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

export function usePatchPosOrdersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.pos.orders)[':id']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.pos.orders)[':id']['$patch']>,
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
  const mutationDefaults = getPatchPosOrdersIdMutationOptions<TError, TOnMutateResult>(
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

export function usePostPosOrdersIdPay<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPosOrdersIdPayMutationOptions<TError, TOnMutateResult>(
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

export function getPosPaymentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.pos.payments.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['pos', '/pos/payments', keyArgs] as const
}

export function getPosPaymentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.pos.payments.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPosPaymentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.pos.payments.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePosPayments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pos.payments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.pos.payments.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pos.payments.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pos.payments.$get>>>>
          >,
          ReturnType<typeof getPosPaymentsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pos.payments.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPosPaymentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPosPaymentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.pos.payments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostPosPayments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pos.payments.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.pos.payments.$post>,
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
  const mutationDefaults = getPostPosPaymentsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPosPaymentsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.pos.payments)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['pos', '/pos/payments/:id', keyArgs] as const
}

export function getPosPaymentsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.pos.payments)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPosPaymentsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.pos.payments[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePosPaymentsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.pos.payments)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.pos.payments)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.pos.payments)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.pos.payments)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getPosPaymentsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.pos.payments)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPosPaymentsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPosPaymentsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.pos.payments[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeletePosPaymentsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeletePosPaymentsIdMutationOptions<TError, TOnMutateResult>(
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

export function usePatchPosPaymentsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.pos.payments)[':id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.pos.payments)[':id']['$patch']>,
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
  const mutationDefaults = getPatchPosPaymentsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPosTendersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.pos.tenders.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['pos', '/pos/tenders', keyArgs] as const
}

export function getPosTendersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.pos.tenders.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPosTendersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.pos.tenders.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePosTenders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pos.tenders.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.pos.tenders.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pos.tenders.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pos.tenders.$get>>>>
          >,
          ReturnType<typeof getPosTendersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pos.tenders.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPosTendersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPosTendersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.pos.tenders.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostPosTenders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pos.tenders.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.pos.tenders.$post>,
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
  const mutationDefaults = getPostPosTendersMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPosTendersIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.pos.tenders)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['pos', '/pos/tenders/:id', keyArgs] as const
}

export function getPosTendersIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.pos.tenders)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPosTendersIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.pos.tenders[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePosTendersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.pos.tenders)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.pos.tenders)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.pos.tenders)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.pos.tenders)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getPosTendersIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.pos.tenders)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPosTendersIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPosTendersIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.pos.tenders[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeletePosTendersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.pos.tenders)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.pos.tenders)[':id']['$delete']>,
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
  const mutationDefaults = getDeletePosTendersIdMutationOptions<TError, TOnMutateResult>(
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

export function usePatchPosTendersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.pos.tenders)[':id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.pos.tenders)[':id']['$patch']>,
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
  const mutationDefaults = getPatchPosTendersIdMutationOptions<TError, TOnMutateResult>(
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
