import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getGetAuthKey() {
  return ['auth', '/auth'] as const
}

export function useGetAuth<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetAuthKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.auth.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAuth<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetAuthKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.auth.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBelegeBelegUuidKey(
  args: InferRequestType<(typeof client.belege)[':belegUuid']['$get']>,
) {
  return ['belege', '/belege/:belegUuid', args] as const
}

export function useGetBelegeBelegUuid<TError = unknown>(
  args: InferRequestType<(typeof client.belege)[':belegUuid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.belege)[':belegUuid']['$get']>>>
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
        ? getGetBelegeBelegUuidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.belege)[':belegUuid']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.belege[':belegUuid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBelegeBelegUuid<TError = unknown>(
  args: InferRequestType<(typeof client.belege)[':belegUuid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.belege)[':belegUuid']['$get']>>>
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
        ? getGetBelegeBelegUuidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.belege)[':belegUuid']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.belege[':belegUuid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetExportCsvRegistrierkassenRegistrierkasseUuidBelegeKey(
  args: InferRequestType<
    (typeof client.export.csv.registrierkassen)[':registrierkasseUuid']['belege']['$get']
  >,
) {
  return ['export', '/export/csv/registrierkassen/:registrierkasseUuid/belege', args] as const
}

export function useGetExportCsvRegistrierkassenRegistrierkasseUuidBelege<TError = unknown>(
  args: InferRequestType<
    (typeof client.export.csv.registrierkassen)[':registrierkasseUuid']['belege']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetExportCsvRegistrierkassenRegistrierkasseUuidBelegeKey(args)
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
                (typeof client.export.csv.registrierkassen)[':registrierkasseUuid']['belege']['$get']
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
          client.export.csv.registrierkassen[':registrierkasseUuid'].belege.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetExportCsvRegistrierkassenRegistrierkasseUuidBelege<TError = unknown>(
  args: InferRequestType<
    (typeof client.export.csv.registrierkassen)[':registrierkasseUuid']['belege']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetExportCsvRegistrierkassenRegistrierkasseUuidBelegeKey(args)
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
                (typeof client.export.csv.registrierkassen)[':registrierkasseUuid']['belege']['$get']
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
          client.export.csv.registrierkassen[':registrierkasseUuid'].belege.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetExportDep131RegistrierkassenRegistrierkasseUuidBelegeKey(
  args: InferRequestType<
    (typeof client.export.dep131.registrierkassen)[':registrierkasseUuid']['belege']['$get']
  >,
) {
  return ['export', '/export/dep131/registrierkassen/:registrierkasseUuid/belege', args] as const
}

export function useGetExportDep131RegistrierkassenRegistrierkasseUuidBelege<TError = unknown>(
  args: InferRequestType<
    (typeof client.export.dep131.registrierkassen)[':registrierkasseUuid']['belege']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetExportDep131RegistrierkassenRegistrierkasseUuidBelegeKey(args)
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
                (typeof client.export.dep131.registrierkassen)[':registrierkasseUuid']['belege']['$get']
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
          client.export.dep131.registrierkassen[':registrierkasseUuid'].belege.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetExportDep131RegistrierkassenRegistrierkasseUuidBelege<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.export.dep131.registrierkassen)[':registrierkasseUuid']['belege']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetExportDep131RegistrierkassenRegistrierkasseUuidBelegeKey(args)
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
                (typeof client.export.dep131.registrierkassen)[':registrierkasseUuid']['belege']['$get']
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
          client.export.dep131.registrierkassen[':registrierkasseUuid'].belege.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetExportDep7RegistrierkassenRegistrierkasseUuidBelegeKey(
  args: InferRequestType<
    (typeof client.export.dep7.registrierkassen)[':registrierkasseUuid']['belege']['$get']
  >,
) {
  return ['export', '/export/dep7/registrierkassen/:registrierkasseUuid/belege', args] as const
}

export function useGetExportDep7RegistrierkassenRegistrierkasseUuidBelege<TError = unknown>(
  args: InferRequestType<
    (typeof client.export.dep7.registrierkassen)[':registrierkasseUuid']['belege']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetExportDep7RegistrierkassenRegistrierkasseUuidBelegeKey(args)
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
                (typeof client.export.dep7.registrierkassen)[':registrierkasseUuid']['belege']['$get']
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
          client.export.dep7.registrierkassen[':registrierkasseUuid'].belege.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetExportDep7RegistrierkassenRegistrierkasseUuidBelege<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.export.dep7.registrierkassen)[':registrierkasseUuid']['belege']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetExportDep7RegistrierkassenRegistrierkasseUuidBelegeKey(args)
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
                (typeof client.export.dep7.registrierkassen)[':registrierkasseUuid']['belege']['$get']
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
          client.export.dep7.registrierkassen[':registrierkasseUuid'].belege.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetExportGobdRegistrierkassenRegistrierkasseUuidKey(
  args: InferRequestType<
    (typeof client.export.gobd.registrierkassen)[':registrierkasseUuid']['$get']
  >,
) {
  return ['export', '/export/gobd/registrierkassen/:registrierkasseUuid', args] as const
}

export function useGetExportGobdRegistrierkassenRegistrierkasseUuid<TError = unknown>(
  args: InferRequestType<
    (typeof client.export.gobd.registrierkassen)[':registrierkasseUuid']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetExportGobdRegistrierkassenRegistrierkasseUuidKey(args)
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
                (typeof client.export.gobd.registrierkassen)[':registrierkasseUuid']['$get']
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
          client.export.gobd.registrierkassen[':registrierkasseUuid'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetExportGobdRegistrierkassenRegistrierkasseUuid<TError = unknown>(
  args: InferRequestType<
    (typeof client.export.gobd.registrierkassen)[':registrierkasseUuid']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetExportGobdRegistrierkassenRegistrierkasseUuidKey(args)
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
                (typeof client.export.gobd.registrierkassen)[':registrierkasseUuid']['$get']
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
          client.export.gobd.registrierkassen[':registrierkasseUuid'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetExportHtmlBelegeBelegUuidKey(
  args: InferRequestType<(typeof client.export.html.belege)[':belegUuid']['$get']>,
) {
  return ['export', '/export/html/belege/:belegUuid', args] as const
}

export function useGetExportHtmlBelegeBelegUuid<TError = unknown>(
  args: InferRequestType<(typeof client.export.html.belege)[':belegUuid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.export.html.belege)[':belegUuid']['$get']>>
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
        ? getGetExportHtmlBelegeBelegUuidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.export.html.belege)[':belegUuid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.export.html.belege[':belegUuid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetExportHtmlBelegeBelegUuid<TError = unknown>(
  args: InferRequestType<(typeof client.export.html.belege)[':belegUuid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.export.html.belege)[':belegUuid']['$get']>>
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
        ? getGetExportHtmlBelegeBelegUuidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.export.html.belege)[':belegUuid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.export.html.belege[':belegUuid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetExportPdfBelegeBelegUuidKey(
  args: InferRequestType<(typeof client.export.pdf.belege)[':belegUuid']['$get']>,
) {
  return ['export', '/export/pdf/belege/:belegUuid', args] as const
}

export function useGetExportPdfBelegeBelegUuid<TError = unknown>(
  args: InferRequestType<(typeof client.export.pdf.belege)[':belegUuid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.export.pdf.belege)[':belegUuid']['$get']>>
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
        ? getGetExportPdfBelegeBelegUuidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.export.pdf.belege)[':belegUuid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.export.pdf.belege[':belegUuid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetExportPdfBelegeBelegUuid<TError = unknown>(
  args: InferRequestType<(typeof client.export.pdf.belege)[':belegUuid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.export.pdf.belege)[':belegUuid']['$get']>>
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
        ? getGetExportPdfBelegeBelegUuidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.export.pdf.belege)[':belegUuid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.export.pdf.belege[':belegUuid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetExportQrBelegeBelegUuidKey(
  args: InferRequestType<(typeof client.export.qr.belege)[':belegUuid']['$get']>,
) {
  return ['export', '/export/qr/belege/:belegUuid', args] as const
}

export function useGetExportQrBelegeBelegUuid<TError = unknown>(
  args: InferRequestType<(typeof client.export.qr.belege)[':belegUuid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.export.qr.belege)[':belegUuid']['$get']>>
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
        ? getGetExportQrBelegeBelegUuidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.export.qr.belege)[':belegUuid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.export.qr.belege[':belegUuid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetExportQrBelegeBelegUuid<TError = unknown>(
  args: InferRequestType<(typeof client.export.qr.belege)[':belegUuid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.export.qr.belege)[':belegUuid']['$get']>>
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
        ? getGetExportQrBelegeBelegUuidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.export.qr.belege)[':belegUuid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.export.qr.belege[':belegUuid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetExportThermalPrintBelegeBelegUuidKey(
  args: InferRequestType<(typeof client.export)['thermal-print']['belege'][':belegUuid']['$get']>,
) {
  return ['export', '/export/thermal-print/belege/:belegUuid', args] as const
}

export function useGetExportThermalPrintBelegeBelegUuid<TError = unknown>(
  args: InferRequestType<(typeof client.export)['thermal-print']['belege'][':belegUuid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.export)['thermal-print']['belege'][':belegUuid']['$get']>
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
        ? getGetExportThermalPrintBelegeBelegUuidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.export)['thermal-print']['belege'][':belegUuid']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.export['thermal-print'].belege[':belegUuid'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetExportThermalPrintBelegeBelegUuid<TError = unknown>(
  args: InferRequestType<(typeof client.export)['thermal-print']['belege'][':belegUuid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.export)['thermal-print']['belege'][':belegUuid']['$get']>
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
        ? getGetExportThermalPrintBelegeBelegUuidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.export)['thermal-print']['belege'][':belegUuid']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.export['thermal-print'].belege[':belegUuid'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetExportXlsRegistrierkassenRegistrierkasseUuidBelegeKey(
  args: InferRequestType<
    (typeof client.export.xls.registrierkassen)[':registrierkasseUuid']['belege']['$get']
  >,
) {
  return ['export', '/export/xls/registrierkassen/:registrierkasseUuid/belege', args] as const
}

export function useGetExportXlsRegistrierkassenRegistrierkasseUuidBelege<TError = unknown>(
  args: InferRequestType<
    (typeof client.export.xls.registrierkassen)[':registrierkasseUuid']['belege']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetExportXlsRegistrierkassenRegistrierkasseUuidBelegeKey(args)
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
                (typeof client.export.xls.registrierkassen)[':registrierkasseUuid']['belege']['$get']
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
          client.export.xls.registrierkassen[':registrierkasseUuid'].belege.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetExportXlsRegistrierkassenRegistrierkasseUuidBelege<TError = unknown>(
  args: InferRequestType<
    (typeof client.export.xls.registrierkassen)[':registrierkasseUuid']['belege']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetExportXlsRegistrierkassenRegistrierkasseUuidBelegeKey(args)
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
                (typeof client.export.xls.registrierkassen)[':registrierkasseUuid']['belege']['$get']
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
          client.export.xls.registrierkassen[':registrierkasseUuid'].belege.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRegistrierkassenRegistrierkasseUuidKey(
  args: InferRequestType<(typeof client.registrierkassen)[':registrierkasseUuid']['$get']>,
) {
  return ['registrierkassen', '/registrierkassen/:registrierkasseUuid', args] as const
}

export function useGetRegistrierkassenRegistrierkasseUuid<TError = unknown>(
  args: InferRequestType<(typeof client.registrierkassen)[':registrierkasseUuid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.registrierkassen)[':registrierkasseUuid']['$get']>>
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
        ? getGetRegistrierkassenRegistrierkasseUuidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.registrierkassen)[':registrierkasseUuid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.registrierkassen[':registrierkasseUuid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRegistrierkassenRegistrierkasseUuid<TError = unknown>(
  args: InferRequestType<(typeof client.registrierkassen)[':registrierkasseUuid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.registrierkassen)[':registrierkasseUuid']['$get']>>
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
        ? getGetRegistrierkassenRegistrierkasseUuidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.registrierkassen)[':registrierkasseUuid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.registrierkassen[':registrierkasseUuid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRegistrierkassenRegistrierkasseUuidAbschlussKey() {
  return ['registrierkassen', '/registrierkassen/:registrierkasseUuid/abschluss', 'POST'] as const
}

export function usePostRegistrierkassenRegistrierkasseUuidAbschluss<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.registrierkassen)[':registrierkasseUuid']['abschluss']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRegistrierkassenRegistrierkasseUuidAbschlussKey()
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
            (typeof client.registrierkassen)[':registrierkasseUuid']['abschluss']['$post']
          >
        },
      ) =>
        parseResponse(
          client.registrierkassen[':registrierkasseUuid'].abschluss.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRegistrierkassenRegistrierkasseUuidBelegeKey(
  args: InferRequestType<
    (typeof client.registrierkassen)[':registrierkasseUuid']['belege']['$get']
  >,
) {
  return ['registrierkassen', '/registrierkassen/:registrierkasseUuid/belege', args] as const
}

export function useGetRegistrierkassenRegistrierkasseUuidBelege<TError = unknown>(
  args: InferRequestType<
    (typeof client.registrierkassen)[':registrierkasseUuid']['belege']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.registrierkassen)[':registrierkasseUuid']['belege']['$get']>
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
        ? getGetRegistrierkassenRegistrierkasseUuidBelegeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.registrierkassen)[':registrierkasseUuid']['belege']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.registrierkassen[':registrierkasseUuid'].belege.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRegistrierkassenRegistrierkasseUuidBelege<TError = unknown>(
  args: InferRequestType<
    (typeof client.registrierkassen)[':registrierkasseUuid']['belege']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.registrierkassen)[':registrierkasseUuid']['belege']['$get']>
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
        ? getGetRegistrierkassenRegistrierkasseUuidBelegeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.registrierkassen)[':registrierkasseUuid']['belege']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.registrierkassen[':registrierkasseUuid'].belege.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRegistrierkassenRegistrierkasseUuidBelegeBelegUuidKey(
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

export function useGetRegistrierkassenRegistrierkasseUuidBelegeBelegUuid<TError = unknown>(
  args: InferRequestType<
    (typeof client.registrierkassen)[':registrierkasseUuid']['belege'][':belegUuid']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetRegistrierkassenRegistrierkasseUuidBelegeBelegUuidKey(args)
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
                (typeof client.registrierkassen)[':registrierkasseUuid']['belege'][':belegUuid']['$get']
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
          client.registrierkassen[':registrierkasseUuid'].belege[':belegUuid'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRegistrierkassenRegistrierkasseUuidBelegeBelegUuid<TError = unknown>(
  args: InferRequestType<
    (typeof client.registrierkassen)[':registrierkasseUuid']['belege'][':belegUuid']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetRegistrierkassenRegistrierkasseUuidBelegeBelegUuidKey(args)
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
                (typeof client.registrierkassen)[':registrierkasseUuid']['belege'][':belegUuid']['$get']
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
          client.registrierkassen[':registrierkasseUuid'].belege[':belegUuid'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutRegistrierkassenRegistrierkasseUuidBelegeBelegUuidKey() {
  return [
    'registrierkassen',
    '/registrierkassen/:registrierkasseUuid/belege/:belegUuid',
    'PUT',
  ] as const
}

export function usePutRegistrierkassenRegistrierkasseUuidBelegeBelegUuid<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.registrierkassen)[':registrierkasseUuid']['belege'][':belegUuid']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRegistrierkassenRegistrierkasseUuidBelegeBelegUuidKey()
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
            (typeof client.registrierkassen)[':registrierkasseUuid']['belege'][':belegUuid']['$put']
          >
        },
      ) =>
        parseResponse(
          client.registrierkassen[':registrierkasseUuid'].belege[':belegUuid'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRegistrierkassenRegistrierkasseUuidDepKey(
  args: InferRequestType<(typeof client.registrierkassen)[':registrierkasseUuid']['dep']['$get']>,
) {
  return ['registrierkassen', '/registrierkassen/:registrierkasseUuid/dep', args] as const
}

export function useGetRegistrierkassenRegistrierkasseUuidDep<TError = unknown>(
  args: InferRequestType<(typeof client.registrierkassen)[':registrierkasseUuid']['dep']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.registrierkassen)[':registrierkasseUuid']['dep']['$get']>
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
        ? getGetRegistrierkassenRegistrierkasseUuidDepKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.registrierkassen)[':registrierkasseUuid']['dep']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.registrierkassen[':registrierkasseUuid'].dep.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRegistrierkassenRegistrierkasseUuidDep<TError = unknown>(
  args: InferRequestType<(typeof client.registrierkassen)[':registrierkasseUuid']['dep']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.registrierkassen)[':registrierkasseUuid']['dep']['$get']>
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
        ? getGetRegistrierkassenRegistrierkasseUuidDepKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.registrierkassen)[':registrierkasseUuid']['dep']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.registrierkassen[':registrierkasseUuid'].dep.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRegistrierkassenRegistrierkasseUuidMonatsbelegeKey(
  args: InferRequestType<
    (typeof client.registrierkassen)[':registrierkasseUuid']['monatsbelege']['$get']
  >,
) {
  return ['registrierkassen', '/registrierkassen/:registrierkasseUuid/monatsbelege', args] as const
}

export function useGetRegistrierkassenRegistrierkasseUuidMonatsbelege<TError = unknown>(
  args: InferRequestType<
    (typeof client.registrierkassen)[':registrierkasseUuid']['monatsbelege']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetRegistrierkassenRegistrierkasseUuidMonatsbelegeKey(args)
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
                (typeof client.registrierkassen)[':registrierkasseUuid']['monatsbelege']['$get']
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
          client.registrierkassen[':registrierkasseUuid'].monatsbelege.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRegistrierkassenRegistrierkasseUuidMonatsbelege<TError = unknown>(
  args: InferRequestType<
    (typeof client.registrierkassen)[':registrierkasseUuid']['monatsbelege']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetRegistrierkassenRegistrierkasseUuidMonatsbelegeKey(args)
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
                (typeof client.registrierkassen)[':registrierkasseUuid']['monatsbelege']['$get']
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
          client.registrierkassen[':registrierkasseUuid'].monatsbelege.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}
