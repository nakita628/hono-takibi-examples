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

export function injectPostV1AllowlistPrivate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.allowlist.private.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.allowlist.private.$post>,
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
    const mutationDefaults = getPostV1AllowlistPrivateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1AllowlistPrivateAllQueryKey() {
  return ['v1', '/v1/allowlist/private/all'] as const
}

export function getV1AllowlistPrivateAllQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.allowlist.private.all.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.allowlist.private.all.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AllowlistPrivateAllQueryKey>
  >({
    queryKey: getV1AllowlistPrivateAllQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.allowlist.private.all.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1AllowlistPrivateAll<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.allowlist.private.all.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.allowlist.private.all.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AllowlistPrivateAllQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1AllowlistPrivateAllQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getV1AllowlistPrivateAllResourceTypeQueryKey(
  args: InferRequestType<(typeof client.v1.allowlist.private.all)[':resource_type']['$get']>,
) {
  return ['v1', '/v1/allowlist/private/all/:resource_type', args] as const
}

export function getV1AllowlistPrivateAllResourceTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.allowlist.private.all)[':resource_type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.allowlist.private.all)[':resource_type']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1AllowlistPrivateAllResourceTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.allowlist.private.all[':resource_type'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1AllowlistPrivateAllResourceType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.allowlist.private.all)[':resource_type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.allowlist.private.all)[':resource_type']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV1AllowlistPrivateAllResourceTypeQueryKey>
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
      ...getV1AllowlistPrivateAllResourceTypeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV1AllowlistPrivateIpAddressQueryKey(
  args: InferRequestType<(typeof client.v1.allowlist.private.ip)[':address']['$get']>,
) {
  return ['v1', '/v1/allowlist/private/ip/:address', args] as const
}

export function getV1AllowlistPrivateIpAddressQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.allowlist.private.ip)[':address']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.allowlist.private.ip)[':address']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1AllowlistPrivateIpAddressQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.allowlist.private.ip[':address'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1AllowlistPrivateIpAddress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.allowlist.private.ip)[':address']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.allowlist.private.ip)[':address']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1AllowlistPrivateIpAddressQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV1AllowlistPrivateAllowlistIdQueryKey(
  args: InferRequestType<(typeof client.v1.allowlist.private)[':allowlist_id']['$get']>,
) {
  return ['v1', '/v1/allowlist/private/:allowlist_id', args] as const
}

export function getV1AllowlistPrivateAllowlistIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.allowlist.private)[':allowlist_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.allowlist.private)[':allowlist_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1AllowlistPrivateAllowlistIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.allowlist.private[':allowlist_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1AllowlistPrivateAllowlistId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.allowlist.private)[':allowlist_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.allowlist.private)[':allowlist_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1AllowlistPrivateAllowlistIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutV1AllowlistPrivateAllowlistId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1AllowlistPrivateAllowlistIdMutationOptions<
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

export function injectDeleteV1AllowlistPrivateAllowlistId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1AllowlistPrivateAllowlistIdMutationOptions<
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

export function getV1AllowlistPrivateAllowlistIdContentQueryKey(
  args: InferRequestType<(typeof client.v1.allowlist.private)[':allowlist_id']['content']['$get']>,
) {
  return ['v1', '/v1/allowlist/private/:allowlist_id/content', args] as const
}

export function getV1AllowlistPrivateAllowlistIdContentQueryOptions<
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
  args: InferRequestType<(typeof client.v1.allowlist.private)[':allowlist_id']['content']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1AllowlistPrivateAllowlistIdContentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.allowlist.private[':allowlist_id'].content.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1AllowlistPrivateAllowlistIdContent<
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
  args: () => InferRequestType<
    (typeof client.v1.allowlist.private)[':allowlist_id']['content']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1AllowlistPrivateAllowlistIdContentQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutV1AllowlistPrivateAllowlistIdContent<
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
                ReturnType<(typeof client.v1.allowlist.private)[':allowlist_id']['content']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.allowlist.private)[':allowlist_id']['content']['$put']>,
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
    const mutationDefaults = getPutV1AllowlistPrivateAllowlistIdContentMutationOptions<
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

export function injectDeleteV1AllowlistPrivateAllowlistIdContent<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1AllowlistPrivateAllowlistIdContentMutationOptions<
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

export function injectPutV1AllowlistPrivateAllowlistIdOrigin<
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
                ReturnType<(typeof client.v1.allowlist.private)[':allowlist_id']['origin']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.allowlist.private)[':allowlist_id']['origin']['$put']>,
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
    const mutationDefaults = getPutV1AllowlistPrivateAllowlistIdOriginMutationOptions<
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

export function getV1AllowlistPublicAllQueryKey() {
  return ['v1', '/v1/allowlist/public/all'] as const
}

