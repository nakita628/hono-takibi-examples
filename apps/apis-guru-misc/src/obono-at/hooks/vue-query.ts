import { useQuery, useMutation, mutationOptions } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
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

export function getAuthQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAuthQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.auth.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAuth<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.$get>>>>>,
          ReturnType<typeof getAuthQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAuthQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAuthQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.auth.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBelegeBelegUuidQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.belege)[':belegUuid']['$get']>>,
) {
  return ['belege', '/belege/:belegUuid', toValue(args)] as const
}

export function getBelegeBelegUuidQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.belege)[':belegUuid']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBelegeBelegUuidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.belege[':belegUuid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBelegeBelegUuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.belege)[':belegUuid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.belege)[':belegUuid']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.belege)[':belegUuid']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.belege)[':belegUuid']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBelegeBelegUuidQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.belege)[':belegUuid']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBelegeBelegUuidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBelegeBelegUuidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.belege[':belegUuid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getExportCsvRegistrierkassenRegistrierkasseUuidBelegeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.export.csv.registrierkassen)[':registrierkasseUuid']['belege']['$get']
    >
  >,
) {
  return [
    'export',
    '/export/csv/registrierkassen/:registrierkasseUuid/belege',
    toValue(args),
  ] as const
}

export function getExportCsvRegistrierkassenRegistrierkasseUuidBelegeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.export.csv.registrierkassen)[':registrierkasseUuid']['belege']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getExportCsvRegistrierkassenRegistrierkasseUuidBelegeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.export.csv.registrierkassen[':registrierkasseUuid'].belege.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.export.csv.registrierkassen)[':registrierkasseUuid']['belege']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getExportCsvRegistrierkassenRegistrierkasseUuidBelegeQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getExportCsvRegistrierkassenRegistrierkasseUuidBelegeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.export.csv.registrierkassen[':registrierkasseUuid'].belege.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getExportDep131RegistrierkassenRegistrierkasseUuidBelegeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.export.dep131.registrierkassen)[':registrierkasseUuid']['belege']['$get']
    >
  >,
) {
  return [
    'export',
    '/export/dep131/registrierkassen/:registrierkasseUuid/belege',
    toValue(args),
  ] as const
}

export function getExportDep131RegistrierkassenRegistrierkasseUuidBelegeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.export.dep131.registrierkassen)[':registrierkasseUuid']['belege']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getExportDep131RegistrierkassenRegistrierkasseUuidBelegeQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.export.dep131.registrierkassen[':registrierkasseUuid'].belege.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.export.dep131.registrierkassen)[':registrierkasseUuid']['belege']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getExportDep131RegistrierkassenRegistrierkasseUuidBelegeQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getExportDep131RegistrierkassenRegistrierkasseUuidBelegeQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.export.dep131.registrierkassen[':registrierkasseUuid'].belege.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getExportDep7RegistrierkassenRegistrierkasseUuidBelegeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.export.dep7.registrierkassen)[':registrierkasseUuid']['belege']['$get']
    >
  >,
) {
  return [
    'export',
    '/export/dep7/registrierkassen/:registrierkasseUuid/belege',
    toValue(args),
  ] as const
}

export function getExportDep7RegistrierkassenRegistrierkasseUuidBelegeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.export.dep7.registrierkassen)[':registrierkasseUuid']['belege']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getExportDep7RegistrierkassenRegistrierkasseUuidBelegeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.export.dep7.registrierkassen[':registrierkasseUuid'].belege.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.export.dep7.registrierkassen)[':registrierkasseUuid']['belege']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getExportDep7RegistrierkassenRegistrierkasseUuidBelegeQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getExportDep7RegistrierkassenRegistrierkasseUuidBelegeQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.export.dep7.registrierkassen[':registrierkasseUuid'].belege.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getExportGobdRegistrierkassenRegistrierkasseUuidQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.export.gobd.registrierkassen)[':registrierkasseUuid']['$get']>
  >,
) {
  return ['export', '/export/gobd/registrierkassen/:registrierkasseUuid', toValue(args)] as const
}

