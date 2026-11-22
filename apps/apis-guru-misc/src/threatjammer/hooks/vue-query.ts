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

export function getPostV1AllowlistPrivateMutationKey() {
  return ['v1', '/v1/allowlist/private', 'POST'] as const
}

export function getPostV1AllowlistPrivateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.allowlist.private.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.allowlist.private.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AllowlistPrivateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.allowlist.private.$post>) {
      return parseResponse(client.v1.allowlist.private.$post(args, options))
    },
  })
}

export function usePostV1AllowlistPrivate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.allowlist.private.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.allowlist.private.$post>,
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
  const mutationDefaults = getPostV1AllowlistPrivateMutationOptions<TError, TOnMutateResult>(
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

export function getV1AllowlistPrivateAllQueryKey() {
  return ['v1', '/v1/allowlist/private/all'] as const
}

export function getV1AllowlistPrivateAllQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1AllowlistPrivateAllQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.allowlist.private.all.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AllowlistPrivateAll<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.allowlist.private.all.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.allowlist.private.all.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.allowlist.private.all.$get>>>
            >
          >,
          ReturnType<typeof getV1AllowlistPrivateAllQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.allowlist.private.all.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AllowlistPrivateAllQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1AllowlistPrivateAllQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.allowlist.private.all.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AllowlistPrivateAllResourceTypeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.allowlist.private.all)[':resource_type']['$get']>
  >,
) {
  return ['v1', '/v1/allowlist/private/all/:resource_type', toValue(args)] as const
}

export function getV1AllowlistPrivateAllResourceTypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.allowlist.private.all)[':resource_type']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AllowlistPrivateAllResourceTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.allowlist.private.all[':resource_type'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AllowlistPrivateAllResourceType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.allowlist.private.all)[':resource_type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.allowlist.private.all)[':resource_type']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.allowlist.private.all)[':resource_type']['$get']>
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
                  ReturnType<(typeof client.v1.allowlist.private.all)[':resource_type']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1AllowlistPrivateAllResourceTypeQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.allowlist.private.all)[':resource_type']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AllowlistPrivateAllResourceTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AllowlistPrivateAllResourceTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.allowlist.private.all[':resource_type'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AllowlistPrivateIpAddressQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.allowlist.private.ip)[':address']['$get']>
  >,
) {
  return ['v1', '/v1/allowlist/private/ip/:address', toValue(args)] as const
}

export function getV1AllowlistPrivateIpAddressQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.allowlist.private.ip)[':address']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AllowlistPrivateIpAddressQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.allowlist.private.ip[':address'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AllowlistPrivateIpAddress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.allowlist.private.ip)[':address']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.allowlist.private.ip)[':address']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.allowlist.private.ip)[':address']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.allowlist.private.ip)[':address']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1AllowlistPrivateIpAddressQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.allowlist.private.ip)[':address']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AllowlistPrivateIpAddressQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AllowlistPrivateIpAddressQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.allowlist.private.ip[':address'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AllowlistPrivateAllowlistIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.allowlist.private)[':allowlist_id']['$get']>
  >,
) {
  return ['v1', '/v1/allowlist/private/:allowlist_id', toValue(args)] as const
}

export function getV1AllowlistPrivateAllowlistIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.allowlist.private)[':allowlist_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AllowlistPrivateAllowlistIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.allowlist.private[':allowlist_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AllowlistPrivateAllowlistId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.allowlist.private)[':allowlist_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.allowlist.private)[':allowlist_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.allowlist.private)[':allowlist_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.allowlist.private)[':allowlist_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1AllowlistPrivateAllowlistIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.allowlist.private)[':allowlist_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AllowlistPrivateAllowlistIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AllowlistPrivateAllowlistIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.allowlist.private[':allowlist_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1AllowlistPrivateAllowlistIdMutationKey() {
  return ['v1', '/v1/allowlist/private/:allowlist_id', 'PUT'] as const
}

export function getPutV1AllowlistPrivateAllowlistIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.allowlist.private)[':allowlist_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.allowlist.private)[':allowlist_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1AllowlistPrivateAllowlistIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.allowlist.private)[':allowlist_id']['$put']>,
    ) {
      return parseResponse(client.v1.allowlist.private[':allowlist_id'].$put(args, options))
    },
  })
}

export function usePutV1AllowlistPrivateAllowlistId<
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
                Awaited<ReturnType<(typeof client.v1.allowlist.private)[':allowlist_id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.allowlist.private)[':allowlist_id']['$put']>,
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
  const mutationDefaults = getPutV1AllowlistPrivateAllowlistIdMutationOptions<
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

export function getDeleteV1AllowlistPrivateAllowlistIdMutationKey() {
  return ['v1', '/v1/allowlist/private/:allowlist_id', 'DELETE'] as const
}

export function getDeleteV1AllowlistPrivateAllowlistIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.allowlist.private)[':allowlist_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.allowlist.private)[':allowlist_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1AllowlistPrivateAllowlistIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.allowlist.private)[':allowlist_id']['$delete']>,
    ) {
      return parseResponse(client.v1.allowlist.private[':allowlist_id'].$delete(args, options))
    },
  })
}

export function useDeleteV1AllowlistPrivateAllowlistId<
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
                  ReturnType<(typeof client.v1.allowlist.private)[':allowlist_id']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.allowlist.private)[':allowlist_id']['$delete']>,
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
  const mutationDefaults = getDeleteV1AllowlistPrivateAllowlistIdMutationOptions<
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

export function getV1AllowlistPrivateAllowlistIdContentQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.allowlist.private)[':allowlist_id']['content']['$get']>
  >,
) {
  return ['v1', '/v1/allowlist/private/:allowlist_id/content', toValue(args)] as const
}

export function getV1AllowlistPrivateAllowlistIdContentQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.allowlist.private)[':allowlist_id']['content']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AllowlistPrivateAllowlistIdContentQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.allowlist.private[':allowlist_id'].content.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AllowlistPrivateAllowlistIdContent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.allowlist.private)[':allowlist_id']['content']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.allowlist.private)[':allowlist_id']['content']['$get']>
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
                    (typeof client.v1.allowlist.private)[':allowlist_id']['content']['$get']
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
                    (typeof client.v1.allowlist.private)[':allowlist_id']['content']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1AllowlistPrivateAllowlistIdContentQueryKey>
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
            ReturnType<(typeof client.v1.allowlist.private)[':allowlist_id']['content']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AllowlistPrivateAllowlistIdContentQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AllowlistPrivateAllowlistIdContentQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.allowlist.private[':allowlist_id'].content.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1AllowlistPrivateAllowlistIdContentMutationKey() {
  return ['v1', '/v1/allowlist/private/:allowlist_id/content', 'PUT'] as const
}

export function getPutV1AllowlistPrivateAllowlistIdContentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.allowlist.private)[':allowlist_id']['content']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.allowlist.private)[':allowlist_id']['content']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1AllowlistPrivateAllowlistIdContentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.allowlist.private)[':allowlist_id']['content']['$put']
      >,
    ) {
      return parseResponse(client.v1.allowlist.private[':allowlist_id'].content.$put(args, options))
    },
  })
}

export function usePutV1AllowlistPrivateAllowlistIdContent<
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
                    (typeof client.v1.allowlist.private)[':allowlist_id']['content']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.allowlist.private)[':allowlist_id']['content']['$put']
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
  const mutationDefaults = getPutV1AllowlistPrivateAllowlistIdContentMutationOptions<
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

export function getDeleteV1AllowlistPrivateAllowlistIdContentMutationKey() {
  return ['v1', '/v1/allowlist/private/:allowlist_id/content', 'DELETE'] as const
}

export function getDeleteV1AllowlistPrivateAllowlistIdContentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.allowlist.private)[':allowlist_id']['content']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.allowlist.private)[':allowlist_id']['content']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1AllowlistPrivateAllowlistIdContentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.allowlist.private)[':allowlist_id']['content']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.allowlist.private[':allowlist_id'].content.$delete(args, options),
      )
    },
  })
}

