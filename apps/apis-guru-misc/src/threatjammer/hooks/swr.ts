import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getPostV1AllowlistPrivateKey() {
  return ['v1', '/v1/allowlist/private', 'POST'] as const
}

export function usePostV1AllowlistPrivate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.allowlist.private.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.allowlist.private.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AllowlistPrivateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.allowlist.private.$post> },
      ) => parseResponse(client.v1.allowlist.private.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1AllowlistPrivateAllKey() {
  return ['v1', '/v1/allowlist/private/all'] as const
}

export function useGetV1AllowlistPrivateAll<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.allowlist.private.all.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AllowlistPrivateAllKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.allowlist.private.all.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.allowlist.private.all.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AllowlistPrivateAll<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.allowlist.private.all.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AllowlistPrivateAllKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.allowlist.private.all.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.allowlist.private.all.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1AllowlistPrivateAllResourceTypeKey(
  args: InferRequestType<(typeof client.v1.allowlist.private.all)[':resource_type']['$get']>,
) {
  return ['v1', '/v1/allowlist/private/all/:resource_type', args] as const
}

export function useGetV1AllowlistPrivateAllResourceType<TError = unknown>(
  args: InferRequestType<(typeof client.v1.allowlist.private.all)[':resource_type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.allowlist.private.all)[':resource_type']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AllowlistPrivateAllResourceTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.allowlist.private.all)[':resource_type']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.allowlist.private.all[':resource_type'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AllowlistPrivateAllResourceType<TError = unknown>(
  args: InferRequestType<(typeof client.v1.allowlist.private.all)[':resource_type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.allowlist.private.all)[':resource_type']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AllowlistPrivateAllResourceTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.allowlist.private.all)[':resource_type']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.allowlist.private.all[':resource_type'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1AllowlistPrivateIpAddressKey(
  args: InferRequestType<(typeof client.v1.allowlist.private.ip)[':address']['$get']>,
) {
  return ['v1', '/v1/allowlist/private/ip/:address', args] as const
}

export function useGetV1AllowlistPrivateIpAddress<TError = unknown>(
  args: InferRequestType<(typeof client.v1.allowlist.private.ip)[':address']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.allowlist.private.ip)[':address']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AllowlistPrivateIpAddressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.allowlist.private.ip)[':address']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.allowlist.private.ip[':address'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AllowlistPrivateIpAddress<TError = unknown>(
  args: InferRequestType<(typeof client.v1.allowlist.private.ip)[':address']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.allowlist.private.ip)[':address']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AllowlistPrivateIpAddressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.allowlist.private.ip)[':address']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.allowlist.private.ip[':address'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1AllowlistPrivateAllowlistIdKey(
  args: InferRequestType<(typeof client.v1.allowlist.private)[':allowlist_id']['$get']>,
) {
  return ['v1', '/v1/allowlist/private/:allowlist_id', args] as const
}

export function useGetV1AllowlistPrivateAllowlistId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.allowlist.private)[':allowlist_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.allowlist.private)[':allowlist_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AllowlistPrivateAllowlistIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.allowlist.private)[':allowlist_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.allowlist.private[':allowlist_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AllowlistPrivateAllowlistId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.allowlist.private)[':allowlist_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.allowlist.private)[':allowlist_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AllowlistPrivateAllowlistIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.allowlist.private)[':allowlist_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.allowlist.private[':allowlist_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1AllowlistPrivateAllowlistIdKey() {
  return ['v1', '/v1/allowlist/private/:allowlist_id', 'PUT'] as const
}

export function usePutV1AllowlistPrivateAllowlistId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.allowlist.private)[':allowlist_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.allowlist.private)[':allowlist_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1AllowlistPrivateAllowlistIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.allowlist.private)[':allowlist_id']['$put']> },
      ) => parseResponse(client.v1.allowlist.private[':allowlist_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1AllowlistPrivateAllowlistIdKey() {
  return ['v1', '/v1/allowlist/private/:allowlist_id', 'DELETE'] as const
}

export function useDeleteV1AllowlistPrivateAllowlistId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.allowlist.private)[':allowlist_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.allowlist.private)[':allowlist_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1AllowlistPrivateAllowlistIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.allowlist.private)[':allowlist_id']['$delete']>
        },
      ) => parseResponse(client.v1.allowlist.private[':allowlist_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1AllowlistPrivateAllowlistIdContentKey(
  args: InferRequestType<(typeof client.v1.allowlist.private)[':allowlist_id']['content']['$get']>,
) {
  return ['v1', '/v1/allowlist/private/:allowlist_id/content', args] as const
}

export function useGetV1AllowlistPrivateAllowlistIdContent<TError = unknown>(
  args: InferRequestType<(typeof client.v1.allowlist.private)[':allowlist_id']['content']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.allowlist.private)[':allowlist_id']['content']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AllowlistPrivateAllowlistIdContentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.allowlist.private)[':allowlist_id']['content']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.allowlist.private[':allowlist_id'].content.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AllowlistPrivateAllowlistIdContent<TError = unknown>(
  args: InferRequestType<(typeof client.v1.allowlist.private)[':allowlist_id']['content']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.allowlist.private)[':allowlist_id']['content']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AllowlistPrivateAllowlistIdContentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.allowlist.private)[':allowlist_id']['content']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.allowlist.private[':allowlist_id'].content.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV1AllowlistPrivateAllowlistIdContentKey() {
  return ['v1', '/v1/allowlist/private/:allowlist_id/content', 'PUT'] as const
}

export function usePutV1AllowlistPrivateAllowlistIdContent<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v1.allowlist.private)[':allowlist_id']['content']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1AllowlistPrivateAllowlistIdContentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1.allowlist.private)[':allowlist_id']['content']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.allowlist.private[':allowlist_id'].content.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1AllowlistPrivateAllowlistIdContentKey() {
  return ['v1', '/v1/allowlist/private/:allowlist_id/content', 'DELETE'] as const
}

export function useDeleteV1AllowlistPrivateAllowlistIdContent<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v1.allowlist.private)[':allowlist_id']['content']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1AllowlistPrivateAllowlistIdContentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1.allowlist.private)[':allowlist_id']['content']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.allowlist.private[':allowlist_id'].content.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV1AllowlistPrivateAllowlistIdOriginKey() {
  return ['v1', '/v1/allowlist/private/:allowlist_id/origin', 'PUT'] as const
}

