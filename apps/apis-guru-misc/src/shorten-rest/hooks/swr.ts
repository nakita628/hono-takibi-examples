import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAliasesKey() {
  return ['aliases'] as const
}

export function getClicksKey() {
  return ['clicks'] as const
}

export function getGetAliasesKey(args: InferRequestType<typeof client.aliases.$get>) {
  return ['aliases', '/aliases', args] as const
}

export function useGetAliases<TError = unknown>(
  args: InferRequestType<typeof client.aliases.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aliases.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAliasesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aliases.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.aliases.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetAliases<TError = unknown>(
  args: InferRequestType<typeof client.aliases.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aliases.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAliasesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aliases.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.aliases.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPutAliasesKey() {
  return ['aliases', '/aliases', 'PUT'] as const
}

export function usePutAliases<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aliases.$put>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.aliases.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAliasesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.aliases.$put> }) =>
        parseResponse(client.aliases.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAliasesKey() {
  return ['aliases', '/aliases', 'POST'] as const
}

export function usePostAliases<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aliases.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.aliases.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAliasesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.aliases.$post> }) =>
        parseResponse(client.aliases.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAliasesKey() {
  return ['aliases', '/aliases', 'DELETE'] as const
}

export function useDeleteAliases<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aliases.$delete>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.aliases.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAliasesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.aliases.$delete> }) =>
        parseResponse(client.aliases.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAliasesAllKey(args: InferRequestType<typeof client.aliases.all.$get>) {
  return ['aliases', '/aliases/all', args] as const
}

export function useGetAliasesAll<TError = unknown>(
  args: InferRequestType<typeof client.aliases.all.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aliases.all.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAliasesAllKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aliases.all.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.aliases.all.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAliasesAll<TError = unknown>(
  args: InferRequestType<typeof client.aliases.all.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aliases.all.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAliasesAllKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aliases.all.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.aliases.all.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetClicksKey(args: InferRequestType<typeof client.clicks.$get>) {
  return ['clicks', '/clicks', args] as const
}

export function useGetClicks<TError = unknown>(
  args: InferRequestType<typeof client.clicks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clicks.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetClicksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clicks.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.clicks.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetClicks<TError = unknown>(
  args: InferRequestType<typeof client.clicks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clicks.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetClicksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clicks.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.clicks.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostClicksPgKey() {
  return ['clicks', '/clicks/pg', 'POST'] as const
}

export function usePostClicksPg<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clicks.pg.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.clicks.pg.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostClicksPgKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.clicks.pg.$post> }) =>
        parseResponse(client.clicks.pg.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