export function useDeleteV1AllowlistPrivateAllowlistIdContent<
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
                    (typeof client.v1.allowlist.private)[':allowlist_id']['content']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.allowlist.private)[':allowlist_id']['content']['$delete']
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
  const mutationDefaults = getDeleteV1AllowlistPrivateAllowlistIdContentMutationOptions<
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

export function getPutV1AllowlistPrivateAllowlistIdOriginMutationKey() {
  return ['v1', '/v1/allowlist/private/:allowlist_id/origin', 'PUT'] as const
}

export function getPutV1AllowlistPrivateAllowlistIdOriginMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.allowlist.private)[':allowlist_id']['origin']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.allowlist.private)[':allowlist_id']['origin']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1AllowlistPrivateAllowlistIdOriginMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.allowlist.private)[':allowlist_id']['origin']['$put']
      >,
    ) {
      return parseResponse(client.v1.allowlist.private[':allowlist_id'].origin.$put(args, options))
    },
  })
}

export function usePutV1AllowlistPrivateAllowlistIdOrigin<
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
                    (typeof client.v1.allowlist.private)[':allowlist_id']['origin']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.allowlist.private)[':allowlist_id']['origin']['$put']>,
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
  const mutationDefaults = getPutV1AllowlistPrivateAllowlistIdOriginMutationOptions<
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

export function getV1AllowlistPublicAllQueryKey() {
  return ['v1', '/v1/allowlist/public/all'] as const
}

export function getV1AllowlistPublicAllQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1AllowlistPublicAllQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.allowlist.public.all.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AllowlistPublicAll<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.allowlist.public.all.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.allowlist.public.all.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.allowlist.public.all.$get>>>
            >
          >,
          ReturnType<typeof getV1AllowlistPublicAllQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.allowlist.public.all.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AllowlistPublicAllQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1AllowlistPublicAllQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.allowlist.public.all.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AllowlistPublicAllResourceTypeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.allowlist.public.all)[':resource_type']['$get']>
  >,
) {
  return ['v1', '/v1/allowlist/public/all/:resource_type', toValue(args)] as const
}

export function getV1AllowlistPublicAllResourceTypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.allowlist.public.all)[':resource_type']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AllowlistPublicAllResourceTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.allowlist.public.all[':resource_type'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AllowlistPublicAllResourceType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.allowlist.public.all)[':resource_type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.allowlist.public.all)[':resource_type']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.allowlist.public.all)[':resource_type']['$get']>
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
                  ReturnType<(typeof client.v1.allowlist.public.all)[':resource_type']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1AllowlistPublicAllResourceTypeQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.allowlist.public.all)[':resource_type']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AllowlistPublicAllResourceTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AllowlistPublicAllResourceTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.allowlist.public.all[':resource_type'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AllowlistPublicIpAddressQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.allowlist.public.ip)[':address']['$get']>
  >,
) {
  return ['v1', '/v1/allowlist/public/ip/:address', toValue(args)] as const
}

export function getV1AllowlistPublicIpAddressQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.allowlist.public.ip)[':address']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AllowlistPublicIpAddressQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.allowlist.public.ip[':address'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AllowlistPublicIpAddress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.allowlist.public.ip)[':address']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.allowlist.public.ip)[':address']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.allowlist.public.ip)[':address']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.allowlist.public.ip)[':address']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1AllowlistPublicIpAddressQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.allowlist.public.ip)[':address']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AllowlistPublicIpAddressQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AllowlistPublicIpAddressQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.allowlist.public.ip[':address'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AllowlistPublicOwnedQueryKey() {
  return ['v1', '/v1/allowlist/public/owned'] as const
}

export function getV1AllowlistPublicOwnedQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1AllowlistPublicOwnedQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.allowlist.public.owned.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AllowlistPublicOwned<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.allowlist.public.owned.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.allowlist.public.owned.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.allowlist.public.owned.$get>>
              >
            >
          >,
          ReturnType<typeof getV1AllowlistPublicOwnedQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.allowlist.public.owned.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AllowlistPublicOwnedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1AllowlistPublicOwnedQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.allowlist.public.owned.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AllowlistPublicOwnedResourceTypeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.allowlist.public.owned)[':resource_type']['$get']>
  >,
) {
  return ['v1', '/v1/allowlist/public/owned/:resource_type', toValue(args)] as const
}

export function getV1AllowlistPublicOwnedResourceTypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.allowlist.public.owned)[':resource_type']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AllowlistPublicOwnedResourceTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.allowlist.public.owned[':resource_type'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AllowlistPublicOwnedResourceType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.allowlist.public.owned)[':resource_type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.allowlist.public.owned)[':resource_type']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.allowlist.public.owned)[':resource_type']['$get']>
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
                  ReturnType<(typeof client.v1.allowlist.public.owned)[':resource_type']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1AllowlistPublicOwnedResourceTypeQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.allowlist.public.owned)[':resource_type']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AllowlistPublicOwnedResourceTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AllowlistPublicOwnedResourceTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.allowlist.public.owned[':resource_type'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AllowlistPublicAllowlistIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.allowlist.public)[':allowlist_id']['$get']>
  >,
) {
  return ['v1', '/v1/allowlist/public/:allowlist_id', toValue(args)] as const
}

export function getV1AllowlistPublicAllowlistIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.allowlist.public)[':allowlist_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AllowlistPublicAllowlistIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.allowlist.public[':allowlist_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AllowlistPublicAllowlistId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.allowlist.public)[':allowlist_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.allowlist.public)[':allowlist_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.allowlist.public)[':allowlist_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.allowlist.public)[':allowlist_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1AllowlistPublicAllowlistIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.allowlist.public)[':allowlist_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AllowlistPublicAllowlistIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AllowlistPublicAllowlistIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.allowlist.public[':allowlist_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1AllowlistPublicAllowlistIdMutationKey() {
  return ['v1', '/v1/allowlist/public/:allowlist_id', 'PUT'] as const
}

export function getPutV1AllowlistPublicAllowlistIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.allowlist.public)[':allowlist_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.allowlist.public)[':allowlist_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1AllowlistPublicAllowlistIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.allowlist.public)[':allowlist_id']['$put']>,
    ) {
      return parseResponse(client.v1.allowlist.public[':allowlist_id'].$put(args, options))
    },
  })
}

export function usePutV1AllowlistPublicAllowlistId<
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
                Awaited<ReturnType<(typeof client.v1.allowlist.public)[':allowlist_id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.allowlist.public)[':allowlist_id']['$put']>,
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
  const mutationDefaults = getPutV1AllowlistPublicAllowlistIdMutationOptions<
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

export function getDeleteV1AllowlistPublicAllowlistIdMutationKey() {
  return ['v1', '/v1/allowlist/public/:allowlist_id', 'DELETE'] as const
}

export function getDeleteV1AllowlistPublicAllowlistIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.allowlist.public)[':allowlist_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.allowlist.public)[':allowlist_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1AllowlistPublicAllowlistIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.allowlist.public)[':allowlist_id']['$delete']>,
    ) {
      return parseResponse(client.v1.allowlist.public[':allowlist_id'].$delete(args, options))
    },
  })
}

export function useDeleteV1AllowlistPublicAllowlistId<
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
                Awaited<ReturnType<(typeof client.v1.allowlist.public)[':allowlist_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.allowlist.public)[':allowlist_id']['$delete']>,
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
  const mutationDefaults = getDeleteV1AllowlistPublicAllowlistIdMutationOptions<
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

export function getPutV1AllowlistPublicAllowlistIdOriginMutationKey() {
  return ['v1', '/v1/allowlist/public/:allowlist_id/origin', 'PUT'] as const
}

export function getPutV1AllowlistPublicAllowlistIdOriginMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.allowlist.public)[':allowlist_id']['origin']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.allowlist.public)[':allowlist_id']['origin']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1AllowlistPublicAllowlistIdOriginMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.allowlist.public)[':allowlist_id']['origin']['$put']
      >,
    ) {
      return parseResponse(client.v1.allowlist.public[':allowlist_id'].origin.$put(args, options))
    },
  })
}