export function getV1AllowlistPublicAllQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.allowlist.public.all.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.allowlist.public.all.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AllowlistPublicAllQueryKey>
  >({
    queryKey: getV1AllowlistPublicAllQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.allowlist.public.all.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1AllowlistPublicAll<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.allowlist.public.all.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.allowlist.public.all.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AllowlistPublicAllQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1AllowlistPublicAllQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getV1AllowlistPublicAllResourceTypeQueryKey(
  args: InferRequestType<(typeof client.v1.allowlist.public.all)[':resource_type']['$get']>,
) {
  return ['v1', '/v1/allowlist/public/all/:resource_type', args] as const
}

export function getV1AllowlistPublicAllResourceTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.allowlist.public.all)[':resource_type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.allowlist.public.all)[':resource_type']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1AllowlistPublicAllResourceTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.allowlist.public.all[':resource_type'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1AllowlistPublicAllResourceType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.allowlist.public.all)[':resource_type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.allowlist.public.all)[':resource_type']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1AllowlistPublicAllResourceTypeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV1AllowlistPublicIpAddressQueryKey(
  args: InferRequestType<(typeof client.v1.allowlist.public.ip)[':address']['$get']>,
) {
  return ['v1', '/v1/allowlist/public/ip/:address', args] as const
}

export function getV1AllowlistPublicIpAddressQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.allowlist.public.ip)[':address']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.allowlist.public.ip)[':address']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1AllowlistPublicIpAddressQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.allowlist.public.ip[':address'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1AllowlistPublicIpAddress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.allowlist.public.ip)[':address']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.allowlist.public.ip)[':address']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1AllowlistPublicIpAddressQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV1AllowlistPublicOwnedQueryKey() {
  return ['v1', '/v1/allowlist/public/owned'] as const
}

export function getV1AllowlistPublicOwnedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.allowlist.public.owned.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.allowlist.public.owned.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AllowlistPublicOwnedQueryKey>
  >({
    queryKey: getV1AllowlistPublicOwnedQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.allowlist.public.owned.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1AllowlistPublicOwned<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.allowlist.public.owned.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.allowlist.public.owned.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AllowlistPublicOwnedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1AllowlistPublicOwnedQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getV1AllowlistPublicOwnedResourceTypeQueryKey(
  args: InferRequestType<(typeof client.v1.allowlist.public.owned)[':resource_type']['$get']>,
) {
  return ['v1', '/v1/allowlist/public/owned/:resource_type', args] as const
}

export function getV1AllowlistPublicOwnedResourceTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.allowlist.public.owned)[':resource_type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.allowlist.public.owned)[':resource_type']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1AllowlistPublicOwnedResourceTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.allowlist.public.owned[':resource_type'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1AllowlistPublicOwnedResourceType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.allowlist.public.owned)[':resource_type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.allowlist.public.owned)[':resource_type']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV1AllowlistPublicOwnedResourceTypeQueryKey>
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
      ...getV1AllowlistPublicOwnedResourceTypeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV1AllowlistPublicAllowlistIdQueryKey(
  args: InferRequestType<(typeof client.v1.allowlist.public)[':allowlist_id']['$get']>,
) {
  return ['v1', '/v1/allowlist/public/:allowlist_id', args] as const
}

export function getV1AllowlistPublicAllowlistIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.allowlist.public)[':allowlist_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.allowlist.public)[':allowlist_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1AllowlistPublicAllowlistIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.allowlist.public[':allowlist_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1AllowlistPublicAllowlistId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.allowlist.public)[':allowlist_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.allowlist.public)[':allowlist_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1AllowlistPublicAllowlistIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutV1AllowlistPublicAllowlistId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1AllowlistPublicAllowlistIdMutationOptions<
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

export function injectDeleteV1AllowlistPublicAllowlistId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1AllowlistPublicAllowlistIdMutationOptions<
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

export function injectPutV1AllowlistPublicAllowlistIdOrigin<
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
                ReturnType<(typeof client.v1.allowlist.public)[':allowlist_id']['origin']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.allowlist.public)[':allowlist_id']['origin']['$put']>,
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
    const mutationDefaults = getPutV1AllowlistPublicAllowlistIdOriginMutationOptions<
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

export function getV1AsnIpIpAddressQueryKey(
  args: InferRequestType<(typeof client.v1.asn.ip)[':ip_address']['$get']>,
) {
  return ['v1', '/v1/asn/ip/:ip_address', args] as const
}

export function getV1AsnIpIpAddressQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.asn.ip)[':ip_address']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.asn.ip)[':ip_address']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.asn.ip)[':ip_address']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AsnIpIpAddressQueryKey>
  >({
    queryKey: getV1AsnIpIpAddressQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.asn.ip[':ip_address'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1AsnIpIpAddress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.asn.ip)[':ip_address']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.asn.ip)[':ip_address']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.asn.ip)[':ip_address']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AsnIpIpAddressQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1AsnIpIpAddressQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostV1AsnPrefix<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.asn.prefix.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.asn.prefix.$post>,
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
    const mutationDefaults = getPostV1AsnPrefixMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1AsnRegistryAllQueryKey() {
  return ['v1', '/v1/asn/registry/all'] as const
}

