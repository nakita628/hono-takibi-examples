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
  return ['@connections'] as const
}

export function getConnectionsConnectionIdQueryKey(
  args: InferRequestType<(typeof client)['@connections'][':connectionId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['@connections', '/@connections/:connectionId', keyArgs] as const
}

export function getConnectionsConnectionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['@connections'][':connectionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['@connections'][':connectionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['@connections'][':connectionId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConnectionsConnectionIdQueryKey>
  >({
    queryKey: getConnectionsConnectionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['@connections'][':connectionId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useConnectionsConnectionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['@connections'][':connectionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['@connections'][':connectionId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['@connections'][':connectionId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConnectionsConnectionIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getConnectionsConnectionIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseConnectionsConnectionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['@connections'][':connectionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['@connections'][':connectionId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['@connections'][':connectionId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConnectionsConnectionIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getConnectionsConnectionIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostConnectionsConnectionIdMutationKey() {
  return ['@connections', '/@connections/:connectionId', 'POST'] as const
}

export function getPostConnectionsConnectionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['@connections'][':connectionId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['@connections'][':connectionId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostConnectionsConnectionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['@connections'][':connectionId']['$post']>,
    ) {
      return parseResponse(client['@connections'][':connectionId'].$post(args, options))
    },
  })
}

export function usePostConnectionsConnectionId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['@connections'][':connectionId']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['@connections'][':connectionId']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostConnectionsConnectionIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteConnectionsConnectionIdMutationKey() {
  return ['@connections', '/@connections/:connectionId', 'DELETE'] as const
}

export function getDeleteConnectionsConnectionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['@connections'][':connectionId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['@connections'][':connectionId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteConnectionsConnectionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['@connections'][':connectionId']['$delete']>,
    ) {
      return parseResponse(client['@connections'][':connectionId'].$delete(args, options))
    },
  })
}

export function useDeleteConnectionsConnectionId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['@connections'][':connectionId']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client)['@connections'][':connectionId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteConnectionsConnectionIdMutationOptions<TError, TOnMutateResult>(
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
