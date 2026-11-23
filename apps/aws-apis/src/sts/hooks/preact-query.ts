import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/preact-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/preact-query'
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

export function getActionAssumeRoleQueryKey(
  args: InferRequestType<(typeof client)['#Action=AssumeRole']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=AssumeRole', '/#Action=AssumeRole', keyArgs] as const
}

export function getActionAssumeRoleQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=AssumeRole']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=AssumeRole']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=AssumeRole']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionAssumeRoleQueryKey>
  >({
    queryKey: getActionAssumeRoleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=AssumeRole'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useActionAssumeRole<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=AssumeRole']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=AssumeRole']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=AssumeRole']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionAssumeRoleQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getActionAssumeRoleQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseActionAssumeRole<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=AssumeRole']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=AssumeRole']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=AssumeRole']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionAssumeRoleQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getActionAssumeRoleQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostActionAssumeRoleMutationKey() {
  return ['#Action=AssumeRole', '/#Action=AssumeRole', 'POST'] as const
}

export function getPostActionAssumeRoleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=AssumeRole']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=AssumeRole']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionAssumeRoleMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=AssumeRole']['$post']>) {
      return parseResponse(client['#Action=AssumeRole'].$post(args, options))
    },
  })
}

export function usePostActionAssumeRole<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=AssumeRole']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=AssumeRole']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionAssumeRoleMutationOptions<TError, TOnMutateResult>(
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

export function getActionAssumeRoleWithSAMLQueryKey(
  args: InferRequestType<(typeof client)['#Action=AssumeRoleWithSAML']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=AssumeRoleWithSAML', '/#Action=AssumeRoleWithSAML', keyArgs] as const
}

export function getActionAssumeRoleWithSAMLQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=AssumeRoleWithSAML']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=AssumeRoleWithSAML']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=AssumeRoleWithSAML']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionAssumeRoleWithSAMLQueryKey>
  >({
    queryKey: getActionAssumeRoleWithSAMLQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=AssumeRoleWithSAML'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionAssumeRoleWithSAML<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=AssumeRoleWithSAML']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=AssumeRoleWithSAML']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=AssumeRoleWithSAML']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionAssumeRoleWithSAMLQueryKey>
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
      ...getActionAssumeRoleWithSAMLQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionAssumeRoleWithSAML<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=AssumeRoleWithSAML']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=AssumeRoleWithSAML']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=AssumeRoleWithSAML']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionAssumeRoleWithSAMLQueryKey>
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
      ...getActionAssumeRoleWithSAMLQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostActionAssumeRoleWithSAMLMutationKey() {
  return ['#Action=AssumeRoleWithSAML', '/#Action=AssumeRoleWithSAML', 'POST'] as const
}

export function getPostActionAssumeRoleWithSAMLMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=AssumeRoleWithSAML']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=AssumeRoleWithSAML']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionAssumeRoleWithSAMLMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=AssumeRoleWithSAML']['$post']>,
    ) {
      return parseResponse(client['#Action=AssumeRoleWithSAML'].$post(args, options))
    },
  })
}

export function usePostActionAssumeRoleWithSAML<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=AssumeRoleWithSAML']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=AssumeRoleWithSAML']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionAssumeRoleWithSAMLMutationOptions<TError, TOnMutateResult>(
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

export function getActionAssumeRoleWithWebIdentityQueryKey(
  args: InferRequestType<(typeof client)['#Action=AssumeRoleWithWebIdentity']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=AssumeRoleWithWebIdentity',
    '/#Action=AssumeRoleWithWebIdentity',
    keyArgs,
  ] as const
}

export function getActionAssumeRoleWithWebIdentityQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=AssumeRoleWithWebIdentity']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=AssumeRoleWithWebIdentity']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=AssumeRoleWithWebIdentity']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionAssumeRoleWithWebIdentityQueryKey>
  >({
    queryKey: getActionAssumeRoleWithWebIdentityQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=AssumeRoleWithWebIdentity'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionAssumeRoleWithWebIdentity<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=AssumeRoleWithWebIdentity']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=AssumeRoleWithWebIdentity']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=AssumeRoleWithWebIdentity']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionAssumeRoleWithWebIdentityQueryKey>
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
      ...getActionAssumeRoleWithWebIdentityQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionAssumeRoleWithWebIdentity<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=AssumeRoleWithWebIdentity']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=AssumeRoleWithWebIdentity']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=AssumeRoleWithWebIdentity']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionAssumeRoleWithWebIdentityQueryKey>
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
      ...getActionAssumeRoleWithWebIdentityQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostActionAssumeRoleWithWebIdentityMutationKey() {
  return [
    '#Action=AssumeRoleWithWebIdentity',
    '/#Action=AssumeRoleWithWebIdentity',
    'POST',
  ] as const
}