export function getV1AsnRegistryAllQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.asn.registry.all.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.asn.registry.all.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1AsnRegistryAllQueryKey>
  >({
    queryKey: getV1AsnRegistryAllQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.asn.registry.all.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1AsnRegistryAll<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.asn.registry.all.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.asn.registry.all.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AsnRegistryAllQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1AsnRegistryAllQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getV1AsnRegistryCodeQueryKey(
  args: InferRequestType<(typeof client.v1.asn.registry)[':code']['$get']>,
) {
  return ['v1', '/v1/asn/registry/:code', args] as const
}

export function getV1AsnRegistryCodeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.asn.registry)[':code']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.asn.registry)[':code']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.asn.registry)[':code']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AsnRegistryCodeQueryKey>
  >({
    queryKey: getV1AsnRegistryCodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.asn.registry[':code'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1AsnRegistryCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.asn.registry)[':code']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.asn.registry)[':code']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.asn.registry)[':code']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AsnRegistryCodeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1AsnRegistryCodeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getV1AsnStatusAllQueryKey() {
  return ['v1', '/v1/asn/status/all'] as const
}

export function getV1AsnStatusAllQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.asn.status.all.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.asn.status.all.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1AsnStatusAllQueryKey>
  >({
    queryKey: getV1AsnStatusAllQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.asn.status.all.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1AsnStatusAll<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.asn.status.all.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.asn.status.all.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AsnStatusAllQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1AsnStatusAllQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getV1AsnStatusCodeQueryKey(
  args: InferRequestType<(typeof client.v1.asn.status)[':code']['$get']>,
) {
  return ['v1', '/v1/asn/status/:code', args] as const
}

export function getV1AsnStatusCodeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.asn.status)[':code']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.asn.status)[':code']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.asn.status)[':code']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AsnStatusCodeQueryKey>
  >({
    queryKey: getV1AsnStatusCodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.asn.status[':code'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1AsnStatusCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.asn.status)[':code']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.asn.status)[':code']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.asn.status)[':code']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AsnStatusCodeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1AsnStatusCodeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getV1AsnNumberQueryKey(
  args: InferRequestType<(typeof client.v1.asn)[':number']['$get']>,
) {
  return ['v1', '/v1/asn/:number', args] as const
}

export function getV1AsnNumberQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.asn)[':number']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.asn)[':number']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.asn)[':number']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AsnNumberQueryKey>
  >({
    queryKey: getV1AsnNumberQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.asn[':number'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1AsnNumber<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.asn)[':number']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.asn)[':number']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.asn)[':number']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AsnNumberQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1AsnNumberQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getV1AsnNumberPrefixesQueryKey(
  args: InferRequestType<(typeof client.v1.asn)[':number']['prefixes']['$get']>,
) {
  return ['v1', '/v1/asn/:number/prefixes', args] as const
}

export function getV1AsnNumberPrefixesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.asn)[':number']['prefixes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.asn)[':number']['prefixes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1AsnNumberPrefixesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.asn[':number'].prefixes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1AsnNumberPrefixes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.asn)[':number']['prefixes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.asn)[':number']['prefixes']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1AsnNumberPrefixesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostV1AssessIp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.assess.ip.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.assess.ip.$post>,
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
    const mutationDefaults = getPostV1AssessIpMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostV1AssessIpCsv<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.assess.ip.csv.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.assess.ip.csv.$post>,
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
    const mutationDefaults = getPostV1AssessIpCsvMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1AssessIpIpAddressQueryKey(
  args: InferRequestType<(typeof client.v1.assess.ip)[':ip_address']['$get']>,
) {
  return ['v1', '/v1/assess/ip/:ip_address', args] as const
}

export function getV1AssessIpIpAddressQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.assess.ip)[':ip_address']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.assess.ip)[':ip_address']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1AssessIpIpAddressQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.assess.ip[':ip_address'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1AssessIpIpAddress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.assess.ip)[':ip_address']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.assess.ip)[':ip_address']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1AssessIpIpAddressQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getV1DatacenterIpIpAddressQueryKey(
  args: InferRequestType<(typeof client.v1.datacenter.ip)[':ip_address']['$get']>,
) {
  return ['v1', '/v1/datacenter/ip/:ip_address', args] as const
}

export function getV1DatacenterIpIpAddressQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.datacenter.ip)[':ip_address']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.datacenter.ip)[':ip_address']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1DatacenterIpIpAddressQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.datacenter.ip[':ip_address'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1DatacenterIpIpAddress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.datacenter.ip)[':ip_address']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.datacenter.ip)[':ip_address']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1DatacenterIpIpAddressQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostV1DatacenterPrefix<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.datacenter.prefix.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.datacenter.prefix.$post>,
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
    const mutationDefaults = getPostV1DatacenterPrefixMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1DatacenterDatacenterIdQueryKey(
  args: InferRequestType<(typeof client.v1.datacenter)[':datacenter_id']['$get']>,
) {
  return ['v1', '/v1/datacenter/:datacenter_id', args] as const
}

