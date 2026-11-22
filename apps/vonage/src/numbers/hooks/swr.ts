import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAccountKey() {
  return ['account'] as const
}

export function getNumberKey() {
  return ['number'] as const
}

export function getGetAccountNumbersKey(
  args: InferRequestType<typeof client.account.numbers.$get>,
) {
  return ['account', '/account/numbers', args] as const
}

export function useGetAccountNumbers<TError = unknown>(
  args: InferRequestType<typeof client.account.numbers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.numbers.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAccountNumbersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.numbers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.numbers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountNumbers<TError = unknown>(
  args: InferRequestType<typeof client.account.numbers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.numbers.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAccountNumbersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.numbers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.numbers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostNumberBuyKey() {
  return ['number', '/number/buy', 'POST'] as const
}

export function usePostNumberBuy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.number.buy.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.number.buy.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNumberBuyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.number.buy.$post> }) =>
        parseResponse(client.number.buy.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostNumberCancelKey() {
  return ['number', '/number/cancel', 'POST'] as const
}

export function usePostNumberCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.number.cancel.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.number.cancel.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNumberCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.number.cancel.$post> }) =>
        parseResponse(client.number.cancel.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNumberSearchKey(args: InferRequestType<typeof client.number.search.$get>) {
  return ['number', '/number/search', args] as const
}

export function useGetNumberSearch<TError = unknown>(
  args: InferRequestType<typeof client.number.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.number.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNumberSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.number.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.number.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNumberSearch<TError = unknown>(
  args: InferRequestType<typeof client.number.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.number.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNumberSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.number.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.number.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostNumberUpdateKey() {
  return ['number', '/number/update', 'POST'] as const
}

export function usePostNumberUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.number.update.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.number.update.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNumberUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.number.update.$post> }) =>
        parseResponse(client.number.update.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
