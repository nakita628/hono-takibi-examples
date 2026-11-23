import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getActionAssumeRoleKey() {
  return ['#Action=AssumeRole'] as const
}

export function getActionAssumeRoleWithSAMLKey() {
  return ['#Action=AssumeRoleWithSAML'] as const
}

export function getActionAssumeRoleWithWebIdentityKey() {
  return ['#Action=AssumeRoleWithWebIdentity'] as const
}

export function getActionDecodeAuthorizationMessageKey() {
  return ['#Action=DecodeAuthorizationMessage'] as const
}

export function getActionGetAccessKeyInfoKey() {
  return ['#Action=GetAccessKeyInfo'] as const
}

export function getActionGetCallerIdentityKey() {
  return ['#Action=GetCallerIdentity'] as const
}

export function getActionGetFederationTokenKey() {
  return ['#Action=GetFederationToken'] as const
}

export function getActionGetSessionTokenKey() {
  return ['#Action=GetSessionToken'] as const
}

export function getGetActionAssumeRoleKey(
  args: InferRequestType<(typeof client)['#Action=AssumeRole']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=AssumeRole', '/#Action=AssumeRole', keyArgs] as const
}

export function useGetActionAssumeRole<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=AssumeRole']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=AssumeRole']['$get']>>>
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
        ? getGetActionAssumeRoleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=AssumeRole']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=AssumeRole'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionAssumeRole<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=AssumeRole']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=AssumeRole']['$get']>>>
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
        ? getGetActionAssumeRoleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=AssumeRole']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=AssumeRole'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionAssumeRoleKey() {
  return ['#Action=AssumeRole', '/#Action=AssumeRole', 'POST'] as const
}

export function usePostActionAssumeRole<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=AssumeRole']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=AssumeRole']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionAssumeRoleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=AssumeRole']['$post']> },
      ) => parseResponse(client['#Action=AssumeRole'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionAssumeRoleWithSAMLKey(
  args: InferRequestType<(typeof client)['#Action=AssumeRoleWithSAML']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=AssumeRoleWithSAML', '/#Action=AssumeRoleWithSAML', keyArgs] as const
}

export function useGetActionAssumeRoleWithSAML<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=AssumeRoleWithSAML']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=AssumeRoleWithSAML']['$get']>>
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
        ? getGetActionAssumeRoleWithSAMLKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=AssumeRoleWithSAML']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=AssumeRoleWithSAML'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionAssumeRoleWithSAML<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=AssumeRoleWithSAML']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=AssumeRoleWithSAML']['$get']>>
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
        ? getGetActionAssumeRoleWithSAMLKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=AssumeRoleWithSAML']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=AssumeRoleWithSAML'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionAssumeRoleWithSAMLKey() {
  return ['#Action=AssumeRoleWithSAML', '/#Action=AssumeRoleWithSAML', 'POST'] as const
}

export function usePostActionAssumeRoleWithSAML<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=AssumeRoleWithSAML']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=AssumeRoleWithSAML']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionAssumeRoleWithSAMLKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=AssumeRoleWithSAML']['$post']> },
      ) => parseResponse(client['#Action=AssumeRoleWithSAML'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionAssumeRoleWithWebIdentityKey(
  args: InferRequestType<(typeof client)['#Action=AssumeRoleWithWebIdentity']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=AssumeRoleWithWebIdentity',
    '/#Action=AssumeRoleWithWebIdentity',
    keyArgs,
  ] as const
}

export function useGetActionAssumeRoleWithWebIdentity<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=AssumeRoleWithWebIdentity']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=AssumeRoleWithWebIdentity']['$get']>>
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
        ? getGetActionAssumeRoleWithWebIdentityKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=AssumeRoleWithWebIdentity']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=AssumeRoleWithWebIdentity'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionAssumeRoleWithWebIdentity<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=AssumeRoleWithWebIdentity']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=AssumeRoleWithWebIdentity']['$get']>>
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
        ? getGetActionAssumeRoleWithWebIdentityKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=AssumeRoleWithWebIdentity']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=AssumeRoleWithWebIdentity'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionAssumeRoleWithWebIdentityKey() {
  return [
    '#Action=AssumeRoleWithWebIdentity',
    '/#Action=AssumeRoleWithWebIdentity',
    'POST',
  ] as const
}

export function usePostActionAssumeRoleWithWebIdentity<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=AssumeRoleWithWebIdentity']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=AssumeRoleWithWebIdentity']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionAssumeRoleWithWebIdentityKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=AssumeRoleWithWebIdentity']['$post']> },
      ) => parseResponse(client['#Action=AssumeRoleWithWebIdentity'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDecodeAuthorizationMessageKey(
  args: InferRequestType<(typeof client)['#Action=DecodeAuthorizationMessage']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DecodeAuthorizationMessage',
    '/#Action=DecodeAuthorizationMessage',
    keyArgs,
  ] as const
}

export function useGetActionDecodeAuthorizationMessage<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DecodeAuthorizationMessage']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DecodeAuthorizationMessage']['$get']>>
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
        ? getGetActionDecodeAuthorizationMessageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DecodeAuthorizationMessage']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DecodeAuthorizationMessage'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDecodeAuthorizationMessage<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DecodeAuthorizationMessage']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DecodeAuthorizationMessage']['$get']>>
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
        ? getGetActionDecodeAuthorizationMessageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DecodeAuthorizationMessage']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DecodeAuthorizationMessage'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDecodeAuthorizationMessageKey() {
  return [
    '#Action=DecodeAuthorizationMessage',
    '/#Action=DecodeAuthorizationMessage',
    'POST',
  ] as const
}