export function getV1DatacenterDatacenterIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.datacenter)[':datacenter_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.datacenter)[':datacenter_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1DatacenterDatacenterIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.datacenter[':datacenter_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1DatacenterDatacenterId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.datacenter)[':datacenter_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.datacenter)[':datacenter_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1DatacenterDatacenterIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV1DatacenterDatacenterIdPrefixesQueryKey(
  args: InferRequestType<(typeof client.v1.datacenter)[':datacenter_id']['prefixes']['$get']>,
) {
  return ['v1', '/v1/datacenter/:datacenter_id/prefixes', args] as const
}

export function getV1DatacenterDatacenterIdPrefixesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.datacenter)[':datacenter_id']['prefixes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.datacenter)[':datacenter_id']['prefixes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1DatacenterDatacenterIdPrefixesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.datacenter[':datacenter_id'].prefixes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1DatacenterDatacenterIdPrefixes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.datacenter)[':datacenter_id']['prefixes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.datacenter)[':datacenter_id']['prefixes']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV1DatacenterDatacenterIdPrefixesQueryKey>
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
      ...getV1DatacenterDatacenterIdPrefixesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV1DatasetIpQueryKey() {
  return ['v1', '/v1/dataset/ip'] as const
}

export function getV1DatasetIpQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.dataset.ip.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.dataset.ip.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1DatasetIpQueryKey>
  >({
    queryKey: getV1DatasetIpQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.dataset.ip.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1DatasetIp<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.dataset.ip.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.dataset.ip.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1DatasetIpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1DatasetIpQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getV1DatasetIpNameQueryKey(
  args: InferRequestType<(typeof client.v1.dataset.ip)[':name']['$get']>,
) {
  return ['v1', '/v1/dataset/ip/:name', args] as const
}

export function getV1DatasetIpNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.dataset.ip)[':name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.dataset.ip)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.dataset.ip)[':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1DatasetIpNameQueryKey>
  >({
    queryKey: getV1DatasetIpNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.dataset.ip[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1DatasetIpName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.dataset.ip)[':name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.dataset.ip)[':name']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.dataset.ip)[':name']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1DatasetIpNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1DatasetIpNameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostV1DenylistPrivate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.denylist.private.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.denylist.private.$post>,
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
    const mutationDefaults = getPostV1DenylistPrivateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1DenylistPrivateAllQueryKey() {
  return ['v1', '/v1/denylist/private/all'] as const
}

export function getV1DenylistPrivateAllQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.denylist.private.all.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.denylist.private.all.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1DenylistPrivateAllQueryKey>
  >({
    queryKey: getV1DenylistPrivateAllQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.denylist.private.all.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1DenylistPrivateAll<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.denylist.private.all.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.denylist.private.all.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1DenylistPrivateAllQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1DenylistPrivateAllQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getV1DenylistPrivateAllResourceTypeQueryKey(
  args: InferRequestType<(typeof client.v1.denylist.private.all)[':resource_type']['$get']>,
) {
  return ['v1', '/v1/denylist/private/all/:resource_type', args] as const
}

export function getV1DenylistPrivateAllResourceTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.denylist.private.all)[':resource_type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.denylist.private.all)[':resource_type']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1DenylistPrivateAllResourceTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.denylist.private.all[':resource_type'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1DenylistPrivateAllResourceType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.denylist.private.all)[':resource_type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.denylist.private.all)[':resource_type']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1DenylistPrivateAllResourceTypeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV1DenylistPrivateIpAddressQueryKey(
  args: InferRequestType<(typeof client.v1.denylist.private.ip)[':address']['$get']>,
) {
  return ['v1', '/v1/denylist/private/ip/:address', args] as const
}

export function getV1DenylistPrivateIpAddressQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.denylist.private.ip)[':address']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.denylist.private.ip)[':address']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1DenylistPrivateIpAddressQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.denylist.private.ip[':address'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1DenylistPrivateIpAddress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.denylist.private.ip)[':address']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.denylist.private.ip)[':address']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1DenylistPrivateIpAddressQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV1DenylistPrivateDenylistIdQueryKey(
  args: InferRequestType<(typeof client.v1.denylist.private)[':denylist_id']['$get']>,
) {
  return ['v1', '/v1/denylist/private/:denylist_id', args] as const
}

export function getV1DenylistPrivateDenylistIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.denylist.private)[':denylist_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.denylist.private)[':denylist_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1DenylistPrivateDenylistIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.denylist.private[':denylist_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1DenylistPrivateDenylistId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.denylist.private)[':denylist_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.denylist.private)[':denylist_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1DenylistPrivateDenylistIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutV1DenylistPrivateDenylistId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1DenylistPrivateDenylistIdMutationOptions<
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

export function injectDeleteV1DenylistPrivateDenylistId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1DenylistPrivateDenylistIdMutationOptions<
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

export function getV1DenylistPrivateDenylistIdContentQueryKey(
  args: InferRequestType<(typeof client.v1.denylist.private)[':denylist_id']['content']['$get']>,
) {
  return ['v1', '/v1/denylist/private/:denylist_id/content', args] as const
}

export function getV1DenylistPrivateDenylistIdContentQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.denylist.private)[':denylist_id']['content']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.denylist.private)[':denylist_id']['content']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1DenylistPrivateDenylistIdContentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.denylist.private[':denylist_id'].content.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1DenylistPrivateDenylistIdContent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.denylist.private)[':denylist_id']['content']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.denylist.private)[':denylist_id']['content']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1DenylistPrivateDenylistIdContentQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutV1DenylistPrivateDenylistIdContent<
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
                ReturnType<(typeof client.v1.denylist.private)[':denylist_id']['content']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.denylist.private)[':denylist_id']['content']['$put']>,
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
    const mutationDefaults = getPutV1DenylistPrivateDenylistIdContentMutationOptions<
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

