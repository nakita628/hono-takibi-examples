import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCmsKey() {
  return ['cms'] as const
}

export function getGetCmsUrlRedirects202609Key(
  args: InferRequestType<(typeof client.cms)['url-redirects']['2026-09']['$get']>,
) {
  return ['cms', '/cms/url-redirects/2026-09', args] as const
}

export function useGetCmsUrlRedirects202609<TError = unknown>(
  args: InferRequestType<(typeof client.cms)['url-redirects']['2026-09']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cms)['url-redirects']['2026-09']['$get']>>
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
        ? getGetCmsUrlRedirects202609Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cms)['url-redirects']['2026-09']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cms['url-redirects']['2026-09'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCmsUrlRedirects202609<TError = unknown>(
  args: InferRequestType<(typeof client.cms)['url-redirects']['2026-09']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cms)['url-redirects']['2026-09']['$get']>>
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
        ? getGetCmsUrlRedirects202609Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cms)['url-redirects']['2026-09']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cms['url-redirects']['2026-09'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCmsUrlRedirects202609Key() {
  return ['cms', '/cms/url-redirects/2026-09', 'POST'] as const
}

export function usePostCmsUrlRedirects202609<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cms)['url-redirects']['2026-09']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.cms)['url-redirects']['2026-09']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCmsUrlRedirects202609Key()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.cms)['url-redirects']['2026-09']['$post']> },
      ) => parseResponse(client.cms['url-redirects']['2026-09'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCmsUrlRedirects202609UrlMappingsKey() {
  return ['cms', '/cms/url-redirects/2026-09/url-mappings'] as const
}

export function useGetCmsUrlRedirects202609UrlMappings<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.cms)['url-redirects']['2026-09']['url-mappings']['$get']>
          >
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
        ? getGetCmsUrlRedirects202609UrlMappingsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.cms)['url-redirects']['2026-09']['url-mappings']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.cms['url-redirects']['2026-09']['url-mappings'].$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCmsUrlRedirects202609UrlMappings<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.cms)['url-redirects']['2026-09']['url-mappings']['$get']>
          >
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
        ? getGetCmsUrlRedirects202609UrlMappingsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.cms)['url-redirects']['2026-09']['url-mappings']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.cms['url-redirects']['2026-09']['url-mappings'].$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostCmsUrlRedirects202609UrlMappingsKey() {
  return ['cms', '/cms/url-redirects/2026-09/url-mappings', 'POST'] as const
}

export function usePostCmsUrlRedirects202609UrlMappings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.cms)['url-redirects']['2026-09']['url-mappings']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.cms)['url-redirects']['2026-09']['url-mappings']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCmsUrlRedirects202609UrlMappingsKey()
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
            (typeof client.cms)['url-redirects']['2026-09']['url-mappings']['$post']
          >
        },
      ) =>
        parseResponse(
          client.cms['url-redirects']['2026-09']['url-mappings'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetCmsUrlRedirects202609UrlMappingsIdKey(
  args: InferRequestType<
    (typeof client.cms)['url-redirects']['2026-09']['url-mappings'][':id']['$get']
  >,
) {
  return ['cms', '/cms/url-redirects/2026-09/url-mappings/:id', args] as const
}

export function useGetCmsUrlRedirects202609UrlMappingsId<TError = unknown>(
  args: InferRequestType<
    (typeof client.cms)['url-redirects']['2026-09']['url-mappings'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.cms)['url-redirects']['2026-09']['url-mappings'][':id']['$get']
              >
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
        ? getGetCmsUrlRedirects202609UrlMappingsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.cms)['url-redirects']['2026-09']['url-mappings'][':id']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.cms['url-redirects']['2026-09']['url-mappings'][':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCmsUrlRedirects202609UrlMappingsId<TError = unknown>(
  args: InferRequestType<
    (typeof client.cms)['url-redirects']['2026-09']['url-mappings'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.cms)['url-redirects']['2026-09']['url-mappings'][':id']['$get']
              >
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
        ? getGetCmsUrlRedirects202609UrlMappingsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.cms)['url-redirects']['2026-09']['url-mappings'][':id']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.cms['url-redirects']['2026-09']['url-mappings'][':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteCmsUrlRedirects202609UrlMappingsIdKey() {
  return ['cms', '/cms/url-redirects/2026-09/url-mappings/:id', 'DELETE'] as const
}

export function useDeleteCmsUrlRedirects202609UrlMappingsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.cms)['url-redirects']['2026-09']['url-mappings'][':id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.cms)['url-redirects']['2026-09']['url-mappings'][':id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCmsUrlRedirects202609UrlMappingsIdKey()
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
            (typeof client.cms)['url-redirects']['2026-09']['url-mappings'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.cms['url-redirects']['2026-09']['url-mappings'][':id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetCmsUrlRedirects202609UrlRedirectIdKey(
  args: InferRequestType<(typeof client.cms)['url-redirects']['2026-09'][':urlRedirectId']['$get']>,
) {
  return ['cms', '/cms/url-redirects/2026-09/:urlRedirectId', args] as const
}

export function useGetCmsUrlRedirects202609UrlRedirectId<TError = unknown>(
  args: InferRequestType<(typeof client.cms)['url-redirects']['2026-09'][':urlRedirectId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.cms)['url-redirects']['2026-09'][':urlRedirectId']['$get']>
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
        ? getGetCmsUrlRedirects202609UrlRedirectIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.cms)['url-redirects']['2026-09'][':urlRedirectId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.cms['url-redirects']['2026-09'][':urlRedirectId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCmsUrlRedirects202609UrlRedirectId<TError = unknown>(
  args: InferRequestType<(typeof client.cms)['url-redirects']['2026-09'][':urlRedirectId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.cms)['url-redirects']['2026-09'][':urlRedirectId']['$get']>
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
        ? getGetCmsUrlRedirects202609UrlRedirectIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.cms)['url-redirects']['2026-09'][':urlRedirectId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.cms['url-redirects']['2026-09'][':urlRedirectId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteCmsUrlRedirects202609UrlRedirectIdKey() {
  return ['cms', '/cms/url-redirects/2026-09/:urlRedirectId', 'DELETE'] as const
}

export function useDeleteCmsUrlRedirects202609UrlRedirectId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.cms)['url-redirects']['2026-09'][':urlRedirectId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.cms)['url-redirects']['2026-09'][':urlRedirectId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCmsUrlRedirects202609UrlRedirectIdKey()
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
            (typeof client.cms)['url-redirects']['2026-09'][':urlRedirectId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.cms['url-redirects']['2026-09'][':urlRedirectId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchCmsUrlRedirects202609UrlRedirectIdKey() {
  return ['cms', '/cms/url-redirects/2026-09/:urlRedirectId', 'PATCH'] as const
}

export function usePatchCmsUrlRedirects202609UrlRedirectId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.cms)['url-redirects']['2026-09'][':urlRedirectId']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.cms)['url-redirects']['2026-09'][':urlRedirectId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchCmsUrlRedirects202609UrlRedirectIdKey()
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
            (typeof client.cms)['url-redirects']['2026-09'][':urlRedirectId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.cms['url-redirects']['2026-09'][':urlRedirectId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