export function usePutV1AllowlistPublicAllowlistIdOrigin<
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
                  ReturnType<(typeof client.v1.allowlist.public)[':allowlist_id']['origin']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.allowlist.public)[':allowlist_id']['origin']['$put']>,
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
  const mutationDefaults = getPutV1AllowlistPublicAllowlistIdOriginMutationOptions<
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

export function getV1AsnIpIpAddressQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.asn.ip)[':ip_address']['$get']>>,
) {
  return ['v1', '/v1/asn/ip/:ip_address', toValue(args)] as const
}

export function getV1AsnIpIpAddressQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.asn.ip)[':ip_address']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AsnIpIpAddressQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.asn.ip[':ip_address'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AsnIpIpAddress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.asn.ip)[':ip_address']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.asn.ip)[':ip_address']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.asn.ip)[':ip_address']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.asn.ip)[':ip_address']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1AsnIpIpAddressQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.asn.ip)[':ip_address']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AsnIpIpAddressQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AsnIpIpAddressQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.asn.ip[':ip_address'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1AsnPrefixMutationKey() {
  return ['v1', '/v1/asn/prefix', 'POST'] as const
}

export function getPostV1AsnPrefixMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.asn.prefix.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.asn.prefix.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AsnPrefixMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.asn.prefix.$post>) {
      return parseResponse(client.v1.asn.prefix.$post(args, options))
    },
  })
}

export function usePostV1AsnPrefix<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.asn.prefix.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.asn.prefix.$post>,
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
  const mutationDefaults = getPostV1AsnPrefixMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1AsnRegistryAllQueryKey() {
  return ['v1', '/v1/asn/registry/all'] as const
}

export function getV1AsnRegistryAllQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1AsnRegistryAllQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.asn.registry.all.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AsnRegistryAll<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.asn.registry.all.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.asn.registry.all.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.asn.registry.all.$get>>>
            >
          >,
          ReturnType<typeof getV1AsnRegistryAllQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.asn.registry.all.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1AsnRegistryAllQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1AsnRegistryAllQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.asn.registry.all.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AsnRegistryCodeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.asn.registry)[':code']['$get']>>,
) {
  return ['v1', '/v1/asn/registry/:code', toValue(args)] as const
}

export function getV1AsnRegistryCodeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.asn.registry)[':code']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AsnRegistryCodeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.asn.registry[':code'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AsnRegistryCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.asn.registry)[':code']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.asn.registry)[':code']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.asn.registry)[':code']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.asn.registry)[':code']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1AsnRegistryCodeQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.asn.registry)[':code']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AsnRegistryCodeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AsnRegistryCodeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.asn.registry[':code'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AsnStatusAllQueryKey() {
  return ['v1', '/v1/asn/status/all'] as const
}

export function getV1AsnStatusAllQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1AsnStatusAllQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.asn.status.all.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AsnStatusAll<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.asn.status.all.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.asn.status.all.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.asn.status.all.$get>>>
            >
          >,
          ReturnType<typeof getV1AsnStatusAllQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.asn.status.all.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1AsnStatusAllQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1AsnStatusAllQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.asn.status.all.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AsnStatusCodeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.asn.status)[':code']['$get']>>,
) {
  return ['v1', '/v1/asn/status/:code', toValue(args)] as const
}

export function getV1AsnStatusCodeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.asn.status)[':code']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AsnStatusCodeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.asn.status[':code'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AsnStatusCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.asn.status)[':code']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.asn.status)[':code']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.asn.status)[':code']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.asn.status)[':code']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1AsnStatusCodeQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.asn.status)[':code']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AsnStatusCodeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AsnStatusCodeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.asn.status[':code'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AsnNumberQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.asn)[':number']['$get']>>,
) {
  return ['v1', '/v1/asn/:number', toValue(args)] as const
}

export function getV1AsnNumberQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.asn)[':number']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AsnNumberQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.asn[':number'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AsnNumber<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.asn)[':number']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.asn)[':number']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.asn)[':number']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.asn)[':number']['$get']>>>
            >
          >,
          ReturnType<typeof getV1AsnNumberQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.asn)[':number']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AsnNumberQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AsnNumberQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.asn[':number'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AsnNumberPrefixesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.asn)[':number']['prefixes']['$get']>>,
) {
  return ['v1', '/v1/asn/:number/prefixes', toValue(args)] as const
}

export function getV1AsnNumberPrefixesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.asn)[':number']['prefixes']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AsnNumberPrefixesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.asn[':number'].prefixes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AsnNumberPrefixes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.asn)[':number']['prefixes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.asn)[':number']['prefixes']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.asn)[':number']['prefixes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.asn)[':number']['prefixes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1AsnNumberPrefixesQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.asn)[':number']['prefixes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AsnNumberPrefixesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AsnNumberPrefixesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.asn[':number'].prefixes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1AssessIpMutationKey() {
  return ['v1', '/v1/assess/ip', 'POST'] as const
}

export function getPostV1AssessIpMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.assess.ip.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.assess.ip.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AssessIpMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.assess.ip.$post>) {
      return parseResponse(client.v1.assess.ip.$post(args, options))
    },
  })
}

export function usePostV1AssessIp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.assess.ip.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.assess.ip.$post>,
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
  const mutationDefaults = getPostV1AssessIpMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1AssessIpCsvMutationKey() {
  return ['v1', '/v1/assess/ip/csv', 'POST'] as const
}

export function getPostV1AssessIpCsvMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.assess.ip.csv.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.assess.ip.csv.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AssessIpCsvMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.assess.ip.csv.$post>) {
      return parseResponse(client.v1.assess.ip.csv.$post(args, options))
    },
  })
}

export function usePostV1AssessIpCsv<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.assess.ip.csv.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.assess.ip.csv.$post>,
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
  const mutationDefaults = getPostV1AssessIpCsvMutationOptions<TError, TOnMutateResult>(
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

export function getV1AssessIpIpAddressQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.assess.ip)[':ip_address']['$get']>>,
) {
  return ['v1', '/v1/assess/ip/:ip_address', toValue(args)] as const
}

export function getV1AssessIpIpAddressQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.assess.ip)[':ip_address']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AssessIpIpAddressQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.assess.ip[':ip_address'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AssessIpIpAddress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.assess.ip)[':ip_address']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.assess.ip)[':ip_address']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.assess.ip)[':ip_address']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.assess.ip)[':ip_address']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1AssessIpIpAddressQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.assess.ip)[':ip_address']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AssessIpIpAddressQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AssessIpIpAddressQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.assess.ip[':ip_address'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1DatacenterIpIpAddressQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.datacenter.ip)[':ip_address']['$get']>>,
) {
  return ['v1', '/v1/datacenter/ip/:ip_address', toValue(args)] as const
}

export function getV1DatacenterIpIpAddressQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.datacenter.ip)[':ip_address']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1DatacenterIpIpAddressQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.datacenter.ip[':ip_address'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1DatacenterIpIpAddress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.datacenter.ip)[':ip_address']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.datacenter.ip)[':ip_address']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.datacenter.ip)[':ip_address']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.datacenter.ip)[':ip_address']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1DatacenterIpIpAddressQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.datacenter.ip)[':ip_address']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1DatacenterIpIpAddressQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1DatacenterIpIpAddressQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.datacenter.ip[':ip_address'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1DatacenterPrefixMutationKey() {
  return ['v1', '/v1/datacenter/prefix', 'POST'] as const
}

export function getPostV1DatacenterPrefixMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.datacenter.prefix.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.datacenter.prefix.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DatacenterPrefixMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.datacenter.prefix.$post>) {
      return parseResponse(client.v1.datacenter.prefix.$post(args, options))
    },
  })
}