export function injectDeleteV1DenylistPrivateDenylistIdContent<
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
                ReturnType<
                  (typeof client.v1.denylist.private)[':denylist_id']['content']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.denylist.private)[':denylist_id']['content']['$delete']>,
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
    const mutationDefaults = getDeleteV1DenylistPrivateDenylistIdContentMutationOptions<
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

export function injectPutV1DenylistPrivateDenylistIdOrigin<
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
                ReturnType<(typeof client.v1.denylist.private)[':denylist_id']['origin']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.denylist.private)[':denylist_id']['origin']['$put']>,
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
    const mutationDefaults = getPutV1DenylistPrivateDenylistIdOriginMutationOptions<
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

export function getV1DenylistPublicAllQueryKey() {
  return ['v1', '/v1/denylist/public/all'] as const
}

export function getV1DenylistPublicAllQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.denylist.public.all.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.denylist.public.all.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1DenylistPublicAllQueryKey>
  >({
    queryKey: getV1DenylistPublicAllQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.denylist.public.all.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1DenylistPublicAll<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.denylist.public.all.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.denylist.public.all.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1DenylistPublicAllQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1DenylistPublicAllQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getV1DenylistPublicAllResourceTypeQueryKey(
  args: InferRequestType<(typeof client.v1.denylist.public.all)[':resource_type']['$get']>,
) {
  return ['v1', '/v1/denylist/public/all/:resource_type', args] as const
}

export function getV1DenylistPublicAllResourceTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.denylist.public.all)[':resource_type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.denylist.public.all)[':resource_type']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1DenylistPublicAllResourceTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.denylist.public.all[':resource_type'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1DenylistPublicAllResourceType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.denylist.public.all)[':resource_type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.denylist.public.all)[':resource_type']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1DenylistPublicAllResourceTypeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV1DenylistPublicIpAddressQueryKey(
  args: InferRequestType<(typeof client.v1.denylist.public.ip)[':address']['$get']>,
) {
  return ['v1', '/v1/denylist/public/ip/:address', args] as const
}

export function getV1DenylistPublicIpAddressQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.denylist.public.ip)[':address']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.denylist.public.ip)[':address']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1DenylistPublicIpAddressQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.denylist.public.ip[':address'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1DenylistPublicIpAddress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.denylist.public.ip)[':address']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.denylist.public.ip)[':address']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1DenylistPublicIpAddressQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV1DenylistPublicOwnedQueryKey() {
  return ['v1', '/v1/denylist/public/owned'] as const
}

export function getV1DenylistPublicOwnedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.denylist.public.owned.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.denylist.public.owned.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1DenylistPublicOwnedQueryKey>
  >({
    queryKey: getV1DenylistPublicOwnedQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.denylist.public.owned.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1DenylistPublicOwned<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.denylist.public.owned.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.denylist.public.owned.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1DenylistPublicOwnedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1DenylistPublicOwnedQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getV1DenylistPublicOwnedResourceTypeQueryKey(
  args: InferRequestType<(typeof client.v1.denylist.public.owned)[':resource_type']['$get']>,
) {
  return ['v1', '/v1/denylist/public/owned/:resource_type', args] as const
}

export function getV1DenylistPublicOwnedResourceTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.denylist.public.owned)[':resource_type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.denylist.public.owned)[':resource_type']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1DenylistPublicOwnedResourceTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.denylist.public.owned[':resource_type'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1DenylistPublicOwnedResourceType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.denylist.public.owned)[':resource_type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.denylist.public.owned)[':resource_type']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV1DenylistPublicOwnedResourceTypeQueryKey>
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
      ...getV1DenylistPublicOwnedResourceTypeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV1DenylistPublicDenylistIdQueryKey(
  args: InferRequestType<(typeof client.v1.denylist.public)[':denylist_id']['$get']>,
) {
  return ['v1', '/v1/denylist/public/:denylist_id', args] as const
}

export function getV1DenylistPublicDenylistIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.denylist.public)[':denylist_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.denylist.public)[':denylist_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1DenylistPublicDenylistIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.denylist.public[':denylist_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1DenylistPublicDenylistId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.denylist.public)[':denylist_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.denylist.public)[':denylist_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1DenylistPublicDenylistIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutV1DenylistPublicDenylistId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1DenylistPublicDenylistIdMutationOptions<
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

export function injectDeleteV1DenylistPublicDenylistId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1DenylistPublicDenylistIdMutationOptions<
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

export function injectPutV1DenylistPublicDenylistIdOrigin<
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
                ReturnType<(typeof client.v1.denylist.public)[':denylist_id']['origin']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.denylist.public)[':denylist_id']['origin']['$put']>,
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
    const mutationDefaults = getPutV1DenylistPublicDenylistIdOriginMutationOptions<
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

export function getV1DenylistReportedIpQueryKey(
  args: InferRequestType<typeof client.v1.denylist.reported.ip.$get>,
) {
  return ['v1', '/v1/denylist/reported/ip', args] as const
}

export function getV1DenylistReportedIpQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.denylist.reported.ip.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.denylist.reported.ip.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.denylist.reported.ip.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1DenylistReportedIpQueryKey>
  >({
    queryKey: getV1DenylistReportedIpQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.denylist.reported.ip.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1DenylistReportedIp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.denylist.reported.ip.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.denylist.reported.ip.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.denylist.reported.ip.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1DenylistReportedIpQueryKey>
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
      ...getV1DenylistReportedIpQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectDeleteV1DenylistReportedIpAll<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1DenylistReportedIpAllMutationOptions<
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

export function getV1DenylistReportedIpIpAddressQueryKey(
  args: InferRequestType<(typeof client.v1.denylist.reported.ip)[':ip_address']['$get']>,
) {
  return ['v1', '/v1/denylist/reported/ip/:ip_address', args] as const
}

export function getV1DenylistReportedIpIpAddressQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.denylist.reported.ip)[':ip_address']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.denylist.reported.ip)[':ip_address']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1DenylistReportedIpIpAddressQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.denylist.reported.ip[':ip_address'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1DenylistReportedIpIpAddress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.denylist.reported.ip)[':ip_address']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.denylist.reported.ip)[':ip_address']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1DenylistReportedIpIpAddressQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectDeleteV1DenylistReportedIpIpAddress<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1DenylistReportedIpIpAddressMutationOptions<
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

