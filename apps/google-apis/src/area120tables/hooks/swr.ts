import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1alpha1Key() {
  return ['v1alpha1'] as const
}

export function getGetV1alpha1TablesKey(
  args: InferRequestType<typeof client.v1alpha1.tables.$get>,
) {
  return ['v1alpha1', '/v1alpha1/tables', args] as const
}

export function useGetV1alpha1Tables<TError = unknown>(
  args: InferRequestType<typeof client.v1alpha1.tables.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1alpha1.tables.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1alpha1TablesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1alpha1.tables.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1alpha1.tables.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1alpha1Tables<TError = unknown>(
  args: InferRequestType<typeof client.v1alpha1.tables.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1alpha1.tables.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1alpha1TablesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1alpha1.tables.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1alpha1.tables.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1alpha1WorkspacesKey(
  args: InferRequestType<typeof client.v1alpha1.workspaces.$get>,
) {
  return ['v1alpha1', '/v1alpha1/workspaces', args] as const
}

export function useGetV1alpha1Workspaces<TError = unknown>(
  args: InferRequestType<typeof client.v1alpha1.workspaces.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1alpha1.workspaces.$get>>>
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
        ? getGetV1alpha1WorkspacesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1alpha1.workspaces.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1alpha1.workspaces.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1alpha1Workspaces<TError = unknown>(
  args: InferRequestType<typeof client.v1alpha1.workspaces.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1alpha1.workspaces.$get>>>
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
        ? getGetV1alpha1WorkspacesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1alpha1.workspaces.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1alpha1.workspaces.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1alpha1NameKey(
  args: InferRequestType<(typeof client.v1alpha1)[':name']['$get']>,
) {
  return ['v1alpha1', '/v1alpha1/:name', args] as const
}

export function useGetV1alpha1Name<TError = unknown>(
  args: InferRequestType<(typeof client.v1alpha1)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1alpha1)[':name']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1alpha1NameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1alpha1)[':name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1alpha1[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1alpha1Name<TError = unknown>(
  args: InferRequestType<(typeof client.v1alpha1)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1alpha1)[':name']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1alpha1NameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1alpha1)[':name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1alpha1[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1alpha1NameKey() {
  return ['v1alpha1', '/v1alpha1/:name', 'DELETE'] as const
}

export function useDeleteV1alpha1Name<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1alpha1)[':name']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1alpha1)[':name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1alpha1NameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1alpha1)[':name']['$delete']> },
      ) => parseResponse(client.v1alpha1[':name'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV1alpha1NameKey() {
  return ['v1alpha1', '/v1alpha1/:name', 'PATCH'] as const
}

export function usePatchV1alpha1Name<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1alpha1)[':name']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1alpha1)[':name']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1alpha1NameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1alpha1)[':name']['$patch']> },
      ) => parseResponse(client.v1alpha1[':name'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1alpha1ParentRowsKey(
  args: InferRequestType<(typeof client.v1alpha1)[':parent']['rows']['$get']>,
) {
  return ['v1alpha1', '/v1alpha1/:parent/rows', args] as const
}

export function useGetV1alpha1ParentRows<TError = unknown>(
  args: InferRequestType<(typeof client.v1alpha1)[':parent']['rows']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['rows']['$get']>>
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
        ? getGetV1alpha1ParentRowsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['rows']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1alpha1[':parent'].rows.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1alpha1ParentRows<TError = unknown>(
  args: InferRequestType<(typeof client.v1alpha1)[':parent']['rows']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['rows']['$get']>>
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
        ? getGetV1alpha1ParentRowsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['rows']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1alpha1[':parent'].rows.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1alpha1ParentRowsKey() {
  return ['v1alpha1', '/v1alpha1/:parent/rows', 'POST'] as const
}

export function usePostV1alpha1ParentRows<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['rows']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1alpha1)[':parent']['rows']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1alpha1ParentRowsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1alpha1)[':parent']['rows']['$post']> },
      ) => parseResponse(client.v1alpha1[':parent'].rows.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1alpha1ParentRowsBatchCreateKey() {
  return ['v1alpha1', '/v1alpha1/:parent/rows:batchCreate', 'POST'] as const
}

export function usePostV1alpha1ParentRowsBatchCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['rows:batchCreate']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1alpha1)[':parent']['rows:batchCreate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1alpha1ParentRowsBatchCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1alpha1)[':parent']['rows:batchCreate']['$post']>
        },
      ) => parseResponse(client.v1alpha1[':parent']['rows:batchCreate'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1alpha1ParentRowsBatchDeleteKey() {
  return ['v1alpha1', '/v1alpha1/:parent/rows:batchDelete', 'POST'] as const
}

export function usePostV1alpha1ParentRowsBatchDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['rows:batchDelete']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1alpha1)[':parent']['rows:batchDelete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1alpha1ParentRowsBatchDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1alpha1)[':parent']['rows:batchDelete']['$post']>
        },
      ) => parseResponse(client.v1alpha1[':parent']['rows:batchDelete'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1alpha1ParentRowsBatchUpdateKey() {
  return ['v1alpha1', '/v1alpha1/:parent/rows:batchUpdate', 'POST'] as const
}

export function usePostV1alpha1ParentRowsBatchUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['rows:batchUpdate']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1alpha1)[':parent']['rows:batchUpdate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1alpha1ParentRowsBatchUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1alpha1)[':parent']['rows:batchUpdate']['$post']>
        },
      ) => parseResponse(client.v1alpha1[':parent']['rows:batchUpdate'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
