import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getConnectionsKey() {
  return ['@connections'] as const
}

export function getGetConnectionsConnectionIdKey(
  args: InferRequestType<(typeof client)['@connections'][':connectionId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['@connections', '/@connections/:connectionId', keyArgs] as const
}

export function useGetConnectionsConnectionId<TError = unknown>(
  args: InferRequestType<(typeof client)['@connections'][':connectionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['@connections'][':connectionId']['$get']>>
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
        ? getGetConnectionsConnectionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['@connections'][':connectionId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['@connections'][':connectionId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConnectionsConnectionId<TError = unknown>(
  args: InferRequestType<(typeof client)['@connections'][':connectionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['@connections'][':connectionId']['$get']>>
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
        ? getGetConnectionsConnectionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['@connections'][':connectionId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['@connections'][':connectionId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostConnectionsConnectionIdKey() {
  return ['@connections', '/@connections/:connectionId', 'POST'] as const
}

export function usePostConnectionsConnectionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['@connections'][':connectionId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['@connections'][':connectionId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConnectionsConnectionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['@connections'][':connectionId']['$post']> },
      ) => parseResponse(client['@connections'][':connectionId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteConnectionsConnectionIdKey() {
  return ['@connections', '/@connections/:connectionId', 'DELETE'] as const
}

export function useDeleteConnectionsConnectionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['@connections'][':connectionId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['@connections'][':connectionId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteConnectionsConnectionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['@connections'][':connectionId']['$delete']> },
      ) => parseResponse(client['@connections'][':connectionId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