export function injectPostV1Geo<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.geo.$post>>>>>,
        TError,
        InferRequestType<typeof client.v1.geo.$post>,
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
    const mutationDefaults = getPostV1GeoMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostV1GeoCsv<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.geo.csv.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.geo.csv.$post>,
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
    const mutationDefaults = getPostV1GeoCsvMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1GeoIpAddressQueryKey(
  args: InferRequestType<(typeof client.v1.geo)[':ip_address']['$get']>,
) {
  return ['v1', '/v1/geo/:ip_address', args] as const
}

export function getV1GeoIpAddressQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.geo)[':ip_address']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.geo)[':ip_address']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.geo)[':ip_address']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1GeoIpAddressQueryKey>
  >({
    queryKey: getV1GeoIpAddressQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.geo[':ip_address'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1GeoIpAddress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.geo)[':ip_address']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.geo)[':ip_address']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.geo)[':ip_address']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1GeoIpAddressQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1GeoIpAddressQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getV1LogIpIdLogchangeIdQueryKey(
  args: InferRequestType<(typeof client.v1.log.ip.id)[':logchange_id']['$get']>,
) {
  return ['v1', '/v1/log/ip/id/:logchange_id', args] as const
}

export function getV1LogIpIdLogchangeIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.log.ip.id)[':logchange_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.log.ip.id)[':logchange_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1LogIpIdLogchangeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.log.ip.id[':logchange_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1LogIpIdLogchangeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.log.ip.id)[':logchange_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.log.ip.id)[':logchange_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1LogIpIdLogchangeIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV1LogIpIpAddressQueryKey(
  args: InferRequestType<(typeof client.v1.log.ip)[':ip_address']['$get']>,
) {
  return ['v1', '/v1/log/ip/:ip_address', args] as const
}

export function getV1LogIpIpAddressQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.log.ip)[':ip_address']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.log.ip)[':ip_address']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.log.ip)[':ip_address']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1LogIpIpAddressQueryKey>
  >({
    queryKey: getV1LogIpIpAddressQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.log.ip[':ip_address'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1LogIpIpAddress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.log.ip)[':ip_address']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.log.ip)[':ip_address']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.log.ip)[':ip_address']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1LogIpIpAddressQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1LogIpIpAddressQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getV1OriginQueryKey(args: InferRequestType<typeof client.v1.origin.$get>) {
  return ['v1', '/v1/origin', args] as const
}

