import { useQuery, useMutation, mutationOptions } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getMbusKey() {
  return ['mbus'] as const
}

export function getMbusApiQueryKey() {
  return ['mbus', '/mbus/api'] as const
}

export function getMbusApiQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMbusApiQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mbus.api.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMbusApi<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mbus.api.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mbus.api.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mbus.api.$get>>>>
          >,
          ReturnType<typeof getMbusApiQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mbus.api.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMbusApiQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMbusApiQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.mbus.api.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostMbusGetDeviceBaudrateAddressMutationKey() {
  return ['mbus', '/mbus/get/:device/:baudrate/:address', 'POST'] as const
}

export function getPostMbusGetDeviceBaudrateAddressMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mbus.get)[':device'][':baudrate'][':address']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.mbus.get)[':device'][':baudrate'][':address']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMbusGetDeviceBaudrateAddressMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.mbus.get)[':device'][':baudrate'][':address']['$post']>,
    ) {
      return parseResponse(client.mbus.get[':device'][':baudrate'][':address'].$post(args, options))
    },
  })
}

export function usePostMbusGetDeviceBaudrateAddress<
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
                  ReturnType<(typeof client.mbus.get)[':device'][':baudrate'][':address']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.mbus.get)[':device'][':baudrate'][':address']['$post']>,
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
  const mutationDefaults = getPostMbusGetDeviceBaudrateAddressMutationOptions<
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

export function getPostMbusGetMultiDeviceBaudrateAddressMaxframesMutationKey() {
  return ['mbus', '/mbus/getMulti/:device/:baudrate/:address/:maxframes', 'POST'] as const
}

export function getPostMbusGetMultiDeviceBaudrateAddressMaxframesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mbus.getMulti)[':device'][':baudrate'][':address'][':maxframes']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.mbus.getMulti)[':device'][':baudrate'][':address'][':maxframes']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMbusGetMultiDeviceBaudrateAddressMaxframesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mbus.getMulti)[':device'][':baudrate'][':address'][':maxframes']['$post']
      >,
    ) {
      return parseResponse(
        client.mbus.getMulti[':device'][':baudrate'][':address'][':maxframes'].$post(args, options),
      )
    },
  })
}

export function usePostMbusGetMultiDeviceBaudrateAddressMaxframes<
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
                    (typeof client.mbus.getMulti)[':device'][':baudrate'][':address'][':maxframes']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.mbus.getMulti)[':device'][':baudrate'][':address'][':maxframes']['$post']
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
  const mutationDefaults = getPostMbusGetMultiDeviceBaudrateAddressMaxframesMutationOptions<
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

export function getMbusHatQueryKey() {
  return ['mbus', '/mbus/hat'] as const
}

export function getMbusHatQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMbusHatQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mbus.hat.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMbusHat<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mbus.hat.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mbus.hat.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mbus.hat.$get>>>>
          >,
          ReturnType<typeof getMbusHatQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mbus.hat.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMbusHatQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMbusHatQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.mbus.hat.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostMbusHatOffMutationKey() {
  return ['mbus', '/mbus/hat/off', 'POST'] as const
}

export function getPostMbusHatOffMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mbus.hat.off.$post>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostMbusHatOffMutationKey(),
    async mutationFn() {
      return parseResponse(client.mbus.hat.off.$post(undefined, options))
    },
  })
}

export function usePostMbusHatOff<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mbus.hat.off.$post>>>>
          >,
          TError,
          void,
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
  const mutationDefaults = getPostMbusHatOffMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostMbusHatOnMutationKey() {
  return ['mbus', '/mbus/hat/on', 'POST'] as const
}

export function getPostMbusHatOnMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mbus.hat.on.$post>>>>>,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostMbusHatOnMutationKey(),
    async mutationFn() {
      return parseResponse(client.mbus.hat.on.$post(undefined, options))
    },
  })
}

export function usePostMbusHatOn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mbus.hat.on.$post>>>>
          >,
          TError,
          void,
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
  const mutationDefaults = getPostMbusHatOnMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostMbusScanDeviceBaudrateMutationKey() {
  return ['mbus', '/mbus/scan/:device/:baudrate', 'POST'] as const
}

export function getPostMbusScanDeviceBaudrateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mbus.scan)[':device'][':baudrate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.mbus.scan)[':device'][':baudrate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMbusScanDeviceBaudrateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.mbus.scan)[':device'][':baudrate']['$post']>,
    ) {
      return parseResponse(client.mbus.scan[':device'][':baudrate'].$post(args, options))
    },
  })
}

export function usePostMbusScanDeviceBaudrate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.mbus.scan)[':device'][':baudrate']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.mbus.scan)[':device'][':baudrate']['$post']>,
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
  const mutationDefaults = getPostMbusScanDeviceBaudrateMutationOptions<TError, TOnMutateResult>(
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
