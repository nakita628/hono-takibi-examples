import {
  injectQuery,
  injectMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getApiV1UsersQueryKey(args: InferRequestType<typeof client.api.v1.users.$get>) {
  return ['api', '/api/v1/users', args] as const
}

export function getApiV1UsersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.users.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV1UsersQueryKey>
  >({
    queryKey: getApiV1UsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.users.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiV1Users<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.users.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1UsersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1UsersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostApiV1UsersMutationKey() {
  return ['api', '/api/v1/users', 'POST'] as const
}

export function getPostApiV1UsersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.users.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1UsersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.users.$post>) {
      return parseResponse(client.api.v1.users.$post(args, options))
    },
  })
}

export function injectPostApiV1Users<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.v1.users.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1UsersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiV1UsersMeQueryKey() {
  return ['api', '/api/v1/users/me'] as const
}

export function getApiV1UsersMeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.me.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.me.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1UsersMeQueryKey>
  >({
    queryKey: getApiV1UsersMeQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.users.me.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiV1UsersMe<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.me.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.me.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1UsersMeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1UsersMeQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getApiV1UsersUserIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.users)[':userId']['$get']>,
) {
  return ['api', '/api/v1/users/:userId', args] as const
}

export function getApiV1UsersUserIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.users)[':userId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.users)[':userId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.users)[':userId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1UsersUserIdQueryKey>
  >({
    queryKey: getApiV1UsersUserIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.users[':userId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1UsersUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.users)[':userId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.users)[':userId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.users)[':userId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1UsersUserIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1UsersUserIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPutApiV1UsersUserIdMutationKey() {
  return ['api', '/api/v1/users/:userId', 'PUT'] as const
}

export function getPutApiV1UsersUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.users)[':userId']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.users)[':userId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1UsersUserIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.users)[':userId']['$put']>) {
      return parseResponse(client.api.v1.users[':userId'].$put(args, options))
    },
  })
}

export function injectPutApiV1UsersUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.users)[':userId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.users)[':userId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV1UsersUserIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiV1UsersUserIdAppLinksQueryKey(
  args: InferRequestType<(typeof client.api.v1.users)[':userId']['appLinks']['$get']>,
) {
  return ['api', '/api/v1/users/:userId/appLinks', args] as const
}

export function getApiV1UsersUserIdAppLinksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.users)[':userId']['appLinks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.users)[':userId']['appLinks']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.users)[':userId']['appLinks']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1UsersUserIdAppLinksQueryKey>
  >({
    queryKey: getApiV1UsersUserIdAppLinksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.users[':userId'].appLinks.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1UsersUserIdAppLinks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.users)[':userId']['appLinks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.users)[':userId']['appLinks']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.users)[':userId']['appLinks']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1UsersUserIdAppLinksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1UsersUserIdAppLinksQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostApiV1UsersUserIdCredentialsChangePasswordMutationKey() {
  return ['api', '/api/v1/users/:userId/credentials/change_password', 'POST'] as const
}

export function getPostApiV1UsersUserIdCredentialsChangePasswordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.users)[':userId']['credentials']['change_password']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.users)[':userId']['credentials']['change_password']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1UsersUserIdCredentialsChangePasswordMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.users)[':userId']['credentials']['change_password']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.users[':userId'].credentials.change_password.$post(args, options),
      )
    },
  })
}

export function injectPostApiV1UsersUserIdCredentialsChangePassword<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.users)[':userId']['credentials']['change_password']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.users)[':userId']['credentials']['change_password']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1UsersUserIdCredentialsChangePasswordMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostApiV1UsersUserIdCredentialsChangeRecoveryQuestionMutationKey() {
  return ['api', '/api/v1/users/:userId/credentials/change_recovery_question', 'POST'] as const
}

export function getPostApiV1UsersUserIdCredentialsChangeRecoveryQuestionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.users)[':userId']['credentials']['change_recovery_question']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.users)[':userId']['credentials']['change_recovery_question']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1UsersUserIdCredentialsChangeRecoveryQuestionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.users)[':userId']['credentials']['change_recovery_question']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.users[':userId'].credentials.change_recovery_question.$post(args, options),
      )
    },
  })
}

