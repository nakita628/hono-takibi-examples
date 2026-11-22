import { useQuery, useMutation, mutationOptions } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=AssumeRole']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=AssumeRole', '/#Action=AssumeRole', keyArgs] as const
}

export function getActionAssumeRoleQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=AssumeRole']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionAssumeRoleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=AssumeRole'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionAssumeRole<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=AssumeRole']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=AssumeRole']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=AssumeRole']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=AssumeRole']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionAssumeRoleQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=AssumeRole']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionAssumeRoleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionAssumeRoleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=AssumeRole'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=AssumeRoleWithSAML']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=AssumeRoleWithSAML', '/#Action=AssumeRoleWithSAML', keyArgs] as const
}

export function getActionAssumeRoleWithSAMLQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=AssumeRoleWithSAML']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionAssumeRoleWithSAMLQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=AssumeRoleWithSAML'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=AssumeRoleWithSAML']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=AssumeRoleWithSAML']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionAssumeRoleWithSAMLQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionAssumeRoleWithSAMLQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=AssumeRoleWithSAML'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=AssumeRoleWithWebIdentity']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=AssumeRoleWithWebIdentity',
    '/#Action=AssumeRoleWithWebIdentity',
    keyArgs,
  ] as const
}

export function getActionAssumeRoleWithWebIdentityQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=AssumeRoleWithWebIdentity']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionAssumeRoleWithWebIdentityQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=AssumeRoleWithWebIdentity'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=AssumeRoleWithWebIdentity']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=AssumeRoleWithWebIdentity']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionAssumeRoleWithWebIdentityQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionAssumeRoleWithWebIdentityQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=AssumeRoleWithWebIdentity'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DecodeAuthorizationMessage']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=DecodeAuthorizationMessage',
    '/#Action=DecodeAuthorizationMessage',
    keyArgs,
  ] as const
}

export function getActionDecodeAuthorizationMessageQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DecodeAuthorizationMessage']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDecodeAuthorizationMessageQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DecodeAuthorizationMessage'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DecodeAuthorizationMessage']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DecodeAuthorizationMessage']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDecodeAuthorizationMessageQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDecodeAuthorizationMessageQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DecodeAuthorizationMessage'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=GetAccessKeyInfo']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=GetAccessKeyInfo', '/#Action=GetAccessKeyInfo', keyArgs] as const
}

export function getActionGetAccessKeyInfoQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=GetAccessKeyInfo']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionGetAccessKeyInfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=GetAccessKeyInfo'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionGetAccessKeyInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetAccessKeyInfo']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=GetAccessKeyInfo']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=GetAccessKeyInfo']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionGetAccessKeyInfoQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionGetAccessKeyInfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=GetAccessKeyInfo'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=GetCallerIdentity']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=GetCallerIdentity', '/#Action=GetCallerIdentity', keyArgs] as const
}

export function getActionGetCallerIdentityQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=GetCallerIdentity']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionGetCallerIdentityQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=GetCallerIdentity'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=GetCallerIdentity']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=GetCallerIdentity']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionGetCallerIdentityQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionGetCallerIdentityQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=GetCallerIdentity'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=GetFederationToken']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=GetFederationToken', '/#Action=GetFederationToken', keyArgs] as const
}

export function getActionGetFederationTokenQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=GetFederationToken']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionGetFederationTokenQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=GetFederationToken'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=GetFederationToken']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=GetFederationToken']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionGetFederationTokenQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionGetFederationTokenQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=GetFederationToken'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=GetSessionToken']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=GetSessionToken', '/#Action=GetSessionToken', keyArgs] as const
}

export function getActionGetSessionTokenQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=GetSessionToken']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionGetSessionTokenQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=GetSessionToken'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionGetSessionToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetSessionToken']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=GetSessionToken']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=GetSessionToken']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionGetSessionTokenQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionGetSessionTokenQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=GetSessionToken'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
