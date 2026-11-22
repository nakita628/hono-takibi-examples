import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1alphaKey() {
  return ['v1alpha'] as const
}

export function getPostV1alphaNameActivateKey() {
  return ['v1alpha', '/v1alpha/:name:activate', 'POST'] as const
}

export function usePostV1alphaNameActivate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1alpha)[':name:activate']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1alpha)[':name:activate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1alphaNameActivateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1alpha)[':name:activate']['$post']> },
      ) => parseResponse(client.v1alpha[':name:activate'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1alphaNameArchiveKey() {
  return ['v1alpha', '/v1alpha/:name:archive', 'POST'] as const
}

export function usePostV1alphaNameArchive<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1alpha)[':name:archive']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1alpha)[':name:archive']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1alphaNameArchiveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1alpha)[':name:archive']['$post']> },
      ) => parseResponse(client.v1alpha[':name:archive'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1alphaParentBiddingFunctionsKey(
  args: InferRequestType<(typeof client.v1alpha)[':parent']['biddingFunctions']['$get']>,
) {
  return ['v1alpha', '/v1alpha/:parent/biddingFunctions', args] as const
}

export function useGetV1alphaParentBiddingFunctions<TError = unknown>(
  args: InferRequestType<(typeof client.v1alpha)[':parent']['biddingFunctions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1alpha)[':parent']['biddingFunctions']['$get']>>
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
        ? getGetV1alphaParentBiddingFunctionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1alpha)[':parent']['biddingFunctions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1alpha[':parent'].biddingFunctions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1alphaParentBiddingFunctions<TError = unknown>(
  args: InferRequestType<(typeof client.v1alpha)[':parent']['biddingFunctions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1alpha)[':parent']['biddingFunctions']['$get']>>
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
        ? getGetV1alphaParentBiddingFunctionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1alpha)[':parent']['biddingFunctions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1alpha[':parent'].biddingFunctions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1alphaParentBiddingFunctionsKey() {
  return ['v1alpha', '/v1alpha/:parent/biddingFunctions', 'POST'] as const
}

export function usePostV1alphaParentBiddingFunctions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1alpha)[':parent']['biddingFunctions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1alpha)[':parent']['biddingFunctions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1alphaParentBiddingFunctionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1alpha)[':parent']['biddingFunctions']['$post']>
        },
      ) => parseResponse(client.v1alpha[':parent'].biddingFunctions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