export function getPostActionAssumeRoleWithWebIdentityMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=AssumeRoleWithWebIdentity']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=AssumeRoleWithWebIdentity']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionAssumeRoleWithWebIdentityMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=AssumeRoleWithWebIdentity']['$post']>,
    ) {
      return parseResponse(client['#Action=AssumeRoleWithWebIdentity'].$post(args, options))
    },
  })
}

export function usePostActionAssumeRoleWithWebIdentity<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=AssumeRoleWithWebIdentity']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=AssumeRoleWithWebIdentity']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionAssumeRoleWithWebIdentityMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionDecodeAuthorizationMessageQueryKey(
  args: InferRequestType<(typeof client)['#Action=DecodeAuthorizationMessage']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DecodeAuthorizationMessage',
    '/#Action=DecodeAuthorizationMessage',
    keyArgs,
  ] as const
}

export function getActionDecodeAuthorizationMessageQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DecodeAuthorizationMessage']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DecodeAuthorizationMessage']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DecodeAuthorizationMessage']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDecodeAuthorizationMessageQueryKey>
  >({
    queryKey: getActionDecodeAuthorizationMessageQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DecodeAuthorizationMessage'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionDecodeAuthorizationMessage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DecodeAuthorizationMessage']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DecodeAuthorizationMessage']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DecodeAuthorizationMessage']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDecodeAuthorizationMessageQueryKey>
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
      ...getActionDecodeAuthorizationMessageQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionDecodeAuthorizationMessage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DecodeAuthorizationMessage']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DecodeAuthorizationMessage']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DecodeAuthorizationMessage']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDecodeAuthorizationMessageQueryKey>
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
      ...getActionDecodeAuthorizationMessageQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostActionDecodeAuthorizationMessageMutationKey() {
  return [
    '#Action=DecodeAuthorizationMessage',
    '/#Action=DecodeAuthorizationMessage',
    'POST',
  ] as const
}

export function getPostActionDecodeAuthorizationMessageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DecodeAuthorizationMessage']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DecodeAuthorizationMessage']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDecodeAuthorizationMessageMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DecodeAuthorizationMessage']['$post']>,
    ) {
      return parseResponse(client['#Action=DecodeAuthorizationMessage'].$post(args, options))
    },
  })
}

export function usePostActionDecodeAuthorizationMessage<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DecodeAuthorizationMessage']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DecodeAuthorizationMessage']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDecodeAuthorizationMessageMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionGetAccessKeyInfoQueryKey(
  args: InferRequestType<(typeof client)['#Action=GetAccessKeyInfo']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=GetAccessKeyInfo', '/#Action=GetAccessKeyInfo', keyArgs] as const
}

export function getActionGetAccessKeyInfoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetAccessKeyInfo']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=GetAccessKeyInfo']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetAccessKeyInfo']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionGetAccessKeyInfoQueryKey>
  >({
    queryKey: getActionGetAccessKeyInfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=GetAccessKeyInfo'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionGetAccessKeyInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetAccessKeyInfo']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=GetAccessKeyInfo']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=GetAccessKeyInfo']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionGetAccessKeyInfoQueryKey>
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
      ...getActionGetAccessKeyInfoQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionGetAccessKeyInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetAccessKeyInfo']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=GetAccessKeyInfo']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=GetAccessKeyInfo']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionGetAccessKeyInfoQueryKey>
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
      ...getActionGetAccessKeyInfoQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostActionGetAccessKeyInfoMutationKey() {
  return ['#Action=GetAccessKeyInfo', '/#Action=GetAccessKeyInfo', 'POST'] as const
}

export function getPostActionGetAccessKeyInfoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetAccessKeyInfo']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=GetAccessKeyInfo']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionGetAccessKeyInfoMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=GetAccessKeyInfo']['$post']>) {
      return parseResponse(client['#Action=GetAccessKeyInfo'].$post(args, options))
    },
  })
}

