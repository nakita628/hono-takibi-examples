import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAuthKey() {
  return ['auth'] as const
}

export function getBelegeKey() {
  return ['belege'] as const
}

export function getExportKey() {
  return ['export'] as const
}

export function getRegistrierkassenKey() {
  return ['registrierkassen'] as const
}

export function getAuthQueryKey() {
  return ['auth', '/auth'] as const
}

export function getAuthQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAuthQueryKey>
  >({
    queryKey: getAuthQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.auth.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAuth<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAuthQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAuthQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAuth<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAuthQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAuthQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getBelegeBelegUuidQueryKey(
  args: InferRequestType<(typeof client.belege)[':belegUuid']['$get']>,
) {
  return ['belege', '/belege/:belegUuid', args] as const
}

export function getBelegeBelegUuidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.belege)[':belegUuid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.belege)[':belegUuid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.belege)[':belegUuid']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBelegeBelegUuidQueryKey>
  >({
    queryKey: getBelegeBelegUuidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.belege[':belegUuid'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useBelegeBelegUuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.belege)[':belegUuid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.belege)[':belegUuid']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.belege)[':belegUuid']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBelegeBelegUuidQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getBelegeBelegUuidQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseBelegeBelegUuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.belege)[':belegUuid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.belege)[':belegUuid']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.belege)[':belegUuid']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBelegeBelegUuidQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getBelegeBelegUuidQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getExportCsvRegistrierkassenRegistrierkasseUuidBelegeQueryKey(
  args: InferRequestType<
    (typeof client.export.csv.registrierkassen)[':registrierkasseUuid']['belege']['$get']
  >,
) {
  return ['export', '/export/csv/registrierkassen/:registrierkasseUuid/belege', args] as const
}

export function getExportCsvRegistrierkassenRegistrierkasseUuidBelegeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.export.csv.registrierkassen)[':registrierkasseUuid']['belege']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.export.csv.registrierkassen)[':registrierkasseUuid']['belege']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.export.csv.registrierkassen)[':registrierkasseUuid']['belege']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getExportCsvRegistrierkassenRegistrierkasseUuidBelegeQueryKey>
  >({
    queryKey: getExportCsvRegistrierkassenRegistrierkasseUuidBelegeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.export.csv.registrierkassen[':registrierkasseUuid'].belege.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useExportCsvRegistrierkassenRegistrierkasseUuidBelege<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.export.csv.registrierkassen)[':registrierkasseUuid']['belege']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.export.csv.registrierkassen)[':registrierkasseUuid']['belege']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.export.csv.registrierkassen)[':registrierkasseUuid']['belege']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getExportCsvRegistrierkassenRegistrierkasseUuidBelegeQueryKey>
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
      ...getExportCsvRegistrierkassenRegistrierkasseUuidBelegeQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseExportCsvRegistrierkassenRegistrierkasseUuidBelege<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.export.csv.registrierkassen)[':registrierkasseUuid']['belege']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.export.csv.registrierkassen)[':registrierkasseUuid']['belege']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.export.csv.registrierkassen)[':registrierkasseUuid']['belege']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getExportCsvRegistrierkassenRegistrierkasseUuidBelegeQueryKey>
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
      ...getExportCsvRegistrierkassenRegistrierkasseUuidBelegeQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getExportDep131RegistrierkassenRegistrierkasseUuidBelegeQueryKey(
  args: InferRequestType<
    (typeof client.export.dep131.registrierkassen)[':registrierkasseUuid']['belege']['$get']
  >,
) {
  return ['export', '/export/dep131/registrierkassen/:registrierkasseUuid/belege', args] as const
}

