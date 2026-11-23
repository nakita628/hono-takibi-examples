import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/preact-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/preact-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getBarcodeKey() {
  return ['barcode'] as const
}

export function getPostBarcodeDecodeMutationKey() {
  return ['barcode', '/barcode/decode', 'POST'] as const
}

export function getPostBarcodeDecodeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.barcode.decode.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.barcode.decode.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBarcodeDecodeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.barcode.decode.$post>) {
      return parseResponse(client.barcode.decode.$post(args, options))
    },
  })
}

export function usePostBarcodeDecode<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.barcode.decode.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.barcode.decode.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBarcodeDecodeMutationOptions<TError, TOnMutateResult>(
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

export function getBarcodeDecodeTypesQueryKey() {
  return ['barcode', '/barcode/decode/types'] as const
}

export function getBarcodeDecodeTypesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.barcode.decode.types.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.barcode.decode.types.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBarcodeDecodeTypesQueryKey>
  >({
    queryKey: getBarcodeDecodeTypesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.barcode.decode.types.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useBarcodeDecodeTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.barcode.decode.types.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.barcode.decode.types.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBarcodeDecodeTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getBarcodeDecodeTypesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseBarcodeDecodeTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.barcode.decode.types.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.barcode.decode.types.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBarcodeDecodeTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getBarcodeDecodeTypesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getBarcodeEncodeQueryKey(
  args: InferRequestType<typeof client.barcode.encode.$get>,
) {
  return ['barcode', '/barcode/encode', args] as const
}

export function getBarcodeEncodeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.barcode.encode.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.barcode.encode.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.barcode.encode.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBarcodeEncodeQueryKey>
  >({
    queryKey: getBarcodeEncodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.barcode.encode.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useBarcodeEncode<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.barcode.encode.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.barcode.encode.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.barcode.encode.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getBarcodeEncodeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getBarcodeEncodeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseBarcodeEncode<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.barcode.encode.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.barcode.encode.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.barcode.encode.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getBarcodeEncodeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getBarcodeEncodeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getBarcodeEncodeTypesQueryKey() {
  return ['barcode', '/barcode/encode/types'] as const
}

export function getBarcodeEncodeTypesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.barcode.encode.types.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.barcode.encode.types.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBarcodeEncodeTypesQueryKey>
  >({
    queryKey: getBarcodeEncodeTypesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.barcode.encode.types.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useBarcodeEncodeTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.barcode.encode.types.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.barcode.encode.types.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBarcodeEncodeTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getBarcodeEncodeTypesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseBarcodeEncodeTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.barcode.encode.types.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.barcode.encode.types.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBarcodeEncodeTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getBarcodeEncodeTypesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}
