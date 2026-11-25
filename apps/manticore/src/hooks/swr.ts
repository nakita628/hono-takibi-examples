import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAutocompleteKey() {
  return ['autocomplete'] as const
}

export function getBulkKey() {
  return ['bulk'] as const
}

export function getDeleteKey() {
  return ['delete'] as const
}

export function getInsertKey() {
  return ['insert'] as const
}

export function getPqKey() {
  return ['pq'] as const
}

export function getReplaceKey() {
  return ['replace'] as const
}

export function getSearchKey() {
  return ['search'] as const
}

export function getSqlKey() {
  return ['sql'] as const
}

export function getTokenKey() {
  return ['token'] as const
}

export function getUpdateKey() {
  return ['update'] as const
}

export function getTableKey() {
  return ['{table}'] as const
}

export function getPostSearchKey() {
  return ['search', '/search', 'POST'] as const
}

export function usePostSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.search.$post> }) =>
        parseResponse(client.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAutocompleteKey() {
  return ['autocomplete', '/autocomplete', 'POST'] as const
}

export function usePostAutocomplete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.autocomplete.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.autocomplete.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAutocompleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.autocomplete.$post> }) =>
        parseResponse(client.autocomplete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBulkKey() {
  return ['bulk', '/bulk', 'POST'] as const
}

export function usePostBulk<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bulk.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.bulk.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBulkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.bulk.$post> }) =>
        parseResponse(client.bulk.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDeleteKey() {
  return ['delete', '/delete', 'POST'] as const
}

export function usePostDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.delete.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.delete.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.delete.$post> }) =>
        parseResponse(client.delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostInsertKey() {
  return ['insert', '/insert', 'POST'] as const
}

export function usePostInsert<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.insert.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.insert.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInsertKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.insert.$post> }) =>
        parseResponse(client.insert.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPqTableSearchKey() {
  return ['pq', '/pq/:table/search', 'POST'] as const
}

export function usePostPqTableSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.pq)[':table']['search']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.pq)[':table']['search']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPqTableSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.pq)[':table']['search']['$post']> },
      ) => parseResponse(client.pq[':table'].search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostReplaceKey() {
  return ['replace', '/replace', 'POST'] as const
}

export function usePostReplace<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.replace.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.replace.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostReplaceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.replace.$post> }) =>
        parseResponse(client.replace.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSqlKey() {
  return ['sql', '/sql', 'POST'] as const
}

export function usePostSql<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sql.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.sql.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSqlKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.sql.$post> }) =>
        parseResponse(client.sql.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTokenKey() {
  return ['token', '/token', 'POST'] as const
}

export function usePostToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.token.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.token.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.token.$post> }) =>
        parseResponse(client.token.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUpdateKey() {
  return ['update', '/update', 'POST'] as const
}

export function usePostUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.update.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.update.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.update.$post> }) =>
        parseResponse(client.update.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTableUpdateIdKey() {
  return [':table', '/:table/_update/:id', 'POST'] as const
}

export function usePostTableUpdateId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':table']['_update'][':id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':table']['_update'][':id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTableUpdateIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':table']['_update'][':id']['$post']> },
      ) => parseResponse(client[':table']._update[':id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