export function getExportDep131RegistrierkassenRegistrierkasseUuidBelegeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.export.dep131.registrierkassen)[':registrierkasseUuid']['belege']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.export.dep131.registrierkassen)[':registrierkasseUuid']['belege']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.export.dep131.registrierkassen)[':registrierkasseUuid']['belege']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getExportDep131RegistrierkassenRegistrierkasseUuidBelegeQueryKey>
  >({
    queryKey: getExportDep131RegistrierkassenRegistrierkasseUuidBelegeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.export.dep131.registrierkassen[':registrierkasseUuid'].belege.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useExportDep131RegistrierkassenRegistrierkasseUuidBelege<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.export.dep131.registrierkassen)[':registrierkasseUuid']['belege']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.export.dep131.registrierkassen)[':registrierkasseUuid']['belege']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.export.dep131.registrierkassen)[':registrierkasseUuid']['belege']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getExportDep131RegistrierkassenRegistrierkasseUuidBelegeQueryKey>
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
      ...getExportDep131RegistrierkassenRegistrierkasseUuidBelegeQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseExportDep131RegistrierkassenRegistrierkasseUuidBelege<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.export.dep131.registrierkassen)[':registrierkasseUuid']['belege']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.export.dep131.registrierkassen)[':registrierkasseUuid']['belege']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.export.dep131.registrierkassen)[':registrierkasseUuid']['belege']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getExportDep131RegistrierkassenRegistrierkasseUuidBelegeQueryKey>
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
      ...getExportDep131RegistrierkassenRegistrierkasseUuidBelegeQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getExportDep7RegistrierkassenRegistrierkasseUuidBelegeQueryKey(
  args: InferRequestType<
    (typeof client.export.dep7.registrierkassen)[':registrierkasseUuid']['belege']['$get']
  >,
) {
  return ['export', '/export/dep7/registrierkassen/:registrierkasseUuid/belege', args] as const
}

export function getExportDep7RegistrierkassenRegistrierkasseUuidBelegeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.export.dep7.registrierkassen)[':registrierkasseUuid']['belege']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.export.dep7.registrierkassen)[':registrierkasseUuid']['belege']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.export.dep7.registrierkassen)[':registrierkasseUuid']['belege']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getExportDep7RegistrierkassenRegistrierkasseUuidBelegeQueryKey>
  >({
    queryKey: getExportDep7RegistrierkassenRegistrierkasseUuidBelegeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.export.dep7.registrierkassen[':registrierkasseUuid'].belege.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useExportDep7RegistrierkassenRegistrierkasseUuidBelege<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.export.dep7.registrierkassen)[':registrierkasseUuid']['belege']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.export.dep7.registrierkassen)[':registrierkasseUuid']['belege']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.export.dep7.registrierkassen)[':registrierkasseUuid']['belege']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getExportDep7RegistrierkassenRegistrierkasseUuidBelegeQueryKey>
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
      ...getExportDep7RegistrierkassenRegistrierkasseUuidBelegeQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseExportDep7RegistrierkassenRegistrierkasseUuidBelege<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.export.dep7.registrierkassen)[':registrierkasseUuid']['belege']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.export.dep7.registrierkassen)[':registrierkasseUuid']['belege']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.export.dep7.registrierkassen)[':registrierkasseUuid']['belege']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getExportDep7RegistrierkassenRegistrierkasseUuidBelegeQueryKey>
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
      ...getExportDep7RegistrierkassenRegistrierkasseUuidBelegeQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getExportGobdRegistrierkassenRegistrierkasseUuidQueryKey(
  args: InferRequestType<
    (typeof client.export.gobd.registrierkassen)[':registrierkasseUuid']['$get']
  >,
) {
  return ['export', '/export/gobd/registrierkassen/:registrierkasseUuid', args] as const
}

