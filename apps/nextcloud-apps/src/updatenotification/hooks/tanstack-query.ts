import { useQuery, useSuspenseQuery, queryOptions } from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getOcsKey() {
  return ['ocs'] as const
}

export function getOcsV2PhpAppsUpdatenotificationApiApiVersionApplistNewVersionQueryKey(
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

export function getOcsV2PhpAppsUpdatenotificationApiApiVersionApplistNewVersionQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['updatenotification']['api'][':apiVersion']['applist'][':newVersion']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpAppsUpdatenotificationApiApiVersionApplistNewVersionQueryKey>
  >({
    queryKey: getOcsV2PhpAppsUpdatenotificationApiApiVersionApplistNewVersionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].apps.updatenotification.api[':apiVersion'].applist[':newVersion'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function useOcsV2PhpAppsUpdatenotificationApiApiVersionApplistNewVersion<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['updatenotification']['api'][':apiVersion']['applist'][':newVersion']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getOcsV2PhpAppsUpdatenotificationApiApiVersionApplistNewVersionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getOcsV2PhpAppsUpdatenotificationApiApiVersionApplistNewVersionQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOcsV2PhpAppsUpdatenotificationApiApiVersionApplistNewVersion<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['updatenotification']['api'][':apiVersion']['applist'][':newVersion']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getOcsV2PhpAppsUpdatenotificationApiApiVersionApplistNewVersionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getOcsV2PhpAppsUpdatenotificationApiApiVersionApplistNewVersionQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getOcsV2PhpAppsUpdatenotificationApiApiVersionChangelogAppIdQueryKey(
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

export function getOcsV2PhpAppsUpdatenotificationApiApiVersionChangelogAppIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['updatenotification']['api'][':apiVersion']['changelog'][':appId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpAppsUpdatenotificationApiApiVersionChangelogAppIdQueryKey>
  >({
    queryKey: getOcsV2PhpAppsUpdatenotificationApiApiVersionChangelogAppIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].apps.updatenotification.api[':apiVersion'].changelog[':appId'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function useOcsV2PhpAppsUpdatenotificationApiApiVersionChangelogAppId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['updatenotification']['api'][':apiVersion']['changelog'][':appId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getOcsV2PhpAppsUpdatenotificationApiApiVersionChangelogAppIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getOcsV2PhpAppsUpdatenotificationApiApiVersionChangelogAppIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOcsV2PhpAppsUpdatenotificationApiApiVersionChangelogAppId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['updatenotification']['api'][':apiVersion']['changelog'][':appId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getOcsV2PhpAppsUpdatenotificationApiApiVersionChangelogAppIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getOcsV2PhpAppsUpdatenotificationApiApiVersionChangelogAppIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}