export function usePostV1DatacenterPrefix<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.datacenter.prefix.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.datacenter.prefix.$post>,
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
  const mutationDefaults = getPostV1DatacenterPrefixMutationOptions<TError, TOnMutateResult>(
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

export function getV1DatacenterDatacenterIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.datacenter)[':datacenter_id']['$get']>>,
) {
  return ['v1', '/v1/datacenter/:datacenter_id', toValue(args)] as const
}

export function getV1DatacenterDatacenterIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.datacenter)[':datacenter_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1DatacenterDatacenterIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.datacenter[':datacenter_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1DatacenterDatacenterId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.datacenter)[':datacenter_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.datacenter)[':datacenter_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.datacenter)[':datacenter_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.datacenter)[':datacenter_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1DatacenterDatacenterIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.datacenter)[':datacenter_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1DatacenterDatacenterIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1DatacenterDatacenterIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.datacenter[':datacenter_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1DatacenterDatacenterIdPrefixesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.datacenter)[':datacenter_id']['prefixes']['$get']>
  >,
) {
  return ['v1', '/v1/datacenter/:datacenter_id/prefixes', toValue(args)] as const
}

export function getV1DatacenterDatacenterIdPrefixesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.datacenter)[':datacenter_id']['prefixes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1DatacenterDatacenterIdPrefixesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.datacenter[':datacenter_id'].prefixes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1DatacenterDatacenterIdPrefixes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.datacenter)[':datacenter_id']['prefixes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.datacenter)[':datacenter_id']['prefixes']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.datacenter)[':datacenter_id']['prefixes']['$get']>
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
                  ReturnType<(typeof client.v1.datacenter)[':datacenter_id']['prefixes']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1DatacenterDatacenterIdPrefixesQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.datacenter)[':datacenter_id']['prefixes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1DatacenterDatacenterIdPrefixesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1DatacenterDatacenterIdPrefixesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.datacenter[':datacenter_id'].prefixes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1DatasetIpQueryKey() {
  return ['v1', '/v1/dataset/ip'] as const
}

export function getV1DatasetIpQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1DatasetIpQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.dataset.ip.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1DatasetIp<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.dataset.ip.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.dataset.ip.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.dataset.ip.$get>>>>
          >,
          ReturnType<typeof getV1DatasetIpQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.dataset.ip.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1DatasetIpQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1DatasetIpQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.dataset.ip.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1DatasetIpNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.dataset.ip)[':name']['$get']>>,
) {
  return ['v1', '/v1/dataset/ip/:name', toValue(args)] as const
}

export function getV1DatasetIpNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.dataset.ip)[':name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1DatasetIpNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.dataset.ip[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1DatasetIpName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.dataset.ip)[':name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.dataset.ip)[':name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.dataset.ip)[':name']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.dataset.ip)[':name']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1DatasetIpNameQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.dataset.ip)[':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1DatasetIpNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1DatasetIpNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.dataset.ip[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1DenylistPrivateMutationKey() {
  return ['v1', '/v1/denylist/private', 'POST'] as const
}

export function getPostV1DenylistPrivateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.denylist.private.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.denylist.private.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DenylistPrivateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.denylist.private.$post>) {
      return parseResponse(client.v1.denylist.private.$post(args, options))
    },
  })
}

export function usePostV1DenylistPrivate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.denylist.private.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.denylist.private.$post>,
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
  const mutationDefaults = getPostV1DenylistPrivateMutationOptions<TError, TOnMutateResult>(
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

export function getV1DenylistPrivateAllQueryKey() {
  return ['v1', '/v1/denylist/private/all'] as const
}

export function getV1DenylistPrivateAllQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1DenylistPrivateAllQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.denylist.private.all.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1DenylistPrivateAll<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.denylist.private.all.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.denylist.private.all.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.denylist.private.all.$get>>>
            >
          >,
          ReturnType<typeof getV1DenylistPrivateAllQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.denylist.private.all.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1DenylistPrivateAllQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1DenylistPrivateAllQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.denylist.private.all.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1DenylistPrivateAllResourceTypeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.denylist.private.all)[':resource_type']['$get']>
  >,
) {
  return ['v1', '/v1/denylist/private/all/:resource_type', toValue(args)] as const
}

export function getV1DenylistPrivateAllResourceTypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.denylist.private.all)[':resource_type']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1DenylistPrivateAllResourceTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.denylist.private.all[':resource_type'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1DenylistPrivateAllResourceType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.denylist.private.all)[':resource_type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.denylist.private.all)[':resource_type']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.denylist.private.all)[':resource_type']['$get']>
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
                  ReturnType<(typeof client.v1.denylist.private.all)[':resource_type']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1DenylistPrivateAllResourceTypeQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.denylist.private.all)[':resource_type']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1DenylistPrivateAllResourceTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1DenylistPrivateAllResourceTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.denylist.private.all[':resource_type'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1DenylistPrivateIpAddressQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.denylist.private.ip)[':address']['$get']>
  >,
) {
  return ['v1', '/v1/denylist/private/ip/:address', toValue(args)] as const
}

export function getV1DenylistPrivateIpAddressQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.denylist.private.ip)[':address']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1DenylistPrivateIpAddressQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.denylist.private.ip[':address'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1DenylistPrivateIpAddress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.denylist.private.ip)[':address']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.denylist.private.ip)[':address']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.denylist.private.ip)[':address']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.denylist.private.ip)[':address']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1DenylistPrivateIpAddressQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.denylist.private.ip)[':address']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1DenylistPrivateIpAddressQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1DenylistPrivateIpAddressQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.denylist.private.ip[':address'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1DenylistPrivateDenylistIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.denylist.private)[':denylist_id']['$get']>
  >,
) {
  return ['v1', '/v1/denylist/private/:denylist_id', toValue(args)] as const
}

export function getV1DenylistPrivateDenylistIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.denylist.private)[':denylist_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1DenylistPrivateDenylistIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.denylist.private[':denylist_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1DenylistPrivateDenylistId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.denylist.private)[':denylist_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.denylist.private)[':denylist_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.denylist.private)[':denylist_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.denylist.private)[':denylist_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1DenylistPrivateDenylistIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.denylist.private)[':denylist_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1DenylistPrivateDenylistIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1DenylistPrivateDenylistIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.denylist.private[':denylist_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1DenylistPrivateDenylistIdMutationKey() {
  return ['v1', '/v1/denylist/private/:denylist_id', 'PUT'] as const
}

export function getPutV1DenylistPrivateDenylistIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.denylist.private)[':denylist_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.denylist.private)[':denylist_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1DenylistPrivateDenylistIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.denylist.private)[':denylist_id']['$put']>,
    ) {
      return parseResponse(client.v1.denylist.private[':denylist_id'].$put(args, options))
    },
  })
}

export function usePutV1DenylistPrivateDenylistId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.denylist.private)[':denylist_id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.denylist.private)[':denylist_id']['$put']>,
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
  const mutationDefaults = getPutV1DenylistPrivateDenylistIdMutationOptions<
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

export function getDeleteV1DenylistPrivateDenylistIdMutationKey() {
  return ['v1', '/v1/denylist/private/:denylist_id', 'DELETE'] as const
}

export function getDeleteV1DenylistPrivateDenylistIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.denylist.private)[':denylist_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.denylist.private)[':denylist_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1DenylistPrivateDenylistIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.denylist.private)[':denylist_id']['$delete']>,
    ) {
      return parseResponse(client.v1.denylist.private[':denylist_id'].$delete(args, options))
    },
  })
}

export function useDeleteV1DenylistPrivateDenylistId<
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
                Awaited<ReturnType<(typeof client.v1.denylist.private)[':denylist_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.denylist.private)[':denylist_id']['$delete']>,
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
  const mutationDefaults = getDeleteV1DenylistPrivateDenylistIdMutationOptions<
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

export function getV1DenylistPrivateDenylistIdContentQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.denylist.private)[':denylist_id']['content']['$get']>
  >,
) {
  return ['v1', '/v1/denylist/private/:denylist_id/content', toValue(args)] as const
}

