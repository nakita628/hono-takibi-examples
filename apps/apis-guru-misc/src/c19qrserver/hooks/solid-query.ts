import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/solid-query'
import type {
  UndefinedInitialDataOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/solid-query'
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

export function createPostChangePassword<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.changePassword.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.changePassword.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostChangePasswordMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostLogin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.login.$post>>>>>,
          TError,
          InferRequestType<typeof client.login.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostLoginMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostLogout<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logout.$post>>>>
          >,
          TError,
          void,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostLogoutMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostRequestPasswordReset<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.requestPasswordReset.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.requestPasswordReset.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRequestPasswordResetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostSignin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.signin.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.signin.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSigninMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSigninSigninIdQueryKey(
  args: InferRequestType<(typeof client.signin)[':signinId']['$get']>,
) {
  return ['signin', '/signin/:signinId', args] as const
}

export function getSigninSigninIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.signin)[':signinId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.signin)[':signinId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.signin)[':signinId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSigninSigninIdQueryKey>
  >({
    queryKey: getSigninSigninIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.signin[':signinId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSigninSigninId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.signin)[':signinId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.signin)[':signinId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.signin)[':signinId']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSigninSigninIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSigninSigninIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutSigninSigninId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.signin)[':signinId']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.signin)[':signinId']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutSigninSigninIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteSigninSigninId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteSigninSigninIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSigninsQueryKey(args: InferRequestType<typeof client.signins.$get>) {
  return ['signins', '/signins', args] as const
}

export function getSigninsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.signins.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.signins.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.signins.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSigninsQueryKey>
  >({
    queryKey: getSigninsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.signins.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSignins<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.signins.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.signins.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.signins.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getSigninsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSigninsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostUser<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$post>>>>>,
          TError,
          InferRequestType<typeof client.user.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUserMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getUserUserIdQueryKey(
  args: InferRequestType<(typeof client.user)[':userId']['$get']>,
) {
  return ['user', '/user/:userId', args] as const
}

export function getUserUserIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':userId']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.user)[':userId']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':userId']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUserUserIdQueryKey>
  >({
    queryKey: getUserUserIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user[':userId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createUserUserId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':userId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.user)[':userId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':userId']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUserUserIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUserUserIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createDeleteUserUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':userId']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.user)[':userId']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteUserUserIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getUsersQueryKey() {
  return ['users', '/users'] as const
}

export function getUsersQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUsersQueryKey>
  >({
    queryKey: getUsersQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.users.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createUsers<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getUsersQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPostVerifyPasswordChange<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.verifyPasswordChange.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.verifyPasswordChange.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostVerifyPasswordChangeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
