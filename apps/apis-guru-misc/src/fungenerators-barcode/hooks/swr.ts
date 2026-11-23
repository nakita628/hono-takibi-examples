import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getBarcodeKey() {
  return ['barcode'] as const
}

export function getPostBarcodeDecodeKey() {
  return ['barcode', '/barcode/decode', 'POST'] as const
}

export function usePostBarcodeDecode<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.barcode.decode.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.barcode.decode.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBarcodeDecodeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.barcode.decode.$post> }) =>
        parseResponse(client.barcode.decode.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBarcodeDecodeTypesKey() {
  return ['barcode', '/barcode/decode/types'] as const
}

export function useGetBarcodeDecodeTypes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.barcode.decode.types.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBarcodeDecodeTypesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.barcode.decode.types.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.barcode.decode.types.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBarcodeDecodeTypes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.barcode.decode.types.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBarcodeDecodeTypesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.barcode.decode.types.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.barcode.decode.types.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBarcodeEncodeKey(args: InferRequestType<typeof client.barcode.encode.$get>) {
  return ['barcode', '/barcode/encode', args] as const
}

export function useGetBarcodeEncode<TError = unknown>(
  args: InferRequestType<typeof client.barcode.encode.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.barcode.encode.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBarcodeEncodeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.barcode.encode.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.barcode.encode.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBarcodeEncode<TError = unknown>(
  args: InferRequestType<typeof client.barcode.encode.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.barcode.encode.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBarcodeEncodeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.barcode.encode.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.barcode.encode.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBarcodeEncodeTypesKey() {
  return ['barcode', '/barcode/encode/types'] as const
}

export function useGetBarcodeEncodeTypes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.barcode.encode.types.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBarcodeEncodeTypesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.barcode.encode.types.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.barcode.encode.types.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBarcodeEncodeTypes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.barcode.encode.types.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBarcodeEncodeTypesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.barcode.encode.types.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.barcode.encode.types.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}
