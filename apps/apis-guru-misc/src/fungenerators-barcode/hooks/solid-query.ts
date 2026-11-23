import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/solid-query'
import type {
  UndefinedInitialDataOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/solid-query'
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

export function createPostBarcodeDecode<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.barcode.decode.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.barcode.decode.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBarcodeDecodeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createBarcodeDecodeTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.barcode.decode.types.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.barcode.decode.types.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getBarcodeDecodeTypesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBarcodeDecodeTypesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createBarcodeEncode<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.barcode.encode.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.barcode.encode.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.barcode.encode.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getBarcodeEncodeQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBarcodeEncodeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createBarcodeEncodeTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.barcode.encode.types.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.barcode.encode.types.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getBarcodeEncodeTypesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBarcodeEncodeTypesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}