export function injectPostApiV1UsersUserIdCredentialsChangeRecoveryQuestion<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.users)[':userId']['credentials']['change_recovery_question']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.users)[':userId']['credentials']['change_recovery_question']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostApiV1UsersUserIdCredentialsChangeRecoveryQuestionMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostApiV1UsersUserIdCredentialsForgotPasswordMutationKey() {
  return ['api', '/api/v1/users/:userId/credentials/forgot_password', 'POST'] as const
}

export function getPostApiV1UsersUserIdCredentialsForgotPasswordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.users)[':userId']['credentials']['forgot_password']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.users)[':userId']['credentials']['forgot_password']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1UsersUserIdCredentialsForgotPasswordMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.users)[':userId']['credentials']['forgot_password']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.users[':userId'].credentials.forgot_password.$post(args, options),
      )
    },
  })
}

export function injectPostApiV1UsersUserIdCredentialsForgotPassword<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.users)[':userId']['credentials']['forgot_password']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.users)[':userId']['credentials']['forgot_password']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1UsersUserIdCredentialsForgotPasswordMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiV1UsersUserIdGroupsQueryKey(
  args: InferRequestType<(typeof client.api.v1.users)[':userId']['groups']['$get']>,
) {
  return ['api', '/api/v1/users/:userId/groups', args] as const
}

export function getApiV1UsersUserIdGroupsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.users)[':userId']['groups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.users)[':userId']['groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.users)[':userId']['groups']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1UsersUserIdGroupsQueryKey>
  >({
    queryKey: getApiV1UsersUserIdGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.users[':userId'].groups.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1UsersUserIdGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.users)[':userId']['groups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.users)[':userId']['groups']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.users)[':userId']['groups']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1UsersUserIdGroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1UsersUserIdGroupsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostApiV1UsersUserIdLifecycleActivateMutationKey() {
  return ['api', '/api/v1/users/:userId/lifecycle/activate', 'POST'] as const
}

export function getPostApiV1UsersUserIdLifecycleActivateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.users)[':userId']['lifecycle']['activate']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.users)[':userId']['lifecycle']['activate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1UsersUserIdLifecycleActivateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.users)[':userId']['lifecycle']['activate']['$post']
      >,
    ) {
      return parseResponse(client.api.v1.users[':userId'].lifecycle.activate.$post(args, options))
    },
  })
}

export function injectPostApiV1UsersUserIdLifecycleActivate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.users)[':userId']['lifecycle']['activate']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.users)[':userId']['lifecycle']['activate']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1UsersUserIdLifecycleActivateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostApiV1UsersUserIdLifecycleDeactivateMutationKey() {
  return ['api', '/api/v1/users/:userId/lifecycle/deactivate', 'POST'] as const
}

export function getPostApiV1UsersUserIdLifecycleDeactivateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.users)[':userId']['lifecycle']['deactivate']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.users)[':userId']['lifecycle']['deactivate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1UsersUserIdLifecycleDeactivateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.users)[':userId']['lifecycle']['deactivate']['$post']
      >,
    ) {
      return parseResponse(client.api.v1.users[':userId'].lifecycle.deactivate.$post(args, options))
    },
  })
}

export function injectPostApiV1UsersUserIdLifecycleDeactivate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.users)[':userId']['lifecycle']['deactivate']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.users)[':userId']['lifecycle']['deactivate']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1UsersUserIdLifecycleDeactivateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostApiV1UsersUserIdLifecycleExpirePasswordMutationKey() {
  return ['api', '/api/v1/users/:userId/lifecycle/expire_password', 'POST'] as const
}

export function getPostApiV1UsersUserIdLifecycleExpirePasswordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.users)[':userId']['lifecycle']['expire_password']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.users)[':userId']['lifecycle']['expire_password']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1UsersUserIdLifecycleExpirePasswordMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.users)[':userId']['lifecycle']['expire_password']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.users[':userId'].lifecycle.expire_password.$post(args, options),
      )
    },
  })
}

export function injectPostApiV1UsersUserIdLifecycleExpirePassword<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.users)[':userId']['lifecycle']['expire_password']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.users)[':userId']['lifecycle']['expire_password']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1UsersUserIdLifecycleExpirePasswordMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostApiV1UsersUserIdLifecycleResetFactorsMutationKey() {
  return ['api', '/api/v1/users/:userId/lifecycle/reset_factors', 'POST'] as const
}

export function getPostApiV1UsersUserIdLifecycleResetFactorsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.users)[':userId']['lifecycle']['reset_factors']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.users)[':userId']['lifecycle']['reset_factors']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1UsersUserIdLifecycleResetFactorsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.users)[':userId']['lifecycle']['reset_factors']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.users[':userId'].lifecycle.reset_factors.$post(args, options),
      )
    },
  })
}