export function getV1DenylistPrivateDenylistIdContentQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.denylist.private)[':denylist_id']['content']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1DenylistPrivateDenylistIdContentQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.denylist.private[':denylist_id'].content.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1DenylistPrivateDenylistIdContent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.denylist.private)[':denylist_id']['content']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.denylist.private)[':denylist_id']['content']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.denylist.private)[':denylist_id']['content']['$get']>
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
                  ReturnType<(typeof client.v1.denylist.private)[':denylist_id']['content']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1DenylistPrivateDenylistIdContentQueryKey>
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
            ReturnType<(typeof client.v1.denylist.private)[':denylist_id']['content']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1DenylistPrivateDenylistIdContentQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1DenylistPrivateDenylistIdContentQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.denylist.private[':denylist_id'].content.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1DenylistPrivateDenylistIdContentMutationKey() {
  return ['v1', '/v1/denylist/private/:denylist_id/content', 'PUT'] as const
}

export function getPutV1DenylistPrivateDenylistIdContentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.denylist.private)[':denylist_id']['content']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.denylist.private)[':denylist_id']['content']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1DenylistPrivateDenylistIdContentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.denylist.private)[':denylist_id']['content']['$put']
      >,
    ) {
      return parseResponse(client.v1.denylist.private[':denylist_id'].content.$put(args, options))
    },
  })
}

export function usePutV1DenylistPrivateDenylistIdContent<
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
                  ReturnType<(typeof client.v1.denylist.private)[':denylist_id']['content']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.denylist.private)[':denylist_id']['content']['$put']>,
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
  const mutationDefaults = getPutV1DenylistPrivateDenylistIdContentMutationOptions<
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

export function getDeleteV1DenylistPrivateDenylistIdContentMutationKey() {
  return ['v1', '/v1/denylist/private/:denylist_id/content', 'DELETE'] as const
}

export function getDeleteV1DenylistPrivateDenylistIdContentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.denylist.private)[':denylist_id']['content']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.denylist.private)[':denylist_id']['content']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1DenylistPrivateDenylistIdContentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.denylist.private)[':denylist_id']['content']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.denylist.private[':denylist_id'].content.$delete(args, options),
      )
    },
  })
}

export function useDeleteV1DenylistPrivateDenylistIdContent<
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
                    (typeof client.v1.denylist.private)[':denylist_id']['content']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.denylist.private)[':denylist_id']['content']['$delete']
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
  const mutationDefaults = getDeleteV1DenylistPrivateDenylistIdContentMutationOptions<
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

export function getPutV1DenylistPrivateDenylistIdOriginMutationKey() {
  return ['v1', '/v1/denylist/private/:denylist_id/origin', 'PUT'] as const
}

export function getPutV1DenylistPrivateDenylistIdOriginMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.denylist.private)[':denylist_id']['origin']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.denylist.private)[':denylist_id']['origin']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1DenylistPrivateDenylistIdOriginMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.denylist.private)[':denylist_id']['origin']['$put']>,
    ) {
      return parseResponse(client.v1.denylist.private[':denylist_id'].origin.$put(args, options))
    },
  })
}

export function usePutV1DenylistPrivateDenylistIdOrigin<
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
                  ReturnType<(typeof client.v1.denylist.private)[':denylist_id']['origin']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.denylist.private)[':denylist_id']['origin']['$put']>,
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
  const mutationDefaults = getPutV1DenylistPrivateDenylistIdOriginMutationOptions<
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

export function getV1DenylistPublicAllQueryKey() {
  return ['v1', '/v1/denylist/public/all'] as const
}

export function getV1DenylistPublicAllQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1DenylistPublicAllQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.denylist.public.all.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1DenylistPublicAll<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.denylist.public.all.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.denylist.public.all.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.denylist.public.all.$get>>>
            >
          >,
          ReturnType<typeof getV1DenylistPublicAllQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.denylist.public.all.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1DenylistPublicAllQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1DenylistPublicAllQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.denylist.public.all.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1DenylistPublicAllResourceTypeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.denylist.public.all)[':resource_type']['$get']>
  >,
) {
  return ['v1', '/v1/denylist/public/all/:resource_type', toValue(args)] as const
}

export function getV1DenylistPublicAllResourceTypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.denylist.public.all)[':resource_type']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1DenylistPublicAllResourceTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.denylist.public.all[':resource_type'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1DenylistPublicAllResourceType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.denylist.public.all)[':resource_type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.denylist.public.all)[':resource_type']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.denylist.public.all)[':resource_type']['$get']>
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
                  ReturnType<(typeof client.v1.denylist.public.all)[':resource_type']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1DenylistPublicAllResourceTypeQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.denylist.public.all)[':resource_type']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1DenylistPublicAllResourceTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1DenylistPublicAllResourceTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.denylist.public.all[':resource_type'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1DenylistPublicIpAddressQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.denylist.public.ip)[':address']['$get']>
  >,
) {
  return ['v1', '/v1/denylist/public/ip/:address', toValue(args)] as const
}

export function getV1DenylistPublicIpAddressQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.denylist.public.ip)[':address']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1DenylistPublicIpAddressQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.denylist.public.ip[':address'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1DenylistPublicIpAddress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.denylist.public.ip)[':address']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.denylist.public.ip)[':address']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.denylist.public.ip)[':address']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.denylist.public.ip)[':address']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1DenylistPublicIpAddressQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.denylist.public.ip)[':address']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1DenylistPublicIpAddressQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1DenylistPublicIpAddressQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.denylist.public.ip[':address'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1DenylistPublicOwnedQueryKey() {
  return ['v1', '/v1/denylist/public/owned'] as const
}

export function getV1DenylistPublicOwnedQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1DenylistPublicOwnedQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.denylist.public.owned.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1DenylistPublicOwned<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.denylist.public.owned.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.denylist.public.owned.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.denylist.public.owned.$get>>>
            >
          >,
          ReturnType<typeof getV1DenylistPublicOwnedQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.denylist.public.owned.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1DenylistPublicOwnedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1DenylistPublicOwnedQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.denylist.public.owned.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1DenylistPublicOwnedResourceTypeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.denylist.public.owned)[':resource_type']['$get']>
  >,
) {
  return ['v1', '/v1/denylist/public/owned/:resource_type', toValue(args)] as const
}

export function getV1DenylistPublicOwnedResourceTypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.denylist.public.owned)[':resource_type']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1DenylistPublicOwnedResourceTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.denylist.public.owned[':resource_type'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1DenylistPublicOwnedResourceType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.denylist.public.owned)[':resource_type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.denylist.public.owned)[':resource_type']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.denylist.public.owned)[':resource_type']['$get']>
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
                  ReturnType<(typeof client.v1.denylist.public.owned)[':resource_type']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1DenylistPublicOwnedResourceTypeQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.denylist.public.owned)[':resource_type']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1DenylistPublicOwnedResourceTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1DenylistPublicOwnedResourceTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.denylist.public.owned[':resource_type'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1DenylistPublicDenylistIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.denylist.public)[':denylist_id']['$get']>
  >,
) {
  return ['v1', '/v1/denylist/public/:denylist_id', toValue(args)] as const
}

export function getV1DenylistPublicDenylistIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.denylist.public)[':denylist_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1DenylistPublicDenylistIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.denylist.public[':denylist_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1DenylistPublicDenylistId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.denylist.public)[':denylist_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.denylist.public)[':denylist_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.denylist.public)[':denylist_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.denylist.public)[':denylist_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1DenylistPublicDenylistIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.denylist.public)[':denylist_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1DenylistPublicDenylistIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1DenylistPublicDenylistIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.denylist.public[':denylist_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1DenylistPublicDenylistIdMutationKey() {
  return ['v1', '/v1/denylist/public/:denylist_id', 'PUT'] as const
}

export function getPutV1DenylistPublicDenylistIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.denylist.public)[':denylist_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.denylist.public)[':denylist_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1DenylistPublicDenylistIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.denylist.public)[':denylist_id']['$put']>,
    ) {
      return parseResponse(client.v1.denylist.public[':denylist_id'].$put(args, options))
    },
  })
}

