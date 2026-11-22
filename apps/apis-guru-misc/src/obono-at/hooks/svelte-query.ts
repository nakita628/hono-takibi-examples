import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/svelte-query'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/svelte-query'
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

export function createAuth<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAuthQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAuthQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createBelegeBelegUuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.belege)[':belegUuid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.belege)[':belegUuid']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBelegeBelegUuidQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createExportCsvRegistrierkassenRegistrierkasseUuidBelege<
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
  args: () => InferRequestType<
    (typeof client.export.csv.registrierkassen)[':registrierkasseUuid']['belege']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getExportCsvRegistrierkassenRegistrierkasseUuidBelegeQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createExportDep131RegistrierkassenRegistrierkasseUuidBelege<
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
  args: () => InferRequestType<
    (typeof client.export.dep131.registrierkassen)[':registrierkasseUuid']['belege']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getExportDep131RegistrierkassenRegistrierkasseUuidBelegeQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createExportDep7RegistrierkassenRegistrierkasseUuidBelege<
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
  args: () => InferRequestType<
    (typeof client.export.dep7.registrierkassen)[':registrierkasseUuid']['belege']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getExportDep7RegistrierkassenRegistrierkasseUuidBelegeQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createExportGobdRegistrierkassenRegistrierkasseUuid<
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
  args: () => InferRequestType<
    (typeof client.export.gobd.registrierkassen)[':registrierkasseUuid']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getExportGobdRegistrierkassenRegistrierkasseUuidQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createExportHtmlBelegeBelegUuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.export.html.belege)[':belegUuid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.export.html.belege)[':belegUuid']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getExportHtmlBelegeBelegUuidQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createExportPdfBelegeBelegUuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.export.pdf.belege)[':belegUuid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.export.pdf.belege)[':belegUuid']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getExportPdfBelegeBelegUuidQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createExportQrBelegeBelegUuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.export.qr.belege)[':belegUuid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.export.qr.belege)[':belegUuid']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getExportQrBelegeBelegUuidQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createExportThermalPrintBelegeBelegUuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.export)['thermal-print']['belege'][':belegUuid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.export)['thermal-print']['belege'][':belegUuid']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getExportThermalPrintBelegeBelegUuidQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createExportXlsRegistrierkassenRegistrierkasseUuidBelege<
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
  args: () => InferRequestType<
    (typeof client.export.xls.registrierkassen)[':registrierkasseUuid']['belege']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getExportXlsRegistrierkassenRegistrierkasseUuidBelegeQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createRegistrierkassenRegistrierkasseUuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.registrierkassen)[':registrierkasseUuid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.registrierkassen)[':registrierkasseUuid']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getRegistrierkassenRegistrierkasseUuidQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostRegistrierkassenRegistrierkasseUuidAbschluss<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRegistrierkassenRegistrierkasseUuidAbschlussMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createRegistrierkassenRegistrierkasseUuidBelege<
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
  args: () => InferRequestType<
    (typeof client.registrierkassen)[':registrierkasseUuid']['belege']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getRegistrierkassenRegistrierkasseUuidBelegeQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createRegistrierkassenRegistrierkasseUuidBelegeBelegUuid<
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
  args: () => InferRequestType<
    (typeof client.registrierkassen)[':registrierkasseUuid']['belege'][':belegUuid']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getRegistrierkassenRegistrierkasseUuidBelegeBelegUuidQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutRegistrierkassenRegistrierkasseUuidBelegeBelegUuid<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutRegistrierkassenRegistrierkasseUuidBelegeBelegUuidMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createRegistrierkassenRegistrierkasseUuidDep<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.registrierkassen)[':registrierkasseUuid']['dep']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.registrierkassen)[':registrierkasseUuid']['dep']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getRegistrierkassenRegistrierkasseUuidDepQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createRegistrierkassenRegistrierkasseUuidMonatsbelege<
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
  args: () => InferRequestType<
    (typeof client.registrierkassen)[':registrierkasseUuid']['monatsbelege']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getRegistrierkassenRegistrierkasseUuidMonatsbelegeQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}