export function usePostActionGetAccessKeyInfo<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=GetAccessKeyInfo']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=GetAccessKeyInfo']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionGetAccessKeyInfoMutationOptions<TError, TOnMutateResult>(
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

export function getActionGetCallerIdentityQueryKey(
  args: InferRequestType<(typeof client)['#Action=GetCallerIdentity']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=GetCallerIdentity', '/#Action=GetCallerIdentity', keyArgs] as const
}

export function getActionGetCallerIdentityQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=GetCallerIdentity']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=GetCallerIdentity']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetCallerIdentity']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionGetCallerIdentityQueryKey>
  >({
    queryKey: getActionGetCallerIdentityQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=GetCallerIdentity'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionGetCallerIdentity<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=GetCallerIdentity']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=GetCallerIdentity']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=GetCallerIdentity']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionGetCallerIdentityQueryKey>
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
      ...getActionGetCallerIdentityQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionGetCallerIdentity<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=GetCallerIdentity']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=GetCallerIdentity']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=GetCallerIdentity']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionGetCallerIdentityQueryKey>
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
      ...getActionGetCallerIdentityQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostActionGetCallerIdentityMutationKey() {
  return ['#Action=GetCallerIdentity', '/#Action=GetCallerIdentity', 'POST'] as const
}

export function getPostActionGetCallerIdentityMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetCallerIdentity']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=GetCallerIdentity']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionGetCallerIdentityMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=GetCallerIdentity']['$post']>,
    ) {
      return parseResponse(client['#Action=GetCallerIdentity'].$post(args, options))
    },
  })
}

export function usePostActionGetCallerIdentity<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=GetCallerIdentity']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=GetCallerIdentity']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionGetCallerIdentityMutationOptions<TError, TOnMutateResult>(
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

export function getActionGetFederationTokenQueryKey(
  args: InferRequestType<(typeof client)['#Action=GetFederationToken']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=GetFederationToken', '/#Action=GetFederationToken', keyArgs] as const
}

export function getActionGetFederationTokenQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=GetFederationToken']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=GetFederationToken']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetFederationToken']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionGetFederationTokenQueryKey>
  >({
    queryKey: getActionGetFederationTokenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=GetFederationToken'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionGetFederationToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=GetFederationToken']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=GetFederationToken']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=GetFederationToken']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionGetFederationTokenQueryKey>
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
      ...getActionGetFederationTokenQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionGetFederationToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=GetFederationToken']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=GetFederationToken']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=GetFederationToken']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionGetFederationTokenQueryKey>
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
      ...getActionGetFederationTokenQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostActionGetFederationTokenMutationKey() {
  return ['#Action=GetFederationToken', '/#Action=GetFederationToken', 'POST'] as const
}

export function getPostActionGetFederationTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetFederationToken']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=GetFederationToken']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionGetFederationTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=GetFederationToken']['$post']>,
    ) {
      return parseResponse(client['#Action=GetFederationToken'].$post(args, options))
    },
  })
}

export function usePostActionGetFederationToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=GetFederationToken']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=GetFederationToken']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionGetFederationTokenMutationOptions<TError, TOnMutateResult>(
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

export function getActionGetSessionTokenQueryKey(
  args: InferRequestType<(typeof client)['#Action=GetSessionToken']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=GetSessionToken', '/#Action=GetSessionToken', keyArgs] as const
}

export function getActionGetSessionTokenQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetSessionToken']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=GetSessionToken']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetSessionToken']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionGetSessionTokenQueryKey>
  >({
    queryKey: getActionGetSessionTokenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=GetSessionToken'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionGetSessionToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetSessionToken']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=GetSessionToken']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=GetSessionToken']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionGetSessionTokenQueryKey>
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
      ...getActionGetSessionTokenQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionGetSessionToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetSessionToken']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=GetSessionToken']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=GetSessionToken']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionGetSessionTokenQueryKey>
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
      ...getActionGetSessionTokenQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostActionGetSessionTokenMutationKey() {
  return ['#Action=GetSessionToken', '/#Action=GetSessionToken', 'POST'] as const
}

export function getPostActionGetSessionTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetSessionToken']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=GetSessionToken']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionGetSessionTokenMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=GetSessionToken']['$post']>) {
      return parseResponse(client['#Action=GetSessionToken'].$post(args, options))
    },
  })
}

export function usePostActionGetSessionToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=GetSessionToken']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=GetSessionToken']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionGetSessionTokenMutationOptions<TError, TOnMutateResult>(
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