export function getExportGobdRegistrierkassenRegistrierkasseUuidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.export.gobd.registrierkassen)[':registrierkasseUuid']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.export.gobd.registrierkassen)[':registrierkasseUuid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.export.gobd.registrierkassen)[':registrierkasseUuid']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getExportGobdRegistrierkassenRegistrierkasseUuidQueryKey>
  >({
    queryKey: getExportGobdRegistrierkassenRegistrierkasseUuidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.export.gobd.registrierkassen[':registrierkasseUuid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useExportGobdRegistrierkassenRegistrierkasseUuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.export.gobd.registrierkassen)[':registrierkasseUuid']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.export.gobd.registrierkassen)[':registrierkasseUuid']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.export.gobd.registrierkassen)[':registrierkasseUuid']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getExportGobdRegistrierkassenRegistrierkasseUuidQueryKey>
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
      ...getExportGobdRegistrierkassenRegistrierkasseUuidQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseExportGobdRegistrierkassenRegistrierkasseUuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.export.gobd.registrierkassen)[':registrierkasseUuid']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.export.gobd.registrierkassen)[':registrierkasseUuid']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.export.gobd.registrierkassen)[':registrierkasseUuid']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getExportGobdRegistrierkassenRegistrierkasseUuidQueryKey>
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
      ...getExportGobdRegistrierkassenRegistrierkasseUuidQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getExportHtmlBelegeBelegUuidQueryKey(
  args: InferRequestType<(typeof client.export.html.belege)[':belegUuid']['$get']>,
) {
  return ['export', '/export/html/belege/:belegUuid', args] as const
}

export function getExportHtmlBelegeBelegUuidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.export.html.belege)[':belegUuid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.export.html.belege)[':belegUuid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.export.html.belege)[':belegUuid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getExportHtmlBelegeBelegUuidQueryKey>
  >({
    queryKey: getExportHtmlBelegeBelegUuidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.export.html.belege[':belegUuid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useExportHtmlBelegeBelegUuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.export.html.belege)[':belegUuid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.export.html.belege)[':belegUuid']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.export.html.belege)[':belegUuid']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getExportHtmlBelegeBelegUuidQueryKey>
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
      ...getExportHtmlBelegeBelegUuidQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseExportHtmlBelegeBelegUuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.export.html.belege)[':belegUuid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.export.html.belege)[':belegUuid']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.export.html.belege)[':belegUuid']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getExportHtmlBelegeBelegUuidQueryKey>
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
      ...getExportHtmlBelegeBelegUuidQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getExportPdfBelegeBelegUuidQueryKey(
  args: InferRequestType<(typeof client.export.pdf.belege)[':belegUuid']['$get']>,
) {
  return ['export', '/export/pdf/belege/:belegUuid', args] as const
}

export function getExportPdfBelegeBelegUuidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.export.pdf.belege)[':belegUuid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.export.pdf.belege)[':belegUuid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.export.pdf.belege)[':belegUuid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getExportPdfBelegeBelegUuidQueryKey>
  >({
    queryKey: getExportPdfBelegeBelegUuidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.export.pdf.belege[':belegUuid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useExportPdfBelegeBelegUuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.export.pdf.belege)[':belegUuid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.export.pdf.belege)[':belegUuid']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.export.pdf.belege)[':belegUuid']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getExportPdfBelegeBelegUuidQueryKey>
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
      ...getExportPdfBelegeBelegUuidQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseExportPdfBelegeBelegUuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.export.pdf.belege)[':belegUuid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.export.pdf.belege)[':belegUuid']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.export.pdf.belege)[':belegUuid']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getExportPdfBelegeBelegUuidQueryKey>
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
      ...getExportPdfBelegeBelegUuidQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getExportQrBelegeBelegUuidQueryKey(
  args: InferRequestType<(typeof client.export.qr.belege)[':belegUuid']['$get']>,
) {
  return ['export', '/export/qr/belege/:belegUuid', args] as const
}

export function getExportQrBelegeBelegUuidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.export.qr.belege)[':belegUuid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.export.qr.belege)[':belegUuid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.export.qr.belege)[':belegUuid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getExportQrBelegeBelegUuidQueryKey>
  >({
    queryKey: getExportQrBelegeBelegUuidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.export.qr.belege[':belegUuid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useExportQrBelegeBelegUuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.export.qr.belege)[':belegUuid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.export.qr.belege)[':belegUuid']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.export.qr.belege)[':belegUuid']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getExportQrBelegeBelegUuidQueryKey>
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
      ...getExportQrBelegeBelegUuidQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseExportQrBelegeBelegUuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.export.qr.belege)[':belegUuid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.export.qr.belege)[':belegUuid']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.export.qr.belege)[':belegUuid']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getExportQrBelegeBelegUuidQueryKey>
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
      ...getExportQrBelegeBelegUuidQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getExportThermalPrintBelegeBelegUuidQueryKey(
  args: InferRequestType<(typeof client.export)['thermal-print']['belege'][':belegUuid']['$get']>,
) {
  return ['export', '/export/thermal-print/belege/:belegUuid', args] as const
}

export function getExportThermalPrintBelegeBelegUuidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.export)['thermal-print']['belege'][':belegUuid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.export)['thermal-print']['belege'][':belegUuid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.export)['thermal-print']['belege'][':belegUuid']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getExportThermalPrintBelegeBelegUuidQueryKey>
  >({
    queryKey: getExportThermalPrintBelegeBelegUuidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.export['thermal-print'].belege[':belegUuid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useExportThermalPrintBelegeBelegUuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.export)['thermal-print']['belege'][':belegUuid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.export)['thermal-print']['belege'][':belegUuid']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.export)['thermal-print']['belege'][':belegUuid']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getExportThermalPrintBelegeBelegUuidQueryKey>
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
      ...getExportThermalPrintBelegeBelegUuidQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseExportThermalPrintBelegeBelegUuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.export)['thermal-print']['belege'][':belegUuid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.export)['thermal-print']['belege'][':belegUuid']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.export)['thermal-print']['belege'][':belegUuid']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getExportThermalPrintBelegeBelegUuidQueryKey>
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
      ...getExportThermalPrintBelegeBelegUuidQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getExportXlsRegistrierkassenRegistrierkasseUuidBelegeQueryKey(
  args: InferRequestType<
    (typeof client.export.xls.registrierkassen)[':registrierkasseUuid']['belege']['$get']
  >,
) {
  return ['export', '/export/xls/registrierkassen/:registrierkasseUuid/belege', args] as const
}

export function getExportXlsRegistrierkassenRegistrierkasseUuidBelegeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.export.xls.registrierkassen)[':registrierkasseUuid']['belege']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.export.xls.registrierkassen)[':registrierkasseUuid']['belege']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.export.xls.registrierkassen)[':registrierkasseUuid']['belege']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getExportXlsRegistrierkassenRegistrierkasseUuidBelegeQueryKey>
  >({
    queryKey: getExportXlsRegistrierkassenRegistrierkasseUuidBelegeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.export.xls.registrierkassen[':registrierkasseUuid'].belege.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useExportXlsRegistrierkassenRegistrierkasseUuidBelege<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.export.xls.registrierkassen)[':registrierkasseUuid']['belege']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.export.xls.registrierkassen)[':registrierkasseUuid']['belege']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.export.xls.registrierkassen)[':registrierkasseUuid']['belege']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getExportXlsRegistrierkassenRegistrierkasseUuidBelegeQueryKey>
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
      ...getExportXlsRegistrierkassenRegistrierkasseUuidBelegeQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseExportXlsRegistrierkassenRegistrierkasseUuidBelege<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.export.xls.registrierkassen)[':registrierkasseUuid']['belege']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.export.xls.registrierkassen)[':registrierkasseUuid']['belege']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.export.xls.registrierkassen)[':registrierkasseUuid']['belege']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getExportXlsRegistrierkassenRegistrierkasseUuidBelegeQueryKey>
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
      ...getExportXlsRegistrierkassenRegistrierkasseUuidBelegeQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getRegistrierkassenRegistrierkasseUuidQueryKey(
  args: InferRequestType<(typeof client.registrierkassen)[':registrierkasseUuid']['$get']>,
) {
  return ['registrierkassen', '/registrierkassen/:registrierkasseUuid', args] as const
}