export function usePutV1AllowlistPrivateAllowlistIdOrigin<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v1.allowlist.private)[':allowlist_id']['origin']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1AllowlistPrivateAllowlistIdOriginKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1.allowlist.private)[':allowlist_id']['origin']['$put']
          >
        },
      ) =>
        parseResponse(client.v1.allowlist.private[':allowlist_id'].origin.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1AllowlistPublicAllKey() {
  return ['v1', '/v1/allowlist/public/all'] as const
}

export function useGetV1AllowlistPublicAll<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.allowlist.public.all.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AllowlistPublicAllKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.allowlist.public.all.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.allowlist.public.all.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AllowlistPublicAll<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.allowlist.public.all.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AllowlistPublicAllKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.allowlist.public.all.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.allowlist.public.all.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1AllowlistPublicAllResourceTypeKey(
  args: InferRequestType<(typeof client.v1.allowlist.public.all)[':resource_type']['$get']>,
) {
  return ['v1', '/v1/allowlist/public/all/:resource_type', args] as const
}

export function useGetV1AllowlistPublicAllResourceType<TError = unknown>(
  args: InferRequestType<(typeof client.v1.allowlist.public.all)[':resource_type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.allowlist.public.all)[':resource_type']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AllowlistPublicAllResourceTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.allowlist.public.all)[':resource_type']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.allowlist.public.all[':resource_type'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AllowlistPublicAllResourceType<TError = unknown>(
  args: InferRequestType<(typeof client.v1.allowlist.public.all)[':resource_type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.allowlist.public.all)[':resource_type']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AllowlistPublicAllResourceTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.allowlist.public.all)[':resource_type']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.allowlist.public.all[':resource_type'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1AllowlistPublicIpAddressKey(
  args: InferRequestType<(typeof client.v1.allowlist.public.ip)[':address']['$get']>,
) {
  return ['v1', '/v1/allowlist/public/ip/:address', args] as const
}

export function useGetV1AllowlistPublicIpAddress<TError = unknown>(
  args: InferRequestType<(typeof client.v1.allowlist.public.ip)[':address']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.allowlist.public.ip)[':address']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AllowlistPublicIpAddressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.allowlist.public.ip)[':address']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.allowlist.public.ip[':address'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AllowlistPublicIpAddress<TError = unknown>(
  args: InferRequestType<(typeof client.v1.allowlist.public.ip)[':address']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.allowlist.public.ip)[':address']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AllowlistPublicIpAddressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.allowlist.public.ip)[':address']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.allowlist.public.ip[':address'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1AllowlistPublicOwnedKey() {
  return ['v1', '/v1/allowlist/public/owned'] as const
}

export function useGetV1AllowlistPublicOwned<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.allowlist.public.owned.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AllowlistPublicOwnedKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.allowlist.public.owned.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.allowlist.public.owned.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AllowlistPublicOwned<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.allowlist.public.owned.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AllowlistPublicOwnedKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.allowlist.public.owned.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.allowlist.public.owned.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1AllowlistPublicOwnedResourceTypeKey(
  args: InferRequestType<(typeof client.v1.allowlist.public.owned)[':resource_type']['$get']>,
) {
  return ['v1', '/v1/allowlist/public/owned/:resource_type', args] as const
}

export function useGetV1AllowlistPublicOwnedResourceType<TError = unknown>(
  args: InferRequestType<(typeof client.v1.allowlist.public.owned)[':resource_type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.allowlist.public.owned)[':resource_type']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AllowlistPublicOwnedResourceTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.allowlist.public.owned)[':resource_type']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.allowlist.public.owned[':resource_type'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AllowlistPublicOwnedResourceType<TError = unknown>(
  args: InferRequestType<(typeof client.v1.allowlist.public.owned)[':resource_type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.allowlist.public.owned)[':resource_type']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AllowlistPublicOwnedResourceTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.allowlist.public.owned)[':resource_type']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.allowlist.public.owned[':resource_type'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1AllowlistPublicAllowlistIdKey(
  args: InferRequestType<(typeof client.v1.allowlist.public)[':allowlist_id']['$get']>,
) {
  return ['v1', '/v1/allowlist/public/:allowlist_id', args] as const
}

export function useGetV1AllowlistPublicAllowlistId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.allowlist.public)[':allowlist_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.allowlist.public)[':allowlist_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AllowlistPublicAllowlistIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.allowlist.public)[':allowlist_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.allowlist.public[':allowlist_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AllowlistPublicAllowlistId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.allowlist.public)[':allowlist_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.allowlist.public)[':allowlist_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AllowlistPublicAllowlistIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.allowlist.public)[':allowlist_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.allowlist.public[':allowlist_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1AllowlistPublicAllowlistIdKey() {
  return ['v1', '/v1/allowlist/public/:allowlist_id', 'PUT'] as const
}

export function usePutV1AllowlistPublicAllowlistId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.allowlist.public)[':allowlist_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.allowlist.public)[':allowlist_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1AllowlistPublicAllowlistIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.allowlist.public)[':allowlist_id']['$put']> },
      ) => parseResponse(client.v1.allowlist.public[':allowlist_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1AllowlistPublicAllowlistIdKey() {
  return ['v1', '/v1/allowlist/public/:allowlist_id', 'DELETE'] as const
}

export function useDeleteV1AllowlistPublicAllowlistId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.allowlist.public)[':allowlist_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.allowlist.public)[':allowlist_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1AllowlistPublicAllowlistIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.allowlist.public)[':allowlist_id']['$delete']>
        },
      ) => parseResponse(client.v1.allowlist.public[':allowlist_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1AllowlistPublicAllowlistIdOriginKey() {
  return ['v1', '/v1/allowlist/public/:allowlist_id/origin', 'PUT'] as const
}

export function usePutV1AllowlistPublicAllowlistIdOrigin<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v1.allowlist.public)[':allowlist_id']['origin']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1AllowlistPublicAllowlistIdOriginKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1.allowlist.public)[':allowlist_id']['origin']['$put']
          >
        },
      ) =>
        parseResponse(client.v1.allowlist.public[':allowlist_id'].origin.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1AsnIpIpAddressKey(
  args: InferRequestType<(typeof client.v1.asn.ip)[':ip_address']['$get']>,
) {
  return ['v1', '/v1/asn/ip/:ip_address', args] as const
}

export function useGetV1AsnIpIpAddress<TError = unknown>(
  args: InferRequestType<(typeof client.v1.asn.ip)[':ip_address']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.asn.ip)[':ip_address']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AsnIpIpAddressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.asn.ip)[':ip_address']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.asn.ip[':ip_address'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AsnIpIpAddress<TError = unknown>(
  args: InferRequestType<(typeof client.v1.asn.ip)[':ip_address']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.asn.ip)[':ip_address']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AsnIpIpAddressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.asn.ip)[':ip_address']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.asn.ip[':ip_address'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1AsnPrefixKey() {
  return ['v1', '/v1/asn/prefix', 'POST'] as const
}

export function usePostV1AsnPrefix<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.asn.prefix.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.asn.prefix.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AsnPrefixKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.asn.prefix.$post> }) =>
        parseResponse(client.v1.asn.prefix.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1AsnRegistryAllKey() {
  return ['v1', '/v1/asn/registry/all'] as const
}

export function useGetV1AsnRegistryAll<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.asn.registry.all.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1AsnRegistryAllKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.asn.registry.all.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.asn.registry.all.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AsnRegistryAll<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.asn.registry.all.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1AsnRegistryAllKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.asn.registry.all.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.asn.registry.all.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1AsnRegistryCodeKey(
  args: InferRequestType<(typeof client.v1.asn.registry)[':code']['$get']>,
) {
  return ['v1', '/v1/asn/registry/:code', args] as const
}

export function useGetV1AsnRegistryCode<TError = unknown>(
  args: InferRequestType<(typeof client.v1.asn.registry)[':code']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.asn.registry)[':code']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AsnRegistryCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.asn.registry)[':code']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.asn.registry[':code'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AsnRegistryCode<TError = unknown>(
  args: InferRequestType<(typeof client.v1.asn.registry)[':code']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.asn.registry)[':code']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AsnRegistryCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.asn.registry)[':code']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.asn.registry[':code'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1AsnStatusAllKey() {
  return ['v1', '/v1/asn/status/all'] as const
}

export function useGetV1AsnStatusAll<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.asn.status.all.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1AsnStatusAllKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.asn.status.all.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.asn.status.all.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AsnStatusAll<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.asn.status.all.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1AsnStatusAllKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.asn.status.all.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.asn.status.all.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1AsnStatusCodeKey(
  args: InferRequestType<(typeof client.v1.asn.status)[':code']['$get']>,
) {
  return ['v1', '/v1/asn/status/:code', args] as const
}

export function useGetV1AsnStatusCode<TError = unknown>(
  args: InferRequestType<(typeof client.v1.asn.status)[':code']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.asn.status)[':code']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AsnStatusCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.asn.status)[':code']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.asn.status[':code'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AsnStatusCode<TError = unknown>(
  args: InferRequestType<(typeof client.v1.asn.status)[':code']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.asn.status)[':code']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AsnStatusCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.asn.status)[':code']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.asn.status[':code'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1AsnNumberKey(
  args: InferRequestType<(typeof client.v1.asn)[':number']['$get']>,
) {
  return ['v1', '/v1/asn/:number', args] as const
}

export function useGetV1AsnNumber<TError = unknown>(
  args: InferRequestType<(typeof client.v1.asn)[':number']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.asn)[':number']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1AsnNumberKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.asn)[':number']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.asn[':number'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AsnNumber<TError = unknown>(
  args: InferRequestType<(typeof client.v1.asn)[':number']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.asn)[':number']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1AsnNumberKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.asn)[':number']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.asn[':number'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1AsnNumberPrefixesKey(
  args: InferRequestType<(typeof client.v1.asn)[':number']['prefixes']['$get']>,
) {
  return ['v1', '/v1/asn/:number/prefixes', args] as const
}

export function useGetV1AsnNumberPrefixes<TError = unknown>(
  args: InferRequestType<(typeof client.v1.asn)[':number']['prefixes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.asn)[':number']['prefixes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AsnNumberPrefixesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.asn)[':number']['prefixes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.asn[':number'].prefixes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AsnNumberPrefixes<TError = unknown>(
  args: InferRequestType<(typeof client.v1.asn)[':number']['prefixes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.asn)[':number']['prefixes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AsnNumberPrefixesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.asn)[':number']['prefixes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.asn[':number'].prefixes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1AssessIpKey() {
  return ['v1', '/v1/assess/ip', 'POST'] as const
}

export function usePostV1AssessIp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.assess.ip.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.assess.ip.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AssessIpKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.assess.ip.$post> }) =>
        parseResponse(client.v1.assess.ip.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1AssessIpCsvKey() {
  return ['v1', '/v1/assess/ip/csv', 'POST'] as const
}

export function usePostV1AssessIpCsv<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.assess.ip.csv.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.assess.ip.csv.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AssessIpCsvKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.assess.ip.csv.$post> }) =>
        parseResponse(client.v1.assess.ip.csv.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1AssessIpIpAddressKey(
  args: InferRequestType<(typeof client.v1.assess.ip)[':ip_address']['$get']>,
) {
  return ['v1', '/v1/assess/ip/:ip_address', args] as const
}

export function useGetV1AssessIpIpAddress<TError = unknown>(
  args: InferRequestType<(typeof client.v1.assess.ip)[':ip_address']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.assess.ip)[':ip_address']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AssessIpIpAddressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.assess.ip)[':ip_address']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.assess.ip[':ip_address'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AssessIpIpAddress<TError = unknown>(
  args: InferRequestType<(typeof client.v1.assess.ip)[':ip_address']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.assess.ip)[':ip_address']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AssessIpIpAddressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.assess.ip)[':ip_address']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.assess.ip[':ip_address'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1DatacenterIpIpAddressKey(
  args: InferRequestType<(typeof client.v1.datacenter.ip)[':ip_address']['$get']>,
) {
  return ['v1', '/v1/datacenter/ip/:ip_address', args] as const
}

export function useGetV1DatacenterIpIpAddress<TError = unknown>(
  args: InferRequestType<(typeof client.v1.datacenter.ip)[':ip_address']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.datacenter.ip)[':ip_address']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1DatacenterIpIpAddressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.datacenter.ip)[':ip_address']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.datacenter.ip[':ip_address'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1DatacenterIpIpAddress<TError = unknown>(
  args: InferRequestType<(typeof client.v1.datacenter.ip)[':ip_address']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.datacenter.ip)[':ip_address']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1DatacenterIpIpAddressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.datacenter.ip)[':ip_address']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.datacenter.ip[':ip_address'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1DatacenterPrefixKey() {
  return ['v1', '/v1/datacenter/prefix', 'POST'] as const
}

export function usePostV1DatacenterPrefix<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.datacenter.prefix.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.datacenter.prefix.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DatacenterPrefixKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.datacenter.prefix.$post> },
      ) => parseResponse(client.v1.datacenter.prefix.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1DatacenterDatacenterIdKey(
  args: InferRequestType<(typeof client.v1.datacenter)[':datacenter_id']['$get']>,
) {
  return ['v1', '/v1/datacenter/:datacenter_id', args] as const
}

export function useGetV1DatacenterDatacenterId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.datacenter)[':datacenter_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.datacenter)[':datacenter_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1DatacenterDatacenterIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.datacenter)[':datacenter_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.datacenter[':datacenter_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1DatacenterDatacenterId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.datacenter)[':datacenter_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.datacenter)[':datacenter_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1DatacenterDatacenterIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.datacenter)[':datacenter_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.datacenter[':datacenter_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1DatacenterDatacenterIdPrefixesKey(
  args: InferRequestType<(typeof client.v1.datacenter)[':datacenter_id']['prefixes']['$get']>,
) {
  return ['v1', '/v1/datacenter/:datacenter_id/prefixes', args] as const
}

export function useGetV1DatacenterDatacenterIdPrefixes<TError = unknown>(
  args: InferRequestType<(typeof client.v1.datacenter)[':datacenter_id']['prefixes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.datacenter)[':datacenter_id']['prefixes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1DatacenterDatacenterIdPrefixesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.datacenter)[':datacenter_id']['prefixes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.datacenter[':datacenter_id'].prefixes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1DatacenterDatacenterIdPrefixes<TError = unknown>(
  args: InferRequestType<(typeof client.v1.datacenter)[':datacenter_id']['prefixes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.datacenter)[':datacenter_id']['prefixes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1DatacenterDatacenterIdPrefixesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.datacenter)[':datacenter_id']['prefixes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.datacenter[':datacenter_id'].prefixes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1DatasetIpKey() {
  return ['v1', '/v1/dataset/ip'] as const
}

export function useGetV1DatasetIp<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.dataset.ip.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1DatasetIpKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.dataset.ip.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.dataset.ip.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1DatasetIp<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.dataset.ip.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1DatasetIpKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.dataset.ip.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.dataset.ip.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1DatasetIpNameKey(
  args: InferRequestType<(typeof client.v1.dataset.ip)[':name']['$get']>,
) {
  return ['v1', '/v1/dataset/ip/:name', args] as const
}

export function useGetV1DatasetIpName<TError = unknown>(
  args: InferRequestType<(typeof client.v1.dataset.ip)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.dataset.ip)[':name']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1DatasetIpNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.dataset.ip)[':name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.dataset.ip[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1DatasetIpName<TError = unknown>(
  args: InferRequestType<(typeof client.v1.dataset.ip)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.dataset.ip)[':name']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1DatasetIpNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.dataset.ip)[':name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.dataset.ip[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1DenylistPrivateKey() {
  return ['v1', '/v1/denylist/private', 'POST'] as const
}

export function usePostV1DenylistPrivate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.denylist.private.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.denylist.private.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DenylistPrivateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.denylist.private.$post> }) =>
        parseResponse(client.v1.denylist.private.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1DenylistPrivateAllKey() {
  return ['v1', '/v1/denylist/private/all'] as const
}

export function useGetV1DenylistPrivateAll<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.denylist.private.all.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1DenylistPrivateAllKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.denylist.private.all.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.denylist.private.all.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1DenylistPrivateAll<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.denylist.private.all.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1DenylistPrivateAllKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.denylist.private.all.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.denylist.private.all.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1DenylistPrivateAllResourceTypeKey(
  args: InferRequestType<(typeof client.v1.denylist.private.all)[':resource_type']['$get']>,
) {
  return ['v1', '/v1/denylist/private/all/:resource_type', args] as const
}

export function useGetV1DenylistPrivateAllResourceType<TError = unknown>(
  args: InferRequestType<(typeof client.v1.denylist.private.all)[':resource_type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.denylist.private.all)[':resource_type']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1DenylistPrivateAllResourceTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.denylist.private.all)[':resource_type']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.denylist.private.all[':resource_type'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1DenylistPrivateAllResourceType<TError = unknown>(
  args: InferRequestType<(typeof client.v1.denylist.private.all)[':resource_type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.denylist.private.all)[':resource_type']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1DenylistPrivateAllResourceTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.denylist.private.all)[':resource_type']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.denylist.private.all[':resource_type'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1DenylistPrivateIpAddressKey(
  args: InferRequestType<(typeof client.v1.denylist.private.ip)[':address']['$get']>,
) {
  return ['v1', '/v1/denylist/private/ip/:address', args] as const
}

export function useGetV1DenylistPrivateIpAddress<TError = unknown>(
  args: InferRequestType<(typeof client.v1.denylist.private.ip)[':address']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.denylist.private.ip)[':address']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1DenylistPrivateIpAddressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.denylist.private.ip)[':address']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.denylist.private.ip[':address'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1DenylistPrivateIpAddress<TError = unknown>(
  args: InferRequestType<(typeof client.v1.denylist.private.ip)[':address']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.denylist.private.ip)[':address']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1DenylistPrivateIpAddressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.denylist.private.ip)[':address']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.denylist.private.ip[':address'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1DenylistPrivateDenylistIdKey(
  args: InferRequestType<(typeof client.v1.denylist.private)[':denylist_id']['$get']>,
) {
  return ['v1', '/v1/denylist/private/:denylist_id', args] as const
}

export function useGetV1DenylistPrivateDenylistId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.denylist.private)[':denylist_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.denylist.private)[':denylist_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1DenylistPrivateDenylistIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.denylist.private)[':denylist_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.denylist.private[':denylist_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1DenylistPrivateDenylistId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.denylist.private)[':denylist_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.denylist.private)[':denylist_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1DenylistPrivateDenylistIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.denylist.private)[':denylist_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.denylist.private[':denylist_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1DenylistPrivateDenylistIdKey() {
  return ['v1', '/v1/denylist/private/:denylist_id', 'PUT'] as const
}

export function usePutV1DenylistPrivateDenylistId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.denylist.private)[':denylist_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.denylist.private)[':denylist_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1DenylistPrivateDenylistIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.denylist.private)[':denylist_id']['$put']> },
      ) => parseResponse(client.v1.denylist.private[':denylist_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1DenylistPrivateDenylistIdKey() {
  return ['v1', '/v1/denylist/private/:denylist_id', 'DELETE'] as const
}

export function useDeleteV1DenylistPrivateDenylistId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.denylist.private)[':denylist_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.denylist.private)[':denylist_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1DenylistPrivateDenylistIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.denylist.private)[':denylist_id']['$delete']>
        },
      ) => parseResponse(client.v1.denylist.private[':denylist_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1DenylistPrivateDenylistIdContentKey(
  args: InferRequestType<(typeof client.v1.denylist.private)[':denylist_id']['content']['$get']>,
) {
  return ['v1', '/v1/denylist/private/:denylist_id/content', args] as const
}

export function useGetV1DenylistPrivateDenylistIdContent<TError = unknown>(
  args: InferRequestType<(typeof client.v1.denylist.private)[':denylist_id']['content']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.denylist.private)[':denylist_id']['content']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1DenylistPrivateDenylistIdContentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.denylist.private)[':denylist_id']['content']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.denylist.private[':denylist_id'].content.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1DenylistPrivateDenylistIdContent<TError = unknown>(
  args: InferRequestType<(typeof client.v1.denylist.private)[':denylist_id']['content']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.denylist.private)[':denylist_id']['content']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1DenylistPrivateDenylistIdContentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.denylist.private)[':denylist_id']['content']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.denylist.private[':denylist_id'].content.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1DenylistPrivateDenylistIdContentKey() {
  return ['v1', '/v1/denylist/private/:denylist_id/content', 'PUT'] as const
}

