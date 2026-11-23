import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV2beta1Key() {
  return ['v2beta1'] as const
}

export function getGetV2beta1NameKey(
  args: InferRequestType<(typeof client.v2beta1)[':name']['$get']>,
) {
  return ['v2beta1', '/v2beta1/:name', args] as const
}

export function useGetV2beta1Name<TError = unknown>(
  args: InferRequestType<(typeof client.v2beta1)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2beta1)[':name']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2beta1NameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2beta1)[':name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2beta1[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2beta1Name<TError = unknown>(
  args: InferRequestType<(typeof client.v2beta1)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2beta1)[':name']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2beta1NameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2beta1)[':name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2beta1[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2beta1NameKey() {
  return ['v2beta1', '/v2beta1/:name', 'DELETE'] as const
}

export function useDeleteV2beta1Name<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2beta1)[':name']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2beta1)[':name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2beta1NameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2beta1)[':name']['$delete']> },
      ) => parseResponse(client.v2beta1[':name'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV2beta1NameKey() {
  return ['v2beta1', '/v2beta1/:name', 'PATCH'] as const
}

export function usePatchV2beta1Name<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2beta1)[':name']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2beta1)[':name']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV2beta1NameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2beta1)[':name']['$patch']> },
      ) => parseResponse(client.v2beta1[':name'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2beta1ParentTraceSinksKey(
  args: InferRequestType<(typeof client.v2beta1)[':parent']['traceSinks']['$get']>,
) {
  return ['v2beta1', '/v2beta1/:parent/traceSinks', args] as const
}

export function useGetV2beta1ParentTraceSinks<TError = unknown>(
  args: InferRequestType<(typeof client.v2beta1)[':parent']['traceSinks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2beta1)[':parent']['traceSinks']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2beta1ParentTraceSinksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2beta1)[':parent']['traceSinks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2beta1[':parent'].traceSinks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2beta1ParentTraceSinks<TError = unknown>(
  args: InferRequestType<(typeof client.v2beta1)[':parent']['traceSinks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2beta1)[':parent']['traceSinks']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2beta1ParentTraceSinksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2beta1)[':parent']['traceSinks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2beta1[':parent'].traceSinks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2beta1ParentTraceSinksKey() {
  return ['v2beta1', '/v2beta1/:parent/traceSinks', 'POST'] as const
}

export function usePostV2beta1ParentTraceSinks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2beta1)[':parent']['traceSinks']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2beta1)[':parent']['traceSinks']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2beta1ParentTraceSinksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2beta1)[':parent']['traceSinks']['$post']> },
      ) => parseResponse(client.v2beta1[':parent'].traceSinks.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
