import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getMbusKey() {
  return ['mbus'] as const
}

export function getGetMbusApiKey() {
  return ['mbus', '/mbus/api'] as const
}

export function useGetMbusApi<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mbus.api.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMbusApiKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mbus.api.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mbus.api.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMbusApi<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mbus.api.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMbusApiKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mbus.api.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mbus.api.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMbusGetDeviceBaudrateAddressKey() {
  return ['mbus', '/mbus/get/:device/:baudrate/:address', 'POST'] as const
}

export function usePostMbusGetDeviceBaudrateAddress<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mbus.get)[':device'][':baudrate'][':address']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.mbus.get)[':device'][':baudrate'][':address']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMbusGetDeviceBaudrateAddressKey()
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
            (typeof client.mbus.get)[':device'][':baudrate'][':address']['$post']
          >
        },
      ) =>
        parseResponse(
          client.mbus.get[':device'][':baudrate'][':address'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostMbusGetMultiDeviceBaudrateAddressMaxframesKey() {
  return ['mbus', '/mbus/getMulti/:device/:baudrate/:address/:maxframes', 'POST'] as const
}

export function usePostMbusGetMultiDeviceBaudrateAddressMaxframes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.mbus.getMulti)[':device'][':baudrate'][':address'][':maxframes']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMbusGetMultiDeviceBaudrateAddressMaxframesKey()
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
            (typeof client.mbus.getMulti)[':device'][':baudrate'][':address'][':maxframes']['$post']
          >
        },
      ) =>
        parseResponse(
          client.mbus.getMulti[':device'][':baudrate'][':address'][':maxframes'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMbusHatKey() {
  return ['mbus', '/mbus/hat'] as const
}

export function useGetMbusHat<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mbus.hat.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMbusHatKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mbus.hat.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mbus.hat.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMbusHat<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mbus.hat.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMbusHatKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mbus.hat.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mbus.hat.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMbusHatOffKey() {
  return ['mbus', '/mbus/hat/off', 'POST'] as const
}

export function usePostMbusHatOff<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mbus.hat.off.$post>>>>
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMbusHatOffKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.mbus.hat.off.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMbusHatOnKey() {
  return ['mbus', '/mbus/hat/on', 'POST'] as const
}

export function usePostMbusHatOn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mbus.hat.on.$post>>>>>,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMbusHatOnKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.mbus.hat.on.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMbusScanDeviceBaudrateKey() {
  return ['mbus', '/mbus/scan/:device/:baudrate', 'POST'] as const
}

export function usePostMbusScanDeviceBaudrate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mbus.scan)[':device'][':baudrate']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.mbus.scan)[':device'][':baudrate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMbusScanDeviceBaudrateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.mbus.scan)[':device'][':baudrate']['$post']> },
      ) => parseResponse(client.mbus.scan[':device'][':baudrate'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