export function usePutV1DenylistPublicDenylistId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.denylist.public)[':denylist_id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.denylist.public)[':denylist_id']['$put']>,
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
  const mutationDefaults = getPutV1DenylistPublicDenylistIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV1DenylistPublicDenylistIdMutationKey() {
  return ['v1', '/v1/denylist/public/:denylist_id', 'DELETE'] as const
}

export function getDeleteV1DenylistPublicDenylistIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.denylist.public)[':denylist_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.denylist.public)[':denylist_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1DenylistPublicDenylistIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.denylist.public)[':denylist_id']['$delete']>,
    ) {
      return parseResponse(client.v1.denylist.public[':denylist_id'].$delete(args, options))
    },
  })
}

export function useDeleteV1DenylistPublicDenylistId<
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
                Awaited<ReturnType<(typeof client.v1.denylist.public)[':denylist_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.denylist.public)[':denylist_id']['$delete']>,
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
  const mutationDefaults = getDeleteV1DenylistPublicDenylistIdMutationOptions<
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

export function getPutV1DenylistPublicDenylistIdOriginMutationKey() {
  return ['v1', '/v1/denylist/public/:denylist_id/origin', 'PUT'] as const
}

export function getPutV1DenylistPublicDenylistIdOriginMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.denylist.public)[':denylist_id']['origin']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.denylist.public)[':denylist_id']['origin']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1DenylistPublicDenylistIdOriginMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.denylist.public)[':denylist_id']['origin']['$put']>,
    ) {
      return parseResponse(client.v1.denylist.public[':denylist_id'].origin.$put(args, options))
    },
  })
}

export function usePutV1DenylistPublicDenylistIdOrigin<
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
                  ReturnType<(typeof client.v1.denylist.public)[':denylist_id']['origin']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.denylist.public)[':denylist_id']['origin']['$put']>,
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
  const mutationDefaults = getPutV1DenylistPublicDenylistIdOriginMutationOptions<
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

export function getV1DenylistReportedIpQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.denylist.reported.ip.$get>>,
) {
  return ['v1', '/v1/denylist/reported/ip', toValue(args)] as const
}

export function getV1DenylistReportedIpQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.denylist.reported.ip.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1DenylistReportedIpQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.denylist.reported.ip.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1DenylistReportedIp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.denylist.reported.ip.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.denylist.reported.ip.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.denylist.reported.ip.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.denylist.reported.ip.$get>>>
            >
          >,
          ReturnType<typeof getV1DenylistReportedIpQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.denylist.reported.ip.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1DenylistReportedIpQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1DenylistReportedIpQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.denylist.reported.ip.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV1DenylistReportedIpAllMutationKey() {
  return ['v1', '/v1/denylist/reported/ip/all', 'DELETE'] as const
}

export function getDeleteV1DenylistReportedIpAllMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.denylist.reported.ip.all.$delete>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1DenylistReportedIpAllMutationKey(),
    async mutationFn() {
      return parseResponse(client.v1.denylist.reported.ip.all.$delete(undefined, options))
    },
  })
}

export function useDeleteV1DenylistReportedIpAll<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.denylist.reported.ip.all.$delete>>
              >
            >
          >,
          TError,
          void,
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
  const mutationDefaults = getDeleteV1DenylistReportedIpAllMutationOptions<TError, TOnMutateResult>(
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

export function getV1DenylistReportedIpIpAddressQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.denylist.reported.ip)[':ip_address']['$get']>
  >,
) {
  return ['v1', '/v1/denylist/reported/ip/:ip_address', toValue(args)] as const
}

export function getV1DenylistReportedIpIpAddressQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.denylist.reported.ip)[':ip_address']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1DenylistReportedIpIpAddressQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.denylist.reported.ip[':ip_address'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1DenylistReportedIpIpAddress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.denylist.reported.ip)[':ip_address']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.denylist.reported.ip)[':ip_address']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.denylist.reported.ip)[':ip_address']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.denylist.reported.ip)[':ip_address']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1DenylistReportedIpIpAddressQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.denylist.reported.ip)[':ip_address']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1DenylistReportedIpIpAddressQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1DenylistReportedIpIpAddressQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.denylist.reported.ip[':ip_address'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV1DenylistReportedIpIpAddressMutationKey() {
  return ['v1', '/v1/denylist/reported/ip/:ip_address', 'DELETE'] as const
}

export function getDeleteV1DenylistReportedIpIpAddressMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.denylist.reported.ip)[':ip_address']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.denylist.reported.ip)[':ip_address']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1DenylistReportedIpIpAddressMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.denylist.reported.ip)[':ip_address']['$delete']>,
    ) {
      return parseResponse(client.v1.denylist.reported.ip[':ip_address'].$delete(args, options))
    },
  })
}

export function useDeleteV1DenylistReportedIpIpAddress<
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
                  ReturnType<(typeof client.v1.denylist.reported.ip)[':ip_address']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.denylist.reported.ip)[':ip_address']['$delete']>,
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
  const mutationDefaults = getDeleteV1DenylistReportedIpIpAddressMutationOptions<
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

export function getPostV1GeoMutationKey() {
  return ['v1', '/v1/geo', 'POST'] as const
}

export function getPostV1GeoMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.geo.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.geo.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1GeoMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.geo.$post>) {
      return parseResponse(client.v1.geo.$post(args, options))
    },
  })
}

export function usePostV1Geo<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.geo.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.geo.$post>,
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
  const mutationDefaults = getPostV1GeoMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1GeoCsvMutationKey() {
  return ['v1', '/v1/geo/csv', 'POST'] as const
}

export function getPostV1GeoCsvMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.geo.csv.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.geo.csv.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1GeoCsvMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.geo.csv.$post>) {
      return parseResponse(client.v1.geo.csv.$post(args, options))
    },
  })
}

export function usePostV1GeoCsv<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.geo.csv.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.geo.csv.$post>,
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
  const mutationDefaults = getPostV1GeoCsvMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1GeoIpAddressQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.geo)[':ip_address']['$get']>>,
) {
  return ['v1', '/v1/geo/:ip_address', toValue(args)] as const
}

export function getV1GeoIpAddressQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.geo)[':ip_address']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1GeoIpAddressQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.geo[':ip_address'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1GeoIpAddress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.geo)[':ip_address']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.geo)[':ip_address']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.geo)[':ip_address']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.geo)[':ip_address']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1GeoIpAddressQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.geo)[':ip_address']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1GeoIpAddressQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1GeoIpAddressQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.geo[':ip_address'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1LogIpIdLogchangeIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.log.ip.id)[':logchange_id']['$get']>>,
) {
  return ['v1', '/v1/log/ip/id/:logchange_id', toValue(args)] as const
}

export function getV1LogIpIdLogchangeIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.log.ip.id)[':logchange_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1LogIpIdLogchangeIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.log.ip.id[':logchange_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1LogIpIdLogchangeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.log.ip.id)[':logchange_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.log.ip.id)[':logchange_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.log.ip.id)[':logchange_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.log.ip.id)[':logchange_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1LogIpIdLogchangeIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.log.ip.id)[':logchange_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1LogIpIdLogchangeIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1LogIpIdLogchangeIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.log.ip.id[':logchange_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1LogIpIpAddressQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.log.ip)[':ip_address']['$get']>>,
) {
  return ['v1', '/v1/log/ip/:ip_address', toValue(args)] as const
}

export function getV1LogIpIpAddressQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.log.ip)[':ip_address']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1LogIpIpAddressQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.log.ip[':ip_address'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1LogIpIpAddress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.log.ip)[':ip_address']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.log.ip)[':ip_address']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.log.ip)[':ip_address']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.log.ip)[':ip_address']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1LogIpIpAddressQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.log.ip)[':ip_address']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1LogIpIpAddressQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1LogIpIpAddressQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.log.ip[':ip_address'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1OriginQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.origin.$get>>,
) {
  return ['v1', '/v1/origin', toValue(args)] as const
}

