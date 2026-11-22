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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.barcode.decode.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.barcode.decode.$post>,
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

export function getBarcodeDecodeTypesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getBarcodeDecodeTypesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.barcode.decode.types.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBarcodeDecodeTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.barcode.decode.types.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.barcode.decode.types.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.barcode.decode.types.$get>>>
            >
          >,
          ReturnType<typeof getBarcodeDecodeTypesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.barcode.decode.types.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBarcodeDecodeTypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getBarcodeDecodeTypesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.barcode.decode.types.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBarcodeEncodeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.barcode.encode.$get>>,
) {
  return ['barcode', '/barcode/encode', toValue(args)] as const
}

export function getBarcodeEncodeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.barcode.encode.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBarcodeEncodeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.barcode.encode.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBarcodeEncode<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.barcode.encode.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.barcode.encode.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.barcode.encode.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.barcode.encode.$get>>>>
          >,
          ReturnType<typeof getBarcodeEncodeQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.barcode.encode.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBarcodeEncodeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBarcodeEncodeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.barcode.encode.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBarcodeEncodeTypesQueryKey() {
  return ['barcode', '/barcode/encode/types'] as const
}

export function getBarcodeEncodeTypesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getBarcodeEncodeTypesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.barcode.encode.types.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBarcodeEncodeTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.barcode.encode.types.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.barcode.encode.types.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.barcode.encode.types.$get>>>
            >
          >,
          ReturnType<typeof getBarcodeEncodeTypesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.barcode.encode.types.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBarcodeEncodeTypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getBarcodeEncodeTypesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.barcode.encode.types.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
