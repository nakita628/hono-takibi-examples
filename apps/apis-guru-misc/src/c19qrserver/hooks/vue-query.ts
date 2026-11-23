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

export function getChangePasswordKey() {
  return ['changePassword'] as const
}

export function getLoginKey() {
  return ['login'] as const
}

export function getLogoutKey() {
  return ['logout'] as const
}

export function getRequestPasswordResetKey() {
  return ['requestPasswordReset'] as const
}

export function getSigninKey() {
  return ['signin'] as const
}

export function getSigninsKey() {
  return ['signins'] as const
}

export function getUserKey() {
  return ['user'] as const
}

export function getUsersKey() {
  return ['users'] as const
}

export function getVerifyPasswordChangeKey() {
  return ['verifyPasswordChange'] as const
}

export function getPostChangePasswordMutationKey() {
  return ['changePassword', '/changePassword', 'POST'] as const
}

export function getPostChangePasswordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.changePassword.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.changePassword.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostChangePasswordMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.changePassword.$post>) {
      return parseResponse(client.changePassword.$post(args, options))
    },
  })
}

export function usePostChangePassword<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.changePassword.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.changePassword.$post>,
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
  const mutationDefaults = getPostChangePasswordMutationOptions<TError, TOnMutateResult>(
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

export function getPostLoginMutationKey() {
  return ['login', '/login', 'POST'] as const
}

export function getPostLoginMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.login.$post>>>>>,
    TError,
    InferRequestType<typeof client.login.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLoginMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.login.$post>) {
      return parseResponse(client.login.$post(args, options))
    },
  })
}

export function usePostLogin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.login.$post>>>>>,
          TError,
          InferRequestType<typeof client.login.$post>,
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
  const mutationDefaults = getPostLoginMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostLogoutMutationKey() {
  return ['logout', '/logout', 'POST'] as const
}

export function getPostLogoutMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logout.$post>>>>>,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostLogoutMutationKey(),
    async mutationFn() {
      return parseResponse(client.logout.$post(undefined, options))
    },
  })
}

export function usePostLogout<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logout.$post>>>>
          >,
          TError,
          void,
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
  const mutationDefaults = getPostLogoutMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostRequestPasswordResetMutationKey() {
  return ['requestPasswordReset', '/requestPasswordReset', 'POST'] as const
}

export function getPostRequestPasswordResetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.requestPasswordReset.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.requestPasswordReset.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRequestPasswordResetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.requestPasswordReset.$post>) {
      return parseResponse(client.requestPasswordReset.$post(args, options))
    },
  })
}

export function usePostRequestPasswordReset<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.requestPasswordReset.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.requestPasswordReset.$post>,
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
  const mutationDefaults = getPostRequestPasswordResetMutationOptions<TError, TOnMutateResult>(
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

export function getPostSigninMutationKey() {
  return ['signin', '/signin', 'POST'] as const
}

export function getPostSigninMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.signin.$post>>>>>,
    TError,
    InferRequestType<typeof client.signin.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSigninMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.signin.$post>) {
      return parseResponse(client.signin.$post(args, options))
    },
  })
}

export function usePostSignin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.signin.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.signin.$post>,
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
  const mutationDefaults = getPostSigninMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSigninSigninIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.signin)[':signinId']['$get']>>,
) {
  return ['signin', '/signin/:signinId', toValue(args)] as const
}

export function getSigninSigninIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.signin)[':signinId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSigninSigninIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.signin[':signinId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSigninSigninId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.signin)[':signinId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.signin)[':signinId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.signin)[':signinId']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.signin)[':signinId']['$get']>>>
            >
          >,
          ReturnType<typeof getSigninSigninIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.signin)[':signinId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSigninSigninIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSigninSigninIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.signin[':signinId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutSigninSigninIdMutationKey() {
  return ['signin', '/signin/:signinId', 'PUT'] as const
}

export function getPutSigninSigninIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.signin)[':signinId']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.signin)[':signinId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSigninSigninIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.signin)[':signinId']['$put']>) {
      return parseResponse(client.signin[':signinId'].$put(args, options))
    },
  })
}

export function usePutSigninSigninId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.signin)[':signinId']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.signin)[':signinId']['$put']>,
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
  const mutationDefaults = getPutSigninSigninIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteSigninSigninIdMutationKey() {
  return ['signin', '/signin/:signinId', 'DELETE'] as const
}

export function getDeleteSigninSigninIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.signin)[':signinId']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.signin)[':signinId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSigninSigninIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.signin)[':signinId']['$delete']>) {
      return parseResponse(client.signin[':signinId'].$delete(args, options))
    },
  })
}

export function useDeleteSigninSigninId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.signin)[':signinId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.signin)[':signinId']['$delete']>,
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
  const mutationDefaults = getDeleteSigninSigninIdMutationOptions<TError, TOnMutateResult>(
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

export function getSigninsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.signins.$get>>,
) {
  return ['signins', '/signins', toValue(args)] as const
}

export function getSigninsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.signins.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSigninsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.signins.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSignins<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.signins.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.signins.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.signins.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.signins.$get>>>>
          >,
          ReturnType<typeof getSigninsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.signins.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSigninsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSigninsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.signins.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostUserMutationKey() {
  return ['user', '/user', 'POST'] as const
}

export function getPostUserMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$post>>>>>,
    TError,
    InferRequestType<typeof client.user.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUserMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.user.$post>) {
      return parseResponse(client.user.$post(args, options))
    },
  })
}

export function usePostUser<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$post>>>>>,
          TError,
          InferRequestType<typeof client.user.$post>,
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
  const mutationDefaults = getPostUserMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getUserUserIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.user)[':userId']['$get']>>,
) {
  return ['user', '/user/:userId', toValue(args)] as const
}

export function getUserUserIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.user)[':userId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserUserIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user[':userId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUserUserId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':userId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.user)[':userId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':userId']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':userId']['$get']>>>
            >
          >,
          ReturnType<typeof getUserUserIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':userId']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUserUserIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserUserIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.user[':userId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteUserUserIdMutationKey() {
  return ['user', '/user/:userId', 'DELETE'] as const
}

export function getDeleteUserUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':userId']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.user)[':userId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUserUserIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.user)[':userId']['$delete']>) {
      return parseResponse(client.user[':userId'].$delete(args, options))
    },
  })
}

export function useDeleteUserUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':userId']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.user)[':userId']['$delete']>,
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
  const mutationDefaults = getDeleteUserUserIdMutationOptions<TError, TOnMutateResult>(
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

export function getUsersQueryKey() {
  return ['users', '/users'] as const
}

export function getUsersQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getUsersQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useUsers<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
          ReturnType<typeof getUsersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getUsersQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.users.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostVerifyPasswordChangeMutationKey() {
  return ['verifyPasswordChange', '/verifyPasswordChange', 'POST'] as const
}

export function getPostVerifyPasswordChangeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.verifyPasswordChange.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.verifyPasswordChange.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostVerifyPasswordChangeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.verifyPasswordChange.$post>) {
      return parseResponse(client.verifyPasswordChange.$post(args, options))
    },
  })
}

export function usePostVerifyPasswordChange<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.verifyPasswordChange.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.verifyPasswordChange.$post>,
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
  const mutationDefaults = getPostVerifyPasswordChangeMutationOptions<TError, TOnMutateResult>(
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