export function getV1OriginQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.origin.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1OriginQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.origin.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Origin<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.origin.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin.$get>>>>
          >,
          ReturnType<typeof getV1OriginQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1OriginQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1OriginQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.origin.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1OriginMutationKey() {
  return ['v1', '/v1/origin', 'PUT'] as const
}

export function getPutV1OriginMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin.$put>>>>>,
    TError,
    InferRequestType<typeof client.v1.origin.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutV1OriginMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.origin.$put>) {
      return parseResponse(client.v1.origin.$put(args, options))
    },
  })
}

export function usePutV1Origin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.origin.$put>,
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
  const mutationDefaults = getPutV1OriginMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1OriginAddressesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.origin.addresses.$get>>,
) {
  return ['v1', '/v1/origin/addresses', toValue(args)] as const
}

export function getV1OriginAddressesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.origin.addresses.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1OriginAddressesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.origin.addresses.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1OriginAddresses<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin.addresses.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.origin.addresses.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin.addresses.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin.addresses.$get>>>
            >
          >,
          ReturnType<typeof getV1OriginAddressesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin.addresses.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1OriginAddressesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1OriginAddressesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.origin.addresses.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1OriginAllQueryKey() {
  return ['v1', '/v1/origin/all'] as const
}

export function getV1OriginAllQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1OriginAllQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.origin.all.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1OriginAll<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin.all.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin.all.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin.all.$get>>>>
          >,
          ReturnType<typeof getV1OriginAllQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin.all.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1OriginAllQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1OriginAllQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.origin.all.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1OriginClientAnalysisQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.origin.client.analysis.$get>>,
) {
  return ['v1', '/v1/origin/client/analysis', toValue(args)] as const
}

export function getV1OriginClientAnalysisQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.origin.client.analysis.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1OriginClientAnalysisQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.origin.client.analysis.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1OriginClientAnalysis<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin.client.analysis.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.origin.client.analysis.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.origin.client.analysis.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.origin.client.analysis.$get>>
              >
            >
          >,
          ReturnType<typeof getV1OriginClientAnalysisQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin.client.analysis.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OriginClientAnalysisQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1OriginClientAnalysisQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.origin.client.analysis.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1OriginCookiesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.origin.cookies.$get>>,
) {
  return ['v1', '/v1/origin/cookies', toValue(args)] as const
}

export function getV1OriginCookiesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.origin.cookies.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1OriginCookiesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.origin.cookies.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1OriginCookies<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin.cookies.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.origin.cookies.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin.cookies.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin.cookies.$get>>>
            >
          >,
          ReturnType<typeof getV1OriginCookiesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin.cookies.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1OriginCookiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1OriginCookiesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.origin.cookies.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1OriginScriptsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.origin.scripts.$get>>,
) {
  return ['v1', '/v1/origin/scripts', toValue(args)] as const
}

export function getV1OriginScriptsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.origin.scripts.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1OriginScriptsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.origin.scripts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1OriginScripts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin.scripts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.origin.scripts.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin.scripts.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin.scripts.$get>>>
            >
          >,
          ReturnType<typeof getV1OriginScriptsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin.scripts.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1OriginScriptsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1OriginScriptsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.origin.scripts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1OriginStatusMutationKey() {
  return ['v1', '/v1/origin/status', 'POST'] as const
}

export function getPostV1OriginStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin.status.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.origin.status.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1OriginStatusMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.origin.status.$post>) {
      return parseResponse(client.v1.origin.status.$post(args, options))
    },
  })
}

export function usePostV1OriginStatus<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin.status.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.origin.status.$post>,
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
  const mutationDefaults = getPostV1OriginStatusMutationOptions<TError, TOnMutateResult>(
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

export function getV1OriginStatusDetailStatusIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.origin.status.detail)[':status_id']['$get']>
  >,
) {
  return ['v1', '/v1/origin/status/detail/:status_id', toValue(args)] as const
}

export function getV1OriginStatusDetailStatusIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.origin.status.detail)[':status_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1OriginStatusDetailStatusIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.origin.status.detail[':status_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1OriginStatusDetailStatusId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.origin.status.detail)[':status_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.origin.status.detail)[':status_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.origin.status.detail)[':status_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.origin.status.detail)[':status_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1OriginStatusDetailStatusIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.origin.status.detail)[':status_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OriginStatusDetailStatusIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1OriginStatusDetailStatusIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.origin.status.detail[':status_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1OriginStatusDetailsQueryKey() {
  return ['v1', '/v1/origin/status/details'] as const
}

export function getV1OriginStatusDetailsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1OriginStatusDetailsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.origin.status.details.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1OriginStatusDetails<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin.status.details.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin.status.details.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin.status.details.$get>>>
            >
          >,
          ReturnType<typeof getV1OriginStatusDetailsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin.status.details.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OriginStatusDetailsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1OriginStatusDetailsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.origin.status.details.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1OriginTrafficAnalysisQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.origin.traffic.analysis.$get>>,
) {
  return ['v1', '/v1/origin/traffic/analysis', toValue(args)] as const
}

export function getV1OriginTrafficAnalysisQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.origin.traffic.analysis.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1OriginTrafficAnalysisQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.origin.traffic.analysis.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1OriginTrafficAnalysis<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin.traffic.analysis.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.origin.traffic.analysis.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.origin.traffic.analysis.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.origin.traffic.analysis.$get>>
              >
            >
          >,
          ReturnType<typeof getV1OriginTrafficAnalysisQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin.traffic.analysis.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OriginTrafficAnalysisQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1OriginTrafficAnalysisQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.origin.traffic.analysis.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1OriginTokenMutationKey() {
  return ['v1', '/v1/origin_token', 'POST'] as const
}

export function getPostV1OriginTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin_token.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.origin_token.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1OriginTokenMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.origin_token.$post>) {
      return parseResponse(client.v1.origin_token.$post(args, options))
    },
  })
}

export function usePostV1OriginToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin_token.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.origin_token.$post>,
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
  const mutationDefaults = getPostV1OriginTokenMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV1OriginTokenMutationKey() {
  return ['v1', '/v1/origin_token', 'DELETE'] as const
}

export function getDeleteV1OriginTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin_token.$delete>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.origin_token.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1OriginTokenMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.origin_token.$delete>) {
      return parseResponse(client.v1.origin_token.$delete(args, options))
    },
  })
}

export function useDeleteV1OriginToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin_token.$delete>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.origin_token.$delete>,
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
  const mutationDefaults = getDeleteV1OriginTokenMutationOptions<TError, TOnMutateResult>(
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

export function getV1OriginTokenAllQueryKey() {
  return ['v1', '/v1/origin_token/all'] as const
}

export function getV1OriginTokenAllQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1OriginTokenAllQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.origin_token.all.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1OriginTokenAll<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin_token.all.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin_token.all.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin_token.all.$get>>>
            >
          >,
          ReturnType<typeof getV1OriginTokenAllQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin_token.all.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1OriginTokenAllQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1OriginTokenAllQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.origin_token.all.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1OriginTokenDisableMutationKey() {
  return ['v1', '/v1/origin_token/disable', 'PUT'] as const
}

export function getPutV1OriginTokenDisableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin_token.disable.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.origin_token.disable.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutV1OriginTokenDisableMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.origin_token.disable.$put>) {
      return parseResponse(client.v1.origin_token.disable.$put(args, options))
    },
  })
}

export function usePutV1OriginTokenDisable<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin_token.disable.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.origin_token.disable.$put>,
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
  const mutationDefaults = getPutV1OriginTokenDisableMutationOptions<TError, TOnMutateResult>(
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

export function getPutV1OriginTokenEnableMutationKey() {
  return ['v1', '/v1/origin_token/enable', 'PUT'] as const
}

export function getPutV1OriginTokenEnableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin_token.enable.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.origin_token.enable.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutV1OriginTokenEnableMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.origin_token.enable.$put>) {
      return parseResponse(client.v1.origin_token.enable.$put(args, options))
    },
  })
}