export function getExportGobdRegistrierkassenRegistrierkasseUuidQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.export.gobd.registrierkassen)[':registrierkasseUuid']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getExportGobdRegistrierkassenRegistrierkasseUuidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.export.gobd.registrierkassen[':registrierkasseUuid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.export.gobd.registrierkassen)[':registrierkasseUuid']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getExportGobdRegistrierkassenRegistrierkasseUuidQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getExportGobdRegistrierkassenRegistrierkasseUuidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.export.gobd.registrierkassen[':registrierkasseUuid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getExportHtmlBelegeBelegUuidQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.export.html.belege)[':belegUuid']['$get']>
  >,
) {
  return ['export', '/export/html/belege/:belegUuid', toValue(args)] as const
}

export function getExportHtmlBelegeBelegUuidQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.export.html.belege)[':belegUuid']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getExportHtmlBelegeBelegUuidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.export.html.belege[':belegUuid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.export.html.belege)[':belegUuid']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.export.html.belege)[':belegUuid']['$get']>>
              >
            >
          >,
          ReturnType<typeof getExportHtmlBelegeBelegUuidQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getExportHtmlBelegeBelegUuidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.export.html.belege[':belegUuid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getExportPdfBelegeBelegUuidQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.export.pdf.belege)[':belegUuid']['$get']>>,
) {
  return ['export', '/export/pdf/belege/:belegUuid', toValue(args)] as const
}

export function getExportPdfBelegeBelegUuidQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.export.pdf.belege)[':belegUuid']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getExportPdfBelegeBelegUuidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.export.pdf.belege[':belegUuid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.export.pdf.belege)[':belegUuid']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.export.pdf.belege)[':belegUuid']['$get']>>
              >
            >
          >,
          ReturnType<typeof getExportPdfBelegeBelegUuidQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getExportPdfBelegeBelegUuidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.export.pdf.belege[':belegUuid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getExportQrBelegeBelegUuidQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.export.qr.belege)[':belegUuid']['$get']>>,
) {
  return ['export', '/export/qr/belege/:belegUuid', toValue(args)] as const
}

export function getExportQrBelegeBelegUuidQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.export.qr.belege)[':belegUuid']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getExportQrBelegeBelegUuidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.export.qr.belege[':belegUuid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.export.qr.belege)[':belegUuid']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.export.qr.belege)[':belegUuid']['$get']>>
              >
            >
          >,
          ReturnType<typeof getExportQrBelegeBelegUuidQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getExportQrBelegeBelegUuidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.export.qr.belege[':belegUuid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getExportThermalPrintBelegeBelegUuidQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.export)['thermal-print']['belege'][':belegUuid']['$get']>
  >,
) {
  return ['export', '/export/thermal-print/belege/:belegUuid', toValue(args)] as const
}

export function getExportThermalPrintBelegeBelegUuidQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.export)['thermal-print']['belege'][':belegUuid']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getExportThermalPrintBelegeBelegUuidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.export['thermal-print'].belege[':belegUuid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.export)['thermal-print']['belege'][':belegUuid']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.export)['thermal-print']['belege'][':belegUuid']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.export)['thermal-print']['belege'][':belegUuid']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getExportThermalPrintBelegeBelegUuidQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getExportThermalPrintBelegeBelegUuidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.export['thermal-print'].belege[':belegUuid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getExportXlsRegistrierkassenRegistrierkasseUuidBelegeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.export.xls.registrierkassen)[':registrierkasseUuid']['belege']['$get']
    >
  >,
) {
  return [
    'export',
    '/export/xls/registrierkassen/:registrierkasseUuid/belege',
    toValue(args),
  ] as const
}

export function getExportXlsRegistrierkassenRegistrierkasseUuidBelegeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.export.xls.registrierkassen)[':registrierkasseUuid']['belege']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getExportXlsRegistrierkassenRegistrierkasseUuidBelegeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.export.xls.registrierkassen[':registrierkasseUuid'].belege.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.export.xls.registrierkassen)[':registrierkasseUuid']['belege']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getExportXlsRegistrierkassenRegistrierkasseUuidBelegeQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getExportXlsRegistrierkassenRegistrierkasseUuidBelegeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.export.xls.registrierkassen[':registrierkasseUuid'].belege.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRegistrierkassenRegistrierkasseUuidQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.registrierkassen)[':registrierkasseUuid']['$get']>
  >,
) {
  return ['registrierkassen', '/registrierkassen/:registrierkasseUuid', toValue(args)] as const
}

