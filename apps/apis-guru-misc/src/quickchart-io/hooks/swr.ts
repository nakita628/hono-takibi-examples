import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getChartKey() {
  return ['chart'] as const
}

export function getQrKey() {
  return ['qr'] as const
}

export function getGetChartKey(args: InferRequestType<typeof client.chart.$get>) {
  return ['chart', '/chart', args] as const
}

export function useGetChart<TError = unknown>(
  args: InferRequestType<typeof client.chart.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chart.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetChartKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chart.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.chart.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetChart<TError = unknown>(
  args: InferRequestType<typeof client.chart.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chart.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetChartKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chart.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.chart.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostChartKey() {
  return ['chart', '/chart', 'POST'] as const
}

export function usePostChart<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chart.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.chart.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostChartKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.chart.$post> }) =>
        parseResponse(client.chart.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetQrKey(args: InferRequestType<typeof client.qr.$get>) {
  return ['qr', '/qr', args] as const
}

export function useGetQr<TError = unknown>(
  args: InferRequestType<typeof client.qr.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qr.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetQrKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qr.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.qr.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetQr<TError = unknown>(
  args: InferRequestType<typeof client.qr.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qr.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetQrKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qr.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.qr.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostQrKey() {
  return ['qr', '/qr', 'POST'] as const
}

export function usePostQr<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qr.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.qr.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostQrKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.qr.$post> }) =>
        parseResponse(client.qr.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