export function getRegistrierkassenRegistrierkasseUuidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.registrierkassen)[':registrierkasseUuid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.registrierkassen)[':registrierkasseUuid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.registrierkassen)[':registrierkasseUuid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRegistrierkassenRegistrierkasseUuidQueryKey>
  >({
    queryKey: getRegistrierkassenRegistrierkasseUuidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.registrierkassen[':registrierkasseUuid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRegistrierkassenRegistrierkasseUuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.registrierkassen)[':registrierkasseUuid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.registrierkassen)[':registrierkasseUuid']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.registrierkassen)[':registrierkasseUuid']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRegistrierkassenRegistrierkasseUuidQueryKey>
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
      ...getRegistrierkassenRegistrierkasseUuidQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRegistrierkassenRegistrierkasseUuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.registrierkassen)[':registrierkasseUuid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.registrierkassen)[':registrierkasseUuid']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.registrierkassen)[':registrierkasseUuid']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRegistrierkassenRegistrierkasseUuidQueryKey>
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
      ...getRegistrierkassenRegistrierkasseUuidQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostRegistrierkassenRegistrierkasseUuidAbschlussMutationKey() {
  return ['registrierkassen', '/registrierkassen/:registrierkasseUuid/abschluss', 'POST'] as const
}

export function getPostRegistrierkassenRegistrierkasseUuidAbschlussMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.registrierkassen)[':registrierkasseUuid']['abschluss']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.registrierkassen)[':registrierkasseUuid']['abschluss']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostRegistrierkassenRegistrierkasseUuidAbschlussMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.registrierkassen)[':registrierkasseUuid']['abschluss']['$post']
      >,
    ) {
      return parseResponse(
        client.registrierkassen[':registrierkasseUuid'].abschluss.$post(args, options),
      )
    },
  })
}

