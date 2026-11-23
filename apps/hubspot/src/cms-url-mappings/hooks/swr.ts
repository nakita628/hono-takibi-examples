import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getUrlMappingsKey() {
  return ['url-mappings'] as const
}

export function getGetUrlMappings202609UrlMappingsKey() {
  return ['url-mappings', '/url-mappings/2026-09/url-mappings'] as const
}

export function useGetUrlMappings202609UrlMappings<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['url-mappings']['2026-09']['url-mappings']['$get']>>
        >
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
        ? getGetUrlMappings202609UrlMappingsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['url-mappings']['2026-09']['url-mappings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['url-mappings']['2026-09']['url-mappings'].$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUrlMappings202609UrlMappings<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['url-mappings']['2026-09']['url-mappings']['$get']>>
        >
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
        ? getGetUrlMappings202609UrlMappingsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['url-mappings']['2026-09']['url-mappings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['url-mappings']['2026-09']['url-mappings'].$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostUrlMappings202609UrlMappingsKey() {
  return ['url-mappings', '/url-mappings/2026-09/url-mappings', 'POST'] as const
}

export function usePostUrlMappings202609UrlMappings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['url-mappings']['2026-09']['url-mappings']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['url-mappings']['2026-09']['url-mappings']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUrlMappings202609UrlMappingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['url-mappings']['2026-09']['url-mappings']['$post']>
        },
      ) =>
        parseResponse(client['url-mappings']['2026-09']['url-mappings'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUrlMappings202609UrlMappingsIdKey(
  args: InferRequestType<(typeof client)['url-mappings']['2026-09']['url-mappings'][':id']['$get']>,
) {
  return ['url-mappings', '/url-mappings/2026-09/url-mappings/:id', args] as const
}

export function useGetUrlMappings202609UrlMappingsId<TError = unknown>(
  args: InferRequestType<(typeof client)['url-mappings']['2026-09']['url-mappings'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['url-mappings']['2026-09']['url-mappings'][':id']['$get']>
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
        ? getGetUrlMappings202609UrlMappingsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['url-mappings']['2026-09']['url-mappings'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['url-mappings']['2026-09']['url-mappings'][':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUrlMappings202609UrlMappingsId<TError = unknown>(
  args: InferRequestType<(typeof client)['url-mappings']['2026-09']['url-mappings'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['url-mappings']['2026-09']['url-mappings'][':id']['$get']>
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
        ? getGetUrlMappings202609UrlMappingsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['url-mappings']['2026-09']['url-mappings'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['url-mappings']['2026-09']['url-mappings'][':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteUrlMappings202609UrlMappingsIdKey() {
  return ['url-mappings', '/url-mappings/2026-09/url-mappings/:id', 'DELETE'] as const
}

export function useDeleteUrlMappings202609UrlMappingsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['url-mappings']['2026-09']['url-mappings'][':id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['url-mappings']['2026-09']['url-mappings'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUrlMappings202609UrlMappingsIdKey()
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
            (typeof client)['url-mappings']['2026-09']['url-mappings'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['url-mappings']['2026-09']['url-mappings'][':id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