export function usePutV1OriginTokenEnable<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin_token.enable.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.origin_token.enable.$put>,
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
  const mutationDefaults = getPutV1OriginTokenEnableMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1OriginTokenNewMutationKey() {
  return ['v1', '/v1/origin_token/new', 'POST'] as const
}

export function getPostV1OriginTokenNewMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin_token.new.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.origin_token.new.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1OriginTokenNewMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.origin_token.new.$post>) {
      return parseResponse(client.v1.origin_token.new.$post(args, options))
    },
  })
}

export function usePostV1OriginTokenNew<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin_token.new.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.origin_token.new.$post>,
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
  const mutationDefaults = getPostV1OriginTokenNewMutationOptions<TError, TOnMutateResult>(
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

export function getV1SourceIpQueryKey() {
  return ['v1', '/v1/source/ip'] as const
}

export function getV1SourceIpQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1SourceIpQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.source.ip.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1SourceIp<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.source.ip.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.source.ip.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.source.ip.$get>>>>
          >,
          ReturnType<typeof getV1SourceIpQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.source.ip.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1SourceIpQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1SourceIpQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.source.ip.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1SourceIpSourceQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.source.ip)[':source']['$get']>>,
) {
  return ['v1', '/v1/source/ip/:source', toValue(args)] as const
}

export function getV1SourceIpSourceQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.source.ip)[':source']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1SourceIpSourceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.source.ip[':source'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1SourceIpSource<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.source.ip)[':source']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.source.ip)[':source']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.source.ip)[':source']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.source.ip)[':source']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1SourceIpSourceQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.source.ip)[':source']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1SourceIpSourceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1SourceIpSourceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.source.ip[':source'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1SourceIpSourceRangeTimeRangeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.source.ip)[':source']['range'][':time_range']['$get']>
  >,
) {
  return ['v1', '/v1/source/ip/:source/range/:time_range', toValue(args)] as const
}

export function getV1SourceIpSourceRangeTimeRangeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.source.ip)[':source']['range'][':time_range']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1SourceIpSourceRangeTimeRangeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.source.ip[':source'].range[':time_range'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1SourceIpSourceRangeTimeRange<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.source.ip)[':source']['range'][':time_range']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.source.ip)[':source']['range'][':time_range']['$get']>
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
                    (typeof client.v1.source.ip)[':source']['range'][':time_range']['$get']
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
                    (typeof client.v1.source.ip)[':source']['range'][':time_range']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1SourceIpSourceRangeTimeRangeQueryKey>
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
            ReturnType<(typeof client.v1.source.ip)[':source']['range'][':time_range']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1SourceIpSourceRangeTimeRangeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1SourceIpSourceRangeTimeRangeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.source.ip[':source'].range[':time_range'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1TokenQueryKey() {
  return ['v1', '/v1/token'] as const
}

export function getV1TokenQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1TokenQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.token.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Token<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.token.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.token.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.token.$get>>>>
          >,
          ReturnType<typeof getV1TokenQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.token.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1TokenQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1TokenQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.token.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1TokenActivityQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.token.activity.$get>>,
) {
  return ['v1', '/v1/token/activity', toValue(args)] as const
}

export function getV1TokenActivityQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.token.activity.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1TokenActivityQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.token.activity.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1TokenActivity<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.token.activity.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.token.activity.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.token.activity.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.token.activity.$get>>>
            >
          >,
          ReturnType<typeof getV1TokenActivityQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.token.activity.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1TokenActivityQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1TokenActivityQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.token.activity.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1UaMutationKey() {
  return ['v1', '/v1/ua', 'POST'] as const
}

export function getPostV1UaMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.ua.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.ua.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1UaMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.ua.$post>) {
      return parseResponse(client.v1.ua.$post(args, options))
    },
  })
}

export function usePostV1Ua<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.ua.$post>>>>>,
          TError,
          InferRequestType<typeof client.v1.ua.$post>,
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
  const mutationDefaults = getPostV1UaMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1UaCsvMutationKey() {
  return ['v1', '/v1/ua/csv', 'POST'] as const
}

export function getPostV1UaCsvMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.ua.csv.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.ua.csv.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1UaCsvMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.ua.csv.$post>) {
      return parseResponse(client.v1.ua.csv.$post(args, options))
    },
  })
}

export function usePostV1UaCsv<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.ua.csv.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.ua.csv.$post>,
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
  const mutationDefaults = getPostV1UaCsvMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1UaDeviceCodeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.ua.device)[':code']['$get']>>,
) {
  return ['v1', '/v1/ua/device/:code', toValue(args)] as const
}

export function getV1UaDeviceCodeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.ua.device)[':code']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1UaDeviceCodeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.ua.device[':code'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1UaDeviceCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.ua.device)[':code']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.ua.device)[':code']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.ua.device)[':code']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.ua.device)[':code']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1UaDeviceCodeQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.ua.device)[':code']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1UaDeviceCodeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1UaDeviceCodeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.ua.device[':code'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1UaFamilyCodeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.ua.family)[':code']['$get']>>,
) {
  return ['v1', '/v1/ua/family/:code', toValue(args)] as const
}

export function getV1UaFamilyCodeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.ua.family)[':code']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1UaFamilyCodeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.ua.family[':code'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1UaFamilyCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.ua.family)[':code']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.ua.family)[':code']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.ua.family)[':code']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.ua.family)[':code']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1UaFamilyCodeQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.ua.family)[':code']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1UaFamilyCodeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1UaFamilyCodeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.ua.family[':code'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1UaOsCodeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.ua.os)[':code']['$get']>>,
) {
  return ['v1', '/v1/ua/os/:code', toValue(args)] as const
}

export function getV1UaOsCodeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.ua.os)[':code']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1UaOsCodeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.ua.os[':code'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1UaOsCode<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.ua.os)[':code']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.ua.os)[':code']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.ua.os)[':code']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.ua.os)[':code']['$get']>>>
            >
          >,
          ReturnType<typeof getV1UaOsCodeQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.ua.os)[':code']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1UaOsCodeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1UaOsCodeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.ua.os[':code'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1UaTypeCodeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.ua.type)[':code']['$get']>>,
) {
  return ['v1', '/v1/ua/type/:code', toValue(args)] as const
}

export function getV1UaTypeCodeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.ua.type)[':code']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1UaTypeCodeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.ua.type[':code'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1UaTypeCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.ua.type)[':code']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.ua.type)[':code']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.ua.type)[':code']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.ua.type)[':code']['$get']>>>
            >
          >,
          ReturnType<typeof getV1UaTypeCodeQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.ua.type)[':code']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1UaTypeCodeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1UaTypeCodeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.ua.type[':code'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1UaVendorCodeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.ua.vendor)[':code']['$get']>>,
) {
  return ['v1', '/v1/ua/vendor/:code', toValue(args)] as const
}

export function getV1UaVendorCodeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.ua.vendor)[':code']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1UaVendorCodeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.ua.vendor[':code'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1UaVendorCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.ua.vendor)[':code']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.ua.vendor)[':code']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.ua.vendor)[':code']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.ua.vendor)[':code']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1UaVendorCodeQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.ua.vendor)[':code']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1UaVendorCodeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1UaVendorCodeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.ua.vendor[':code'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1UaUserAgentUrlencodedQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.ua)[':user_agent_urlencoded']['$get']>>,
) {
  return ['v1', '/v1/ua/:user_agent_urlencoded', toValue(args)] as const
}

export function getV1UaUserAgentUrlencodedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.ua)[':user_agent_urlencoded']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1UaUserAgentUrlencodedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.ua[':user_agent_urlencoded'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1UaUserAgentUrlencoded<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.ua)[':user_agent_urlencoded']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.ua)[':user_agent_urlencoded']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.ua)[':user_agent_urlencoded']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.ua)[':user_agent_urlencoded']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1UaUserAgentUrlencodedQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.ua)[':user_agent_urlencoded']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1UaUserAgentUrlencodedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1UaUserAgentUrlencodedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.ua[':user_agent_urlencoded'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
