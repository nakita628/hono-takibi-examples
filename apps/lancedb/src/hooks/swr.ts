import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getGetV1TableIndexKey(args: InferRequestType<typeof client.v1.table.index.$get>) {
  return ['v1', '/v1/table/', args] as const
}

export function useGetV1TableIndex<TError = unknown>(
  args: InferRequestType<typeof client.v1.table.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.table.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1TableIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.table.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.table.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1TableIndex<TError = unknown>(
  args: InferRequestType<typeof client.v1.table.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.table.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1TableIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.table.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.table.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1TableNameCreateIndexKey() {
  return ['v1', '/v1/table/:name/create/', 'POST'] as const
}

export function usePostV1TableNameCreateIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.table)[':name']['create']['index']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.table)[':name']['create']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TableNameCreateIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.table)[':name']['create']['index']['$post']> },
      ) => parseResponse(client.v1.table[':name'].create.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1TableNameQueryIndexKey() {
  return ['v1', '/v1/table/:name/query/', 'POST'] as const
}

export function usePostV1TableNameQueryIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.table)[':name']['query']['index']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.table)[':name']['query']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TableNameQueryIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.table)[':name']['query']['index']['$post']> },
      ) => parseResponse(client.v1.table[':name'].query.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1TableNameInsertIndexKey() {
  return ['v1', '/v1/table/:name/insert/', 'POST'] as const
}

export function usePostV1TableNameInsertIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.table)[':name']['insert']['index']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.table)[':name']['insert']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TableNameInsertIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.table)[':name']['insert']['index']['$post']> },
      ) => parseResponse(client.v1.table[':name'].insert.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1TableNameMergeInsertIndexKey() {
  return ['v1', '/v1/table/:name/merge_insert/', 'POST'] as const
}

export function usePostV1TableNameMergeInsertIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.table)[':name']['merge_insert']['index']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.table)[':name']['merge_insert']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TableNameMergeInsertIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.table)[':name']['merge_insert']['index']['$post']>
        },
      ) => parseResponse(client.v1.table[':name'].merge_insert.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1TableNameDeleteIndexKey() {
  return ['v1', '/v1/table/:name/delete/', 'POST'] as const
}

export function usePostV1TableNameDeleteIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.table)[':name']['delete']['index']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.table)[':name']['delete']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TableNameDeleteIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.table)[':name']['delete']['index']['$post']> },
      ) => parseResponse(client.v1.table[':name'].delete.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1TableNameDropIndexKey() {
  return ['v1', '/v1/table/:name/drop/', 'POST'] as const
}

export function usePostV1TableNameDropIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.table)[':name']['drop']['index']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.table)[':name']['drop']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TableNameDropIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.table)[':name']['drop']['index']['$post']> },
      ) => parseResponse(client.v1.table[':name'].drop.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1TableNameDescribeIndexKey() {
  return ['v1', '/v1/table/:name/describe/', 'POST'] as const
}

export function usePostV1TableNameDescribeIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.table)[':name']['describe']['index']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.table)[':name']['describe']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TableNameDescribeIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.table)[':name']['describe']['index']['$post']>
        },
      ) => parseResponse(client.v1.table[':name'].describe.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1TableNameIndexListIndexKey() {
  return ['v1', '/v1/table/:name/index/list/', 'POST'] as const
}

export function usePostV1TableNameIndexListIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.table)[':name']['index']['list']['index']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.table)[':name']['index']['list']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TableNameIndexListIndexKey()
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
            (typeof client.v1.table)[':name']['index']['list']['index']['$post']
          >
        },
      ) => parseResponse(client.v1.table[':name'].index.list.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1TableNameCreateIndexIndexKey() {
  return ['v1', '/v1/table/:name/create_index/', 'POST'] as const
}

export function usePostV1TableNameCreateIndexIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.table)[':name']['create_index']['index']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.table)[':name']['create_index']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TableNameCreateIndexIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.table)[':name']['create_index']['index']['$post']>
        },
      ) => parseResponse(client.v1.table[':name'].create_index.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1TableNameCreateScalarIndexIndexKey() {
  return ['v1', '/v1/table/:name/create_scalar_index/', 'POST'] as const
}

export function usePostV1TableNameCreateScalarIndexIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.table)[':name']['create_scalar_index']['index']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.table)[':name']['create_scalar_index']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TableNameCreateScalarIndexIndexKey()
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
            (typeof client.v1.table)[':name']['create_scalar_index']['index']['$post']
          >
        },
      ) =>
        parseResponse(client.v1.table[':name'].create_scalar_index.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1TableNameIndexIndexNameDropIndexKey() {
  return ['v1', '/v1/table/:name/index/:index_name/drop/', 'POST'] as const
}

export function usePostV1TableNameIndexIndexNameDropIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.table)[':name']['index'][':index_name']['drop']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.table)[':name']['index'][':index_name']['drop']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TableNameIndexIndexNameDropIndexKey()
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
            (typeof client.v1.table)[':name']['index'][':index_name']['drop']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.table[':name'].index[':index_name'].drop.index.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