export function usePostActionDecodeAuthorizationMessage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DecodeAuthorizationMessage']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DecodeAuthorizationMessage']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDecodeAuthorizationMessageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=DecodeAuthorizationMessage']['$post']>
        },
      ) => parseResponse(client['#Action=DecodeAuthorizationMessage'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionGetAccessKeyInfoKey(
  args: InferRequestType<(typeof client)['#Action=GetAccessKeyInfo']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=GetAccessKeyInfo', '/#Action=GetAccessKeyInfo', keyArgs] as const
}

export function useGetActionGetAccessKeyInfo<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=GetAccessKeyInfo']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetAccessKeyInfo']['$get']>>
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
        ? getGetActionGetAccessKeyInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetAccessKeyInfo']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=GetAccessKeyInfo'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionGetAccessKeyInfo<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=GetAccessKeyInfo']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetAccessKeyInfo']['$get']>>
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
        ? getGetActionGetAccessKeyInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetAccessKeyInfo']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=GetAccessKeyInfo'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionGetAccessKeyInfoKey() {
  return ['#Action=GetAccessKeyInfo', '/#Action=GetAccessKeyInfo', 'POST'] as const
}

export function usePostActionGetAccessKeyInfo<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetAccessKeyInfo']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=GetAccessKeyInfo']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionGetAccessKeyInfoKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=GetAccessKeyInfo']['$post']> },
      ) => parseResponse(client['#Action=GetAccessKeyInfo'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionGetCallerIdentityKey(
  args: InferRequestType<(typeof client)['#Action=GetCallerIdentity']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=GetCallerIdentity', '/#Action=GetCallerIdentity', keyArgs] as const
}

export function useGetActionGetCallerIdentity<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=GetCallerIdentity']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetCallerIdentity']['$get']>>
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
        ? getGetActionGetCallerIdentityKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetCallerIdentity']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=GetCallerIdentity'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionGetCallerIdentity<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=GetCallerIdentity']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetCallerIdentity']['$get']>>
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
        ? getGetActionGetCallerIdentityKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetCallerIdentity']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=GetCallerIdentity'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionGetCallerIdentityKey() {
  return ['#Action=GetCallerIdentity', '/#Action=GetCallerIdentity', 'POST'] as const
}

export function usePostActionGetCallerIdentity<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetCallerIdentity']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=GetCallerIdentity']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionGetCallerIdentityKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=GetCallerIdentity']['$post']> },
      ) => parseResponse(client['#Action=GetCallerIdentity'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionGetFederationTokenKey(
  args: InferRequestType<(typeof client)['#Action=GetFederationToken']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=GetFederationToken', '/#Action=GetFederationToken', keyArgs] as const
}

export function useGetActionGetFederationToken<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=GetFederationToken']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetFederationToken']['$get']>>
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
        ? getGetActionGetFederationTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetFederationToken']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=GetFederationToken'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionGetFederationToken<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=GetFederationToken']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetFederationToken']['$get']>>
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
        ? getGetActionGetFederationTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetFederationToken']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=GetFederationToken'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionGetFederationTokenKey() {
  return ['#Action=GetFederationToken', '/#Action=GetFederationToken', 'POST'] as const
}

export function usePostActionGetFederationToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetFederationToken']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=GetFederationToken']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionGetFederationTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=GetFederationToken']['$post']> },
      ) => parseResponse(client['#Action=GetFederationToken'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionGetSessionTokenKey(
  args: InferRequestType<(typeof client)['#Action=GetSessionToken']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=GetSessionToken', '/#Action=GetSessionToken', keyArgs] as const
}

export function useGetActionGetSessionToken<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=GetSessionToken']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetSessionToken']['$get']>>
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
        ? getGetActionGetSessionTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetSessionToken']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=GetSessionToken'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionGetSessionToken<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=GetSessionToken']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetSessionToken']['$get']>>
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
        ? getGetActionGetSessionTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetSessionToken']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=GetSessionToken'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionGetSessionTokenKey() {
  return ['#Action=GetSessionToken', '/#Action=GetSessionToken', 'POST'] as const
}

export function usePostActionGetSessionToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetSessionToken']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=GetSessionToken']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionGetSessionTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=GetSessionToken']['$post']> },
      ) => parseResponse(client['#Action=GetSessionToken'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
