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

export function getBatchKey() {
  return ['batch'] as const
}

export function getImagesKey() {
  return ['images'] as const
}

export function getQrcodeKey() {
  return ['qrcode'] as const
}

export function getPostBatchQrcodeMutationKey() {
  return ['batch', '/batch/qrcode', 'POST'] as const
}

export function getPostBatchQrcodeMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.batch.qrcode.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.batch.qrcode.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBatchQrcodeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.batch.qrcode.$post>) {
      return parseResponse(client.batch.qrcode.$post(args, options))
    },
  })
}

export function usePostBatchQrcode<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.batch.qrcode.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.batch.qrcode.$post>,
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
  const mutationDefaults = getPostBatchQrcodeMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getImagesQueryKey() {
  return ['images', '/images'] as const
}

export function getImagesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getImagesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.images.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useImages<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.images.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.images.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.images.$get>>>>>,
          ReturnType<typeof getImagesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.images.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getImagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getImagesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.images.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostImagesMutationKey() {
  return ['images', '/images', 'POST'] as const
}

export function getPostImagesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.images.$post>>>>>,
    TError,
    InferRequestType<typeof client.images.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostImagesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.images.$post>) {
      return parseResponse(client.images.$post(args, options))
    },
  })
}

export function usePostImages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.images.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.images.$post>,
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
  const mutationDefaults = getPostImagesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getImagesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.images)[':id']['$get']>>,
) {
  return ['images', '/images/:id', toValue(args)] as const
}

export function getImagesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.images)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getImagesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.images[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useImagesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.images)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.images)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.images)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.images)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getImagesIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.images)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getImagesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getImagesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.images[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteImagesIdMutationKey() {
  return ['images', '/images/:id', 'DELETE'] as const
}

export function getDeleteImagesIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.images)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.images)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteImagesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.images)[':id']['$delete']>) {
      return parseResponse(client.images[':id'].$delete(args, options))
    },
  })
}

export function useDeleteImagesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<(typeof client.images)[':id']['$delete']>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.images)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteImagesIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostQrcodeMutationKey() {
  return ['qrcode', '/qrcode', 'POST'] as const
}

export function getPostQrcodeMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qrcode.$post>>>>>,
    TError,
    InferRequestType<typeof client.qrcode.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostQrcodeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.qrcode.$post>) {
      return parseResponse(client.qrcode.$post(args, options))
    },
  })
}

export function usePostQrcode<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qrcode.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.qrcode.$post>,
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
  const mutationDefaults = getPostQrcodeMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostQrcodeContactMutationKey() {
  return ['qrcode', '/qrcode/contact', 'POST'] as const
}

export function getPostQrcodeContactMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qrcode.contact.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.qrcode.contact.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostQrcodeContactMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.qrcode.contact.$post>) {
      return parseResponse(client.qrcode.contact.$post(args, options))
    },
  })
}

export function usePostQrcodeContact<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.qrcode.contact.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.qrcode.contact.$post>,
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
  const mutationDefaults = getPostQrcodeContactMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostQrcodeCryptoMutationKey() {
  return ['qrcode', '/qrcode/crypto', 'POST'] as const
}

export function getPostQrcodeCryptoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qrcode.crypto.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.qrcode.crypto.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostQrcodeCryptoMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.qrcode.crypto.$post>) {
      return parseResponse(client.qrcode.crypto.$post(args, options))
    },
  })
}

export function usePostQrcodeCrypto<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qrcode.crypto.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.qrcode.crypto.$post>,
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
  const mutationDefaults = getPostQrcodeCryptoMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostQrcodeEmailMutationKey() {
  return ['qrcode', '/qrcode/email', 'POST'] as const
}

export function getPostQrcodeEmailMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qrcode.email.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.qrcode.email.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostQrcodeEmailMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.qrcode.email.$post>) {
      return parseResponse(client.qrcode.email.$post(args, options))
    },
  })
}

export function usePostQrcodeEmail<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qrcode.email.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.qrcode.email.$post>,
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
  const mutationDefaults = getPostQrcodeEmailMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostQrcodeGeoMutationKey() {
  return ['qrcode', '/qrcode/geo', 'POST'] as const
}

export function getPostQrcodeGeoMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qrcode.geo.$post>>>>>,
    TError,
    InferRequestType<typeof client.qrcode.geo.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostQrcodeGeoMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.qrcode.geo.$post>) {
      return parseResponse(client.qrcode.geo.$post(args, options))
    },
  })
}

export function usePostQrcodeGeo<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qrcode.geo.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.qrcode.geo.$post>,
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
  const mutationDefaults = getPostQrcodeGeoMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostQrcodePhoneMutationKey() {
  return ['qrcode', '/qrcode/phone', 'POST'] as const
}

export function getPostQrcodePhoneMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qrcode.phone.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.qrcode.phone.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostQrcodePhoneMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.qrcode.phone.$post>) {
      return parseResponse(client.qrcode.phone.$post(args, options))
    },
  })
}

export function usePostQrcodePhone<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qrcode.phone.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.qrcode.phone.$post>,
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
  const mutationDefaults = getPostQrcodePhoneMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostQrcodeSmsMutationKey() {
  return ['qrcode', '/qrcode/sms', 'POST'] as const
}

export function getPostQrcodeSmsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qrcode.sms.$post>>>>>,
    TError,
    InferRequestType<typeof client.qrcode.sms.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostQrcodeSmsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.qrcode.sms.$post>) {
      return parseResponse(client.qrcode.sms.$post(args, options))
    },
  })
}

export function usePostQrcodeSms<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qrcode.sms.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.qrcode.sms.$post>,
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
  const mutationDefaults = getPostQrcodeSmsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostQrcodeTextMutationKey() {
  return ['qrcode', '/qrcode/text', 'POST'] as const
}

export function getPostQrcodeTextMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qrcode.text.$post>>>>>,
    TError,
    InferRequestType<typeof client.qrcode.text.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostQrcodeTextMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.qrcode.text.$post>) {
      return parseResponse(client.qrcode.text.$post(args, options))
    },
  })
}

export function usePostQrcodeText<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qrcode.text.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.qrcode.text.$post>,
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
  const mutationDefaults = getPostQrcodeTextMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostQrcodeWifiMutationKey() {
  return ['qrcode', '/qrcode/wifi', 'POST'] as const
}

export function getPostQrcodeWifiMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qrcode.wifi.$post>>>>>,
    TError,
    InferRequestType<typeof client.qrcode.wifi.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostQrcodeWifiMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.qrcode.wifi.$post>) {
      return parseResponse(client.qrcode.wifi.$post(args, options))
    },
  })
}

export function usePostQrcodeWifi<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qrcode.wifi.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.qrcode.wifi.$post>,
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
  const mutationDefaults = getPostQrcodeWifiMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
