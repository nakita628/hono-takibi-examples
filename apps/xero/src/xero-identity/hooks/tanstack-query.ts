import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getConnectionsKey() {
  return ['Connections'] as const
}

export function getConnectionsQueryKey(args: InferRequestType<typeof client.Connections.$get>) {
  return ['Connections', '/Connections', args] as const
}

export function getConnectionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Connections.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.Connections.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Connections.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getConnectionsQueryKey>
  >({
    queryKey: getConnectionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Connections.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useConnections<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Connections.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.Connections.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Connections.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getConnectionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getConnectionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseConnections<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Connections.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.Connections.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Connections.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getConnectionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getConnectionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteConnectionsIdMutationKey() {
  return ['Connections', '/Connections/:id', 'DELETE'] as const
}

export function getDeleteConnectionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Connections)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.Connections)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteConnectionsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.Connections)[':id']['$delete']>) {
      return parseResponse(client.Connections[':id'].$delete(args, options))
    },
  })
}

export function useDeleteConnectionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Connections)[':id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.Connections)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteConnectionsIdMutationOptions<TError, TOnMutateResult>(
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