export function usePutV1DenylistPrivateDenylistIdContent<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v1.denylist.private)[':denylist_id']['content']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1DenylistPrivateDenylistIdContentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1.denylist.private)[':denylist_id']['content']['$put']
          >
        },
      ) =>
        parseResponse(client.v1.denylist.private[':denylist_id'].content.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1DenylistPrivateDenylistIdContentKey() {
  return ['v1', '/v1/denylist/private/:denylist_id/content', 'DELETE'] as const
}

export function useDeleteV1DenylistPrivateDenylistIdContent<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v1.denylist.private)[':denylist_id']['content']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1DenylistPrivateDenylistIdContentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1.denylist.private)[':denylist_id']['content']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.denylist.private[':denylist_id'].content.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV1DenylistPrivateDenylistIdOriginKey() {
  return ['v1', '/v1/denylist/private/:denylist_id/origin', 'PUT'] as const
}

export function usePutV1DenylistPrivateDenylistIdOrigin<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.denylist.private)[':denylist_id']['origin']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.denylist.private)[':denylist_id']['origin']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1DenylistPrivateDenylistIdOriginKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1.denylist.private)[':denylist_id']['origin']['$put']
          >
        },
      ) =>
        parseResponse(client.v1.denylist.private[':denylist_id'].origin.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1DenylistPublicAllKey() {
  return ['v1', '/v1/denylist/public/all'] as const
}

export function useGetV1DenylistPublicAll<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.denylist.public.all.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1DenylistPublicAllKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.denylist.public.all.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.denylist.public.all.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1DenylistPublicAll<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.denylist.public.all.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1DenylistPublicAllKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.denylist.public.all.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.denylist.public.all.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1DenylistPublicAllResourceTypeKey(
  args: InferRequestType<(typeof client.v1.denylist.public.all)[':resource_type']['$get']>,
) {
  return ['v1', '/v1/denylist/public/all/:resource_type', args] as const
}

export function useGetV1DenylistPublicAllResourceType<TError = unknown>(
  args: InferRequestType<(typeof client.v1.denylist.public.all)[':resource_type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.denylist.public.all)[':resource_type']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1DenylistPublicAllResourceTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.denylist.public.all)[':resource_type']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.denylist.public.all[':resource_type'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1DenylistPublicAllResourceType<TError = unknown>(
  args: InferRequestType<(typeof client.v1.denylist.public.all)[':resource_type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.denylist.public.all)[':resource_type']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1DenylistPublicAllResourceTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.denylist.public.all)[':resource_type']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.denylist.public.all[':resource_type'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1DenylistPublicIpAddressKey(
  args: InferRequestType<(typeof client.v1.denylist.public.ip)[':address']['$get']>,
) {
  return ['v1', '/v1/denylist/public/ip/:address', args] as const
}

export function useGetV1DenylistPublicIpAddress<TError = unknown>(
  args: InferRequestType<(typeof client.v1.denylist.public.ip)[':address']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.denylist.public.ip)[':address']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1DenylistPublicIpAddressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.denylist.public.ip)[':address']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.denylist.public.ip[':address'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1DenylistPublicIpAddress<TError = unknown>(
  args: InferRequestType<(typeof client.v1.denylist.public.ip)[':address']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.denylist.public.ip)[':address']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1DenylistPublicIpAddressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.denylist.public.ip)[':address']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.denylist.public.ip[':address'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1DenylistPublicOwnedKey() {
  return ['v1', '/v1/denylist/public/owned'] as const
}

export function useGetV1DenylistPublicOwned<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.denylist.public.owned.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1DenylistPublicOwnedKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.denylist.public.owned.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.denylist.public.owned.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1DenylistPublicOwned<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.denylist.public.owned.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1DenylistPublicOwnedKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.denylist.public.owned.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.denylist.public.owned.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1DenylistPublicOwnedResourceTypeKey(
  args: InferRequestType<(typeof client.v1.denylist.public.owned)[':resource_type']['$get']>,
) {
  return ['v1', '/v1/denylist/public/owned/:resource_type', args] as const
}

export function useGetV1DenylistPublicOwnedResourceType<TError = unknown>(
  args: InferRequestType<(typeof client.v1.denylist.public.owned)[':resource_type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.denylist.public.owned)[':resource_type']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1DenylistPublicOwnedResourceTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.denylist.public.owned)[':resource_type']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.denylist.public.owned[':resource_type'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1DenylistPublicOwnedResourceType<TError = unknown>(
  args: InferRequestType<(typeof client.v1.denylist.public.owned)[':resource_type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.denylist.public.owned)[':resource_type']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1DenylistPublicOwnedResourceTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.denylist.public.owned)[':resource_type']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.denylist.public.owned[':resource_type'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1DenylistPublicDenylistIdKey(
  args: InferRequestType<(typeof client.v1.denylist.public)[':denylist_id']['$get']>,
) {
  return ['v1', '/v1/denylist/public/:denylist_id', args] as const
}

export function useGetV1DenylistPublicDenylistId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.denylist.public)[':denylist_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.denylist.public)[':denylist_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1DenylistPublicDenylistIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.denylist.public)[':denylist_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.denylist.public[':denylist_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1DenylistPublicDenylistId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.denylist.public)[':denylist_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.denylist.public)[':denylist_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1DenylistPublicDenylistIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.denylist.public)[':denylist_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.denylist.public[':denylist_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1DenylistPublicDenylistIdKey() {
  return ['v1', '/v1/denylist/public/:denylist_id', 'PUT'] as const
}

export function usePutV1DenylistPublicDenylistId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.denylist.public)[':denylist_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.denylist.public)[':denylist_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1DenylistPublicDenylistIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.denylist.public)[':denylist_id']['$put']> },
      ) => parseResponse(client.v1.denylist.public[':denylist_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1DenylistPublicDenylistIdKey() {
  return ['v1', '/v1/denylist/public/:denylist_id', 'DELETE'] as const
}

export function useDeleteV1DenylistPublicDenylistId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.denylist.public)[':denylist_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.denylist.public)[':denylist_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1DenylistPublicDenylistIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.denylist.public)[':denylist_id']['$delete']> },
      ) => parseResponse(client.v1.denylist.public[':denylist_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1DenylistPublicDenylistIdOriginKey() {
  return ['v1', '/v1/denylist/public/:denylist_id/origin', 'PUT'] as const
}

export function usePutV1DenylistPublicDenylistIdOrigin<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.denylist.public)[':denylist_id']['origin']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.denylist.public)[':denylist_id']['origin']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1DenylistPublicDenylistIdOriginKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1.denylist.public)[':denylist_id']['origin']['$put']
          >
        },
      ) => parseResponse(client.v1.denylist.public[':denylist_id'].origin.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1DenylistReportedIpKey(
  args: InferRequestType<typeof client.v1.denylist.reported.ip.$get>,
) {
  return ['v1', '/v1/denylist/reported/ip', args] as const
}

export function useGetV1DenylistReportedIp<TError = unknown>(
  args: InferRequestType<typeof client.v1.denylist.reported.ip.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.denylist.reported.ip.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1DenylistReportedIpKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.denylist.reported.ip.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.denylist.reported.ip.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1DenylistReportedIp<TError = unknown>(
  args: InferRequestType<typeof client.v1.denylist.reported.ip.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.denylist.reported.ip.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1DenylistReportedIpKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.denylist.reported.ip.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.denylist.reported.ip.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1DenylistReportedIpAllKey() {
  return ['v1', '/v1/denylist/reported/ip/all', 'DELETE'] as const
}

export function useDeleteV1DenylistReportedIpAll<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.denylist.reported.ip.all.$delete>>>
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1DenylistReportedIpAllKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(client.v1.denylist.reported.ip.all.$delete(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1DenylistReportedIpIpAddressKey(
  args: InferRequestType<(typeof client.v1.denylist.reported.ip)[':ip_address']['$get']>,
) {
  return ['v1', '/v1/denylist/reported/ip/:ip_address', args] as const
}

export function useGetV1DenylistReportedIpIpAddress<TError = unknown>(
  args: InferRequestType<(typeof client.v1.denylist.reported.ip)[':ip_address']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.denylist.reported.ip)[':ip_address']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1DenylistReportedIpIpAddressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.denylist.reported.ip)[':ip_address']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.denylist.reported.ip[':ip_address'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1DenylistReportedIpIpAddress<TError = unknown>(
  args: InferRequestType<(typeof client.v1.denylist.reported.ip)[':ip_address']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.denylist.reported.ip)[':ip_address']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1DenylistReportedIpIpAddressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.denylist.reported.ip)[':ip_address']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.denylist.reported.ip[':ip_address'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1DenylistReportedIpIpAddressKey() {
  return ['v1', '/v1/denylist/reported/ip/:ip_address', 'DELETE'] as const
}

export function useDeleteV1DenylistReportedIpIpAddress<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.denylist.reported.ip)[':ip_address']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.denylist.reported.ip)[':ip_address']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1DenylistReportedIpIpAddressKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.denylist.reported.ip)[':ip_address']['$delete']>
        },
      ) => parseResponse(client.v1.denylist.reported.ip[':ip_address'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1GeoKey() {
  return ['v1', '/v1/geo', 'POST'] as const
}

export function usePostV1Geo<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.geo.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.geo.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1GeoKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.geo.$post> }) =>
        parseResponse(client.v1.geo.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1GeoCsvKey() {
  return ['v1', '/v1/geo/csv', 'POST'] as const
}

export function usePostV1GeoCsv<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.geo.csv.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.geo.csv.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1GeoCsvKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.geo.csv.$post> }) =>
        parseResponse(client.v1.geo.csv.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1GeoIpAddressKey(
  args: InferRequestType<(typeof client.v1.geo)[':ip_address']['$get']>,
) {
  return ['v1', '/v1/geo/:ip_address', args] as const
}

export function useGetV1GeoIpAddress<TError = unknown>(
  args: InferRequestType<(typeof client.v1.geo)[':ip_address']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.geo)[':ip_address']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1GeoIpAddressKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.geo)[':ip_address']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.geo[':ip_address'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1GeoIpAddress<TError = unknown>(
  args: InferRequestType<(typeof client.v1.geo)[':ip_address']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.geo)[':ip_address']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1GeoIpAddressKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.geo)[':ip_address']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.geo[':ip_address'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1LogIpIdLogchangeIdKey(
  args: InferRequestType<(typeof client.v1.log.ip.id)[':logchange_id']['$get']>,
) {
  return ['v1', '/v1/log/ip/id/:logchange_id', args] as const
}

export function useGetV1LogIpIdLogchangeId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.log.ip.id)[':logchange_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.log.ip.id)[':logchange_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1LogIpIdLogchangeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.log.ip.id)[':logchange_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.log.ip.id[':logchange_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1LogIpIdLogchangeId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.log.ip.id)[':logchange_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.log.ip.id)[':logchange_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1LogIpIdLogchangeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.log.ip.id)[':logchange_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.log.ip.id[':logchange_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1LogIpIpAddressKey(
  args: InferRequestType<(typeof client.v1.log.ip)[':ip_address']['$get']>,
) {
  return ['v1', '/v1/log/ip/:ip_address', args] as const
}

export function useGetV1LogIpIpAddress<TError = unknown>(
  args: InferRequestType<(typeof client.v1.log.ip)[':ip_address']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.log.ip)[':ip_address']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1LogIpIpAddressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.log.ip)[':ip_address']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.log.ip[':ip_address'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1LogIpIpAddress<TError = unknown>(
  args: InferRequestType<(typeof client.v1.log.ip)[':ip_address']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.log.ip)[':ip_address']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1LogIpIpAddressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.log.ip)[':ip_address']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.log.ip[':ip_address'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1OriginKey(args: InferRequestType<typeof client.v1.origin.$get>) {
  return ['v1', '/v1/origin', args] as const
}

export function useGetV1Origin<TError = unknown>(
  args: InferRequestType<typeof client.v1.origin.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1OriginKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.origin.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Origin<TError = unknown>(
  args: InferRequestType<typeof client.v1.origin.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1OriginKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.origin.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1OriginKey() {
  return ['v1', '/v1/origin', 'PUT'] as const
}

export function usePutV1Origin<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin.$put>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.origin.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1OriginKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.origin.$put> }) =>
        parseResponse(client.v1.origin.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1OriginAddressesKey(
  args: InferRequestType<typeof client.v1.origin.addresses.$get>,
) {
  return ['v1', '/v1/origin/addresses', args] as const
}

export function useGetV1OriginAddresses<TError = unknown>(
  args: InferRequestType<typeof client.v1.origin.addresses.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin.addresses.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1OriginAddressesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin.addresses.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.origin.addresses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OriginAddresses<TError = unknown>(
  args: InferRequestType<typeof client.v1.origin.addresses.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin.addresses.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1OriginAddressesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin.addresses.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.origin.addresses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1OriginAllKey() {
  return ['v1', '/v1/origin/all'] as const
}

export function useGetV1OriginAll<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin.all.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1OriginAllKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin.all.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.origin.all.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OriginAll<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin.all.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1OriginAllKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin.all.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.origin.all.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1OriginClientAnalysisKey(
  args: InferRequestType<typeof client.v1.origin.client.analysis.$get>,
) {
  return ['v1', '/v1/origin/client/analysis', args] as const
}

export function useGetV1OriginClientAnalysis<TError = unknown>(
  args: InferRequestType<typeof client.v1.origin.client.analysis.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin.client.analysis.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1OriginClientAnalysisKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin.client.analysis.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.origin.client.analysis.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OriginClientAnalysis<TError = unknown>(
  args: InferRequestType<typeof client.v1.origin.client.analysis.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin.client.analysis.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1OriginClientAnalysisKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin.client.analysis.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.origin.client.analysis.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1OriginCookiesKey(
  args: InferRequestType<typeof client.v1.origin.cookies.$get>,
) {
  return ['v1', '/v1/origin/cookies', args] as const
}

export function useGetV1OriginCookies<TError = unknown>(
  args: InferRequestType<typeof client.v1.origin.cookies.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin.cookies.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1OriginCookiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin.cookies.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.origin.cookies.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OriginCookies<TError = unknown>(
  args: InferRequestType<typeof client.v1.origin.cookies.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin.cookies.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1OriginCookiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin.cookies.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.origin.cookies.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1OriginScriptsKey(
  args: InferRequestType<typeof client.v1.origin.scripts.$get>,
) {
  return ['v1', '/v1/origin/scripts', args] as const
}

export function useGetV1OriginScripts<TError = unknown>(
  args: InferRequestType<typeof client.v1.origin.scripts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin.scripts.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1OriginScriptsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin.scripts.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.origin.scripts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OriginScripts<TError = unknown>(
  args: InferRequestType<typeof client.v1.origin.scripts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin.scripts.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1OriginScriptsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin.scripts.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.origin.scripts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1OriginStatusKey() {
  return ['v1', '/v1/origin/status', 'POST'] as const
}

export function usePostV1OriginStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin.status.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.origin.status.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1OriginStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.origin.status.$post> }) =>
        parseResponse(client.v1.origin.status.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1OriginStatusDetailStatusIdKey(
  args: InferRequestType<(typeof client.v1.origin.status.detail)[':status_id']['$get']>,
) {
  return ['v1', '/v1/origin/status/detail/:status_id', args] as const
}

export function useGetV1OriginStatusDetailStatusId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.origin.status.detail)[':status_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.origin.status.detail)[':status_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1OriginStatusDetailStatusIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.origin.status.detail)[':status_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.origin.status.detail[':status_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OriginStatusDetailStatusId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.origin.status.detail)[':status_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.origin.status.detail)[':status_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1OriginStatusDetailStatusIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.origin.status.detail)[':status_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.origin.status.detail[':status_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1OriginStatusDetailsKey() {
  return ['v1', '/v1/origin/status/details'] as const
}

export function useGetV1OriginStatusDetails<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin.status.details.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1OriginStatusDetailsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin.status.details.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.origin.status.details.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OriginStatusDetails<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin.status.details.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1OriginStatusDetailsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin.status.details.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.origin.status.details.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1OriginTrafficAnalysisKey(
  args: InferRequestType<typeof client.v1.origin.traffic.analysis.$get>,
) {
  return ['v1', '/v1/origin/traffic/analysis', args] as const
}

export function useGetV1OriginTrafficAnalysis<TError = unknown>(
  args: InferRequestType<typeof client.v1.origin.traffic.analysis.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin.traffic.analysis.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1OriginTrafficAnalysisKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin.traffic.analysis.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.origin.traffic.analysis.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OriginTrafficAnalysis<TError = unknown>(
  args: InferRequestType<typeof client.v1.origin.traffic.analysis.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin.traffic.analysis.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1OriginTrafficAnalysisKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin.traffic.analysis.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.origin.traffic.analysis.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1OriginTokenKey() {
  return ['v1', '/v1/origin_token', 'POST'] as const
}

export function usePostV1OriginToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin_token.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.origin_token.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1OriginTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.origin_token.$post> }) =>
        parseResponse(client.v1.origin_token.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1OriginTokenKey() {
  return ['v1', '/v1/origin_token', 'DELETE'] as const
}

export function useDeleteV1OriginToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin_token.$delete>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.origin_token.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1OriginTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.origin_token.$delete> }) =>
        parseResponse(client.v1.origin_token.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1OriginTokenAllKey() {
  return ['v1', '/v1/origin_token/all'] as const
}

export function useGetV1OriginTokenAll<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin_token.all.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1OriginTokenAllKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin_token.all.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.origin_token.all.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OriginTokenAll<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin_token.all.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1OriginTokenAllKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin_token.all.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.origin_token.all.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1OriginTokenDisableKey() {
  return ['v1', '/v1/origin_token/disable', 'PUT'] as const
}

export function usePutV1OriginTokenDisable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin_token.disable.$put>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.origin_token.disable.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1OriginTokenDisableKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.origin_token.disable.$put> },
      ) => parseResponse(client.v1.origin_token.disable.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1OriginTokenEnableKey() {
  return ['v1', '/v1/origin_token/enable', 'PUT'] as const
}

export function usePutV1OriginTokenEnable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin_token.enable.$put>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.origin_token.enable.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1OriginTokenEnableKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.origin_token.enable.$put> },
      ) => parseResponse(client.v1.origin_token.enable.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1OriginTokenNewKey() {
  return ['v1', '/v1/origin_token/new', 'POST'] as const
}

export function usePostV1OriginTokenNew<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.origin_token.new.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.origin_token.new.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1OriginTokenNewKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.origin_token.new.$post> }) =>
        parseResponse(client.v1.origin_token.new.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1SourceIpKey() {
  return ['v1', '/v1/source/ip'] as const
}

export function useGetV1SourceIp<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.source.ip.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1SourceIpKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.source.ip.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.source.ip.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1SourceIp<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.source.ip.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1SourceIpKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.source.ip.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.source.ip.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1SourceIpSourceKey(
  args: InferRequestType<(typeof client.v1.source.ip)[':source']['$get']>,
) {
  return ['v1', '/v1/source/ip/:source', args] as const
}

export function useGetV1SourceIpSource<TError = unknown>(
  args: InferRequestType<(typeof client.v1.source.ip)[':source']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.source.ip)[':source']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1SourceIpSourceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.source.ip)[':source']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.source.ip[':source'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1SourceIpSource<TError = unknown>(
  args: InferRequestType<(typeof client.v1.source.ip)[':source']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.source.ip)[':source']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1SourceIpSourceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.source.ip)[':source']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.source.ip[':source'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1SourceIpSourceRangeTimeRangeKey(
  args: InferRequestType<(typeof client.v1.source.ip)[':source']['range'][':time_range']['$get']>,
) {
  return ['v1', '/v1/source/ip/:source/range/:time_range', args] as const
}

export function useGetV1SourceIpSourceRangeTimeRange<TError = unknown>(
  args: InferRequestType<(typeof client.v1.source.ip)[':source']['range'][':time_range']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.source.ip)[':source']['range'][':time_range']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1SourceIpSourceRangeTimeRangeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.source.ip)[':source']['range'][':time_range']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.source.ip[':source'].range[':time_range'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1SourceIpSourceRangeTimeRange<TError = unknown>(
  args: InferRequestType<(typeof client.v1.source.ip)[':source']['range'][':time_range']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.source.ip)[':source']['range'][':time_range']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1SourceIpSourceRangeTimeRangeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.source.ip)[':source']['range'][':time_range']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.source.ip[':source'].range[':time_range'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1TokenKey() {
  return ['v1', '/v1/token'] as const
}

export function useGetV1Token<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.token.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1TokenKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.token.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.token.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Token<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.token.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1TokenKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.token.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.token.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1TokenActivityKey(
  args: InferRequestType<typeof client.v1.token.activity.$get>,
) {
  return ['v1', '/v1/token/activity', args] as const
}

export function useGetV1TokenActivity<TError = unknown>(
  args: InferRequestType<typeof client.v1.token.activity.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.token.activity.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1TokenActivityKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.token.activity.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.token.activity.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1TokenActivity<TError = unknown>(
  args: InferRequestType<typeof client.v1.token.activity.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.token.activity.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1TokenActivityKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.token.activity.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.token.activity.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1UaKey() {
  return ['v1', '/v1/ua', 'POST'] as const
}

export function usePostV1Ua<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.ua.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.ua.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1UaKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.ua.$post> }) =>
        parseResponse(client.v1.ua.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1UaCsvKey() {
  return ['v1', '/v1/ua/csv', 'POST'] as const
}

export function usePostV1UaCsv<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.ua.csv.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.ua.csv.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1UaCsvKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.ua.csv.$post> }) =>
        parseResponse(client.v1.ua.csv.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1UaDeviceCodeKey(
  args: InferRequestType<(typeof client.v1.ua.device)[':code']['$get']>,
) {
  return ['v1', '/v1/ua/device/:code', args] as const
}

export function useGetV1UaDeviceCode<TError = unknown>(
  args: InferRequestType<(typeof client.v1.ua.device)[':code']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.ua.device)[':code']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1UaDeviceCodeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.ua.device)[':code']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.ua.device[':code'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1UaDeviceCode<TError = unknown>(
  args: InferRequestType<(typeof client.v1.ua.device)[':code']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.ua.device)[':code']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1UaDeviceCodeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.ua.device)[':code']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.ua.device[':code'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1UaFamilyCodeKey(
  args: InferRequestType<(typeof client.v1.ua.family)[':code']['$get']>,
) {
  return ['v1', '/v1/ua/family/:code', args] as const
}

export function useGetV1UaFamilyCode<TError = unknown>(
  args: InferRequestType<(typeof client.v1.ua.family)[':code']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.ua.family)[':code']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1UaFamilyCodeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.ua.family)[':code']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.ua.family[':code'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1UaFamilyCode<TError = unknown>(
  args: InferRequestType<(typeof client.v1.ua.family)[':code']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.ua.family)[':code']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1UaFamilyCodeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.ua.family)[':code']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.ua.family[':code'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1UaOsCodeKey(
  args: InferRequestType<(typeof client.v1.ua.os)[':code']['$get']>,
) {
  return ['v1', '/v1/ua/os/:code', args] as const
}

export function useGetV1UaOsCode<TError = unknown>(
  args: InferRequestType<(typeof client.v1.ua.os)[':code']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.ua.os)[':code']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1UaOsCodeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.ua.os)[':code']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.ua.os[':code'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1UaOsCode<TError = unknown>(
  args: InferRequestType<(typeof client.v1.ua.os)[':code']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.ua.os)[':code']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1UaOsCodeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.ua.os)[':code']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.ua.os[':code'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1UaTypeCodeKey(
  args: InferRequestType<(typeof client.v1.ua.type)[':code']['$get']>,
) {
  return ['v1', '/v1/ua/type/:code', args] as const
}

export function useGetV1UaTypeCode<TError = unknown>(
  args: InferRequestType<(typeof client.v1.ua.type)[':code']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.ua.type)[':code']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1UaTypeCodeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.ua.type)[':code']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.ua.type[':code'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1UaTypeCode<TError = unknown>(
  args: InferRequestType<(typeof client.v1.ua.type)[':code']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.ua.type)[':code']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1UaTypeCodeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.ua.type)[':code']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.ua.type[':code'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1UaVendorCodeKey(
  args: InferRequestType<(typeof client.v1.ua.vendor)[':code']['$get']>,
) {
  return ['v1', '/v1/ua/vendor/:code', args] as const
}

export function useGetV1UaVendorCode<TError = unknown>(
  args: InferRequestType<(typeof client.v1.ua.vendor)[':code']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.ua.vendor)[':code']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1UaVendorCodeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.ua.vendor)[':code']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.ua.vendor[':code'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1UaVendorCode<TError = unknown>(
  args: InferRequestType<(typeof client.v1.ua.vendor)[':code']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.ua.vendor)[':code']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1UaVendorCodeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.ua.vendor)[':code']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.ua.vendor[':code'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1UaUserAgentUrlencodedKey(
  args: InferRequestType<(typeof client.v1.ua)[':user_agent_urlencoded']['$get']>,
) {
  return ['v1', '/v1/ua/:user_agent_urlencoded', args] as const
}

export function useGetV1UaUserAgentUrlencoded<TError = unknown>(
  args: InferRequestType<(typeof client.v1.ua)[':user_agent_urlencoded']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.ua)[':user_agent_urlencoded']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1UaUserAgentUrlencodedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.ua)[':user_agent_urlencoded']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.ua[':user_agent_urlencoded'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1UaUserAgentUrlencoded<TError = unknown>(
  args: InferRequestType<(typeof client.v1.ua)[':user_agent_urlencoded']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.ua)[':user_agent_urlencoded']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1UaUserAgentUrlencodedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.ua)[':user_agent_urlencoded']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.ua[':user_agent_urlencoded'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