export function usePostRegistrierkassenRegistrierkasseUuidAbschluss<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.registrierkassen)[':registrierkasseUuid']['abschluss']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.registrierkassen)[':registrierkasseUuid']['abschluss']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRegistrierkassenRegistrierkasseUuidAbschlussMutationOptions<
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

export function getRegistrierkassenRegistrierkasseUuidBelegeQueryKey(
  args: InferRequestType<
    (typeof client.registrierkassen)[':registrierkasseUuid']['belege']['$get']
  >,
) {
  return ['registrierkassen', '/registrierkassen/:registrierkasseUuid/belege', args] as const
}

export function getRegistrierkassenRegistrierkasseUuidBelegeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.registrierkassen)[':registrierkasseUuid']['belege']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.registrierkassen)[':registrierkasseUuid']['belege']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.registrierkassen)[':registrierkasseUuid']['belege']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRegistrierkassenRegistrierkasseUuidBelegeQueryKey>
  >({
    queryKey: getRegistrierkassenRegistrierkasseUuidBelegeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.registrierkassen[':registrierkasseUuid'].belege.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRegistrierkassenRegistrierkasseUuidBelege<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.registrierkassen)[':registrierkasseUuid']['belege']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.registrierkassen)[':registrierkasseUuid']['belege']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.registrierkassen)[':registrierkasseUuid']['belege']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRegistrierkassenRegistrierkasseUuidBelegeQueryKey>
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
      ...getRegistrierkassenRegistrierkasseUuidBelegeQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRegistrierkassenRegistrierkasseUuidBelege<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.registrierkassen)[':registrierkasseUuid']['belege']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.registrierkassen)[':registrierkasseUuid']['belege']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.registrierkassen)[':registrierkasseUuid']['belege']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRegistrierkassenRegistrierkasseUuidBelegeQueryKey>
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
      ...getRegistrierkassenRegistrierkasseUuidBelegeQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getRegistrierkassenRegistrierkasseUuidBelegeBelegUuidQueryKey(
  args: InferRequestType<
    (typeof client.registrierkassen)[':registrierkasseUuid']['belege'][':belegUuid']['$get']
  >,
) {
  return [
    'registrierkassen',
    '/registrierkassen/:registrierkasseUuid/belege/:belegUuid',
    args,
  ] as const
}

export function getRegistrierkassenRegistrierkasseUuidBelegeBelegUuidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.registrierkassen)[':registrierkasseUuid']['belege'][':belegUuid']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.registrierkassen)[':registrierkasseUuid']['belege'][':belegUuid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.registrierkassen)[':registrierkasseUuid']['belege'][':belegUuid']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRegistrierkassenRegistrierkasseUuidBelegeBelegUuidQueryKey>
  >({
    queryKey: getRegistrierkassenRegistrierkasseUuidBelegeBelegUuidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.registrierkassen[':registrierkasseUuid'].belege[':belegUuid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRegistrierkassenRegistrierkasseUuidBelegeBelegUuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.registrierkassen)[':registrierkasseUuid']['belege'][':belegUuid']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.registrierkassen)[':registrierkasseUuid']['belege'][':belegUuid']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.registrierkassen)[':registrierkasseUuid']['belege'][':belegUuid']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRegistrierkassenRegistrierkasseUuidBelegeBelegUuidQueryKey>
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
      ...getRegistrierkassenRegistrierkasseUuidBelegeBelegUuidQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRegistrierkassenRegistrierkasseUuidBelegeBelegUuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.registrierkassen)[':registrierkasseUuid']['belege'][':belegUuid']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.registrierkassen)[':registrierkasseUuid']['belege'][':belegUuid']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.registrierkassen)[':registrierkasseUuid']['belege'][':belegUuid']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRegistrierkassenRegistrierkasseUuidBelegeBelegUuidQueryKey>
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
      ...getRegistrierkassenRegistrierkasseUuidBelegeBelegUuidQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutRegistrierkassenRegistrierkasseUuidBelegeBelegUuidMutationKey() {
  return [
    'registrierkassen',
    '/registrierkassen/:registrierkasseUuid/belege/:belegUuid',
    'PUT',
  ] as const
}

export function getPutRegistrierkassenRegistrierkasseUuidBelegeBelegUuidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.registrierkassen)[':registrierkasseUuid']['belege'][':belegUuid']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.registrierkassen)[':registrierkasseUuid']['belege'][':belegUuid']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutRegistrierkassenRegistrierkasseUuidBelegeBelegUuidMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.registrierkassen)[':registrierkasseUuid']['belege'][':belegUuid']['$put']
      >,
    ) {
      return parseResponse(
        client.registrierkassen[':registrierkasseUuid'].belege[':belegUuid'].$put(args, options),
      )
    },
  })
}

