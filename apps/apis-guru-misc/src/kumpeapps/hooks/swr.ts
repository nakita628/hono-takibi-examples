import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAppkeyKey() {
  return ['appkey'] as const
}

export function getAuthenticationKey() {
  return ['authentication'] as const
}

export function getAuthkeyKey() {
  return ['authkey'] as const
}

export function getKkidKey() {
  return ['kkid'] as const
}

export function getPutAppkeyKey() {
  return ['appkey', '/appkey', 'PUT'] as const
}

export function usePutAppkey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.appkey.$put>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.appkey.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAppkeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.appkey.$put> }) =>
        parseResponse(client.appkey.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAppkeyKey() {
  return ['appkey', '/appkey', 'POST'] as const
}

export function usePostAppkey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.appkey.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.appkey.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppkeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.appkey.$post> }) =>
        parseResponse(client.appkey.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchAppkeyKey() {
  return ['appkey', '/appkey', 'PATCH'] as const
}

export function usePatchAppkey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.appkey.$patch>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.appkey.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAppkeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.appkey.$patch> }) =>
        parseResponse(client.appkey.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutAuthenticationAppkeyKey() {
  return ['authentication', '/authentication/appkey', 'PUT'] as const
}

export function usePutAuthenticationAppkey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.authentication.appkey.$put>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.authentication.appkey.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAuthenticationAppkeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.authentication.appkey.$put> },
      ) => parseResponse(client.authentication.appkey.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAuthenticationAppkeyKey() {
  return ['authentication', '/authentication/appkey', 'POST'] as const
}

export function usePostAuthenticationAppkey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.authentication.appkey.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.authentication.appkey.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthenticationAppkeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.authentication.appkey.$post> },
      ) => parseResponse(client.authentication.appkey.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchAuthenticationAppkeyKey() {
  return ['authentication', '/authentication/appkey', 'PATCH'] as const
}

export function usePatchAuthenticationAppkey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.authentication.appkey.$patch>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.authentication.appkey.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAuthenticationAppkeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.authentication.appkey.$patch> },
      ) => parseResponse(client.authentication.appkey.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAuthenticationAuthkeyKey(
  args: InferRequestType<typeof client.authentication.authkey.$get>,
) {
  return ['authentication', '/authentication/authkey', args] as const
}

export function useGetAuthenticationAuthkey<TError = unknown>(
  args: InferRequestType<typeof client.authentication.authkey.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.authentication.authkey.$get>>>
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
        ? getGetAuthenticationAuthkeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.authentication.authkey.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.authentication.authkey.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAuthenticationAuthkey<TError = unknown>(
  args: InferRequestType<typeof client.authentication.authkey.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.authentication.authkey.$get>>>
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
        ? getGetAuthenticationAuthkeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.authentication.authkey.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.authentication.authkey.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutAuthenticationAuthkeyKey() {
  return ['authentication', '/authentication/authkey', 'PUT'] as const
}

export function usePutAuthenticationAuthkey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.authentication.authkey.$put>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.authentication.authkey.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAuthenticationAuthkeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.authentication.authkey.$put> },
      ) => parseResponse(client.authentication.authkey.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAuthenticationAuthkeyKey() {
  return ['authentication', '/authentication/authkey', 'POST'] as const
}

export function usePostAuthenticationAuthkey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.authentication.authkey.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.authentication.authkey.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthenticationAuthkeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.authentication.authkey.$post> },
      ) => parseResponse(client.authentication.authkey.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchAuthenticationAuthkeyKey() {
  return ['authentication', '/authentication/authkey', 'PATCH'] as const
}

export function usePatchAuthenticationAuthkey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.authentication.authkey.$patch>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.authentication.authkey.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAuthenticationAuthkeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.authentication.authkey.$patch> },
      ) => parseResponse(client.authentication.authkey.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAuthenticationVerifyotpKey(
  args: InferRequestType<typeof client.authentication.verifyotp.$get>,
) {
  return ['authentication', '/authentication/verifyotp', args] as const
}

export function useGetAuthenticationVerifyotp<TError = unknown>(
  args: InferRequestType<typeof client.authentication.verifyotp.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.authentication.verifyotp.$get>>>
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
        ? getGetAuthenticationVerifyotpKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.authentication.verifyotp.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.authentication.verifyotp.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAuthenticationVerifyotp<TError = unknown>(
  args: InferRequestType<typeof client.authentication.verifyotp.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.authentication.verifyotp.$get>>>
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
        ? getGetAuthenticationVerifyotpKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.authentication.verifyotp.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.authentication.verifyotp.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAuthkeyKey(args: InferRequestType<typeof client.authkey.$get>) {
  return ['authkey', '/authkey', args] as const
}

export function useGetAuthkey<TError = unknown>(
  args: InferRequestType<typeof client.authkey.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authkey.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAuthkeyKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authkey.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.authkey.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetAuthkey<TError = unknown>(
  args: InferRequestType<typeof client.authkey.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authkey.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAuthkeyKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authkey.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.authkey.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPutAuthkeyKey() {
  return ['authkey', '/authkey', 'PUT'] as const
}

export function usePutAuthkey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authkey.$put>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.authkey.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAuthkeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.authkey.$put> }) =>
        parseResponse(client.authkey.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAuthkeyKey() {
  return ['authkey', '/authkey', 'POST'] as const
}

export function usePostAuthkey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authkey.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.authkey.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthkeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.authkey.$post> }) =>
        parseResponse(client.authkey.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchAuthkeyKey() {
  return ['authkey', '/authkey', 'PATCH'] as const
}

export function usePatchAuthkey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authkey.$patch>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.authkey.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAuthkeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.authkey.$patch> }) =>
        parseResponse(client.authkey.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetKkidAllowanceKey(args: InferRequestType<typeof client.kkid.allowance.$get>) {
  return ['kkid', '/kkid/allowance', args] as const
}

export function useGetKkidAllowance<TError = unknown>(
  args: InferRequestType<typeof client.kkid.allowance.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.allowance.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetKkidAllowanceKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.allowance.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.kkid.allowance.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKkidAllowance<TError = unknown>(
  args: InferRequestType<typeof client.kkid.allowance.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.allowance.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetKkidAllowanceKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.allowance.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.kkid.allowance.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostKkidAllowanceKey() {
  return ['kkid', '/kkid/allowance', 'POST'] as const
}

export function usePostKkidAllowance<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.allowance.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.kkid.allowance.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostKkidAllowanceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.kkid.allowance.$post> }) =>
        parseResponse(client.kkid.allowance.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostKkidApnsKey() {
  return ['kkid', '/kkid/apns', 'POST'] as const
}

export function usePostKkidApns<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.apns.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.kkid.apns.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostKkidApnsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.kkid.apns.$post> }) =>
        parseResponse(client.kkid.apns.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetKkidChorelistKey(args: InferRequestType<typeof client.kkid.chorelist.$get>) {
  return ['kkid', '/kkid/chorelist', args] as const
}

export function useGetKkidChorelist<TError = unknown>(
  args: InferRequestType<typeof client.kkid.chorelist.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.chorelist.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetKkidChorelistKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.chorelist.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.kkid.chorelist.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKkidChorelist<TError = unknown>(
  args: InferRequestType<typeof client.kkid.chorelist.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.chorelist.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetKkidChorelistKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.chorelist.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.kkid.chorelist.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutKkidChorelistKey() {
  return ['kkid', '/kkid/chorelist', 'PUT'] as const
}

export function usePutKkidChorelist<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.chorelist.$put>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.kkid.chorelist.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutKkidChorelistKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.kkid.chorelist.$put> }) =>
        parseResponse(client.kkid.chorelist.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostKkidChorelistKey() {
  return ['kkid', '/kkid/chorelist', 'POST'] as const
}

export function usePostKkidChorelist<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.chorelist.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.kkid.chorelist.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostKkidChorelistKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.kkid.chorelist.$post> }) =>
        parseResponse(client.kkid.chorelist.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteKkidChorelistKey() {
  return ['kkid', '/kkid/chorelist', 'DELETE'] as const
}

export function useDeleteKkidChorelist<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.chorelist.$delete>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.kkid.chorelist.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteKkidChorelistKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.kkid.chorelist.$delete> }) =>
        parseResponse(client.kkid.chorelist.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostKkidMasteruserKey() {
  return ['kkid', '/kkid/masteruser', 'POST'] as const
}

export function usePostKkidMasteruser<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.masteruser.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.kkid.masteruser.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostKkidMasteruserKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.kkid.masteruser.$post> }) =>
        parseResponse(client.kkid.masteruser.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetKkidShareKey(args: InferRequestType<typeof client.kkid.share.$get>) {
  return ['kkid', '/kkid/share', args] as const
}

export function useGetKkidShare<TError = unknown>(
  args: InferRequestType<typeof client.kkid.share.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.share.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetKkidShareKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.share.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.kkid.share.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKkidShare<TError = unknown>(
  args: InferRequestType<typeof client.kkid.share.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.share.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetKkidShareKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.share.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.kkid.share.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetKkidUserKey(args: InferRequestType<typeof client.kkid.user.$get>) {
  return ['kkid', '/kkid/user', args] as const
}

export function useGetKkidUser<TError = unknown>(
  args: InferRequestType<typeof client.kkid.user.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.user.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetKkidUserKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.user.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.kkid.user.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKkidUser<TError = unknown>(
  args: InferRequestType<typeof client.kkid.user.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.user.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetKkidUserKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.user.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.kkid.user.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetKkidUserlistKey(args: InferRequestType<typeof client.kkid.userlist.$get>) {
  return ['kkid', '/kkid/userlist', args] as const
}

export function useGetKkidUserlist<TError = unknown>(
  args: InferRequestType<typeof client.kkid.userlist.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.userlist.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetKkidUserlistKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.userlist.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.kkid.userlist.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKkidUserlist<TError = unknown>(
  args: InferRequestType<typeof client.kkid.userlist.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.userlist.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetKkidUserlistKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.userlist.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.kkid.userlist.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutKkidUserlistKey() {
  return ['kkid', '/kkid/userlist', 'PUT'] as const
}

export function usePutKkidUserlist<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.userlist.$put>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.kkid.userlist.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutKkidUserlistKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.kkid.userlist.$put> }) =>
        parseResponse(client.kkid.userlist.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostKkidUserlistKey() {
  return ['kkid', '/kkid/userlist', 'POST'] as const
}

export function usePostKkidUserlist<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.userlist.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.kkid.userlist.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostKkidUserlistKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.kkid.userlist.$post> }) =>
        parseResponse(client.kkid.userlist.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteKkidUserlistKey() {
  return ['kkid', '/kkid/userlist', 'DELETE'] as const
}

export function useDeleteKkidUserlist<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.userlist.$delete>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.kkid.userlist.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteKkidUserlistKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.kkid.userlist.$delete> }) =>
        parseResponse(client.kkid.userlist.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetKkidWishlistKey(args: InferRequestType<typeof client.kkid.wishlist.$get>) {
  return ['kkid', '/kkid/wishlist', args] as const
}

export function useGetKkidWishlist<TError = unknown>(
  args: InferRequestType<typeof client.kkid.wishlist.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.wishlist.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetKkidWishlistKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.wishlist.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.kkid.wishlist.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKkidWishlist<TError = unknown>(
  args: InferRequestType<typeof client.kkid.wishlist.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.wishlist.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetKkidWishlistKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.wishlist.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.kkid.wishlist.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutKkidWishlistKey() {
  return ['kkid', '/kkid/wishlist', 'PUT'] as const
}

export function usePutKkidWishlist<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.wishlist.$put>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.kkid.wishlist.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutKkidWishlistKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.kkid.wishlist.$put> }) =>
        parseResponse(client.kkid.wishlist.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostKkidWishlistKey() {
  return ['kkid', '/kkid/wishlist', 'POST'] as const
}

export function usePostKkidWishlist<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.wishlist.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.kkid.wishlist.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostKkidWishlistKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.kkid.wishlist.$post> }) =>
        parseResponse(client.kkid.wishlist.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteKkidWishlistKey() {
  return ['kkid', '/kkid/wishlist', 'DELETE'] as const
}

export function useDeleteKkidWishlist<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.wishlist.$delete>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.kkid.wishlist.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteKkidWishlistKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.kkid.wishlist.$delete> }) =>
        parseResponse(client.kkid.wishlist.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
