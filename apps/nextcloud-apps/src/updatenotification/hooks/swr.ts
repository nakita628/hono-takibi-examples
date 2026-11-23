import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getOcsKey() {
  return ['ocs'] as const
}

export function getGetOcsV2PhpAppsUpdatenotificationApiApiVersionApplistNewVersionKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['updatenotification']['api'][':apiVersion']['applist'][':newVersion']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'ocs',
    '/ocs/v2.php/apps/updatenotification/api/:apiVersion/applist/:newVersion',
    keyArgs,
  ] as const
}

export function useGetOcsV2PhpAppsUpdatenotificationApiApiVersionApplistNewVersion<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['updatenotification']['api'][':apiVersion']['applist'][':newVersion']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ocs)['v2.php']['apps']['updatenotification']['api'][':apiVersion']['applist'][':newVersion']['$get']
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
        ? getGetOcsV2PhpAppsUpdatenotificationApiApiVersionApplistNewVersionKey(args)
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
                (typeof client.ocs)['v2.php']['apps']['updatenotification']['api'][':apiVersion']['applist'][':newVersion']['$get']
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
          client.ocs['v2.php'].apps.updatenotification.api[':apiVersion'].applist[
            ':newVersion'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpAppsUpdatenotificationApiApiVersionApplistNewVersion<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['updatenotification']['api'][':apiVersion']['applist'][':newVersion']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ocs)['v2.php']['apps']['updatenotification']['api'][':apiVersion']['applist'][':newVersion']['$get']
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
        ? getGetOcsV2PhpAppsUpdatenotificationApiApiVersionApplistNewVersionKey(args)
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
                (typeof client.ocs)['v2.php']['apps']['updatenotification']['api'][':apiVersion']['applist'][':newVersion']['$get']
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
          client.ocs['v2.php'].apps.updatenotification.api[':apiVersion'].applist[
            ':newVersion'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOcsV2PhpAppsUpdatenotificationApiApiVersionChangelogAppIdKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['updatenotification']['api'][':apiVersion']['changelog'][':appId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'ocs',
    '/ocs/v2.php/apps/updatenotification/api/:apiVersion/changelog/:appId',
    keyArgs,
  ] as const
}

export function useGetOcsV2PhpAppsUpdatenotificationApiApiVersionChangelogAppId<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['updatenotification']['api'][':apiVersion']['changelog'][':appId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ocs)['v2.php']['apps']['updatenotification']['api'][':apiVersion']['changelog'][':appId']['$get']
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
        ? getGetOcsV2PhpAppsUpdatenotificationApiApiVersionChangelogAppIdKey(args)
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
                (typeof client.ocs)['v2.php']['apps']['updatenotification']['api'][':apiVersion']['changelog'][':appId']['$get']
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
          client.ocs['v2.php'].apps.updatenotification.api[':apiVersion'].changelog[':appId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpAppsUpdatenotificationApiApiVersionChangelogAppId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['updatenotification']['api'][':apiVersion']['changelog'][':appId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ocs)['v2.php']['apps']['updatenotification']['api'][':apiVersion']['changelog'][':appId']['$get']
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
        ? getGetOcsV2PhpAppsUpdatenotificationApiApiVersionChangelogAppIdKey(args)
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
                (typeof client.ocs)['v2.php']['apps']['updatenotification']['api'][':apiVersion']['changelog'][':appId']['$get']
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
          client.ocs['v2.php'].apps.updatenotification.api[':apiVersion'].changelog[':appId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}