export function usePutRegistrierkassenRegistrierkasseUuidBelegeBelegUuid<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.registrierkassen)[':registrierkasseUuid']['belege'][':belegUuid']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.registrierkassen)[':registrierkasseUuid']['belege'][':belegUuid']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutRegistrierkassenRegistrierkasseUuidBelegeBelegUuidMutationOptions<
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

export function getRegistrierkassenRegistrierkasseUuidDepQueryKey(
  args: InferRequestType<(typeof client.registrierkassen)[':registrierkasseUuid']['dep']['$get']>,
) {
  return ['registrierkassen', '/registrierkassen/:registrierkasseUuid/dep', args] as const
}

export function getRegistrierkassenRegistrierkasseUuidDepQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.registrierkassen)[':registrierkasseUuid']['dep']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.registrierkassen)[':registrierkasseUuid']['dep']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.registrierkassen)[':registrierkasseUuid']['dep']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRegistrierkassenRegistrierkasseUuidDepQueryKey>
  >({
    queryKey: getRegistrierkassenRegistrierkasseUuidDepQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.registrierkassen[':registrierkasseUuid'].dep.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRegistrierkassenRegistrierkasseUuidDep<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.registrierkassen)[':registrierkasseUuid']['dep']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.registrierkassen)[':registrierkasseUuid']['dep']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.registrierkassen)[':registrierkasseUuid']['dep']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRegistrierkassenRegistrierkasseUuidDepQueryKey>
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
      ...getRegistrierkassenRegistrierkasseUuidDepQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRegistrierkassenRegistrierkasseUuidDep<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.registrierkassen)[':registrierkasseUuid']['dep']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.registrierkassen)[':registrierkasseUuid']['dep']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.registrierkassen)[':registrierkasseUuid']['dep']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRegistrierkassenRegistrierkasseUuidDepQueryKey>
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
      ...getRegistrierkassenRegistrierkasseUuidDepQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getRegistrierkassenRegistrierkasseUuidMonatsbelegeQueryKey(
  args: InferRequestType<
    (typeof client.registrierkassen)[':registrierkasseUuid']['monatsbelege']['$get']
  >,
) {
  return ['registrierkassen', '/registrierkassen/:registrierkasseUuid/monatsbelege', args] as const
}

export function getRegistrierkassenRegistrierkasseUuidMonatsbelegeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.registrierkassen)[':registrierkasseUuid']['monatsbelege']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.registrierkassen)[':registrierkasseUuid']['monatsbelege']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.registrierkassen)[':registrierkasseUuid']['monatsbelege']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRegistrierkassenRegistrierkasseUuidMonatsbelegeQueryKey>
  >({
    queryKey: getRegistrierkassenRegistrierkasseUuidMonatsbelegeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.registrierkassen[':registrierkasseUuid'].monatsbelege.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRegistrierkassenRegistrierkasseUuidMonatsbelege<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.registrierkassen)[':registrierkasseUuid']['monatsbelege']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.registrierkassen)[':registrierkasseUuid']['monatsbelege']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.registrierkassen)[':registrierkasseUuid']['monatsbelege']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRegistrierkassenRegistrierkasseUuidMonatsbelegeQueryKey>
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
      ...getRegistrierkassenRegistrierkasseUuidMonatsbelegeQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRegistrierkassenRegistrierkasseUuidMonatsbelege<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.registrierkassen)[':registrierkasseUuid']['monatsbelege']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.registrierkassen)[':registrierkasseUuid']['monatsbelege']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.registrierkassen)[':registrierkasseUuid']['monatsbelege']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRegistrierkassenRegistrierkasseUuidMonatsbelegeQueryKey>
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
      ...getRegistrierkassenRegistrierkasseUuidMonatsbelegeQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}
