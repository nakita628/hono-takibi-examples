import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCharityOrgKey() {
  return ['charity_org'] as const
}

export function getGetCharityOrgKey(args: InferRequestType<typeof client.charity_org.$get>) {
  const { header: _, ...keyArgs } = args
  return ['charity_org', '/charity_org', keyArgs] as const
}

export function useGetCharityOrg<TError = unknown>(
  args: InferRequestType<typeof client.charity_org.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.charity_org.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCharityOrgKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.charity_org.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.charity_org.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCharityOrg<TError = unknown>(
  args: InferRequestType<typeof client.charity_org.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.charity_org.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCharityOrgKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.charity_org.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.charity_org.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCharityOrgCharityOrgIdKey(
  args: InferRequestType<(typeof client.charity_org)[':charity_org_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['charity_org', '/charity_org/:charity_org_id', keyArgs] as const
}

export function useGetCharityOrgCharityOrgId<TError = unknown>(
  args: InferRequestType<(typeof client.charity_org)[':charity_org_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.charity_org)[':charity_org_id']['$get']>>
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
        ? getGetCharityOrgCharityOrgIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.charity_org)[':charity_org_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.charity_org[':charity_org_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCharityOrgCharityOrgId<TError = unknown>(
  args: InferRequestType<(typeof client.charity_org)[':charity_org_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.charity_org)[':charity_org_id']['$get']>>
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
        ? getGetCharityOrgCharityOrgIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.charity_org)[':charity_org_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.charity_org[':charity_org_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