export function getV1OriginQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.origin.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1OriginQueryKey>
  >({
    queryKey: getV1OriginQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.origin.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1Origin<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.origin.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1OriginQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1OriginQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutV1Origin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin.$put>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.origin.$put>,
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
    const mutationDefaults = getPutV1OriginMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1OriginAddressesQueryKey(
  args: InferRequestType<typeof client.v1.origin.addresses.$get>,
) {
  return ['v1', '/v1/origin/addresses', args] as const
}

export function getV1OriginAddressesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin.addresses.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.origin.addresses.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin.addresses.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1OriginAddressesQueryKey>
  >({
    queryKey: getV1OriginAddressesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.origin.addresses.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1OriginAddresses<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin.addresses.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.origin.addresses.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin.addresses.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1OriginAddressesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1OriginAddressesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getV1OriginAllQueryKey() {
  return ['v1', '/v1/origin/all'] as const
}

export function getV1OriginAllQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin.all.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin.all.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1OriginAllQueryKey>
  >({
    queryKey: getV1OriginAllQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.origin.all.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1OriginAll<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin.all.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin.all.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1OriginAllQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1OriginAllQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getV1OriginClientAnalysisQueryKey(
  args: InferRequestType<typeof client.v1.origin.client.analysis.$get>,
) {
  return ['v1', '/v1/origin/client/analysis', args] as const
}

export function getV1OriginClientAnalysisQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin.client.analysis.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.origin.client.analysis.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin.client.analysis.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OriginClientAnalysisQueryKey>
  >({
    queryKey: getV1OriginClientAnalysisQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.origin.client.analysis.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1OriginClientAnalysis<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin.client.analysis.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.origin.client.analysis.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin.client.analysis.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1OriginClientAnalysisQueryKey>
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
      ...getV1OriginClientAnalysisQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV1OriginCookiesQueryKey(
  args: InferRequestType<typeof client.v1.origin.cookies.$get>,
) {
  return ['v1', '/v1/origin/cookies', args] as const
}

export function getV1OriginCookiesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin.cookies.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.origin.cookies.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin.cookies.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1OriginCookiesQueryKey>
  >({
    queryKey: getV1OriginCookiesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.origin.cookies.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1OriginCookies<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin.cookies.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.origin.cookies.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin.cookies.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1OriginCookiesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1OriginCookiesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getV1OriginScriptsQueryKey(
  args: InferRequestType<typeof client.v1.origin.scripts.$get>,
) {
  return ['v1', '/v1/origin/scripts', args] as const
}

export function getV1OriginScriptsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin.scripts.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.origin.scripts.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin.scripts.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1OriginScriptsQueryKey>
  >({
    queryKey: getV1OriginScriptsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.origin.scripts.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1OriginScripts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin.scripts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.origin.scripts.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin.scripts.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1OriginScriptsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1OriginScriptsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostV1OriginStatus<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin.status.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.origin.status.$post>,
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
    const mutationDefaults = getPostV1OriginStatusMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1OriginStatusDetailStatusIdQueryKey(
  args: InferRequestType<(typeof client.v1.origin.status.detail)[':status_id']['$get']>,
) {
  return ['v1', '/v1/origin/status/detail/:status_id', args] as const
}

export function getV1OriginStatusDetailStatusIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.origin.status.detail)[':status_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.origin.status.detail)[':status_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1OriginStatusDetailStatusIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.origin.status.detail[':status_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1OriginStatusDetailStatusId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.origin.status.detail)[':status_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.origin.status.detail)[':status_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1OriginStatusDetailStatusIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV1OriginStatusDetailsQueryKey() {
  return ['v1', '/v1/origin/status/details'] as const
}

export function getV1OriginStatusDetailsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin.status.details.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin.status.details.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OriginStatusDetailsQueryKey>
  >({
    queryKey: getV1OriginStatusDetailsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.origin.status.details.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1OriginStatusDetails<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin.status.details.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin.status.details.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1OriginStatusDetailsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1OriginStatusDetailsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getV1OriginTrafficAnalysisQueryKey(
  args: InferRequestType<typeof client.v1.origin.traffic.analysis.$get>,
) {
  return ['v1', '/v1/origin/traffic/analysis', args] as const
}

export function getV1OriginTrafficAnalysisQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin.traffic.analysis.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.origin.traffic.analysis.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin.traffic.analysis.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OriginTrafficAnalysisQueryKey>
  >({
    queryKey: getV1OriginTrafficAnalysisQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.origin.traffic.analysis.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1OriginTrafficAnalysis<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin.traffic.analysis.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.origin.traffic.analysis.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin.traffic.analysis.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1OriginTrafficAnalysisQueryKey>
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
      ...getV1OriginTrafficAnalysisQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostV1OriginToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin_token.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.origin_token.$post>,
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
    const mutationDefaults = getPostV1OriginTokenMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteV1OriginToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin_token.$delete>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.origin_token.$delete>,
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
    const mutationDefaults = getDeleteV1OriginTokenMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1OriginTokenAllQueryKey() {
  return ['v1', '/v1/origin_token/all'] as const
}

export function getV1OriginTokenAllQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin_token.all.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin_token.all.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1OriginTokenAllQueryKey>
  >({
    queryKey: getV1OriginTokenAllQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.origin_token.all.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1OriginTokenAll<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin_token.all.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin_token.all.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1OriginTokenAllQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1OriginTokenAllQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectPutV1OriginTokenDisable<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin_token.disable.$put>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.origin_token.disable.$put>,
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
    const mutationDefaults = getPutV1OriginTokenDisableMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPutV1OriginTokenEnable<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin_token.enable.$put>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.origin_token.enable.$put>,
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
    const mutationDefaults = getPutV1OriginTokenEnableMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostV1OriginTokenNew<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin_token.new.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.origin_token.new.$post>,
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
    const mutationDefaults = getPostV1OriginTokenNewMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1SourceIpQueryKey() {
  return ['v1', '/v1/source/ip'] as const
}

export function getV1SourceIpQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.source.ip.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.source.ip.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1SourceIpQueryKey>
  >({
    queryKey: getV1SourceIpQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.source.ip.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1SourceIp<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.source.ip.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.source.ip.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1SourceIpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1SourceIpQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getV1SourceIpSourceQueryKey(
  args: InferRequestType<(typeof client.v1.source.ip)[':source']['$get']>,
) {
  return ['v1', '/v1/source/ip/:source', args] as const
}

export function getV1SourceIpSourceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.source.ip)[':source']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.source.ip)[':source']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.source.ip)[':source']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1SourceIpSourceQueryKey>
  >({
    queryKey: getV1SourceIpSourceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.source.ip[':source'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1SourceIpSource<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.source.ip)[':source']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.source.ip)[':source']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.source.ip)[':source']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1SourceIpSourceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1SourceIpSourceQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getV1SourceIpSourceRangeTimeRangeQueryKey(
  args: InferRequestType<(typeof client.v1.source.ip)[':source']['range'][':time_range']['$get']>,
) {
  return ['v1', '/v1/source/ip/:source/range/:time_range', args] as const
}

export function getV1SourceIpSourceRangeTimeRangeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.source.ip)[':source']['range'][':time_range']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.source.ip)[':source']['range'][':time_range']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1SourceIpSourceRangeTimeRangeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.source.ip[':source'].range[':time_range'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1SourceIpSourceRangeTimeRange<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.source.ip)[':source']['range'][':time_range']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.source.ip)[':source']['range'][':time_range']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1SourceIpSourceRangeTimeRangeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV1TokenQueryKey() {
  return ['v1', '/v1/token'] as const
}

export function getV1TokenQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.token.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.token.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1TokenQueryKey>
  >({
    queryKey: getV1TokenQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.token.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1Token<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.token.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.token.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getV1TokenQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1TokenQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getV1TokenActivityQueryKey(
  args: InferRequestType<typeof client.v1.token.activity.$get>,
) {
  return ['v1', '/v1/token/activity', args] as const
}

export function getV1TokenActivityQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.token.activity.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.token.activity.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.token.activity.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1TokenActivityQueryKey>
  >({
    queryKey: getV1TokenActivityQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.token.activity.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1TokenActivity<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.token.activity.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.token.activity.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.token.activity.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1TokenActivityQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1TokenActivityQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostV1Ua<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.ua.$post>>>>>,
        TError,
        InferRequestType<typeof client.v1.ua.$post>,
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
    const mutationDefaults = getPostV1UaMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostV1UaCsv<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.ua.csv.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.ua.csv.$post>,
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
    const mutationDefaults = getPostV1UaCsvMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1UaDeviceCodeQueryKey(
  args: InferRequestType<(typeof client.v1.ua.device)[':code']['$get']>,
) {
  return ['v1', '/v1/ua/device/:code', args] as const
}

export function getV1UaDeviceCodeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.ua.device)[':code']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.ua.device)[':code']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.ua.device)[':code']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1UaDeviceCodeQueryKey>
  >({
    queryKey: getV1UaDeviceCodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.ua.device[':code'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1UaDeviceCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.ua.device)[':code']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.ua.device)[':code']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.ua.device)[':code']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1UaDeviceCodeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1UaDeviceCodeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getV1UaFamilyCodeQueryKey(
  args: InferRequestType<(typeof client.v1.ua.family)[':code']['$get']>,
) {
  return ['v1', '/v1/ua/family/:code', args] as const
}

export function getV1UaFamilyCodeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.ua.family)[':code']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.ua.family)[':code']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.ua.family)[':code']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1UaFamilyCodeQueryKey>
  >({
    queryKey: getV1UaFamilyCodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.ua.family[':code'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1UaFamilyCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.ua.family)[':code']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.ua.family)[':code']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.ua.family)[':code']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1UaFamilyCodeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1UaFamilyCodeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getV1UaOsCodeQueryKey(
  args: InferRequestType<(typeof client.v1.ua.os)[':code']['$get']>,
) {
  return ['v1', '/v1/ua/os/:code', args] as const
}

export function getV1UaOsCodeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.ua.os)[':code']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.ua.os)[':code']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.ua.os)[':code']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1UaOsCodeQueryKey>
  >({
    queryKey: getV1UaOsCodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.ua.os[':code'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1UaOsCode<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.ua.os)[':code']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.ua.os)[':code']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.ua.os)[':code']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1UaOsCodeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1UaOsCodeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getV1UaTypeCodeQueryKey(
  args: InferRequestType<(typeof client.v1.ua.type)[':code']['$get']>,
) {
  return ['v1', '/v1/ua/type/:code', args] as const
}

export function getV1UaTypeCodeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.ua.type)[':code']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.ua.type)[':code']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.ua.type)[':code']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1UaTypeCodeQueryKey>
  >({
    queryKey: getV1UaTypeCodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.ua.type[':code'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1UaTypeCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.ua.type)[':code']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.ua.type)[':code']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.ua.type)[':code']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1UaTypeCodeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1UaTypeCodeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getV1UaVendorCodeQueryKey(
  args: InferRequestType<(typeof client.v1.ua.vendor)[':code']['$get']>,
) {
  return ['v1', '/v1/ua/vendor/:code', args] as const
}

export function getV1UaVendorCodeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.ua.vendor)[':code']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.ua.vendor)[':code']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.ua.vendor)[':code']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1UaVendorCodeQueryKey>
  >({
    queryKey: getV1UaVendorCodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.ua.vendor[':code'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1UaVendorCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.ua.vendor)[':code']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.ua.vendor)[':code']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.ua.vendor)[':code']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1UaVendorCodeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1UaVendorCodeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getV1UaUserAgentUrlencodedQueryKey(
  args: InferRequestType<(typeof client.v1.ua)[':user_agent_urlencoded']['$get']>,
) {
  return ['v1', '/v1/ua/:user_agent_urlencoded', args] as const
}

export function getV1UaUserAgentUrlencodedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.ua)[':user_agent_urlencoded']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.ua)[':user_agent_urlencoded']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1UaUserAgentUrlencodedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.ua[':user_agent_urlencoded'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1UaUserAgentUrlencoded<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.ua)[':user_agent_urlencoded']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.ua)[':user_agent_urlencoded']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1UaUserAgentUrlencodedQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}