export function getRegistrierkassenRegistrierkasseUuidQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.registrierkassen)[':registrierkasseUuid']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRegistrierkassenRegistrierkasseUuidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.registrierkassen[':registrierkasseUuid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.registrierkassen)[':registrierkasseUuid']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.registrierkassen)[':registrierkasseUuid']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.registrierkassen)[':registrierkasseUuid']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getRegistrierkassenRegistrierkasseUuidQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRegistrierkassenRegistrierkasseUuidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.registrierkassen[':registrierkasseUuid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.registrierkassen)[':registrierkasseUuid']['belege']['$get']>
  >,
) {
  return [
    'registrierkassen',
    '/registrierkassen/:registrierkasseUuid/belege',
    toValue(args),
  ] as const
}

export function getRegistrierkassenRegistrierkasseUuidBelegeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.registrierkassen)[':registrierkasseUuid']['belege']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRegistrierkassenRegistrierkasseUuidBelegeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.registrierkassen[':registrierkasseUuid'].belege.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.registrierkassen)[':registrierkasseUuid']['belege']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getRegistrierkassenRegistrierkasseUuidBelegeQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRegistrierkassenRegistrierkasseUuidBelegeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.registrierkassen[':registrierkasseUuid'].belege.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRegistrierkassenRegistrierkasseUuidBelegeBelegUuidQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.registrierkassen)[':registrierkasseUuid']['belege'][':belegUuid']['$get']
    >
  >,
) {
  return [
    'registrierkassen',
    '/registrierkassen/:registrierkasseUuid/belege/:belegUuid',
    toValue(args),
  ] as const
}

export function getRegistrierkassenRegistrierkasseUuidBelegeBelegUuidQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.registrierkassen)[':registrierkasseUuid']['belege'][':belegUuid']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRegistrierkassenRegistrierkasseUuidBelegeBelegUuidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.registrierkassen[':registrierkasseUuid'].belege[':belegUuid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.registrierkassen)[':registrierkasseUuid']['belege'][':belegUuid']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getRegistrierkassenRegistrierkasseUuidBelegeBelegUuidQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRegistrierkassenRegistrierkasseUuidBelegeBelegUuidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.registrierkassen[':registrierkasseUuid'].belege[':belegUuid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.registrierkassen)[':registrierkasseUuid']['dep']['$get']>
  >,
) {
  return ['registrierkassen', '/registrierkassen/:registrierkasseUuid/dep', toValue(args)] as const
}

export function getRegistrierkassenRegistrierkasseUuidDepQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.registrierkassen)[':registrierkasseUuid']['dep']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRegistrierkassenRegistrierkasseUuidDepQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.registrierkassen[':registrierkasseUuid'].dep.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.registrierkassen)[':registrierkasseUuid']['dep']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.registrierkassen)[':registrierkasseUuid']['dep']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.registrierkassen)[':registrierkasseUuid']['dep']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRegistrierkassenRegistrierkasseUuidDepQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRegistrierkassenRegistrierkasseUuidDepQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.registrierkassen[':registrierkasseUuid'].dep.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRegistrierkassenRegistrierkasseUuidMonatsbelegeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.registrierkassen)[':registrierkasseUuid']['monatsbelege']['$get']
    >
  >,
) {
  return [
    'registrierkassen',
    '/registrierkassen/:registrierkasseUuid/monatsbelege',
    toValue(args),
  ] as const
}

export function getRegistrierkassenRegistrierkasseUuidMonatsbelegeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.registrierkassen)[':registrierkasseUuid']['monatsbelege']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRegistrierkassenRegistrierkasseUuidMonatsbelegeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.registrierkassen[':registrierkasseUuid'].monatsbelege.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.registrierkassen)[':registrierkasseUuid']['monatsbelege']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getRegistrierkassenRegistrierkasseUuidMonatsbelegeQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRegistrierkassenRegistrierkasseUuidMonatsbelegeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.registrierkassen[':registrierkasseUuid'].monatsbelege.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
