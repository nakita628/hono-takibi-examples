import {
  injectQuery,
  injectMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
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

export function injectConnectionsConnectionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['@connections'][':connectionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['@connections'][':connectionId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getConnectionsConnectionIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostConnectionsConnectionId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostConnectionsConnectionIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteConnectionsConnectionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteConnectionsConnectionIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
