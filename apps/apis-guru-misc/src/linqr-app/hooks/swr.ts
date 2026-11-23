import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getBatchKey() {
  return ['batch'] as const
}

export function getImagesKey() {
  return ['images'] as const
}

export function getQrcodeKey() {
  return ['qrcode'] as const
}

export function getPostBatchQrcodeKey() {
  return ['batch', '/batch/qrcode', 'POST'] as const
}

export function usePostBatchQrcode<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.batch.qrcode.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.batch.qrcode.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBatchQrcodeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.batch.qrcode.$post> }) =>
        parseResponse(client.batch.qrcode.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetImagesKey() {
  return ['images', '/images'] as const
}

export function useGetImages<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.images.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetImagesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.images.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.images.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetImages<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.images.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetImagesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.images.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.images.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostImagesKey() {
  return ['images', '/images', 'POST'] as const
}

export function usePostImages<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.images.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.images.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostImagesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.images.$post> }) =>
        parseResponse(client.images.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetImagesIdKey(args: InferRequestType<(typeof client.images)[':id']['$get']>) {
  return ['images', '/images/:id', args] as const
}

export function useGetImagesId<TError = unknown>(
  args: InferRequestType<(typeof client.images)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.images)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetImagesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.images)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.images[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetImagesId<TError = unknown>(
  args: InferRequestType<(typeof client.images)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.images)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetImagesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.images)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.images[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteImagesIdKey() {
  return ['images', '/images/:id', 'DELETE'] as const
}

export function useDeleteImagesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.images)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.images)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteImagesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.images)[':id']['$delete']> },
      ) => parseResponse(client.images[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostQrcodeKey() {
  return ['qrcode', '/qrcode', 'POST'] as const
}

export function usePostQrcode<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qrcode.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.qrcode.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostQrcodeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.qrcode.$post> }) =>
        parseResponse(client.qrcode.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostQrcodeContactKey() {
  return ['qrcode', '/qrcode/contact', 'POST'] as const
}

export function usePostQrcodeContact<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qrcode.contact.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.qrcode.contact.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostQrcodeContactKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.qrcode.contact.$post> }) =>
        parseResponse(client.qrcode.contact.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostQrcodeCryptoKey() {
  return ['qrcode', '/qrcode/crypto', 'POST'] as const
}

export function usePostQrcodeCrypto<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qrcode.crypto.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.qrcode.crypto.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostQrcodeCryptoKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.qrcode.crypto.$post> }) =>
        parseResponse(client.qrcode.crypto.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostQrcodeEmailKey() {
  return ['qrcode', '/qrcode/email', 'POST'] as const
}

export function usePostQrcodeEmail<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qrcode.email.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.qrcode.email.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostQrcodeEmailKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.qrcode.email.$post> }) =>
        parseResponse(client.qrcode.email.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostQrcodeGeoKey() {
  return ['qrcode', '/qrcode/geo', 'POST'] as const
}

export function usePostQrcodeGeo<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qrcode.geo.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.qrcode.geo.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostQrcodeGeoKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.qrcode.geo.$post> }) =>
        parseResponse(client.qrcode.geo.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostQrcodePhoneKey() {
  return ['qrcode', '/qrcode/phone', 'POST'] as const
}

export function usePostQrcodePhone<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qrcode.phone.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.qrcode.phone.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostQrcodePhoneKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.qrcode.phone.$post> }) =>
        parseResponse(client.qrcode.phone.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostQrcodeSmsKey() {
  return ['qrcode', '/qrcode/sms', 'POST'] as const
}

export function usePostQrcodeSms<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qrcode.sms.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.qrcode.sms.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostQrcodeSmsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.qrcode.sms.$post> }) =>
        parseResponse(client.qrcode.sms.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostQrcodeTextKey() {
  return ['qrcode', '/qrcode/text', 'POST'] as const
}

export function usePostQrcodeText<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qrcode.text.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.qrcode.text.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostQrcodeTextKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.qrcode.text.$post> }) =>
        parseResponse(client.qrcode.text.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostQrcodeWifiKey() {
  return ['qrcode', '/qrcode/wifi', 'POST'] as const
}

export function usePostQrcodeWifi<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qrcode.wifi.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.qrcode.wifi.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostQrcodeWifiKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.qrcode.wifi.$post> }) =>
        parseResponse(client.qrcode.wifi.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