export function injectPostApiV1UsersUserIdLifecycleResetFactors<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.users)[':userId']['lifecycle']['reset_factors']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.users)[':userId']['lifecycle']['reset_factors']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1UsersUserIdLifecycleResetFactorsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostApiV1UsersUserIdLifecycleResetPasswordMutationKey() {
  return ['api', '/api/v1/users/:userId/lifecycle/reset_password', 'POST'] as const
}

export function getPostApiV1UsersUserIdLifecycleResetPasswordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.users)[':userId']['lifecycle']['reset_password']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.users)[':userId']['lifecycle']['reset_password']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1UsersUserIdLifecycleResetPasswordMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.users)[':userId']['lifecycle']['reset_password']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.users[':userId'].lifecycle.reset_password.$post(args, options),
      )
    },
  })
}

export function injectPostApiV1UsersUserIdLifecycleResetPassword<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.users)[':userId']['lifecycle']['reset_password']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.users)[':userId']['lifecycle']['reset_password']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1UsersUserIdLifecycleResetPasswordMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostApiV1UsersUserIdLifecycleSuspendMutationKey() {
  return ['api', '/api/v1/users/:userId/lifecycle/suspend', 'POST'] as const
}

export function getPostApiV1UsersUserIdLifecycleSuspendMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.users)[':userId']['lifecycle']['suspend']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.users)[':userId']['lifecycle']['suspend']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1UsersUserIdLifecycleSuspendMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.users)[':userId']['lifecycle']['suspend']['$post']
      >,
    ) {
      return parseResponse(client.api.v1.users[':userId'].lifecycle.suspend.$post(args, options))
    },
  })
}

export function injectPostApiV1UsersUserIdLifecycleSuspend<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.users)[':userId']['lifecycle']['suspend']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.users)[':userId']['lifecycle']['suspend']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1UsersUserIdLifecycleSuspendMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostApiV1UsersUserIdLifecycleUnlockMutationKey() {
  return ['api', '/api/v1/users/:userId/lifecycle/unlock', 'POST'] as const
}

export function getPostApiV1UsersUserIdLifecycleUnlockMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.users)[':userId']['lifecycle']['unlock']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.users)[':userId']['lifecycle']['unlock']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1UsersUserIdLifecycleUnlockMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.users)[':userId']['lifecycle']['unlock']['$post']
      >,
    ) {
      return parseResponse(client.api.v1.users[':userId'].lifecycle.unlock.$post(args, options))
    },
  })
}

export function injectPostApiV1UsersUserIdLifecycleUnlock<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.users)[':userId']['lifecycle']['unlock']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.users)[':userId']['lifecycle']['unlock']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1UsersUserIdLifecycleUnlockMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostApiV1UsersUserIdLifecycleUnsuspendMutationKey() {
  return ['api', '/api/v1/users/:userId/lifecycle/unsuspend', 'POST'] as const
}

export function getPostApiV1UsersUserIdLifecycleUnsuspendMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.users)[':userId']['lifecycle']['unsuspend']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.users)[':userId']['lifecycle']['unsuspend']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1UsersUserIdLifecycleUnsuspendMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.users)[':userId']['lifecycle']['unsuspend']['$post']
      >,
    ) {
      return parseResponse(client.api.v1.users[':userId'].lifecycle.unsuspend.$post(args, options))
    },
  })
}

export function injectPostApiV1UsersUserIdLifecycleUnsuspend<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.users)[':userId']['lifecycle']['unsuspend']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.users)[':userId']['lifecycle']['unsuspend']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1UsersUserIdLifecycleUnsuspendMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteApiV1UsersUserIdSessionsMutationKey() {
  return ['api', '/api/v1/users/:userId/sessions', 'DELETE'] as const
}

export function getDeleteApiV1UsersUserIdSessionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.users)[':userId']['sessions']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.users)[':userId']['sessions']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1UsersUserIdSessionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.users)[':userId']['sessions']['$delete']>,
    ) {
      return parseResponse(client.api.v1.users[':userId'].sessions.$delete(args, options))
    },
  })
}

export function injectDeleteApiV1UsersUserIdSessions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.users)[':userId']['sessions']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.users)[':userId']['sessions']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV1UsersUserIdSessionsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
