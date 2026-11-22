import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getKeyKey() {
  return ['key'] as const
}

export function getLoginKey() {
  return ['login'] as const
}

export function getScopeKey() {
  return ['scope'] as const
}

export function getPostKeyKey() {
  return ['key', '/key', 'POST'] as const
}

export function usePostKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.key.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.key.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.key.$post> }) =>
        parseResponse(client.key.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteKeyKey() {
  return ['key', '/key', 'DELETE'] as const
}

export function useDeleteKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.key.$delete>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.key.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.key.$delete> }) =>
        parseResponse(client.key.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetKeyPKKey(args: InferRequestType<(typeof client.key)[':PK']['$get']>) {
  return ['key', '/key/:PK', args] as const
}

export function useGetKeyPK<TError = unknown>(
  args: InferRequestType<(typeof client.key)[':PK']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.key)[':PK']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetKeyPKKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.key)[':PK']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.key[':PK'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKeyPK<TError = unknown>(
  args: InferRequestType<(typeof client.key)[':PK']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.key)[':PK']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetKeyPKKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.key)[':PK']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.key[':PK'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutKeyPKKey() {
  return ['key', '/key/:PK', 'PUT'] as const
}

export function usePutKeyPK<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.key)[':PK']['$put']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.key)[':PK']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutKeyPKKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.key)[':PK']['$put']> }) =>
        parseResponse(client.key[':PK'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostKeyPKKey() {
  return ['key', '/key/:PK', 'POST'] as const
}

export function usePostKeyPK<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.key)[':PK']['$post']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.key)[':PK']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostKeyPKKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.key)[':PK']['$post']> }) =>
        parseResponse(client.key[':PK'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteKeyPKKey() {
  return ['key', '/key/:PK', 'DELETE'] as const
}

export function useDeleteKeyPK<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.key)[':PK']['$delete']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.key)[':PK']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteKeyPKKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.key)[':PK']['$delete']> }) =>
        parseResponse(client.key[':PK'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getHeadKeyPKKey() {
  return ['key', '/key/:PK', 'HEAD'] as const
}

export function useHeadKeyPK<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.key)[':PK']['$head']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.key)[':PK']['$head']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getHeadKeyPKKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.key)[':PK']['$head']> }) =>
        parseResponse(client.key[':PK'].$head(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostLoginKey() {
  return ['login', '/login', 'POST'] as const
}

export function usePostLogin<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.login.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.login.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLoginKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.login.$post> }) =>
        parseResponse(client.login.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostScopeKey() {
  return ['scope', '/scope', 'POST'] as const
}

export function usePostScope<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scope.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.scope.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostScopeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.scope.$post> }) =>
        parseResponse(client.scope.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetScopeJobKey(args: InferRequestType<(typeof client.scope)[':job']['$get']>) {
  return ['scope', '/scope/:job', args] as const
}

export function useGetScopeJob<TError = unknown>(
  args: InferRequestType<(typeof client.scope)[':job']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.scope)[':job']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetScopeJobKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.scope)[':job']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.scope[':job'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetScopeJob<TError = unknown>(
  args: InferRequestType<(typeof client.scope)[':job']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.scope)[':job']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetScopeJobKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.scope)[':job']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.scope[':job'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutScopeJobKey() {
  return ['scope', '/scope/:job', 'PUT'] as const
}

export function usePutScopeJob<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.scope)[':job']['$put']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.scope)[':job']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutScopeJobKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.scope)[':job']['$put']> }) =>
        parseResponse(client.scope[':job'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostScopeJobKey() {
  return ['scope', '/scope/:job', 'POST'] as const
}

export function usePostScopeJob<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.scope)[':job']['$post']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.scope)[':job']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostScopeJobKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.scope)[':job']['$post']> }) =>
        parseResponse(client.scope[':job'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteScopeJobKey() {
  return ['scope', '/scope/:job', 'DELETE'] as const
}

export function useDeleteScopeJob<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.scope)[':job']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.scope)[':job']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteScopeJobKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.scope)[':job']['$delete']> },
      ) => parseResponse(client.scope[':job'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getHeadScopeJobKey() {
  return ['scope', '/scope/:job', 'HEAD'] as const
}

export function useHeadScopeJob<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.scope)[':job']['$head']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.scope)[':job']['$head']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getHeadScopeJobKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.scope)[':job']['$head']> }) =>
        parseResponse(client.scope[':job'].$head(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
