import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCmsKey() {
  return ['cms'] as const
}

export function getGetCmsDomains202609Key(
  args: InferRequestType<(typeof client.cms.domains)['2026-09']['$get']>,
) {
  return ['cms', '/cms/domains/2026-09', args] as const
}

export function useGetCmsDomains202609<TError = unknown>(
  args: InferRequestType<(typeof client.cms.domains)['2026-09']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.cms.domains)['2026-09']['$get']>>>
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
        ? getGetCmsDomains202609Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.cms.domains)['2026-09']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cms.domains['2026-09'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCmsDomains202609<TError = unknown>(
  args: InferRequestType<(typeof client.cms.domains)['2026-09']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.cms.domains)['2026-09']['$get']>>>
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
        ? getGetCmsDomains202609Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.cms.domains)['2026-09']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cms.domains['2026-09'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCmsDomains202609DomainIdKey(
  args: InferRequestType<(typeof client.cms.domains)['2026-09'][':domainId']['$get']>,
) {
  return ['cms', '/cms/domains/2026-09/:domainId', args] as const
}

export function useGetCmsDomains202609DomainId<TError = unknown>(
  args: InferRequestType<(typeof client.cms.domains)['2026-09'][':domainId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cms.domains)['2026-09'][':domainId']['$get']>>
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
        ? getGetCmsDomains202609DomainIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cms.domains)['2026-09'][':domainId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.cms.domains['2026-09'][':domainId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCmsDomains202609DomainId<TError = unknown>(
  args: InferRequestType<(typeof client.cms.domains)['2026-09'][':domainId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cms.domains)['2026-09'][':domainId']['$get']>>
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
        ? getGetCmsDomains202609DomainIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cms.domains)['2026-09'][':domainId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.cms.domains['2026-09'][':domainId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
